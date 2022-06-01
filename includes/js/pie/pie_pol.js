var chart;
var legend;
var chartData = [{
    "QC": "Brak kontroli jakości",
    "count": 41
}, {
    "QC": "Kontrola jakości poprzez firmę jako strona trzecia",
    "count": 32
}, {
    "QC": "Lokalny personel kontroli jakości",
    "count": 18
}, {
    "QC": "Sprwdzanie kontroli jakości na własną rękę",
    "count": 9
}];
AmCharts.ready(function () {
    chart = new AmCharts.AmPieChart();
    chart.dataProvider = chartData;
    chart.titleField = "QC";
    chart.valueField = "count";
    chart.startDuration = 0;
    legend = new AmCharts.AmLegend();
    legend.align = "center";
    legend.markerType = "circle";
    legend.markersize = 2;
    legend.position = "bottom";
    legend.fontSize = 8;
    chart.balloonText = "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>";
    chart.addLegend(legend);
    chart.labelRadius = 20;
    chart.labelText = "[[percents]]%";
    chart.write("chartdiv");
});