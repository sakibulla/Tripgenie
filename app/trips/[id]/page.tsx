import { notFound } from 'next/navigation';
import clientPromise from '@/lib/mongodb';
import { Trip } from '@/types/trip';
import { ObjectId } from 'mongodb';

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function TripDetailsPage({ params }: PageProps) {
    const { id } = await params;

    try {
        const client = await clientPromise;
        const db = client.db("tripgenie");

        const trip = await db.collection("trips").findOne({ _id: new ObjectId(id) }) as Trip | null;

        if (!trip) {
            notFound();
        }

        return (
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <img
                                src={trip.image}
                                alt={trip.title}
                                className="w-full h-96 object-cover rounded-lg"
                            />
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold">{trip.title}</h1>
                            <p className="text-gray-600">{trip.location}</p>
                            <div className="flex items-center space-x-4">
                                <span className="text-2xl font-semibold">${trip.price}</span>
                                <span className="text-yellow-500">⭐ {trip.rating}</span>
                            </div>
                            <p className="text-sm text-gray-500">{trip.category}</p>
                            {trip.description && (
                                <p className="text-gray-700">{trip.description}</p>
                            )}
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                                Book Now
                            </button>
                        </div>
                    </div>
                    {trip.itinerary && trip.itinerary.length > 0 && (
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
                            <ul className="list-disc list-inside space-y-2">
                                {trip.itinerary.map((item, index) => (
                                    <li key={index} className="text-gray-700">{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error fetching trip:", error);
        notFound();
    }
}