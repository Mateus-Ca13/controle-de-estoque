import React from 'react'
import { FieldComparison } from '../../../../../types/equipmentChange'
import { Input } from '../../../../../components/ui/input'
import { FaArrowRight } from "react-icons/fa";

interface Props {
    changesInfo: FieldComparison<string|number> | undefined
    propName: string
    formatterFunc?: (data: unknown) => string | number
}

function ChangeLogInput(props: Props) {
    const { changesInfo, propName, formatterFunc } = props

    return (
        changesInfo!.wasChanged ? 
        <div className='my-2 text-sm text-start'>
            <label className='font-semibold'>{propName}</label>
            <div className='flex items-center mt-1'>
                <Input className='border-slate-400' disabled value={formatterFunc? formatterFunc(changesInfo!.oldValue) : changesInfo!.oldValue}/>
                <FaArrowRight className="text-4xl mx-2 text-green-800"/>
                <Input className='border-slate-400' disabled value={formatterFunc? formatterFunc(changesInfo!.newValue) : changesInfo!.newValue}/>
            </div>
            
        </div>:
        <div className='my-2 text-sm text-start'>
        <label className='font-semibold'>{propName}</label>
         <Input className='border-slate-500 bg-slate-300 text-slate-800 mt-1 dark:text-neutral-500' disabled value={`${propName} não alterado(a)...`}/> 
        </div>
    )
}

export default ChangeLogInput
