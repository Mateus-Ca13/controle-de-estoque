import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "../../../components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "../../../components/ui/dialog"
import { useEquipmentsStore } from "../store/EquipmentsStore";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "../../../components/ui/input";

function EquipmentsEditModal() {
    const editingEquipment = useEquipmentsStore(state => state.editingEquipment);
    const openAlertPopup = useEquipmentsStore((state) => state.openAlertPopup)
    const setEditingEquipment = useEquipmentsStore(state => state.setEditingEquipment)
    const isEquipModalOpen= useEquipmentsStore(state => state.isEquipModalOpen);
    const closeEquipModal = useEquipmentsStore(state => state.closeEquipModal)
    const openEquipModal = useEquipmentsStore(state => state.openEquipModal)

    
    
    return (
        <Dialog 
        open={isEquipModalOpen} 
        onOpenChange={(open) => open ? openEquipModal(): closeEquipModal()}>
            <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Editar/cadastrar equipamento</DialogTitle>
            <DialogDescription>
              Altere as informações desejadas e salve para atualizar os dados.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
                <Label>ID</Label>
                <Input onChange={
                (e: React.ChangeEvent<HTMLInputElement>)=> setEditingEquipment({...editingEquipment!, id: e.currentTarget.value})} disabled id="id" name="id" defaultValue={editingEquipment?.id} />
            </div>
            <div className="grid gap-3">
                <Label>Nome<span className="text-red-600">*</span></Label>
                <Input onChange={
                (e: React.ChangeEvent<HTMLInputElement>)=> 
                setEditingEquipment({...editingEquipment!, name: e.currentTarget.value})} 
                id="Nome" 
                name="name" 
                defaultValue={editingEquipment?.name} />
            </div>
            <div className="grid gap-3">
                <Label>Detalhes</Label>
                <Input onChange={
                (e: React.ChangeEvent<HTMLInputElement>)=> 
                setEditingEquipment({...editingEquipment!, details: e.currentTarget.value})} 
                id="details" 
                name="details" 
                defaultValue={editingEquipment?.details} />
            </div>
            <div className="flex gap-3">
                <div className="grid gap-3">
                <Label>Marca<span className="text-red-600">*</span></Label>
                <Input onChange={
                    (e: React.ChangeEvent<HTMLInputElement>)=> 
                    setEditingEquipment({...editingEquipment!, brand: e.currentTarget.value})} 
                    id="brand" 
                    name="brand" 
                    defaultValue={editingEquipment?.brand} />
                </div>
                <div className="grid gap-3">
                <Label>Modelo</Label>
                <Input onChange={
                    (e: React.ChangeEvent<HTMLInputElement>)=> 
                    setEditingEquipment({...editingEquipment!, model: e.currentTarget.value})} 
                    id="model" 
                    name="model" 
                    defaultValue={editingEquipment?.model} />
                </div>
            </div>
            <div className="grid gap-3">
                <Label>Quantidade<span className="text-red-600">*</span></Label>
                <Input min={0}  onChange={
                (e: React.ChangeEvent<HTMLInputElement>)=> 
                setEditingEquipment({...editingEquipment!, amount: Number(e.currentTarget.value)})} type="number" 
                id="amount" 
                name="amount" 
                defaultValue={editingEquipment?.amount} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button onClick={()=>openAlertPopup("save")} type="submit">Salvar</Button>
          </DialogFooter>
        </DialogContent>
        </Dialog>
    )
}

export default EquipmentsEditModal
