$( document ).ready(function() {
    createCharts();
});


function createCharts(){


var chart = c3.generate({
    bindto: '#line-chart',
    data: {
      columns: [
        ['Wins', 30, 35, 36, 36, 46]
      ]
    },
    axis: {
    x: {
        type: 'category',
        categories: ['2014-2015', '2015-2016','2016-2017', '2017-2018', '2018-2019',]
    }
}
});


var genderChart = c3.generate({
    bindto: '#pie-chart',
    data: {
        // iris data from R
        columns: [
            ['Percent of games won', 30],
            ['Percent of games lost', 41],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});

var barChart = c3.generate({
  bindto: '#bar-chart',
    data: {
        columns: [
            ['Wins', 30, 35, 36, 36, 46],
            ['Losses', 41, 31, 31, 35, 29]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    },
    axis: {
    x: {
        type: 'category',
        categories: ['2014-2015', '2015-2016','2016-2017', '2017-2018', '2018-2019',]
    }
}

});




}
