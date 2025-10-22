import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const links = [
        { id: 1, name: "Home", to: "home" },
        { id: 2, name: "Features", to: "features" },
        { id: 3, name: "About", to: "about" },
        { id: 4, name: "Contact", to: "contact" },
    ];

    // Smooth scroll handler
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setNavOpen(false);
        }
    };

    return (
        <nav className="w-full">
            <div className="flex items-center justify-end md:justify-center lg:justify-end px-6 py-4">
                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8">
                    {links.map(({ id, name, to }) => (
                        <li
                            key={id}
                            onClick={() => handleScroll(to)}
                            className="cursor-pointer text-orange-600 hover:text-orange-500 transition"
                        >
                            {name}
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Icon */}
                <div
                    onClick={() => setNavOpen(!navOpen)}
                    className="md:hidden cursor-pointer text-orange-700 text-2xl"
                >
                    {navOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {navOpen && (
                <ul className="md:hidden flex flex-col items-center space-y-6 bg-white py-6 shadow-md absolute top-16 right-0 w-full z-40">
                    {links.map(({ id, name, to }) => (
                        <li
                            key={id}
                            onClick={() => handleScroll(to)}
                            className="cursor-pointer text-orange-700 hover:text-orange-600 text-lg"
                        >
                            {name}
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
