import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import CandidateDashboard from "./pages/candidate/CandidateDashboard";
import RecruiterDashboard from "./pages/recruiter/Dashboard";

import ProtectedRoute from "./routes/ProtectedRoute";

const Unauthorized = () => (
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-3xl font-bold">
      403 - Unauthorized
    </h1>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/candidate/dashboard"
          element={
            <ProtectedRoute roles={["CANDIDATE"]}>
              <CandidateDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/recruiter/dashboard"
          element={
            <ProtectedRoute roles={["RECRUITER"]}>
              <RecruiterDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/unauthorized"
          element={<Unauthorized />}
        />

        <Route
          path="/"
          element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;