
import { create } from "zustand";
import type { Equipment } from "../../../types/equipment";
import type { popupState } from "../../../types/popupState";
import { searchEquipmentById } from "../../../utils/equipmentsUtils";
import {v4 as uuidv4} from 'uuid';
import { deleteEquipmentService, getEquipmentsListService, postEquipmentService, updateEquipmentService } from "../../../services/EquipmentsService";

type equipmentsStoreType = {
    equipmentsList: Equipment[];
    setEquipmentsList: (equipList: Equipment[]) => void
    editingEquipment: Equipment | undefined;
    setEditingEquipment: (newEquipState: Equipment) => void
    isEquipModalOpen: boolean | undefined
    setIsEquipModalOpen: (bool: boolean)=> void;
    openEquipModal: (equipId?: string) => void
    createAnEquipment: (equip: Equipment) => void
    updateAnEquipment: (id: string, equip: Equipment)=> void
    deleteAnEquipment: (id: string) => void
    showResponsePopup: (message: string, type: 'success' | 'error', duration: number) => void
    fetchEquipmentsList: () => void
    popupStateProps: popupState
}

export const useEquipmentsStore = create<equipmentsStoreType>((set, get)=>({
    equipmentsList: [],

    setEquipmentsList: (newEquipList: Equipment[])=> set(()=>({equipmentsList: newEquipList})),

    editingEquipment: undefined,

    setEditingEquipment: (newEquipState)=>set(()=>({editingEquipment: newEquipState})),

    isEquipModalOpen: false,

    setIsEquipModalOpen: (bool: boolean)=>set(()=>({isEquipModalOpen: bool})),

    openEquipModal: (equipId: string | undefined)=>{
        const currentEquip = equipId? 
        searchEquipmentById(get().equipmentsList ,equipId) : 
        {id: uuidv4(), name: "", details: "", brand: "", model: "", amount: 0}
       
        set(()=>({
            editingEquipment: currentEquip,
            isEquipModalOpen: true
        }))
    },
    
    createAnEquipment: async (newEquipment: Equipment) => {
            const responseEquip: Equipment|null = await postEquipmentService(newEquipment)
            if (!responseEquip) {get().showResponsePopup("Algo deu errado!", 'error', 6000); return}
            set((state)=>({equipmentsList: [...state.equipmentsList, responseEquip]}))

    },

    updateAnEquipment : async (id: string, newEquipment: Equipment) => {
            const responseEquip = await updateEquipmentService(id, newEquipment)
              if (!responseEquip) {get().showResponsePopup("Algo deu errado!", 'error', 6000); return}
    
            const newEquipmentsList = get().equipmentsList.map((equip) => equip.id == responseEquip.id? newEquipment : equip)
            set(()=>({equipmentsList: newEquipmentsList}))
    },

    showResponsePopup: (message: string, type: 'success' | 'error', duration: number) => {
        set((state)=>({popupStateProps: {...state.popupStateProps, message: message, type: type , isVisible: true}}))
        setTimeout(()=>{ set((state)=>({popupStateProps: {...state.popupStateProps, isVisible: false}}))},duration)
    },

    deleteAnEquipment: async (id:string) => {
            const responseEquip = await deleteEquipmentService(id)
            if (!responseEquip) {get().showResponsePopup("Algo deu errado!", 'error', 6000); return}
    
            const newEquipmentsList = get().equipmentsList.filter((equip) => equip.id != responseEquip.id)
            set(()=>({equipmentsList: newEquipmentsList}))
    },

    fetchEquipmentsList: async() => {
        const equipListData: Equipment[] | null = await getEquipmentsListService()
            if (!equipListData) {get().showResponsePopup("Algo deu errado!", 'error', 6000); return}
            
            set(()=>({equipmentsList: equipListData}))
            console.log("fetch data")
    },

    popupStateProps: {isVisible: false, message: '', type: 'success'},

}))