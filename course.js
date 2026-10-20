// ============================================
// SKILLFORGE - COURSE PLAYER LOGIC
// ============================================

// Check Login
if (!SkillForgeAuth.isLoggedIn()) {
    window.location.href = 'login.html';
}

const user = SkillForgeAuth.getCurrentUser();
document.getElementById('navUserName').textContent = user.name.split(' ')[0];

// Get Course ID from URL (e.g., course.html?course=htmlcss)
const urlParams = new URLSearchParams(window.location.search);
const courseId = urlParams.get('course');
const course = COURSES[courseId];

if (!course) {
    alert('Course not found!');
    window.location.href = 'dashboard.html';
}

// Variables
let currentLessonId = 1;

// Initialize Page
function initCourse() {
    document.getElementById('sidebarCourseTitle').textContent = course.title;
    
    // Check if enrolled, if not, enroll automatically
    if (!user.enrolledCourses.includes(courseId)) {
        SkillForgeAuth.enrollCourse(courseId);
        window.location.reload(); // reload to get updated progress
    }

    renderSidebar();
    loadLesson(1); // Load first lesson by default
    updateOverallProgress();
}

// Render Sidebar Lessons
function renderSidebar() {
    const list = document.getElementById('sidebarLessonsList');
    list.innerHTML = '';

    course.lessonsData.forEach(lesson => {
        const isCompleted = SkillForgeAuth.isLessonCompleted(courseId, lesson.id);
        
        const li = document.createElement('div');
        li.className = `sidebar-lesson-item ${lesson.id === currentLessonId ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
        li.onclick = () => loadLesson(lesson.id);

        li.innerHTML = `
            <div class="sl-check">${isCompleted ? '✅' : '⭕'}</div>
            <div class="sl-info">
                <h4>${lesson.title}</h4>
                <p>⏱️ ${lesson.duration}</p>
            </div>
        `;
        list.appendChild(li);
    });
}

// Load a specific lesson
function loadLesson(lessonId) {
    currentLessonId = lessonId;
    const lesson = course.lessonsData.find(l => l.id === lessonId);

    if (!lesson) return;

    // Update Video
    const iframe = document.getElementById('lessonVideo');
    iframe.src = lesson.video;

    // Update Text Info
    document.getElementById('currentLessonTitle').textContent = lesson.title;
    document.getElementById('currentLessonDuration').textContent = `⏱️ ${lesson.duration}`;

    // Update Notes
    document.getElementById('currentLessonNotes').innerHTML = lesson.notes;

    // Update Button State
    const btn = document.getElementById('markCompleteBtn');
    if (SkillForgeAuth.isLessonCompleted(courseId, lessonId)) {
        btn.textContent = 'Completed ✓';
        btn.style.background = 'transparent';
        btn.style.color = '#00ff88';
        btn.style.border = '2px solid #00ff88';
    } else {
        btn.textContent = 'Mark as Complete ✓';
        btn.style.background = '#00ff88';
        btn.style.color = '#000';
        btn.style.border = 'none';
    }

    // Re-render sidebar to highlight active lesson
    renderSidebar();
}

// Mark Lesson Complete
document.getElementById('markCompleteBtn').addEventListener('click', function() {
    const lesson = course.lessonsData.find(l => l.id === currentLessonId);
    
    if (!SkillForgeAuth.isLessonCompleted(courseId, currentLessonId)) {
        SkillForgeAuth.completeLesson(courseId, currentLessonId);
        
        this.textContent = '✅ Just Completed!';
        this.style.background = '#00cc66';
        this.style.color = '#fff';
        
        setTimeout(() => {
            loadLesson(currentLessonId);
            updateOverallProgress();
        }, 1000);
    } else {
        // Next lesson logic
        const nextLesson = course.lessonsData.find(l => l.id === currentLessonId + 1);
        if (nextLesson) {
            loadLesson(nextLesson.id);
        } else {
            alert('🎉 You have completed all lessons in this course!');
        }
    }
});

// Update Overall Progress Bar
function updateOverallProgress() {
    const progress = SkillForgeAuth.getProgress(courseId);
    document.getElementById('sidebarProgressBar').style.width = progress + '%';
    document.getElementById('sidebarProgressText').textContent = progress + '% Complete';
}

// Start
initCourse();