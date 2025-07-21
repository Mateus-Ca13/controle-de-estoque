
import { CheckIcon, XIcon } from '@phosphor-icons/react'
import { useEquipmentsStore } from '../store/EquipmentsStore'



function ResponsePopup() {
    console.log("ResponsePopup render")
    const popupStateProps = useEquipmentsStore(state => state.popupStateProps)

    return (

        popupStateProps.isVisible && 
        <div className={`${popupStateProps.type == 'success' ? 'border-green-200' : 'border-red-200'} 
        p-5 fixed right-12 top-12 bg-white shadow-lg rounded-lg flex items-center border-2 z-20`}>
            <div className='me-2 text-white'>{popupStateProps.type == 'success'? <CheckIcon className='bg-green-600 p-1 size-fit rounded-full'/>:<XIcon className='bg-red-700 p-1 size-fit rounded-full'/>}</div>
            <p>{popupStateProps.message}</p>
        </div>
    )
}

export default ResponsePopup
