import { FaBuilding, FaMapMarkerAlt, FaDollarSign, FaHeart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Showcase() {
    return (
        <section className="container mx-auto p-2">
            <div className="text-center">
                <h1 className="text-center mb-5 font-bold text-blue-950 text-3xl md:4xl">All projects</h1>
                <p className="text-lg text-grey-700  mb-5 mx-auto md:w-150">Over the years, we've cultivated a reputation for designs
                    that don't just look impressive in but also work beautifully
                    in daily life.</p>
            </div>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                <div className="overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                        <img
                            src="/complete1.png"
                            alt="completed building"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-2 ">
                        <p className="flex items-center gap-2 text-gray-500"><FaBuilding className="text-blue-950" /> Project: Hyundai Towers</p>
                        <p className="flex items-center gap-2 text-gray-500"><FaMapMarkerAlt className="text-blue-950" /> Location: China</p>
                        <p className="flex items-center gap-2 text-gray-500"><FaDollarSign className="text-blue-950" /> Cost: $100,000</p>
                        <div className="flex items-center gap-1 text-yellow-500">

                            <div className="flex items-center justify-end mt-2 text-yellow-500">
                                <p className="font-medium">Rating:</p>
                                <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
                            </div>

                        </div>

                    </div>
                </div>


                <div className="overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                        <img
                            src="/complete1.png"
                            alt="completed building"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-2">
                        <p>Name: Hyundai</p>
                        <p>City: China</p>
                        <p>Cost: $100,000</p>
                    </div>
                </div>


                <div className="overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                        <img
                            src="/complete1.png"
                            alt="completed building"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-2">
                        <p>Name: Hyundai</p>
                        <p>City: China</p>
                        <p>Cost: $100,000</p>
                    </div>
                </div>


                <div className="overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                        <img
                            src="/complete1.png"
                            alt="completed building"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-2">
                        <p>Name: Hyundai</p>
                        <p>City: China</p>
                        <p>Cost: $100,000</p>
                    </div>
                </div>


                <div className="overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                        <img
                            src="/complete1.png"
                            alt="completed building"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-2">
                        <p>Name: Hyundai</p>
                        <p>City: China</p>
                        <p>Cost: $100,000</p>
                    </div>
                </div>


                <div className="overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                        <img
                            src="/complete1.png"
                            alt="completed building"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-2">
                        <p>Name: Hyundai</p>
                        <p>City: China</p>
                        <p>Cost: $100,000</p>
                    </div>
                </div>


                <div className="overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                        <img
                            src="/complete1.png"
                            alt="completed building"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-2">
                        <p>Name: Hyundai</p>
                        <p>City: China</p>
                        <p>Cost: $100,000</p>
                    </div>
                </div>


                <div className="overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                        <img
                            src="/complete1.png"
                            alt="completed building"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-2">
                        <p>Name: Hyundai</p>
                        <p>City: China</p>
                        <p>Cost: $100,000</p>
                    </div>
                </div>


            </div>
        </section>

    )
}


export default Showcase