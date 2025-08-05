import useTheme from "../../hooks/useTheme"
import { Label } from "../ui/label"
import { Switch } from "../ui/switch"

function ToggleThemeButton() {
    const {theme, setTheme} = useTheme()

    return (
        <div className="flex items-center dark:bg-neutral-800 me-2 justify-between px-2 py-4 rounded-lg border">
            
            <Label htmlFor="theme-mode" className="text-base">Tema escuro</Label>
            <Switch checked={theme === "dark"} onCheckedChange={() =>setTheme(theme === "dark"? "light": "dark")} id="theme-mode"  className="hover:cursor-pointer duration-150 hover:brightness-90 dark:hover:brightness-125"/>
        </div>
    )
}

export default ToggleThemeButton
