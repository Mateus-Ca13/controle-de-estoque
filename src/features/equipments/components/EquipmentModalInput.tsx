import React from 'react'
import type { Equipment } from '../../../types/equipment'
import { useEquipmentsStore } from '../store/EquipmentsStore'

interface EquipmentModalInputProps {
    disabled?: boolean
    labelName: string
    inputValue: string | number | undefined
    inputType: 'text' | 'number'
    propValue: keyof Equipment
}


function EquipmentModalInput(props: EquipmentModalInputProps) {
    console.log("EquipmentModalInput render")
    const {disabled, inputType, inputValue, labelName, propValue} = props
    const editingEquipment = useEquipmentsStore(state => state.editingEquipment)
    const setEditingEquipment = useEquipmentsStore(state => state.setEditingEquipment)

    const valueSetterFunc = <K extends keyof Equipment>(prop: K, value: Equipment[K]) => {
        setEditingEquipment({...editingEquipment!, [prop]: value})
    }

    return (
        <div className='my-2 flex flex-col w-full'>
                <label>{labelName}</label>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                valueSetterFunc(propValue, e.currentTarget.type === "number" ? Number(e.currentTarget.value): e.currentTarget.value)} 
                disabled={disabled} 
                value={inputValue} 
                type={inputType} 
                className='bg-gray-200 rounded-md disabled:brightness-90 px-2 w-full'/>
        </div>
    )
}

export default EquipmentModalInput
