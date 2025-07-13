// src/pages/SettingsPage.js
import React, { useState } from 'react';
import { UserCircleIcon, BellIcon, ShieldCheckIcon, CogIcon } from '@heroicons/react/24/outline';
import ProfileSettings from './settings/ProfileSettings';
import NotificationsSettings from './settings/NotificationsSettings';
import SecuritySettings from './settings/SecuritySettings';
import SystemSettings from './settings/SystemSettings';

const tabs = [
    { id: 'profile', name: 'Profile', icon: UserCircleIcon },
    { id: 'notifications', name: 'Notifications', icon: BellIcon },
    { id: 'security', name: 'Security', icon: ShieldCheckIcon },
    { id: 'system', name: 'System', icon: CogIcon },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div>
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
                <p className="text-gray-500">Manage your account preferences and system configuration.</p>
            </div>

            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
                 <nav className="-mb-px flex space-x-4 md:space-x-8 overflow-x-auto" aria-label="Tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveTab(tab.id)}
                            className={classNames(
                                tab.id === activeTab
                                ? 'border-purple-500 text-purple-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                'group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap'
                            )}
                            aria-current={tab.id === activeTab ? 'page' : undefined}
                        >
                        <tab.icon
                            className={classNames(
                                tab.id === activeTab ? 'text-purple-600' : 'text-gray-400 group-hover:text-gray-500',
                                '-ml-0.5 mr-2 h-5 w-5'
                            )}
                            aria-hidden="true"
                        />
                        <span>{tab.name}</span>
                        </button>
                    ))}
                </nav>
            </div>

             {/* Tab Content */}
             <div className="mt-8">
                {activeTab === 'profile' && <ProfileSettings />}
                {activeTab === 'notifications' && <NotificationsSettings />}
                {activeTab === 'security' && <SecuritySettings />}
                {activeTab === 'system' && <SystemSettings />}
            </div>
        </div>
    );
};

export default SettingsPage;