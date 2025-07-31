import type { Equipment } from "../../../types/equipment"


function searchEquipmentById(equipList: Equipment[],equipId: string): Equipment{
    return equipList.filter((equip)=> {return equip.id === equipId})[0]
}

function compareIfChangesHasBeenMade (newEquip: Equipment, oldEquip: Equipment){
    for (const key in newEquip) {
        if (newEquip[key] != oldEquip[key]) {
            return true;
        }
    }
    return false;
}

export { searchEquipmentById, compareIfChangesHasBeenMade }