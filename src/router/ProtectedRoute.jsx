import React from "react";
import {Navigate} from "react-router-dom";

const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    if (!token) return false;

    try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        const isTokenExpired = payload.exp * 1000 < Date.now();
        return !isTokenExpired;
    } catch (error) {
        console.error("Error parsing token:", error);
        return false;
    }
};

const ProtectedRoute = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/auth/sign-in" replace />;
};

export default ProtectedRoute;
