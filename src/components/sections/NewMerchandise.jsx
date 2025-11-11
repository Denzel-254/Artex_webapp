import Button from "../common/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";

function NewMerchandise() {
    // Merchandise items for the slider
    const newMerchandise = [
        {
            id: 1,
            image: "/smartwatch.png",
            title: "Artex Smart Watch",
        },
        {
            id: 2,
            image: "/tshirt.png",
            title: "Artex T-Shirt",
        },
        {
            id: 3,
            image: "/laptopbag.png",
            title: "Artex Laptop Bag",
        },
        {
            id: 4,
            image: "/notebook.png",
            title: "Artex Notebook",
        },

        {
            id: 5,
            image: "/gymbag.png",
            title: "Artex Gym Bag",
        },
        {
            id: 6,
            image: "/bluepen.png",
            title: "Artex Pen",
        },
        {
            id: 7,
            image: "/handbag.png",
            title: "Artex Hand Bag",
        },


    ];

    return (
        <section className="container mx-auto py-5" >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                {/* LEFT SIDE: Section title & description */}
                <div >
                    <h3 className="text-3xl font-bold text-blue-950 md:text-4xl mb-10" >
                        New Merchandise
                    </h3>
                    <p className="text-lg mb-8 md:text-xl text-gray-700">
                        Explore our latest Artex-branded merchandise — a perfect blend of
                        comfort, quality, and modern design that reflects our creativity.
                    </p>
                    <Button variant="secondary" size="sm" className="cursor-pointer">
                        Shop Now <FaArrowRight className="inline-block text-lg" />
                    </Button>
                </div>

                {/* RIGHT SIDE: SLIDER  */}
                <div className="lg:col-span-3">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        className="w-full"
                    >
                        {newMerchandise.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="flex flex-col  items-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-70 rounded-2xl border border-gray-300 shadow-md object-contain bg-white"
                                    />
                                    <h3 className="text-xl mt-3 font-bold text-gray-900 text-center">
                                        {item.title}
                                    </h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default NewMerchandise;
