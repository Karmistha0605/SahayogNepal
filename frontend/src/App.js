import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <div className="min-h-screen flex items-center justify-center">
              <h1 className="text-2xl font-bold">
                Welcome to SahayogNepal
              </h1>
              <div className="mt-4 flex gap-4">
                <a
                  href="/login"
                  className="px-4 py-2 bg-primary text-white rounded"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="px-4 py-2 bg-secondary text-white rounded"
                >
                  Register
                </a>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
