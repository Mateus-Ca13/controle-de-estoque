import { useState, type ReactNode } from 'react'
import equipData from '../../../json/data.json'
import type { Equipment } from '../../../types/equipment'
import { equipmentsContext } from './EquipmentsContext'
import type { popupState } from '../../../types/popupState'

type EquipmentsContextProviderProps = {
    children: ReactNode
}


export const EquipmentsContextProvider = ({ children }: EquipmentsContextProviderProps) => {
    const [equipmentsList, setEquipmentsList] = useState<Equipment[]>(equipData)
    const [editingEquipment, setEditingEquipment] = useState<Equipment | undefined>()
    const [isEquipModalOpen, setIsEquipModalOpen] = useState<boolean | undefined>(false)
    const [popupStateProps, setPopupStateProps] = useState<popupState>({isVisible: false, message: '', type: 'success'})

    function openEquipModal (equipId?: number) {
        const currentEquip = equipId? 
        searchEquipmentById(equipId) : 
        {id: Math.floor(Math.random()* 100000000), name: "", details: "", brand: "", model: "", amount: 0}

        setEditingEquipment(currentEquip)
        setIsEquipModalOpen(true)
    }

    function searchEquipmentById(equipId: number): Equipment{
        return equipmentsList.filter((equip)=> {return equip.id === equipId})[0]
    }

    function saveAnEquipment(newEquipment: Equipment) {
        const foundedEquip = searchEquipmentById(newEquipment.id)
        if(!foundedEquip){
            setEquipmentsList(prev => [...prev, newEquipment])}
        else {
            const newEquipmentsList = equipmentsList.map((equip) => equip.id == newEquipment.id? newEquipment : equip)
            setEquipmentsList(newEquipmentsList)}
    }

    function showResponsePopup (message: string, type: 'success' | 'error', duration: number){
        setPopupStateProps({...popupStateProps, message: message, type: type , isVisible: true})
        setTimeout(()=>{
            setPopupStateProps({...popupStateProps, isVisible: false})
        }, duration)
    }

    return (
    <equipmentsContext.Provider value={{
        equipmentsList, setEquipmentsList, editingEquipment, setEditingEquipment, isEquipModalOpen, setIsEquipModalOpen, openEquipModal, saveAnEquipment, popupStateProps, showResponsePopup
    }}>
        {children}
    </equipmentsContext.Provider>
    )
}