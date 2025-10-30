import Button from "../common/Button";

function Projects() {
    return (
        <section className="container mx-auto py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <h3 className="text-3xl font-bold text-blue-950 md:text-4xl mb-10">Our Services</h3>
                    <p className="text-lg mb-8 md:text-xl">Checkout our Our architectural
                        services that transforms abstract ideas into concrete and buildable plans. </p>
                    <Button variant="primary" size="sm">Check All</Button>
                </div>

                <div>
                    <img src="/collaboration.png" alt="completed bulifing" className="w-full h-auto rounded-2xl" />
                    <h3 className="text-2xl mt-3 font-bold text-gray-900 ">Design Collaboration</h3>

                </div>

                <div>
                    <img src="/collaboration.png" alt="completed bulifing" className="w-full h-auto rounded-2xl" />
                    <h3 className="text-2xl mt-3 font-bold text-gray-900">Project Management</h3>

                </div>

                <div>
                    <img src="/collaboration.png" alt="completed bulifing" className="w-full h-auto rounded-2xl" />
                    <h3 className="text-2xl mt-3 font-bold text-gray-900">Project Execution</h3>

                </div>

            </div>
        </section>
    )
}

export default Projects