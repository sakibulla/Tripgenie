export default function Categories() {
    const categories = [
        "Beach",
        "Adventure",
        "Luxury",
        "City Tours",
    ];

    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
                {categories.map((cat, i) => (
                    <div
                        key={i}
                        className="p-8 border rounded-xl text-center"
                    >
                        {cat}
                    </div>
                ))}
            </div>
        </section>
    );
}