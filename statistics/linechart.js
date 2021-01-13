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
    let dataline_02_x = datapoint_02_x;
    let dataline_02_y = datapoint_02_y;

    let dataline_03_x = datapoint_03_x;
    let dataline_03_y = datapoint_03_y;

    let dataline_04_x = datapoint_04_x;
    let dataline_04_y = datapoint_04_y;

    let dataline_05_x = datapoint_05_x;
    let dataline_05_y = datapoint_05_y;

    // line-element [ le ] element selectors
    let le_01 = document.querySelector('#le_01');
    let le_02 = document.querySelector('#le_02');
    let le_03 = document.querySelector('#le_03');
    let le_04 = document.querySelector('#le_04');
    let le_05 = document.querySelector('#le_05');

    // line-element [ le ] set style as customVariable[ --x/--y + x/y element calculation(x, y) ]
    le_01.setAttribute('style', `--x: ${dataline_01_x}px; --y: ${dataline_01_y}px`);
    le_02.setAttribute('style', `--x: ${dataline_02_x}px; --y: ${dataline_02_y}px`);
    le_03.setAttribute('style', `--x: ${dataline_03_x}px; --y: ${dataline_03_y}px`);
    le_04.setAttribute('style', `--x: ${dataline_04_x}px; --y: ${dataline_04_y}px`);
    le_05.setAttribute('style', `--x: ${dataline_05_x}px; --y: ${dataline_05_y}px`);

}

// init [ linechart ] function
linechart();