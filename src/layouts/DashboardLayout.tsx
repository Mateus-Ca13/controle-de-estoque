import { Outlet } from 'react-router-dom'
import ButtonsDashboard from '../components/ButtonsDashboard/ButtonsDashboard'
import { Toaster } from '../components/ui/sonner'
import Footer from '../components/Footer/Footer'
import { SidebarProvider, SidebarTrigger } from '../components/ui/sidebar'
import SideMenu from '../components/SideMenu/SideMenu'

function DashboardLayout() {


    return (
        <div className='min-h-screen flex-col bg-slate-200 dark:bg-neutral-900 justify-start items-center flex'>
            <div className='w-11/12 md:w-11/12  justify-center flex flex-col items-center pt-18 md:pt-10 pb-4'>
                
                    <SidebarProvider className='flex-col'>
                        
                        <SideMenu/>
                        <SidebarTrigger variant={"outline"} className='fixed left-1.5 top-2 z-10 p-6! dark:bg-neutral-700' size={"lg"}/>
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
