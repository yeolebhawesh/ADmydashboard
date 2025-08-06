'use client';

import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function RealtimeLineChart() {
  const [data, setData] = useState<number[]>([65, 59, 80, 81, 56, 55, 40]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev.slice(1), Math.floor(Math.random() * 100)];
        return newData;
      });
    }, 3000); // update every 3s

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const chartData = {
    labels: Array.from({ length: data.length }, (_, i) => `T${i + 1}`),
    datasets: [
      {
        label: 'Live Data',
        data,
        fill: false,
        borderColor: '#3b82f6',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 500,
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-md">
      <h2 className="text-lg font-semibold mb-4 text-zinc-800 dark:text-zinc-100">Real-Time Line Chart</h2>
      <Line data={chartData} options={options} />
    </div>
  );
}
