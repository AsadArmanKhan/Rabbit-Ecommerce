import React from "react";

export default function Profile() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow container mx-auto p-4 md:p-6">
          <div className=" flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            {/* Left Section */}
            <div className=" w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                Kaki Aalo Babu
              </h1>
              <p className=" text-lg text-gray-600 mb-4">Gopalyo@example.com</p>
              <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-orange-600 px-4">
                Logout
              </button>
            </div>
            {/* Right Section: Orders table */}
            <div className="w-full md:h-2/3"></div>
          </div>
        </div>
      </div>
    </>
  );
}
