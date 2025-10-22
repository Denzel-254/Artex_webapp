function Stats() {
    return (
        <div className="grid grid-cols-1 p-8 rounded-3xl bg-blue-950 divide-y divide-orange-500 md:divide-y-0 md:divide-x md:divide-orange-500 md:grid-cols-3 gap-8 text-center">
            <div className="py-4">
                <h1 className="text-3xl font-bold text-orange-500">100+</h1>
                <p className="text-gray-100">Projects Completed</p>
            </div>
            <div className="py-4">
                <h1 className="text-3xl font-bold text-orange-500">50+</h1>
                <p className="text-gray-100">Ongoing Projects</p>
            </div>
            <div className="py-4">
                <h1 className="text-3xl font-bold text-orange-500">10+</h1>
                <p className="text-gray-100">Awards Won</p>
            </div>
        </div>
    )
}

export default Stats;