import { ChangesHistoryDataTable } from '../../components/ChangesHistoryDatabase/ChangesHistoryDataTable'
import ChangesLogModal from '../../components/ChangesLogModal/ChangesLogModal'
import { useChangesStore } from '../../store/ChangesStore'
import { changesColumns } from '../../utils/changesColumns'


function ChangesPage() {
        const changesHistoryList = useChangesStore(state => state.changesHistoryList)


    return (
        <main className='flex w-full justify-center flex-col items-center py-10 '>
             <ChangesHistoryDataTable columns={changesColumns} data={changesHistoryList}/>
             <ChangesLogModal/>
        </main>
    )
}

export default ChangesPage
