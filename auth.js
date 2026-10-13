// ============================================
// SKILLFORGE - AUTHENTICATION SYSTEM
// ============================================

function signup(name, email, password) {
    let users = JSON.parse(localStorage.getItem('skillforge_users')) || [];
    
    if (users.find(u => u.email === email)) {
        return { success: false, message: 'Email already registered!' };
    }
    
    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password,
        enrolledCourses: [],
        progress: {},
        certificates: [],
        joinedAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('skillforge_users', JSON.stringify(users));
    localStorage.setItem('skillforge_current_user', JSON.stringify(newUser));
    
    return { success: true, message: 'Account created! Welcome ' + name, user: newUser };
}

function login(email, password) {
    const users = JSON.parse(localStorage.getItem('skillforge_users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
        return { success: false, message: 'Invalid email or password!' };
    }
    
    localStorage.setItem('skillforge_current_user', JSON.stringify(user));
    return { success: true, message: 'Welcome back, ' + user.name + '!', user: user };
}

function logout() {
    localStorage.removeItem('skillforge_current_user');
    window.location.href = 'index.html';
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('skillforge_current_user'));
}

function isLoggedIn() {
    return getCurrentUser() !== null;
}

function enrollCourse(courseId) {
    const user = getCurrentUser();
    if (!user) return { success: false, message: 'Please login first!' };
    
    let users = JSON.parse(localStorage.getItem('skillforge_users')) || [];
    const userIndex = users.findIndex(u => u.id === user.id);
    
    if (userIndex === -1) return { success: false, message: 'User not found!' };
    
    if (!users[userIndex].enrolledCourses.includes(courseId)) {
        users[userIndex].enrolledCourses.push(courseId);
        users[userIndex].progress[courseId] = {
            completedLessons: [],
            startedAt: new Date().toISOString()
        };
        
        localStorage.setItem('skillforge_users', JSON.stringify(users));
        localStorage.setItem('skillforge_current_user', JSON.stringify(users[userIndex]));
    }
    
    return { success: true, message: 'Enrolled successfully!' };
}

function completeLesson(courseId, lessonId) {
    const user = getCurrentUser();
    if (!user) return { success: false };
    
    let users = JSON.parse(localStorage.getItem('skillforge_users')) || [];
    const userIndex = users.findIndex(u => u.id === user.id);
    
    if (userIndex === -1) return { success: false };
    
    if (!users[userIndex].progress[courseId]) {
        users[userIndex].progress[courseId] = { completedLessons: [] };
    }
    
    const completed = users[userIndex].progress[courseId].completedLessons;
    
    if (!completed.includes(lessonId)) {
        completed.push(lessonId);
        localStorage.setItem('skillforge_users', JSON.stringify(users));
        localStorage.setItem('skillforge_current_user', JSON.stringify(users[userIndex]));
    }
    
    return { success: true, completed: completed };
}

function getProgress(courseId) {
    const user = getCurrentUser();
    if (!user) return 0;
    
    const course = COURSES && COURSES[courseId];
    if (!course) return 0;
    
    const completed = user.progress?.[courseId]?.completedLessons || [];
    const total = course.lessonsData ? course.lessonsData.length : 1;
    
    return Math.round((completed.length / total) * 100);
}

function isLessonCompleted(courseId, lessonId) {
    const user = getCurrentUser();
    if (!user) return false;
    
    const completed = user.progress?.[courseId]?.completedLessons || [];
    return completed.includes(lessonId);
}

window.SkillForgeAuth = {
    signup,
    login,
    logout,
    getCurrentUser,
    isLoggedIn,
    enrollCourse,
    completeLesson,
    getProgress,
    isLessonCompleted
};