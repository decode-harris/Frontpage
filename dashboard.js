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
// developmenthelper();

const tab = document.querySelectorAll('#tabs .tab');

tabs = () => {
    // tabs
    // dashboard areas
    const overview = document.querySelector('#overview');
    const description = document.querySelector('#description');
    const analysis = document.querySelector('#analysis');

    

    tab.forEach(element => {
        element.addEventListener('click', ()=> {
            tabsdefault();
            
            element.setAttribute('class', 'tab active');
            // test
            console.log('assign active class');
            
        });
    });


}
tabs();
tabsdefault = () => {
    

    // for loop [ tab ]
    for (i = 0; i < tab.length; i++) {
        tab[i].setAttribute('class', 'tab ');
        console.log('number of tabs : ' +  tab[i]);
    }

    console.log('test tabs default');
}



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
// rnt();


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
// navigation();





// let user1 = document.querySelector('#user1');
// let user2 = document.querySelector('#user2');

// let percent = document.querySelector('.percent');
// percent.innerHTML = 0 + '%';

// user1.addEventListener('click', ()=> {

//     if (percent.innerHTML == 0 + '%') {
        
//         user1.setAttribute('class', 'user-on');
//         percent.innerHTML = (0 + 50) + '%';
//     }
//     if (percent.innerHTML == 50 + '%') {
        
//         percent.innerHTML = 50 + '%';
//     }
    
// });
// user2.addEventListener('click', ()=> {

//     user2.setAttribute('class', 'user-on');

//     if (percent.innerHTML == 0 + '%') {

//         percent.innerHTML = 50 + '%';

//         user1.removeEventListener('click');
//     }
//     else if (percent.innerHTML == 50 + '%') {
//         percent.innerHTML = 100 + '%';
//     }
    

// });

// let bar = document.querySelector('.bar');
// bar.style.background = '10px solid var(--done)';




