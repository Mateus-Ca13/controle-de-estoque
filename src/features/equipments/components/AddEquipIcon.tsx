import { PlusCircleIcon } from '@phosphor-icons/react'
import { useEquipmentsStore } from '../store/EquipmentsStore'


function AddEquipIcon() {
    console.log("AddEquipIcon render")
    const openEquipModal = useEquipmentsStore(state => state.openEquipModal)
    const isEquipModalOpen = useEquipmentsStore(state => state.isEquipModalOpen)

    return (
        !isEquipModalOpen && <div  onClick={()=>openEquipModal()} className='fixed hover:cursor-pointer flex items-center bottom-12 right-12 bg-slate-50 shadow-lg rounded-full  hover:brightness-75 duration-100'>
            <p className='ps-4 pe-2 font-semibold hover:cursor-pointer'>Cadastrar item</p>
            <div className=' bg-green-700 rounded-full'>
                <PlusCircleIcon className='text-5xl text-white'/>
            </div>
        </div>
    )
}

export default AddEquipIcon
