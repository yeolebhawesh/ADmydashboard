// lib/mockData.ts

export function generateLineData() {
  return {
    labels: Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`),
    datasets: [
      {
        label: 'Visitors',
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000)),
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.4)',
        tension: 0.4,
      },
    ],
  };
}

export function generateBarData() {
  return {
    labels: ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'],
    datasets: [
      {
        label: 'Campaign Reach',
        data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 10000)),
        backgroundColor: ['#6366f1', '#10b981', '#f59e0b', '#ef4444'],
      },
    ],
  };
}

export function generatePieData() {
  return {
    labels: ['SEO', 'PPC', 'Email', 'Social'],
    datasets: [
      {
        label: 'Marketing Spend',
        data: Array.from({ length: 4 }, () => Math.floor(Math.random() * 1000)),
        backgroundColor: ['#6366f1', '#10b981', '#f59e0b', '#ef4444'],
        borderWidth: 1,
      },
    ],
  };
}

export function fetchMetrics() {
  return [
    { title: 'Revenue', value: `$${(Math.random() * 100000).toFixed(0)}`, change: '+12%' },
    { title: 'Users', value: (Math.random() * 10000).toFixed(0), change: '+8%' },
    { title: 'Conversions', value: (Math.random() * 3000).toFixed(0), change: '-5%' },
    { title: 'Growth', value: `${(Math.random() * 100).toFixed(1)}%`, change: '+2%' },
  ];
}
