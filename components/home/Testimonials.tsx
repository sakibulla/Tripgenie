export default function Testimonials() {
    const reviews = [
        "Amazing travel experience!",
        "Best booking platform ever.",
        "The AI suggestions were perfect.",
    ];

    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-bold">What Travelers Say</h2>

                {reviews.map((review, i) => (
                    <p key={i} className="text-gray-500">
                        `{review}`
                    </p>
                ))}
            </div>
        </section>
    );
}