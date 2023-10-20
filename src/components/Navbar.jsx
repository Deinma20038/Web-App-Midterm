import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="mb-10">
      <ul className="nav py-3 bg-black border-gray-200 dark:bg-gray-900 text-center flex justify-center text-white">
        <li className="mx-2">
          <Link to="/NewShop">New Shop</Link>
        </li>
        <li className="mx-2">
          <Link to="/NewProduct">New Product</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
