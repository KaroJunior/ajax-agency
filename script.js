// JavaScript to toggle the 'active' class on click
const hamburgerMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

hamburgerMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// JavaScript to handle header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const heroSection = document.getElementById('home');
    const heroHeight = heroSection.offsetHeight;

    if (window.scrollY > heroHeight) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


//Counter
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 100; // Adjust the speed of the counter animation

    const updateCount = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText.replace('%', '');

        // Calculate increment
        const increment = target / speed;

        // If count is less than target, increment the count
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => updateCount(counter), 10); // Adjust the timeout for smoothness
        } else {
            counter.innerText = target;
            // Append "%" if the counter is for engagement rate
            if (counter.getAttribute('data-target') == 98) {
                counter.innerText += '%';
            }
        }
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCount(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 1.0
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});


//Animations
// Intersection Observer for Animations
const animateOnScroll = new IntersectionObserver((entries, animateOnScroll) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            animateOnScroll.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.animate').forEach(el => {
    animateOnScroll.observe(el);
});
