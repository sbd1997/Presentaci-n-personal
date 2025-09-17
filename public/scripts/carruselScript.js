// Definimos los proyectos
const projects = [
    {
        img: "img/login-nocturno.webp",
        title: "Weather-APP",
        desc: `Weather-APP es un pequeño proyecto personal que permite consultar el clima 
               en cualquier parte del mundo. Además, el usuario podrá establecer una ciudad como favorita 
               y tener en tiempo real las condiciones climáticas de esa ubicación.`,
        extra: `Weather-APP me ha permitido familiarizarme con la integración de APIs, la gestión de usuarios
                (registro, validación, recuperación y modificación de datos) y el envío/recepción de datos cliente-servidor.`,
        tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"]
    },
    {
        img: "img/tfg-portada.png",
        title: "Trabajo Fin de Grado – Expert Advisor (Ichimoku + RSI)",
        desc: `Desarrollo y optimización de un sistema de trading automático (Expert Advisor) en MQL4,
               diseñado para operar en mercados tendenciales utilizando los indicadores Ichimoku y RSI.`,
        extra: `Incluye técnicas de optimización (genética y fuerza bruta), además de pruebas históricas en MetaTrader4 
                que validaron la robustez del sistema en mercados como el oro.`,
        tech: ["MQL4", "MetaEditor4", "MetaTrader4", "Trading algorítmico", "Backtesting", "Optimización"]
    }
];

// Índice actual
let index = 0;

// Elementos del DOM
const imgElement = document.getElementById("carousel-image");
const titleElement = document.getElementById("project-title");
const descElement = document.getElementById("project-desc");
const extraElement = document.getElementById("project-extra");
const techElement = document.getElementById("project-tech");

// Función para renderizar un proyecto
function renderProject(i) {
    const project = projects[i];
    imgElement.src = project.img;
    titleElement.textContent = project.title;
    descElement.textContent = project.desc;
    extraElement.textContent = project.extra;

    // Limpiar lista de tecnologías y volver a crearla
    techElement.innerHTML = "";
    project.tech.forEach(t => {
        const li = document.createElement("li");
        li.textContent = t;
        techElement.appendChild(li);
    });
}

// Botones de navegación
document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % projects.length;
    renderProject(index);
});

document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + projects.length) % projects.length;
    renderProject(index);
});

// Inicializar con el primer proyecto
renderProject(index);
