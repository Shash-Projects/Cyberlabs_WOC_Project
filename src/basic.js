let berger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let navlist = document.querySelector('.nav-list')
let search = document.querySelector('.search-options')

berger.addEventListener('click', ()=>{
    search.classList.toggle('vis-resp');
    navlist.classList.toggle('vis-resp');
    navbar.classList.toggle('nav-resp');
})
