import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
import Success from "./Pages/Success";
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
  return (
    <div>
      <div>
        <ToastContainer />
      </div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/reset-password/:id/:token"
            element={<ResetPassword />}
          />
          <Route
            path="/success"
            element={
              <ProtectedRoute>
                <Success />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
