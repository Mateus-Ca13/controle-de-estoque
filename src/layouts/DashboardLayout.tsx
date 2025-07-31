import { Outlet } from 'react-router-dom'
import ButtonsDashboard from '../components/ButtonsDashboard/ButtonsDashboard'
import { Toaster } from '../components/ui/sonner'
import Footer from '../components/Footer/Footer'

function DashboardLayout() {


    return (
        <div className='min-h-screen flex-col bg-slate-200 justify-start items-center flex'>
            <div className='w-11/12 justify-center flex flex-col items-center py-6'>
                <ButtonsDashboard/>
                <Outlet/>
                <Toaster/>
                <Footer/>
            </div>
        </div>
        
    )
}

export default DashboardLayout
