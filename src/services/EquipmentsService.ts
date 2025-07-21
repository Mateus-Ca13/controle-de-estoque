
import axios from "axios";
import type { Equipment } from "../types/equipment";

const equipmentsApi = axios.create({
  baseURL: "https://6877aa6adba809d901f06a55.mockapi.io/storage-control/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

const getEquipmentsListService = async ():Promise<Equipment[]|null> =>{
    try{
         const response = await equipmentsApi<Equipment[]>("/equipments")
        return response.data
    }catch(err){
        if (err instanceof Error) {
            console.error(err.message)
        } else {
            console.error("Erro desconhecido", err)
        }
        return null
    }
   
}

const getEquipmentByIdService = async (id: string | null): Promise<Equipment|null> =>{
    try{
        const response = await equipmentsApi.get<Equipment>(`/equipments/${id}`)
        return response.data
    }catch(err){
        if (err instanceof Error) {
            console.error(err.message)
        } else {
            console.error("Erro desconhecido", err)
        }
        return null
    }
    
}

const updateEquipmentService = async (id: string, equipment: Equipment):Promise<Equipment|null> =>{
    try{
        const response = await equipmentsApi.put<Equipment>(`/equipments/${id}`, equipment)
        return response.data
    }catch(err){
        if (err instanceof Error) {
            console.error(err.message)
        } else {
            console.error("Erro desconhecido", err)
        }
        return null
    }
}

const postEquipmentService = async (equipment: Equipment):Promise<Equipment|null> =>{
    try{
        const response = await equipmentsApi.post<Equipment>("/equipments/", equipment)
        return response.data
    }catch(err){
        if (err instanceof Error) {
            console.error(err.message)
        } else {
            console.error("Erro desconhecido", err)
        }
        return null
    }
}

const deleteEquipmentService = async (id: string):Promise<Equipment|null> =>{
    try{
        const response = await equipmentsApi.delete<Equipment>(`equipments/${id}`)
        return response.data
    }catch(err){
        if (err instanceof Error) {
            console.error(err.message)
        } else {
            console.error("Erro desconhecido", err)
        }
        return null
    }
}


export {getEquipmentsListService, getEquipmentByIdService, updateEquipmentService, postEquipmentService, deleteEquipmentService}