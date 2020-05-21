const image = document.querySelector('.image');
const hover = document.querySelector('.hover');
const modal = document.querySelector('.modal');
const closeDOM = document.querySelector('.close');

function show() {
    hover.classList.add('active');
    modal.classList.add('show');
}

function hide() {
    hover.classList.remove('active');
    modal.classList.remove('show');
}

image.addEventListener('click', show);
closeDOM.addEventListener('click', hide);