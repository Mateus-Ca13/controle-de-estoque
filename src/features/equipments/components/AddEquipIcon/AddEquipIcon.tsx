import { useEquipmentsStore } from '../../store/EquipmentsStore'
import { Button } from '../../../../components/ui/button'
import { PiPlus } from 'react-icons/pi'


function AddEquipIcon() {
    const openEquipModal = useEquipmentsStore(state => state.openEquipModal)
    
    return (
        <Button variant={"success"} className='dark:text-white shadow w-full md:w-1/3 h-full' onClick={()=>openEquipModal()}>
            Adicionar equipamento
            <PiPlus/>
        </Button>
    )
}

export default AddEquipIcon
