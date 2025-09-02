import React from "react";
import { Link } from "react-router-dom";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

export default function TopBar() {
  return (
    <>
      <div className="rabbit-red text-white ">
        <div className="container mx-auto flex justify-between py-3 px-18 ">
          <div className="hidden md:flex items-center space-x-4">
            <Link to={""} className="hover:text-gray-300">
              <TbBrandMeta className="h-5 w-5" />
            </Link>
            <Link to={""} className="hover:text-gray-300">
              <IoLogoInstagram className="h-5 w-5" />
            </Link>
            <Link to={""} className="hover:text-gray-300">
              <RiTwitterXLine className="h-4 w-4" />
            </Link>
          </div>
          <div className="text-sm text-center flex-grow">
            <span className="">
              We Ship World Wide - Fast and Reliable shipping!{" "}
            </span>
          </div>
          <div className="hidden md:block text-sm ">
            <Link>+1 (234) 567-890</Link>
          </div>
        </div>
      </div>
    </>
  );
}
