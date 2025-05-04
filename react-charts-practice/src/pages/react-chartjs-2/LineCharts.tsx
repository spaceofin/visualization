import { Line } from "react-chartjs-2";
import { productData } from "./data";

const data = {
  labels: productData.map((product) => product.name),
  datasets: [
    {
      label: "Sales",
      data: productData.map((product) => product.sales),
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      tension: 0.3,
    },
  ],
};

const options = {
  responsive: false,
  scales: {
    y: {
      beginAtZero: true,
      suggestedMax: Math.max(...productData.map((p) => p.sales)) * 1.2,
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
      align: "end" as const,
      labels: {
        font: {
          size: 18,
        },
        usePointStyle: true,
      },
    },
    title: {
      display: true,
      text: "Line Chart",
      align: "start" as const,
      font: {
        size: 26,
        weight: "normal" as const,
      },
    },
  },
};

const LineChart = () => {
  return <Line width={800} height={400} data={data} options={options} />;
};

export default LineChart;
