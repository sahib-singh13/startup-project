// src/components/Layout.js
import React, { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
    HomeIcon,
    UsersIcon,
    ClipboardDocumentListIcon,
    Cog6ToothIcon,
    Bars3Icon,
    XMarkIcon,
    MagnifyingGlassIcon,
    ArrowLeftOnRectangleIcon, // Import logout icon
} from '@heroicons/react/24/outline';

import adminAvatar from '../assets/user1.png';

// ... (classNames and getPageTitle functions remain the same)
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
const getPageTitle = (pathname) => {
    switch (pathname) {
        case '/dashboard':
            return 'Dashboard';
        case '/employees':
            return 'Employees';
        case '/employees/edit':
            return 'Employee Information';
        case '/employees/add':
            return 'Add Employee';
        case '/tasks':
            return 'Tasks';
        case '/settings':
            return 'Settings';
        default:
            return 'Dashboard';
    }
}


const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const pageTitle = getPageTitle(location.pathname);

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        navigate('/login');
    };
    
    // Sidebar navigation items
    const navigation = [
        { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
        { name: 'Employees', href: '/employees', icon: UsersIcon },
        { name: 'Tasks', href: '/tasks', icon: ClipboardDocumentListIcon },
        { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
    ];

    const sidebarContent = (
         <div className="flex flex-col flex-grow">
            <div className="flex items-center flex-shrink-0 px-4 h-20">
                <h1 className="text-2xl font-bold text-purple-600">Start-up</h1>
            </div>
            <div className="mt-2 flex-grow flex flex-col">
                <nav className="flex-1 px-4 pb-4 space-y-2">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className={({ isActive }) => classNames(
                                isActive ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-purple-200 hover:text-purple-800',
                                'group flex items-center px-2 py-3 text-sm font-medium rounded-md'
                            )}
                        >
                            <item.icon className="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
            </div>
            <div className="flex-shrink-0 flex flex-col border-t border-purple-200 p-4">
                <button
                    onClick={handleLogout}
                    className="group w-full flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-purple-200 hover:text-purple-800"
                >
                    <ArrowLeftOnRectangleIcon className="mr-3 h-6 w-6" />
                    Logout
                </button>
                <div className="flex-shrink-0 w-full group block mt-4">
                    <div className="flex items-center">
                        <div>
                            <img className="inline-block h-9 w-9 rounded-full" src={adminAvatar} alt="" />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Admin User</p>
                            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">adming@company.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
    return (
        <div>
            {/* Mobile sidebar */}
            {sidebarOpen && (
                 <div className="relative z-40 md:hidden">
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    <div className="fixed inset-0 z-40 flex">
                        <div className="relative flex w-full max-w-xs flex-1 flex-col bg-[#F5F3FF] pt-5 pb-4">
                            <div className="absolute top-0 right-0 -mr-12 pt-2">
                                <button type="button" className="ml-1 flex h-10 w-10 items-center justify-center rounded-full" onClick={() => setSidebarOpen(false)}>
                                    <XMarkIcon className="h-6 w-6 text-white" />
                                </button>
                            </div>
                            {sidebarContent}
                        </div>
                        <div className="w-14 flex-shrink-0" />
                    </div>
                 </div>
            )}
            
            {/* Static sidebar for desktop */}
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                <div className="flex flex-col flex-grow bg-[#F5F3FF] overflow-y-auto">
                    {sidebarContent}
                </div>
            </div>

            <div className="md:pl-64 flex flex-col flex-1">
                 {/* Top bar for mobile */}
                <div className="sticky top-0 z-10 md:hidden flex justify-between items-center h-16 bg-white shadow-sm px-4">
                    <button type="button" className="text-gray-500" onClick={() => setSidebarOpen(true)}>
                        <Bars3Icon className="h-6 w-6" />
                    </button>
                    <h1 className="text-lg font-semibold">{pageTitle}</h1>
                    <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
                </div>
                <main className="flex-1 bg-gray-50">
                    <div className="py-8 px-4 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;