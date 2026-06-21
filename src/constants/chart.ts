import Pending from "../assets/icons/Pending.svg?react";
import Sailes from "../assets/icons/Sailes.svg?react";
import Order from "../assets/icons/Order.svg?react";
import User from "../assets/icons/User.svg?react";
import TrendingUp from "../assets/icons/TrendingUp.svg?react";
import TrendingDown from "../assets/icons/TrendingDown.svg?react";

export const dashboardCards = [
  {
    title: "Total Pending",
    value: "40,689",
    percentage: "8.5%",
    description: "Up from yesterday",
    isPositive: true,
    Icon: Pending,
    TrendIcon: TrendingUp,
    bgColor: "bg-(--color-orange)",
  },
  {
    title: "Total Sales",
    value: "40,689",
    percentage: "4.5%",
    description: "Down from yesterday",
    isPositive: false,
    Icon: Sailes,
    TrendIcon: TrendingDown,
    bgColor: "bg-(--color-green)",
  },
  {
    title: "Total Order",
    value: "10,293",
    percentage: "1.3%",
    description: "Up from past week",
    isPositive: true,
    Icon: Order,
    TrendIcon: TrendingUp,
    bgColor: "bg-[var(--color-yellow)]",
  },
  {
    title: "Total User",
    value: "40,689",
    percentage: "8.5%",
    description: "Up from yesterday",
    isPositive: true,
    Icon: User,
    TrendIcon: TrendingUp,
    bgColor: "bg-(--color-blue)",
  },
];