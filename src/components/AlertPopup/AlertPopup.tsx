import { useEquipmentsStore } from '../../features/equipments/store/EquipmentsStore'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle } from '../ui/alert-dialog'
import { AlertDialogFooter, AlertDialogHeader } from '../ui/alert-dialog'
import { getEquipmentByIdService } from '../../services/EquipmentsService'
import { Equipment } from '../../types/equipment'
import { useEffect, useState } from 'react'


function AlertPopup() {
    const editingEquipment = useEquipmentsStore(state => state.editingEquipment)
    const alertPopupStateProps = useEquipmentsStore(state=> state.alertPopupStateProps)
    const openAlertPopup = useEquipmentsStore(state=> state.openAlertPopup)
    const closeAlertPopup = useEquipmentsStore(state=> state.closeAlertPopup)
    const createAnEquipment = useEquipmentsStore(state => state.createAnEquipment);
    const deleteAnEquipment = useEquipmentsStore(state => state.deleteAnEquipment)
    const updateAnEquipment = useEquipmentsStore(state => state.updateAnEquipment);
    const createChangeLogEntry = useEquipmentsStore(state=> state.createChangeLogEntry)
    const showResponseToast = useEquipmentsStore(state => state.showResponseToast);
    const closeEquipModal = useEquipmentsStore(state => state.closeEquipModal)
    const openEquipModal = useEquipmentsStore(state => state.openEquipModal)

    const [message, setMessage] = useState<string>("Deseja continuar?")
    const [confirmAction, setConfirmAction] = useState<(()=>void)|undefined>(undefined)

    useEffect(()=>{
        defineAlertType()
    },[alertPopupStateProps.isVisible])

    function defineAlertType () {
        switch (alertPopupStateProps.confirmAction){
            case 'delete':
                setMessage("Deseja excluir o equipamento?")
                setConfirmAction(()=>()=>{excludeEquipment(editingEquipment!.id)})
                break;
            case 'save':
                setMessage("Deseja salvar suas mudanças?")
                setConfirmAction(()=>()=>{submitEquipment(editingEquipment!)})
                break;
            case undefined:
            default:
                closeAlertPopup()
                break;
        }
    }

    async function submitEquipment (equipment: Equipment){;
                
        const response = await getEquipmentByIdService(equipment.id)

        if(!response){
            createChangeLogEntry("create", equipment)
            createAnEquipment(equipment)
            closeEquipModal()
            showResponseToast("Equipamento salvo com sucesso.", "success", 6000)
        }else{
            createChangeLogEntry("update", response)
            updateAnEquipment(equipment.id, equipment)
            closeEquipModal()
            showResponseToast("Equipamento editado com sucesso.", "success", 6000)
        }
                
    }

     async function excludeEquipment(equipId: string) {
        
        const response = await getEquipmentByIdService(equipId)

          if(!response){
             showResponseToast("Algo deu errado.", "error", 6000)
          }else{
            createChangeLogEntry("remove", response)
            deleteAnEquipment(equipId)
            showResponseToast("Equipamento salvo com sucesso.", "success", 6000)
            closeEquipModal()
          }
        
    }

    return (
        <AlertDialog open={alertPopupStateProps.isVisible} onOpenChange={(open)=>open?  openAlertPopup(undefined): closeAlertPopup()}>
            <AlertDialogContent className=''>
                <AlertDialogHeader>
                    <AlertDialogTitle>{message}</AlertDialogTitle>
                        <AlertDialogDescription>
                            Essa ação não poderá ser desfeita. Confirme se realmente deseja prosseguir.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel onClick={()=>{if(alertPopupStateProps.confirmAction === "save"){ openEquipModal(editingEquipment?.id)}}}>Cancelar</AlertDialogCancel>
                <AlertDialogAction 
                onClick={()=>confirmAction!()}>Confirmar </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default AlertPopup
