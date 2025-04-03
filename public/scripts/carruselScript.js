const images = [
    "./img/login-nocturno.png", "./img/login.png", 
    "./img/principal-nocturno.png", "./img/principal.png",
    "./img/perfil-nocturno.png", "./img/perfil.png", 
    "./img/historial.png", "./img/historial-nocturno.png"
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
