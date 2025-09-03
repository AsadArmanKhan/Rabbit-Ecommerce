import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";

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
      </div>
    </>
  );
}
