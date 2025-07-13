// src/pages/settings/ProfileSettings.js
import React from 'react';
import adminAvatar from '../../assets/user1.png'; // Using the same avatar for consistency

const ProfileSettings = () => {
    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Profile Information</h2>
            <form>
                {/* Photo Upload */}
                <div className="flex items-center mb-8">
                    <img className="h-20 w-20 rounded-full object-cover mr-6" src={adminAvatar} alt="Admin User" />
                    <div>
                        <button type="button" className="px-4 py-2 text-sm font-medium text-purple-600 border border-purple-300 rounded-md hover:bg-purple-50">
                            Change Photo
                        </button>
                        <p className="text-xs text-gray-500 mt-2">JPG, GIF or PNG. 1MB max.</p>
                    </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" name="fullName" id="fullName" defaultValue="Admin User" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
                    </div>
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name="email" id="email" defaultValue="admin@company.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
                    </div>
                     <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                        <input type="text" name="role" id="role" defaultValue="Administrator" disabled className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100" />
                    </div>
                     <div>
                        <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
                        <select id="department" name="department" defaultValue="IT" className="mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 rounded-md">
                            <option>IT</option>
                            <option>Marketing</option>
                            <option>Finance</option>
                            <option>HR</option>
                        </select>
                    </div>
                     <div className="md:col-span-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                        <input type="tel" name="phone" id="phone" defaultValue="+91 12345 67890" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-start space-x-4 pt-8">
                    <button type="submit" className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">
                        Save Changes
                    </button>
                     <button type="button" className="inline-flex justify-center py-2 px-6 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfileSettings;