
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,

  ResponsiveContainer,
  
} from "recharts";
const data = [
  { name: "5k", uv: 0.2 },
  { name: "10k", uv: 0.8 },
  { name: "15k", uv: 0.6 },
  { name: "20k", uv: 0.5 },
  { name: "25k", uv: 0.32 },
  { name: "30k", uv: 0.7 },
  { name: "35k", uv: 0.8 },
  { name: "40k", uv: 0.6 },
  { name: "45k", uv: 0.9 },
  { name: "50k", uv: 0.349 },
  { name: "55k", uv: 0.7 },
  { name: "60k", uv: 0.2 },
];
// interface TooltipPayload {
//   name: string; 
//   value: number | string; 
//   color?: string; 
//   fill?: string; 
//   unit?: string; 
//   payload?: any; 
//   dataKey?: string; 
// }
// interface CustomTooltipProps {
//   active: boolean;
//   payload: TooltipPayload[] | undefined;
// }
// const CustomTooltip = ({ active, payload }: CustomTooltipProps ) => {
//   if (active && payload && payload.length) {
//     return (
//       <div
//         className="custom-tooltip"
//         style={{
//           backgroundColor: "#4880FF",
//           // border: "1px solid #ccc",
//           // padding: "1px",
//           color:"white",
//           height:"27px"
//         }}
//       >
//         {/* Display only the 'uv' value */}
//         <p>{`uv: ${payload[0].value}`}</p>
//       </div>
//     );
//   }

//   return null;
// };
const RenderLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        className="w-full h-full"
        data={data}
        margin={{ top: 50, right: 32, left: 32, bottom: 58 }} //space between chart and axis
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
          dataKey="name"//show data on x axis
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
          tickMargin={73} //Adds margin between the tick label and the axis
          padding={{ top: 0, bottom: 0 }} // Adds padding on the top and bottom of the Y-axis
          axisLine={false} // Removes the X-axis line
          tickLine={false}
          tick={{ fontSize: 12, fill: "rgba(43, 48, 52, 0.4)" }} // Customize tick color and font size
        />
        <CartesianGrid vertical={false} stroke="#e0e0e0" />
        <CartesianGrid strokeDasharray="" />
        {/* Pass the custom tooltip to the Tooltip component */}
       
        <Area
          type="linear" // Set the line type to linear to ensure straight edges
          dataKey="uv"
          stroke="#4880FF"
          fill="url(#gradientColor)" // Use the defined gradient
          dot={{ fill: "#4379EE", r: 3 }} // Show dots on each data point
        />
         {/* <Tooltip content={<CustomTooltip />} 
        //show data by hover
        /> */}
      </AreaChart>
    </ResponsiveContainer>
  );
};
export default RenderLineChart;
