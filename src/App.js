// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import EmployeesPage from './pages/EmployeesPage';
import EditEmployeePage from './pages/EditEmployeePage';
import TasksPage from './pages/TasksPage';
import SettingsPage from './pages/SettingsPage'; // Import the new SettingsPage

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    return isAuthenticated ? children : <Navigate to="/login" />;
};

const AddTaskPage = () => <div className="p-8"><h1 className="text-2xl font-bold">Add New Task</h1></div>;

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Protected Routes - a single place to define the layout */}
        <Route 
          element={
            <ProtectedRoute>
              <Layout>
                <Routes>
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/employees" element={<EmployeesPage />} />
                  <Route path="/employees/edit" element={<EditEmployeePage />} />
                  <Route path="/employees/add" element={<EditEmployeePage />} />
                  <Route path="/tasks" element={<TasksPage />} />
                  <Route path="/tasks/add" element={<AddTaskPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  {/* Redirect any other nested protected routes to the dashboard */}
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </Routes>
              </Layout>
            </ProtectedRoute>
          }
        >
          {/* Define all protected routes here */}
          <Route path="/dashboard" />
          <Route path="/employees" />
          <Route path="/employees/edit" />
          <Route path="/employees/add" />
          <Route path="/tasks" />
          <Route path="/tasks/add" />
          <Route path="/settings" />
        </Route>

        {/* Fallback for non-matching routes */}
        <Route 
          path="*" 
          element={<Navigate to={localStorage.getItem('isAuthenticated') ? "/dashboard" : "/login"} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;