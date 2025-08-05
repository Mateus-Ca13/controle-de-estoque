"use client"
 
import { ColumnDef, flexRender, getCoreRowModel, getSortedRowModel, getPaginationRowModel, SortingState, useReactTable, ColumnFiltersState, getFilteredRowModel } from "@tanstack/react-table"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from  "../../../../components/ui/table"
import { Button } from "../../../../components/ui/button"
import { useEffect, useState } from "react"
import { Input } from "../../../../components/ui/input"
import AddEquipIcon from "../AddEquipIcon/AddEquipIcon"
import { CheckCircle, Loader2Icon, RefreshCcw } from "lucide-react"
import { useEquipmentsStore } from "../../store/EquipmentsStore"
import { toast } from "sonner"
import { Equipment } from "../../../../types/equipment"

interface EquipmentsDataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}
 
export function EquipmentsDataTable<TData, TValue>({ columns, data }: EquipmentsDataTableProps<TData, TValue>) {

  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const fetchEquipmentsList = useEquipmentsStore(state => state.fetchEquipmentsList)
  const setFilteredEquipmentsList = useEquipmentsStore(state => state.setFilteredEquipmentsList)

  const  refreshDataList = () => {
        toast("Buscando novos registros...",{icon: <Loader2Icon size={18} className="animate-spin" />})
        fetchEquipmentsList()
        setTimeout(()=>{toast("Feed Atualizado!", {icon: <CheckCircle size={18} />})},4000)
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
    const filteredList: Equipment[] = table.getFilteredRowModel().rows.map(row => row.original as Equipment)
    console.log(filteredList)
    setFilteredEquipmentsList(filteredList)
    
  },[table.getFilteredRowModel().rows])
 

  return (
    <div className="overflow-hidden border p-2 px-4 rounded-md w-full my-4 dark:bg-neutral-800 bg-white shadow-lg">
       <div className="flex flex-col-reverse md:flex-row items-center py-4 pb-10 gap-4">
        <Input
          placeholder="Filtrar equipamentos..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="w-full md:w-1/2"
        />
        <AddEquipIcon/>
        <Button onClick={()=>refreshDataList()} className="w-full md:w-1/4 px-8! bg-neutral-700 text-white hover:bg-neutral-600" variant={"default"}>Atualizar <RefreshCcw size={16}/></Button>
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
                Sem resultados.
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