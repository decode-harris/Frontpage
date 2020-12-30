

// function [ displaytime ]
displayTime = () => {

    // date variable
    let d = new Date();

    // date output selectors
    let currentTime = document.querySelector('.time');

    let h = d.getHours(); // 0 - 23
    let m = d.getMinutes(); // 0 - 59
    let s = d.getSeconds(); // 0 - 59
    let session = 'AM';

    // if hours are equal to [ 0 ]
    if (h == 0) {

        // display hour as int 12
        h = 12;

        // test
        console.log(h);
    }

    if (h > 12) {

        h = h - 12;

        session = 'PM';
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ':' + m + ':' + s + '' + session;
    currentTime.innerText = time;
    currentTime.textContent = time;

    setTimeout(displayTime, 1000);

    
}

// init [ displaytime ] function
displayTime();


// function [ displaydate ]
displaydate = () => {

    // array [ days ]
    let days = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
    ];
    
    // array [ months ]
    let months = [
    
        'jan',
        'feb',
        'mar',
        'apr',
        'may',
        'jun',
        'jul',
        'aug',
        'sep',
        'oct',
        'nov',
        'dec',
    
    ];

    // date method
    let d = new Date();

    // date element selector
    let date = document.querySelector('.date');

    // create date methods for relevant info
    let dt = d.getDate();
    let dy = days[d.getDay()];
    let mn = months[d.getMonth()];
    let yr = d.getFullYear();

    // set date methods to named variables
    let currentDay = dy;
    let currentDate = dt + ' ' + mn + ' ' + yr;

    // use current day and current date values for html date text content
    date.textContent = currentDay + ' ' + currentDate;

}

// init [ displaydate ] function
displaydate();



const coffee = document.querySelector('#coffee');
const google = document.querySelector('#google');
const webapp = document.querySelector('#webapp');
const webdev = document.querySelector('#webdev');


let coffeelist = document.querySelector('#coffeelist');
let googlelist = document.querySelector('#googlelist');
let webapplist = document.querySelector('#webapplist');
let webdevlist = document.querySelector('#webdevlist');

defaultlistprops = () => {

    coffeelist.style.display = 'none';
    googlelist.style.display = 'none';
    webapplist.style.display = 'none';
    webdevlist.style.display = 'none';
}

defaultlistprops();

coffee.addEventListener('click', ()=> {

    // init [ defaultlistprops ] function
    defaultlistprops();


    coffeelist.style.display = 'flex';

});
google.addEventListener('click', ()=> {

    // init [ defaultlistprops ] function
    defaultlistprops();


    googlelist.style.display = 'flex';

});
webapp.addEventListener('click', ()=> {

    // init [ defaultlistprops ] function
    defaultlistprops();


    webapplist.style.display = 'flex';

});
webdev.addEventListener('click', ()=> {

    // init [ defaultlistprops ] function
    defaultlistprops();


    webdevlist.style.display = 'flex';

});




// let tools = document.querySelectorAll('.footer .tools');
// tools.addEventListener('click', ()=> {

//     if (tools.className == ' active') {
//         tools.toggleAttribute('class', ' active');
//     }
//     else {
//         tools.toggleAttribute('class', ' active');
//     }
// });

// tools.forEach(element => {
//     element.addEventListener('click', ()=> {

//         element.toggleAttribute('class', ' active');
        
//     });
// });


















// background element selector
const page = document.querySelector('.page');

// background image sources
let bk1 = 'img/launch.jpg';
let bk2 = 'img/travel.jpg';