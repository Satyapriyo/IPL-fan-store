import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";

const Settings = () => {
  const user = localStorage.getItem("user"); // Retrieve the user string from localStorage
  if (!user) return <div>No user found</div>; // Handle case when no user is found

  const userObj = JSON.parse(user); // Parse the user string into an object
  const city = userObj["favCity"]; // Extract "favCity"

  const [newCity, setNewCity] = useState(""); // State to store the new city
  const [favCity, setFavCity] = useState(city); // State to store the current favorite city
  const [message, setMessage] = useState(""); // State for success/error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newCity.trim()) {
      setMessage("City name cannot be empty.");
      return;
    }

    try {
      // Send updated city to the backend
      const response = await fetch(`${url}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userObj._id, favCity: newCity }),
      });

      if (response.ok) {
        const data = await response.json();
        // Update localStorage and state
        userObj.favCity = newCity;
        localStorage.setItem("user", JSON.stringify(userObj));
        setFavCity(newCity);
        setMessage("Favourite city updated successfully!");
      } else {
        const error = await response.json();
        setMessage(`Error: ${error.message}`);
      }
    } catch (error) {
      setMessage("An error occurred while updating the city.");
    }
  };

  // Exclude unwanted keys (_id and __v)
  const filteredEntries = Object.entries(userObj).filter(
    ([key]) => key !== "_id" && key !== "__v"
  );

  return (
    <div className="bg-gray-100 h-[100vh]">
      <Navbar city={favCity} />
      <div className="max-w-[400px] bg-white shadow-xl rounded-xl py-10 px-5 mx-auto mt-[10vh] text-xl">
        {filteredEntries.map(([key, value]) => (
          <div key={key} className="p-3">
            <strong>{key}:</strong> {value}
          </div>
        ))}
      </div>
      <h1 className="text-center mt-10 text-xl font-bold">
        Change Favourite City
      </h1>
      <form className="text-center mt-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter new favourite city"
          className="border p-2 rounded w-64 focus:outline-black"
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
        />
        <button
          type="submit"
          className="ml-3 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Update City
        </button>
      </form>
      {/* {message && <p className="text-center mt-5 text-red-500">{message}</p>} */}
    </div>
  );
};

export default Settings;
