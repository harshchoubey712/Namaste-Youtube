import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-60 h-full bg-gray-100">
    
    <ul className="space-y-12">
      <li>
          <Link to="/" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Home</Link>
      </li>
      <li>
          <Link to="/?musiccategory=music" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Music</Link>
        </li>
        <li>
          <Link to="/?sportscategory=sports" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Sports</Link>
        </li>
        <li>
          <Link to="/?gamingcategory=gaming" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Gaming</Link>
        </li>
        <li>
          <Link to="/?moviescategory=movies" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Movies</Link>
        </li>
      </ul>

    </div>
  );
};

export default Sidebar;
