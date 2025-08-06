// types/campaign.ts
export type CampaignStatus = 'Active' | 'Paused' | 'Ended';

export interface Campaign {
  id: string;
  campaign: string;
  impressions: number;
  clicks: number;
  conversions: number;
  cpc: number;
  revenue: number;
  ctr: number;
  status: CampaignStatus;
}
