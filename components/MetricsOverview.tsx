'use client';

import MetricCard from './MetricCard';
import { useEffect, useState } from 'react';

export default function MetricsOverview() {
  const [metrics, setMetrics] = useState([
    { title: "Revenue", value: "$24,000" },
    { title: "Users", value: "1,254" },
    { title: "Sessions", value: "3,876" },
    { title: "Conversions", value: "142" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((metric) => ({
          ...metric,
          value: generateRandomValue(metric.title),
        }))
      );
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  function generateRandomValue(title: string) {
    switch (title) {
      case "Revenue":
        return `$${(20000 + Math.random() * 10000).toFixed(0)}`;
      case "Users":
        return (1000 + Math.random() * 500).toFixed(0);
      case "Sessions":
        return (3000 + Math.random() * 1000).toFixed(0);
      case "Conversions":
        return (100 + Math.random() * 50).toFixed(0);
      default:
        return "0";
    }
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {metrics.map((metric, idx) => (
        <MetricCard key={idx} title={metric.title} value={metric.value} />
      ))}
    </div>
  );
}
