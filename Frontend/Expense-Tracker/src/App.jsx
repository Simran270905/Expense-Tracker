import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Dashboard/Home';
import Income from './pages/Dashboard/Income';
import Expenses from './pages/Dashboard/Expenses';
import UserProvider from './context/UserContext';
import {Toaster} from "react-hot-toast";

const App = () => {
  return (
    <UserProvider>
    <div>
    <Router>
      <Routes>
        {/* Redirect to dashboard or login based on authentication */}
        <Route path="/" element={<Root />} />

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected routes (you may want to add a ProtectedRoute component later) */}
        <Route path="/dashboard" element={<Home />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<Expenses />} />
      </Routes>
    </Router>
    </div>

    <Toaster 
       toastOptions={{
        className: "",
        style: {
          fontSize:'13px'
        },
       }}
     />
    </UserProvider>
  );
};

export default App;

// Redirect logic based on token presence
const Root = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};
