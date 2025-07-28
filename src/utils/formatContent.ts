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

export { changeTypeTranslate}