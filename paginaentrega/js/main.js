let abrir= document.getElementById('open');
let menu= document.getElementById('menu');
let cerrado=true;

abrir.addEventListener('click', apertura);
function apertura(){
    if(cerrado){
      menu.style.width ='70vw';
      cerrado=false;
    }else{
       menu.style.width= "0%";
       menu.style.overflow= 'hidden';
       cerrado = true;
    }
}

window.addEventListener('resize', res);
function res(){
    if(screen.width > 700){
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');

    }
}

let indice = 1;
muestraSlides(indice);

function avanzaSlide(n){
    muestraSlides( indice+=n );
}

function posicionSlide(n){
    muestraSlides(indice=n);
}
setInterval(function tiempo(){
    muestraSlides(indice+=1)
},4000);
function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName('mislider');
    let barras = document.getElementsByClassName('barra');

    if(n > slides.length){
        indice = 1;
    }
    if(n < 1){
        indice = slides.length;
    }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    for(i = 0; i < barras.length; i++){
        barras[i].className = barras[i].className.replace(" active", "");
    }

    slides[indice-1].style.display = 'block';
    barras[indice-1].className += ' active';

}






