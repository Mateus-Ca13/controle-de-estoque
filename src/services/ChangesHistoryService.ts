import { AxiosError } from "axios";
import { EquipmentChangeLog } from "../types/equipmentChange";
import { axiosClient } from "./axiosClient";


const getChangesLogListService = async (): Promise<EquipmentChangeLog[]|null> => {
     try{
            const response = await axiosClient.get<EquipmentChangeLog[]>("/changes-history/")
            return response.data;

        }catch(err){
            if (err instanceof AxiosError) {
                console.error(err.response!.data)
            } else {
                console.error("Erro desconhecido", err)
            }
            return null
        }
}

const postEquipmentChangeService = async (changeLogEntry: EquipmentChangeLog) => {
     try{
            const response = await axiosClient.post<EquipmentChangeLog>("/changes-history/", changeLogEntry)
            return response.data;
        }catch(err){
            if (err instanceof AxiosError) {
                console.error(err.response!.data)
            } else {
                console.error("Erro desconhecido", err)
            }
            return null
        }
}

export {postEquipmentChangeService, getChangesLogListService}
