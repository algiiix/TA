import { Link, NavLink, useNavigate } from "react-router-dom";
import { NavList } from "../../data";
import { FaRegUserCircle, FaTimes } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from "react";

function NavMobile(props) {
  const { handleClose } = props;
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 right-0 w-60 z-50 bg-white h-full">
      <div className="flex items-center justify-end w-full p-5">
        <button
          type="button"
          onClick={handleClose}
          className="transition text-gray-600 p-1 rounded-lg hover:bg-red-300 hover:text-red-500"
        >
          <FaTimes size={30} />
        </button>
      </div>
      <div className="flex flex-col gap-5 text-black px-7">
        {NavList.map((navItem) => (
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "font-semibold" : "font-normal"} capitalize text-lg`
            }
            key={navItem.id}
            to={navItem.path}
          >
            {navItem.name}
          </NavLink>
        ))}
        <div className="flex flex-col gap-3">
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/auth/register");
            }}
            className="capitalize border-2 px-3 py-1 rounded-md hover:bg-gray-100 transition"
          >
            sign up
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/auth/login");
            }}
            className="capitalize border-2 px-3 py-1 rounded-md bg-black hover:bg-slate-900 transition text-zinc-200 border-black"
          >
            sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const user = false;

  const toggleShowMenu = (event) => {
    event.preventDefault();
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-black text-white w-full h-20 flex items-center justify-between px-10 lg:px-32">
      <Link to="/">
        <h1 className="font-semibold capitalize text-lg lg:text-xl">
          bengkel virly motor
        </h1>
      </Link>
      <div className="lg:flex items-center gap-5 capitalize hidden">
        {NavList.map((navItem, navIndex) => (
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "font-semibold" : "text-zinc-300"}`
            }
            key={navIndex}
            to={navItem?.path}
          >
            {navItem?.name}
          </NavLink>
        ))}
      </div>
      {user ? (
        <div className="flex items-center gap-2">
          <p>Hi, Guest</p>
          <button>
            <FaRegUserCircle size={30} />
          </button>
        </div>
      ) : (
        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/auth/register");
            }}
            className="capitalize border-2 px-3 py-1 rounded-md hover:bg-gray-800 transition"
          >
            sign up
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/auth/login");
            }}
            className="capitalize border-2 px-3 py-1 rounded-md bg-white hover:bg-zinc-100 transition text-gray-600 border-white"
          >
            sign in
          </button>
        </div>
      )}
      <div className="lg:hidden block">
        <button type="button" onClick={toggleShowMenu}>
          <RxHamburgerMenu size={25} />
        </button>
      </div>
      {showMenu && <NavMobile handleClose={toggleShowMenu} />}
    </div>
  );
}
