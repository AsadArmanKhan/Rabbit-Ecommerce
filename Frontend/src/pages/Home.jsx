import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="">
          <Hero />
        </div>
        <div className="">
          <GenderCollectionSection />
        </div>
        <div className="">
          <NewArrivals />
        </div>
        {/* Best Seller */}
        <h2 className=" text-3xl text-center font-bold  mb-4"> Best Seller</h2>

        <ProductDetails />
      </div>
    </>
  );
}
