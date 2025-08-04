import { useEffect, useState } from "react";

function useTheme() {

    const [theme, setTheme] = useState<string>(() => {return localStorage.getItem("theme") ?? "light";});

    useEffect(()=>{
        const body = document.documentElement
        if (theme == "dark"){
            body.classList.add("dark")
        }else{
            body.classList.remove("dark")
        }
        localStorage.setItem("theme", theme);
    }, [theme])

    return {theme, setTheme}
}

export default useTheme
