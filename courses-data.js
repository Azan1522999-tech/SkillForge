// ============================================
// SKILLFORGE - COURSES DATA
// ============================================

const COURSES = {
    htmlcss: {
        id: 'htmlcss',
        title: 'HTML & CSS',
        icon: '🌐',
        category: 'FRONTEND',
        description: 'Learn website structure and design from scratch.',
        level: 'Beginner',
        duration: '4 Weeks',
        lessons: 12,
        price: 0,
        color: '#00ff88',
        lessonsData: [
            { id: 1, title: 'Introduction to HTML', video: 'https://www.youtube.com/embed/UB1O30fR-EE', duration: '15 min', notes: '<h4>What is HTML?</h4><p>HTML is the standard markup language.</p>' },
            { id: 2, title: 'HTML Tags', video: 'https://www.youtube.com/embed/UB1O30fR-EE', duration: '20 min', notes: '<h4>Common Tags</h4><ul><li>&lt;h1&gt; - Heading</li><li>&lt;p&gt; - Paragraph</li></ul>' },
            { id: 3, title: 'HTML Forms', video: 'https://www.youtube.com/embed/fNcJuPIZ2WE', duration: '25 min', notes: '<h4>Forms</h4><p>Learn to create forms.</p>' },
            { id: 4, title: 'CSS Introduction', video: 'https://www.youtube.com/embed/yfoY53QXEnI', duration: '20 min', notes: '<h4>CSS Basics</h4><p>Style your pages.</p>' },
            { id: 5, title: 'CSS Box Model', video: 'https://www.youtube.com/embed/rIO5326FgPE', duration: '30 min', notes: '<h4>Box Model</h4><p>Content, padding, border, margin.</p>' },
            { id: 6, title: 'Flexbox', video: 'https://www.youtube.com/embed/JJSoEo8JSnc', duration: '35 min', notes: '<h4>Flexbox</h4><p>Modern layouts.</p>' },
            { id: 7, title: 'CSS Grid', video: 'https://www.youtube.com/embed/EFafSYg-PkI', duration: '30 min', notes: '<h4>Grid</h4><p>2D layouts.</p>' },
            { id: 8, title: 'Responsive Design', video: 'https://www.youtube.com/embed/srvUrASNj0s', duration: '25 min', notes: '<h4>Media Queries</h4><p>Mobile-friendly design.</p>' },
            { id: 9, title: 'CSS Animations', video: 'https://www.youtube.com/embed/YszONjKpgg4', duration: '20 min', notes: '<h4>Animations</h4><p>Transitions and keyframes.</p>' },
            { id: 10, title: 'Project: Portfolio', video: 'https://www.youtube.com/embed/UB1O30fR-EE', duration: '45 min', notes: '<h4>Build Portfolio</h4><p>Create your portfolio.</p>' },
            { id: 11, title: 'Best Practices', video: 'https://www.youtube.com/embed/UB1O30fR-EE', duration: '15 min', notes: '<h4>Tips</h4><p>Clean code practices.</p>' },
            { id: 12, title: 'Final Quiz', video: 'https://www.youtube.com/embed/UB1O30fR-EE', duration: '20 min', notes: '<h4>Quiz</h4><p>Test your knowledge!</p>' }
        ]
    },

    javascript: {
        id: 'javascript',
        title: 'JavaScript',
        icon: '⚡',
        category: 'PROGRAMMING',
        description: 'Learn programming and make websites interactive.',
        level: 'Beginner',
        duration: '5 Weeks',
        lessons: 15,
        price: 0,
        color: '#ffcc00',
        lessonsData: [
            { id: 1, title: 'Introduction to JavaScript', video: 'https://www.youtube.com/embed/W6NZfCO5SIk', duration: '20 min', notes: '<h4>What is JS?</h4><p>JavaScript makes websites interactive.</p>' },
            { id: 2, title: 'Variables & Data Types', video: 'https://www.youtube.com/embed/9emXNzqCKyg', duration: '25 min', notes: '<h4>Variables</h4><pre><code>let name = "Azan";</code></pre>' },
            { id: 3, title: 'Functions', video: 'https://www.youtube.com/embed/W6NZfCO5SIk', duration: '30 min', notes: '<h4>Functions</h4><pre><code>function greet() {}</code></pre>' },
            { id: 4, title: 'Arrays & Objects', video: 'https://www.youtube.com/embed/W6NZfCO5SIk', duration: '25 min', notes: '<h4>Arrays</h4><pre><code>let arr = [1, 2, 3];</code></pre>' },
            { id: 5, title: 'DOM Manipulation', video: 'https://www.youtube.com/embed/W6NZfCO5SIk', duration: '30 min', notes: '<h4>DOM</h4><p>Interact with HTML.</p>' },
            { id: 6, title: 'Events', video: 'https://www.youtube.com/embed/W6NZfCO5SIk', duration: '25 min', notes: '<h4>Events</h4><p>Handle user actions.</p>' },
            { id: 7, title: 'Project: To-Do App', video: 'https://www.youtube.com/embed/W6NZfCO5SIk', duration: '45 min', notes: '<h4>To-Do App</h4><p>Build a functional app.</p>' }
        ]
    },

    python: {
        id: 'python',
        title: 'Python',
        icon: '🐍',
        category: 'PROGRAMMING',
        description: 'Learn programming from the basics.',
        level: 'Beginner',
        duration: '6 Weeks',
        lessons: 15,
        price: 0,
        color: '#3776ab',
        lessonsData: [
            { id: 1, title: 'Introduction to Python', video: 'https://www.youtube.com/embed/rfscVS0vtbw', duration: '20 min', notes: '<h4>What is Python?</h4><p>Python is a versatile programming language.</p>' },
            { id: 2, title: 'Variables & Data Types', video: 'https://www.youtube.com/embed/rfscVS0vtbw', duration: '25 min', notes: '<h4>Variables</h4><pre><code>name = "Azan"</code></pre>' },
            { id: 3, title: 'Loops & Conditions', video: 'https://www.youtube.com/embed/rfscVS0vtbw', duration: '30 min', notes: '<h4>Loops</h4><pre><code>for i in range(10): print(i)</code></pre>' },
            { id: 4, title: 'Functions', video: 'https://www.youtube.com/embed/rfscVS0vtbw', duration: '25 min', notes: '<h4>Functions</h4><pre><code>def greet(): print("Hi")</code></pre>' },
            { id: 5, title: 'Project: Calculator', video: 'https://www.youtube.com/embed/rfscVS0vtbw', duration: '40 min', notes: '<h4>Calculator</h4><p>Build a calculator.</p>' }
        ]
    },

    cyber: {
        id: 'cyber',
        title: 'Cybersecurity',
        icon: '🛡️',
        category: 'SECURITY',
        description: 'Learn the basics of online security.',
        level: 'Beginner',
        duration: '5 Weeks',
        lessons: 10,
        price: 0,
        color: '#ff4444',
        lessonsData: [
            { id: 1, title: 'Introduction to Cybersecurity', video: 'https://www.youtube.com/embed/inWWhr5tnEA', duration: '20 min', notes: '<h4>What is Cybersecurity?</h4><p>Protect systems and data.</p>' },
            { id: 2, title: 'Types of Threats', video: 'https://www.youtube.com/embed/inWWhr5tnEA', duration: '25 min', notes: '<h4>Threats</h4><p>Malware, phishing, etc.</p>' },
            { id: 3, title: 'Password Security', video: 'https://www.youtube.com/embed/inWWhr5tnEA', duration: '20 min', notes: '<h4>Passwords</h4><p>Strong password practices.</p>' },
            { id: 4, title: 'Network Security', video: 'https://www.youtube.com/embed/inWWhr5tnEA', duration: '30 min', notes: '<h4>Network</h4><p>Firewalls and VPNs.</p>' },
            { id: 5, title: 'Ethical Hacking', video: 'https://www.youtube.com/embed/inWWhr5tnEA', duration: '35 min', notes: '<h4>Ethical Hacking</h4><p>Legal hacking practices.</p>' }
        ]
    }
};

// Make available globally
window.COURSES = COURSES;