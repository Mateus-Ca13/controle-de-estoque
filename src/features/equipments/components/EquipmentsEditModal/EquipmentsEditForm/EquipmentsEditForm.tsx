import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../../../components/ui/form"
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { equipmentsStore, useEquipmentsStore } from "../../../store/EquipmentsStore";
import { Input } from "../../../../../components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import { DialogFooter } from "../../../../../components/ui/dialog";
import { Button } from "../../../../../components/ui/button";
import { Equipment } from "../../../../../types/equipment";
import { compareIfChangesHasBeenMade } from "../../../utils/equipmentsUtils";
import { toast } from "sonner";

const formSchema = z.object({
    id: z.string(),
    name: z.string().min(2, "Campo obrigatório.").max(50, "Limite de 50 caracteres excedido."),
    details: z.string().optional(),
    brand: z.string().min(2, "Campo obrigatório."),
    model: z.string().optional(),
    amount: z.number().min(0, "Quantidade não pode ser menor que 0.")
})

function EquipmentsEditForm() {
    const equipmentsList  = useEquipmentsStore(state => state.equipmentsList)
    const editingEquipment = useEquipmentsStore(state => state.editingEquipment)
    const openAlertPopup = useEquipmentsStore((state) => state.openAlertPopup)
    const setEditingEquipment = useEquipmentsStore(state => state.setEditingEquipment)
    

    const equipmentsForm = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: editingEquipment?.id,
            name: editingEquipment?.name,
            details: editingEquipment?.details,
            brand: editingEquipment?.brand,
            model: editingEquipment?.model,
            amount: editingEquipment?.amount
        }
    })

    function submitHandler(data: Equipment){
        const comparingEquip: Equipment = equipmentsList.filter(equip => equip.id === data.id)[0] 
        const dataWasEdited = compareIfChangesHasBeenMade(data, comparingEquip);

        if (!dataWasEdited){
            toast.warning("Nenhuma alteração foi feita no equipamento.");
            return;
        }

        setEditingEquipment({...editingEquipment!, ...data});
        openAlertPopup("save");
    }

    return (
       <Form {...equipmentsForm}>
            <form onSubmit={equipmentsForm.handleSubmit(submitHandler)}
                className="gap-2 flex flex-col">
                <FormField
                control={equipmentsForm.control}
                name="id"
                render={({field}) => (
                    <FormItem className="gap-0">
                        <FormLabel>ID</FormLabel>
                        <FormControl>
                            <Input
                            disabled
                            className="mt-2 mb-1"
                            placeholder="Nome do equipamento" 
                            {...field}
                            />
                        </FormControl>
                        <FormMessage children=""/>
                    </FormItem>
                )}/>
                <FormField
                control={equipmentsForm.control}
                name="name"
                render={({field}) => (
                    <FormItem className="gap-0">
                        <FormLabel>Nome<span className="text-red-700 -ms-2">*</span></FormLabel>
                        <FormControl>
                            <Input
                            className="mt-2 mb-1"
                            placeholder="Nome do equipamento" 
                            {...field}
                            />
                        </FormControl>
                        <FormMessage children=""/>
                    </FormItem>
                )}/>
                <FormField
                control={equipmentsForm.control}
                name="details"
                render={({field}) => (
                    <FormItem className="gap-0">
                        <FormLabel>Detalhes</FormLabel>
                        <FormControl>
                            <Input
                            className="mt-2 mb-1"
                            placeholder="Detalhes do equipamento" 
                            {...field}
                            />
                        </FormControl>
                        <FormMessage children=""/>
                    </FormItem>
                )}/>
                <FormField
                control={equipmentsForm.control}
                name="brand"
                render={({field}) => (
                    <FormItem className="gap-0">
                        <FormLabel>Marca<span className="text-red-700 -ms-2">*</span></FormLabel>
                        <FormControl>
                            <Input
                            className="mt-2 mb-1" 
                            placeholder="Marca do equipamento" 
                            {...field}
                            />
                        </FormControl>
                        <FormMessage children=""/>
                    </FormItem>
                )}/>
                <FormField
                control={equipmentsForm.control}
                name="model"
                render={({field}) => (
                    <FormItem className="gap-0">
                        <FormLabel>Modelo</FormLabel>
                        <FormControl>
                            <Input
                            className="mt-2 mb-1" 
                            placeholder="Modelo do equipamento" 
                            {...field}
                            />
                        </FormControl>
                        <FormMessage children=""/>
                    </FormItem>
                )}/>
                <FormField
                control={equipmentsForm.control}
                name="amount"
                render={({field}) => (
                    <FormItem className="gap-0">
                        <FormLabel>Quantidade<span className="text-red-700 -ms-2">*</span></FormLabel>
                        <FormControl>
                            <Input
                            min={0}
                            className="mt-2 mb-1" 
                            placeholder="Quantidade do equipamento" 
                            {...field}
                            onChange={(e) => field.onChange(Number(e.target.value))}
                            type="number" 
                            />
                        </FormControl>
                        <FormMessage children=""/>
                    </FormItem>
                )}/>
                <FormMessage children=""/>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancelar</Button>
                    </DialogClose>
                    <Button type="submit">Salvar</Button>
                </DialogFooter>
            </form>
       </Form>
    )
}

export default EquipmentsEditForm
