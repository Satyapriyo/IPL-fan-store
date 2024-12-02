// import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
// import { ChevronDownIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

const teams = {
  Chennai: "Chennai Super Kings",
  Delhi: "Delhi Capitals",
  Gujrat: "Gujrat titans",
  Kolkata: "Kolkata Knight Riders",
  Lucknow: "Lucknow Super Giants",
  Mumbai: "Mumbai Indians",
  Punjab: "Punjab Kings",
  Rajasthan: "Rajasthan Royals",
  Bangaluru: "Royal Challengers Bangaluru",
  Hydrabad: " Sunrisers Hydrabad",
};

export default function SignUp() {
  const url = import.meta.env.VITE_API_URL;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFetching(true);
    setError(false);
    try {
      const form = e.target;
      const formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());
      // console.log(formJson);
      const cityName = formJson.favCity;
      console.log(cityName);
      console.log(teams);
      formJson.team = teams[cityName];
      const res = await axios.post(`${url}/auth/register`, formJson);
      console.log(formJson);
      toast.success("Account created successfully");
      setTimeout(() => {
        res.data && window.location.replace("/home");
      }, [1000]);
    } catch (err) {
      toast.error("Something went wrong" + err);
      setError(true);
    } finally {
      setIsFetching(false);
    }
  };
  return (
    <div className="text-left mt-[10vh] mb-[10vh] rounded-lg">
      <div className="flex bg-white shadow-xl md:max-w-[300px] mx-auto min-h-full flex-1 flex-col justify-center px-6 pt-2 pb-8 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form method="post" onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  autoComplete="username"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="favCity"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Favourite Place
              </label>
              <select
                name="favCity"
                className="bg-slate-50 cursor-pointer mt-2 rounded-md px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option value="Chennai">Chennai</option>
                <option value="Delhi">Delhi</option>
                <option value="Gujrat">Gujrat</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Bangaluru">Bangaluru</option>
                <option value="Hydrabad">Hydrabad</option>
              </select>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
                {/* <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  // onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-semibold ml-2 text-indigo-600 hover:text-indigo-500"
            >
              SignIn
            </Link>
          </p>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
