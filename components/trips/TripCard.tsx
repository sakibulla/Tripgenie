import Link from "next/link";

export default function TripCard({ trip }: any) {
    return (
        <div className="border rounded-xl overflow-hidden shadow-sm">

            <img
                src={trip.image}
                alt={trip.title}
                className="h-48 w-full object-cover"
            />

            <div className="p-4 space-y-2">

                <h3 className="text-lg font-semibold">
                    {trip.title}
                </h3>

                <p className="text-gray-500 text-sm">
                    {trip.location}
                </p>

                <div className="flex justify-between text-sm">
                    <span>⭐ {trip.rating}</span>
                    <span>${trip.price}</span>
                </div>

                <Link
                    href={`/trips/${trip.id}`}
                    className="block mt-3 bg-blue-600 text-white text-center py-2 rounded"
                >
                    View Details
                </Link>

            </div>
        </div>
    );
}