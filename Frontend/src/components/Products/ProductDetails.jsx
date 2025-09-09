import React, { useEffect, useState } from "react";

const selectedProduct = {
  name: "Stylish Jacket",
  price: 1200,
  originalPrice: 1500,
  description: "Good",
  brand: "Fashion Brand",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish Jacket",
    },
    {
      url: "https://picsum.photos/500/500?random=6",
      altText: "Stylish Jacket",
    },
  ],
};
const ProductDetails = () => {
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct?.images[0]?.url);
    }
  }, [selectedProduct]);
  return (
    <>
      <div className=" p-6">
        <div className=" max-w-6xl mx-auto bg-white p-8 rounded-lg">
          <div className="flex flex-col md:flex-row">
            {/* Left Thumbnails */}{" "}
            <div className=" hidden md:flex flex-col space-y-4 mr-6">
              {selectedProduct.images.map((images, index) => (
                <img
                  key={index}
                  src={images.url}
                  alt={images.altText || `Thumbnail${index}`}
                  className=" w-20 h-20 object-cover rounded-3xl pointer border"
                  onClick={() => setMainImage(images.url)}
                />
              ))}
            </div>
            <div className="md:w-1/2">
              <div className=" mb-4">
                <img
                  src={mainImage}
                  alt="Main Product"
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </div>
            </div>
            {/* Mobile Thumnbail */}
            <div className="md:hidden flex overscroll-x-scroll gap-3">
              {selectedProduct.images.map((images, index) => (
                <img
                  key={index}
                  src={images.url}
                  alt={images.altText || `Thumbnail${index}`}
                  className=" w-20 h-20 object-cover rounded-3xl pointer border"
                />
              ))}
            </div>
            {/* Right Side */}
            <div className=" md:w-1/2 md:ml-10">
              <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                {selectedProduct.name}
              </h1>
              <div className=" flex gap-2 text-center">
                <p className=" text-lg text-gray-600 p-1  mb-1 line-through">
                  {selectedProduct.originalPrice &&
                    `${selectedProduct.originalPrice}`}
                </p>
                <p className="text-xl text-green-900 border font-semibold rounded p-1 bg-red-50 border-gray-200 mb-2">
                  {selectedProduct.price}
                </p>
              </div>
              <p className="text-gray-600 mb-4">
                {selectedProduct.description}
              </p>
              <div className="mb-4">
                <p className=" text-gray-700">Color:</p>
                <div className=" flex gap-2 mt-2">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color}
                      className=" w-8 h-8 rounded-full"
                      style={{
                        backgroundColor: color.toLocaleLowerCase(),
                        filter: "brightness(0.5)",
                      }}
                    ></button>
                  ))}
                </div>
              </div>
              <div className=" mb-4">
                <p className=" text-gray-700">Size:</p>
                <div className="flex gap-2 mt-2">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      className=" bg-red-50 px-4 py-2 border border-gray-200 rounded-2xl"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className=" mb-6">
                <p className=" text-gray-700">Quantity:</p>
                <div className=" flex items-center space-x-4 mt-2">
                  <button className=" px-2 py-1 bg-red-50 rounded font-semibold text-lg">
                    -
                  </button>
                  <span className=" text-lg">1</span>
                  <button className=" px-2 py-1 bg-red-50 font-semibold rounded text-lg">
                    +
                  </button>
                </div>
              </div>
              <button className="bg-black text-white py-2 rounded w-full mb-4">
                Add to cart
              </button>
              <div className=" mt-10 text-gray-700">
                <h3 className=" text-xl font-bold mb-4">Characteristcs:</h3>
                <table className=" w-full text-left text-sm text-gray-600">
                  <tbody className="">
                    <tr className="">
                      <td className=" py-1">Brand</td>
                      <td className=" py-1">{selectedProduct.brand}</td>
                    </tr>
                    <tr className="">
                      <td className=" py-1">Material</td>
                      <td className=" py-1">{selectedProduct.material}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
