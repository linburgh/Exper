PipeEditorDemo = function () {
    this.box = new ElementBox();
    this.network = demo.Util.createDraggableNetwork(this.box);
    this.tree = new Tree(this.box);
    this.sheet = new PropertySheet(this.box);
};
twaver.Util.ext('PipeEditorDemo', Object, {
    init: function () {
        twaver.SerializationSettings.setClientType("holeIndex", 'number');
        twaver.SerializationSettings.setClientType("innerWidth", 'number');
        twaver.SerializationSettings.setClientType("innerColor", 'string');
        twaver.SerializationSettings.setClientType("holeCount", 'number');
        twaver.SerializationSettings.setClientType("isCenterHole", 'boolean');
        twaver.SerializationSettings.setClientType("cellCounts", 'array.number');
        twaver.SerializationSettings.setClientType("isHorizontal", 'boolean');
        this.registImages();

        var toolbar = demo.Util.createNetworkToolbar(this.network);
        var centerPane = new BorderPane(this.network, toolbar);
        centerPane.setTopHeight(25);
        var mainSplit = new SplitPane(this.tree, centerPane, 'horizontal', 0.3);
        this.sheet.getView().style.width = '250px';
        this.sheet.getView().style.height = '200px';
        demo.Util.appendChild(this.sheet.getView(), centerPane.getView(), 25, 17, null, null);
        demo.Util.appendChild(mainSplit.getView(), document.getElementById('main'), 0, 0, 0, 0);
        this.sheet.setEditable(true);
        this.initSheet();
        if (!twaver.Util.isTouchable) {
            this.network.setEditInteractions();
        }
        window.onresize = function (e) { mainSplit.invalidate(); };

        this.initBox();
    },
    registImages: function () {
        this.registerImage("../images/pipe/pipeHole.png");
        this.registerImage("../images/pipe/roundPipe.png");
        this.registerImage("../images/pipe/squarePipe.png");
    },
    registerImage: function (url) {
        demo.Util.registerImage(url, this.network, this.tree);
    },
    initSheet: function () {
        var propertyBox = this.sheet.getPropertyBox();
        demo.Util.addClientProperty(propertyBox, 'holeIndex', 'Pipe');
        demo.Util.addClientProperty(propertyBox, 'innerWidth', 'Pipe');
        demo.Util.addClientProperty(propertyBox, 'innerColor', 'Pipe');
        demo.Util.addStyleProperty(propertyBox, 'vector.fill.color', 'Pipe');
        demo.Util.addStyleProperty(propertyBox, 'vector.outline.width', 'Pipe');
        demo.Util.addStyleProperty(propertyBox, 'vector.outline.color', 'Pipe');
        var visibleFunc = function (data, sheet) { return data instanceof demo.SquarePipe; };
        demo.Util.addClientProperty(propertyBox, 'cellCounts', 'Square').isVisible = visibleFunc;
        demo.Util.addClientProperty(propertyBox, 'isHorizontal', 'Square').isVisible = visibleFunc;
        visibleFunc = function (data, sheet) { return data instanceof demo.RoundPipe; };
        demo.Util.addClientProperty(propertyBox, 'holeCount', 'Round').isVisible = visibleFunc;
        demo.Util.addClientProperty(propertyBox, 'isCenterHole', 'Round').isVisible = visibleFunc;
    },
    initBox: function () {
        var roundPipe = new demo.RoundPipe();
        roundPipe.setName("RoundPipe");
        var holeCount = 20;
        roundPipe.setClient('holeCount', holeCount);
        roundPipe.setLocation(50, 25);
        roundPipe.setSize(230, 230);
        this.box.add(roundPipe);
        var i = 0;
        for (i = 0; i < holeCount; i++) {
            var roundHole = new demo.RoundPipe();
            roundHole.setIcon("pipeHole");
            roundHole.setStyle('label.position', 'center');
            roundHole.setParent(roundPipe);
            roundHole.setClient('holeIndex', i);
            roundHole.setName('' + i);
            roundHole.setHost(roundPipe);
            this.box.add(roundHole);

            if (i == roundPipe.holeCount - 1) {
                holeCount = 5;
                roundHole.setClient('holeCount', holeCount);
                roundHole.setClient('isCenterHole', false);
                for (var j = 0; j < holeCount; j++) {
                    var child = new demo.RoundPipe();
                    child.setIcon("pipeHole");
                    child.setStyle('vector.fill.color', demo.Util.randomColor());
                    child.setStyle('label.position', 'center');
                    child.setParent(roundHole);
                    child.setClient('holeIndex', j);
                    child.setName('' + j);
                    child.setHost(roundHole);
                    this.box.add(child);
                }
            }
        }

        var squarePipe = new demo.SquarePipe();
        squarePipe.setStyle('vector.outline.width', 2);
        squarePipe.setName("SquarePipe");

        squarePipe.setClient('cellCounts', [3, 4, 5, 6, 5, 3, 3]);
        squarePipe.setLocation(30, 300);
        squarePipe.setSize(340, 200);
        this.box.add(squarePipe);
        for (i = 0, c = squarePipe.getAllCellCount(); i < c; i++) {
            var squareHole = new demo.SquarePipe();
            squareHole.setIcon("pipeHole");
            if (i >= 12 && i <= 17) {
                squareHole.setStyle('vector.fill.color', demo.Util.randomColor());
            }
            squareHole.setStyle('label.position', 'center');
            squareHole.setParent(squarePipe);
            squareHole.setClient('holeIndex', i);
            squareHole.setName('' + i);
            squareHole.setHost(squarePipe);
            this.box.add(squareHole);
        }
    }
});