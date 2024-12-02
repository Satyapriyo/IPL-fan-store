import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ProductList from "../components/ProductList/ProductList";
import Footer from "../components/Footer/Footer";
const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <ProductList />
      <Footer />
    </div>
  );
};

export default Dashboard;
