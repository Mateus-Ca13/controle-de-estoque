import { useContext } from 'react'
import { equipmentsContext } from '../contexts/EquipmentsContext'


function usePopupContext() {
  const context = useContext(equipmentsContext)

  if ( !context) {
    throw new Error("usePopupContext deve ser usado dentro de um equipmentsContextProvider")
  }
  const { showResponsePopup, popupStateProps } = context;

  return {showResponsePopup, popupStateProps}
}

export default usePopupContext
