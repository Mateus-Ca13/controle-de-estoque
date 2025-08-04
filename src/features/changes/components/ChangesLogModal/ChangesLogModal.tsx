import React from 'react'
import { useChangesStore } from '../../store/ChangesStore'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '../../../../components/ui/dialog'
import { AlertDialogHeader } from '../../../../components/ui/alert-dialog'
import ChangeLogInput from './ChangeLogInput/ChangeLogInput'
import { changeTypeTranslate, formatTimestamp } from '../../../../utils/formatContent'
import { ScrollArea } from '../../../../components/ui/scroll-area'



function ChangesLogModal() {
    const isChangesModalOpen = useChangesStore(state => state.isChangesModalOpen)
    const openChangesLogModal = useChangesStore(state => state.openChangesLogModal)
    const closeChangesLogModal = useChangesStore(state => state.closeChangesLogModal)
    const viewingChangelog = useChangesStore(state => state.viewingChangelog)

    return (
        viewingChangelog && <Dialog
        open={isChangesModalOpen} 
        onOpenChange={(open) => open ? openChangesLogModal(viewingChangelog!.id): closeChangesLogModal()}>
            <DialogContent className="sm:max-w-[425px] md:max-w-1/3">
          <AlertDialogHeader>
            <DialogTitle>Visualizar ação</DialogTitle>
            <DialogDescription>
              Visuale as alterações feitas no equipamento.
            </DialogDescription>
            <ScrollArea className='h-96 md:h-full pe-4'>
            { viewingChangelog.type === 'update' ?
            <div className='mt-4'>
              <ChangeLogInput changesInfo={viewingChangelog.changes?.name} propName='Nome'/>
              <ChangeLogInput changesInfo={viewingChangelog.changes?.details} propName='Detalhes'/>
              <ChangeLogInput changesInfo={viewingChangelog.changes?.category} propName='Categoria'/>
              <ChangeLogInput changesInfo={viewingChangelog.changes?.brand} propName='Marca'/>
              <ChangeLogInput changesInfo={viewingChangelog.changes?.model} propName='Modelo'/>
              <ChangeLogInput changesInfo={viewingChangelog.changes?.amount} propName='Quantidade'/>
            </div>
            : viewingChangelog.type === 'remove' ?
            <p className='font-bold mt-4 text-red-700'>Equipamento {changeTypeTranslate(viewingChangelog.type)}</p> :
            <p className='font-bold mt-4 text-green-700'>Equipamento {changeTypeTranslate(viewingChangelog.type)}</p>
            }
          </ScrollArea>
          </AlertDialogHeader>
          <DialogDescription className='font-semibold mt-4'>
            Ação feita em {formatTimestamp(viewingChangelog.createdAt)}
            
          </DialogDescription>
        </DialogContent>
        </Dialog>
    )
}

export default ChangesLogModal
