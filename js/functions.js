"use strict";

//header

//hero

//about us

//portfolio

//services
function renderServices(serviceList){
    let HTML = '';

    for (let i=0; i<serviceList.length; i++){
        const service = serviceList[i];
        HTML += `<div class="service">
                    <i class="fa fa-${service.icon}"></i>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>`;
    }

    return document.querySelector('#services').innerHTML = HTML;
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
        
        HTML += `<div class="achievement">
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

//testimonials

//get in touch

//map

//footer