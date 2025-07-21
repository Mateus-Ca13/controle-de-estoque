import type { Equipment } from "../types/equipment"


function searchEquipmentById(equipList: Equipment[],equipId: string): Equipment{
    return equipList.filter((equip)=> {return equip.id === equipId})[0]
}



export { searchEquipmentById }