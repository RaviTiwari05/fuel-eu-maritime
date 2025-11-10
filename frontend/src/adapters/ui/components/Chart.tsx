import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function Chart({ baseline, comparison }: any) {
  return (
    <Bar
      data={{
        labels: ["Baseline", "Comparison"],
        datasets: [
          {
            label: "gCO₂e/MJ",
            data: [baseline, comparison],
          },
        ],
      }}
    />
  );
}
