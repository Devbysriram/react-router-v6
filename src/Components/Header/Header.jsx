import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-around py-4">
      <div className="logo">
        <p className="text2xl font-bold">Logo Here</p>
      </div>
      <div className="menus">
        <NavLink to='/'
          className={({isActive}) =>
            `mx-2 ${isActive ? "text-blue-700" : "text-black"}`
          }
        >
          Home
        </NavLink>
        <NavLink to='/about'
          className={({isActive}) =>
            `mx-2 ${isActive ? "text-blue-700" : "text-black"}`
          }
        >
          About Us
        </NavLink>
        <NavLink to="/contact"
          className={({isActive}) =>
            `mx-2 ${isActive ? "text-blue-700" : "text-black"}`
          }
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
