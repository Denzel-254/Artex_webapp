import { FaBuilding, FaMapMarkerAlt, FaDollarSign, FaHeart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Card({ projectName, location, cost, image }) {
    return (
        <section className="container mx-auto p-2">


            <div >

                <div className="overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                        <img
                            src={image}
                            alt={projectName}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-2 ">
                        <p className="flex items-center gap-2 text-gray-500"><FaBuilding className="text-blue-950" /> Project: {projectName}</p>
                        <p className="flex items-center gap-2 text-gray-500"><FaMapMarkerAlt className="text-blue-950" /> Location: {location}</p>
                        <p className="flex items-center gap-2 text-gray-500"><FaDollarSign className="text-blue-950" /> Cost: {cost}</p>
                        <div className="flex items-center gap-1 text-yellow-500">

                            <div className="flex items-center justify-end mt-2 text-yellow-500">
                                <p className="font-medium">Rating:</p>
                                <FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar />
                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </section>

    )
}


export default Card