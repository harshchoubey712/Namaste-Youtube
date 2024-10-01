import React from "react";
import Button from "./Button";
import { Link } from 'react-router-dom';

const ButtonList = () => {
  return (
    <div className="flex space-x-20 p-4">
    <Link to="/" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white rounded-lg">
      All
    </Link>
    <Link to="/?gamingcategory=gaming" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white rounded-lg">
      Gaming
    </Link>
    <Link to="/?songscategory=songs" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white rounded-lg">
      Songs
    </Link>
  
    <Link to="/?soccercategory=soccer" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white rounded-lg">
      Soccer
    </Link>
    <Link to="/?cricketcategory=cricket" className="px-4 py-2 bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white rounded-lg">
      Cricket
    </Link>
  </div>
  );
};

export default ButtonList;
