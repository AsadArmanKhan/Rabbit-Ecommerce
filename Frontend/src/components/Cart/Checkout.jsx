import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Cart = [
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
];

export default function Checkout() {
  const navigate = useNavigate();
  const [ShippingAddress, setShippindAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });
  return (
    <div className="border grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* Left Section */}
      <div className="border bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value="user@example.com"
              className="w-full p-2 border rounded"
              disabled
            />
          </div>
          <h3 className="text-lg mb-4">Delivery</h3>
          <div className=" mb-4 grid grid-cols-2 gap-4">
            <div className="">
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                value={ShippingAddress.firstName}
                onChange={(e) =>
                  setShippindAddress({
                    ...ShippingAddress,
                    firstName: e.target.value,
                  })
                }
                className="w-full border rounded p-2"
                required
              />
            </div>
            <div className="">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                value={ShippingAddress.LastName}
                onChange={(e) =>
                  setShippindAddress({
                    ...ShippingAddress,
                    lastName: e.target.value,
                  })
                }
                className="w-full border rounded p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                value={ShippingAddress.address}
                onChange={(e) =>
                  setShippindAddress({
                    ...ShippingAddress,
                    address: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
