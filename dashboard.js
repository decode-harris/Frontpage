// dashboard tab selectors
let overview = document.querySelector('.overview');
let description = document.querySelector('.description');
let analysis = document.querySelector('.analysis');

// dashboard tab button selectors
let overbtn = document.querySelector('.overbtn');
let descbtn = document.querySelector('.descbtn');
let anlsbtn = document.querySelector('.anlsbtn');

// function [ dashboard ]
const dashboard = () => {

    // remove all dashboard sections on startup
    overview.style.display = 'none';
    description.style.display = 'none';
    analysis.style.display = 'none';

}
// init [ dashboard ] function
// dashboard();

// function [ developmenthelper ]
developmenthelper = () => {

    // removes specific components from view [ summary ul ]
    let summary = document.querySelector('#summary');
    summary.style.display = 'none';

}
// init [ developmenthelper ] function
developmenthelper();



// function [ linechart ]
linechart = () => {

    // linechart [ properties ] array
    let properties = [

        // properties data [ objects ]
        { value: 25, dimension : "Monday" },
        { value: 60, dimension : "Tuesday" },
        { value: 45, dimension : "Wednesday" },
        { value: 50, dimension : "Thursday" },
        { value: 22, dimension : "Friday" },
    
    ];

    let i;

    // for loop [ properties ]
    for(i = 0; i < properties.length; i++) {
        console.log(properties[i]);

        console.log(properties.length);
    }

    // data point selectors
    let dp_01 = document.querySelector('#dp_01');
    let dp_02 = document.querySelector('#dp_02');
    let dp_03 = document.querySelector('#dp_03');
    let dp_04 = document.querySelector('#dp_04');
    let dp_05 = document.querySelector('#dp_05');
    
    // data point values
    let data_01 = properties[0].value;
    let data_02 = properties[1].value;
    let data_03 = properties[2].value;
    let data_04 = properties[3].value;
    let data_05 = properties[4].value;
    
    // element props
    let propertieslength = 5;
    let containerheight = 114;
    let containerwidth = 281;
    let highestvalue = 60;
    let lowestvalue = 22;

    // calculate x-axis [ ( properties[n].value / highest-value(60) ) * container-height ]
    let calc_x_01 = ( data_01 / highestvalue ) * containerheight;
    let calc_x_02 = ( data_02 / highestvalue ) * containerheight;
    let calc_x_03 = ( data_03 / highestvalue ) * containerheight;
    let calc_x_04 = ( data_04 / highestvalue ) * containerheight;
    let calc_x_05 = ( data_05 / highestvalue ) * containerheight;
    
    // calculate y-axis [ container-width / properties.length(5)]
    let calc_y_01 = containerwidth / propertieslength * 1;
    let calc_y_02 = containerwidth / propertieslength * 2;
    let calc_y_03 = containerwidth / propertieslength * 3;
    let calc_y_04 = containerwidth / propertieslength * 4;
    let calc_y_05 = containerwidth / propertieslength * 5;
    
    // datapoint assignment variables
    let datapoint_x01 = calc_x_01;
    let datapoint_y01 = calc_y_01;
    console.log('dp01-X : ' + calc_x_01 + ' dp01-Y : ' + calc_y_01);
    
    let datapoint_x02 = calc_x_02;
    let datapoint_y02 = calc_y_02;
    console.log('dp02-X : ' + calc_x_02 + ' dp02-Y : ' + calc_y_02);
    
    let datapoint_x03 = calc_x_03;
    let datapoint_y03 = calc_y_03;
    console.log('dp03-X : ' + calc_x_03 + ' dp03-Y : ' + calc_y_03);
    
    let datapoint_x04 = calc_x_04;
    let datapoint_y04 = calc_y_04;
    console.log('dp04-X : ' + calc_x_04 + ' dp04-Y : ' + calc_y_04);
    
    let datapoint_x05 = calc_x_05;
    let datapoint_y05 = calc_y_05;
    console.log('dp05-X : ' + calc_x_05 + ' dp05-Y : ' + calc_y_05);


    // assign datapoint values to data-point elements
    dp_01.style.left = datapoint_y01 + 'px';
    dp_01.style.bottom = datapoint_x01 + 'px';

    dp_02.style.left = datapoint_y02 + 'px';
    dp_02.style.bottom = datapoint_x02 + 'px';

    dp_03.style.left = datapoint_y03 + 'px';
    dp_03.style.bottom = datapoint_x03 + 'px';

    dp_04.style.left = datapoint_y04 + 'px';
    dp_04.style.bottom = datapoint_x04 + 'px';

    dp_05.style.left = datapoint_y05 + 'px';
    dp_05.style.bottom = datapoint_x05 + 'px';

    
    // x axis highest value calc[ ( 60 / 60 ) * 150 ]
    let x_high = (highestvalue / highestvalue) * containerheight;
    console.log(x_high); // 150

    // x axis lowest value calc[ ( 22 / 60 ) * 150 ]
    let x_low = (lowestvalue / highestvalue) * containerheight;
    console.log(x_low); // 54.999999999


    // x-axis largest value calculation [ highest data-point ]
    let xL_axis = (60 / 60) * containerheight;
    console.log('X-large : ' + xL_axis);
    // x-axis largest value calculation [ lowest data-point ]
    let xS_axis = (22 / 60) * containerheight;
    console.log('X-small : ' + xS_axis);

    
    // datapoint value variables
    // let dpx = datapoint_x01;
    // let dpy = datapoint_y01;
    // init [ assignDatapoints ] function
    // assignDatapoints(dpx, dpy);
    

}

linechart();




// function [ rnt ]
rnt = () => {

    let title = document.querySelector('.title');
    let total = document.querySelector('.total');
    let calculate = document.querySelector('.calculate');
    let payment = document.querySelector('.payment');
    let complete = document.querySelector('.complete');
    let duedate = document.querySelector('.duedate');


    
    

    // user information variables
    let rent = 1570;
    let occupants = 2;

    let calc = rent / occupants;

    let calculated = calc / occupants;

    let users = document.getElementsByClassName('users');
    let i;

    // for loop [ users ]
    for (i = 0; i < users.length; i++) {
        
    }

    total.innerHTML = '$' + calc;

    calculate.innerHTML = '$' + calculated;
    
    

    



    // test
    console.log(calc);


}

// init [ rnt ] function
rnt();


// function [ navigation ]
navigation = () => {

    let btn = document.querySelectorAll('.btn');
    
    let btnIndex = 1;
    
    let i;

    const rnt = document.querySelector('#rnt');
    const exp = document.querySelector('#exp');
    const sav = document.querySelector('#sav');

    

    for (i = 0; i < btn.length; i++) {
        btn[i].style.display = 'none';
        
        btn[ btnIndex - 1 ].style.display = 'flex';
        btn[ btnIndex - 1 ].style.fontSize = '2rem';
        btn[ btnIndex ].style.display = 'flex';


        exp.addEventListener('click', ()=> {

            btn[ btnIndex ].style.display = 'flex';
            btn[ btnIndex - 1].style.display = 'none';
            btn[ btnIndex ].style.display = 'flex';


        });
        
    }

    console.log(btn);

}

// init [ navigation ] function
navigation();





let user1 = document.querySelector('#user1');
let user2 = document.querySelector('#user2');

let percent = document.querySelector('.percent');
percent.innerHTML = 0 + '%';

user1.addEventListener('click', ()=> {

    if (percent.innerHTML == 0 + '%') {
        
        user1.setAttribute('class', 'user-on');
        percent.innerHTML = (0 + 50) + '%';
    }
    if (percent.innerHTML == 50 + '%') {
        
        percent.innerHTML = 50 + '%';
    }
    
});
user2.addEventListener('click', ()=> {

    user2.setAttribute('class', 'user-on');

    if (percent.innerHTML == 0 + '%') {

        percent.innerHTML = 50 + '%';

        user1.removeEventListener('click');
    }
    else if (percent.innerHTML == 50 + '%') {
        percent.innerHTML = 100 + '%';
    }
    

});

// let bar = document.querySelector('.bar');
// bar.style.background = '10px solid var(--done)';




