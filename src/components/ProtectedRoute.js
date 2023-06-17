import React, { Navigate } from "react-router-dom";

function ProtectedRoute ({  element: Element, ...props  }) {
  return (

    props.isLoggedIn ? <Element {...props} /> : <Navigate to="/sign-in" replace/>
)}

export default ProtectedRoute;
 