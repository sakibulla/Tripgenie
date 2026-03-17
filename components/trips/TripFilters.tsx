"use client";

export default function TripFilters({
    search,
    setSearch,
    category,
    setCategory,
    sort,
    setSort,
}: any) {
    return (
        <div className="flex flex-wrap gap-4 mb-8">

            <input
                type="text"
                placeholder="Search trips..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border px-4 py-2 rounded"
            />

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border px-4 py-2 rounded"
            >
                <option value="">All Categories</option>
                <option value="Beach">Beach</option>
                <option value="City">City</option>
                <option value="Luxury">Luxury</option>
            </select>

            <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border px-4 py-2 rounded"
            >
                <option value="">Sort</option>
                <option value="price">Price Low → High</option>
                <option value="rating">Rating</option>
            </select>

        </div>
    );
}