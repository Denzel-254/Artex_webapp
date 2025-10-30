import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaGithub,
} from "react-icons/fa";


function Footer() {
    return (
        <footer className=" text-white py-6 mt-12">
            <div className="container mx-auto text-center">
                <div className="flex justify-between mb-5">
                    <div className="flex items-baseline space-x-3 mx-20">
                        <img src="/logo1.png" alt="business logo" className="h-15 w-auto" />
                        <h1 className="text-xl  font-bold">Artex</h1>
                    </div>
                    <div className="flex justify-center space-x-6 my-4 mx-10 text-xl">
                        <FaFacebookF className="cursor-pointer" />
                        <FaTwitter className="cursor-pointer" />
                        <FaInstagram className="cursor-pointer" />
                        <FaLinkedinIn className="cursor-pointer" />
                        <FaGithub className="cursor-pointer" />
                    </div>
                </div>
                <hr className="border-t-2  mx-auto border-white my-5" />

                <div className="flex justify-around text-left flex-col-2 md:flex-row mt-10">

                    <div>
                        <h2 className="text-lg font-semibold">Our Services</h2>
                        <ul>
                            <li className="my-2 cursor-pointer">Architecture Design</li>
                            <li className="my-2 cursor-pointer">Interior Design</li>
                            <li className="my-2 cursor-pointer">Project Management</li>
                            <li className="my-2 cursor-pointer">Consultation</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold">Company</h2>
                        <ul>
                            <li className="my-2 cursor-pointer">About Us</li>
                            <li className="my-2 cursor-pointer">Careers</li>
                            <li className="my-2 cursor-pointer">Contact</li>
                            <li className="my-2 cursor-pointer">Privacy Policy</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold">Contact Us</h2>
                        <ul>
                            <li className="my-2 cursor-pointer">Email</li>
                            <li className="my-2 cursor-pointer">Phone</li>
                            <li className="my-2 cursor-pointer">Location</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold">Quick Links</h2>
                        <ul>
                            <li className="my-2 cursor-pointer">Terms of Service</li>
                            <li className="my-2 cursor-pointer">Help Center</li>
                            <li className="my-2 cursor-pointer">FAQ</li>
                        </ul>
                    </div>

                </div>
                <p className="mt-8 text-sm">&copy; {new Date().getFullYear()} Artex - All rights reserved.</p>

            </div>
        </footer>
    )
}

export default Footer