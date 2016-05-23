// $(function () {
//     $('#container11').highcharts({
//         title: {
//             text: 'Combination chart'
//         },
//         xAxis: {
//             categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
//         },
//         labels: {
//             items: [{
//                 html: 'Total fruit consumption',
//                 style: {
//                     left: '50px',
//                     top: '18px',
//                     color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
//                 }
//             }]
//         },
//         series: [{
//             type: 'column',
//             name: 'Jane',
//             data: [3, 2, 1, 3, 4]
//         }, {
//             type: 'column',
//             name: 'John',
//             data: [2, 3, 5, 7, 6]
//         }, {
//             type: 'column',
//             name: 'Joe',
//             data: [4, 3, 3, 9, 0]
//         }, {
//             type: 'spline',
//             name: 'Average',
//             data: [3, 2.67, 3, 6.33, 3.33],
//             marker: {
//                 lineWidth: 2,
//                 lineColor: Highcharts.getOptions().colors[3],
//                 fillColor: 'white'
//             }
//         }, {
//             type: 'pie',
//             name: 'Total consumption',
//             data: [{
//                 name: 'Jane',
//                 y: 13,
//                 color: Highcharts.getOptions().colors[0] // Jane's color
//             }, {
//                 name: 'John',
//                 y: 23,
//                 color: Highcharts.getOptions().colors[1] // John's color
//             }, {
//                 name: 'Joe',
//                 y: 19,
//                 color: Highcharts.getOptions().colors[2] // Joe's color
//             }],
//             center: [100, 80],
//             size: 100,
//             showInLegend: false,
//             dataLabels: {
//                 enabled: false
//             }
//         }]
//     });
// });



$(function () {

    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=world-population-density.json&callback=?', function (data) {

        // Add lower case codes to the data set for inclusion in the tooltip.pointFormat
        $.each(data, function () {
            this.flag = this.code.replace('UK', 'GB').toLowerCase();
        });

        // Initiate the chart
        $('#container11').highcharts('Map', {

            title: {
                text: 'Fixed tooltip with HTML'
            },

            legend: {
                title: {
                    text: 'Population density per km²',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                    }
                }
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

            tooltip: {
                backgroundColor: 'none',
                borderWidth: 0,
                shadow: false,
                useHTML: true,
                padding: 0,
                pointFormat: '<span class="f32"><span class="flag {point.flag}"></span></span>' +
                    ' {point.name}: <b>{point.value}</b>/km²',
                positioner: function () {
                    return { x: 0, y: 250 };
                }
            },

            colorAxis: {
                min: 1,
                max: 1000,
                type: 'logarithmic'
            },

            series : [{
                data : data,
                mapData: Highcharts.maps['custom/world'],
                joinBy: ['iso-a2', 'code'],
                name: 'Population density',
                states: {
                    hover: {
                        color: '#BADA55'
                    }
                }
            }]
        });
    });
});






    
