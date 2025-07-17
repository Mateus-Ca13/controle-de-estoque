import React, { createContext} from "react";
import type { Equipment } from "../../../types/equipment";
import type { popupState } from "../../../types/popupState";


type equipmentsContextType = {
    equipmentsList: Equipment[];
    setEquipmentsList: React.Dispatch<React.SetStateAction<Equipment[]>>
    editingEquipment: Equipment | undefined;
    setEditingEquipment: React.Dispatch<React.SetStateAction<Equipment | undefined>>
    isEquipModalOpen: boolean | undefined
    setIsEquipModalOpen: React.Dispatch<React.SetStateAction<boolean|undefined>>
    openEquipModal: (equipId?: number) => void
    saveAnEquipment: (equip: Equipment) => void
    showResponsePopup: (message: string, type: 'success' | 'error', duration: number) => void
    popupStateProps: popupState
}

export const equipmentsContext = createContext<equipmentsContextType | undefined>(undefined)



