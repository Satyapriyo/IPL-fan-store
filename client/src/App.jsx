import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "../src/pages/SignUp";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import ProductDetails from "./pages/ProductDetails";
import PaymentConformed from "./pages/PaymentConformed";
import Settings from "./pages/Settings";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/payment" element={<PaymentConformed />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="product/:postid" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
