export default function Stats() {
    const stats = [
        { label: "Happy Travelers", value: "10K+" },
        { label: "Destinations", value: "200+" },
        { label: "Trips Booked", value: "15K+" },
        { label: "Travel Guides", value: "50+" },
    ];

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
                {stats.map((s, i) => (
                    <div key={i}>
                        <h3 className="text-3xl font-bold">{s.value}</h3>
                        <p className="text-gray-500">{s.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}