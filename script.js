// criando uma contante com a imagem Sonic
const sonic = document.querySelector(".sonic");
const eggman = document.querySelector(".eggman");
const fundo = document.querySelector(".fundo");

const jump = () =>{
    sonic.classList.add("jump");
    sonic.src ="Sonic-Jump.gif";

// responsável por pegar uma linha de código e executar nessa parte do tempo 
    setTimeout(() => {
        sonic.classList.remove("jump");
        sonic.src = "Sonic.gif";
    },900);
};
const loop = setInterval(() => {
    const eggmanPosition = eggman.offsetLeft;
    const sonicPosition = +window
      .getComputedStyle(sonic)
      .bottom.replace("px", "");

 if (eggmanPosition < 110 && eggmanPosition > 0 && sonicPosition < 220) {

    eggman.style.animation = "none";
    eggman.style.left = `${eggmanPosition}px`;

    sonic.style.animation = "none";
    sonic.src = "Sonic-Loss.gif";
    sonic.style.width = "240px";

    fundo.src = "GameoverSMB-1.png";
 }
},10);
// evento ira executar a funcao de apertar uma tecla.
document.addEventListener("click",jump);
