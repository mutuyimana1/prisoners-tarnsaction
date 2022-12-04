import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/dashboard";
import Login from "../components/login";
import Register from "../components/register";
import CustomizedTables from "../components/prisoner";
import RegisterPrisoner from "../components/registerPrisoner";
import Home from "../views/home";
import Payment from "../components/payment";
function Index() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/allprisoners" element={<CustomizedTables />} />
        <Route path="/registerprisoner" element={<RegisterPrisoner />} />
        <Route path="/sendmoney" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default Index;
