// Espera a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function () {
  // ====== 1) IntersectionObserver de secciones ======
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      // 1.a) Clase 'show' para tus secciones (ya lo tenías)
      entry.target.classList.add('show');

      // 1.b) Si la sección visible es ABOUT, revela párrafos con stagger
      if (entry.target.id === 'about') {
        const paras = entry.target.querySelectorAll('#description p');
        paras.forEach((p, i) => {
          // escalonado: 0ms, 150ms, 300ms...
          setTimeout(() => p.classList.add('reveal-in'), i * 150);
        });
      }

      // Deja de observar la sección ya mostrada
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));

  // ====== 2) Menú hamburguesa ======
  const hamburger = document.querySelector('.hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      this.classList.toggle('active');
      const nav = document.querySelector('nav');
      if (nav) nav.classList.toggle('active');
    });
  }

  // ====== 3) Partículas de fondo ======
  const container = document.getElementById('tech-particles-global');
  if (container) {
    const particleCount = 50; // Ajusta si quieres
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


