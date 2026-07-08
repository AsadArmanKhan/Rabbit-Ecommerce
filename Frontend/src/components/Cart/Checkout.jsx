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
  return <div>Checkout</div>;
}
