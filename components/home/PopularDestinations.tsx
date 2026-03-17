export default function PopularDestinations() {
    const destinations = [
        "Bali",
        "Paris",
        "Dubai",
        "Maldives",
    ];

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">
                    Popular Destinations
                </h2>

                <div className="grid md:grid-cols-4 gap-6">
                    {destinations.map((place, i) => (
                        <div
                            key={i}
                            className="h-40 flex items-center justify-center border rounded-xl"
                        >
                            {place}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}