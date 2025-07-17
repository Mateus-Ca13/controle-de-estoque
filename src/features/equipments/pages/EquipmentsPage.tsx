import AddEquipIcon from '../components/AddEquipIcon'
import EquipmentEditModal from '../components/EquipmentEditModal'
import EquipmentsList from '../components/EquipmentsList'
import ResponsePopup from '../components/ResponsePopup'
import useEquipmentsContext from '../hooks/useEquipmentsContext'


function EquipmentsPage() {
    const { equipmentsList } = useEquipmentsContext()

    console.log(equipmentsList)
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
