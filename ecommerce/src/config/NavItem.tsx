import React from "react";
import { ShopIcons } from "../assets/icons/ShopIcons";

interface navItemModel {
  label?: string;
  icon?: React.ReactNode;
  to: string;
  id: string;
}
export const navItem: navItemModel[] = [
  {
    label: "Products",
    to: "/",
    id: "nh12",
  },
  {
    icon: <ShopIcons />,
    to: "cards",
    id: "af45",
  },
];
