// Skapar referenser till html element
const courseTitle = document.querySelector('.course-title');
const location = document.querySelector('.info p:first-child');
const points = document.querySelector('.info p:nth-child(2)');
const description = document.querySelector('.info p:nth-child(3)');

const initApp = () => {
    const courseId = location.search.split('=') [1];
    loadCourse(courseId);
};

const loadCourse = (courseId) => {
    const course = courses.find(c => c.id === +courseId);
    if(course){
        setCourseTitle(course.title);
        setLocation(course.location);
        setPoints(course.points);
    }
};

const setCourseTitle = (title) => {
    courseTitle.innerText = title;
};

const generateInfo = (course) => {
    location.innerHTML += `<span> ${course.location} </span>`;
    points.innerHTML += `<span> ${course.points} </span>`;
    description.innerHTML += `<span> ${course.description} </span>`;
}