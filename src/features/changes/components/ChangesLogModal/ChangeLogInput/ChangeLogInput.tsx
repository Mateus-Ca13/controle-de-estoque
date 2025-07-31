import React from 'react'
import { FieldComparison } from '../../../../../types/equipmentChange'
import { Input } from '../../../../../components/ui/input'
import { FaArrowRight } from "react-icons/fa";

interface Props {
    changesInfo: FieldComparison<string|number> | undefined
    propName: string
}

function ChangeLogInput(props: Props) {
    const { changesInfo, propName } = props

    return (
        changesInfo!.wasChanged ? 
        <div>
            <label className='font-semibold'>{propName}</label>
            <div className='flex items-center mt-1'>
                <Input className='border-slate-400' disabled value={changesInfo!.oldValue}/>
                <FaArrowRight className="text-4xl mx-2 text-green-800"/>
                <Input className='border-slate-400' disabled value={changesInfo!.newValue}/>
            </div>
            
        </div>:
        <div className='my-4'>
        <label className='font-semibold'>{propName}</label>
         <Input className='border-slate-500 bg-slate-300 text-slate-800' disabled value={`${propName} não alterado(a)...`}/> 
        </div>
    )
}

export default ChangeLogInput
