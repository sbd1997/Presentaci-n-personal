document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');

  // --- utilidades para #about ---
  const about = document.getElementById('about');
  const aboutParas = about ? about.querySelectorAll('#description p') : [];
  let aboutTimers = []; // para limpiar los timeouts del stagger

  function revealAbout() {
    // evita duplicar animaciones si ya está visible
    if (!about) return;
    clearAbout();
    aboutParas.forEach((p, i) => {
      const t = setTimeout(() => p.classList.add('reveal-in'), i * 150);
      aboutTimers.push(t);
    });
  }

  function resetAbout() {
    // vuelve a estado inicial (oculto) para que pueda re-aparecer
    if (!about) return;
    aboutParas.forEach(p => p.classList.remove('reveal-in'));
  }

  function clearAbout() {
    // limpia timeouts pendientes para no encadenar animaciones
    aboutTimers.forEach(t => clearTimeout(t));
    aboutTimers = [];
  }

  // --- IntersectionObserver para TODAS las secciones ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;

      if (entry.isIntersecting) {
        // clase general de aparición por sección (si la usas)
        el.classList.add('show');

        // si es #about, dispara el stagger de párrafos
        if (el.id === 'about') revealAbout();
      } else {
        // al salir, quitamos la clase general
        el.classList.remove('show');

        // si es #about, reseteamos para que pueda reanimarse después
        if (el.id === 'about') {
          clearAbout();
          resetAbout();
        }
      }
    });
  }, {
    threshold: 0.35,        // un poco más alto para evitar “flicker”
    rootMargin: '0px 0px -10% 0px' // empieza a salir un poco antes del borde inferior
  });

  sections.forEach(section => observer.observe(section));

  // ====== Menú hamburguesa ======
  const hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      this.classList.toggle('active');
      const nav = document.querySelector('nav');
      if (nav) nav.classList.toggle('active');
    });
  }

  // ====== Partículas ======
  const container = document.getElementById('tech-particles-global');
  if (container) {
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.opacity = Math.random() * 0.6 + 0.2;
      particle.style.animationDelay = `${Math.random() * 20}s`;
      particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
      container.appendChild(particle);
    }
  }
});


