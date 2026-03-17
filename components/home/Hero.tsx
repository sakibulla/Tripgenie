export default function Hero() {
    return (
        <section className="h-[65vh] flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="text-center max-w-2xl">
                <h1 className="text-5xl font-bold">
                    Discover Your Next Adventure
                </h1>

                <p className="mt-4 text-gray-500">
                    Explore amazing travel destinations with AI-powered recommendations.
                </p>

                <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg">
                    Explore Trips
                </button>
            </div>
        </section>
    );
}