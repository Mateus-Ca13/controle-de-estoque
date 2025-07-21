import { useState } from 'react'

interface Props {
    onClickFunc: () => void
    pattern: 'saveButPattern' | 'removeButPattern'
    label: string
}

function ModalButton(props: Props) {

    const [ confirmStep, setConfirmStep ] = useState<boolean>(false)
    const { onClickFunc, label, pattern } = props;

    const handleButtonClick = ()=>{
       setConfirmStep(!confirmStep);
    }

    return (
        <button onClick={() => handleButtonClick()} className={`flex p-2 m-1 w-full items-center justify-center rounded-lg font-semibold ${pattern}`}>
            {confirmStep? 
            <div className='flex md:block justify-between w-full items-center px-2'>
                <p>Confirmar ação?</p>
                <div className='flex justify-center md:px-2 md:mt-2 items-center gap-2'>
                    <span className='bg-gray-950 hover:text-green-500 bg-opacity-50 px-4 py-1  rounded-lg' onClick={()=>onClickFunc()}>Sim</span>
                    <span className='bg-gray-950 hover:text-red-500 bg-opacity-50 px-4 py-1  rounded-lg'>Não</span>
                </div>
            </div> :
            label
            }
            
        </button>
    )
}

export default ModalButton
