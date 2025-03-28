export const addToStorage = (course) => {
  const courses = getFromStorage();
  courses.push(course);
  localStorage.setItem('courses', JSON.stringify(courses));
};

export const getFromStorage = () => {
  let items;

  if (localStorage.getItem('courses') === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem('courses'));
  }
  return items;
};

export const removeFromStorage = (id) => {
  const courses = getFromStorage().filter(course => course.id !== id);
  localStorage.setItem('courses', JSON.stringify(courses));
};