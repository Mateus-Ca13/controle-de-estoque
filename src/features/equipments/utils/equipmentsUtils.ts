import type { Equipment } from "../../../types/equipment"


function searchEquipmentById(equipList: Equipment[],equipId: string): Equipment{
    return equipList.filter((equip)=> {return equip.id === equipId})[0]
}

function compareIfChangesHasBeenMade (newEquip: Equipment, oldEquip: Equipment){
    for (const key in newEquip) {

        const newEquipFormattedValue: string = String(newEquip[key]).trim() 
        const oldEquipFormattedValue: string =  String(oldEquip[key]).trim()

        if (newEquipFormattedValue != oldEquipFormattedValue) {
            return true;
        }
    }
    return false;
}

export { searchEquipmentById, compareIfChangesHasBeenMade }