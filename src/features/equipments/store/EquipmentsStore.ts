
import { create } from "zustand";
import type { Equipment } from "../../../types/equipment";
import { searchEquipmentById } from "../utils/equipmentsUtils";
import { deleteEquipmentService, getEquipmentsListService, postEquipmentService, updateEquipmentService } from "../../../services/EquipmentsService";
import { alertPopupState } from "../../../types/alertPopupState";
import { EquipmentChangeLog } from "../../../types/equipmentChange";
import { buildChangesSet } from "../../changes/utils/buildChangesSet";
import { postEquipmentChangeService } from "../../../services/ChangesHistoryService";
import { toast } from "sonner";

type equipmentsStoreType = {
    equipmentsList: Equipment[];
    setEquipmentsList: (equipList: Equipment[]) => void
    editingEquipment: Equipment | undefined;
    setEditingEquipment: (newEquipState: Equipment) => void
    isEquipModalOpen: boolean | undefined
    closeEquipModal: ()=> void;
    openEquipModal: (equipId?: string) => void
    alertPopupStateProps: alertPopupState
    openAlertPopup: (action: "save" | "delete" | undefined)=> void
    closeAlertPopup: () => void
    createAnEquipment: (equip: Equipment) => Promise<Equipment|null>
    createChangeLogEntry: ( entryType: 'create'|'update'|'remove', newEquip: Equipment, oldEquip: Equipment) => void
    updateAnEquipment: (id: string, equip: Equipment)=> void
    deleteAnEquipment: (id: string) => void
    fetchEquipmentsList: () => void
    filteredEquipmentsList: Equipment[]
    setFilteredEquipmentsList: (newList:Equipment[])=>void
}

export const useEquipmentsStore = create<equipmentsStoreType>((set, get)=>({
    equipmentsList: [],

    setEquipmentsList: (newEquipList: Equipment[])=> set(()=>({equipmentsList: newEquipList})),

    editingEquipment: undefined,

    setEditingEquipment: (newEquipState)=>set(()=>({editingEquipment: newEquipState})),

    isEquipModalOpen: false,

    closeEquipModal: ()=>set(()=>({isEquipModalOpen: false})),

    openEquipModal: (equipId: string | undefined)=>{
        const equipmentsList = get().equipmentsList;
        
        const currentEquip = equipId? 
        searchEquipmentById(get().equipmentsList ,equipId) : 
        {id: String(Number(equipmentsList[0].id)+1), name: "", category: "", details: "", brand: "", model: "", amount: 0} as Equipment
       
        set(()=>({
            editingEquipment: currentEquip,
            isEquipModalOpen: true
        }))
    },

    alertPopupStateProps: {isVisible: true, confirmAction: undefined},

    openAlertPopup: (action: "save" | "delete" | undefined)=>{

        get().closeEquipModal()
        set(()=>({
            alertPopupStateProps: {isVisible: true, confirmAction: action}
        }))
    },

    closeAlertPopup: () => {
        set((state)=>({
            alertPopupStateProps: {...state.alertPopupStateProps, isVisible: false}
        }))
    },
    
    createAnEquipment: async (newEquipment: Equipment): Promise<Equipment|null> => {
            const responseEquip: Equipment|null = await postEquipmentService(newEquipment)
            if (!responseEquip) {toast.error("Algo deu errado!"); return null}
            set((state)=>({equipmentsList: [responseEquip, ...state.equipmentsList]}))
            return responseEquip
    },

    updateAnEquipment : async (id: string, newEquipment: Equipment) => {
            const responseEquip = await updateEquipmentService(id, newEquipment)
              if (!responseEquip) {toast.error("Algo deu errado!"); return}
    
            const newEquipmentsList = get().equipmentsList.map((equip) => equip.id == responseEquip.id? newEquipment : equip)
            set(()=>({equipmentsList: newEquipmentsList}))
    },

    deleteAnEquipment: async (id:string) => {
            const responseEquip = await deleteEquipmentService(id)
            if (!responseEquip) {toast.error("Algo deu errado!"); return}
    
            const newEquipmentsList = get().equipmentsList.filter((equip) => equip.id != responseEquip.id)
            set(()=>({equipmentsList: newEquipmentsList}))
    },

    createChangeLogEntry: async ( entryType: 'create'|'update'|'remove', newEquip: Equipment, oldEquip: Equipment) => {

        const newChangeLog: EquipmentChangeLog = {
            id: newEquip.id,
            createdAt: new Date(),
            equipId: newEquip.id,
            authorId: localStorage.getItem("user_id")!,
            type: entryType,
            changes: buildChangesSet(oldEquip, newEquip)              
        }
        postEquipmentChangeService(newChangeLog)
    },

    fetchEquipmentsList: async() => {
        const equipListData: Equipment[] | null = await getEquipmentsListService()
            if (!equipListData) {toast.error("Algo deu errado!"); return}
            
            set(()=>({
                equipmentsList: [...equipListData].reverse(),
                filteredEquipmentsList: [...equipListData].reverse()}))            
    },
    
    filteredEquipmentsList: [],

    setFilteredEquipmentsList: (newEquipList: Equipment[])=>{
        set(()=> ({filteredEquipmentsList: newEquipList}))
    }
}))

export const equipmentsStore = useEquipmentsStore;




