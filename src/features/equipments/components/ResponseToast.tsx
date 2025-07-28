
import { PiCheck } from 'react-icons/pi'
import { useEquipmentsStore } from '../store/EquipmentsStore'
import { IoMdClose } from "react-icons/io";



function ResponseToast() {
    console.log("ResponseToast render")
    const toastStateProps = useEquipmentsStore(state => state.toastStateProps)

    return (

        toastStateProps.isVisible && 
        <div className={`${toastStateProps.type == 'success' ? 'border-green-200' : 'border-red-200'} 
        p-5 fixed right-12 top-12 bg-white shadow-lg rounded-lg flex items-center border-2 z-20`}>
            <div className='me-2 text-white'>{toastStateProps.type == 'success'? <PiCheck className='bg-green-600 p-1 size-fit rounded-full'/>:<IoMdClose className='bg-red-700 p-1 size-fit rounded-full'/>}</div>
            <p>{toastStateProps.message}</p>
        </div>
    )
}

export default ResponseToast
