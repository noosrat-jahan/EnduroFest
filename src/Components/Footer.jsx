import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaTwitter, FaYoutube } from 'react-icons/fa6';
import logo from "../assets/Logoo.png"

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#26949a] text-white py-10">
                <div className="container mx-auto px-5 md:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Logo & Description */}
                        <div>
                            <img src={logo} alt="" className='w-1/4' />
                            <p className="text-gray-300 text-sm">
                                EnduroFest is your one-stop solution for managing marathons, providing a seamless experience for participants and organizers. Join us to celebrate endurance and community spirit!
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li>
                                    <a href="#about" className="hover:text-pink-500">About Us</a>
                                </li>
                                <li>
                                    <a href="#events" className="hover:text-pink-500">Upcoming Events</a>
                                </li>
                                <li>
                                    <a href="#faq" className="hover:text-pink-500">FAQs</a>
                                </li>
                                <li>
                                    <a href="#contact" className="hover:text-pink-500">Contact Us</a>
                                </li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-lg font-bold mb-4">Follow Us On</h4>
                            <ul className="flex space-x-4 items-center justify-center">
                                <li>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                        
                                        <FaFacebook className='text-xl hover:text-pink-500'></FaFacebook>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                        
                                        <FaTwitter className="className='text-3xl hover:text-pink-500"></FaTwitter>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                      
                                        <FaInstagram className="className='text-2xl hover:text-pink-500"></FaInstagram>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                        
                                        <FaYoutube className="className='text-2xl hover:text-pink-500"></FaYoutube>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-white">
                        © {new Date().getFullYear()} EnduroFest. All Rights Reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;