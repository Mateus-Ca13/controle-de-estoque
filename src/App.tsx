
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import EquipmentsPage from './features/equipments/pages/EquipmentsPage'
import { useEquipmentsStore } from './features/equipments/store/EquipmentsStore'
import { useEffect } from 'react'

function App() {

  const fetchEquipmentsList = useEquipmentsStore(state => state.fetchEquipmentsList)

  useEffect(()=>{
    fetchEquipmentsList()
  },[])

  return (
    <>
      <BrowserRouter>
          <Routes>
            
            <Route path='/' index element={<EquipmentsPage/>}/>
            
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
