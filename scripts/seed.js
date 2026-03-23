import clientPromise from "../lib/mongodb.js";
import { trips } from "../data/trips.js";

async function seedDatabase() {
    try {
        const client = await clientPromise;
        const db = client.db("tripgenie");

        const existingTrips = await db.collection("trips").countDocuments();
        if (existingTrips > 0) {
            console.log("Database already seeded");
            return;
        }

        await db.collection("trips").insertMany(trips);
        console.log("Database seeded successfully");
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        process.exit(0);
    }
}

seedDatabase();