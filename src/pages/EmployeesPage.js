// src/pages/EmployeesPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon, TrashIcon, PencilIcon } from '@heroicons/react/24/solid';

const employees = [
  { name: 'John Doe', email: 'john.doe@company.com', role: 'Admin', department: 'IT', status: 'Active' },
  { name: 'Jane Smith', email: 'jane.smith@company.com', role: 'User', department: 'Marketing', status: 'Active' },
  { name: 'Mike Johnson', email: 'mike.johnson@company.com', role: 'User', department: 'Development', status: 'Inactive' },
  { name: 'Sarah Wilson', email: 'sarah.wilson@company.com', role: 'User', department: 'HR', status: 'Active' },
  { name: 'Tom Brown', email: 'tom.brown@company.com', role: 'User', department: 'Finance', status: 'Active' },
];

const EmployeesPage = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Employees</h1>
                    <p className="text-gray-500">Manage your team members and their information</p>
                </div>
                <Link to="/employees/add" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700">
                    <PlusIcon className="-ml-1 mr-2 h-5 w-5" />
                    Add Employee
                </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Employee List</h2>
                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <input type="text" placeholder="Search employees..." className="p-2 border rounded-md" />
                    <select className="p-2 border rounded-md">
                        <option>All Roles</option>
                        <option>Admin</option>
                        <option>User</option>
                    </select>
                    <select className="p-2 border rounded-md">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>

                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {employees.map((employee) => (
                                <tr key={employee.email}>
                                    <td className="px-6 py-4 whitespace-nowrap">{employee.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{employee.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{employee.role}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{employee.department}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${employee.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                            {employee.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <Link to="/employees/edit" className="text-purple-600 hover:text-purple-900"><PencilIcon className="h-5 w-5 inline"/></Link>
                                        <button className="text-red-600 hover:text-red-900 ml-4"><TrashIcon className="h-5 w-5 inline"/></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                 {/* Mobile Cards */}
                 <div className="md:hidden space-y-4">
                    {employees.map((employee) => (
                        <div key={employee.email} className="bg-gray-50 p-4 rounded-lg shadow">
                            <div className="flex justify-between items-center">
                               <div>
                                 <p className="font-bold">{employee.name}</p>
                                 <p className="text-sm text-gray-500">{employee.email}</p>
                               </div>
                               <div className="flex space-x-2">
                                   <Link to="/employees/edit" className="text-purple-600"><PencilIcon className="h-5 w-5"/></Link>
                                   <button className="text-red-600"><TrashIcon className="h-5 w-5"/></button>
                               </div>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                                <div>
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${employee.role === 'Admin' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                        {employee.role}
                                    </span>
                                    <p className="text-sm text-gray-500 mt-1">Dept: {employee.department}</p>
                                </div>
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${employee.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {employee.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmployeesPage;