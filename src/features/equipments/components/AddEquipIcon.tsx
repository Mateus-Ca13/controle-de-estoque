import { PlusCircleIcon } from '@phosphor-icons/react'
import React from 'react'
import useEquipmentsContext from '../hooks/useEquipmentsContext'


function AddEquipIcon() {
   const { openEquipModal } = useEquipmentsContext()

    return (
        <div  onClick={()=>openEquipModal()} className='fixed flex items-center bottom-12 right-12 bg-slate-50 shadow-lg rounded-full  hover:brightness-75 duration-100'>
            <p className='ps-4 pe-2 font-semibold hover:cursor-pointer'>Cadastrar item</p>
            <div className=' bg-green-700 rounded-full'>
                <PlusCircleIcon className='text-5xl text-white'/>
            </div>
        </div>
    )
}

export default AddEquipIcon
