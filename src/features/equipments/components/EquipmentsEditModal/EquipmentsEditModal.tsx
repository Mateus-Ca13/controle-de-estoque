import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "../../../../components/ui/dialog"
import { ScrollArea } from "../../../../components/ui/scroll-area";
import { useEquipmentsStore } from "../../store/EquipmentsStore";
import EquipmentsEditForm from "./EquipmentsEditForm/EquipmentsEditForm";

function EquipmentsEditModal() {
    const isEquipModalOpen= useEquipmentsStore(state => state.isEquipModalOpen);
    const closeEquipModal = useEquipmentsStore(state => state.closeEquipModal)
    const openEquipModal = useEquipmentsStore(state => state.openEquipModal)

    
    
    return (
        <Dialog 
        open={isEquipModalOpen} 
        onOpenChange={(open) => open ? openEquipModal(): closeEquipModal()}>
            <DialogContent className="sm:max-w-[425px] md:max-w-1/3">
          <DialogHeader>
            <DialogTitle>Cadastrar/editar equipamento</DialogTitle>
            <DialogDescription>
              Altere as informações desejadas e salve para atualizar os dados.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-96 md:h-full pt-4 pe-4">
            <EquipmentsEditForm/>
          </ScrollArea>
        </DialogContent>
        </Dialog>
    )
}

export default EquipmentsEditModal
