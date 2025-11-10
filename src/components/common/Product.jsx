import React, { useState } from "react";

const productsData = [
    {
        id: 1,
        name: " Classic Mug",
        image: "/mug.png",
        price: 15,
        oldPrice: 20,
    },
    {
        id: 2,
        name: " T-Shirt",
        image: "/tshirt.png",
        price: 25,
        oldPrice: 30,
    },
    {
        id: 3,
        name: " Hoodie",
        image: "/hoodie.png",
        price: 40,
        oldPrice: 50,
    },
    {
        id: 4,
        name: "Tumbler",
        image: "/tumbler.png",
        price: 18,
        oldPrice: 25,
    },
    {
        id: 5,
        name: " Blue Hoodie",
        image: "/bluehoodie.png",
        price: 18,
        oldPrice: 25,
    },
    {
        id: 6,
        name: "Smart Watch",
        image: "/smartwatch.png",
        price: 18,
        oldPrice: 25,
    },
    {
        id: 7,
        name: "Gym Bag",
        image: "/gymbag.png",
        price: 18,
        oldPrice: 25,
    },
    {
        id: 8,
        name: "Sweatshirt",
        image: "/sweatshirt.png",
        price: 18,
        oldPrice: 25,
    },
    {
        id: 9,
        name: "Sports SHoes",
        image: "/sportshoe.png",
        price: 18,
        oldPrice: 25,
    },
    {
        id: 10,
        name: "SweatPant",
        image: "/sweatpant.png",
        price: 18,
        oldPrice: 25,
    },
    {
        id: 11,
        name: "Sneakers",
        image: "/sneaker.png",
        price: 18,
        oldPrice: 25,
    },
    {
        id: 12,
        name: "T-Shirt",
        image: "/shirt.png",
        price: 18,
        oldPrice: 25,
    },
    {
        id: 13,
        name: "Scarf",
        image: "/scarf.png",
        price: 18,
        oldPrice: 25,
    },
    {
        id: 14,
        name: "Polo T-Shirt",
        image: "/polo.png",
        price: 18,
        oldPrice: 25,
    },
    {
        id: 15,
        name: "Pen",
        image: "/pen.png",
        price: 18,
        oldPrice: 25,
    },
    {
        id: 16,
        name: "Water Bottle",
        image: "/bottle.png",
        price: 18,
        oldPrice: 25,
    },
];

const ITEMS_PER_PAGE = 8;

const Products = () => {
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(productsData.length / ITEMS_PER_PAGE);
    const currentProducts = productsData.slice(
        (page - 1) * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE
    );

    return (
        <section className="py-10 px-4 text-center">
            <h2 className="text-3xl font-semibold mb-2">Artex Merchandise</h2>
            <p className="text-gray-500 mb-8">
                Explore premium Artex-branded merchandise — quality, comfort, and style in every product.
            </p>

            {/* Product grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {currentProducts.map((product) => (
                    <div key={product.id} className="w-64">
                        {/* Card */}
                        <div className="bg-white border border-gray-300 rounded-2xl shadow-md overflow-hidden group hover:shadow-lg transition relative">
                            <div className="relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-52 object-contain bg-white"
                                />
                                <button className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition  cursor-pointer">
                                    +
                                </button>
                            </div>
                        </div>


                        {/* Description below the card */}
                        <div className="text-left mt-3 px-1">
                            <h3 className="text-lg font-medium mb-1">{product.name}</h3>
                            <div className="flex items-center gap-2">
                                <p className="text-gray-700 font-semibold text-base">
                                    Ksh{product.price.toFixed(2)}
                                </p>
                                <p className="text-gray-400 line-through text-sm">
                                    Ksh{product.oldPrice.toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dot pagination */}
            <div className="flex justify-center items-center gap-2 mt-8">
                <button
                    disabled={page === 1}
                    onClick={() => setPage((prev) => prev - 1)}
                    className="p-2 text-xl disabled:opacity-50 cursor-pointer"
                >
                    ←
                </button>

                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setPage(i + 1)}
                        className={`w-3 h-3 rounded-full ${page === i + 1 ? "bg-black" : "bg-gray-300 hover:bg-gray-400"
                            }`}
                    ></button>
                ))}

                <button
                    disabled={page === totalPages}
                    onClick={() => setPage((prev) => prev + 1)}
                    className="p-2 text-xl disabled:opacity-50  cursor-pointer"
                >
                    →
                </button>
            </div>
        </section>
    );
};

export default Products;
