import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
export default function Layout() {
  return (
    <div className="vh-100">
      <Navbar />
      <Outlet />
    </div>
  );
}
