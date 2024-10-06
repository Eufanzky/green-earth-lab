// src/components/MenuCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MenuCard = ({ title, icon, link }) => {
  return (
    <Link to={link} className="block">
      <div className="bg-[#D9D9D9] p-4 rounded-lg border-2 border-black hover:shadow-black hover:shadow-lg shadow-xl transition duration-300">
        <div className="flex items-center">
          <img src={icon} alt={title} className="w-12 h-12 mr-3" />
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default MenuCard;
