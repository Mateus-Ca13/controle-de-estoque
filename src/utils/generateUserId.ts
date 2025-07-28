import { v4 as uuidv4  } from "uuid"


function generateUserId (){
    const userId: boolean = Boolean(localStorage.getItem("user_id"))
    if(userId) return
    
    const userUuid: string = uuidv4().substring(0, 7)
    localStorage.setItem("user_id", userUuid)
}

export {generateUserId}