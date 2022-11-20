const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const footer = document.querySelector('footer');

toggle.onclick = function() {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    footer.classList.toggle('active');
}