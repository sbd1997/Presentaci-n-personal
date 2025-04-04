// Espera a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todas las secciones a observar (ajusta el selector según tu HTML)
    const sections = document.querySelectorAll('section'); // O usa '.section' si tienen esa clase
    
    // Configura el IntersectionObserver
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.2 });

    // Observa cada sección
    sections.forEach(section => observer.observe(section));

    // Menú hamburguesa
    document.querySelector('.hamburger').addEventListener('click', function() {
        this.classList.toggle('active');
        document.querySelector('nav').classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('tech-particles-global');
    const particleCount = 50; // Ajusta según necesidad
  
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
  });


