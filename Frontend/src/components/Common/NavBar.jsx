import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
  HiBars3BottomRight,
  HiShoppingCart,
  HiShoppingBag,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="container mx-auto  flex items-center justify-between py-4 px-18 ">
        {/* Left - Logo */}
        <div className="">
          <Link to={"/"} className="text-2xl font-medium ">
            Rabbit
          </Link>
        </div>
        {/* Center - Navigation Links */}
        <div className="hidden  md:flex space-x-6">
          <Link
            to={""}
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            men
          </Link>
          <Link
            to={""}
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            women
          </Link>
          <Link
            to={""}
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            top wear
          </Link>
          <Link
            to={""}
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            bottom wear
          </Link>
        </div>
        {/* Right - Icons */}
        <div className="flex items-center space-x-4">
          <Link to={"/profile"} className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 font-bold text-gray-700" />{" "}
          </Link>

          <button onClick={toggleCartDrawer} className="relative hover:text-black pointer">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 rabbit-red text-white text-xs  rounded-full px-1 ">
              4
            </span>
          </button>

          {/* Search */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <Link>
            <button className=" md:hidden ">
              {" "}
              <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
            </button>
          </Link>
        </div>
      </nav>
      <CartDrawer  drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>
    </>
  );
}
