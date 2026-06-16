import axios from "axios";
import type { IChartData } from "../types/chart";

export const getChartData = async (): Promise<IChartData[]> => {
  const response = await axios.get("http://localhost:5000/chart");
  return response.data;
};