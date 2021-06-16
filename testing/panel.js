// pi
let pi = Math.PI;
// svg width
let width = 240;
// circle radius
let radius = (width / 2);
// circle circumference
let circumference;
// circle stroke width
let strokewidth = 16;
// ctx circle selector
let ctx = document.querySelector('.progress-ring__circle');




// function [ drawCircle ]
const drawCircle = (cx, cy, rd) => {
    
    cx = 70;
    cy = 70;
    rd = 70;

    let svg = document.querySelector('svg');
    
    let circle = document.createElement('circle');
    circle.setAttribute('class', 'circle');
    circle.setAttribute('cx', cx);
    circle.setAttribute('cy', cy);
    circle.setAttribute('r', rd);
    
    svg.appendChild(circle);
    
    console.log('draw circle [ create circle element ]');

}

// function [ progressRing ]
progressRing = (percent) => {

    /* 
        radius config calculator

        takes svg width divided by x/y(2) minus circle strokewidth * x/y(2)

        change radius value to cirlce [ r ] 

    */

    parseInt(percent);
    console.log(percent);

    // radius formula
    calc = radius - (strokewidth * 2);

    // circumference formula
    circumference = radius * 2 * pi;

    circumference = parseInt(circumference);
    console.log('circumference : ' + circumference);

    // ctx circle props
    // ctx.style.strokeDasharray = `${circumference} ${circumference}`;
    // ctx.style.strokeDashoffset = circumference;

    ctx.setAttribute('stroke-dasharray', `${circumference} ${circumference}`);
    ctx.setAttribute('stroke-dashoffset', circumference);

    // test
    console.log('radius : ' + calc);

    let offset = circumference - percent / 100 * circumference;

    offset = parseInt(offset);
    console.log('offset : ' + offset);

    // ctx.style.strokeDashoffset = '50';

    drawCircle();

}
// init [ progressRing ]
// progressRing();


let add= document.querySelector('.add');

add.addEventListener('click', (event)=> {

    event.preventDefault();

    progressRing(-50);

    // validate data values using input
    // if ( input.value < 101 && input.value > -1 ) {
        
    //     // init [ setProgressRing ] function ( get input value )
    //     setProgressRing(input.value);

    //     // test
    //     console.log('input event [ IF ]');
    // }
});

let graph = document.querySelector('#graph');



