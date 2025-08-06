'use client'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  getPaginationRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState,
} from '@tanstack/react-table'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
  })

  return (
  <div className="space-y-4">
    {/* Search + Pagination Controls */}
    <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 justify-between">
      <Input
        placeholder="Search campaigns..."
        value={(table.getColumn('campaign')?.getFilterValue() as string) ?? ''}
        onChange={(event) =>
          table.getColumn('campaign')?.setFilterValue(event.target.value)
        }
        className="w-full md:max-w-sm text-sm px-4 py-2"
      />
      <div className="flex justify-between md:justify-end space-x-2">
        <Button
          variant="ghost"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="text-sm"
        >
          Previous
        </Button>
        <Button
          variant="ghost"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="text-sm"
        >
          Next
        </Button>
      </div>
    </div>

    {/* Table Wrapper - Responsive */}
    <div className="relative overflow-x-auto rounded-xl shadow-xl backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/10 transition-all">
      {/* Optional horizontal scroll hint */}
      <div className="absolute top-2 right-4 z-10 text-xs text-white/60 md:hidden animate-pulse">
        ← Scroll →
      </div>

      <Table className="min-w-[600px] text-sm">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="text-sm font-semibold whitespace-nowrap px-4 py-2 text-white/90 dark:text-zinc-200"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, idx) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
                className={`transition duration-300 ease-in-out hover:bg-white/10 dark:hover:bg-white/5 ${
                  idx % 2 === 0 ? 'bg-white/5 dark:bg-zinc-800/20' : 'bg-transparent'
                }`}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="px-4 py-3 whitespace-nowrap text-white/90 dark:text-zinc-200 max-w-[160px] overflow-hidden text-ellipsis"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  </div>
)

}
