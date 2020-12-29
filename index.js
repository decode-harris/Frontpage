
const page = document.querySelector('.page');

let bk1 = 'img/launch.jpg';
let bk2 = 'img/travel.jpg';

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
    if (h = 0) {

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

    let days = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
    ];
    
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


    let d = new Date();

    let date = document.querySelector('.date');

    let dt = d.getDate();
    let dy = days[d.getDay()];
    let mn = months[d.getMonth()];
    let yr = d.getFullYear();


    
    let currentDate = dt + ' ' + dy + ' ' + mn + ' ' + yr;

    date.textContent = currentDate;

    
    // display the date to the user [ number 1 - 31 ]
    // date.innerHTML = d.getDate();
    // console.log(date.innerHTML);

    // // display day of the week to user 
    // day.innerHTML = days[d.getDay()];
    // console.log(day.innerHTML);

    // // display month of year to the user
    // month.innerHTML = months[d.getMonth()];
    // console.log(month.innerHTML);

    // // display the current year to the user
    // year.innerHTML = d.getFullYear();
    // console.log(year.innerHTML);

}

// init [ displaydate ] function
displaydate();