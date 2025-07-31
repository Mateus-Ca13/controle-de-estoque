import { Button } from "../ui/button"
import ExportCsvButton from "../ExportCsvButton/ExportCsvButton"
import { useNavigate } from "react-router-dom"
import { PiClockCounterClockwise, PiHardDrives } from "react-icons/pi";

function ButtonsDashboard() {
    const navigate = useNavigate()

    return (
        <section className="gap-2 flex w-full items-center flex-col md:flex-row justify-between">
            <Button onClick={()=> navigate('/')} variant={"blue"} className="p-8 md:p-12! text-lg md:w-1/3 w-full" >Lista de Equipamentos <PiHardDrives className="text-2xl"/></Button>
            <Button onClick={()=> navigate('/changes-history')} variant={"purple"} className="p-8 md:p-12! md:w-1/3 w-full text-lg">Histórico de Alterações <PiClockCounterClockwise className="text-2xl"/></Button> 
            <ExportCsvButton/>
            
        </section>
    )
}

export default ButtonsDashboard
