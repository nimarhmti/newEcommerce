import React from "react";
import { navItem } from "../../../config/NavItem";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="p-2 bg-secondary d-flex align-items-center justify-content-center fixed-top">
      <ul className="container d-flex align-items-center justify-content-between mb-0 w-100 ">
        {navItem.map((item) => (
          <Link
            className="text-decoration-none text-light"
            to={item.to}
            key={item.id}
          >
            {item.icon ? (
              <div className="d-flex align-items-center justify-content-center gap-1">
                <h4>Card</h4>
                {item.icon}
              </div>
            ) : (
              <h4>{item.label}</h4>
            )}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
