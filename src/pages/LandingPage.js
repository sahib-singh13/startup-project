// src/pages/LandingPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlayCircleIcon, CheckCircleIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

// You should replace these with your actual image assets
import heroImage from '../assets/hero-image.png';
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <h1 className="text-2xl font-bold text-purple-600">Start-up</h1>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#" className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Features</a>
                            <a href="#" className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
                            <a href="#" className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                            <Link to="/login" className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-purple-600 hover:bg-purple-700">Login</Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-purple-600 focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600">Features</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600">Testimonials</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-purple-600">Contact</a>
                        <Link to="/login" className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-purple-600 hover:bg-purple-700 mt-2">Login</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

const LandingPage = () => {
    return (
        <div className="bg-white">
            <Navbar />

            {/* Hero Section */}
            <main className="bg-[#F5F3FF]">
                <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                                Transform Your Business <span className="text-purple-600">With Smart Automation</span>
                            </h2>
                            <p className="mt-6 text-lg text-gray-600">
                                Automate your workflow, boost productivity, and scale your business with our intelligent platform. We provide the tools you need to succeed.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link to="/signup" className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">
                                    Try for free
                                </Link>
                                <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200">
                                    <PlayCircleIcon className="w-6 h-6 mr-2" />
                                    Watch video
                                </button>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <img src={heroImage} alt="Smart Automation" className="rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
            </main>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="p-8 border border-gray-200 rounded-lg">
                            <CheckCircleIcon className="w-12 h-12 mx-auto text-purple-600" />
                            <h3 className="mt-4 text-xl font-bold text-gray-900">Lifetime free</h3>
                            <p className="mt-2 text-gray-600">Get started with our free plan and upgrade as you grow.</p>
                        </div>
                        <div className="p-8 border border-gray-200 rounded-lg">
                            <CheckCircleIcon className="w-12 h-12 mx-auto text-purple-600" />
                            <h3 className="mt-4 text-xl font-bold text-gray-900">Enterprise Security</h3>
                            <p className="mt-2 text-gray-600">Your data is safe with our top-tier security measures.</p>
                        </div>
                        <div className="p-8 border border-gray-200 rounded-lg">
                            <CheckCircleIcon className="w-12 h-12 mx-auto text-purple-600" />
                            <h3 className="mt-4 text-xl font-bold text-gray-900">Trusted information</h3>
                            <p className="mt-2 text-gray-600">We provide reliable and up-to-date information.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Testimonials Section */}
            <section className="py-20 bg-[#F5F3FF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            Everything you need to <span className="text-purple-600">succeed</span>
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            See what our customers have to say about their experience.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                         {/* Testimonial Card 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <img src={user1} alt="Adam W." className="w-12 h-12 rounded-full mr-4"/>
                                <div>
                                    <p className="font-bold">Adam W.</p>
                                    <p className="text-sm text-gray-500">Startup CEO</p>
                                </div>
                            </div>
                            <p className="text-gray-600">"This platform has revolutionized our workflow. It's intuitive, powerful, and has saved us countless hours."</p>
                        </div>
                         {/* Testimonial Card 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <img src={user2} alt="John A." className="w-12 h-12 rounded-full mr-4"/>
                                <div>
                                    <p className="font-bold">John A.</p>
                                    <p className="text-sm text-gray-500">Project Manager</p>
                                </div>
                            </div>
                            <p className="text-gray-600">"The best automation tool I've ever used. The support team is also incredibly responsive and helpful."</p>
                        </div>
                         {/* Testimonial Card 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <img src={user3} alt="Lisa M." className="w-12 h-12 rounded-full mr-4"/>
                                <div>
                                    <p className="font-bold">Lisa M.</p>
                                    <p className="text-sm text-gray-500">Marketing Head</p>
                                </div>
                            </div>
                            <p className="text-gray-600">"A game-changer for our marketing campaigns. The data and insights are invaluable."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900">Get in touch</h2>
                        <p className="mt-4 text-lg text-gray-600">Have a question or want to work with us? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                        <div className="mt-8 space-y-4">
                            <p className="flex items-center text-gray-600">
                                <EnvelopeIcon className="w-6 h-6 mr-3 text-purple-600"/>
                                support@startup.com
                            </p>
                            <p className="flex items-center text-gray-600">
                                <PhoneIcon className="w-6 h-6 mr-3 text-purple-600"/>
                                (123) 456-7890
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#F5F3FF] p-8 rounded-lg">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                                <input type="text" name="name" id="name" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                <input type="email" name="email" id="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"/>
                            </div>
                            <div>
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;