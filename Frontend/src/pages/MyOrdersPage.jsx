import React, { useEffect, useState } from "react";

export default function MyOrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate fetching orders

    setTimeout(() => {
      const mockOrders = [
        {
          _id: "12345",
          createdAt: new Date(),
          shippingAddress: { city: "New Your", country: "USA" },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/500/500?random=50",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: "23456",
          createdAt: new Date(),
          shippingAddress: { city: "New Your", country: "USA" },
          orderItems: [
            {
              name: "Product 2",
              image: "https://picsum.photos/500/500?random=45",
            },
          ],
          totalPrice: 100,
          isPaid: false,
        },
        {
          _id: "34567",
          createdAt: new Date(),
          shippingAddress: { city: "New Your", country: "USA" },
          orderItems: [
            {
              name: "Product 3",
              image: "https://picsum.photos/500/500?random=78",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
      ];
      setOrders(mockOrders);
    }, 1000);
  }, []);
  return (
    <>
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
        <div className="relative shadow-md sm:rounded-lg overflow-hidden">
          <table className=" min-w-full text-left text-gray-500">
            <thead className=" bg-gray-100 uppercase text-sm text-gray-700 text-center">
              <tr className="">
                <th className="py-2 px-4 sm:py-3">Image</th>
                <th className="py-2 px-4 sm:py-3">Order ID</th>
                <th className="py-2 px-4 sm:py-3">Created</th>
                <th className="py-2 px-4 sm:py-3">Shipping Address</th>
                <th className="py-2 px-4 sm:py-3">Items</th>
                <th className="py-2 px-4 sm:py-3">Price</th>
                <th className="py-2 px-4 sm:py-3">Status</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-b border-gray-200 hover:border-gray-700 pointer"
                  >
                    <td className=" py-2 px-2 sm:py-4 sm:px-4">
                      <img
                        src={order.orderItems[0].image}
                        alt={order.orderItems[0].name}
                        className=" w-10 h-10 sm:w-12 object-cover rounded-lg"
                      />
                    </td>
                    <td className="py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap">
                      #{order._id}
                    </td>
                    <td className=" py-2 px-2 sm:px-4 sm:py-4">
                      {new Date(order.createdAt).toLocaleDateString()}
                      {"   "}
                      {new Date(order.createdAt).toLocaleTimeString()}
                    </td>
                    <td className=" py-2 px-2 sm:px-4 sm:py-4">
                      {" "}
                      {order.shippingAddress
                        ? `${order.shippingAddress.city},${order.shippingAddress.country}`
                        : "N/A"}{" "}
                    </td>
                    <td className=" py-2 px-2 sm:px-4 sm:py-4">
                      {order.orderItems.length}
                    </td>
                    <td className=" py-2 px-2 sm:px-4 sm:py-4">
                      {order.totalPrice}
                    </td>
                    <td
                      className={`${order.isPaid ? "bg-white text-green-700 text-l font-bold" : "font-bold bg-white text-red-700 text-l"}`}
                    >
                      {order.isPaid ? "Paid" : "Pending"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="">
                  <td
                    colSpan={7}
                    className="py-4 px-4 text-center text-gray-500"
                  >
                    You have no Orders
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
