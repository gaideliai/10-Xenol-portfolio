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
window.addEventListener('scroll', headerBackground);

//hero

//about us
renderSkills (skills);

// document.querySelector('#about .video').addEventListener('click', () =>);
//portfolio
renderPortfolio (works);

//services
renderServices(services);

//team
renderPagination('#team_members', renderTeamMember, team, 4);

//numbers
renderAchievements(numbers);

//pricing

//blog
//renderBlog(blog);
renderPagination('#blog_list', renderBlogPost, blog, 3);

//testimonials

//get in touch

//map

//footer