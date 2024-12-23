import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaTwitter, FaYoutube } from 'react-icons/fa6';
import logo from "../assets/Logoo.png"

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#3E5879] font-poppins text-white py-14">
                <div className="container mx-auto px-5 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
                        {/* Logo & Description */}
                        <div className='space-y-3'>
                            <img src={logo} alt="" className='w-3/4' />
                            <p className=" text-sm">
                                EnduroFest is your one-stop solution for managing marathons, providing a seamless experience for participants and organizers. Join us to celebrate endurance and community spirit!
                            </p>


                        </div>

                        {/* Quick Links */}

                        <div>
                            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                            <ul>
                                <li><a href="/" className="text-white-400 hover:text-gray-300">Home</a></li>
                                <li><a href="/about" className="text-white-400 hover:text-gray-300">About EnduroFest</a></li>
                                <li><a href="/events" className="text-white-400 hover:text-gray-300">Upcoming Events</a></li>
                                <li><a href="/register" className="text-white-400 hover:text-gray-300">Marathon Registration</a></li>
                                <li><a href="/contact" className="text-white-400 hover:text-gray-300">Contact Us</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-4">Resources</h3>
                            <ul>
                                <li><a href="/faqs" className="text-white-400 hover:text-gray-300">FAQs</a></li>
                                <li><a href="/training-tips" className="text-white-400 hover:text-gray-300">Training Tips</a></li>
                                <li><a href="/sponsorship" className="text-white-400 hover:text-gray-300">Sponsorship Opportunities</a></li>
                                <li><a href="/volunteer" className="text-white-400 hover:text-gray-300">Volunteer Sign-Up</a></li>
                                <li><a href="/privacy-policy" className="text-white-400 hover:text-gray-300">Privacy Policy</a></li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-xl text-center font-bold mb-4">Follow Us On</h4>
                            <ul className="flex space-x-4 items-center justify-center">
                                <li>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">

                                        <FaFacebook className='text-2xl hover:text-pink-500'></FaFacebook>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">

                                        <FaTwitter className="text-2xl hover:text-pink-500"></FaTwitter>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">

                                        <FaInstagram className="text-2xl hover:text-pink-500"></FaInstagram>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">

                                        <FaYoutube className="text-2xl hover:text-pink-500"></FaYoutube>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-4">EnduroFest Headquarters</h3>
                            <p>123 Marathon Lane</p>
                            <p>Fitness City, Sportland</p>
                            <p>ZIP Code: 45678</p>
                            <p>Phone: +1 (123) 456-7890</p>
                            <p>Email: <a href="mailto:contact@endurofest.com" className="text-yellow-400">contact@endurofest.com</a></p>
                        </div>
                    </div>

                    <div className="border-t border-white-700 mt-10 pt-5 text-center text-sm text-white">
                        © {new Date().getFullYear()} EnduroFest. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;