import { create } from "zustand";
import { EquipmentChangeLog } from "../../../types/equipmentChange";
import { getChangesLogListService } from "../../../services/ChangesHistoryService";
import { equipmentsStore } from "../../equipments/store/EquipmentsStore";


type ChangesStoreType = {
    changesHistoryList: EquipmentChangeLog[]
    fetchChangesHistoryList: () => void
    openChangesLogModal: (changeLogId: string) => void
    closeChangesLogModal: ()=> void
    isChangesModalOpen: boolean
    viewingChangelog: EquipmentChangeLog | undefined
}

const showResponseToast = equipmentsStore.getState().showResponseToast

export const useChangesStore = create<ChangesStoreType>((set) => ({

    changesHistoryList: [],
    
    isChangesModalOpen: false,

    viewingChangelog: undefined,

    fetchChangesHistoryList: async () => {
        const changesListData: EquipmentChangeLog[] | null = await getChangesLogListService()
         if (!changesListData) {showResponseToast("Algo deu errado!", 'error', 6000); return}

         set(()=>({changesHistoryList: changesListData}))
            console.log("fetch changes data")
    },
    
    openChangesLogModal: (changeLogId: string) => {
        set((state) => ({
            viewingChangelog: state.changesHistoryList.filter((changeLog) => changeLog.id === changeLogId)[0],
            isChangesModalOpen: true
        }))

    },
    closeChangesLogModal: () => {
        set(() => ({ isChangesModalOpen: false}))
    }
    
}))