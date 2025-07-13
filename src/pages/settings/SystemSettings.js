// src/pages/settings/SystemSettings.js
import React from 'react';

const SystemSettings = () => {
    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-6">System Preferences</h2>
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Theme</label>
                        <select defaultValue="Light" className="mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 rounded-md">
                            <option>Light</option>
                            <option>Dark</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Data Format</label>
                         <select defaultValue="MM/DD/YYYY" className="mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 rounded-md">
                            <option>MM/DD/YYYY</option>
                            <option>DD/MM/YYYY</option>
                             <option>YYYY-MM-DD</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Timezone</label>
                        <select defaultValue="IST" className="mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 rounded-md">
                            <option value="IST">Indian Standard Time (UTC-5:30)</option>
                            <option value="PST">Pacific Standard Time (UTC-8:00)</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Language</label>
                        <input type="text" defaultValue="English" disabled className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-md bg-gray-100" />
                    </div>
                </div>

                {/* Data Management */}
                <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Data Management</h3>
                    <p className="text-sm text-gray-500 mt-1">Manage your data and account.</p>
                    <div className="mt-4 flex space-x-4">
                        <button type="button" className="py-2 px-4 border border-red-300 text-sm font-medium rounded-md text-red-700 hover:bg-red-50">Delete Account</button>
                        <button type="button" className="py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50">Export Data</button>
                    </div>
                </div>

                 {/* Save Button */}
                 <div className="pt-6">
                    <button type="submit" className="py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">
                        Save Settings
                    </button>
                 </div>
            </form>
        </div>
    );
};

export default SystemSettings;