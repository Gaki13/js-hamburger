//1. Creo della variabili dove seleziono gli elementi che devo modificare
const BtnOpen = document.getElementById("open-menu")

const hamburgerMenu = document.getElementById("hamburger-menu")

const BtnClose = document.getElementById("close-menu")
//2. Aggiungo la funzione per aprire il menù al click

BtnOpen.addEventListener( 'click',
    function(){
        document.getElementById("hamburger-menu").classList.add("active")
    }
);

//3. Aggiungo la funzione per chiudere il menù aò click
BtnClose.addEventListener( 'click',
    function(){
        document.getElementById("hamburger-menu").classList.remove("active")
    }
);