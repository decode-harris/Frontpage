// dash view variables
const week = document.querySelector('#week');
const quarter = document.querySelector('#quarter');
const month = document.querySelector('#month');

// dash titles
const title_week = document.querySelector('#title-week');
const title_month = document.querySelector('#title-month');
const title_quarter = document.querySelector('#title-quarter');

// dash btns
const btn_week = document.querySelector('#btn-week');
const btn_month = document.querySelector('#btn-month');
const btn_quarter = document.querySelector('#btn-quarter');

// dash helper
const helper = document.querySelector('#helper');

// function [ hideLists ]
listDefault = () => {

    // remove all dashboard lists from view
    week.style.display = 'none';
    month.style.display = 'none';
    quarter.style.display = 'none';

    // remove all list titles from view
    title_week.style.display = 'none';
    title_month.style.display = 'none';
    title_quarter.style.display = 'none';

}
// init [ listDefault ] function
listDefault();

// event [ week ]
btn_week.addEventListener('click', ()=> {

    if (month.style.display == 'flex' || quarter.style.display == 'flex') {
        
        // init [ listDefault ] function
        listDefault();

    }

    helper.style.display = 'none';

    // set current list & heading elements
    title_week.style.display = 'flex';
    week.style.display = 'flex';

});

// event [ month ]
btn_month.addEventListener('click', ()=> {

    if (week.style.display == 'flex' || quarter.style.display == 'flex') {
        
        // init [ listDefault ] function
        listDefault();

        helper.style.display = 'none';
    }

    title_month.style.display = 'flex';
    month.style.display = 'flex';

});

// event [ quater ]
btn_quarter.addEventListener('click', ()=> {

    if (week.style.display == 'flex' || month.style.display == 'flex') {
        
        // init [ listDefault ] function
        listDefault();

        helper.style.display = 'none';
    }

    title_quarter.style.display = 'flex';
    quarter.style.display = 'flex';

});


// test
console.log(week, quarter, month);









const form = document.querySelector('#form');

const form_week = document.querySelector('#form-week');
const form_month = document.querySelector('#form-month');

const edit_week = document.querySelector('#edit-week');

// form component

formDefault = () => {

    
    // const form_quarter = document.querySelector('#form-quarter');

    // remove form items from view

    form.style.display = 'none';
    form_week.style.display = 'none';
    form_month.style.display = 'none';

    edit_week.style.display = 'none';


}

const open_week = document.querySelector('#open-week');

open_week.addEventListener('click', ()=> {

    form.style.display = 'flex';
    form_week.style.display = 'flex';

    open_week.style.display = 'none';
    
    
});

formDefault();





const input_shop = document.querySelector('#input-shop');
const input_transport = document.querySelector('#input-transport');
const input_saving = document.querySelector('#input-saving');

const week_submit = document.querySelector('#btn-week-submit');

week_submit.addEventListener('click', (e)=> {

    e.preventDefault();

    let error = '2px solid red';
    let border = '2px solid #000';

    // validate if any input is an empty string on submit
    if (input_shop.value === '' || input_shop.value === null) {

        // focus the error element to help user complete form
        input_shop.focus();

        // produce a helper style border around the error element
        input_shop.style.border = error.value;

        // test
        console.log('shop is empty');
    }
    else {
        // select all input elements in current form
        let inputs = document.querySelectorAll('input');

        // list element values variables
        let shop_value = input_shop.value;
        let transport_value = input_transport.value;
        let saving_value = input_saving.value;

        // test
        console.log(shop_value);

        // list element selectors
        const shop = document.querySelector('#shop');
        const transport = document.querySelector('#transport');
        const saving = document.querySelector('#saving');

        // assign input values to list elements
        shop.innerHTML = shop_value;
        transport.innerHTML = transport_value;
        saving.innerHTML = saving_value;
        
        // for each [ inputs ]
        inputs.forEach(element => {

            // set alll input element styles back to default
            element.style.border = border;

        });

        // remove the form on submission
        form.style.display = 'none';

        // show edit button for list after creation
        edit_week.style.display = 'flex'
    }

    

});


edit_week.addEventListener('click', ()=> {

    

});