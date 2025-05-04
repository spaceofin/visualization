import BarChart from "./BarChart";
import DoughnutChart from "./DoughtnutChart";
import LineChart from "./LineCharts";
import "./chartConfig.js";

export default function ReactChartjs2() {
  return (
    <div className="flex flex-col py-14 px-16 gap-20">
      <h1 className="text-4xl font-bold text-slate-800 pl-10">
        React Chartjs 2
      </h1>
      <LineChart />
      <BarChart />
      <DoughnutChart />
    </div>
  );
}
