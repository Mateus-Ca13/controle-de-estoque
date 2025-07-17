import { useRef, useState } from 'react'
import type { Equipment } from '../../../types/equipment'
import { PencilIcon } from '@phosphor-icons/react/dist/ssr';
import useEquipmentsContext from '../hooks/useEquipmentsContext';

interface Props {
    equipInfo: Equipment;
}

function EquipmentCard(props: Props) {
    const { equipInfo } = props;
    const [isHover, setIsHover] = useState<boolean>(false)
    const card = useRef<HTMLDivElement>(null)
    const { openEquipModal } = useEquipmentsContext()

    function mouseHoverHandler (){
        setIsHover(true)
    }

    function mouseOutHandler (){
       setIsHover(false)
    }

    

    return (
        <div ref={card} onMouseOver={()=>mouseHoverHandler()} onMouseOut={()=>mouseOutHandler()} className='flex text-sm md:text-base items-center p-2 shadow-md my-2 rounded-md hover:brightness-95 backdrop-brightness-100'>
            <div className='flex items-start w-1/12 pe-4 ps-2 text-nowrap overflow-hidden'>
                <p>{equipInfo.id}</p>
            </div>
            <div className='flex items-start w-4/5 md:w-3/5 px-4 text-nowrap overflow-hidden'>
                <p>{equipInfo.name} {equipInfo.details}</p>
            </div>
            
            <div className='flex hidden md:block items-start w-1/5 px-4 text-nowrap overflow-hidden'>
                <p>{equipInfo.brand} <strong className='text-gray-400 mx-1'>|</strong> {equipInfo.model}</p>
            </div>
            <div className='flex items-start w-1/12 px-4 text-nowrap overflow-hidden'>
                <p>{equipInfo.amount}</p>
            </div>
            {isHover && 
            <div onClick={()=>openEquipModal(equipInfo.id)} className='absolute right-2'>
                <div className='bg-green-600 flex items-center text-white p-1 px-3 justify-center rounded-md text-xl hover:cursor-pointer'><PencilIcon/></div>
            </div>} 
        </div>
    )
}

export default EquipmentCard
