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

export { changeTypeTranslate, formatTimestamp}