
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import EquipmentsPage from './features/equipments/pages/EquipmentsPage'
import { EquipmentsContextProvider } from './features/equipments/contexts/EquipmentsContextProvider'

function App() {

  return (
    <>
      <BrowserRouter>
        <EquipmentsContextProvider>
          <Routes>
            
            <Route path='/' index element={<EquipmentsPage/>}/>
            
          </Routes>
        </EquipmentsContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
