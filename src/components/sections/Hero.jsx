import Button from "../common/Button";
import { Link } from "react-router-dom";


function Hero() {
    return (
        <section id="hero" className=" text-center flex items-center justify-center" style={{
            backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.85), rgba(30, 64, 175, 0.7)), url('/background 2.jpg')`,
            backgroundBlendMode: 'multiply',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
        }}>
            <main className="container mx-auto px-4 py-20">
                <div className=" text-center p-4 flex flex-col justify-center items-center relative">
                    <h1 className="text-5xl mx-auto font-bold w-full mb-4 text-white md:text-6xl md:w-200">Transforming Visions into Architectural Masterpieces</h1>
                    <p className="text-xl hidden text-gray-100  mx-auto md:block md:w-150">At Artex, we bridge the gap between your aspirations and
                        architectural reality. Our design-first approach combines
                        artistic vision with engineering precision to create spaces
                        that exceed expectations.
                    </p>

                    <div className=" mt-8">

                        <Link to="/signup">
                            <Button variant="outline" size="lg" className="cursor-pointer">
                                Sign Up Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>

        </section>
    )
}

export default Hero;