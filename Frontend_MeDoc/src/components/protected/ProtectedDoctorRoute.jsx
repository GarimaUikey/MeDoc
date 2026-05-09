import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedDoctorRoute = ({ children }) => {

    const token = localStorage.getItem(

        "doctorToken"

    );

    if (!token) {

        return <Navigate to="/login" />

    }

    return children;

};

export default ProtectedDoctorRoute