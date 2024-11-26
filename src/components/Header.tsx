import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 shadow">
      <h1 className="text-lg font-bold">HAC Portal</h1>
      <nav>
        <Link to="/" className="px-4 py-2 text-blue-600 hover:underline">
          Login / Sign-Up
        </Link>
      </nav>
    </header>
  );
};

export default Header;

