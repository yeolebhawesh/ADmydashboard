'use client'

import * as React from 'react'
import { Input } from '@/components/ui/input'
import { Table } from '@tanstack/react-table'
import { Campaign } from '@/types/campaign'
import { useDebounce } from 'use-debounce'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface DataTableToolbarProps {
  table: Table<Campaign>
}

export function DataTableToolbar({ table }: DataTableToolbarProps) {
  const [search, setSearch] = React.useState('')
  const [debounced] = useDebounce(search, 300)

  React.useEffect(() => {
    table.getColumn('campaign')?.setFilterValue(debounced)
  }, [debounced])

  return (
    <div className="flex flex-col md:flex-row gap-4 py-4">
      <Input
        placeholder="Search campaigns..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-sm"
      />
      <Select
        onValueChange={(value) =>
          table.getColumn('status')?.setFilterValue(value)
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Active">Active</SelectItem>
          <SelectItem value="Paused">Paused</SelectItem>
          <SelectItem value="Ended">Ended</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
