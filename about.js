window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
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

    const cards = document.querySelectorAll('.card-body');
    cards.forEach((card, index) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });

        tl.from(card.querySelector('.icon'), { opacity: 0, y: 50, duration: 0.5 })
          .from(card.querySelector('h2'), { opacity: 0, y: 20, duration: 0.5 }, '-=0.2')
          .from(card.querySelector('p'), { opacity: 0, y: 20, duration: 0.5 }, '-=0.2');
    });

    function animateCounter(counter, target, duration) {
        let count = 0;
        const increment = target / (duration / 100);

        const updateCounter = () => {
            if (count < target) {
                count += increment;
                if (count >= target) {
                    count = target;
                }
                counter.innerText = Math.ceil(count);
                setTimeout(updateCounter, 50);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    }

    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        gsap.to(counter, {
            scrollTrigger: {
                trigger: counter,
                start: 'top 80%',
                onEnter: () => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    const duration = 5000;
                    animateCounter(counter, target, duration);
                },
                toggleActions: 'play none none none'
            }
        });
    });
});
