import Pending from "../assets/icons/Pending.svg?react";
import Sales from "../assets/icons/Sailes.svg?react";
import Order from "../assets/icons/Order.svg?react";
import User from "../assets/icons/User.svg?react";
const cards = [
  {
    title: "Total Pending",
    value: "40,689",
    subtitle: "Up from yesterday",
    percent: "8.5%",
    trendText: "",
    icon: <Pending /> ,
    bgColor: "var(--color-orange)",
  },
  {
    title: "Total Sales",
    value: "40,689",
    subtitle: "Down from yesterday",
    percent: "8.5%",
    trendText: "",
    icon: <Sales /> ,
    bgColor: "var(--color-green)",
  },
  {
    title: "Total Order",
    value: "10,293",
    subtitle: "Up from past week",
    percent: "1.3%",
    trendText: "",
    icon: <Order />,
    bgColor: "var(--color-yellow)",
  },
  {
    title: "Total User",
    value: "40,689",
    subtitle: "Up from yesterday",
    percent: "8.5%",
    trendText: "",
    icon: <User />,
    bgColor: "var(--color-blue)",
  },
];