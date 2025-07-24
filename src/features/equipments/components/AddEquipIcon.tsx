import { useEquipmentsStore } from '../store/EquipmentsStore'
import { Button } from '../../../components/ui/button'
import { Plus } from 'lucide-react'


function AddEquipIcon() {
    console.log("AddEquipIcon render")
    const openEquipModal = useEquipmentsStore(state => state.openEquipModal)

    return (
        <Button variant={"outline"} className='shadow w-full md:w-1/4' onClick={()=>openEquipModal()}>
            Adicionar equipamento
            <Plus/>
        </Button>
    )
}

export default AddEquipIcon
