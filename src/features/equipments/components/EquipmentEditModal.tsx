import { XIcon } from "@phosphor-icons/react";
import EquipmentModalInput from "./EquipmentModalInput";
import type { Equipment } from "../../../types/equipment";
import { getEquipmentByIdService } from "../../../services/EquipmentsService";
import { useEquipmentsStore } from "../store/EquipmentsStore";
import ModalButton from "../../../components/ModalButton/ModalButton";
import { searchEquipmentById } from "../../../utils/equipmentsUtils";
import { useEffect, useState } from "react";



function EquipmentEditModal() {

    const [equipAlreadyExists, setEquipAlreadyExists] = useState<boolean>(false)
    const equipmentsList = useEquipmentsStore(state => state.equipmentsList)
    const editingEquipment = useEquipmentsStore(state => state.editingEquipment);
    const isEquipModalOpen = useEquipmentsStore(state => state.isEquipModalOpen);
    const setIsEquipModalOpen = useEquipmentsStore(state => state.setIsEquipModalOpen);
    const createAnEquipment = useEquipmentsStore(state => state.createAnEquipment);
    const updateAnEquipment = useEquipmentsStore(state => state.updateAnEquipment);
    const deleteAnEquipment = useEquipmentsStore(state => state.deleteAnEquipment)
    const showResponsePopup = useEquipmentsStore(state => state.showResponsePopup);

    console.log("EquipmentEditModal render")

    async function submitEquipment (equipment: Equipment){;
        
        const response = await getEquipmentByIdService(equipment.id)

        if(!response){
            createAnEquipment(equipment)
            setIsEquipModalOpen(false)
            showResponsePopup("Equipamento salvo com sucesso.", "success", 6000)
        }else{
            updateAnEquipment(equipment.id, equipment)
            setIsEquipModalOpen(false)
            showResponsePopup("Equipamento editado com sucesso.", "success", 6000)
        }
        
    }

    async function excludeEquipment(equipId: string) {
        
        const response = await getEquipmentByIdService(equipId)

          if(!response){
             showResponsePopup("Algo deu errado.", "error", 6000)
          }else{
            deleteAnEquipment(equipId)
            showResponsePopup("Equipamento salvo com sucesso.", "success", 6000)
            setIsEquipModalOpen(false)
          }
        
    }

    useEffect(()=>{
        if(!editingEquipment) return;
        
        const equip = searchEquipmentById(equipmentsList, editingEquipment.id)
        setEquipAlreadyExists(!!equip) // Turns bool
    },[editingEquipment])
    

    return (
        isEquipModalOpen && 
        <section className="fixed w-full h-screen bg-slate-800 bg-opacity-50 left-0 top-0 bottom-0 right-0 shadow-lg">
        <div className="absolute z-10  w-11/12  md:w-3/5 top-8 md:top-1/4 left-1/2 -translate-x-1/2 cent bg-white p-8 rounded-2xl">
            <div className="flex mb-2items-center justify-between ">
                <h2 className="font-bold text-lg md:text-xl me-2">Cadastrar/Editar equipamento</h2>
                <XIcon className="text-2xl bg-red-400 text-white rounded-md hover:brightness-75 duration-100 hover:cursor-pointer" onClick={()=>setIsEquipModalOpen(false)}/>
            </div>
            
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>)=>{e.preventDefault(); }}>
            <EquipmentModalInput labelName={"ID"}  inputType={'number'} inputValue={editingEquipment?.id } propValue={"id"} disabled/>
            <EquipmentModalInput labelName={"Nome"} inputType={'text'} inputValue={editingEquipment?.name} propValue={"name"}/>
            <div className="flex justify-between items-center gap-x-4">
                <EquipmentModalInput labelName={"Marca"} inputType={'text'} inputValue={editingEquipment?.brand} propValue={"brand"}/>
                <EquipmentModalInput labelName={"Modelo"} inputType={'text'} inputValue={editingEquipment?.model} propValue={"model"}/>
            </div>
             <EquipmentModalInput labelName={"Detalhes"} inputType={'text'} inputValue={editingEquipment?.details} propValue={"details"}/>
            <EquipmentModalInput labelName={"Quantidade"} inputType={'number'} inputValue={editingEquipment?.amount} propValue={"amount"}/>
            <div className="flex flex-col md:flex-row mt-5 justify-between">
                <ModalButton label="Confirmar mudanças" onClickFunc={()=>submitEquipment(editingEquipment!)} pattern="saveButPattern"/>
                {equipAlreadyExists && <ModalButton label="Remover equipamento" onClickFunc={()=>excludeEquipment(editingEquipment!.id)} pattern="removeButPattern"/>}
                <button onClick={()=>setIsEquipModalOpen(false)} className="py-2 m-1 w-full  text-white font-semibold px-4 bg-red-500 rounded-lg">Cancelar</button>
            </div>
            </form>
        </div>
        </section>
    )
}

export default EquipmentEditModal
