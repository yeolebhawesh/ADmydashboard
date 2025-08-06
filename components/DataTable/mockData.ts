import { Campaign } from '@/types/campaign';

export const campaigns: Campaign[] = [
  {
    id: '1',
    campaign: 'Summer Sale',
    impressions: 12000,
    clicks: 800,
    ctr: 6.67,
    conversions: 75,
    cpc: 0.25,
    revenue: 5000,
    status: 'Active',
  },
  {
    id: '2',
    campaign: 'Winter Promo',
    impressions: 10000,
    clicks: 500,
    ctr: 5.0,
    conversions: 50,
    cpc: 0.30,
    revenue: 3200,
    status: 'Paused',
  },
  {
    id: '3',
    campaign: 'Spring Launch',
    impressions: 8000,
    clicks: 600,
    ctr: 7.5,
    conversions: 90,
    cpc: 0.22,
    revenue: 4500,
    status: 'Active',
  },
];
