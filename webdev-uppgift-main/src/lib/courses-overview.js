import { courses as staticCourses } from "../data/courses.js";
import { getFromStorage } from './storage.js';

const courseList = document.querySelector('#courses');

const initApp = async () => {
    const savedCourses = await getFromStorage();
    const allCourses = [...staticCourses, ...savedCourses];
    renderCourses(allCourses);
};

const renderCourses = (courses) => {
    courseList.innerHTML = '';
    courses.forEach(course => generateCourseHtml(course));
};

const generateCourseHtml = (course) => {
    const section = document.createElement('section');
    section.classList.add('course-card');

    const title = document.createElement('h2');
    title.innerText = course.title;

    const points = document.createElement('p');
    points.innerText = `${course.points} poäng`;

    section.addEventListener('click', () => {
        location.href = `../pages/course-details.html?course=${course._id}`;
    }); 

    section.appendChild(title);
    section.appendChild(points);

    courseList.appendChild(section);
};

document.addEventListener('DOMContentLoaded', initApp);
