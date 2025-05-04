import { Doughnut } from "react-chartjs-2";
import { productData } from "./data";

const data = {
  labels: productData.map((product) => product.name),
  datasets: [
    {
      label: "Market Share",
      data: productData.map((product) => product.sales),
      backgroundColor: ["#f87171", "#60a5fa", "#34d399", "#facc15"],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: false,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        font: {
          size: 18,
        },
        padding: 30,
      },
    },
    title: {
      display: true,
      text: "Doughnut Chart",
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

export default function DoughnutChart() {
  return <Doughnut width={800} height={800} data={data} options={options} />;
}
