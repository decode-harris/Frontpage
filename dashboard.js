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

// function [ linechart ]
linechart = () => {

    // linechart [ properties ] array
    let properties = [

        // properties data [ objects ]
        { value: 20, dimension : "Monday" },
        { value: 60, dimension : "Tuesday" },
        { value: 45, dimension : "Wednesday" },
        { value: 50, dimension : "Thursday" },
        { value: 30, dimension : "Friday" },
    
    ];

    let i;

    // for loop [ properties ]
    for(i = 0; i < properties.length; i++) {
        console.log(properties[i]);

        console.log(properties.length); // 5
    }

    // element props
    let graphsize = 200;
    let containerheight = graphsize;
    let containerwidth = graphsize;
    let propertieslength = 5;
    let highestvalue = 60;
    let lowestvalue = 20;

    // triangle calculations
    let starterpoint;
    let endingpoint; 
    let hypotenuse;

    
    // data-point [ spacing ] values
    let spacing = containerwidth / propertieslength;
    console.log('spacing : ' + spacing); // 40

    // x axis highest value calc[ ( 60 / 60 ) * 200 ]
    let x_high = (highestvalue / highestvalue) * containerheight;
    console.log('x-high : ' + x_high); // 200

    // x axis lowest value calc[ ( 12 / 60 ) * 200 ]
    let x_low = (lowestvalue / highestvalue) * containerheight;
    console.log('x-low : ' + x_low); // 40
    // let transformValue = oppo * (180 / Math.PI);

    

    

    let oppo;
    
    console.log('oppo : ' + oppo);


    // set calculations
    // let transformValue = oppo * (180 / Math.PI);
    // console.log('transform value : ' + transformValue);

    /*
    
        [ data-point ] element data

            1. data-point [ properties ] values 
            2. data-point [ x, y ] calculations
            3. line-element [ x , y ] position assignment
            4. data-lines [ hypotenuse ] calculations
            4. data-lines [ angle ] calculations
            5. data-lines [ hyp, ang ] custom variable assignment

        [ data-point ] element data
    
    */

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
    
    // calculate x-axis[ container-width / properties.length(5)]
    let calc_x_01 = containerwidth / propertieslength * 1;
    let calc_x_02 = containerwidth / propertieslength * 2;
    let calc_x_03 = containerwidth / propertieslength * 3;
    let calc_x_04 = containerwidth / propertieslength * 4;
    let calc_x_05 = containerwidth / propertieslength * 5;

    // test calculate x-axis
    console.log('calc X : ' + calc_x_01);
    console.log('calc X : ' + calc_x_02);
    console.log('calc X : ' + calc_x_03);
    console.log('calc X : ' + calc_x_04);
    console.log('calc X : ' + calc_x_05);
    
    // calculate y-axis[ ( properties[n].value / highest-value(60) ) * container-height ]
    let calc_y_01 = ( data_01 / highestvalue ) * containerheight;
    let calc_y_02 = ( data_02 / highestvalue ) * containerheight;
    let calc_y_03 = ( data_03 / highestvalue ) * containerheight;
    let calc_y_04 = ( data_04 / highestvalue ) * containerheight;
    let calc_y_05 = ( data_05 / highestvalue ) * containerheight;

    // test calculate y-axis
    console.log('calc Y : ' + calc_y_01);
    console.log('calc Y : ' + calc_y_02);
    console.log('calc Y : ' + calc_y_03);
    console.log('calc Y : ' + calc_y_04);
    console.log('calc Y : ' + calc_y_05);

    
    // datapoint [ x ] value assignment
    let datapoint_01_x = calc_x_01;
    let datapoint_02_x = calc_x_02;
    let datapoint_03_x = calc_x_03;
    let datapoint_04_x = calc_x_04;
    let datapoint_05_x = calc_x_05;

    // datapoint [ y ] value assignment
    let datapoint_01_y = calc_y_01;
    let datapoint_02_y = calc_y_02;
    let datapoint_03_y = calc_y_03;
    let datapoint_04_y = calc_y_04;
    let datapoint_05_y = calc_y_05;
    
    // test data-point assignment values
    console.log('dp01-X : ' + datapoint_01_x + ' dp01-Y : ' + datapoint_01_y);
    console.log('dp02-X : ' + datapoint_02_x + ' dp02-Y : ' + datapoint_02_y);
    console.log('dp03-X : ' + datapoint_03_x + ' dp03-Y : ' + datapoint_03_y);
    console.log('dp04-X : ' + datapoint_04_x + ' dp04-Y : ' + datapoint_04_y);
    console.log('dp05-X : ' + datapoint_05_x + ' dp05-Y : ' + datapoint_05_y);

    // datapoint spacing calculations [ refactor when possible ]
    let calculation_01 = datapoint_01_y - datapoint_02_y;
    let calculation_02 = datapoint_02_y - datapoint_03_y;
    let calculation_03 = datapoint_03_y - datapoint_04_y;
    let calculation_04 = datapoint_04_y - datapoint_05_y;

    // test simple hyp calc
    console.log('calc 01 : ' + calculation_01);
    console.log('calc 02 : ' + calculation_02);
    console.log('calc 03 : ' + calculation_03);
    console.log('calc 04 : ' + calculation_04);

    // hypotenuse calculations
    let hyp_01 = Math.hypot(calculation_01, spacing);
    let hyp_02 = Math.hypot(calculation_02, spacing);
    let hyp_03 = Math.hypot(calculation_03, spacing);
    let hyp_04 = Math.hypot(calculation_04, spacing);
    
    // test hypotenuse calc
    console.log('hyp 01: ' + hyp_01);
    console.log('hyp 02: ' + hyp_02);
    console.log('hyp 03: ' + hyp_03);
    console.log('hyp 04: ' + hyp_04);
    
    // angle calculations [ sin (data-point difference / hypotenuse)]
    let ang_calc_01 = Math.asin(calculation_01 / hyp_01);
    let ang_calc_02 = Math.asin(calculation_02 / hyp_02);
    let ang_calc_03 = Math.asin(calculation_03 / hyp_03);
    let ang_calc_04 = Math.asin(calculation_04 / hyp_04);

    let testAng = ang_calc_01 * (180 / Math.PI);

    // radois calculations [ angle value * ( 180 / PI) ]
    let ang_rad_01 = ang_calc_01 * (180 / Math.PI);
    let ang_rad_02 = ang_calc_02 * (180 / Math.PI);
    let ang_rad_03 = ang_calc_03 * (180 / Math.PI);
    let ang_rad_04 = ang_calc_04 * (180 / Math.PI);

    // test angle radius calc
    console.log('radius 01 : ' + ang_rad_01);
    console.log('radius 02 : ' + ang_rad_02);
    console.log('radius 03 : ' + ang_rad_03);
    console.log('radius 04 : ' + ang_rad_04);
    
    // assign angle value to data-line element
    let ang_01 = ang_rad_01;
    let ang_02 = ang_rad_02;
    let ang_03 = ang_rad_03;
    let ang_04 = ang_rad_04;
    
    // dataline [ dl ] element selectors
    let dl_01 = document.querySelector('#dl_01');
    let dl_02 = document.querySelector('#dl_02');
    let dl_03 = document.querySelector('#dl_03');
    let dl_04 = document.querySelector('#dl_04');
    let dl_05 = document.querySelector('#dl_05');

    // set data-line width to hypotenuse length & angle as transform calculation
    dl_01.setAttribute('style', `--hyp: ${hyp_01}; --angle: ${ang_01};`);
    dl_02.setAttribute('style', `--hyp: ${hyp_02}; --angle: ${ang_02};`);
    dl_03.setAttribute('style', `--hyp: ${hyp_03}; --angle: ${ang_03};`);
    dl_04.setAttribute('style', `--hyp: ${hyp_04}; --angle: ${ang_04};`);
    

    // data-line [ x / y ] calculations 
    let dataline_01_x = datapoint_01_x;
    let dataline_01_y = datapoint_01_y;


    // refactor to above naming convention // refactor to above naming convention // refactor to above naming convention
    let dl_x_02 = datapoint_02_x;
    let dl_y_02 = datapoint_02_y;

    let dl_x_03 = datapoint_03_x;
    let dl_y_03 = datapoint_03_y;

    let dl_x_04 = datapoint_04_x;
    let dl_y_04 = datapoint_04_y;

    let dl_x_05 = datapoint_05_x;
    let dl_y_05 = datapoint_05_y;

    // line-element [ le ] element selectors
    let le_01 = document.querySelector('#le_01');
    let le_02 = document.querySelector('#le_02');
    let le_03 = document.querySelector('#le_03');
    let le_04 = document.querySelector('#le_04');
    let le_05 = document.querySelector('#le_05');

    // line-element [ le ] set style as customVariable[ --x/--y + x/y element calculation(x, y) ]
    le_01.setAttribute('style', `--x: ${dataline_01_x}px; --y: ${dataline_01_y}px`);

    // refactor to same naming convention as above on production
    le_02.setAttribute('style', `--x: ${dl_x_02}px; --y: ${dl_y_02}px`);
    le_03.setAttribute('style', `--x: ${dl_x_03}px; --y: ${dl_y_03}px`);
    le_04.setAttribute('style', `--x: ${dl_x_04}px; --y: ${dl_y_04}px`);
    le_05.setAttribute('style', `--x: ${dl_x_05}px; --y: ${dl_y_05}px`);


    
    
    

    // simple angle calculations [ refactor when possible ]
    

    // ang_01 = sqroot_01 + square_01;
    // console.log(sqroot_01 + square_01);
    // ang_01 = opposite_01 * (180 / Math.PI);
    // console.log('ang_01 : ' + ang_01);


    // hypotenuse calculations
    // let difference_01 = datapoint_02_y - datapoint_01_y;

    // let diff_calc01 = Math.sqrt(differnce_01);
    // let hypo_calc = diff_calc01 + Math.poq(oppo, oppo);


        
    // hypotenuse assignment calculations // assign hypotenuse value to line element
    // let hyp_01 = hypo_calc;
    
    // test hypotenuse assignment calculation values
    // console.log('hyp_01 : ' + hyp_01);
    
    // sine opposite calculations
    // let sin_01 = hyp_01 * (180 / Math.PI);
    
    // transform value calculations
    // let trv_01 = sin_01 * (180 / Math.PI);
    // console.log('transform data : ' + trv_01);

    // hypotenuse of triangle
    // hypotenuse = Math.sqrt(base * height);

    // // test hypotenuse calculations
    // console.log('HYPOTENUSE : ' + hypotenuse);

    // static values
    // let hy__01 = trv_01 / bs1;
    // let hy__02 = trv_02 / bs2;
    // let hy__03 = trv_03 / bs3;
    // let hy__04 = trv_04 / bs4;
    // let hy__05 = trv_05 / bs5;

    

    /*
        data flow rules
        [ contwidth ]    /   [ properties length ]  =   triangle height
        [ endpoint ]     -   [ startpoint ]         =   base length
        [ base length ]  *   [ triangle height ]    =   hypotenuse

    */

    // base calculations
    // let bs1 = datapoint_x02 - datapoint_x01;
    // let bs2 = datapoint_y03 - datapoint_y02;
    // let bs3 = datapoint_y04 - datapoint_y03;
    // let bs4 = datapoint_y05 - datapoint_y04;
    // let bs5 = datapoint_y05 - datapoint_y05;

    // point value data
    // let pv_01 = datapoint_01_y;
    // let pv_02 = datapoint_02_y;
    // let pv_03 = datapoint_03_y;
    // let pv_04 = datapoint_04_y;
    // let pv_05 = datapoint_05_y; // refactor to above naming convention

    // base calculations
    // let bs1 = pv_02 - pv_01;
    // let bs2 = pv_03 - pv_02;
    // let bs3 = pv_04 - pv_03;
    // let bs4 = pv_05 - pv_04;
    // let bs5 = pv_05 - pv_05;

    // test [ base calculation values ]
    // console.log('bs1 : ' + bs1);
    // console.log('bs2 : ' + bs2);
    // console.log('bs3 : ' + bs3);
    // console.log('bs4 : ' + bs4);
    // console.log('bs5 : ' + bs5);
    



    



// let bs1 = datapoint_y02 - datapoint_y01;
    


    // assign datapoint values to data-point elements
    // dp_01.style.left = datapoint_y01 + 'px';
    // dp_01.style.bottom = datapoint_x01 + 'px';

    // dp_02.style.left = datapoint_y02 + 'px';
    // dp_02.style.bottom = datapoint_x02 + 'px';

    // dp_03.style.left = datapoint_y03 + 'px';
    // dp_03.style.bottom = datapoint_x03 + 'px';

    // dp_04.style.left = datapoint_y04 + 'px';
    // dp_04.style.bottom = datapoint_x04 + 'px';

    // dp_05.style.left = datapoint_y05 + 'px';
    // dp_05.style.bottom = datapoint_x05 + 'px';

    // start point values
    // let sp_01 = datapoint_01_y;
    // let sp_02 = datapoint_02_y;
    // let sp_03 = datapoint_y03;
    // let sp_04 = datapoint_y04;
    // let sp_05 = datapoint_y05;

    // // end point values
    // let ep_01 = datapoint_01_y; // removed entry on production build
    // let ep_02 = datapoint_02_y;
    // let ep_03 = datapoint_y03;
    // let ep_04 = datapoint_y04;
    // let ep_05 = datapoint_y05; // no line needed on last data-point

    // // transform calculations variable
    // let transform_calc_01;
    // let transform_calc_02;
    // let transform_calc_03;
    // let transform_calc_04;
    // let transform_calc_05;

    // // transform calculations values
    // transform_calc_01 = Math.asin(height / hyp_01) * (180 / Math.PI);
    // transform_calc_02 = Math.asin(height / hyp_02) * (180 / Math.PI);
    // transform_calc_03 = Math.asin(height / hyp_03) * (180 / Math.PI);
    // transform_calc_04 = Math.asin(height / hyp_04) * (180 / Math.PI);
    // transform_calc_05 = Math.asin(height / hyp_05) * (180 / Math.PI);
    
    // // test transform calculations
    // console.log('trans calc : ' +transform_calc_01);

    // dl_01.setAttribute('style', `--angle: ${transform_calc_01};`);

    // SOH [ Sine = Opposite over Hypotenuse ]
    // sin(x) = opposite / hypotenuse;
    // // CAH [ Cosine = Adjacent over Hypotenuse ]
    // cah(x) = adjacent / hypotenuse;
    // // TOA [ Tangent = Opooisite over Adjacent ]
    // toa(x) = opposite / adjacent;

    // let bs_opposite_01 = bs1;
    // console.log('bs opposite 01 : ' + bs_opposite_01);
    
    // let x;
    
    // let opp;
    // let hyp;

    // // calc sine
    // x = Math.asin(opp / hyp);
    // console.log(x);
    // sin(x) = opposite / hypotenuse;
        
    // console.log(sin)

    // // line element value
    // let line_element_01 = hyp_01;
    // let line_element_02 = hyp_02;
    // let line_element_03 = hyp_03;
    // let line_element_04 = hyp_04;
    // let line_element_05 = hyp_05;

    // // set style as customVariable[ --hyp + hypotenuse element calculation(n) ]
    // le_01.setAttribute('style', `--hyp: ${line_element_01}`);
    // le_02.setAttribute('style', `--hyp: ${line_element_02}`);
    // le_03.setAttribute('style', `--hyp: ${line_element_03}`);
    // le_04.setAttribute('style', `--hyp: ${line_element_04}`);
    // le_05.setAttribute('style', `--hyp: ${line_element_05}`);

    // // line-element calculations
    // let custom_x = document.querySelector('--x');
    // let custom_y = document.querySelector('--y');
    // // test custom function assigments
    // console.log('cus-X : ' + custom_x);
    // console.log('cus-Y : ' + custom_y);


    // let adjactentside = Math.pow(height, );
    // let connectingside = Math.sqrt(base);
    
    // console.log('adjactentside : '  + adjactentside);

    // hypotenuse = parseInt(adjactentside) + parseInt(connectingside);
    
    // console.log('hyp : ' + hypotenuse);

    // hypnotenuse
    
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




