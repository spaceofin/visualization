import { Props } from "react-apexcharts";

export type ChartType = Props["type"];

export const chartTypes = [
  "line",
  "area",
  "bar",
  "pie",
  "donut",
  "radialBar",
  "scatter",
  "bubble",
  "heatmap",
  "candlestick",
  "boxPlot",
  "radar",
  "polarArea",
  "rangeBar",
  "rangeArea",
  "treemap",
] as const;
