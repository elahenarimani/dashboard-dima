import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { getChartData } from "@/services/chart";
import { useEffect, useState } from "react";
import type { IChartData } from "@/types/chart";

const RenderLineChart = () => {
  const [chartData, setChartData] = useState<IChartData[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchChart = async () => {
      setLoading(true);
      try {
        const data = await getChartData();
        console.log("API Response:", data);

        setChartData(data);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchChart();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (chartData.length === 0) {
    return <p>Chart Data Not Found</p>;
  }
  console.log("chartData:", chartData);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        className="w-full h-full"
        data={chartData}
        margin={{ top: 50, right: 32, left: 32, bottom: 20 }} //space between chart and axis
      >
        <defs>
          {/* Define a gradient for the area */}
          <linearGradient id="gradientColor" x1="0" y1="0" x2="0" y2="1">
            {/* Darker color near the chart line */}
            <stop offset="0%" stopColor="#4880FF" stopOpacity={0.6} />
            {/* Lighter color near the X-axis */}
            <stop offset="100%" stopColor="#EAF0FD" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name" //show data on x axis
          padding={{ left: 0, right: 0 }} // Adds padding to the left and right of the X-axis
          axisLine={false} // Removes the X-axis line
          tickLine={false}
          tickMargin={16}
          tick={{ fontSize: 12, fill: "rgba(43, 48, 52, 0.4)" }} // Customize tick color and font size
        />
        <YAxis
          domain={[0.2, 1]} // Adjusted to start from 20%
          tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
          ticks={[0.2, 0.4, 0.6, 0.8, 1]} // Specifies the ticks to display
          tickMargin={16} //Adds margin between the tick label and the axis
          padding={{ top: 0, bottom: 0 }} // Adds padding on the top and bottom of the Y-axis
          axisLine={false} // Removes the X-axis line
          tickLine={false}
          tick={{ fontSize: 12, fill: "rgba(43, 48, 52, 0.4)" }} // Customize tick color and font size
        />
        <CartesianGrid horizontal={true} vertical={false} stroke="#e0e0e0" />
        {/* Pass the custom tooltip to the Tooltip component */}
        <Tooltip
          contentStyle={{
            borderRadius: "8px",
            border: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
          formatter={(value) => {
            if (typeof value === "number") {
              return [`${value} sail`, ""];
            }
            return [`${value}`, ""];
          }}
          labelFormatter={() => ""}
        />
        <Area
          type="linear" // Set the line type to linear to ensure straight edges
          dataKey="uv"
          stroke="#4880FF"
          fill="url(#gradientColor)" // Use the defined gradient
          dot={{ fill: "#4379EE", r: 3 }} // Show dots on each data point
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
export default RenderLineChart;
