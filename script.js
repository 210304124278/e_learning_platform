document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('mainContent');
    const homeLink = document.getElementById('homeLink');
    const profileLink = document.getElementById('profileLink');
    const coursesLink = document.getElementById('coursesLink');

    const user = {
        name: 'Reyyi Kusum',
        email: 'reyyikusum1601@gmail.com',
        enrolledCourses: ['Course 1', 'Course 3']
    };

    const courses = [
        { id: 1, title: 'java full satck web develpoment', description: '' },
        { id: 2, title: 'python full satck web develpoment', description: '' },
        { id: 3, title: 'MERN full satck web develpoment', description: '' }
    ];

    const lectures = {
        1: ['Lecture 1.1', 'Lecture 1.2', 'Lecture 1.3'],
        2: ['Lecture 2.1', 'Lecture 2.2'],
        3: ['Lecture 3.1', 'Lecture 3.2', 'Lecture 3.3']
    };

    function displayHome() {
        mainContent.innerHTML = `
            <h2>Welcome to the E-learning Platform</h2>
            <p>Browse our courses and start learning today!</p>
        `;
    }

    function displayProfile() {
        mainContent.innerHTML = `
            <h2>User Profile</h2>
            <p>Name: ${user.name}</p>
            <p>Email: ${user.email}</p>
            <h3>Enrolled Courses</h3>
            <ul class="course-list">
                ${user.enrolledCourses.map(course => `<li>${course}</li>`).join('')}
            </ul>
        `;
    }

    function displayCourses() {
        mainContent.innerHTML = `
            <h2>Available Courses</h2>
            <ul class="course-list">
                ${courses.map(course => `
                    <li class="course-item">
                        <h3>${course.title}</h3>
                        <p>${course.description}</p>
                        <button onclick="viewCourse(${course.id})">View Course</button>
                    </li>
                `).join('')}
            </ul>
        `;
    }

    window.viewCourse = function(courseId) {
        const course = courses.find(c => c.id === courseId);
        mainContent.innerHTML = `
            <h2>${course.title}</h2>
            <p>${course.description}</p>
            <h3>Lectures</h3>
            <ul class="lecture-list">
                ${lectures[courseId].map(lecture => `<li class="lecture-item">${lecture}</li>`).join('')}
            </ul>
            <button onclick="enrollCourse(${courseId})">Enroll in this Course</button>
        `;
    };

    window.enrollCourse = function(courseId) {
        const course = courses.find(c => c.id === courseId);
        if (!user.enrolledCourses.includes(course.title)) {
            user.enrolledCourses.push(course.title);
            alert(`You have enrolled in ${course.title}`);
            displayProfile();
        } else {
            alert(`You are already enrolled in ${course.title}`);
        }
    };

    homeLink.addEventListener('click', (event) => {
        event.preventDefault();
        displayHome();
    });

    profileLink.addEventListener('click', (event) => {
        event.preventDefault();
        displayProfile();
    });

    coursesLink.addEventListener('click', (event) => {
        event.preventDefault();
        displayCourses();
    });

    displayHome();
});
