/*
    rendering data point calculations
*/

// graph dimensions
const graph_height = 200;
const graph_width = 200;

// graph high / low values
const value_high = 60;
const value_low = 22;

// graph y high calculations
let y_high = (value_high / value_high) * graph_height;
console.log(y_high); // 200

// graph y low calculations
let y_low = (value_low / value_high) * graph_height;
console.log(y_low); // 73.33

// num of datapoints
let datapoints = 5;

// datapoint spacing calculation
let spacing = graph_width / datapoints;
console.log(spacing); // 40

let data_01 = 25;
let data_02 = 60;
let data_03 = 45;
let data_04 = 50;
let data_05 = 20;

let data_01_y = (data_01 / value_high) * graph_height;
console.log(data_01_y); // 83.33

let data_02_y = (data_02 / value_high) * graph_height;
console.log(data_02_y); // 200

let data_03_y = (data_03 / value_high) * graph_height;
console.log(data_03_y); // 150

let data_04_y = (data_04 / value_high) * graph_height;
console.log(data_04_y); // 166.66

let data_05_y = (data_05 / value_high) * graph_height;
console.log(data_05_y); // 66.6


/*
    trigonometry calculations [ triangles ]
*/

let opposite = spacing;
let differnce_01 = data_02_y - data_01_y;
console.log('diff: ' + differnce_01); // 116.66
let sqroot_01 = Math.sqrt(differnce_01);
console.log('sqroot: ' + sqroot_01);

let squared_01 = Math.pow(opposite, opposite);
console.log('squared: ' + squared_01);

// calculation hyp [ ]
let datapoint_01 = sqroot_01 + parseInt(squared_01);
console.log(datapoint_01);

// let data_01_y_calc = (data_02_y - data_01_y);
// let data_01_y_sqr = Math.sqrt(data_01_y_calc);
// let datapoint_01 = data_01_y_sqr * Math.pow(40);


// console.log(datapoint_01);