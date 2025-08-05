import { Outlet } from 'react-router-dom'
import ButtonsDashboard from '../components/ButtonsDashboard/ButtonsDashboard'
import { Toaster } from '../components/ui/sonner'
import Footer from '../components/Footer/Footer'
import { SidebarProvider } from '../components/ui/sidebar'
import SideMenu from '../components/SideMenu/SideMenu'
import Header from '../components/Header/Header'

function DashboardLayout() {


    return (
        <div className='min-h-screen flex-col bg-slate-200 dark:bg-neutral-900 justify-start items-center flex'>
            <div className='w-11/12 md:w-11/12  justify-center flex flex-col items-center pt-22 pb-4'>
                
                    <SidebarProvider className='flex-col'>
                        <Header/>
                        <SideMenu/>
                        <ButtonsDashboard/>
                        <Outlet/>
                        <Toaster/>
                        <Footer/>
                    </SidebarProvider>
                    
            </div>
        </div>
        
    )
}

export default DashboardLayout
