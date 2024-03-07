import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

/**
 * ProtectedRoute component to wrap around protected routes.
 * 
 * @param {Object} props - The component props.
 * @param {Array} props.roles - The roles allowed to access the route.
 * @param {React.ReactNode} props.children - The children components to render if the route is accessible.
 */
const ProtectedRoute = ({ roles, children }) => {
  const location = useLocation();

  // Check if user is authenticated
  const isAuthenticated = () => {
    // Assuming you have a utility or service to check authentication
    return localStorage.getItem('token') ? true : false;
  };

  // Retrieve the user role from localStorage or your state management
  const userRole = localStorage.getItem('userRole');

  // Check if the user is authenticated and has one of the required roles
  if (!isAuthenticated() || !roles.includes(userRole)) {
    // Redirect to the login page or any other page
    // You can pass the current location in state to return the user back to this page after login
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
