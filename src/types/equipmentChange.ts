
type EquipmentChangeLog = {
    id: string,
    createdAt: Date
    equipId: string
    type: 'update' | 'create' | 'remove'
    changes?: EquipmentFieldChanges
    authorId: string
}

type EquipmentFieldChanges = {
    name: FieldComparison<string>
    details: FieldComparison<string>
    brand: FieldComparison<string>
    model: FieldComparison<string>
    amount: FieldComparison<number>
}

type FieldComparison<T> = {
  wasChanged: boolean
  oldValue?: T
  newValue?: T
}

export {EquipmentChangeLog, EquipmentFieldChanges, FieldComparison}