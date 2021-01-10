window.onload = function () {

    var linechart = new CanvasJS.Chart("lineChartContainer", {

        animationEnabled: true,

        theme: "light2",

        backgroundColor: "rgb(20, 12, 34)",

        title:{
            text: "Fluidity",
            fontColor: 'rgb(13, 115, 122)',
            fontFamily: 'Orbitron',
        },
        axisX:{
            title: 'days of week',
            titleFontColor: 'rgb(13, 115, 122)',
        },
        axisY:{
            title: 'code commits',
            titleFontColor: 'rgb(13, 115, 122)',
        },
        data: [{       
            
            markerType: 'circle',
            markerSize: 11,
            type: "line",
                indexLabelFontSize: 11,
                lineColor: 'rgb(13, 115, 122)',

                dataPoints: [
                { y: 16 },
                { y: 2 , indexLabel: "lazy"},
                { y: 4 },
                { y: 18 },
                { y: 22 },
                { y: 19 },
                { y: 22 , indexLabel: "consistent" },
                
                
                
                
                
            ]
        }]
    });

    linechart.render();

}

/*

// [ paste into html ] // [ paste into html ] // [ paste into html ]
<div id="chartContainer" style="height: 370px; width: 100%;"></div>
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>

*/