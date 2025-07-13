// src/pages/settings/SecuritySettings.js
import React from 'react';

const SecuritySettings = () => {
    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Security Settings</h2>
            
            {/* Change Password */}
            <div className="border-b border-gray-200 pb-8">
                <h3 className="text-lg font-medium text-gray-900">Change Password</h3>
                <p className="text-sm text-gray-500 mt-1">Update your password to keep your account secure.</p>
                <form className="mt-6 space-y-4 max-w-lg">
                    <input type="password" placeholder="Current Password" className="block w-full px-3 py-2 border border-gray-300 rounded-md" />
                    <input type="password" placeholder="New Password" className="block w-full px-3 py-2 border border-gray-300 rounded-md" />
                    <input type="password" placeholder="Confirm New Password" className="block w-full px-3 py-2 border border-gray-300 rounded-md" />
                     <div>
                        <button type="submit" className="mt-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">
                           Save Preferences
                        </button>
                    </div>
                </form>
            </div>

            {/* Two-Factor Authentication */}
            <div className="py-8 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-500 mt-1">Add an extra layer of security to your account.</p>
                <div className="mt-4 flex items-center space-x-4">
                     <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">Not Enabled</span>
                     <button type="button" className="text-sm font-medium text-purple-600 hover:text-purple-800">Enable 2FA</button>
                </div>
            </div>

             {/* Active Sessions */}
            <div className="py-8">
                <h3 className="text-lg font-medium text-gray-900">Active Sessions</h3>
                <p className="text-sm text-gray-500 mt-1">Manage your active login sessions.</p>
                <div className="mt-4 flex items-center justify-between p-4 bg-gray-50 rounded-md">
                    <div>
                        <p className="font-medium">Current Session</p>
                        <p className="text-sm text-gray-500">Chrome on Windows - Active now</p>
                    </div>
                    <button className="text-sm font-medium text-purple-600 hover:text-purple-800">Sign out all other sessions</button>
                </div>
            </div>

        </div>
    );
};

export default SecuritySettings;