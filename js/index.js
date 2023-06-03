function checkHamburguer() {
    const menu1 = document.querySelector('.menu1');
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        menu1.classList.toggle('show_nav')});}

checkHamburguer ();

function downBanner() {
    const burger = document.querySelector('.burger');
    const containeur1 = document.querySelector ('.containeur1');
    burger.addEventListener('click', () => { 
        containeur1.classList.toggle('.show_containeur1')});}
    
    downBanner();