import { Button } from "../ui/button"
import ExportCsvButton from "../ExportCsvButton/ExportCsvButton"
import { useNavigate } from "react-router-dom"
import { PiClockCounterClockwise, PiHardDrives } from "react-icons/pi";

function ButtonsDashboard() {
    const navigate = useNavigate()

    return (
        <section className="gap-2 flex w-full items-center justify-start grow">
            <Button onClick={()=> navigate('/')} variant={"blue"} className="p-12! text-lg">Lista de Equipamentos <PiHardDrives/></Button>
            <Button onClick={()=> navigate('/changes-history')} variant={"purple"} className="p-12! text-lg">Histórico de Alterações <PiClockCounterClockwise/></Button> 
            <ExportCsvButton/>
            
        </section>
    )
}

export default ButtonsDashboard
