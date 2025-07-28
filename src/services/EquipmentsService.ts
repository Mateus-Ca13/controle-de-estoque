
import { AxiosError } from "axios";
import type { Equipment } from "../types/equipment";
import { axiosClient } from "./axiosClient";



const getEquipmentsListService = async ():Promise<Equipment[]|null> =>{
    try{
         const response = await axiosClient<Equipment[]>("/equipments")
        return response.data
    }catch(err){
        if (err instanceof AxiosError) {
            console.warn(err.response!.data)
        } else {
            console.error("Erro desconhecido", err)
        }
        return null
    }
   
}

const getEquipmentByIdService = async (id: string | null): Promise<Equipment|null> =>{
    try{
        const response = await axiosClient.get<Equipment>(`/equipments/${id}`)
        return response.data
    }catch(err){
        if (err instanceof AxiosError) {
            console.error(err.response!.data)
        } else {
            console.error("Erro desconhecido", err)
        }
        return null
    }
    
}

const updateEquipmentService = async (id: string, equipment: Equipment):Promise<Equipment|null> =>{
    try{
        const response = await axiosClient.put<Equipment>(`/equipments/${id}`, equipment)
        return response.data
    }catch(err){
        if (err instanceof AxiosError) {
            console.error(err.response!.data)
        } else {
            console.error("Erro desconhecido", err)
        }
        return null
    }
}

const postEquipmentService = async (equipment: Equipment):Promise<Equipment|null> =>{
    try{
        const response = await axiosClient.post<Equipment>("/equipments/", equipment)
        return response.data
    }catch(err){
        if (err instanceof AxiosError) {
            console.error(err.response!.data)
        } else {
            console.error("Erro desconhecido", err)
        }
        return null
    }
}

const deleteEquipmentService = async (id: string):Promise<Equipment|null> =>{
    try{
        const response = await axiosClient.delete<Equipment>(`equipments/${id}`)
        return response.data
    }catch(err){
        if (err instanceof AxiosError) {
            console.error(err.response!.data)
        } else {
            console.error("Erro desconhecido", err)
        }
        return null
    }
}


export {getEquipmentsListService, getEquipmentByIdService, updateEquipmentService, postEquipmentService, deleteEquipmentService}