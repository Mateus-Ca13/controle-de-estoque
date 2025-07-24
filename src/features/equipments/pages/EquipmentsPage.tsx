
import AlertPopup from '../../../components/AlertPopup/AlertPopup'
import { EquipmentsDataTable } from '../components/EquipmentsDataTable'
import EquipmentsEditModal from '../components/EquipmentsEditModal'
import ResponseToast from '../components/ResponseToast'
import { useEquipmentsStore } from '../store/EquipmentsStore'
import { equipmentsColumns } from '../utils/equipmentsColumns'


function EquipmentsPage() {
    console.log("EquipmentsPage render")
    const equipmentsList = useEquipmentsStore(state => state.equipmentsList)

    return (
        <main className='flex justify-center items-center h-screen bg-slate-200'>
            
            <ResponseToast/>
            <EquipmentsDataTable columns={equipmentsColumns} data={equipmentsList}/>
            <EquipmentsEditModal/>
            <AlertPopup/>
            
        </main>
    )
}

export default EquipmentsPage
