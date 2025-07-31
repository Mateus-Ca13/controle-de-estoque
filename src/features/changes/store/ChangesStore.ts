import { create } from "zustand";
import { EquipmentChangeLog } from "../../../types/equipmentChange";
import { getChangesLogListService } from "../../../services/ChangesHistoryService";
import { toast } from "sonner";

type ChangesStoreType = {
    changesHistoryList: EquipmentChangeLog[]
    fetchChangesHistoryList: () => void
    openChangesLogModal: (changeLogId: string) => void
    closeChangesLogModal: ()=> void
    isChangesModalOpen: boolean
    viewingChangelog: EquipmentChangeLog | undefined
    filteredChangesLogList: EquipmentChangeLog[]
    setFilteredChangesLogList: (newChangesLogList:EquipmentChangeLog[])=>void
}

export const useChangesStore = create<ChangesStoreType>((set) => ({

    changesHistoryList: [],
    
    isChangesModalOpen: false,

    viewingChangelog: undefined,

    fetchChangesHistoryList: async () => {
        const changesListData: EquipmentChangeLog[] | null = await getChangesLogListService()
         if (!changesListData) { 
            toast.error("Algo deu errado!"); return }

         set(()=>({changesHistoryList: changesListData, filteredChangesLogList: changesListData}))
    },
    
    openChangesLogModal: (changeLogId: string) => {
        set((state) => ({
            viewingChangelog: state.changesHistoryList.filter((changeLog) => changeLog.id === changeLogId)[0],
            isChangesModalOpen: true
        }))

    },
    closeChangesLogModal: () => {
        set(() => ({ isChangesModalOpen: false}))
    },
    filteredChangesLogList: [],
    
        setFilteredChangesLogList: (newChangesLogList: EquipmentChangeLog[])=>{
            set(()=> ({filteredChangesLogList: newChangesLogList}))
        }
    
}))