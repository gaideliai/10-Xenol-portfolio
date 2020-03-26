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

//hero

//about us

//portfolio

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
        const article = list[i];
        
        const dateLink = `${article.date.year}/${article.date.month}/${article.date.day}`;
        
        const year = new Date().getFullYear();
        let formatedDate = `${article.date.day} ${months[article.date.month-1]}`;
        if (year !== article.date.year){
            formatedDate +=`, ${article.date.year}`;
        }

        HTML +=`<div class="blog col-4 col-md-6 col-sm-12">
                    <img src="./img/Blog/${article.photo.src}" alt="${article.photo.alt}">
                    <a class="date" href="#/articles-by-date/${dateLink}">${formatedDate}</a>
                    <a class="title" href="${article.link}">${article.title}</a>
                    <p> ${article.description}</p>
                    <a class="more" href="${article.link}">Learn more</a>
                </div>`;
    }
    return document.querySelector("#blog_list").innerHTML = HTML;
}
//testimonials

//get in touch

//map

//footer