import { FaUser } from "react-icons/fa"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from "../ui/sidebar"
import ToggleThemeButton from "../ToggleThemeButton/ToggleThemeButton"
import { PiGithubLogoFill, PiInstagramLogoFill, PiLinkedinLogoFill } from "react-icons/pi"

function SideMenu() {
    const userId = localStorage.getItem("user_id")

    return (
        <Sidebar variant="sidebar" collapsible="offcanvas" side="left" className="shadow-lg">
            <SidebarHeader className="my-16 ">
                <div className="dark:bg-neutral-800 flex items-center gap-3 border p-2  me-2 rounded-lg">
                    <span className="p-3 bg-neutral-900 text-white rounded-md"><FaUser/></span>
                    <p className="font-bold">Usuário {userId}</p></div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <ToggleThemeButton/>
                </SidebarGroup>
                
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter className="mt-auto px-2 pb-8 me-2 text-neutral-500 ">
                <div className="flex justify-center items-center my-2 text-2xl gap-4">
                                <a target="_blank" href="https://www.linkedin.com/in/mateus-cavichion/"><PiLinkedinLogoFill className="hover:opacity-50 duration-150 hover:cursor-pointer"/></a>
                                <a target="_blank" href="https://www.instagram.com/mateus_ca13/"><PiInstagramLogoFill className="hover:opacity-50 duration-150 hover:cursor-pointer"/></a>
                                <a target="_blank" href="https://github.com/Mateus-Ca13/controle-de-estoque"><PiGithubLogoFill className="hover:opacity-50 duration-150 hover:cursor-pointer"/></a>
                </div>
                <p className="text-xs text-center font-semibold">Desenvolvido por Mateus Cavichion</p>
            </SidebarFooter>
        </Sidebar>
    )
}

export default SideMenu
