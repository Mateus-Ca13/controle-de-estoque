import { Button } from "../ui/button"
import ExportCsvButton from "../ExportCsvButton/ExportCsvButton"
import { useNavigate } from "react-router-dom"
import { PiClockCounterClockwise, PiHardDrives } from "react-icons/pi";

function ButtonsDashboard() {
    const navigate = useNavigate()

    return (
        <section className="grid gap-2 grid-cols-1 md:grid-cols-3 w-full items-center flex-col md:flex-row justify-between">
            <Button onClick={()=> navigate('/')} variant={"blue"} className="dark:text-white p-8 md:p-12! text-lg text-wrap md:grow w-full" >Lista de Equipamentos <PiHardDrives className="text-2xl"/></Button>
            <Button onClick={()=> navigate('/changes-history')} variant={"purple"} className="dark:text-white p-8 md:p-12! md:grow w-full text-lg">Histórico de Alterações <PiClockCounterClockwise className="text-2xl"/></Button> 
            <ExportCsvButton/>
            
        </section>
    )
}

export default ButtonsDashboard
