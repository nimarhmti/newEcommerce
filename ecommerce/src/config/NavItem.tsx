import React from "react";
import { ShopIcons } from "../assets/icons/ShopIcons";

interface navItemModel {
  label?: string;
  icon?: React.ReactNode;
  to: string;
}
export const navItem: navItemModel[] = [
  {
    label: "Products",
    to: "/",
  },
  {
    icon: <ShopIcons />,
    to: "cards",
  },
];
