import React from 'react'
import { useChangesStore } from '../../store/ChangesStore'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '../../../../components/ui/dialog'
import { AlertDialogHeader } from '../../../../components/ui/alert-dialog'



function ChangesLogModal() {
    const isChangesModalOpen = useChangesStore(state => state.isChangesModalOpen)
    const openChangesLogModal = useChangesStore(state => state.openChangesLogModal)
    const closeChangesLogModal = useChangesStore(state => state.closeChangesLogModal)
    const viewingChangelog = useChangesStore(state => state.viewingChangelog)


    return (
        <Dialog
        open={isChangesModalOpen} 
        onOpenChange={(open) => open ? openChangesLogModal(viewingChangelog!.id): closeChangesLogModal()}>
            <DialogContent className="sm:max-w-[425px]">
          <AlertDialogHeader>
            <DialogTitle>Visualizar ações</DialogTitle>
            <DialogDescription>
              Visuale as modificações feitas no equipamento.
            </DialogDescription>
          </AlertDialogHeader>
        </DialogContent>
        </Dialog>
    )
}

export default ChangesLogModal
