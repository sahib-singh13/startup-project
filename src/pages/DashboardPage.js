// src/pages/DashboardPage.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { UsersIcon, ClipboardDocumentListIcon, BriefcaseIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

const data = [
  { name: 'Jan', attendance: 100, overview: 90 },
  { name: 'Feb', attendance: 110, overview: 95 },
  { name: 'Mar', attendance: 105, overview: 98 },
  { name: 'Apr', attendance: 120, overview: 105 },
  { name: 'May', attendance: 125, overview: 110 },
  { name: 'June', attendance: 115, overview: 100 },
  { name: 'July', attendance: 122, overview: 108 },
];

const StatCard = ({ title, value, icon, change }) => (
    <div className="bg-white p-5 rounded-lg shadow-sm flex items-center justify-between">
        <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
        <div className="flex items-center space-x-2 text-green-500">
             {icon}
             {change && <span className="text-sm font-medium">{change}</span>}
        </div>
    </div>
);


const DashboardPage = () => {
    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                <p className="text-gray-500">Welcome back! Here's what's happening at your company.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard title="Total Employees" value="124" icon={<UsersIcon className="h-8 w-8 text-purple-500" />} />
                <StatCard title="Total Tasks Assigned" value="89" icon={<ClipboardDocumentListIcon className="h-8 w-8 text-blue-500" />} />
                <StatCard title="Hours Count" value="18" icon={<BriefcaseIcon className="h-8 w-8 text-green-500" />} />
                <StatCard title="Active Project" value="12" icon={<ArrowUpIcon className="h-8 w-8 text-red-500" />} />
            </div>

            {/* Chart */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
                 <h2 className="text-xl font-bold text-gray-800 mb-4">Employee Activity Trends</h2>
                 <p className="text-gray-500 mb-6">Monthly attendance and activity overview</p>
                 <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="attendance" stroke="#8884d8" strokeWidth={2} />
                            <Line type="monotone" dataKey="overview" stroke="#82ca9d" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                 </div>
            </div>
        </div>
    );
};

export default DashboardPage;