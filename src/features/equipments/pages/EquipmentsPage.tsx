
import AddEquipIcon from '../components/AddEquipIcon'
import EquipmentEditModal from '../components/EquipmentEditModal'
import EquipmentsList from '../components/EquipmentsList'
import ResponsePopup from '../components/ResponsePopup'
import { useEquipmentsStore } from '../store/EquipmentsStore'


function EquipmentsPage() {
    console.log("EquipmentsPage render")
    const equipmentsList = useEquipmentsStore(state => state.equipmentsList)

    return (
        <main>
            <ResponsePopup/>
            <EquipmentsList equipments={equipmentsList}/>
            <EquipmentEditModal/>
            <AddEquipIcon/>
        </main>
    )
}

export default EquipmentsPage
