import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";

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
      </div>
    </>
  );
}
