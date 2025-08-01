import { PiCopyright, PiGithubLogoFill, PiInstagramLogoFill, PiLinkedinLogoFill } from "react-icons/pi"


function Footer() {


    return (
        <section className="w-full p-8 shadow-lg rounded-md bg-white flex flex-col items-center justify-center text-neutral-600 gap-2">
            <p className="text-sm font-bold ">Desenvolvido por Mateus Cavichion</p>
            <div className="flex items-center my-2 text-2xl gap-4">
                <a target="_blank" href="https://www.linkedin.com/in/mateus-cavichion/"><PiLinkedinLogoFill className="hover:opacity-50 duration-150 hover:cursor-pointer"/></a>
                <a target="_blank" href="https://www.instagram.com/mateus_ca13/"><PiInstagramLogoFill className="hover:opacity-50 duration-150 hover:cursor-pointer"/></a>
                <a target="_blank" href="https://github.com/Mateus-Ca13/controle-de-estoque"><PiGithubLogoFill className="hover:opacity-50 duration-150 hover:cursor-pointer"/></a>
            </div>
            <p className="flex items-start font-semibold text-sm  text-center"><PiCopyright className="me-0.5 text-xl"/> 2025 Controle de Estoque - Todos os direitos reservados.</p>
        </section>
    )
}

export default Footer
