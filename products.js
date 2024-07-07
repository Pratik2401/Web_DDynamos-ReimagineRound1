window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".navbar", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });

    gsap.utils.toArray(".card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power2.out",
            delay: i * 0.2
        });
    });

    gsap.utils.toArray(".product-image").forEach((image) => {
        gsap.from(image, {
            scrollTrigger: {
                trigger: image,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            duration: 1,
            scale: 0.8,
            opacity: 0,
            ease: "power2.out"
        });
    });

    gsap.utils.toArray(".title").forEach((title) => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            duration: 1,
            x: -100,
            opacity: 0,
            ease: "power2.out"
        });
    });

    gsap.utils.toArray(".rating").forEach((rating) => {
        gsap.from(rating, {
            scrollTrigger: {
                trigger: rating,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            duration: 1,
            x: 100,
            opacity: 0,
            ease: "power2.out"
        });
    });

    gsap.utils.toArray(".description").forEach((description) => {
        gsap.from(description, {
            scrollTrigger: {
                trigger: description,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            duration: 1,
            y: 30,
            opacity: 0,
            ease: "power2.out"
        });
    });

    gsap.utils.toArray(".price").forEach((price) => {
        gsap.from(price, {
            scrollTrigger: {
                trigger: price,
                start: "top 90%",
                toggleActions: "play none none none",
            },
            duration: 1,
            scale: 0.5,
            opacity: 0,
            ease: "power2.out"
        });
    });

    gsap.utils.toArray(".shipping").forEach((shipping) => {
        gsap.from(shipping, {
            scrollTrigger: {
                trigger: shipping,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            duration: 1,
            y: -30,
            opacity: 0,
            ease: "power2.out"
        });
    });

    gsap.utils.toArray(".details-btn").forEach((button) => {
        gsap.from(button, {
            scrollTrigger: {
                trigger: button,
                start: "top 80%",
                toggleActions: "play none none none",
            },
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power2.out"
        });
    });
});
