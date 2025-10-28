import Button from "../common/Button";

function Projects() {
    return (
        <section className="container mx-auto py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <h3 className="text-3xl font-bold text-blue-950 md:text-4xl mb-10">Our Projects</h3>
                    <p className="text-lg mb-8 md:text-xl">Checkout our most elegant designs that are both complete and ongoing</p>
                    <Button variant="primary" size="sm">Check All</Button>
                </div>

                <div>
                    <img src="/collaboration.png" alt="completed bulifing" className="w-full h-auto rounded-2xl" />
                    <h3 className="teext-3xl mt-3 font-bold text-gray-900 ">Completed</h3>

                </div>

                <div>
                    <img src="/collaboration.png" alt="completed bulifing" className="w-full h-auto rounded-2xl" />
                    <h3 className="teext-3xl mt-3 font-bold text-gray-900">Ongoing</h3>

                </div>

                <div>
                    <img src="/collaboration.png" alt="completed bulifing" className="w-full h-auto rounded-2xl" />
                    <h3 className="teext-3xl mt-3 font-bold text-gray-900">Completed</h3>

                </div>

            </div>
        </section>
    )
}

export default Projects