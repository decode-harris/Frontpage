// application page view selectors
let frontpage = document.querySelector('#frontpage');
let application = document.querySelector('#application');
let production = document.querySelector('#production');

/*
    function [ setState ]

    provides state management to application pages
    enables swipe capibilities for mobile & tablet devices
    disable swipe for desktop && enable onclick events
*/
function setState() {   

    // set current state id as an empty string
    let id = '';

    // set default state [ frontpage view ]
    let content = document.querySelectorAll('.content');

    // forEach [ content ] section
    content.forEach(element => {

        // remove all element from state view
        element.style.display = 'none';
    
    });
}

// init function [ setState ]
setState();

// function [ stateListener ] : listen for state change on user click
function stateListener() {

    // navigation link selector elements [ click events ]
    let link_frontpage = document.querySelector('#link-home');
    let link_application = document.querySelector('#link-app');
    let link_prodution = document.querySelector('#link-prod');

    // validate the homepage view [ frontpage ]
    if(frontpage.style.display != 'flex') {

        // display the default view [ frontpage ]
        frontpage.style.display = 'flex';
    }

    // event [ frontpage link ]
    link_frontpage.addEventListener('click', ()=> {

        setState();

        if (frontpage.style.display != 'flex') {
            frontpage.style.display = 'flex';
        }
        else {
            frontpage.style.display = 'none';
        }

    });

    // event [ application link ]
    link_application.addEventListener('click', ()=> {

        // init function [ setState ]
        setState();

        if (application.style.display != 'flex') {
            application.style.display = 'flex';
        }
        else {
            application.style.displa= 'none';
        }

    });

    // event [ production link ]
    link_prodution.addEventListener('click', ()=> {

        // init function [ setState ]
        setState();

        if (production.style.display != 'flex') {
            production.style.display = 'flex';
        }
        else {
            production.style.display = 'none';
        }

    });

} // function [ stateListener ] end

// init function [ stateListener ]
stateListener();





// function [ exp ] : validate & calculate expenses of application input
function exp() {

    // un-ordered list [ data ] selector
    const data = document.querySelector('#data');

    // expenses form input element selectors
    const payment = document.querySelector('#payment');
    const description = document.querySelector('#description');
    const expense = document.querySelector('#expense');

    let weekly = 4; // multiply earnings formula by 4 [ 1 month ]
    let fortnight = 2 // multiply earnings forumla by 2 [ 1 month ]
    let monthly = 1 // multiply earnings formula by 1 [ 1 month ]
    

    // create input value element attachment
    let text = document.createElement('p');
    let number = document.createElement('p');
    
    // calculations button selector
    let calculations = document.querySelector('#calculations');

    // click event [ calculations button ] : set formulas & output calculations
    calculations.addEventListener('click', (e)=> {

        // prevent form submit by default
        e.preventDefault();

        // create a new list item 
        let item = document.createElement('li');
    
        // provide the new list item with the classname of items
        item.setAttribute('class', 'items');

        // apply text value to newly created text element
        text.innerHTML = description.value;
        number.innerHTML = expense.value;

        // attach the current expense type & cost inside the list variable
        item.appendChild(text);
        item.appendChild(number);

        // append the new list item to the current application page
        data.appendChild(item);

        // form calculation formulas
        let deducations = (payment.value - expense.value);
        let output = document.querySelector('#deducations');

        // form calculation formulas
        let spending = (expense.value);
        let remaining = document.querySelector('#remaining');

        // assign output html to deductions calculation value
        // output.innerHTML = deducations;

        let earnings = payment.value;
        let current;

        if (payment === '') {

            current.innerHTML = earnings;

            // assign remaining output value as spending calculation value
            remaining.innerHTML = spending;

            // test
            console.log('payment : not empty');
        }

        if (output.value != '') {
            output.innerHTML = deducations;
        }
        else {

            // reset form back to default view
            payment.innerHTML = '';
            description.innerHTML = '';
            expense.innerHTML = '';

            
        }

        // test
        console.log('decuations as : ' + deducations);
        createList(remaining, output);
        

        

        // text
        console.log(item);

        

    });

}

// init function [ exp ]
exp();




function createList(remaining, output) {

    // test data conversion
    console.log('createList : ' + remaining);
    console.log('createList : ' + output.value);
    



    let name = document.createElement('p');
    name.innerHTML = description.value;

    let cost = document.createElement('p');
    cost.innerHTML = expense.value;

    if (payment.value === '') {
        console.log('payment is empty');
    }

}

