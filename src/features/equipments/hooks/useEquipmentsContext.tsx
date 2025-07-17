import { useContext } from 'react'
import { equipmentsContext } from '../contexts/EquipmentsContext'


function useEquipmentsContext() {
    const context = useContext(equipmentsContext)
  if (!context) {
    throw new Error("useEquipments deve ser usado dentro de um equipmentsContextProvider")
  }

    return context
}

export default useEquipmentsContext
