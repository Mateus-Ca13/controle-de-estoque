
import AlertPopup from '../../../components/AlertPopup/AlertPopup'
import { EquipmentsDataTable } from '../components/EquipmentsDataTable/EquipmentsDataTable'
import EquipmentsEditModal from '../components/EquipmentsEditModal/EquipmentsEditModal'
import { useEquipmentsStore } from '../store/EquipmentsStore'
import { equipmentsColumns } from '../utils/equipmentsColumns'


function EquipmentsPage() {
    const equipmentsList = useEquipmentsStore(state => state.equipmentsList)

    return (
        <main className='flex w-full justify-center flex-col items-center py-10 '>
            <div className='flex flex-col-reverse md:flex-row gap-2 w-full'>
             
            </div>
            <EquipmentsDataTable columns={equipmentsColumns} data={equipmentsList}/>
            <EquipmentsEditModal/>
            <AlertPopup/>
            
        </main>
    )
}

export default EquipmentsPage
