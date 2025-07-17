import React from 'react'
import type { Equipment } from '../../../types/equipment'
import useEquipmentsContext from '../hooks/useEquipmentsContext'

interface EquipmentModalInputProps {
    disabled?: boolean
    labelName: string
    inputValue: string | number | undefined
    inputType: 'text' | 'number'
    propValue: keyof Equipment
}


function EquipmentModalInput(props: EquipmentModalInputProps) {
    const {disabled, inputType, inputValue, labelName, propValue} = props
    const { setEditingEquipment } = useEquipmentsContext()

    const valueSetterFunc = <K extends keyof Equipment>(prop: K, value: Equipment[K]) => {
        setEditingEquipment(prev => ({...prev!, [prop]: value}))
    }

    return (
        <div className='my-2 flex flex-col'>
                <label>{labelName}</label>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => valueSetterFunc(propValue, e.currentTarget.value)} 
                disabled={disabled} 
                value={inputValue} 
                type={inputType} 
                className='bg-gray-200 rounded-md disabled:brightness-90 px-2'/>
        </div>
    )
}

export default EquipmentModalInput
