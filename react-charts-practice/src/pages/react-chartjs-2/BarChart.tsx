import { Bar } from "react-chartjs-2";
import { productData } from "./data";

const data = {
  labels: productData.map((product) => product.name),
  datasets: [
    {
      label: "Sales",
      data: productData.map((product) => product.sales),
      backgroundColor: ["#f87171", "#60a5fa", "#facc15", "#4ade80"],
    },
  ],
};

const options = {
  responsive: false,
  scales: {
    x: {
      ticks: {
        font: {
          size: 18,
        },
      },
    },
    y: {
      beginAtZero: true,
      suggestedMax: Math.max(...productData.map((p) => p.sales)) * 1.2,
    },
  },
  plugins: {
    legend: {
      position: "left" as const,
      labels: {
        font: {
          size: 18,
        },
        boxWidth: 0,
      },
    },
    title: {
      display: true,
      text: "Bar Chart",
      align: "start" as const,
      font: {
        size: 26,
        weight: "normal" as const,
      },
      padding: {
        bottom: 30,
      },
    },
  },
};

export default function BarChart() {
  return <Bar width={800} height={400} data={data} options={options} />;
}
