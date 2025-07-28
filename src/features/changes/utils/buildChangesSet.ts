
import { Equipment } from "../../../types/equipment";
import { EquipmentFieldChanges } from "../../../types/equipmentChange";

function buildChangesSet (equipInDatabase: Equipment, newEquipment: Equipment): EquipmentFieldChanges{

    const result = {} as EquipmentFieldChanges 
    
    // Ta estranho, mas n deu de usar for in :(

    if(equipInDatabase.name != newEquipment.name){
        result.name = {wasChanged: true, newValue: newEquipment.name, oldValue: equipInDatabase.name}
    }else {
        result.name = {wasChanged: false, newValue: newEquipment.name}
    }
    if(equipInDatabase.details != newEquipment.details){
        result.details = {wasChanged: true, newValue: newEquipment.details, oldValue: equipInDatabase.details}
    }else {
        result.details = {wasChanged: false}
    }
    if(equipInDatabase.brand != newEquipment.brand){
        result.brand = {wasChanged: true, newValue: newEquipment.brand, oldValue: equipInDatabase.brand}
    }else {
        result.brand = {wasChanged: false}
    }
    if(equipInDatabase.model != newEquipment.model){
        result.model = {wasChanged: true, newValue: newEquipment.model, oldValue: equipInDatabase.model}
    }else {
        result.model = {wasChanged: false}
    }
    if(equipInDatabase.amount != newEquipment.amount){
        result.amount = {wasChanged: true, newValue: newEquipment.amount, oldValue: equipInDatabase.amount}
    }else {
        result.amount = {wasChanged: false}
    }
    
    
    return result
}


export {buildChangesSet}