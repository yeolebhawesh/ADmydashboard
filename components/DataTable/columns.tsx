// components/DataTable/columns.tsx
'use client';

import * as React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Campaign } from '@/types/campaign'; // ✅ Use shared type

export const columns: ColumnDef<Campaign>[] = [
  {
    accessorKey: 'campaign',
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Campaign
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue('campaign')}</div>
    ),
    enableSorting: true,
    enableColumnFilter: true,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      return <Badge variant="outline">{status}</Badge>;
    },
    filterFn: (row, columnId, filterValue) => {
      if (!filterValue) return true;
      return row.getValue(columnId) === filterValue;
    },
    enableColumnFilter: true,
  },
  {
    accessorKey: 'impressions',
    header: 'Impressions',
    cell: ({ row }) => <div>{row.getValue('impressions')}</div>,
    enableSorting: true,
  },
];
