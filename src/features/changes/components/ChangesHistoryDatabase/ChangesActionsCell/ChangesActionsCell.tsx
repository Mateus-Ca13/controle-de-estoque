import { EquipmentChangeLog } from '../../../../../types/equipmentChange'
import { Row } from '@tanstack/react-table'
import { useChangesStore } from '../../../store/ChangesStore'
import { PiEyeBold } from 'react-icons/pi'


function ChangesActionsCell({ row }: { row: Row<EquipmentChangeLog> }) {

    const openChangesLogModal = useChangesStore(state => state.openChangesLogModal)
    const changeLog = row.original

    return (
        <button className='hover:opacity-45 hover:cursor-pointer' onClick={()=>openChangesLogModal(changeLog.id)}>
            <PiEyeBold className='text-lg font-bold'/>
        </button>
    )
}

export default ChangesActionsCell
