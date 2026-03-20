// This function runs when the entire page content is loaded
document.addEventListener('DOMContentLoaded', () => {

    // Preloader Logic
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.visibility = 'hidden';
            preloader.style.display = 'none';
        }, 750);
    }

    // Custom Cursor Logic
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    if (cursor && follower) {
        document.addEventListener('mousemove', e => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        });
    }

    // Theme Switcher Logic
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            if (body.classList.contains('light-mode')) {
                themeSwitcher.textContent = '☀️';
                localStorage.setItem('theme', 'light');
            } else {
                themeSwitcher.textContent = '🌙';
                localStorage.setItem('theme', 'dark');
            }
        });
        if (localStorage.getItem('theme') === 'light') {
            body.classList.add('light-mode');
            themeSwitcher.textContent = '☀️';
        }
    }

    // TypeIt.js Logic
    const typeitInstance = document.querySelector('#typing-effect');
    if (typeitInstance) {
        new TypeIt("#typing-effect", {
            speed: 75, loop: true, waitUntilVisible: true,
        })
        .type("A Developer", { delay: 1000 }).delete(9)
        .type("Coder", { delay: 500 }).delete(5)
        .type("Problem Solver", { delay: 800 })
        .go();
    }

    // ScrollReveal.js Logic
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '80px',
        duration: 1200, 
        reset: false, 
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
        viewFactor: 0.2 
    });
    sr.reveal('.reveal-bottom', { origin: 'bottom' });
    sr.reveal('.reveal-left', { origin: 'left', distance: '100px' });
    sr.reveal('.reveal-right', { origin: 'right', distance: '100px' });
    sr.reveal('.hero-content', { origin: 'bottom', scale: 1, duration: 1500 });
    sr.reveal('.skill-item', { origin: 'bottom', interval: 50 });
    sr.reveal('.certificate-card', { origin: 'bottom', interval: 150 });

    // Isotope Filter Logic
    const projectGrid = document.querySelector('.project-grid');
    if (projectGrid) {
        const iso = new Isotope(projectGrid, {
            itemSelector: '.element-item',
            layoutMode: 'fitRows'
        });
        const filterButtons = document.querySelector('.filter-buttons');
        filterButtons.addEventListener('click', function (event) {
            if (!event.target.matches('button')) return;
            const filterValue = event.target.getAttribute('data-filter');
            iso.arrange({ filter: filterValue });
            filterButtons.querySelector('.is-checked').classList.remove('is-checked');
            event.target.classList.add('is-checked');
        });
    }

    // Live Time Update for Bento Box
    const timeElement = document.getElementById('current-time');
    function updateTime() {
        if (timeElement) {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' });
            timeElement.textContent = `Current Time: ${timeString} IST`;
        }
    }
    updateTime();
    setInterval(updateTime, 60000);

    // Back to Top Button Logic
    const toTopBtn = document.getElementById("back-to-top");
    if(toTopBtn){
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                toTopBtn.classList.add('show');
            } else {
                toTopBtn.classList.remove('show');
            }
        });
        toTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

//     // "Read More" Button Logic
//     const readMoreBtns = document.querySelectorAll('.btn-read-more');
//     readMoreBtns.forEach(btn => {
//         btn.addEventListener('click', () => {
//             const card = btn.closest('.article-card');
//             const fullDesc = card.querySelector('.article-full-desc');
            
//             fullDesc.classList.toggle('expanded');

//             if (fullDesc.classList.contains('expanded')) {
//                 btn.textContent = 'Read Less';
//             } else {
//                 btn.textContent = 'Read More';
//             }
//         });
//     });
// });