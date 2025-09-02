import React from "react";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoMdPhonePortrait,
} from "react-icons/io";
import { RiFlipHorizontal2Line } from "react-icons/ri";
import {
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandMeta,
  TbBrandX,
  TbBrandYoutube,
  TbFilePhone,
} from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="px-18 py-12 border-t  border-gray-200 ">
        <div className="  container mx-auto  grid  grid-cols-1 md:grid-cols-4 gap-8 lg:px-0">
          <div className="">
            <h3 className="text-lg text-gray-800 mb-4">News letter</h3>
            <p className="text-gray-500 mb-4">
              Be the first to hear about new products, exclusive events and
              online offers.{" "}
            </p>
            <p className="font-medium text-sm text-gray-600  mb-3">
              Sign up and get 10% off on your first order.
            </p>
            {/* Newsletter form */}
            <form className="flex">
              <input
                type="email"
                placeholder="Email@email.com"
                className="p-3 text-sm w-full border 
                  rounded transition-all border-gray-300
                   focus:outline-none focus:ring-2 focus:ring-gray-300 mt-3"
                required
              />
              <button
                type="submit"
                className="bg-black text-white  px-5 mt-3 hover:bg-gray-800 transition-all hover:shadow-2xl py-2  text-sm rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
          {/* Shop links */}
          <div className="">
            <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  to={""}
                  className=" text-sm hover:text-gray-800 transition-colors"
                >
                  Men's Top Wear
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className=" text-sm hover:text-gray-800 transition-colors"
                >
                  Women's Top Wear
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className=" text-sm hover:text-gray-800 transition-colors"
                >
                  Men's Bottom Wear
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className=" text-sm hover:text-gray-800 transition-colors"
                >
                  Women's Bottom Wear
                </Link>
              </li>
            </ul>
          </div>
          {/* Support links */}
          <div className="">
            <h3 className="text-lg text-gray-800 mb-4">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  to={""}
                  className=" text-sm hover:text-gray-800 transition-colors"
                >
                  Contact US
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className=" text-sm hover:text-gray-800 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className=" text-sm hover:text-gray-800 transition-colors"
                >
                  FAQ's
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className=" text-sm hover:text-gray-800 transition-colors"
                >
                  Features
                </Link>
              </li>
            </ul>
          </div>
          {/* Follow Us  */}
          <div className="">
            <h3 className="text-lg text-gray-800  mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4 mb-6">
              <a
                href="https://www.facebook.com/share/1AfX36LYtZ/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-gray-500"
              >
                <TbBrandMeta className=" w-5 h-5 " />
              </a>
              <a
                href="https://www.linkedin.com/in/asad-arman-khan-a62b5134b/"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-gray-500"
              >
                <IoLogoLinkedin className=" w-5 h-5 " />
              </a>
              <a
                href="https://github.com/AsadArmanKhan"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-gray-500"
              >
                <IoLogoGithub className=" w-5 h-5 " />
              </a>
              <a
                href="https://www.instagram.com/bboy._.asad/?igsh=MWtqdTVlcXB2bHIxaA%3D%3D#"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-gray-500"
              >
                <TbBrandInstagram className=" w-5 h-5 " />
              </a>
            </div>

            <p className=" text-lg text-gray-800  mb-2">Call Us:</p>
            <p className="text-gray-700">
              <FiPhoneCall className=" w-5 h-5 inline-block mr-2" />
              +1 (234) 567-890{" "}
            </p>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className=" container mx-auto mt-12 px-4  lg:px-0 border-t border-gray-200 pt-6">
          <p className=" text-gray-500 text-sm tracking-tighter text-center">
            @2025, CompileTab. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
