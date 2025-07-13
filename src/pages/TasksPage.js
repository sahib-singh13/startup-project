// src/pages/TasksPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { 
    PlusIcon, 
    PencilSquareIcon, 
    TrashIcon, 
    MagnifyingGlassIcon, 
    CalendarDaysIcon, 
    ClockIcon, 
    CheckCircleIcon, 
    ExclamationCircleIcon 
} from '@heroicons/react/24/outline';
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.png';
import user4 from '../assets/user4.png';
import user5 from '../assets/user5.png';

// Dummy data based on the screenshot
const tasksData = [
    { id: 1, title: 'Update Emp. Database', name: 'John Doe', avatar: user1, priority: 'High', status: 'In Progress', dueDate: '2025-01-05', department: 'IT' },
    { id: 2, title: 'Quarterly Per. Review', name: 'Jane Smith', avatar: user2, priority: 'Medium', status: 'Pending', dueDate: '2025-01-20', department: 'HR' },
    { id: 3, title: 'Marketing Cam. Analysis', name: 'Mike Johnson', avatar: user3, priority: 'Low', status: 'Completed', dueDate: '2025-01-10', department: 'Marketing' },
    { id: 4, title: 'Budget Planning 2024', name: 'Sarah Wilson', avatar: user4, priority: 'High', status: 'In Progress', dueDate: '2025-01-25', department: 'Finance' },
    { id: 5, title: 'System Security Audit', name: 'Tom Brown', avatar: user5, priority: 'High', status: 'Pending', dueDate: '2025-01-18', department: 'Development' },
];

const stats = [
    { name: 'Total Tasks', value: '89', icon: CalendarDaysIcon },
    { name: 'In Progress', value: '24', icon: ClockIcon },
    { name: 'Completed', value: '52', icon: CheckCircleIcon },
    { name: 'Overdue', value: '13', icon: ExclamationCircleIcon },
];

// Helper components for badges
const PriorityBadge = ({ priority }) => {
    const baseClasses = 'px-2 py-1 text-xs font-medium rounded-full';
    const styles = {
        High: 'bg-red-100 text-red-800',
        Medium: 'bg-yellow-100 text-yellow-800',
        Low: 'bg-gray-100 text-gray-800',
    };
    return <span className={`${baseClasses} ${styles[priority]}`}>{priority}</span>;
};

const StatusBadge = ({ status }) => {
    const baseClasses = 'px-2 py-1 text-xs font-medium rounded-full';
    const styles = {
        'In Progress': 'bg-blue-100 text-blue-800',
        'Pending': 'bg-purple-100 text-purple-800',
        'Completed': 'bg-green-100 text-green-800',
    };
    return <span className={`${baseClasses} ${styles[status]}`}>{status}</span>;
};


const TasksPage = () => {
    return (
        <div>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Tasks</h1>
                    <p className="text-gray-500">Manage and track all assigned tasks across departments.</p>
                </div>
                <Link to="/tasks/add" className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700">
                    <PlusIcon className="-ml-1 mr-2 h-5 w-5" />
                    Add Task
                </Link>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((item) => (
                    <div key={item.name} className="bg-white p-5 rounded-lg shadow-sm flex items-center justify-between">
                         <div>
                            <p className="text-sm font-medium text-gray-500">{item.name}</p>
                            <p className="text-2xl font-bold text-gray-800">{item.value}</p>
                        </div>
                        <item.icon className="h-8 w-8 text-gray-400" />
                    </div>
                ))}
            </div>

            {/* Task List Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-4">All Tasks</h2>
                
                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="relative">
                         <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                         <input type="text" placeholder="Search tasks..." className="pl-10 p-2 border rounded-md w-full" />
                    </div>
                    <select className="p-2 border rounded-md">
                        <option>All Status</option>
                        <option>In Progress</option>
                        <option>Pending</option>
                        <option>Completed</option>
                    </select>
                    <select className="p-2 border rounded-md">
                        <option>All Priority</option>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </select>
                </div>

                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {tasksData.map((task) => (
                                <tr key={task.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{task.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap"><PriorityBadge priority={task.priority} /></td>
                                    <td className="px-6 py-4 whitespace-nowrap"><StatusBadge status={task.status} /></td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.dueDate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.department}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-4">
                                        <button className="text-gray-400 hover:text-purple-600"><PencilSquareIcon className="h-5 w-5"/></button>
                                        <button className="text-gray-400 hover:text-red-600"><TrashIcon className="h-5 w-5"/></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                 {/* Mobile Cards */}
                 <div className="md:hidden space-y-4">
                    {tasksData.map((task) => (
                        <div key={task.id} className="bg-gray-50 p-4 rounded-lg shadow">
                             <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src={task.avatar} alt={task.name} className="w-10 h-10 rounded-full mr-3" />
                                    <div>
                                        <p className="font-bold text-gray-800">{task.name}</p>
                                        <p className="text-sm text-gray-600">{task.title}</p>
                                    </div>
                                </div>
                                <button className="text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                    </svg>
                                </button>
                             </div>
                             <div className="mt-4 flex justify-between items-center">
                                <div className="flex items-center space-x-2">
                                    <PriorityBadge priority={task.priority} />
                                    <StatusBadge status={task.status} />
                                </div>
                                <p className="text-sm text-gray-500">Dept: {task.department}</p>
                             </div>
                        </div>
                    ))}
                </div>
            </div>

             {/* Mobile Floating Action Button */}
             <Link to="/tasks/add" className="md:hidden fixed bottom-6 right-6 inline-flex items-center p-4 border border-transparent rounded-full shadow-lg text-white bg-purple-600 hover:bg-purple-700">
                <PlusIcon className="h-6 w-6" />
            </Link>
        </div>
    );
};

export default TasksPage;