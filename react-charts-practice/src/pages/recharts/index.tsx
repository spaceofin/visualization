import LineCharts from "./LineCharts";

export default function Recharts() {
  return (
    <div className="flex flex-col py-14 px-16 gap-20">
      <h1 className="text-4xl font-bold text-slate-800 pl-10">ReCharts</h1>
      <LineCharts />
    </div>
  );
}
