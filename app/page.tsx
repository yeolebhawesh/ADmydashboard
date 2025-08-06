'use client';

import MetricsOverview from '@/components/MetricsOverview';
import LineChart from '@/components/Charts/LineChart';
import BarChart from '@/components/Charts/BarChart';
import PieChart from '@/components/Charts/PieChart';
import { columns } from '@/components/DataTable/columns';
import { DataTable } from '@/components/DataTable/DataTable';
import { useEffect, useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import html2pdf from 'html2pdf.js';
import { Button } from '@/components/ui/button';
import { Campaign } from '@/types/campaign';
import { PDFDownloadLink } from '@react-pdf/renderer'
import { ReportPDF } from '@/components/PDF/ReportPDF'
import { campaigns } from '@/components/DataTable/mockData'
import { PDFDownloadButton } from '@/components/PDF/PDFDownloadButton'




{/* <PDFDownloadLink
  document={<ReportPDF data={campaigns} />}
  fileName="admybrand-report.pdf"
>
  {({ loading }) =>
    loading ? 'Generating PDF...' : <Button>Download PDF</Button>
  }
</PDFDownloadLink> */}


export default function HomePage() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => t + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const generateChartData = () => {
    const categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return categories.map((name) => ({
      name,
      value: Math.floor(Math.random() * 1000),
    }));
  };

  const chartData = generateChartData();

  const campaignData: Campaign[] = [
  {
    id: '1',
    campaign: 'Summer Sale',
    impressions: 15000,
    clicks: 1200,
    conversions: 300,
    cpc: 0.45,
    revenue: 1200,
    status: 'Active',
    ctr: (1200 / 15000) * 100,
  },
  {
    id: '2',
    campaign: 'Winter Deals',
    impressions: 11000,
    clicks: 900,
    conversions: 180,
    cpc: 0.55,
    revenue: 900,
    status: 'Paused',
    ctr: (900 / 11000) * 100,
  },
  {
    id: '3',
    campaign: 'Back to School',
    impressions: 20000,
    clicks: 1700,
    conversions: 450,
    cpc: 0.4,
    revenue: 1600,
    status: 'Ended',
    ctr: (1700 / 20000) * 100,
  },
  {
    id: '4',
    campaign: 'Diwali Blast',
    impressions: 25000,
    clicks: 2100,
    conversions: 580,
    cpc: 0.37,
    revenue: 1950,
    status: 'Active',
    ctr: (2100 / 25000) * 100,
  },
  {
    id: '5',
    campaign: 'New Year Launch',
    impressions: 13000,
    clicks: 1100,
    conversions: 270,
    cpc: 0.5,
    revenue: 1000,
    status: 'Paused',
    ctr: (1100 / 13000) * 100,
  },
];


  const exportPDF = () => {
    const element = document.getElementById('dashboard-content');
    if (element) {
      html2pdf().from(element).save('dashboard.pdf');
    }
  };

  return (
    <main className="p-4 sm:p-6 space-y-8 max-w-screen-xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold">📈 ADmyBRAND Insights</h1>
        <div className="flex gap-2 flex-wrap">
          <ThemeToggle />
          <Button onClick={exportPDF}>Export as PDF</Button>
        </div>
      </div>

      <div id="dashboard-content" className="space-y-8">
        <MetricsOverview />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <LineChart data={chartData} key={`line-${tick}`} />
          <BarChart data={chartData} key={`bar-${tick}`} />
          <PieChart data={chartData} key={`pie-${tick}`} />
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">📊 Campaign Performance</h2>
          <DataTable columns={columns} data={campaignData} />
        </section>
      </div>
    </main>
  );
}
