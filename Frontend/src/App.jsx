import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster, toast } from "sonner";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<UserLayout />}>
            {" "}
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route>{/* Admin Layout */} </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
