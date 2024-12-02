import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "../src/pages/SignUp";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="product/:postid" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
