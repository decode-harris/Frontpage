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

    calculate.innerHTML = '$' + calculated;
    
    total.innerHTML = '$' + calc;

    



    // test
    console.log(calc);


}

// init [ rnt ] function
rnt();