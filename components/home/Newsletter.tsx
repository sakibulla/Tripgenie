export default function Newsletter() {
    return (
        <section className="py-20 bg-blue-600 text-white text-center">
            <h2 className="text-3xl font-bold">
                Get Travel Deals in Your Inbox
            </h2>

            <div className="mt-6 flex justify-center gap-2">
                <input
                    className="px-4 py-2 rounded text-black"
                    placeholder="Enter your email"
                />
                <button className="bg-black px-6 py-2 rounded">
                    Subscribe
                </button>
            </div>
        </section>
    );
}