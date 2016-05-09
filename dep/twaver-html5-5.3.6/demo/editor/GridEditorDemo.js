GridEditorDemo = function () {
    this.box = new ElementBox();
    this.network = demo.Util.createDraggableNetwork(this.box);
    this.sheet = new PropertySheet(this.box);
    this.sheetBox = this.sheet.getPropertyBox();
    this.visibleFunc = function (data, sheet) { return data instanceof twaver.Grid; };
};
twaver.Util.ext('GridEditorDemo', Object, {
    init: function () {
        this.registImages();
        var toolbar = demo.Util.createNetworkToolbar(this.network);
        var centerPane = new BorderPane(this.network, toolbar);
        centerPane.setTopHeight(25);
        var self = this;
        if (!twaver.Util.isOpera) {
            demo.Util.addDraggableButton(toolbar, 'Rack', 'rack_icon', 'demo.Rack');
            demo.Util.addDraggableButton(toolbar, 'Shelf', 'shelf_icon', 'demo.Shelf');
            demo.Util.addDraggableButton(toolbar, 'Slot', 'slot_icon', 'demo.Slot');
            demo.Util.addDraggableButton(toolbar, 'Card', 'card_icon', 'demo.Card');
            demo.Util.addDraggableButton(toolbar, 'Port', 'port_icon', 'demo.Port');
            demo.Util.addDraggableButton(toolbar, 'LED', 'led_icon', 'demo.LED');
            demo.Util.addDraggableButton(toolbar, 'Text', 'text_icon', 'demo.Text');
        } else {
            demo.Util.addButton(toolbar, 'Rack', 'rack_icon', function () { self.network.setCreateElementInteractions(demo.Rack); });
            demo.Util.addButton(toolbar, 'Shelf', 'shelf_icon', function () { self.network.setCreateElementInteractions(demo.Shelf); });
            demo.Util.addButton(toolbar, 'Slot', 'slot_icon', function () { self.network.setCreateElementInteractions(demo.Slot); });
            demo.Util.addButton(toolbar, 'Card', 'card_icon', function () { self.network.setCreateElementInteractions(demo.Card); });
            demo.Util.addButton(toolbar, 'Port', 'port_icon', function () { self.network.setCreateElementInteractions(demo.Port); });
            demo.Util.addButton(toolbar, 'LED', 'led_icon', function () { self.network.setCreateElementInteractions(demo.LED); });
            demo.Util.addButton(toolbar, 'Text', 'text_icon', function () { self.network.setCreateElementInteractions(demo.Text); });
        }

        this.sheet.getView().style.width = '300px';
        this.sheet.getView().style.height = '200px';
        demo.Util.appendChild(this.sheet.getView(), centerPane.getView(), 25, 17, null, null);
        demo.Util.appendChild(centerPane.getView(), document.getElementById('main'), 0, 0, 0, 0);
        this.sheet.setEditable(true);
        this.initSheet();
        this.network.addInteractionListener(this.handleInteraction, this);
        window.onresize = function (e) { centerPane.invalidate(); };

        this.initBox();
    },
    registImages: function () {
        this.registerImage("../images/toolbar/rack_icon.png");
        this.registerImage("../images/toolbar/shelf_icon.png");
        this.registerImage("../images/toolbar/slot_icon.png");
        this.registerImage("../images/toolbar/card_icon.png");
        this.registerImage("../images/toolbar/port_icon.png");
        this.registerImage("../images/toolbar/led_icon.png");
        this.registerImage("../images/toolbar/text_icon.png");
        this.registerImage("../images/element/port_image.png");
    },
    registerImage: function (url) {
        demo.Util.registerImage(url, this.network);
    },
    initSheet: function () {
        this.addGridProperty('grid.row.count');
        this.addGridProperty('grid.column.count');
        this.addGridProperty('grid.row.percents');
        this.addGridProperty('grid.column.percents');
        this.addGridProperty('grid.border');
        this.addGridProperty('grid.padding');
        this.addGridProperty('grid.deep');
        this.addGridProperty('grid.cell.deep');
        this.addGridProperty('grid.fill');
        this.addGridProperty('grid.fill.color');
        this.addCellProperty('follower.row.index');
        this.addCellProperty('follower.column.index');
        this.addCellProperty('follower.row.span');
        this.addCellProperty('follower.column.span');
        this.addCellProperty('follower.padding');
    },
    addGridProperty: function (propertyName) {
        var property = demo.Util.addStyleProperty(this.sheetBox, propertyName, 'Grid Properties');
        property.isVisible = this.visibleFunc;
        return property;
    },
    addCellProperty: function (propertyName) {
        var property = demo.Util.addStyleProperty(this.sheetBox, propertyName, 'Cell Properties');
        return property;
    },
    initBox: function () {
        var grid = new twaver.Grid();
        grid.setStyle('grid.border', 1);
        grid.setStyle('grid.deep', 1);
        grid.setStyle('grid.column.count', 4);
        grid.setStyle('grid.row.count', 4);
        grid.setSize(250, 200);
        grid.setLocation(20, 30);
        this.box.add(grid);

        grid = new twaver.Grid();
        grid.setStyle('grid.border', 1);
        grid.setStyle('grid.deep', 1);
        grid.setStyle('grid.cell.deep', -2);
        grid.setStyle('grid.column.count', 4);
        grid.setStyle('grid.row.count', 4);
        grid.setStyle('grid.row.percents', [0.1, 0.2, 0.3, 0.4]);
        grid.setSize(250, 200);
        grid.setLocation(300, 30);
        this.box.add(grid);

        grid = new twaver.Grid();
        grid.setStyle('grid.padding', 1);
        grid.setStyle('grid.cell.deep', 1);
        grid.setStyle('grid.column.count', 4);
        grid.setStyle('grid.row.count', 4);
        grid.setStyle('grid.column.percents', [0.1, 0.2, 0.3, 0.4]);
        grid.setSize(250, 200);
        grid.setLocation(20, 250);
        this.box.add(grid);

        grid = new twaver.Grid();
        grid.setStyle('grid.border', 1);
        grid.setStyle('grid.deep', -1);
        grid.setStyle('grid.padding', 1);
        grid.setStyle('grid.cell.deep', -1);
        grid.setStyle('grid.column.count', 4);
        grid.setStyle('grid.row.count', 4);
        grid.setStyle('grid.row.percents', [0.1, 0.2, 0.3, 0.4]);
        grid.setStyle('grid.column.percents', [0.1, 0.2, 0.3, 0.4]);
        grid.setSize(250, 200);
        grid.setLocation(300, 250);
        this.box.add(grid);

        var rack = new demo.Rack();
        rack.setLocation(20, 470);
        rack.setSize(530, 70);
        this.box.add(rack);

        var shelf = new demo.Shelf();
        shelf.setStyle('grid.row.count', 1);
        shelf.setStyle('grid.column.count', 4);
        shelf.setLocation(rack.getX() + 10, rack.getY() + 10);
        shelf.setSize(rack.getWidth() - 20, rack.getHeight() - 20);
        shelf.setHost(rack);
        shelf.setParent(rack);
        this.box.add(shelf);

        for (var i = 0; i < 4; i++) {
            var slot = new demo.Slot();
            slot.setStyle('follower.row.index', 0);
            slot.setStyle('follower.column.index', i);
            slot.setHost(shelf);
            slot.setParent(shelf);
            this.box.add(slot);

            var card = new demo.Card();
            card.setHost(slot);
            card.setParent(slot);
            this.box.add(card);

            var center = card.getCenterLocation();
            var port = new demo.Port();
            port.setLocation(center.x - 50, center.y - 16);
            port.setHost(card);
            port.setParent(card);
            this.box.add(port);

            port = new demo.Port();
            port.setLocation(center.x - 10, center.y - 16);
            port.setHost(card);
            port.setParent(card);
            this.box.add(port);

            var led = new demo.LED();
            led.setLocation(center.x + 30, center.y - 10);
            if (i === 1) {
                led.setStyle('vector.fill.color', '#FF0000');
            } else if (i === 2) {
                led.setStyle('vector.fill.color', '#0000FF');
            } else if (i === 3) {
                led.setStyle('vector.fill.color', '#FFFF00');
            }
            led.setHost(card);
            led.setParent(card);
            this.box.add(led);
        }
    },
    handleInteraction: function (e) {
        if (e.kind == 'lazyMoveEnd' || e.kind == 'liveMoveEnd') {
            this.processHost(this.box.getSelectionModel().getLastData(), e.event);
        }
    },
    processHost: function (follower, event) {
        if (follower == null) {
            return;
        }
        follower.setHost(null);
        follower.setParent(this.network.getCurrentSubNetwork());
        var point = this.network.getLogicalPoint(event);
        this.box.forEachByLayerReverse(function (element) {
            if (follower === element || !this.network.isVisible(element)) {
                return true;
            }
            if (element instanceof Node && !twaver.Util.containsPoint(element.getRect(), point)) {
                return true;
            }
            if (element instanceof twaver.Grid && element.getHost() !== follower) {
                var cellObject = element.getCellObject(point);
                if (cellObject != null) {
                    follower.setHost(element);
                    follower.setParent(element);
                    follower.setStyle('follower.row.index', cellObject.rowIndex);
                    follower.setStyle('follower.column.index', cellObject.columnIndex);
                    return false;
                }
            }
            if ((element instanceof twaver.Follower) && element.getHost() != follower) {
                follower.setHost(element);
                follower.setParent(element);
                return false;
            }
            return true;
        }, null, this);
    }
});