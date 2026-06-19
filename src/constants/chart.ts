// import Pending from "../assets/icons/Pending.svg?react";
// import Sales from "../assets/icons/Sailes.svg?react";
// import Order from "../assets/icons/Order.svg?react";
// import User from "../assets/icons/User.svg?react";
// const cards = [
//   {
//     title: "Total Pending",
//     value: "40,689",
//     subtitle: "Up from yesterday",
//     percent: "8.5%",
//     trendText: "",
//     icon: <Pending /> ,
//     bgColor: "var(--color-orange)",
//   },
//   {
//     title: "Total Sales",
//     value: "40,689",
//     subtitle: "Down from yesterday",
//     percent: "8.5%",
//     trendText: "",
//     icon: <Sales /> ,
//     bgColor: "var(--color-green)",
//   },
//   {
//     title: "Total Order",
//     value: "10,293",
//     subtitle: "Up from past week",
//     percent: "1.3%",
//     trendText: "",
//     icon: <Order />,
//     bgColor: "var(--color-yellow)",
//   },
//   {
//     title: "Total User",
//     value: "40,689",
//     subtitle: "Up from yesterday",
//     percent: "8.5%",
//     trendText: "",
//     icon: <User />,
//     bgColor: "var(--color-blue)",
//   },
// ];



import Pending from "@/assets/icons/Pending.svg?react";
import Sailes from "@/assets/icons/Sailes.svg?react";
import Order from "@/assets/icons/Order.svg?react";
import User from "@/assets/icons/User.svg?react";
import TrendingUp from "@/assets/icons/TrendingUp.svg?react";
import TrendingDown from "@/assets/icons/TrendingDown.svg?react";

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