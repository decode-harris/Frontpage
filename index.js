
const page = document.querySelector('.page');

let bk1 = 'img/launch.jpg';
let bk2 = 'img/travel.jpg';

let launch = document.querySelector('#launch');
let travel = document.querySelector('#travel');

launch.addEventListener('click', ()=> {

    if (page.style.background === 'var(--slateblue)' || page.style.backgroundImage === 'url(img/launch.jpg)') {
        page.style.backgroundImage = 'url(' + bk1 + ')';
    }
    else {
        page.style.background = 'var(--slateblue)';
    }

});

travel.addEventListener('click', ()=> {

    if (page.style.background === 'var(--slateblue)' || page.style.backgroundImage === 'url(img/travel.jpg)') {
        page.style.backgroundImage = 'url(' + bk2 + ')';
    }
    else {
        page.style.background = 'var(--slateblue)';
    }

    

});


