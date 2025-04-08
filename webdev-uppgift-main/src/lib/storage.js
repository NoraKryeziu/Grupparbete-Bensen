import * as http from "./utilities/httpClient.js"

export const addToStorage = async (course) => {
    const response = await http.post('courses', course)
    return response.ok
}

export const getFromStorage = async () => {
    return await http.get('courses')
}

export const removeFromStorage = async (id) => {
    const response = await http.remove(`courses/${id}`)
    return response.ok
}
