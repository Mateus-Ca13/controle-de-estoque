import { Equipment } from "../../../types/equipment";
import { ColumnDef } from "@tanstack/react-table"
import EquipmentsActionsCell from "../components/EquipmentsActionsCell";
import { Button } from "../../../components/ui/button";
import { ArrowUpDown } from "lucide-react";

export const equipmentsColumns: ColumnDef<Equipment>[] = [
  {
    accessorKey: "id",
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
    header: ({ column }) => {
      return (
        <Button
          className="px-0!"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      )
    },
    
  },
  {
    accessorKey: "details",
    header: "Detalhes",
  },
  {
    accessorKey: "brand",
    header: "Marca",
  },
  {
    accessorKey: "model",
    header: "Modelo",
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
        className="px-0!"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Quantidade
          <ArrowUpDown className="h-4 w-4" />
         
        </Button>
      )
    },
  },
  {
    id: "actions",
    header: "Ações",
    cell: EquipmentsActionsCell,
  },
]