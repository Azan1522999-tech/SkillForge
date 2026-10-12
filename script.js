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

    document.querySelector(".timer-circle").style.background =
        `radial-gradient(circle, #0b0b0b 58%, transparent 59%),
         conic-gradient(#00ff88 ${progress}%, #222 ${progress}%)`;
}

document.getElementById("btn25").onclick = function () {
    clearInterval(timer);
    time = 25 * 60;
    totalTime = time;
    display.textContent = "25:00";
    updateProgress(totalTime);
    startTimer();
};

document.getElementById("btn50").onclick = function () {
    clearInterval(timer);
    time = 50 * 60;
    totalTime = time;
    display.textContent = "50:00";
    updateProgress(totalTime);
    startTimer();
};

document.getElementById("btn60").onclick = function () {
    clearInterval(timer);
    time = 60 * 60;
    totalTime = time;
    display.textContent = "60:00";
    updateProgress(totalTime);
    startTimer();
};

document.getElementById("pauseBtn").onclick = function () {
    if (timer) {
        clearInterval(timer);
        timer = null;
        this.textContent = "Resume";
    } else {
        startTimer();
        this.textContent = "Pause";
    }
};

document.getElementById("resetBtn").onclick = function () {
    clearInterval(timer);
    timer = null;
    time = 0;
    totalTime = 0;

    display.textContent = "00:00";

    document.querySelector(".timer-circle").style.background =
        `radial-gradient(circle, #0b0b0b 60%, transparent 61%),
         conic-gradient(#00ff88 0%, #222 0%)`;

    document.getElementById("pauseBtn").textContent = "Pause";
};

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
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
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
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
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

// Close on background click
const courseModal = document.getElementById('courseModal');
if (courseModal) {
    courseModal.addEventListener('click', function (e) {
        if (e.target === this) {
            closeModal();
        }
    });
}

// Close on Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
        closeLogin();
    }
});

// ============================================
// 7. LOGIN / SIGNUP
// ============================================
const loginModal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');

if (loginBtn) {
    loginBtn.addEventListener('click', function () {
        loginModal.classList.add('active');
    });
}

function closeLogin() {
    if (loginModal) loginModal.classList.remove('active');
}

function switchTab(tab) {
    const tabs = document.querySelectorAll('.login-tab');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    tabs.forEach(t => t.classList.remove('active'));

    if (tab === 'login') {
        tabs[0].classList.add('active');
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        tabs[1].classList.add('active');
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}

// Signup Form
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('signupName').value.trim();
        const email = document.getElementById('signupEmail').value.trim();
        const password = document.getElementById('signupPassword').value.trim();
        const msg = document.getElementById('signupMessage');

        msg.textContent = '';
        msg.className = 'login-message';

        if (name.length < 3) {
            msg.textContent = '❌ Name must be at least 3 characters';
            msg.classList.add('error');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            msg.textContent = '❌ Please enter a valid email';
            msg.classList.add('error');
            return;
        }

        if (password.length < 6) {
            msg.textContent = '❌ Password must be at least 6 characters';
            msg.classList.add('error');
            return;
        }

        // Save user (demo only)
        const user = { name, email, password };
        localStorage.setItem('skillforge_user', JSON.stringify(user));

        msg.textContent = '✅ Account created! Welcome ' + name + '!';
        msg.classList.add('success');

        setTimeout(() => {
            closeLogin();
            updateNavAfterLogin(name);
        }, 1500);
    });
}

// Login Form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value.trim();
        const msg = document.getElementById('loginMessage');

        msg.textContent = '';
        msg.className = 'login-message';

        const savedUser = JSON.parse(localStorage.getItem('skillforge_user'));

        if (!savedUser) {
            msg.textContent = '❌ No account found. Please sign up first!';
            msg.classList.add('error');
            return;
        }

        if (savedUser.email !== email || savedUser.password !== password) {
            msg.textContent = '❌ Invalid email or password';
            msg.classList.add('error');
            return;
        }

        msg.textContent = '✅ Welcome back, ' + savedUser.name + '!';
        msg.classList.add('success');

        setTimeout(() => {
            closeLogin();
            updateNavAfterLogin(savedUser.name);
        }, 1500);
    });
}

function updateNavAfterLogin(name) {
    if (loginBtn) {
        loginBtn.textContent = '👤 ' + name.split(' ')[0];
        loginBtn.style.background = 'transparent';
        loginBtn.style.color = '#00ff88';
        loginBtn.style.border = '1px solid #00ff88';
    }
}

// Check if user is logged in
const currentUser = JSON.parse(localStorage.getItem('skillforge_user'));
if (currentUser) {
    updateNavAfterLogin(currentUser.name);
}

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

    // Pause on hover
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

// Trigger on scroll
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
// ============================================
// 10. BUTTON ACTIONS
// ============================================

// Start Learning buttons
document.querySelectorAll('.skill-card button').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        
        const skillName = btn.closest('.skill-card').querySelector('h3').textContent;
        
        // Show modal with skill info
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
        
        // Show notes in modal
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
        const courseName = document.getElementById('modalTitle').textContent;
        
        // Check if user is logged in
        const user = JSON.parse(localStorage.getItem('skillforge_user'));
        
        if (!user) {
            closeModal();
            setTimeout(() => {
                loginModal.classList.add('active');
            }, 300);
        } else {
            btn.textContent = '✅ Enrolled Successfully!';
            btn.style.background = '#00cc66';
            
            setTimeout(() => {
                closeModal();
                btn.textContent = 'Enroll Now 🚀';
                btn.style.background = '#00ff88';
            }, 1500);
        }
    });
});