"use strict";

//header
function headerScroll() {
    const headerHeight = document.querySelector('#main_header').offsetHeight;
    // einamoji scroll'o vieta (aukstis)
    const height = window.scrollY + headerHeight;
    
    // susidarome sarasa dominanciu sekciju
    let links = [];     // ['#', '#about', ...]
    const DOMlinks = document.querySelectorAll('#main_header nav > a');

    for ( let i=0; i<DOMlinks.length; i++ ) {
        const link = DOMlinks[i];        
        const href = link.href;
        const split = href.split('#');

        if ( split.length > 1 ) {
            links.push( '#' + split[1] );
        }
    }

    // randame aukscio pozicija dominanciu sekciju
    let sectionHeights = [];
    for ( let i=0; i<links.length; i++ ) {
        const link = links[i];
        if ( link === '#' ) {
            sectionHeights.push(0);
        } else {
            const section = document.querySelector(link);
            sectionHeights.push(section.offsetTop);
        }
    }

    // nustatome kuri is dominanciu sekciju yra artimiausia mano esamai pozicijai
    let wantedSection = 0;
    for ( let i=0; i<sectionHeights.length; i++ ) {
        const sectionH = sectionHeights[i];    
        if ( sectionH <= height ) {
            wantedSection = i;
        } else {
            break;
        }
    }
        
    // pries tai buvusi nuoroda header > nav netenka active klases
    document.querySelector(`#main_header nav > a.active`).classList.remove('active');

    // naujoji nuoroda header > nav gauna active klase
    document.querySelector(`#main_header nav > a[href="${links[wantedSection]}"]`).classList.add('active');

    return;
}

function headerBackground() {
    if (window.scrollY > 100) {
        document.querySelector("#main_header").classList.remove('header-transparent');
    }else {
        document.querySelector("#main_header").classList.add('header-transparent');
    }
    return;
}
//hero
function manipulateLetter( list, wordIndex, letterIndex, actionType ) {
    // elementas kuriame animuotai keiciasi tekstas
    const target = document.getElementById('animated_text');
    const timeStep = 200;
    const delayAfter = 2000;
    const deleteTimeStep = 100;
    const delayBefore = 500;

    if ( actionType === 'add' ) {
        target.classList.add('line');
        setTimeout(() => {
            target.textContent += list[wordIndex][letterIndex];
            
            if (letterIndex < list[wordIndex].length-1) {
                manipulateLetter( list, wordIndex, letterIndex+1, actionType );
            } else {
                manipulateLetter( list, wordIndex, letterIndex, 'delayAfter' );
            }
        }, timeStep);
    }
    if (actionType === 'delayAfter') {
        // target.classList.remove('line');
        setTimeout(() => {
            manipulateLetter( list, wordIndex, letterIndex, 'remove' );
        }, delayAfter);
        
    }
    if (actionType === 'remove') {
        // target.classList.add('line');
        setTimeout(() => {
            const word = list[wordIndex];
            target.textContent = word.slice(0, letterIndex);
            
            if (letterIndex-1 >= 0) {
                manipulateLetter( list, wordIndex, letterIndex-1, actionType );
            } else {
                manipulateLetter( list, wordIndex, letterIndex, 'delayBefore' );
            }
        }, deleteTimeStep);
    }
    if ( actionType === 'delayBefore' ) {
        target.classList.remove('line');
        setTimeout(() => {
            // tikriname kuri zodi paduoti (jei pabaiga, tai duodam vel pirma)
            if ( wordIndex+1 === list.length ) {
                manipulateLetter( list, 0, 0, 'add' );
            } else {
                manipulateLetter( list, wordIndex+1, 0, 'add' );
            }
        }, delayBefore);
    }
}

//about us
function renderSkills (list) {
    let HTML = '';
    for (let i = 0; i < list.length; i++) {
        const skill = list[i];
        HTML += `<div class="progress-bar">
                    <div class="texts">
                        <div class="label">${skill.title}</div>
                        <div class="value">${skill.value}%</div>
                    </div>
                    <div class="bar">
                        <div class="value" style="width: ${skill.value}%;">
                            <div class="loading bg-primary"></div>
                        </div>
                    </div>
                </div>`;   
    }

    return document.querySelector('#skills').innerHTML = HTML;
}

//portfolio
function renderPortfolio (list) {
    let HTML = '';
    let filterHTML = '';
    let galleryHTML = '';
    //surenkame unikalius tagus    
    let uniqueTags = [];

    for (let i=0; i<list.length; i++) {
        const tags = list[i].tags;
        for (let t=0; t<tags.length; t++) {            
            if (uniqueTags.indexOf(tags[t].toLowerCase()) === -1) {
                uniqueTags.push(tags[t].toLowerCase());
            }
        }        
    }  
        //let allTags = works.map(w => w.tags)

    //sugeneruoti filtravima
    filterHTML = `<div class="item active">All</div>`;
        for (let i=0; i<uniqueTags.length; i++) {
            filterHTML += `<div class="item">${uniqueTags[i]}</div>`
        }

    //sugeneruoti darbus
    for (let i=0; i<list.length; i++) {
        const work = list[i];
        galleryHTML += `<div class="item ${work.size === 2 ? 'size-2' : ''}"
                            data-tags="${work.tags}">
                            <img src="./img/Work/${work.photo}" alt="${work.title}">
                            <div class="hover">
                                <a href="${work.link ? work.link : '#'}">${work.title}</a>
                            </div>
                        </div>`;
    }
  
    //apjungti viska i vientisa HTML
    HTML += `<div class="gallery">
                <div class="filter">
                    ${filterHTML}
                </div>
                <div class="list">
                    ${galleryHTML}
                </div>
            </div>`;

    //visa HTML iterpiame i DOM
    const DOMgallery = document.querySelector('#portfolio_gallery');
    DOMgallery.innerHTML = HTML;

    //prideti event listeners darbu filtravimui
    const filters = DOMgallery.querySelectorAll('.filter > .item');
    for (let i=0; i<filters.length; i++) {
        const element = filters[i];
        element.addEventListener('click', filterGallery);
    }

    return;
}

function filterGallery(event) {
    document.querySelector('.filter > .item.active').classList.remove('active');
    event.target.classList.add('active');

    const filterTag = event.target.textContent.toLowerCase();  
    const works = document.querySelectorAll('.gallery > .list > .item');
    if (filterTag === 'all') {
        for (let i=0; i<works.length; i++) {
            works[i].classList.remove('hide');
        }
        return;
    }   
        
    for (let i=0; i<works.length; i++) {
        const work = works[i];
        const hasTags = work.dataset.tags.toLowerCase().split(',').indexOf(filterTag); //returns -1 or position in the tags list;
        if (hasTags >= 0) {
            work.classList.remove('hide');
        } else {
            work.classList.add('hide');
        }
    }

}

//services
function renderServices(serviceList){
    let HTML = '';

    for (let i=0; i<serviceList.length; i++){
        const service = serviceList[i];
        HTML += `<div class="service col-4 col-md-6 col-xs-12">
                    <i class="fa fa-${service.icon}"></i>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>`;
    }

    return document.querySelector('#services_list').innerHTML = HTML;
}

//team
function renderTeamMember (member) {
    return `<div class="member">
                <div class="top">
                    <img src="./img/Team/${member.photo.src}" alt="${member.photo.alt}">
                    <div class="socials">
                        <div class="list">
                            <a href="${member.socials[0].link}">
                                <i class="fa fa-${member.socials[0].icon}"></i>
                            </a>
                            <a href="${member.socials[1].link}">
                                <i class="fa fa-${member.socials[1].icon}"></i>
                            </a>
                            <a href="${member.socials[2].link}">
                                <i class="fa fa-${member.socials[2].icon}"></i>
                            </a>
                        </div>
                    </div>
                </div>   
                <p class="name">${member.name}</p>                
                <p class="position">${member.position}</p>                
            </div>`;
}

//numbers
function renderAchievements(list){
    let HTML = '';
    if (!Array.isArray(list)){
        return console.eror('ERROR: duok sarasa...');
    }
    if (list.legth === 0) {
        return console.eror('ERROR: sarasas negali buti tuscias...');
    }
    
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        
        HTML += `<div class="achievement col-3 col-lg-6 col-xs-12">
                    <div class="center">
                        <i class="fa fa-${item.icon}"></i>
                        <div class="texts">
                            <div class="number">${item.number}</div>
                            <br>
                            <h5 class="title">${item.title}</h5>
                        </div>
                    </div>
                </div>`
        
    }
    return document.querySelector('#achievements').innerHTML = HTML;
}

//pricing

//blog
function renderBlog(list) {
    let HTML = '';

    if (!Array.isArray(list)){
        return console.eror('ERROR: duok sarasa...');
    }
    if (list.legth === 0) {
        return console.eror('ERROR: sarasas negali buti tuscias...');
    }
  
    for (let i = 0; i < list.length; i++) {
        HTML += renderBlogPost (list[i]);
    }

    return document.querySelector("#blog_list").innerHTML = HTML;
}

function renderBlogPost(post) {
    const dateLink = `${post.date.year}/${post.date.month}/${post.date.day}`;
        
    const year = new Date().getFullYear();
    let formatedDate = `${post.date.day} ${months[post.date.month-1]}`;
    if (year !== post.date.year){
        formatedDate +=`, ${post.date.year}`;
    }
    return `<div class="blog">
                <img src="./img/Blog/${post.photo.src}" alt="${post.photo.alt}">
                <a class="date bg-primary" href="#/posts-by-date/${dateLink}">${formatedDate}</a>
                <a class="title" href="${post.link}">${post.title}</a>
                <p> ${post.description}</p>
                <a class="more" href="${post.link}">Learn more</a>
            </div>`;
}

//testimonials

//get in touch

//map
// function initMap () {
//     const hoolehua = {lat: 21.1039362, lng: -157.1440988};
//     const map = new google.maps.Map(
//         document.querySelector('.map'), {zoom: 4, center: hoolehua});
//     const marker = new google.maps.Marker({position: hoolehua, map: map});
// }

//footer

//pagination

function renderPagination (target, renderingFunction, data, countPerPage) {
    if (typeof(target)!== 'string' ||
        target === '') {
        return console.error('Pirmasis parametras: Reikia nurodyti vieta, kur sugeneruoti norima turini');
    }
    const DOM = document.querySelector(target);
    if (DOM === null){
        return console.error('Pirmasis parametras: Nerasta nurodyta vieta, kur sugeneruoti norima turini');
    }

    if (typeof(renderingFunction) !== 'function') {
        return console.error('Antrasis parametras: Reikia nurodyti funkcijos pavadinima, kuri turi sugeneruoti pavienio elemento HTML');
    }

    if (!Array.isArray(data)) {
        return console.error('Treciasis parametras: reikia duoti sarasa objektu, kurie apraso generuojamus elementus');        
    }
    
    if (data.length === 0) {
        return console.error('Reikia duoti sarasa objektu, kuris nera tuscias');
    }
    
    let objectsOnly = true;
    for (let i=0; i<data.length; i++) {
        if (typeof (data[i]) !== 'object') {
            objectsOnly = false;
            break;
        }
    }
    if (!objectsOnly) {
        return console.error('Treciasis parametras: sarasa turi sudaryti tik objektai');
    }

    if (!isFinite(countPerPage) || 
        typeof(countPerPage) !== 'number') {
        return console.error('Ketvirtasis parametras: reikia nurodyti po kelis elementus reikia atvaizduoti per puslapiavima (validus skaicius)');
    }

    if (countPerPage < 1 ||
        countPerPage % 1 !== 0 ||
        [1, 2, 3, 4].indexOf(countPerPage) === -1) {
        return console.error('Ketvirtasis parametras: elementu per puslapiavim turi buti sveikas teigiamas skaicius');
    }

    //generuojame HTML
    let HTML = '';
    const pageCount = Math.ceil(data.length / countPerPage);
    let listHTML = '';
    let pageHTML = '';
    let circlesHTML = '';

    for (let i=0; i<pageCount; i++) {
        pageHTML = '';
        for (let p = 0; p < countPerPage; p++) {
            const dataIndex = i * countPerPage + p;
            if (dataIndex >= data.length) {
                break;
            }
            pageHTML += renderingFunction(data[i * countPerPage + p], 12/countPerPage);
            
        }

        listHTML += `<div class="page">
                        ${pageHTML}
                    </div>`;
        circlesHTML += `<div class="circle ${i === 0 ? 'active' : ''}"
                            data-index=${i}></div>`;
    }

    HTML += `<div class="pagination">
                <div class="list">
                    ${listHTML}
                </div>
                <div class="controls">
                    ${circlesHTML}        
                </div>
            </div>`;

    //iterpiame HTML i reikiama vieta
    DOM.innerHTML = HTML;

    //uzregistruojame event listeners
    const DOMcircles = DOM.querySelectorAll('.controls > .circle');
    const DOMlist = DOM.querySelector('.list');
    for (let i=0; i<DOMcircles.length; i++) {
        DOMcircles[i].addEventListener('click', (event) => {
            //puslapiavimo animacija
            const index = parseInt(event.target.dataset.index);
            DOMlist.style.marginLeft = (index * -100) + '%';
            //active circle
            DOM.querySelector('.controls > .circle.active').classList.remove('active');
            event.target.classList.add('active');
        })
    }
    
    return;
}
