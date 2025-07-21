
import type { Equipment } from '../../../types/equipment'
import EquipmentCard from './EquipmentCard'

interface EquipmentsListProps {
    equipments: Equipment[]
}

function EquipmentsList(props: EquipmentsListProps) {
    const { equipments } = props
    console.log("EquipmentsList render")
    return (
        <section className='flex flex-col justify-start p-2 md:p-5 m-2 md:m-5 rounded-lg shadow-lg bg-slate-200'>
        <div className='flex justify-start pb-2 px-3 mb-4 border-b border-gray-400 font-bold'>
            <p className='w-1/12'>ID</p>
            <p className=' w-4/5 md:w-3/5 px-2 mx-3 md:mx-0'>Nome</p>
            <p className='w-1/5 px-4 hidden md:block'>Marca/Modelo</p>
            <p className='ps-4'>Quantidade</p>
        </div>
        {equipments.map((equip: Equipment)=>{return <EquipmentCard key={equip.id} equipInfo={equip} />})}
        </section>
    )
}

export default EquipmentsList
