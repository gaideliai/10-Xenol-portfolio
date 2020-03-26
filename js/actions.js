"use strict";

//header
const hamburger = document.querySelector('#main_header .fa-bars');
const close = document.querySelector('#main_header .fa-times');
const header = document.querySelector('#main_header');

hamburger.addEventListener('click', function(){
    return header.classList.add('show-menu');
});
close.addEventListener('click', () => {
    return header.classList.remove('show-menu');
});

//scroll
window.addEventListener('scroll', headerScroll);

//hero

//about us

//portfolio

//services
renderServices(services);

//team

//numbers
renderAchievements(numbers);

//pricing

//blog
renderBlog(blog);

//testimonials

//get in touch

//map

//footer