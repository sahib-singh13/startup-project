// src/pages/SignUpPage.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signupIllustration from '../assets/signup-illustration.svg';

const SignUpPage = () => {
    const navigate = useNavigate();

    const simulateSignUpAndRedirect = (e) => {
        // Prevent default form or button behavior
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        
        // Set the authentication flag in localStorage to simulate a successful sign-up and login
        localStorage.setItem('isAuthenticated', 'true');
        
        // Redirect to the dashboard
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-[#F5F3FF] flex items-center justify-center p-4">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg overflow-hidden">
                
                {/* Illustration Section */}
                <div className="hidden md:flex bg-purple-100 items-center justify-center p-12">
                    <img src={signupIllustration} alt="Sign Up Illustration" className="max-w-full h-auto" />
                </div>

                {/* Form Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="text-center mb-8">
                         <h1 className="text-2xl font-bold text-purple-600">Start-up</h1>
                         <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">Create an account</h2>
                         <p className="text-gray-500 mt-2">Please select an option to continue</p>
                    </div>

                    <button 
                        onClick={simulateSignUpAndRedirect}
                        className="w-full flex items-center justify-center py-2.5 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        {/* Google Icon SVG */}
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
                          <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.804 9.658C34.566 5.836 29.63 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.843-5.38C34.566 5.836 29.63 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.012 36.417 44 30.561 44 24c0-1.341-.138-2.65-.389-3.917z"></path>
                        </svg>
                        Continue with Google
                    </button>

                    <div className="my-6 flex items-center">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="flex-shrink mx-4 text-gray-400 text-sm">Or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    <form onSubmit={simulateSignUpAndRedirect} className="space-y-5">
                        {/* Form fields... */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" name="email" id="email" placeholder="Enter your email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"/>
                        </div>
                        <div>
                            <label htmlFor="password"className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" name="password" id="password" placeholder="Create password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"/>
                        </div>
                         <div>
                            <label htmlFor="confirm-password"className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm your password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"/>
                        </div>
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                            <select id="role" name="role" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md">
                                <option>Select your role</option>
                                <option>Admin</option>
                                <option>Employee</option>
                            </select>
                        </div>
                        
                        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none">
                            Sign up
                        </button>

                        <p className="text-sm text-center text-gray-500">
                            Have an account? <Link to="/login" className="font-medium text-purple-600 hover:text-purple-500">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;