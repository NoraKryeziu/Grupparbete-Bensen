import { addToStorage } from './storage.js';

const toast = document.querySelector('#toast');
const courseForm = document.querySelector('#course-form');
const courseList = document.querySelector('#course-list');

const initApp = () => {
  const courses = getFromStorage();
  courses.forEach(addCourseToDom);
};

const handleAddCourse = (event) => {
  event.preventDefault();

  const course = {
    id: Date.now(),
    title: courseForm.title.value.trim(),
    description: courseForm.description.value.trim(),
    points: parseInt(courseForm.points.value),
    location: courseForm.location.value.trim()
  };

  if (!course.title || !course.description || isNaN(course.points) || !course.location) {
    alert('Fyll i alla fält!');
    return;
  }
  
  addToStorage(course);
  courseForm.reset();

  

toast.classList.add('show');
toast.textContent = 'Kursen har lagts till!';

setTimeout(() => {
  toast.classList.remove('show');
}, 3000);


  setTimeout(() => {
    messageBox.style.display = 'none';
  }, 3000);
};


const addCourseToDom = (course) => {
  const li = document.createElement('li');
  li.textContent = `${course.title} (${course.points}p) – ${course.location}`;
  courseList.appendChild(li);
};

document.addEventListener('DOMContentLoaded', initApp);
courseForm.addEventListener('submit', handleAddCourse);
