
import { PiExport } from 'react-icons/pi'
import { Button } from '../ui/button'


function ExportCsvButton() {

    return (
        <Button variant={'default'} className="p-12! text-lg">
            Exportar tabela pra CSV
            <PiExport/>
        </Button>
    )
}

export default ExportCsvButton
