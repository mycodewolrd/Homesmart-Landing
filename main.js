import './style.css'

const navBar = document.querySelector('#menu');
const menuBar = document.querySelector('[role="menubar"]');

navBar.addEventListener('click', (e) => {
    const isExpanded = JSON.parse(navBar.getAttribute('aria-expanded'))
    navBar.setAttribute('aria-expanded', !isExpanded);
    menuBar.classList.toggle('hidden')
    menuBar.classList.toggle('flex');
})