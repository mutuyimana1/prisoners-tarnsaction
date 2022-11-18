import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/dashboard";
import Login from "../components/login";
import Register from "../components/register";
import CustomizedTables from "../components/prisoner";
import RegisterPrisoner from "../components/registerPrisoner";
function Index() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/table" element={<CustomizedTables />} />
        <Route path="/registerprisoner" element={<RegisterPrisoner />} />
      </Routes>
    </div>
  );
}

export default Index;
