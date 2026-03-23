import { MongoClient } from "mongodb";
import dns from "dns";

const uri = process.env.MONGODB_URI || process.env.URI;

if (!uri) {
    throw new Error("Please define the MONGODB_URI (or URI) environment variable inside .env.local");
}

async function resolveSrvUri(src: string): Promise<string> {
    if (!src.startsWith("mongodb+srv://")) {
        return src;
    }

    const url = new URL(src);
    const host = url.hostname;
    const database = url.pathname && url.pathname !== "/" ? url.pathname.slice(1) : "";

    const resolver = new dns.promises.Resolver();
    resolver.setServers(["8.8.8.8", "1.1.1.1"]);

    const srvRecords = await resolver.resolveSrv(`_mongodb._tcp.${host}`);
    const hosts = srvRecords.map((r) => `${r.name}:${r.port}`).join(",");

    const params = new URLSearchParams(url.searchParams);

    // The MongoDB driver requires `directConnection=true` only when connecting to a
    // single host. For replica sets (multiple hosts), remove it if present.
    const shouldSetDirectConnection = hosts.split(",").length === 1;
    if (shouldSetDirectConnection) {
        params.set("directConnection", "true");
    } else {
        params.delete("directConnection");
    }

    // Atlas requires TLS/SSL; ensure we connect securely when converting SRV.
    if (!params.has("tls") && !params.has("ssl")) {
        params.set("tls", "true");
    }

    // MongoDB Atlas expects retryWrites enabled by default.
    if (!params.has("retryWrites")) {
        params.set("retryWrites", "true");
    }
    if (!params.has("w")) {
        params.set("w", "majority");
    }

    const auth = url.username ? `${url.username}:${url.password}@` : "";
    const base = `mongodb://${auth}${hosts}`;
    const suffix = database ? `/${database}` : "";
    const query = params.toString();

    return query ? `${base}${suffix}?${query}` : `${base}${suffix}`;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
    var _mongoClientPromise: Promise<MongoClient>;
}

if (!global._mongoClientPromise) {
    global._mongoClientPromise = (async () => {
        const resolvedUri = await resolveSrvUri(uri).catch((err) => {
            console.warn("[mongodb] Failed to resolve SRV URI, falling back to original URI:", err);
            return uri;
        });
        const client = new MongoClient(resolvedUri, { family: 4 });
        return client.connect();
    })();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;