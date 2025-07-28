import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../../../components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { EquipmentChangeLog } from "../../../types/equipmentChange";
import { changeTypeTranslate } from "../../../utils/formatContent";
import ChangesActionsCell from "../components/ChangesHistoryDatabase/ChangesActionsCell/ChangesActionsCell";

export const changesColumns: ColumnDef<EquipmentChangeLog>[] = [
  {
    accessorKey: "equipId",
    header: ({ column }) => {
      return (
        <Button
        className="px-0!"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className=" h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "name",
    accessorFn: (row) => row.changes?.name?.newValue,
    header: ({ column }) => {
      return (
        <Button
        className="px-0!"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome
          <ArrowUpDown className=" h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorFn: row =>  `${changeTypeTranslate(row.type)}`,
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          className="px-0!"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tipo
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      )
    },
    
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          className="px-0!"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Feito em
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "authorId",
    header: ({ column }) => {
      return (
        <Button
          className="px-0!"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Autor
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      )
    },
  },
  {
    id: "actions",
    header: "Visualizar",
    cell: ChangesActionsCell,
  },
]