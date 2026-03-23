"use client";

import { useEffect, useState } from "react";
import TripCard from "@/components/trips/TripCard";
import TripFilters from "@/components/trips/TripFilters";

export default function ExplorePage() {
    const [trips, setTrips] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [sort, setSort] = useState("");

    useEffect(() => {
        fetch("/api/trips")
            .then((res) => res.json())
            .then((data) => {
                setTrips(data);
                setLoading(false);
            });
    }, []);

    let filteredTrips = trips.filter((trip) =>
        trip.title.toLowerCase().includes(search.toLowerCase())
    );

    if (category) {
        filteredTrips = filteredTrips.filter(
            (trip) => trip.category === category
        );
    }

    if (sort === "price") {
        filteredTrips.sort((a, b) => a.price - b.price);
    }

    if (sort === "rating") {
        filteredTrips.sort((a, b) => b.rating - a.rating);
    }

    return (
        <div className="max-w-7xl mx-auto py-16 px-6">
            <h1 className="text-4xl font-bold mb-8">
                Explore Trips
            </h1>

            <TripFilters
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                sort={sort}
                setSort={setSort}
            />

            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {filteredTrips.map((trip) => (
                        <TripCard key={trip._id} trip={trip} />
                    ))}
                </div>
            )}
        </div>
    );
}