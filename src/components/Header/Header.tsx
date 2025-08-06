import { SidebarTrigger } from "../ui/sidebar"


function Header() {

    return (
        <div className=' flex items-center justify-between mb-6 w-full fixed left-0 right-0 ps-4 pe-8 md:pe-20 py-2 top-0 bg-white dark:bg-neutral-800 shadow-md'>
            <SidebarTrigger variant={"outline"} className='p-6! dark:bg-neutral-700' size={"lg"}/>
            <div className='flex items-center'>
                <img src="./favicon.png" className='h-8 me-2' alt="" />
                <h1 className='text-lg font-extrabold'>TechStock<span className='hidden md:inline'> - Controle de Estoque para TI</span></h1>
            </div>
                            
        </div>
    )
}

export default Header
