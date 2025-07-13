// src/pages/EditEmployeePage.js
import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import { Link } from 'react-router-dom';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const EditEmployeePage = () => {
    const [enabled, setEnabled] = useState(true); // For the 'Active Status' toggle

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Edit Employee</h1>
                <p className="text-gray-500">Update employee information.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Employee Information</h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" name="name" id="name" defaultValue="John Doe" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                            <select id="role" name="role" className="mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 rounded-md">
                                <option>Admin</option>
                                <option>User</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name="email" id="email" defaultValue="john.doe@company.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
                    </div>
                     <div>
                        <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
                        <select id="department" name="department" className="mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 rounded-md">
                            <option>IT</option>
                            <option>Marketing</option>
                            <option>Development</option>
                            <option>HR</option>
                            <option>Finance</option>
                        </select>
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700 mr-4">Active Status</label>
                        <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={classNames(
                                enabled ? 'bg-purple-600' : 'bg-gray-200',
                                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200'
                            )}
                            >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={classNames(
                                enabled ? 'translate-x-5' : 'translate-x-0',
                                'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                )}
                            />
                        </Switch>
                    </div>

                    <div className="flex justify-start space-x-4 pt-4">
                        <button type="submit" className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">
                            Update Employee
                        </button>
                         <Link to="/employees" className="inline-flex justify-center py-2 px-6 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditEmployeePage;