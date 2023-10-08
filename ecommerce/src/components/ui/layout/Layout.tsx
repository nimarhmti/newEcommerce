import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
export default function Layout() {
  return (
    <div style={{ background: "#e9ecef" }} className="min-vh-100">
      <Navbar />
      <Outlet />
    </div>
  );
}
