ChartDemo = function () {
    this.lineChart = new twaver.charts.LineChart();
    this.pieChart = new twaver.charts.PieChart();
    this.barChart = new twaver.charts.BarChart();
    this.bubbleChart = new twaver.charts.BubbleChart();
    this.radarChart = new twaver.charts.RadarChart();
    this.dialChart = new twaver.charts.DialChart();

    this.developedElement = this.createLineChartElement('Developed', 'blue', 'circle');
    this.developingElement = this.createLineChartElement('Developing', 'green', 'triangle');
    this.worldElement = this.createLineChartElement('World', 'red', 'rectangle');

    this.testList = new twaver.List();
    this.developedList = new twaver.List();
    this.developingList = new twaver.List();
    this.worldList = new twaver.List();

    this.equitiesValues = [];
    this.equitiesXAxisValues = [];
    this.equitiesYAxisValues = [];
    this.equitiesNames = [];

    this.mutualFundsValues = [];
    this.mutualFundsXAxisValues = [];
    this.mutualFundsYAxisValues = [];
    this.mutualFundsNames = [];

    this.countries = ['Canada', 'China', 'France', 'Japan', 'United States'];
    this.colors = ['#FF0000', '#FFC800', '#00FF00', '#990099', '#0000FF'];
    this.inflations = [2.4, 10.1, 1.7, -0.1, 2.5];
    this.areas = [9976140, 9596960, 547030, 377835, 9372210];
    this.populations = [28860271, 1210004956, 58317450, 125449703, 266476278];
    this.gdps = [694000, 3500000, 1173000, 2679200, 7247700];
    this.growths = [1.06, 0.98, 0.34, 0.21, 0.91];
    this.axisList = new twaver.List([
					{ text: 'Inflation', min: -5, max: 15 },
					{ text: 'Area(Millions)', min: 0, max: 20000000 / 1000000 },
					{ text: 'Population(Millions)', min: 0, max: 2000000000 / 1000000 },
					{ text: 'GDP(Thousands)', min: 0, max: 8000000 / 1000000 },
					{ text: 'Growth', min: 0, max: 2 }
				]);
};
twaver.Util.ext('ChartDemo', Object, {
    init: function () {
        this.initChart();

        var lineChartPane = new twaver.charts.ChartPane(this.lineChart);
        var pieChartPane = new twaver.charts.ChartPane(this.pieChart);
        var barChartPane = new twaver.charts.ChartPane(this.barChart);
        var bubbleChartPane = new twaver.charts.ChartPane(this.bubbleChart);
        var radarChartPane = new twaver.charts.ChartPane(this.radarChart);
        var dialChartPane = new twaver.charts.ChartPane(this.dialChart);

        var topRightSplit = new SplitPane(pieChartPane, barChartPane, 'horizontal', 0.5);
        var topSplit = new SplitPane(lineChartPane, topRightSplit, 'horizontal', 0.33);
        var bottomRightSplit = new SplitPane(radarChartPane, dialChartPane, 'horizontal', 0.5);
        var bottomSplit = new SplitPane(bubbleChartPane, bottomRightSplit, 'horizontal', 0.33);
        var mainSplit = new SplitPane(topSplit, bottomSplit, 'vertical', 0.5);
        demo.Util.appendChild(mainSplit.getView(), document.getElementById('main'), 0, 0, 0, 0);

        window.onresize = function (e) { mainSplit.invalidate(); };
    },
    initChart: function () {
        this.initLineChart();
        this.initPieChart();
        this.initBarChart();
        this.initBubbleChart();
        this.initRadarChart();
        this.initDialChart();
    },
    initLineChart: function () {
        this.lineChart.setYScaleMinTextVisible(true);
        this.lineChart.setYScaleValueGap(25);
        this.lineChart.setLowerLimit(0);
        this.lineChart.setUpperLimit(100);

        this.addValue("1994", 5.2, 1.0, 0.19);
        this.addValue("1995", 8.2, 1.6, 0.4);
        this.addValue("1996", 12.7, 2.5, 0.6);
        this.addValue("1997", 17.6, 3.7, 1.1);
        this.addValue("1998", 24.6, 5.4, 1.9);
        this.addValue("1999", 35.3, 8.2, 3.2);
        this.addValue("2000", 49.6, 12.2, 5.4);
        this.addValue("2001", 58.5, 15.7, 8.0);
        this.addValue("2002", 64.7, 18.8, 10.8);
        this.addValue("2003", 69.6, 22.6, 14.2);
        this.addValue("2004", 76.8, 27.7, 19.1);
        this.addValue("2005", 85.2, 34.4, 25.6);
        this.addValue("2006", 90.9, 41.0, 32.4);

        this.lineChart.setXScaleTexts(this.testList);
        this.developedElement.setStyle('chart.values', this.developedList);
        this.developingElement.setStyle('chart.values', this.developingList);
        this.worldElement.setStyle('chart.values', this.worldList);
    },
    initPieChart: function () {
        this.pieChart.formatValueText = function (value, data) {
            return value.toFixed(1);
        };
        this.createPieChartElement("Sprint", 23, 'BLUE');
        this.createPieChartElement("Verizon", 26, 'YELLOW');
        this.createPieChartElement("AT&T", 26, 'GREEN');
        this.createPieChartElement("T-Mobile", 11, 'MAGENTA');
        this.createPieChartElement("Alltel", 5, 'CYAN');
        this.createPieChartElement("Rest", 9, 'RED');
    },
    initBarChart: function () {
        this.createBarChartElement("Sprint", 23, 'BLUE', [80, 85, 90, 95]);
        this.createBarChartElement("Verizon", 26, 'YELLOW', [60, 65, 70, 75]);
        this.createBarChartElement("AT&T", 26, 'GREEN', [40, 45, 50, 55]);
        this.createBarChartElement("T-Mobile", 11, 'MAGENTA', [20, 25, 30, 35]);
        this.createBarChartElement("Alltel", 5, 'CYAN', [10, 14, 18, 20]);
        this.createBarChartElement("Rest", 9, 'RED', [3, 5, 7, 9]);
    },
    initBubbleChart: function () {
        this.bubbleChart.setXAxisText('Age of Investment(Years)');
        this.bubbleChart.setYAxisText('Return on Investment');
        this.bubbleChart.setXScaleTexts(new twaver.List(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']));
        this.bubbleChart.setXAxisLowerLimit(0);
        this.bubbleChart.setXAxisUpperLimit(10);
        this.bubbleChart.setLowerLimit(0);
        this.bubbleChart.setUpperLimit(120);
        this.bubbleChart.setYScaleValueGap(20);
        this.bubbleChart.setYScaleMinTextVisible(true);
        this.bubbleChart.formatValueText = function (value, data) {
            return value.toFixed(0);
        };

        this.addEquitiesValue('A', 6, 110, 100);
        this.addEquitiesValue('B', 1.5, 20, 50);
        this.addEquitiesValue('C', 4.5, 75, 30);
        this.addEquitiesValue('D', 7, 70, 70);
        this.addEquitiesValue('E', 8, 20, 50);
        this.createBubbleChartElement('Equities', 'blue', 'circle',
            this.equitiesValues, this.equitiesXAxisValues, this.equitiesYAxisValues, this.equitiesNames);

        this.addMutualFundsValue('P', 3.5, 25, 40);
        this.addMutualFundsValue('Q', 8.5, 70, 60);
        this.addMutualFundsValue('R', 8.5, 10, 20);

        this.createBubbleChartElement('Mutual Funds', 'red', 'diamond',
            this.mutualFundsValues, this.mutualFundsXAxisValues, this.mutualFundsYAxisValues, this.mutualFundsNames);
    },
    initRadarChart: function () {
        this.radarChart.setAxisStartAngle(90);
        this.radarChart.setAxisList(this.axisList);
        for (var i = 0; i < this.countries.length; i++) {
            this.createRadarChartElement(
                this.countries[i], this.colors[i], this.inflations[i], this.areas[i], this.populations[i], this.gdps[i], this.growths[i]);
        }
    },
    initDialChart: function () {
        var colorRangeList = new twaver.List(['#FF0000', '#00FF00', '#0000FF']);
        this.dialChart.setStartAngle(0);
        this.dialChart.setEndAngle(180);
        this.dialChart.setColorRangeList(colorRangeList);
        this.createDialChartElement('Hour', '#FF0000', 20, 0.5, 15, 5, 10);
        this.createDialChartElement('Minute', '#00FF00', 50, 0.7, 20, 1, 5);
    },
    createLineChartElement: function (name, color, shape) {
        var element = new twaver.Element();
        element.setName(name);
        element.setStyle('chart.color', color);
        element.setStyle('chart.mark.shape', shape);
        this.lineChart.getDataBox().add(element);
        return element;
    },
    createPieChartElement: function (name, value, color) {
        var element = new twaver.Element();
        element.setName(name);
        element.setStyle('chart.value', value);
        element.setStyle('chart.color', color);
        this.pieChart.getDataBox().add(element);
        return element;
    },
    createBarChartElement: function (name, value, color, values) {
        var element = new twaver.Element();
        element.setName(name);
        element.setStyle('chart.value', value);
        element.setStyle('chart.color', color);
        element.setStyle('chart.values', values);
        this.barChart.getDataBox().add(element);
        return element;
    },
    createBubbleChartElement: function (name, color, shape, values, xAxisValues, yAxisValues, names) {
        var element = new twaver.Element();
        element.setName(name);
        element.setStyle('chart.color', color)
					.setStyle('chart.bubble.shape', shape)
					.setStyle('chart.values', values)
					.setStyle('chart.xaxis.values', xAxisValues)
					.setStyle('chart.yaxis.values', yAxisValues)
					.setStyle('chart.names', names);
        this.bubbleChart.getDataBox().add(element);
        return element;
    },
    createRadarChartElement: function (name, color, inflation, area, population, gdp, growth) {
        var element = new twaver.Element();
        element.setName(name);
        element.setStyle('chart.color', color)
					.setStyle('chart.values', [inflation, area / 1000000, population / 1000000, gdp / 1000000, growth]);
        this.radarChart.getDataBox().add(element);
        return element;
    },
    createDialChartElement: function (name, color, value, raduis, rearExtension, topWidth, baseWidth) {
        var element = new twaver.Node();
        element.setName(name);
        element.setStyle('chart.color', color)
					.setStyle('chart.value', value)
					.setStyle('dialchart.radius', raduis)
					.setStyle('dialchart.rear.extension', rearExtension)
					.setStyle('dialchart.top.width', topWidth)
					.setStyle('dialchart.base.width', baseWidth);
        this.dialChart.getDataBox().add(element);
        return element;
    },
    addEquitiesValue: function (name, ageOfInvestment, returnOnInvestment, investment) {
        this.equitiesValues.splice(this.equitiesValues.length, 0, investment / 3);
        this.equitiesXAxisValues.splice(this.equitiesXAxisValues.length, 0, ageOfInvestment);
        this.equitiesYAxisValues.splice(this.equitiesYAxisValues.length, 0, returnOnInvestment);
        this.equitiesNames.splice(this.equitiesNames.length, 0, name);
    },
    addMutualFundsValue: function (name, ageOfInvestment, returnOnInvestment, investment) {
        this.mutualFundsValues.splice(this.mutualFundsValues.length, 0, investment / 3);
        this.mutualFundsXAxisValues.splice(this.mutualFundsXAxisValues.length, 0, ageOfInvestment);
        this.mutualFundsYAxisValues.splice(this.mutualFundsYAxisValues.length, 0, returnOnInvestment);
        this.mutualFundsNames.splice(this.mutualFundsNames.length, 0, name);
    },
    addValue: function (year, developed, world, developing) {
        this.testList.add(year);
        this.developedList.add(developed);
        this.developingList.add(developing);
        this.worldList.add(world);
    }
});