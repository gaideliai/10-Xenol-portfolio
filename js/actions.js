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
manipulateLetter(heroes, 0, 0, 'add');

//about us
renderSkills (skills);

document.querySelector('#about .video .play-btn').addEventListener('click', () => {
    document.querySelector('.lightbox').classList.add('show');       
})

document.querySelector('.lightbox > .background').addEventListener('click', () => {
    document.querySelector('.lightbox').classList.remove('show');
})

document.addEventListener('keydown', (event) => {
    if (event.keyCode == 27) {
    document.querySelector('.lightbox').classList.remove('show');
    }    
})

// document.onkeydown = function(evt) {
//     evt=evt || window.event;
//     if (evt.keyCode == 27) {
//         document.querySelector('.lightbox').classList.remove('show');
//     }
// }

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