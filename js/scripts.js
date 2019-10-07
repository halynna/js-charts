
$( document ).ready(function() {
  createCharts();
});



var genderChart = c3.generate({
  bindto: '#gender-chart',
  data: {
    columns: [
      ['Female', 10],
      ['Male', 4]
    ],
    type: 'pie',
  }
});
