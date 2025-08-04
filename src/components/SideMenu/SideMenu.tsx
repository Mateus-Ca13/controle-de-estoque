import { FaUser } from "react-icons/fa"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from "../ui/sidebar"
import ToggleThemeButton from "../ToggleThemeButton/ToggleThemeButton"

function SideMenu() {
    const userId = localStorage.getItem("user_id")

    return (
        <Sidebar variant="sidebar" collapsible="offcanvas" side="left" className="shadow-lg">
            <SidebarHeader className="my-16 ">
                <div className="flex items-center gap-3 border p-2 dark:bg-neutral-800 me-2 rounded-lg">
                    <span className="p-3 bg-neutral-900 text-white rounded-md"><FaUser/></span>
                    <p className="font-bold">Usuário {userId}</p></div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <ToggleThemeButton/>
                </SidebarGroup>
                <p className="mt-auto text-xs text-center px-2 text-neutral-500 font-semibold">Desenvolvido por Mateus Cavichion</p>
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

export default SideMenu
