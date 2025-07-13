
// src/pages/settings/NotificationsSettings.js
import React, { useState } from 'react';
import { Switch } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Toggle = ({ label, description }) => {
    const [enabled, setEnabled] = useState(false);
    return (
        <div className="flex justify-between items-center py-4 border-b border-gray-200">
            <div>
                <p className="font-medium text-gray-800">{label}</p>
                <p className="text-sm text-gray-500">{description}</p>
            </div>
             <Switch
                checked={enabled}
                onChange={setEnabled}
                className={classNames(
                    enabled ? 'bg-purple-600' : 'bg-gray-200',
                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200'
                )}
                >
                <span
                    aria-hidden="true"
                    className={classNames(
                    enabled ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                    )}
                />
            </Switch>
        </div>
    )
}

const NotificationsSettings = () => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Notification Preferences</h2>
      <div className="space-y-4">
          <Toggle label="E-mail Notification" description="Receive notification via email" />
          <Toggle label="Task Reminders" description="Get reminded about upcoming task deadline" />
          <Toggle label="Push Notification" description="Receive push notification" />
          <Toggle label="Weekly Reports" description="Receive weekly summary reports" />
      </div>
       <div className="pt-8">
          <button type="button" className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">
              Save Preferences
          </button>
      </div>
    </div>
  );
};

export default NotificationsSettings;