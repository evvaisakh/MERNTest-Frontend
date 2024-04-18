import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverUrl"

// register api 
export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVER_URL}/register`, reqBody)
}

// get all students
export const getAllStudentsAPI = async () => {
    return await commonAPI("GET", `${SERVER_URL}/all-students`, "")
}