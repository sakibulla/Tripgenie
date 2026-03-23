import clientPromise from "@/lib/mongodb";

const sampleTrips = [
    {
        id: 1,
        title: "Bali Beach Escape",
        location: "Indonesia",
        price: 900,
        rating: 4.8,
        image: "/bali.jpg",
        category: "Beach",
    },
    {
        id: 2,
        title: "Paris City Tour",
        location: "France",
        price: 1200,
        rating: 4.7,
        image: "/paris.jpg",
        category: "City",
    },
    {
        id: 3,
        title: "Dubai Luxury Trip",
        location: "UAE",
        price: 1500,
        rating: 4.6,
        image: "/dubai.jpg",
        category: "Luxury",
    },
    {
        id: 4,
        title: "Maldives Island Vacation",
        location: "Maldives",
        price: 2000,
        rating: 4.9,
        image: "/maldives.jpg",
        category: "Beach",
    },
];

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("tripgenie");

        let trips = await db
            .collection("trips")
            .find({})
            .toArray();

        if (trips.length === 0) {
            // Seed the database with sample data
            await db.collection("trips").insertMany(sampleTrips);
            trips = sampleTrips;
        }

        return Response.json(trips);
    } catch (error) {
        console.error("GET /trips error:", error);
        return new Response("Failed to fetch trips", { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const client = await clientPromise;
        const db = client.db("tripgenie");

        const body = await req.json();

        // ✅ Basic validation (VERY important)
        if (!body || !body.title) {
            return new Response("Invalid data", { status: 400 });
        }

        const result = await db.collection("trips").insertOne(body);

        return Response.json({
            success: true,
            insertedId: result.insertedId,
        });
    } catch (error) {
        console.error("POST /trips error:", error);
        return new Response("Failed to create trip", { status: 500 });
    }
}