EMSDemo = function () {
    this.box = new ElementBox();
    this.network = demo.Util.createDraggableNetwork();
    this.tree = new Tree();
    this.optionSheet = new PropertySheet();

    this.rootRack = new twaver.Grid();
};
twaver.Util.ext('EMSDemo', Object, {
    init: function () {
        twaver.SerializationSettings.setClientType('increase', 'boolean');
        twaver.SerializationSettings.setClientType('value', 'number');
        this.registImages();
        var overview = new twaver.network.Overview(this.network);
        var toolbar = demo.Util.createNetworkToolbar(this.network);
        var leftSplit = new SplitPane(this.tree, overview, 'vertical', 0.7);
        var rightPane = new BorderPane(this.network, toolbar);
        rightPane.setTopHeight(25);
        var mainSplit = new twaver.controls.SplitPane(leftSplit, rightPane, 'horizontal', 0.2);
        demo.Util.appendChild(mainSplit.getView(), document.getElementById('main'), 0, 0, 0, 0);
        this.optionSheet.getView().style.width = '200px';
        this.optionSheet.getView().style.height = '210px';
        demo.Util.appendChild(this.optionSheet.getView(), rightPane.getView(), 17, 17, null, null);
        window.onresize = function (e) { mainSplit.invalidate(); };

        this.initSheet();
        this.tree.getLabel = function (data) {
            return data.getClient('tree.label') || data.getName();
        };
        this.initBox();
        this.network.setElementBox(this.box);
        this.tree.setDataBox(this.box);
        var self = this;
        setInterval(function () { self.tick(); }, 2000);
    },
    registImages: function () {
        demo.Util.registerImage("../images/toolbar/card_icon.png", this.network, this.tree);
    },
    initSheet: function () {
        this.optionSheet.setEditable(true);
        var propertyBox = this.optionSheet.getPropertyBox();
        demo.Util.addClientProperty(propertyBox, "rack.color");
        demo.Util.addClientProperty(propertyBox, "module.color");
        demo.Util.addClientProperty(propertyBox, "label.color");
        demo.Util.addClientProperty(propertyBox, "system.color");
        demo.Util.addClientProperty(propertyBox, "text.color");
        demo.Util.addClientProperty(propertyBox, "rack.border").setValueType('number');
        demo.Util.addClientProperty(propertyBox, "rack.deep").setValueType('number');
        demo.Util.addClientProperty(propertyBox, "grid.padding").setValueType('number');
        demo.Util.addClientProperty(propertyBox, "KPI.padding").setValueType('number');
        demo.Util.addClientProperty(propertyBox, "cell.deep").setValueType('number');
        demo.Util.addClientProperty(propertyBox, "pane.deep").setValueType('number');

        this.data = new twaver.Element();
        this.data.setClient("rack.color", '#009900');
        this.data.setClient("module.color", '#CC3366');
        this.data.setClient("label.color", '#009999');
        this.data.setClient("system.color", '#330066');
        this.data.setClient("text.color", '#FFFFFF');
        this.data.setClient("rack.border", 20);
        this.data.setClient("rack.deep", 8);
        this.data.setClient("grid.padding", 0);
        this.data.setClient("KPI.padding", 1);
        this.data.setClient("cell.deep", 0);
        this.data.setClient("pane.deep", 6);
        this.optionSheet.getDataBox().add(this.data);
        this.optionSheet.getDataBox().getSelectionModel().setSelection(this.data);
        this.optionSheet.getDataBox().addDataPropertyChangeListener(this.handlePropertyChange, this);
    },
    handlePropertyChange: function (e) {
        var name = demo.Util.getPropertyName(e);
        if (name === 'rack.color') {
            this.rootRack.setStyle('grid.fill.color', e.newValue);
        } else if (name === 'module.color') {
            this.changeColor(e.newValue, 'MODULES');
        } else if (name === 'label.color') {
            this.changeColor(e.newValue, 'LABELS');
        } else if (name === 'system.color') {
            this.changeColor(e.newValue, 'SYSTEMS');
        } else if (name === 'text.color') {
            this.changeTextColor(e.newValue);
        } else if (name === 'rack.border') {
            this.rootRack.setStyle('grid.border', e.newValue);
        } else if (name === 'rack.deep') {
            this.rootRack.setStyle('grid.deep', e.newValue);
        } else if (name === 'grid.padding') {
            this.rootRack.setStyle('grid.padding', e.newValue);
        } else if (name === 'KPI.padding') {
            this.changeKPIPadding(e.newValue);
        } else if (name === 'cell.deep') {
            this.rootRack.setStyle('grid.cell.deep', e.newValue);
        } else if (name === 'pane.deep') {
            this.changePaneDeep(e.newValue);
        }
    },
    initBox: function () {
        this.box.clear();

        this.rootRack = new twaver.Grid("RACK");
        this.rootRack.setName("RACK");
        this.rootRack.setLocation(50, 40);
        this.rootRack.setSize(550, 400);
        this.rootRack.setStyle('grid.fill.color', this.data.getClient("rack.color"));
        this.rootRack.setStyle('grid.border', this.data.getClient("rack.border"));
        this.rootRack.setStyle('grid.row.count', 12);
        this.rootRack.setStyle('grid.column.count', 12);
        this.rootRack.setStyle('grid.padding', this.data.getClient("grid.padding"));
        this.rootRack.setStyle('grid.deep', this.data.getClient("rack.deep"));
        this.rootRack.setStyle('grid.cell.deep', this.data.getClient("cell.deep"));
        this.box.add(this.rootRack);

        var i;
        var dummy = this.createDummy("MODULES");
        for (i = 0; i < 4; i++) {
            var module = this.createPane(dummy);
            module.setName("MODULE " + (i + 1));
            module.setStyle('vector.fill.color', this.data.getClient("module.color"));
            module.setStyle('follower.row.index', 0);
            module.setStyle('follower.column.index', 3 * i);
            module.setStyle('follower.column.span', 3);
        }

        dummy = this.createDummy("LABELS");
        for (i = 0; i < 12; i++) {
            var label = this.createPane(dummy);
            label.setStyle('vector.fill.color', this.data.getClient("label.color"));
            label.setName("C" + i);
            label.setStyle('follower.row.index', 1);
            label.setStyle('follower.column.index', i);
        }

        dummy = this.createDummy("CARDS");
        for (i = 0; i < 12; i++) {
            var card = this.createPane(dummy, true);
            card.setClient('tree.label', "CARD" + i);
            card.setStyle('follower.row.index', 2);
            card.setStyle('follower.column.index', i);
            card.setStyle('follower.row.span', 8);
        }

        dummy = this.createDummy("SYSTEMS");
        for (i = 0; i < 2; i++) {
            var system = this.createPane(dummy);
            system.setStyle('vector.fill.color', this.data.getClient("system.color"));
            system.setName("SYSTEM " + i);
            system.setStyle('follower.row.index', 10);
            system.setStyle('follower.column.index', 6 * i);
            system.setStyle('follower.row.span', 2);
            system.setStyle('follower.column.span', 6);
        }

        this.changeTextColor(this.data.getClient("text.color"));
        this.tree.expandAll();
    },
    createPane: function (parent, isCard) {
        var pane;
        if (isCard) {
            pane = new demo.KPICard();
            pane.setClient('value', demo.Util.randomInt(100));
            pane.setClient('increase', demo.Util.randomBoolean());
            pane.setStyle('follower.padding', this.data.getClient("KPI.padding"));
        } else {
            pane = new twaver.Grid();
            pane.setStyle('label.position', 'center');
            pane.setStyle('body.type', 'vector');
            pane.setStyle('vector.shape', 'rectangle');
            pane.setStyle('vector.gradient', 'none');
            pane.setStyle('vector.deep', this.data.getClient("pane.deep"));
        }
        pane.setIcon("card_icon");
        pane.setHost(this.rootRack);
        pane.setParent(parent);
        pane.setStyle('grid.row.count', 0);
        pane.setStyle('grid.column.count', 0);
        this.box.add(pane);
        return pane;
    },
    createDummy: function (name) {
        var dummy = new twaver.Dummy(name);
        dummy.setName(name);
        dummy.setParent(this.rootRack);
        this.box.add(dummy);
        return dummy;
    },
    tick: function () {
        this.box.forEach(function (element) {
            if (element instanceof demo.KPICard) {
                var value = element.getClient('value');
                if (element.getClient('increase')) {
                    value += 2;
                    if (value > 95) {
                        element.setClient('increase', false);
                    }
                } else {
                    value -= 2;
                    if (value < 5) {
                        element.setClient('increase', true);
                    }
                }
                element.setClient('value', value);
                element.setToolTip("KPI Value:" + value);
            }
        });
    },
    changeColor: function (color, name) {
        var list = this.box.getDataById(name).getChildren();
        for (var i = 0; i < list.size(); i++) {
            var node = list.get(i);
            node.setStyle('vector.fill.color', color);
        }
    },
    changeTextColor: function (color) {
        this.box.forEach(function (element) {
            element.setStyle('label.color', color);
        });
    },
    changePaneDeep: function (deep) {
        this.box.forEach(function (element) {
            if (element.getParent() instanceof twaver.Dummy) {
                element.setStyle('vector.deep', deep);
            }
        });
    },
    changeKPIPadding: function (padding) {
        this.box.forEach(function (element) {
            if (element instanceof demo.KPICard) {
                element.setStyle('follower.padding', padding);
            }
        });
    }
});