import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Ellipse from "./Ellipse.png";
function App() {
  return (
    <Router>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

function Welcome() {
  return (
    <div className="p-6 bg-white shadow-lg w-80 text-center rounded-lg h-[80vh] flex flex-col justify-end">
      <h2 className="text-xl font-bold">Welcome to PopX</h2>
      <p className="text-gray-500">Lorem ipsum dolor sit amet...</p>
      <Link to="/signup" className="block bg-purple-600 text-white p-2 mt-4 rounded">Create Account</Link>
      <Link to="/login" className="block bg-[#6C25FF4B] text-black p-2 mt-2 rounded">Already Registered? Login</Link>
    </div>
  );
}

function Login() {
  return (
    <div className="p-6 bg-white shadow-lg w-80 rounded-lg">
      <h2 className="text-xl font-bold">Sign in to your PopX account</h2>
      <p className="text-gray-500">Lorem ipsum dolor sit amet...</p>
      <div className="relative my-3">
        <label className="absolute text-[#6C25FF] text-sm left-3 -top-1 bg-white px-1">Email Address</label>
        <input type="email" className="w-full p-2 border rounded mt-2 focus:outline-purple-500" placeholder="Enter email address" />
      </div>
      <div className="relative my-3">
        <label className="absolute text-[#6C25FF] text-sm left-3 -top-1 bg-white px-1">Password</label>
        <input type="password" className="w-full p-2 border rounded mt-2 focus:outline-purple-500" placeholder="Password"/>
      </div>
      <Link to="/settings" className="bg-gray-500 text-white p-2 mt-4 rounded flex justify-center">Log in</Link>
    </div>
  );
}

function Signup() {
  return (
    <div className="p-6 bg-white shadow-lg w-80 rounded-lg h-[90vh] flex flex-col justify-between">
      <div>
      <h2 className="text-xl font-bold mb-4">Create your PopX account</h2>
      
      <div className="relative mb-3">
        <label className="absolute text-[#6C25FF] text-sm left-3 -top-1 bg-white px-1">Full Name</label>
        <input type="text" className="w-full p-2 border rounded mt-2 focus:outline-purple-500" placeholder="Full Name"/>
      </div>

      <div className="relative mb-3">
        <label className="absolute text-[#6C25FF] text-sm left-3 -top-1 bg-white px-1">Phone Number</label>
        <input type="text" className="w-full p-2 border rounded mt-2 focus:outline-purple-500" placeholder="Phone Number"/>
      </div>

      <div className="relative mb-3">
        <label className="absolute text-[#6C25FF] text-sm left-3 -top-1 bg-white px-1">Email Address</label>
        <input type="email" className="w-full p-2 border rounded mt-2 focus:outline-purple-500" placeholder="Enter email address" />
      </div>
      <div className="relative mb-3">
        <label className="absolute text-[#6C25FF] text-sm left-3 -top-1 bg-white px-1">Password</label>
        <input type="password" className="w-full p-2 border rounded mt-2 focus:outline-purple-500" placeholder="Password"/>
      </div>

      <div className="relative mb-3">
        <label className="absolute text-[#6C25FF] text-sm left-3 -top-1 bg-white px-1">Company Name</label>
        <input type="text" className="w-full p-2 border rounded mt-2 focus:outline-purple-500" placeholder="Company Name"/>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <label className="text-gray-700">Are you an Agency?</label>
        <div className="flex items-center gap-2">
          <input type="radio" name="agency" value="yes" /> <span>Yes</span>
          <input type="radio" name="agency" value="no" /> <span>No</span>
        </div>
      </div>
      </div>

      <div>
      <button className="w-full bg-purple-600 text-white p-2 mt-4 rounded hover:bg-purple-700">
        Create Account
      </button>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="p-6 bg-white shadow-lg w-80 rounded-lg h-[80vh]">
      <h2 className="text-xl font-bold">Account Settings</h2>
      <div className="flex items-center mt-4">
        <img src={Ellipse} alt="Profile" className="rounded-full" />
        <div className="ml-4">
          <h3 className="font-bold">Marry Doe</h3>
          <p className="text-gray-500">Marry@Gmail.Com</p>
        </div>
      </div>
      <p className="text-gray-500 mt-4">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
    </div>
  );
}

export default App;
