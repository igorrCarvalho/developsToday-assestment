import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface PopulationChartProps {
  populationData: { year: number; value: number }[] | null;
}

const PopulationChart: React.FC<PopulationChartProps> = ({ populationData }) => {
  if (!populationData || populationData?.length === 0) {
    return <p>No population data available.</p>;
  }

  const data = {
    labels: populationData?.map((item) => item.year),
    datasets: [
      {
        label: 'Population',
        data: populationData?.map((item) => item.value),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Population Over Time',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default PopulationChart;
