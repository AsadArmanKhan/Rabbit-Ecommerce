import React from "react";
import { Link } from "react-router-dom";

export default function GenderCollectionSection() {
  return (
    <>
      <section className="py-12 px-2 lg:px-8  ">
        <div className="container mx-auto  flex flex-col md:flex-row gap-8">
          {/* Women's Collection */}
          <div className="relative flex-1 ">
            <img
              src="https://github.com/kushald/rabbit-assets/blob/main/assets/womens-collection.webp?raw=true"
              alt="Women's Collection"
              className="w-full h-[700px] object-cover rounded-2xl"
            />
            <div className=" absolute bottom-8 left-8  bg-white rounded-xl sm:p-2  p-4">
              <h2 className=" text-2xl font-bold text-gray-900">
                Women's Collection
              </h2>
              <Link
                to={"/collection/all?gender=Women"}
                className=" text-gray-900 underline"
              >
                Shop Now
              </Link>
            </div>
          </div>
          {/* Men's Collection */}
          <div className="relative flex-1">
            <img
              src="/IMG_9752.JPG"
              alt="Men's Collection"
              className="w-full h-[700px] object-cover rounded-2xl"
            />
            <div className=" absolute bottom-8 left-8 bg-white rounded-xl  p-4">
              <h2 className=" text-2xl font-bold text-gray-900">
                Men's Collection
              </h2>
              <Link
                to={"/collection/all?gender=Men"}
                className=" text-gray-900 underline"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
