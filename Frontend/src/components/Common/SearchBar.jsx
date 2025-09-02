import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOPen, setIsOPen] = useState(false);

  const handleSearchToggle = () => {
    setIsOPen(!isOPen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Term:", searchTerm);
    setIsOPen(false);
  };
  return (
    <>
      <div
        className={`flex items-center justify-center w-full transition-all duration-300 ${
          isOPen ? "absolute top-0 left-0  w-full bg-white h-24 z-10" : "w-auto"
        }`}
      >
        {isOPen ? (
          <form
            onSubmit={handleSearch}
            className="relative flex items-center justify-center w-full"
          >
            <div className="relative w-1/2">
              <input
                type="text"
                placeholder="Search?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="rounded-lg pointer focus:outline-none w-full placeholder:text-gray-700 bg-gray-100 px-4  py-2 pl-2 pr-24"
              />

              {/* search icon */}
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 pointer"
              >
                <HiMagnifyingGlass className="h-6 w-6 pointer" />
              </button>
            </div>
            {/* close button */}
            <button
              onClick={handleSearchToggle}
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer text-gray-600 hover:text-gray-800"
            >
              <HiMiniXMark className="h-8 w-8 " />
            </button>
          </form>
        ) : (
          <button onClick={handleSearchToggle}>
            <HiMagnifyingGlass className="w-6 h-6 text-gray-700" />
          </button>
        )}
      </div>
    </>
  );
}
