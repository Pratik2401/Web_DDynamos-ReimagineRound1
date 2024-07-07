window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    gsap.from('.section-header h1', { duration: 1.5, opacity: 0, y: 50, ease: 'power4.out', delay: 0.5 });
    gsap.from('.section-header p', { duration: 1.5, opacity: 0, y: 50, ease: 'power4.out', delay: 0.7 });
    gsap.from('.section-header a', { duration: 1.5, opacity: 0, y: 50, ease: 'power4.out', delay: 0.9 });

    gsap.from('.icon-box', {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.icon-box',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        gsap.from(counter, {
            duration: 2,
            innerText: 0,
            snap: { innerText: 1 },
            scrollTrigger: {
                trigger: counter,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        gsap.from(card, {
            duration: 1,
            opacity: 0,
            y: 50,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    gsap.from('.small_card', {
        duration: 0.5,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.small_card',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    gsap.from('.video-container', {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.video-container',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    gsap.from('footer', {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 90%',
            toggleActions: 'play none none none'
        }
    });
});

function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var ease = function(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
        var run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
}

function setupSmoothScroll() {
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var target = this.getAttribute('href');
            smoothScroll(target, 1000);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    setupSmoothScroll();
});
