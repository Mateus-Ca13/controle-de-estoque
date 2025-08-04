
import { PiExport } from 'react-icons/pi'
import { Button } from '../ui/button'
import { useChangesStore } from '../../features/changes/store/ChangesStore'
import { useEquipmentsStore } from '../../features/equipments/store/EquipmentsStore'
import { DialogClose, DialogDescription, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '../ui/dialog'
import { Label } from '@radix-ui/react-label'
import { RadioGroupItem, RadioGroup } from '../ui/radio-group'
import { Checkbox } from '../ui/checkbox'
import { useState } from 'react'
import { Equipment } from '../../types/equipment'
import { EquipmentChangeLog } from '../../types/equipmentChange'
import Papa from 'papaparse';

function ExportCsvButton() {
    const filteredChangesLogList = useChangesStore(state => state.filteredChangesLogList)
    const filteredEquipmentsList = useEquipmentsStore(state => state.filteredEquipmentsList)
    const completeEquipmentsList = useEquipmentsStore(state => state.equipmentsList)
    const completeChangesLogList = useChangesStore(state => state.changesHistoryList)
    const [isTableFiltered, setIstableFiltered] = useState<boolean>(false)
    const [ tableToBeExported, setTableToBeExported ] = useState<"equipment"|"changelog">("equipment")

    const exportTableToCsv = () => {

      type ChangeLogExported = Omit<EquipmentChangeLog, 'changes'> &
      {
        changes: string
      }

      let chosenTable = [] as Equipment[] | ChangeLogExported[]
      let fileName: string = "";

      if(isTableFiltered){
        if(tableToBeExported === "changelog"){
          chosenTable = filteredChangesLogList.map((changelog) => ({...changelog, changes: JSON.stringify(changelog.changes)}))
          fileName = "filtered_changeslogs";
        }else{
          chosenTable =  filteredEquipmentsList;
          fileName = "filtered_equipments";
        }
        
        
      }else{
        if(tableToBeExported === "changelog"){
          chosenTable = completeChangesLogList.map((changelog) => ({...changelog, changes: JSON.stringify(changelog.changes)}))
          fileName = "all_changeslogs";
        }else{
          chosenTable =  completeEquipmentsList;
          fileName = "all_equipments";
        }
      }

      const csv = Papa.unparse(chosenTable)
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${fileName}.csv`;
      link.click();
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'default'} className="text-white dark:text-black p-8 md:p-12! text-lg w-full">
                    Exportar tabela pra CSV
                    <PiExport className="text-2xl"/>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className='text-lg font-bold'>Exportar dados</DialogTitle>
            <DialogDescription className='text-muted-foreground text-sm'>
              Selecione e exporte os dados relevantes para um arquivo CSV.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 text-sm font-semibold">
            <RadioGroup defaultValue="equipments">
                <div className="flex items-center gap-3" onClick={()=> setTableToBeExported("equipment")}>
                    <RadioGroupItem checked={tableToBeExported === "equipment"} className=' rounded-xs border-slate-400 data-[state=checked]:bg-neutral-300'  value="equipments" id="r1" />
                    <Label htmlFor="r1">Lista de Equipamentos</Label>
                </div>
                <div className="flex items-center gap-3" onClick={()=> setTableToBeExported("changelog")}>
                    <RadioGroupItem checked={tableToBeExported === "changelog"} className=' rounded-xs border-slate-400 data-[state=checked]:bg-neutral-300' value="changelogs" id="r2" />
                    <Label htmlFor="r2">Histórico de Alterações</Label>
                </div>
            </RadioGroup>
             <div className="flex items-center gap-3 mt-8 mb-4" onClick={()=>setIstableFiltered(prev => !prev)}>
                <Checkbox id="filterEnabled" checked={isTableFiltered} className='border-slate-400 rounded-xs'/>
                <Label htmlFor="filterEnabled">Exportar com o filtro aplicado <span className='text-xs text-neutral-500'>({tableToBeExported === "changelog" ? filteredChangesLogList.length : filteredEquipmentsList.length} itens encontrados)</span></Label>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button onClick={()=>exportTableToCsv()}>Exportar CSV</Button>
          </DialogFooter>
        </DialogContent>
        </Dialog>
       
    )
}

export default ExportCsvButton
