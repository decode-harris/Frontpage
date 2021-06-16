// un-ordered list [ data ] selector
const data = document.querySelector('#data');

// expenses form input element selectors
const payment = document.querySelector('#payment');
const description = document.querySelector('#description');
const expense = document.querySelector('#expense');

const paymentLabel = document.querySelector('#payment-label');

// function [ calculateData ] : validate & calculate expenses of application input
function calculateData() {

    let calculations = document.querySelector('#calculations');

    // click event [ calculations button]
    calculations.addEventListener('click', (e)=> {

        // prevent form submit by default
        e.preventDefault();

        // calculation out variables
        let starting = document.querySelector('#starting');
        let deductions = document.querySelector('#deductions');
        let remaining = document.querySelector('#remaining');

        
        

        // set deductions value as payment - expenses input values
        deductions.innerHTML = payment.value - expense.value;

        remaining.innerHTML = starting.innerHTML - deductions.innerHTML;


        if (payment.value === '') {

            // test
            console.log('payment value is empty');
        }
        if (payment.value != '') {

            // set starting value as payment input value
            starting.innerHTML = payment.value;

            payment.style.display = 'none'
            paymentLabel.style.display = 'none';

            createList();
            
            // test
            console.log('payment value is not empty')
        }

    });
    
    // // starting variable element selector
    // let starting = document.querySelector('#starting');

    // // set current amount variable as payment minus expense
    // let current = (payment.value - expense.value);

    // // display the calculated amount to user
    // starting.innerHTML = payment.value;
    

    // // deductions variable element selector 
    // let deducations = document.querySelector('#deductions');

    // let number = 0; // loop through created list elements

    // let items = document.querySelectorAll('#data .items');

    // for(let i = 0; i < items.length; i++) {
        
    //     // set number as number of items
    //     number = items[i];

    //     console.log('number as : ' + number);
    // }

    // // assign deductions value to inner html
    // deducations = (starting.innerHTML - expense.value);

    // console.log('deductions current : ' + deducations);

    // // remaining variable element selector
    // let remaining = document.querySelector('#remaining');

    
    


    // // calculations button selector
    // let calculations = document.querySelector('#calculations');

    // // click event [ calculations button ] : set formulas & output calculations
    // calculations.addEventListener('click', (e)=> {

        

    //     starting = payment.value;
    //     starting.innerHTML = payment.value;

    //     // set remaining as payment value
    //     remaining.innerHTML = ( payment.value - expense.value );


    //     if (payment.value === '' && payment.style.display != 'none') {

    //         // alert user to enter a starting calculations amount
    //         alert('please enter a payment amount');

    //         // return || reset the alert modal
    //         return;
    //     }
    //     if (payment.value != '' && payment.style.display === 'flex') {

    //         // reset form back to default view
    //         payment.value = '';
    //         payment.style.display = 'none';

    //         // remove payment label from form element
    //         paymentLabel.style.display = 'none';

    //         // test
    //         console.log('exp : collect current form values');

    //         // init function [ createList ]
    //         createList();
    //     }
    //     else {

    //         // 
    //         payment.style.display = 'flex';
    //     }

    //     // run the formula for remaining amount
    //     // remaining.innerHTML = ( starting.value - expense.value );
        
    //     // prevent form submit by default
    //     e.preventDefault();

    //     // test
    //     console.log('exp : payment value = ' + payment.value);

        

    //     // form calculation formulas
        
    //     let output = document.querySelector('#deducations');

    //     // form calculation formulas
    //     let spending = (expense.value);
        

    //     // assign output html to deductions calculation value
    //     // output.innerHTML = deducations;

    //     let earnings = payment.value;
    //     let current;

    //     if (payment === '') {

    //         current.innerHTML = earnings;

    //         // assign remaining output value as spending calculation value
    //         remaining.innerHTML = spending;

    //         // test
    //         console.log('payment : not empty');
    //     }

    //     if (output.value != '') {
    //         output.innerHTML = deducations;
    //     }
    //     else {

            
    //         // formulas
    //         starting = payment.value;

    //         let items = document.querySelectorAll('#data .items');

    //         deducations = items.forEach(element => {
    //             element.addEventListener('change', ()=> {

    //                 console.log('deductions item change');

    //             });
    //         });
    //         remaining = ( payment.value - expense.value )

            
    //     }

    //     // test
    //     console.log('decuations as : ' + deducations);
        
    //     // text
    //     // console.log(items);

        

    // });

}

// init function [ data ]
calculateData();