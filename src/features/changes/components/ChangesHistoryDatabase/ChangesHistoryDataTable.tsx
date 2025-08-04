"use client"
 
import { ColumnDef, flexRender, getCoreRowModel, getSortedRowModel, getPaginationRowModel, SortingState, useReactTable, ColumnFiltersState, getFilteredRowModel } from "@tanstack/react-table"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from  "../../../../components/ui/table"
import { Button } from "../../../../components/ui/button"
import { useEffect, useState } from "react"
import { Input } from "../../../../components/ui/input"
import { useChangesStore } from "../../store/ChangesStore"
import { Loader2Icon, RefreshCcw } from "lucide-react"
import { toast } from "sonner"
import { EquipmentChangeLog } from "../../../../types/equipmentChange"

interface ChangesHistoryDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}
 
export function ChangesHistoryDataTable<TData, TValue>({ columns, data }: ChangesHistoryDataTableProps<TData, TValue>) {
  const setFilteredChangeLogsList = useChangesStore(state => state.setFilteredChangesLogList)
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const fetchChangesHistoryList = useChangesStore(state => state.fetchChangesHistoryList)

  const  refreshDataList = () => {
      toast("Buscando novos registros...",{icon: <Loader2Icon size={18} className="animate-spin" />})
     fetchChangesHistoryList()
  }

  const table = useReactTable({
    data, columns, 
    getCoreRowModel: getCoreRowModel(), 
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {sorting, columnFilters},
  })

     useEffect(()=>{
      //console.log(table.getFilteredRowModel().rows)
      const filteredList: EquipmentChangeLog[] = table.getFilteredRowModel().rows.map(row => row.original as EquipmentChangeLog)
      console.log(filteredList)
      setFilteredChangeLogsList(filteredList)
      
    },[table.getFilteredRowModel().rows])
 

  return (
    <div className="overflow-hidden border p-2 px-4 rounded-md w-full my-4 dark:bg-neutral-800 bg-white  shadow-lg">
       <div className="flex flex-col-reverse md:flex-row items-center py-4 pb-10 gap-4">
        <Input
          placeholder="Filtrar alterações..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="w-full md:w-1/2"
        />
        <Button onClick={()=>refreshDataList()} className="w-full md:w-1/4 px-8!" variant={"default"}>Atualizar <RefreshCcw size={16}/></Button>
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead className="text-center" key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
               className="text-center"
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
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
      <div className="flex items-center justify-end space-x-2 py-4 mx-2 md:mx-8">
        <div className="font-semibold me-4 text-xs md:text-sm">
          Página {table.getState().pagination.pageIndex +1} de {table.getPageCount()}
        </div>
        <Button
          variant="default"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Anterior
        </Button>
        <Button
          variant="default"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Próximo
        </Button>
      </div>
    </div>
  )
}