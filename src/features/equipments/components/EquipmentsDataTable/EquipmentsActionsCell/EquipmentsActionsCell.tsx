import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { useEquipmentsStore } from "../../../store/EquipmentsStore"
import { Button } from "../../../../../components/ui/button"
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react"
import { Equipment } from "../../../../../types/equipment"
import { Row } from "@tanstack/react-table"



function EquipmentsActionsCell ({ row }: { row: Row<Equipment> }) {
  const equipment = row.original
  const openEquipModal = useEquipmentsStore((state) => state.openEquipModal)
  const openAlertPopup = useEquipmentsStore((state) => state.openAlertPopup)
  const setEditingEquipment = useEquipmentsStore((state) => state.setEditingEquipment)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white z-20 border-2 rounded-xl p-3 " align="end">
        <DropdownMenuItem className="rounded-md my-1 pe-24 p-2 hover:cursor-pointer hover:bg-slate-200 flex items-center" onClick={() => openEquipModal(equipment.id)}>
          <Pencil className="w-4 me-1"/>Editar 
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="rounded-md my-1 pe-24 p-2 hover:cursor-pointer hover:bg-slate-200 flex items-center text-red-700" onClick={() => {setEditingEquipment(equipment); openAlertPopup("delete")}}>
         <Trash2 className="w-4 me-1"/> Excluir
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default EquipmentsActionsCell
