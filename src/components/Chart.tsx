// src/components/Chart.tsx

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartComponent() {
  const data = {
    labels: ["2023-10-01", "2023-10-02", "2023-10-03", "2023-10-04"],
    datasets: [
      {
        label: "프로젝트 진행 상태",
        data: [3, 2, 5, 4],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "프로젝트 진행 통계",
      },
    },
  };

  return <Bar data={data} options={options} />;
}
