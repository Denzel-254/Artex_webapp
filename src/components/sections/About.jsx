import { FaCheckCircle } from "react-icons/fa";

function About() {
    return (
        <section className="contaner mx-auto py-5 px-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden mx-auto">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-blue-950 mb-10">Crafting Architectural Excellence Since 2018</h2>
                    <h3 className="text-2xl text-gray-900 font-medium mb-8">Our Mission: To transform human experience through intentional,
                        beautiful, and functional architecture that stands as testament to both art and engineering.</h3>
                    <p className="text-lg text-gray-700">Over the years, we've cultivated a reputation for designs
                        that don't just look impressive in portfolios—they work beautifully
                        in daily life. Our team brings together diverse expertise in sustainable
                        design, historical preservation, urban planning, and interior architecture,
                        allowing us to approach each project with fresh perspective and deep technical knowledge.
                    </p>

                </div>

                <div>
                    <img src="/background 2.jpg" alt="collaboration photo" className="w-full h-auto object-cover rounded-2xl" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto my-8">
                <div>
                    <h2 className="text-4xl font-bold text-blue-950 mb-10">Our Story</h2>
                    <p className="text-lg text-gray-700">Artex Architecture emerged from a vision to bridge
                        the gap between architectural artistry and practical functionality.
                        Founded by Michael Chen, an architect with 15 years of experience in
                        both boutique residential and large-scale commercial projects, our
                        practice was built on the principle that great architecture serves both the eye and the experience.
                    </p>
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-blue-950 mb-10">Why Choose Artex</h2>
                    <ul className="mt-9 space-y-4 text-gray-700">
                        <li className="text-lg flex items-start  gap-4 mb-2 "> <FaCheckCircle className="text-blue-950 text-lg mr-2" />Holistic Approach: We consider every aspect of your project.</li>
                        <li className="text-lg flex items-start  gap-4 mb-2 "><FaCheckCircle className="text-blue-950 text-lg mr-2" />Collaborative Process: You're involved at every stage.</li >
                        <li className="text-lg flex items-start  gap-4 mb-2 "><FaCheckCircle className="text-blue-950 text-lg mr-2" />Technical Excellence: Our designs are  efficient and compliant</li>
                        <li className="text-lg flex items-start  gap-4 mb-2 "><FaCheckCircle className="text-blue-950 text-lg mr-2" /> Long-term Perspective: We create architecture that  serves generations</li>
                    </ul>

                </div>
            </div>

        </section>
    )
}


export default About