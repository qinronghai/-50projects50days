let container = document.querySelector(".container");
let circle = document.querySelector(".circle");

circle.addEventListener('click', () => {
    container.classList.toggle('show-nav');
})