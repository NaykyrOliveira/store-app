const body = document.querySelector('[data-body]');
const nav = document.querySelector('[data-nav]');
const toggle = document.querySelector('[data-toggle]');
const footer = document.querySelector('[data-footer]');
const popularesTitulo = document.querySelector('[data-populares-titulo]');
const button = document.querySelector('[data-button]');
const destaquesCategoriasLink = document.querySelector('[data-a]');
const dataCardConteudo = document.querySelector('[data-card-descricao]');
const popularesCardTitulo = document.querySelector('[data-card]');

toggle.onclick = function() {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    footer.classList.toggle('active');
    nav.classList.toggle('active');
    popularesTitulo.classList.toggle('active');
    button.classList.toggle('active');
    destaquesCategoriasLink.classList.toggle('active');
    dataCardConteudo.classList.toggle('active');
    popularesCardTitulo.classList.toggle('active');
}