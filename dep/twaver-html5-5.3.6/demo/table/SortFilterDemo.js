SortFilterDemo = function () {
    this.box = new ElementBox();
    this.network = demo.Util.createDraggableNetwork(this.box);
    this.tree = new Tree(this.box);
    this.table = new Table(this.box);
    this.topDiv = document.createElement('div');
    var label = document.createElement('label');
    label.innerHTML = 'Sort By';
    this.topDiv.appendChild(label);
    var self = this;
    this.sortBy = demo.Util.addComboBox(this.topDiv, ['none', 'state name', 'unemploy/employed', 'female/person'], function () {
        self.sort.call(self);
    }, 'none');
    this.sortDirection = demo.Util.addButton(this.topDiv, '', 'down', function () {
        self.changeSortDirection.call(self);
    });
    this.sortDirection.sortDesc = true;
};
twaver.Util.ext('SortFilterDemo', Object, {
    init: function () {
        var self = this;
        var population = demo.Util.addInput(this.topDiv, 0, '', function () {
            self.table.invalidateModel();
            self.tree.invalidateModel();
            self.network.invalidateElementVisibility();
        });
        var rightPane = new BorderPane(this.tree, this.topDiv, null, this.network);
        rightPane.setTopHeight(40);
        rightPane.setBottomHeight(180);
        var mainSplit = new SplitPane(new TablePane(this.table), rightPane, 'horizontal', 0.7);

        demo.Util.appendChild(mainSplit.getView(), document.getElementById('main'), 0, 0, 0, 0);
        window.onresize = function (e) { mainSplit.invalidate(); };

        this.initTable();
        this.tree.getLabel = function (element) {
            return element.getClient("STATE_ABBR") + " - " + element.getClient("STATE_NAME");
        };
        this.tree.getIcon = function (element) {
            return null;
        };
//        this.network.setMagnifyInteractions();
        this.network.setInteractions([
            new twaver.vector.interaction.DefaultInteraction(this.network),
            new twaver.vector.interaction.MagnifyInteraction(this.network)
        ]);
        this.network.setMovableFunction(function (element) {
            return false;
        });
        this.network.getView().addEventListener('mousemove', function (e) {
            var element = self.network.getElementAt(e);
            if (element != null && !self.box.getSelectionModel().contains(element)) {
                self.box.getSelectionModel().setSelection(element);
            }
        }, false);
        this.box.getSelectionModel().addSelectionChangeListener(function (e) {
            for (var i = 0; i < e.datas.length; i++) {
                var element = e.datas[i];
                if (this.box.getSelectionModel().contains(element)) {
                    element.setStyle('vector.fill.color', '#00FF00');
                    element.setStyle('vector.gradient.color', '#FFFF00');
                    this.currentStateName.htmlText = element.getClient("STATE_ABBR") + "-" + element.getClient("STATE_NAME");
                } else {
                    element.setStyle('vector.fill.color', '#0000FF');
                    element.setStyle('vector.gradient.color', '#FF0000');
                }
            }
        }, this);

        var visibleFunction = function (state) {
            var sum = state.getClient("MALE") + state.getClient("FEMALE");
            return sum > population.value;
        };
        this.table.setVisibleFunction(visibleFunction);
        this.tree.setVisibleFunction(visibleFunction);
        this.network.setVisibleFunction(visibleFunction);

        this.initBox();

        this.sort();
        setTimeout(function () {
            self.network.zoomOverview();
        }, 50);
    },
    initTable: function () {
        this.table.setEditable(true);
        demo.Util.createColumn(this.table, 'State', 'STATE_NAME', 'client').setWidth(150);
        demo.Util.createColumn(this.table, 'Employed', 'EMPLOYED', 'client', 'int', true).setWidth(150);
        demo.Util.createColumn(this.table, 'Unemploy', 'UNEMPLOY', 'client', 'int', true).setWidth(150);
        demo.Util.createColumn(this.table, 'Male', 'MALE', 'client', 'int', true).setWidth(150);
        demo.Util.createColumn(this.table, 'Female', 'FEMALE', 'client', 'int', true).setWidth(150);
    },
    initBox: function () {
        var xml = document.getElementsByTagName("noscript")[0].innerText;
        xml = demo.Util.loadXmlString(xml).documentElement;
        var datas = xml.getElementsByTagName('f');

        var IS_INTERESTED_ATTRIBUTE =
		{
		    EMPLOYED: true,
		    UNEMPLOY: true,
		    MALE: true,
		    FEMALE: true,
		    STATE_NAME: true,
		    STATE_ABBR: true
		};

        for (var i = 0, count = datas.length; i < count; i++) {
            var features = datas[i];
            var node = new twaver.ShapeNode();

            node.setStyle('vector.fill', true)
                    .setStyle('vector.fill.color', '#0000FF')
                    .setStyle('vector.gradient.color', '#FF0000')
                    .setStyle('vector.outline.color', '#FFFFFF')
                    .setStyle('vector.gradient', 'linear.south')
					.setStyle('select.color', '#FFFFFF');

            var j, l, key, value, attribute;
            var attributes = features.getElementsByTagName('a');
            for (j = 0, l = attributes.length; j < l; j++) {
                attribute = attributes[j];
                key = attribute.getAttribute('n');
                if (IS_INTERESTED_ATTRIBUTE[key]) {
                    value = attribute.getAttribute('v');
                    if (key != "STATE_NAME" && key != "STATE_ABBR" && key != 'SUB_REGION') {
                        value = parseFloat(value);
                    }
                    node.setClient(key, value);
                }
            }

            var segments = new twaver.List();
            var points = new twaver.List();
            attributes = features.getElementsByTagName('p');
            for (j = 0, l = attributes.length; j < l; j++) {
                attribute = attributes[j];
                var isMoveTo = attribute.getAttribute('s') == "m";
                segments.add(isMoveTo ? 'moveto' : 'lineto');
                points.add({ x: parseFloat(attribute.getAttribute('x')), y: parseFloat(attribute.getAttribute('y')) });
            }

            node.setSegments(segments);
            node.setPoints(points);
            this.box.add(node);
        }
    },
    changeSortDirection: function (e) {
        if (this.sortDirection.sortDesc) {
            this.sortDirection.src = '../images/toolbar/up.png'
            this.sortDirection.sortDesc = false;
        } else {
            this.sortDirection.src = '../images/toolbar/down.png'
            this.sortDirection.sortDesc = true;
        }
        this.sort();
    },
    sort: function () {
        var sortFunction = null;
        var flag = this.sortDirection.sortDesc ? -1 : 1;
        if (this.sortBy.value == "none") {
            this.box.forEach(function (element) {
                element.setStyle('tree.message', null);
            });
        } else if (this.sortBy.value == "state name") {
            sortFunction = function (state1, state2) {
                var name1 = state1.getClient("STATE_NAME");
                var name2 = state2.getClient("STATE_NAME");
                if (name1 > name2) {
                    return flag;
                } else if (name1 == name2) {
                    return 0;
                } else {
                    return -flag;
                }
            };
            this.box.forEach(function (element) {
                element.setStyle('tree.message', null);
            });
        } else if (this.sortBy.value == "unemploy/employed") {
            sortFunction = function (state1, state2) {
                var e1 = state1.getClient("UNEMPLOY") / state1.getClient("EMPLOYED");
                var e2 = state2.getClient("UNEMPLOY") / state2.getClient("EMPLOYED");
                if (e1 > e2) {
                    return flag;
                } else if (e1 == e2) {
                    return 0;
                } else {
                    return -flag;
                }
            };
            this.box.forEach(function (element) {
                var unemploy = element.getClient("UNEMPLOY");
                var employed = element.getClient("EMPLOYED");
                var percent = unemploy / employed;
                var message = (percent * 100).toFixed(2) + "%";
                element.setStyle('tree.message', message);
                element.setStyle('tree.message.percent', percent);
            });
        } else if (this.sortBy.value == "female/person") {
            sortFunction = function (state1, state2) {
                var e1 = state1.getClient("FEMALE") / (state1.getClient("MALE") + state1.getClient("FEMALE"));
                var e2 = state2.getClient("FEMALE") / (state2.getClient("MALE") + state2.getClient("FEMALE"));
                if (e1 > e2) {
                    return flag;
                } else if (e1 == e2) {
                    return 0;
                } else {
                    return -flag;
                }
            };
            this.box.forEach(function (element) {
                var male = element.getClient("MALE");
                var female = element.getClient("FEMALE");
                var percent = female / (male + female);
                var message = (percent * 100).toFixed(2) + "%";
                element.setStyle('tree.message', message);
                element.setStyle('tree.message.percent', percent);
            });
        }

        this.table.setSortFunction(sortFunction);
        this.tree.setSortFunction(sortFunction);
    }
});