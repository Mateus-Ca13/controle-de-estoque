import { Equipment } from "../types/equipment";

function changeTypeTranslate (content: "remove" | "update" | "create") {
    switch (content) {
        case "remove":
            return "Excluído"
        case "update":
            return "Editado"
        case "create":
            return "Adicionado"
        default:
            break;
    }
}

function formatTimestamp (date: Date){
    const timestamp = new Date(date)
    const day = timestamp.getDate().toString().padStart(2, '0');
    const month = (timestamp.getMonth()+1).toString().padStart(2, '0');
    const year = timestamp.getFullYear()
    const hour = timestamp.getHours().toString().padStart(2, '0');
    const minute = timestamp.getMinutes().toString().padStart(2, '0');
    return `${day}/${month}/${year} às ${hour}:${minute}`
}

function formatCategoriesName(category: Equipment["category"]){
    switch (category) {
        case "computers":
            return "Computadores/Notebooks"

        case "accessories":
            return "Acessórios"

        case "components":
            return "Componentes"

        case "itTools":
            return "Ferramentas e Utilitários"

        case "mobiles":
            return "Dispositivos Móveis"

        case "monitors":
            return "Monitores/Telas"

        case "networking":
            return "Redes e Conectividade"

        case "peripherals":
            return "Periféricos"

        case "powerAndSafety":
            return "Segurança e Energia"

        case "printAndScans":
            return "Impressão e Digitalização"

        default:
            
            return "Desconhecido"
    }
}


export { changeTypeTranslate, formatTimestamp, formatCategoriesName}