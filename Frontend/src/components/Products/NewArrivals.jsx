import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function NewArrivals() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canSCrollLeft, setCanSCrollLeft] = useState(false);
  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: "1200",
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "jeans Jacket",
      price: "1200",
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "3",
      name: "Stylish Jacket",
      price: "1200",
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "4",
      name: "Stylish Jacket",
      price: "1200",
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "Stylish Jacket",
      price: "1200",
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "6",
      name: "Stylish Jacket",
      price: "1200",
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "7",
      name: "Stylish Jacket",
      price: "1200",
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "8",
      name: "Stylish Jacket",
      price: "1200",
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "9",
      name: "Stylish Jacket",
      price: "1200",
      images: [
        {
          url: "https://picsum.photos/500/500?random=9",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "10",
      name: "Stylish Jacket",
      price: "1200",
      images: [
        {
          url: "https://picsum.photos/500/500?random=10",
          altText: "Stylish Jacket",
        },
      ],
    },
  ];

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behaviour: "smooth" });
  };
  // { //   Update Scroll Buttons   // }
  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth;
      setCanSCrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }

    console.log({
      scrollLeft: container.scrollLeft,
      clientWidth: container.clientWidth,
      containerScrollWidth: container.scrollWidth,
    });
  };
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }
  }, []);
  return (
    <>
      <section>
        <div className=" container mx-auto text-center mb-10 relative">
          <h2 className=" mb-4 text-3xl font-bold">Explore New Arrivals</h2>
          <p className=" text-lg text-gray-600 mb-8">
            Discover the latest styles straight off the runway, freshly added to
            keep your wardrobe on the cutting edge of the fashion.
          </p>
          {/* Scroll Buttons */}
          <div className=" absolute right-0 px-10 bottom-[-30px] flex space-x-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canSCrollLeft}
              className={`p-2 rounded border ${
                canSCrollLeft
                  ? "bg-white text-black"
                  : " bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <FiChevronLeft className=" text-2xl" />
            </button>
            <button
              onClick={() => scroll("right")}
              className={`p-2 rounded border ${
                canScrollRight
                  ? "bg-white text-black"
                  : " bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <FiChevronRight className=" text-2xl" />
            </button>
          </div>
        </div>
        {/* Scrollable Content */}
        <div
          ref={scrollRef}
          className="container mx-auto overflow-x-scroll flex space-x-6 relative"
        >
          {newArrivals.map((product) => (
            <div
              key={product._id}
              className="min-w-[100%] sm:min-w-[33%] lg:w-[30%] relative"
            >
              <img
                src={product.images[0]?.url}
                className=" w-full h-[500px] object-cover rounded-lg"
                alt={product.images[0]?.altText || product.name}
              />
              <div className=" absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
                <Link to={`/product/${product._id}`} className="block">
                  <h4 className=" font-medium">{product.name}</h4>
                </Link>
                <p className=" mt-1">₹{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
