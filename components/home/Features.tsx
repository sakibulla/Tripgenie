export default function Features() {
    const features = [
        { title: "AI Travel Suggestions", desc: "Get destinations based on your preferences." },
        { title: "Easy Booking", desc: "Book trips quickly with a seamless process." },
        { title: "Best Prices", desc: "Compare prices and find the best travel deals." },
    ];

    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                {features.map((f, i) => (
                    <div key={i} className="p-6 border rounded-xl text-center">
                        <h3 className="text-xl font-semibold">{f.title}</h3>
                        <p className="text-gray-500 mt-2">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}