export default function DashboardPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">
                Dashboard Overview
            </h1>

            <div className="grid md:grid-cols-3 gap-6">

                <div className="p-6 border rounded-xl">
                    <h3>Total Bookings</h3>
                    <p className="text-2xl font-bold">12</p>
                </div>

                <div className="p-6 border rounded-xl">
                    <h3>Reviews</h3>
                    <p className="text-2xl font-bold">5</p>
                </div>

                <div className="p-6 border rounded-xl">
                    <h3>Upcoming Trips</h3>
                    <p className="text-2xl font-bold">2</p>
                </div>

            </div>
        </div>
    );
}