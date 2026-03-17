"use client";

import { useState } from "react";
import { trips } from "@/data/trips";
import TripCard from "@/components/trips/TripCard";
import TripFilters from "@/components/trips/TripFilters";

export default function ExplorePage() {

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [sort, setSort] = useState("");

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

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                {filteredTrips.map((trip) => (
                    <TripCard key={trip.id} trip={trip} />
                ))}

            </div>

        </div>
    );
}