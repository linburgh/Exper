LayerVectorDemo = function () {
    this.box = new ElementBox();
    this.layerBox = this.box.getLayerBox();
    this.network = demo.Util.createDraggableNetwork();
    this.table1 = new Table();
    this.table2 = new Table();
    this.table3 = new Table();
    this.tabPane = new TabPane();
    this.tabPane.setTabRadius(8);
    this.tabPane.setTabGap(5);
    this.tabPane.setSelectBackground('#8080FF');
    this.tabPane.setTabBackground('#C0C0C0');
};
twaver.Util.ext('LayerVectorDemo', Object, {
    init: function () {
        twaver.Util.registerVectorShape('rackT', function (g, x, y, w, h) {
            g.rect(x, y, w, h);
            g.moveTo(x + w / 5 * 4, y);
            g.lineTo(x + w / 5 * 4, y + h);
        });
        demo.SHAPE_TYPE.push('rackT');
        
        var toolbar = demo.Util.createNetworkToolbar(this.network);
        var bottomPane = new BorderPane(this.tabPane, toolbar);
        bottomPane.setTopHeight(25);
        var mainSplit = new SplitPane(this.network, bottomPane, 'vertical', 0.6);
        demo.Util.appendChild(mainSplit.getView(), document.getElementById('main'), 0, 0, 0, 0);
        window.onresize = function (e) { mainSplit.invalidate(); };

        var self = this;
        demo.Util.addButton(toolbar, 'Move selected layers to top', 'top', function () {
            self.layerBox.moveSelectionToTop();
        });
        demo.Util.addButton(toolbar, 'Move selected layers up', 'up', function () {
            self.layerBox.moveSelectionUp();
        });
        demo.Util.addButton(toolbar, 'Move selected layers down', 'down', function () {
            self.layerBox.moveSelectionDown();
        });
        demo.Util.addButton(toolbar, 'Move selected layers to bottom', 'bottom', function () {
            self.layerBox.moveSelectionToBottom();
        });
        this.initTable();
        this.addTab('Basic Properties', this.table1, 120, true);
        this.addTab('Outline and Gradient Properties', this.table2, 200);
        this.addTab('Other Properties', this.table3, 120);
        var visibleFunction = function (layer) {
            return layer != self.layerBox.getDefaultLayer();
        };
        this.table1.setVisibleFunction(visibleFunction);
        this.table2.setVisibleFunction(visibleFunction);
        this.table3.setVisibleFunction(visibleFunction);

        this.layerBox.addDataPropertyChangeListener(function (e) {
            var property = e.property;
            var layer = e.source;
            if (property.indexOf('C:') == 0) {
                self.box.forEachByLayer(function (node) {
                    self.setNodeValue(node, layer, property.substr(2));
                }, layer);
            }
        }, this);

        if (!twaver.Util.isTouchable) {
            this.network.setEditInteractions(false);
        }
        this.network.getSelectionModel().addSelectionChangeListener(function (e) {
            var node = this.network.getSelectionModel().lastData;
            if (node != null) {
                var layer = this.layerBox.getLayerById(node.getLayerId());
                this.layerBox.getSelectionModel().setSelection(layer);
            }
        }, this);

        this.table1.setDataBox(this.layerBox);
        this.table2.setDataBox(this.layerBox);
        this.table3.setDataBox(this.layerBox);

        this.initBox();
        this.network.setElementBox(this.box);
    },
    addTab: function (name, table, width, selected) {
        var tab = new twaver.Tab(name);
        tab.setName(name);
        tab.setIcon(null);
        tab.setView(new TablePane(table));
        tab.setWidth(width);
        this.tabPane.getTabBox().add(tab);
        if (selected) {
            this.tabPane.getTabBox().getSelectionModel().setSelection(tab);
        }
    },
    initTable: function () {
        this.table1.setEditable(true);
        demo.Util.createColumn(this.table1, 'Layer Name', 'name', 'accessor');
        demo.Util.createColumn(this.table1, 'Visible', 'visible', 'accessor', 'boolean', true);
        demo.Util.createColumn(this.table1, 'Movable', 'movable', 'accessor', 'boolean', true);
        demo.Util.createColumn(this.table1, 'Editable', 'editable', 'accessor', 'boolean', true);
        demo.Util.createColumn(this.table1, 'Fill', 'vector.fill', 'client', 'boolean', true);
        demo.Util.createColumn(this.table1, 'Fill Color', 'vector.fill.color', 'client', 'color', true);

        this.table2.setEditable(true);
        demo.Util.createColumn(this.table2, 'Gradient', 'vector.gradient', 'client', 'string', true).setWidth(150);
        demo.Util.createColumn(this.table2, 'Gradient Color', 'vector.gradient.color', 'client', 'color', true).setWidth(100);
        demo.Util.createColumn(this.table2, 'Outline Width', 'vector.outline.width', 'client', 'number', true);
        demo.Util.createColumn(this.table2, 'Outline Color', 'vector.outline.color', 'client', 'color', true);
        demo.Util.createColumn(this.table2, '3D Deep', 'vector.deep', 'client', 'number', true);

        this.table3.setEditable(true);
        demo.Util.createColumn(this.table3, 'Joint Style', 'vector.join', 'client', 'string', true);
        demo.Util.createColumn(this.table3, 'Caps Style', 'vector.cap', 'client', 'string', true);
        demo.Util.createColumn(this.table3, 'Padding', 'vector.padding', 'client', 'number', true);
        demo.Util.createColumn(this.table3, 'Padding Left', 'vector.padding.left', 'client', 'number', true);
        demo.Util.createColumn(this.table3, 'Padding Right', 'vector.padding.right', 'client', 'number', true).setWidth(100);
        demo.Util.createColumn(this.table3, 'Padding Top', 'vector.padding.top', 'client', 'number', true);
        demo.Util.createColumn(this.table3, 'Padding Bottom', 'vector.padding.bottom', 'client', 'number', true).setWidth(100);
    },
    initBox: function () {
        var array = demo.SHAPE_TYPE;
        for (var j = 0; j < array.length; j++) {
            var shape = array[j];
            var outlineWidth = 2;
            if (shape == 'star' || shape == 'rectangle' || shape == 'pentagon' || shape == 'triangle') {
                outlineWidth = -1;
            }

            var gradient = 'radial.northwest';
            if (shape == 'oval') {
                gradient = 'linear.south';
            } else if (shape == 'pentagon' || shape == 'triangle' || shape == 'hexagon') {
                gradient = 'none';
            } else if (shape == 'roundrect' || shape == 'rectangle') {
                gradient = 'spread.east';
            }

            var layer = new twaver.Layer(shape);
            layer.setName(shape);
            layer.setClient('vector.fill', true);
            layer.setClient('vector.fill.color', demo.Util.randomColor());
            layer.setClient('vector.outline.width', outlineWidth);
            layer.setClient('vector.outline.color', '#0000FF');
            layer.setClient('vector.deep', shape == 'rectangle' ? 1 : 0);
            layer.setClient('vector.cap', 'round');
            layer.setClient('vector.join', 'round');
            layer.setClient('vector.gradient', gradient);
            layer.setClient('vector.gradient.color', '#FFFFFF');
            layer.setClient('vector.padding', 0);
            layer.setClient('vector.padding.left', 0);
            layer.setClient('vector.padding.right', 0);
            layer.setClient('vector.padding.top', 0);
            layer.setClient('vector.padding.bottom', 0);
            layer.setClient('vector.outline.pattern', [10, 5]);

            this.layerBox.add(layer);

            for (var i = 0; i < 3; i++) {
                var node = new twaver.Node();
                node.setLayerId(layer.getId());

                if (shape == 'oval') {
                    node.setSize(100, 70);
                } else if (shape == 'hexagon') {
                    node.setSize(80, 70);
                } else if (shape == 'roundrect') {
                    node.setSize(100, 60);
                } else if (shape == 'star') {
                    node.setSize(50, 50);
                } else {
                    node.setSize(70, 70);
                }

                node.setLocation(demo.Util.randomInt(800), demo.Util.randomInt(300));
                node.setStyle('body.type', 'vector');
                node.setStyle('vector.shape', shape);
                this.setNodeValue(node, layer, 'vector.fill');
                this.setNodeValue(node, layer, 'vector.fill.color');
                this.setNodeValue(node, layer, 'vector.outline.width');
                this.setNodeValue(node, layer, 'vector.outline.color');
                this.setNodeValue(node, layer, 'vector.deep');
                this.setNodeValue(node, layer, 'vector.join');
                this.setNodeValue(node, layer, 'vector.cap');
                this.setNodeValue(node, layer, 'vector.gradient');
                this.setNodeValue(node, layer, 'vector.gradient.color');
                this.setNodeValue(node, layer, 'vector.padding');
                this.setNodeValue(node, layer, 'vector.padding.left');
                this.setNodeValue(node, layer, 'vector.padding.right');
                this.setNodeValue(node, layer, 'vector.padding.top');
                this.setNodeValue(node, layer, 'vector.padding.bottom');
                this.setNodeValue(node, layer, 'vector.outline.pattern');

                this.box.add(node);
            }
        }
    },
    setNodeValue: function (node, layer, property) {
        node.setStyle(property, layer.getClient(property));
    }
});