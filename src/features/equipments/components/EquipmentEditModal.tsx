import { XIcon } from "@phosphor-icons/react";
import useEquipmentsContext from "../hooks/useEquipmentsContext"
import EquipmentModalInput from "./EquipmentModalInput";
import type { Equipment } from "../../../types/equipment";
import usePopupContext from "../hooks/usePopupContext";



function EquipmentEditModal() {

    const { editingEquipment, isEquipModalOpen, setIsEquipModalOpen, saveAnEquipment } = useEquipmentsContext()
    const { showResponsePopup } = usePopupContext()


    function submitEquipment (equipment: Equipment){;
        saveAnEquipment(equipment)
        setIsEquipModalOpen(false)
        showResponsePopup("Equipamento salvo com sucesso.", "success", 6000)
    }

    return (
        isEquipModalOpen && 
        <section className="fixed w-full h-full bg-slate-800 bg-opacity-50 left-0 top-0 bottom-0 right-0">
        <div className="absolute z-10  w-11/12  md:w-3/5  top-1/4 left-1/2 -translate-x-1/2 cent bg-white p-8 rounded-2xl">
            <div className="flex mb-2items-center justify-between ">
                <h2 className="font-bold text-lg md:text-xl me-2">Cadastrar/Editar equipamento</h2>
                <XIcon className="text-2xl bg-red-400 text-white rounded-md hover:brightness-75 duration-100" onClick={()=>setIsEquipModalOpen(false)}/>
            </div>
            
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>)=>{e.preventDefault(); }}>
            <EquipmentModalInput labelName={"ID"}  inputType={'number'} inputValue={editingEquipment?.id } propValue={"id"} disabled/>
            <EquipmentModalInput labelName={"Nome"} inputType={'text'} inputValue={editingEquipment?.name} propValue={"name"}/>
            <EquipmentModalInput labelName={"Marca"} inputType={'text'} inputValue={editingEquipment?.brand} propValue={"brand"}/>
            <EquipmentModalInput labelName={"Modelo"} inputType={'text'} inputValue={editingEquipment?.model} propValue={"model"}/>
            <EquipmentModalInput labelName={"Detalhes"} inputType={'text'} inputValue={editingEquipment?.details} propValue={"details"}/>
            <EquipmentModalInput labelName={"Quantidade"} inputType={'number'} inputValue={editingEquipment?.amount} propValue={"amount"}/>
            <div className="flex flex-col md:flex-row mt-5 justify-between">
                <button onClick={()=>submitEquipment(editingEquipment!)} className="py-2 m-1 w-full  text-white font-semibold px-4 bg-green-600 rounded-lg">Confirmar mudanças</button>
                <button onClick={()=>setIsEquipModalOpen(false)} className="py-2 m-1 w-full  text-white font-semibold px-4 bg-red-500 rounded-lg">Cancelar</button>
            </div>
            </form>
        </div>
        </section>
    )
}

export default EquipmentEditModal
