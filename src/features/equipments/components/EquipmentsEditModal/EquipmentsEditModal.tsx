import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "../../../../components/ui/dialog"
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
            <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Cadastrar/editar equipamento</DialogTitle>
            <DialogDescription>
              Altere as informações desejadas e salve para atualizar os dados.
            </DialogDescription>
          </DialogHeader>
          <EquipmentsEditForm/>
        </DialogContent>
        </Dialog>
    )
}

export default EquipmentsEditModal
