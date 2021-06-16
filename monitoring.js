
views = () => {
    const ul = document.querySelectorAll('.list');

    for (let i = 0; i < ul.length; i++) {

        // default ul styles
        ul[i].style.display = 'none';

        // [ btn exp ] selector
        let btnexp = document.querySelector('#btnexp');
        // event [ btn exp ]
        btnexp.addEventListener('click', ()=> {
            
            // apply default style to all ul
            ul[i].style.display = 'none';

            // apply display style grid to [ 0 ] ( experience )
            ul[0].style.display = 'grid';
        
        });
        
        // [ btn cal ] selector
        let btncal = document.querySelector('#btngol');
        
        btncal.addEventListener('click', ()=> {
            
            // apply default style to all ul
            ul[i].style.display = 'none';

            // apply display style grid to [ 1 ]
            ul[1].style.display = 'grid';
        
        });

        // [ btn trk ] selector
        let btntrk = document.querySelector('#btntrk');

        // event [ btn trk ]
        btntrk.addEventListener('click', ()=> {
            
            // apply default style to all ul
            ul[i].style.display = 'none';

            // apply display style grid to [ 2 ]
            ul[2].style.display = 'grid';
        
        });

        // test
        console.log(ul[i]);
    }

}

// init [ views ]
views();

// li element all selector
const li = document.querySelectorAll('li');

// for each [ li ]
li.forEach(element => {
    // event [ element ( li ) ]
    element.addEventListener('click', ()=> {
        
        // validate grid classes
        if (element.className == 'x-2') {
            
            // assign element to active
            element.className = 'x-2 active';

            // test
            console.log(element.className);
        }
        if (element.className == '') {
            
            // assign element to active
            element.className = 'active';

        }

    });
});

// function [ resetbtn ]
resetbtn = () => {

    // reset btn selector
    const reset = document. querySelector('#reset');

    // event [ reset ]
    reset.addEventListener('click', ()=> {

        // select all li elements
        let li = document.querySelectorAll('li');

        // for loop [ li ]
        for (i = 0 ; i < li.length; i++) {

            // validate li class names
            if (li[i].className == 'x-2 active') {
                li[i].className = 'x-2';
            }
            // validate li class names
            if (li[i].className == 'active') {
                li[i].className = '';
            }
        }

    });
    
}

// init [ resetbtn ] function
resetbtn();




// select all p elements
const p = document.querySelectorAll('p');

// loop all p elements
for (let i = 0; i < p.length; i++) {

    // assign class [ data ] to p elemenets
    p[i].setAttribute('class', 'data');

}


// function calculations() {}
calculations = () => {

    // weeks in 1 month
    let week = 4;
    
    // income [ weekly ]
    let pay = 500;

    // expenses [ weekly ]
    let grocery = 74.90;
    let petrol = 30.50;

    // expenses [ monthly ]
    let mobile = 25.25;
    let internet = 80.8;
    let rent = 795;

    // calculation [ remaining ]
    let remaining;
    
    // breakdown [ per week expenses ]
    let perweek_net = internet / week;
    let perweek_mob = mobile / week;
    let perweek_rnt = rent / week;

    // [ income ] selector + value assignment
    let income = document.querySelector('#income');
    income.innerHTML = pay;

    // [ groceries ] selector + value assignment
    let groceries = document.querySelector('#groceries');
    groceries.innerHTML =  grocery;

    // [ transport ] selector + value assignment
    let transport = document.querySelector('#transport');
    transport.innerHTML =  petrol;

    // [ rentcost ] selector + value assignment
    let rentcost = document.querySelector('#rentcost');
    rentcost.innerHTML =  perweek_rnt;

    // [ mobilecredit ] selector + value assignment
    let mobilecredit = document.querySelector('#mobilecredit');
    mobilecredit.innerHTML =  perweek_mob;

    // [ aussiebb ] selector + value assignment
    let aussiebb = document.querySelector('#aussiebb');
    aussiebb.innerHTML =  perweek_net;
    
    // [ remain_x ] selectors
    let rmn_pay = document.querySelector('#rmn_pay');

    let rmn_gro = document.querySelector('#rmn_gro');
    let rmn_trs = document.querySelector('#rmn_trs');

    let rmn_rnt = document.querySelector('#rmn_rnt');

    let rmn_mob = document.querySelector('#rmn_mob');
    let rmn_net = document.querySelector('#rmn_net');
    
    // remaining amount [ income ]
    remaining = (pay * 1);
    rmn_pay.innerHTML = remaining;
    
    // remaining amount [ shopping ]
    remaining = (remaining - grocery);
    rmn_gro.innerHTML = remaining;

    // remaining amount [ transport ]
    remaining = (remaining - petrol)
    rmn_trs.innerHTML = remaining;

    // remaining amount [ rent ]
    remaining = (remaining - perweek_rnt);
    rmn_rnt.innerHTML = Math.trunc(remaining);

    // remaining amount [ mobile ]
    remaining = (remaining - perweek_mob);
    rmn_mob.innerHTML = Math.trunc(remaining);

    // remaining amount [ internet ]
    remaining = (remaining - perweek_net);
    rmn_net.innerHTML = Math.trunc(remaining);

    let remaining_total = document.querySelector('#remaining');
    remaining_total.innerHTML = Math.trunc(remaining);

    

}
calculations();