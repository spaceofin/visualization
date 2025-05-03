import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 300, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 200, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 278, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 189, pv: 4800, amt: 2181 },
];

const simpleLineChart = (
  <LineChart width={500} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  </LineChart>
);

const lineChartWithAxis = (
  <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
);

const lineChartWithDashedStroke = (
  <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
);

const lineChartWithInteractions = (
  <LineChart
    width={600}
    height={300}
    data={data}
    margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
);

export default function LineCharts() {
  return (
    <div className="flex flex-col w-[600px] items-end gap-16 text-2xl">
      <div>
        <h2 className="flex justify-end mb-2 pr-4">Simple Line Chart</h2>
        {simpleLineChart}
      </div>
      <div>
        <h2 className="flex justify-end mb-2 pr-4">Line Chart with Axis</h2>
        {lineChartWithAxis}
      </div>
      <div>
        <h2 className="flex justify-end mb-2 pr-4">
          Line Chart with Dashed Stroke
        </h2>
        {lineChartWithDashedStroke}
      </div>
      <div>
        <h2 className="flex justify-end mb-2 pr-4">
          Line Chart with Interactions
        </h2>
        {lineChartWithInteractions}
      </div>
    </div>
  );
}
