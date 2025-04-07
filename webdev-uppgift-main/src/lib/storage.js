import * as http from "./utilities/httpClient.js"

export const addToStorage = async (course) => {
    // const courses = await getFromStorage()
    // courses.push(course)
    // localStorage.setItem('courses', JSON.stringify(courses))
}

export const getFromStorage = async () => {
    return await http.get('courses')
}

export const removeFromStorage = async (id) => {
    // const courses = await getFromStorage().filter(course => course._id !== id)
    // localStorage.setItem('courses', JSON.stringify(courses))
}
