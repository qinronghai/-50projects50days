let btn = document.querySelector('.btn');
let input = document.getElementsByTagName('input')[0];
let search = document.querySelector('.search');

btn.addEventListener('click', () => {
    input.classList.toggle('active');
    input.focus();
    search.classList.toggle('active');
})