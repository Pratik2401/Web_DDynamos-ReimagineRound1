window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) { 
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.card', {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power1.out',
      delay: 0.5
  });

  gsap.from('.icon-box', {
      scrollTrigger: {
          trigger: '.icon-box',
          start: 'top 80%',
          toggleActions: 'play none none none'
      },
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power1.out'
  });

  gsap.from('.form-group', {
      scrollTrigger: {
          trigger: '.form-group',
          start: 'top 80%',
          toggleActions: 'play none none none'
      },
      duration: 1,
      x: -50,
      opacity: 0,
      stagger: 0.3,
      ease: 'power1.out'
  });

  gsap.from('.btn', {
      scrollTrigger: {
          trigger: '.btn',
          start: 'top 80%',
          toggleActions: 'play none none none'
      },
      duration: 1,
      scale: 0.8,
      opacity: 0,
      ease: 'bounce.out'
  });

  gsap.from('iframe', {
      scrollTrigger: {
          trigger: 'iframe',
          start: 'top 80%',
          toggleActions: 'play none none none'
      },
      duration: 1,
      x: 100,
      opacity: 0,
      ease: 'power1.out'
  });
});
