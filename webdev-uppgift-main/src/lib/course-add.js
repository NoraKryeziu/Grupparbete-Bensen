import { addToStorage } from './storage.js'

const toast = document.querySelector('#toast')
const courseForm = document.querySelector('#course-form')
// const courseList = document.querySelector('#course-list')

const initApp = async () => {
    // const courses = await getFromStorage()
    // courses.forEach(addCourseToDom)
}

const handleAddCourse = async (event) => {
    event.preventDefault()

    const course = {
        title: courseForm.title.value.trim(),
        description: courseForm.description.value.trim(),
        points: parseInt(courseForm.points.value),
        placeOfStudy: courseForm.location.value.trim()
    }

    if (!course.title || !course.description || isNaN(course.points) || !course.placeOfStudy) {
        alert('Fyll i alla fält!')
        return
    }

    const result = await addToStorage(course)
    if (result) {
        courseForm.reset()

        toast.classList.add('show')
        toast.textContent = 'Kursen har lagts till!'

        setTimeout(() => {
            toast.classList.remove('show')
        }, 3000)

        // setTimeout(() => {
        //     messageBox.style.display = 'none'
        // }, 3000)
    } else {
        toast.classList.add('show')
        toast.textContent = 'Något gick fel...'

        setTimeout(() => {
            toast.classList.remove('show')
        }, 3000)
    }
}


// const addCourseToDom = (course) => {
//     const li = document.createElement('li')
//     li.textContent = `${course.title} (${course.points}p) - ${course.location}`
//     courseList.appendChild(li)
// }

document.addEventListener('DOMContentLoaded', initApp)
courseForm.addEventListener('submit', handleAddCourse)
