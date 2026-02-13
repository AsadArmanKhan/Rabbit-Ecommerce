import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

export default function CollectionPage() {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleClickOutside = () => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };
  useEffect(() => {
    // Add EventListner for clicks
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchProducts = [
        {
          _id: 1,
          name: "Product 1",
          price: 1200,
          images: [{ url: "https://picsum.photos/500/500?random=50" }],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 1200,
          images: [{ url: "https://picsum.photos/500/500?random=51" }],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 1200,
          images: [{ url: "https://picsum.photos/500/500?random=52" }],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 1200,
          images: [{ url: "https://picsum.photos/500/500?random=53" }],
        },
        {
          _id: 5,
          name: "Product 5",
          price: 1200,
          images: [{ url: "https://picsum.photos/500/500?random=59" }],
        },
        {
          _id: 6,
          name: "Product 6",
          price: 1200,
          images: [{ url: "https://picsum.photos/500/500?random=61" }],
        },
        {
          _id: 7,
          name: "Product 7",
          price: 1200,
          images: [{ url: "https://picsum.photos/500/500?random=22" }],
        },
        {
          _id: 8,
          name: "Product 8",
          price: 1200,
          images: [{ url: "https://picsum.photos/500/500?random=13" }],
        },
      ];
      setProducts(fetchProducts);
    }, 1000);
  }, []);
  return (
    <div className=" flex flex-col lg:flex-row">
      {/* Mobile Filtter Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 border flex justify-center items-center"
      >
        <FaFilter className="mr-2" /> Filters
      </button>
      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        fixed insert-y-0 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 
        z-50 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4">
        <h2 className=" text-2xl uppercase mb-4">All Collection</h2>
        {/* Sort Options */}
        <SortOptions />
        {/* Products grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
