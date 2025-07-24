
import { create } from "zustand";
import type { Equipment } from "../../../types/equipment";
import type { toastState } from "../../../types/toastState";
import { searchEquipmentById } from "../../../utils/equipmentsUtils";
import {v4 as uuidv4} from 'uuid';
import { deleteEquipmentService, getEquipmentsListService, postEquipmentService, updateEquipmentService } from "../../../services/EquipmentsService";
import { alertPopupState } from "../../../types/alertPopupState";

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
    createAnEquipment: (equip: Equipment) => void
    updateAnEquipment: (id: string, equip: Equipment)=> void
    deleteAnEquipment: (id: string) => void
    showResponseToast: (message: string, type: 'success' | 'error', duration: number) => void
    fetchEquipmentsList: () => void
    toastStateProps: toastState
}

export const useEquipmentsStore = create<equipmentsStoreType>((set, get)=>({
    equipmentsList: [],

    setEquipmentsList: (newEquipList: Equipment[])=> set(()=>({equipmentsList: newEquipList})),

    editingEquipment: undefined,

    setEditingEquipment: (newEquipState)=>set(()=>({editingEquipment: newEquipState})),

    isEquipModalOpen: false,

    closeEquipModal: ()=>set(()=>({isEquipModalOpen: false})),

    openEquipModal: (equipId: string | undefined)=>{
        const currentEquip = equipId? 
        searchEquipmentById(get().equipmentsList ,equipId) : 
        {id: uuidv4(), name: "", details: "", brand: "", model: "", amount: 0}
       
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
    
    createAnEquipment: async (newEquipment: Equipment) => {
            const responseEquip: Equipment|null = await postEquipmentService(newEquipment)
            if (!responseEquip) {get().showResponseToast("Algo deu errado!", 'error', 6000); return}
            set((state)=>({equipmentsList: [...state.equipmentsList, responseEquip]}))

    },

    updateAnEquipment : async (id: string, newEquipment: Equipment) => {
            const responseEquip = await updateEquipmentService(id, newEquipment)
              if (!responseEquip) {get().showResponseToast("Algo deu errado!", 'error', 6000); return}
    
            const newEquipmentsList = get().equipmentsList.map((equip) => equip.id == responseEquip.id? newEquipment : equip)
            set(()=>({equipmentsList: newEquipmentsList}))
    },

    showResponseToast: (message: string, type: 'success' | 'error', duration: number) => {
        set((state)=>({toastStateProps: {...state.toastStateProps, message: message, type: type , isVisible: true}}))
        setTimeout(()=>{ set((state)=>({toastStateProps: {...state.toastStateProps, isVisible: false}}))},duration)
    },

    deleteAnEquipment: async (id:string) => {
            const responseEquip = await deleteEquipmentService(id)
            if (!responseEquip) {get().showResponseToast("Algo deu errado!", 'error', 6000); return}
    
            const newEquipmentsList = get().equipmentsList.filter((equip) => equip.id != responseEquip.id)
            set(()=>({equipmentsList: newEquipmentsList}))
    },

    fetchEquipmentsList: async() => {
        const equipListData: Equipment[] | null = await getEquipmentsListService()
            if (!equipListData) {get().showResponseToast("Algo deu errado!", 'error', 6000); return}
            
            set(()=>({equipmentsList: equipListData}))
            console.log("fetch data")
    },

    toastStateProps: {isVisible: false, message: '', type: 'success'},

}))