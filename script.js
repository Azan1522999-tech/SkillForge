// ============================================
// SKILLFORGE - JAVASCRIPT
// ============================================

console.log("SkillForge loaded ✅");

// ============================================
// 1. STUDY TIMER
// ============================================
let time = 25 * 60;
let totalTime = 0;
let timer = null;
let display = document.getElementById("timer-display");

function startTimer() {
    clearInterval(timer);
    timer = setInterval(function () {
        if (time <= 0) {
            clearInterval(timer);
            timer = null;
            time = 0;
            display.textContent = "00:00";
            return;
        }
        time--;
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        display.textContent =
            String(minutes).padStart(2, "0") + ":" +
            String(seconds).padStart(2, "0");
        updateProgress(totalTime);
    }, 1000);
}

function updateProgress(total) {
    if (total === 0) return;
    let progress = (time / total) * 100;
    const circle = document.querySelector(".timer-circle");
    if (circle) {
        circle.style.background =
            `radial-gradient(circle, #0b0b0b 58%, transparent 59%),
             conic-gradient(#00ff88 ${progress}%, #222 ${progress}%)`;
    }
}

const btn25 = document.getElementById("btn25");
if (btn25) {
    btn25.onclick = function () {
        clearInterval(timer);
        time = 25 * 60;
        totalTime = time;
        display.textContent = "25:00";
        updateProgress(totalTime);
        startTimer();
    };
}

const btn50 = document.getElementById("btn50");
if (btn50) {
    btn50.onclick = function () {
        clearInterval(timer);
        time = 50 * 60;
        totalTime = time;
        display.textContent = "50:00";
        updateProgress(totalTime);
        startTimer();
    };
}

const btn60 = document.getElementById("btn60");
if (btn60) {
    btn60.onclick = function () {
        clearInterval(timer);
        time = 60 * 60;
        totalTime = time;
        display.textContent = "60:00";
        updateProgress(totalTime);
        startTimer();
    };
}

const pauseBtn = document.getElementById("pauseBtn");
if (pauseBtn) {
    pauseBtn.onclick = function () {
        if (timer) {
            clearInterval(timer);
            timer = null;
            this.textContent = "Resume";
        } else {
            startTimer();
            this.textContent = "Pause";
        }
    };
}

const resetBtn = document.getElementById("resetBtn");
if (resetBtn) {
    resetBtn.onclick = function () {
        clearInterval(timer);
        timer = null;
        time = 0;
        totalTime = 0;
        display.textContent = "00:00";
        const circle = document.querySelector(".timer-circle");
        if (circle) {
            circle.style.background =
                `radial-gradient(circle, #0b0b0b 60%, transparent 61%),
                 conic-gradient(#00ff88 0%, #222 0%)`;
        }
        document.getElementById("pauseBtn").textContent = "Pause";
    };
}

// ============================================
// 2. SEARCH
// ============================================
let searchBtn = document.getElementById("searchBtn");
let searchInput = document.getElementById("searchInput");
let searchResult = document.getElementById("searchResult");

if (searchBtn) {
    searchBtn.onclick = function () {
        let searchText = searchInput.value.toLowerCase().trim();
        if (searchText === "") {
            searchResult.textContent = "Please enter a skill to search!";
            return;
        }
        if (searchText.includes("web") || searchText.includes("html") || searchText.includes("css")) {
            searchResult.textContent = "✅ Web Development course found!";
        }
        else if (searchText.includes("python")) {
            searchResult.textContent = "✅ Python course found!";
        }
        else if (searchText.includes("cyber") || searchText.includes("security")) {
            searchResult.textContent = "✅ Cybersecurity course found!";
        }
        else if (searchText.includes("design") || searchText.includes("graphic")) {
            searchResult.textContent = "✅ Graphic Design course found!";
        }
        else if (searchText.includes("javascript") || searchText.includes("js")) {
            searchResult.textContent = "✅ JavaScript course found!";
        }
        else {
            searchResult.textContent = "❌ No course found!";
        }
    };
    searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            searchBtn.click();
        }
    });
}

// ============================================
// 3. THEME TOGGLE
// ============================================
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        themeToggle.textContent = "☀️";
    }
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
        if (document.body.classList.contains("light-mode")) {
            themeToggle.textContent = "☀️";
            localStorage.setItem("theme", "light");
        } else {
            themeToggle.textContent = "🌙";
            localStorage.setItem("theme", "dark");
        }
    });
}

// ============================================
// 4. BACK TO TOP
// ============================================
const backToTop = document.getElementById("backToTop");
if (backToTop) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });
    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// ============================================
// 5. SMOOTH SCROLL
// ============================================
document.querySelectorAll('nav a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// ============================================
// 6. COURSE MODAL
// ============================================
const courseData = {
    htmlcss: {
        icon: "🌐",
        title: "HTML & CSS",
        category: "FRONTEND",
        description: "Learn website structure and design from scratch. Build beautiful, responsive websites.",
    },
    javascript: {
        icon: "⚡",
        title: "JavaScript",
        category: "PROGRAMMING",
        description: "Learn programming and website interactions. Make your websites dynamic and interactive.",
    },
    python: {
        icon: "🐍",
        title: "Python",
        category: "PROGRAMMING",
        description: "Learn programming from the basics. Build real-world applications and automate tasks.",
    },
    cyber: {
        icon: "🛡️",
        title: "Cybersecurity",
        category: "SECURITY",
        description: "Learn the basics of Cybersecurity. Protect systems and data from threats.",
    }
};

const courseCards = document.querySelectorAll('.course-card');
courseCards.forEach(function (card) {
    card.addEventListener('click', function (e) {
        const key = card.dataset.course;
        const data = courseData[key];
        if (data) {
            document.getElementById('modalIcon').textContent = data.icon;
            document.getElementById('modalTitle').textContent = data.title;
            document.getElementById('modalCategory').textContent = data.category;
            document.getElementById('modalDescription').textContent = data.description;
            document.getElementById('courseModal').classList.add('active');
        }
    });
});

function closeModal() {
    const modal = document.getElementById('courseModal');
    if (modal) modal.classList.remove('active');
}

const courseModal = document.getElementById('courseModal');
if (courseModal) {
    courseModal.addEventListener('click', function (e) {
        if (e.target === this) {
            closeModal();
        }
    });
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ============================================
// 7. BUTTON ACTIONS
// ============================================

// Start Learning buttons
document.querySelectorAll('.skill-card button').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const skillName = btn.closest('.skill-card').querySelector('h3').textContent;
        document.getElementById('modalIcon').textContent = '📚';
        document.getElementById('modalTitle').textContent = skillName;
        document.getElementById('modalCategory').textContent = 'COURSE';
        document.getElementById('modalDescription').textContent =
            'Start learning ' + skillName + ' today! This course will take you from beginner to advanced level with hands-on projects.';
        document.getElementById('courseModal').classList.add('active');
    });
});

// View Course buttons
document.querySelectorAll('.course-card button').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const card = btn.closest('.course-card');
        const key = card.dataset.course;
        const data = courseData[key];
        if (data) {
            document.getElementById('modalIcon').textContent = data.icon;
            document.getElementById('modalTitle').textContent = data.title;
            document.getElementById('modalCategory').textContent = data.category;
            document.getElementById('modalDescription').textContent = data.description;
            document.getElementById('courseModal').classList.add('active');
        }
    });
});

// Read Notes buttons
document.querySelectorAll('.notes > div button').forEach(function (btn) {
    btn.addEventListener('click', function () {
        const noteTitle = btn.closest('div').querySelector('h3').textContent;
        document.getElementById('modalIcon').textContent = '📝';
        document.getElementById('modalTitle').textContent = noteTitle;
        document.getElementById('modalCategory').textContent = 'NOTES';
        document.getElementById('modalDescription').textContent =
            'Detailed notes for ' + noteTitle + '. Learn all the important concepts, examples, and best practices.';
        document.getElementById('courseModal').classList.add('active');
    });
});

// Enroll Now button in modal
document.querySelectorAll('.modal-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        const courseTitle = document.getElementById('modalTitle').textContent;
        
        // Check login
        if (typeof SkillForgeAuth !== 'undefined' && !SkillForgeAuth.isLoggedIn()) {
            alert('Please login first to enroll!');
            window.location.href = 'login.html';
            return;
        }
        
        // Find course ID by title
        let courseId = null;
        if (typeof COURSES !== 'undefined') {
            Object.keys(COURSES).forEach(function(key) {
                if (COURSES[key].title === courseTitle) {
                    courseId = key;
                }
            });
        }
        
        if (courseId && typeof SkillForgeAuth !== 'undefined') {
            const result = SkillForgeAuth.enrollCourse(courseId);
            if (result.success) {
                btn.textContent = '✅ Enrolled!';
                btn.style.background = '#00cc66';
                setTimeout(() => {
                    closeModal();
                    window.location.href = 'dashboard.html';
                }, 1000);
            }
        } else {
            btn.textContent = '✅ Enrolled!';
            btn.style.background = '#00cc66';
            setTimeout(() => {
                closeModal();
                btn.textContent = 'Enroll Now 🚀';
                btn.style.background = '#00ff88';
            }, 1500);
        }
    });
});

// ============================================
// 8. TESTIMONIALS SLIDER
// ============================================
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
let autoSlide;

function goToSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
}

function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

if (slides.length > 0) {
    startAutoSlide();
    const slider = document.querySelector('.testimonials-slider');
    if (slider) {
        slider.addEventListener('mouseenter', stopAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);
    }
}

// ============================================
// 9. STATS COUNTER
// ============================================
function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    updateCounter();
}

const statsSection = document.querySelector('.stats-section');
let statsAnimated = false;
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                statsAnimated = true;
                document.querySelectorAll('.counter').forEach(animateCounter);
            }
        });
    }, { threshold: 0.5 });
    observer.observe(statsSection);
}