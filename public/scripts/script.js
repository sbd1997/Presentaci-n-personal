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


