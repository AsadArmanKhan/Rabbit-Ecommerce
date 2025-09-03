import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <section className=" relative">
        <img
          src="https://github.com/kushald/rabbit-assets/blob/main/assets/rabbit-hero.webp?raw=true"
          alt="Rabbit"
          className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-fill"
        />
        <div className=" absolute inset-0 bg-black/0 flex items-center justify-center">
          <div className=" text-center text-white p-6">
            <h1 className=" text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
              vacation <br />
              ready{" "}
            </h1>
            <p className=" text-sm tracking-tighter md:text-lg mb-6">
              Explore our vacation-ready outfits fast world-wide shipping
            </p>
            <Link
              to={""}
              className="bg-white text-gray-950  px-6 py-2 rounded-sm font-medium text-lg"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
