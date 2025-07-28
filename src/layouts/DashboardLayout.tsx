import { Outlet } from 'react-router-dom'
import ButtonsDashboard from '../components/ButtonsDashboard/ButtonsDashboard'

function DashboardLayout() {


    return (
        <div className='min-h-screen flex-col bg-slate-200 justify-start items-center flex'>
            <div className='w-11/12 justify-center flex flex-col items-center py-6'>
                <ButtonsDashboard/>
                <Outlet/>
            </div>
        </div>
        
    )
}

export default DashboardLayout
