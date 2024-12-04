import React, { useTransition } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProductList from "../components/ProductList/ProductList";
import Footer from "../components/Footer/Footer";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
const Dashboard = () => {
  const theme = useContext(ThemeContext);
  const user = localStorage.getItem("user");
  console.log(user);
  if (user == null) {
    window.location.replace("/signin");
  }
  const teamName = user ? JSON.parse(user)["team"] : "";
  const city = JSON.parse(user)["favCity"];
  return (
    <div>
      <Navbar city={city} />
      <h1 className="text-lg md:text-4xl font-bold text-center mt-10 ">
        Welcome to {`${teamName}`} Fan Store 👋🏻
      </h1>
      <ProductList />
      <Footer />
    </div>
  );
};

export default Dashboard;
