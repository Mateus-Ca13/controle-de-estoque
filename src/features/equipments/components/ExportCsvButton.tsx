import React from 'react'
import { Button } from '../../../components/ui/button'
import { ExportIcon } from '@phosphor-icons/react'


function ExportCsvButton() {

    return (
        <Button variant={'outline'} className='shadow w-full md:w-1/4'>
            Exportar tabela pra CSV
            <ExportIcon/>
        </Button>
    )
}

export default ExportCsvButton
