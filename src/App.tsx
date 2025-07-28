
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import EquipmentsPage from './features/equipments/pages/EquipmentsPage'
import { useChangesStore } from './features/changes/store/ChangesStore'
import { useEffect } from 'react'
import { generateUserId } from './utils/generateUserId'
import { useEquipmentsStore } from './features/equipments/store/EquipmentsStore'
import ChangesPage from './features/changes/pages/ChangesPage/ChangesPage'
import DashboardLayout from './layouts/DashboardLayout'

function App() {

  const fetchEquipmentsList = useEquipmentsStore(state => state.fetchEquipmentsList)
  const fetchChangesHistoryList = useChangesStore(state => state.fetchChangesHistoryList)

  useEffect(()=>{
    fetchEquipmentsList()
    fetchChangesHistoryList()
    generateUserId()

  },[])

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<DashboardLayout/>}>
              <Route path='/' element={<EquipmentsPage/>}/>    
              <Route path='/changes-history' element={<ChangesPage/>}/>    
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
