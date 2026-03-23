import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
    try {
        const client = await clientPromise;
        const db = client.db("tripgenie");

        const { name, email, password } = await req.json();

        // check if user exists
        const existingUser = await db
            .collection("users")
            .findOne({ email });

        if (existingUser) {
            return Response.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // insert user
        await db.collection("users").insertOne({
            name,
            email,
            password: hashedPassword,
            createdAt: new Date(),
        });

        return Response.json({ message: "User created" });

    } catch (error) {
        return Response.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}