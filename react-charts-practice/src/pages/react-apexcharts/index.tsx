import Chart from "./Chart";
import { chartTypes } from "./types";

export default function ReactApexcharts() {
  return (
    <div className="flex flex-col py-14 px-16 gap-20">
      <h1 className="text-4xl font-bold text-slate-800 pl-10">
        React ApexCharts
      </h1>
      {chartTypes.map((type) => (
        <div>
          <h2 className="text-3xl pl-2 pb-2 text-gray-700/80">{type}</h2>
          <Chart type={type} />
        </div>
      ))}
    </div>
  );
}
