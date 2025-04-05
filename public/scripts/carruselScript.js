const images = [
    "./img/login-nocturno.webp", "./img/login.webp", 
    "./img/principal-nocturno.webp", "./img/principal.webp",
    "./img/perfil-nocturno.webp", "./img/perfil.webp", 
    "./img/historial.webp", "./img/historial-nocturno.webp"
];

let index = 0;
imgElement = document.getElementById("carousel-image");
document.getElementById("next").addEventListener("click", () => {
    if(index == images.length - 1){
        index = 0;
        imgElement.src = images[0];
    }else{
        index++;
        imgElement.src = images[index];
    }
});

document.getElementById("prev").addEventListener("click", () => {
    if(index == 0){
        index = images.length;
    }
    index--;
    imgElement.src = images[index];


});
