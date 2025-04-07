import { courses as staticCourses } from '../data/courses.js';
import { getFromStorage, removeFromStorage } from './storage.js';

const courseTitle = document.querySelector('.course-title');
const placeOfStudy = document.querySelector('.info p:first-child');
const points = document.querySelector('.info p:nth-child(2)');
const description = document.querySelector('.info p:nth-child(3)');
const deleteBtn = document.querySelector('.delete-course-button');

let courseId = null;

const initApp = () => {
  courseId = new URLSearchParams(location.search).get('course');
  loadCourse(courseId);
};

const loadCourse = (id) => {
  const allCourses = [...staticCourses, ...getFromStorage()];
  const course = allCourses.find(c => c._id === id);

  if (!course) {
    courseTitle.innerText = 'Kursen kunde inte hittas.';
    return;
  }

  courseTitle.innerText = course.title;
  placeOfStudy.innerHTML += `<span> ${course.location ?? course.placeOfStudy} </span>`;
  points.innerHTML += `<span> ${course.points} poäng</span>`;
  description.innerHTML += `<br/><span> ${course.description} </span>`;
  description.style.textAlign = 'justify';

 
  const isFromStorage = getFromStorage().some(c => c._id === id);
  if (!isFromStorage) deleteBtn.style.display = 'none';
};

deleteBtn.addEventListener('click', () => {
  if (confirm('Är du säker på att du vill ta bort kursen?')) {
    removeFromStorage(courseId);
    alert('Kursen har tagits bort.');
    location.href = './courses-overview.html'; 
  }
});

document.addEventListener('DOMContentLoaded', initApp);
