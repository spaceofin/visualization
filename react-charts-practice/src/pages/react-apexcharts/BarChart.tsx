import { useState } from "react";
import Chart from "react-apexcharts";
import { ninetiesData, twoThousandsData } from "./data";

const initialOptions = {
  chart: {
    id: "bar-chart",
  },
  xaxis: {
    categories: ninetiesData.categories,
  },
};

const initialSeries = [
  {
    name: "series-1",
    data: ninetiesData.data,
  },
];

export default function BarChart() {
  const [options, setOptions] = useState(initialOptions);
  const [series, setSeries] = useState(initialSeries);
  const [isNinetiesData, setIsNinetiesData] = useState(true);

  const updateChart = () => {
    const newOptions = {
      ...options,
      xaxis: {
        categories: twoThousandsData.categories,
      },
    };

    const newSeries = [
      {
        name: "series-1",
        data: twoThousandsData.data,
      },
    ];

    setOptions(newOptions);
    setSeries(newSeries);
  };

  const resetChart = () => {
    setOptions(initialOptions);
    setSeries(initialSeries);
  };

  return (
    <div className="flex gap-5">
      <Chart
        options={options}
        series={series}
        type="bar"
        width={600}
        height={350}
      />
      <div className="py-2">
        <button
          className="bg-blue-600/90 text-white rounded-md text-xl flex justify-center items-center h-10 w-50 hover:cursor-pointer "
          onClick={() => {
            isNinetiesData ? updateChart() : resetChart();
            setIsNinetiesData(!isNinetiesData);
          }}>
          {isNinetiesData ? "Show 2000s Data" : "Show 90s Data"}
        </button>
      </div>
    </div>
  );
}
