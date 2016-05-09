MatrixDemo = function () {
    this.box = new ElementBox();
    this.network = demo.Util.createDraggableNetwork(this.box);
    this.sheet = new PropertySheet();
    this.titlePane = new TitlePane(this.sheet, '');
    this.finderByTAG = new twaver.QuickFinder(this.box, 'Tag', 'client');
    this.finderByBID = new twaver.QuickFinder(this.box, 'businessID', 'client');

    this.fillColor = 0x2877A8;
    this.fillAlpha = 1;
    this.increase = false;
};
twaver.Util.ext('MatrixDemo', Object, {
    init: function () {
        var self = this;
        var toolbar = demo.Util.createNetworkToolbar(this.network);
        var centerPane = new BorderPane(this.network, toolbar);
        centerPane.setTopHeight(25);
        var main = document.getElementById('main');
        demo.Util.appendChild(centerPane.getView(), main, 0, 0, 0, 0);
        demo.Util.addButton(toolbar, 'Create Group', 'group_icon', function () { self.createGroup(); });
        demo.Util.addButton(toolbar, 'Start', null, function () { self.initBox(true); });
        this.titlePane.getView().style.width = '280px';
        this.titlePane.getView().style.height = '310px';
        demo.Util.appendChild(this.titlePane.getView(), main, 25, 17, null, null);
        this.initSheet();
        window.onresize = function (e) { centerPane.invalidate(); };

        this.network.setVisibleFunction(function (element) {
            if (self.data.getClient('hide.link') && element instanceof twaver.Link) {
                return false;
            }
            if (!self.data.getClient('NONE') && element.getAlarmState().isEmpty()) {
                return false;
            }
            if (!self.data.getClient('INDETERMINATE') && element.getAlarmState().getAlarmCount(twaver.AlarmSeverity.INDETERMINATE) != 0) {
                return false;
            }
            if (!self.data.getClient('WARNING') && element.getAlarmState().getAlarmCount(twaver.AlarmSeverity.WARNING) != 0) {
                return false;
            }
            if (!self.data.getClient('MINOR') && element.getAlarmState().getAlarmCount(twaver.AlarmSeverity.MINOR) != 0) {
                return false;
            }
            if (!self.data.getClient('MAJOR') && element.getAlarmState().getAlarmCount(twaver.AlarmSeverity.MAJOR) != 0) {
                return false;
            }
            if (!self.data.getClient('CRITICAL') && element.getAlarmState().getAlarmCount(twaver.AlarmSeverity.CRITICAL) != 0) {
                return false;
            }
            return true;
        });

        this.network.getLabel = function (element) {
            if (self.data.getClient('hide.label')) {
                return null;
            } else if (element instanceof demo.MatrixNode) {
                return "TAG(" + element.getClient('Tag') + ") BID(" + element.getClient('businessID') + ")";
            } else {
                return element.getName();
            }
        };

        this.network.getAlarmLabel = function (element) {
            var severity = element.getAlarmState().getHighestNewAlarmSeverity();
            if (!self.data.getClient('hide.alarm') && severity != null) {
                var label = element.getAlarmState().getNewAlarmCount(severity) + severity.nickName;
                if (element.getAlarmState().hasLessSevereNewAlarms()) {
                    label += "+";
                }
                return label;
            }
            return null;
        };

        this.network.getSelectionModel().addSelectionChangeListener(function (e) {
            e.datas.forEach(function (element) {
                var color = demo.Util.createColor(this.fillColor, this.fillAlpha);
                if (element instanceof demo.MatrixNode) {
                    if (self.box.getSelectionModel().contains(element)) {
                        element.setStyle('body.type', 'default.vector');
                        element.setStyle('vector.fill.color', color);
                    } else {
                        element.setStyle('body.type', 'default');
                    }
                }
            }, this);
            if (this.network.getSelectionModel().size() > 0) {
                if (!this.timer) {
                    this.timer = setInterval(function () { self.tick.call(self); }, 300);
                }
            } else {
                window.clearInterval(this.timer);
                this.timer = null;
            }
        }, this);

//        this.network.setRemoveElementUIOnInvisible(true);
        this.initBox(false);
    },
    initSheet: function () {
        this.sheet.setEditable(true);
        var propertyBox = this.sheet.getPropertyBox();
        demo.Util.addClientProperty(propertyBox, "row.count").setValueType('int');
        demo.Util.addClientProperty(propertyBox, "column.count").setValueType('int');
        demo.Util.addClientProperty(propertyBox, "hide.link").setValueType('boolean');
        demo.Util.addClientProperty(propertyBox, "hide.label").setValueType('boolean');
        demo.Util.addClientProperty(propertyBox, "hide.alarm").setValueType('boolean');
        demo.Util.addClientProperty(propertyBox, "NONE").setValueType('boolean');
        demo.Util.addClientProperty(propertyBox, "INDETERMINATE").setValueType('boolean');
        demo.Util.addClientProperty(propertyBox, "WARNING").setValueType('boolean');
        demo.Util.addClientProperty(propertyBox, "MINOR").setValueType('boolean');
        demo.Util.addClientProperty(propertyBox, "MAJOR").setValueType('boolean');
        demo.Util.addClientProperty(propertyBox, "CRITICAL").setValueType('boolean');
        demo.Util.addClientProperty(propertyBox, "remove.on.hidden").setValueType('boolean');
        demo.Util.addClientProperty(propertyBox, "no.agent.visible").setValueType('boolean');
        demo.Util.addClientProperty(propertyBox, "lookup.by.BID").setValueType('int');
        demo.Util.addClientProperty(propertyBox, "lookup.by.TAG").setValueType('int');

        this.data = new twaver.Element();
        this.data.setClient("row.count", 5);
        this.data.setClient("column.count", 5);
        this.data.setClient("hide.link", false);
        this.data.setClient("hide.label", false);
        this.data.setClient("hide.alarm", false);
        this.data.setClient("NONE", true);
        this.data.setClient("INDETERMINATE", true);
        this.data.setClient("WARNING", true);
        this.data.setClient("MINOR", true);
        this.data.setClient("MAJOR", true);
        this.data.setClient("CRITICAL", true);
        this.data.setClient("remove.on.hidden", true);
        this.data.setClient("no.agent.visible", this.network.isNoAgentLinkVisible());
        this.data.setClient("lookup.by.BID", '');
        this.data.setClient("lookup.by.TAG", '');
        this.sheet.getDataBox().add(this.data);
        this.sheet.getDataBox().getSelectionModel().setSelection(this.data);
        this.sheet.getDataBox().addDataPropertyChangeListener(this.handlePropertyChange, this);
    },
    handlePropertyChange: function (e) {
        var name = demo.Util.getPropertyName(e);
        if (name === 'hide.link' || name === 'NONE' || name === 'INDETERMINATE' || name === 'WARNING'
                    || name === 'MINOR' || name === 'MAJOR' || name === 'CRITICAL') {
            this.network.invalidateElementVisibility();
        } else if (name === 'hide.label' || name === 'hide.alarm') {
            this.network.invalidateElementUIs();
        } else if (name === 'remove.on.hidden') {
            this.network.setRemoveElementUIOnInvisible(e.newValue);
        } else if (name === 'no.agent.visible') {
            this.network.setNoAgentLinkVisible(e.newValue);
            this.network.invalidateElementUIs(true);
        } else if (name === 'lookup.by.BID') {
            this.lookup(this.finderByBID, e.newValue);
        } else if (name === 'lookup.by.TAG') {
            this.lookup(this.finderByTAG, e.newValue);
        }
    },
    initBox: function (showMessage) {
        this.box.clear();

        var x = this.data.getClient('column.count');
        var y = this.data.getClient('row.count');
        var gap = 180;

        //create nodes
        var nodeCounter = 0;
        var time = new Date().getTime();
        for (var nodeColumn = 0; nodeColumn < x; nodeColumn++) {
            for (var nodeRow = 0; nodeRow < y; nodeRow++) {
                var node = new demo.MatrixNode("node-" + nodeColumn + "-" + nodeRow);
                node.setStyle('image.padding', -10);
                node.setSize(52, 52);

                node.setStyle('vector.shape', 'circle');
                node.setStyle('vector.gradient', 'radial.center');
                node.setStyle('vector.gradient.color', 'rgba(255, 255, 255, 0.5)');
                node.setStyle('vector.fill', true);
                node.setStyle('vector.fill.color', '#' + this.fillColor);

                node.setStyle('label.color', '#0000FF');
                node.setClient('Tag', nodeColumn * x + nodeRow);
                node.setClient('businessID', demo.Util.randomInt(100));
                node.setLocation(gap * (nodeColumn + 1), gap * (nodeRow + 1));
                this.box.add(node);
                nodeCounter++;
            }
        }

        var message = "Create " + nodeCounter + " nodes, time cost: " + (new Date().getTime() - time) + " ms";

        time = new Date().getTime();
        var linkCounter = 0;
        var linkWidth = 5;
        //create links.
        for (var i = 0; i < x; i++) {
            for (var j = 0; j < y; j++) {
                var from, to, link;
                if (i > 0) {
                    from = this.box.getDataById("node-" + i + "-" + j);
                    to = this.box.getDataById("node-" + (i - 1) + "-" + j);
                    link = new twaver.Link(from, to);
                    link.setStyle('link.width', linkWidth);
                    this.box.add(link);
                    linkCounter++;
                }
                if (j > 0) {
                    from = this.box.getDataById("node-" + i + "-" + j);
                    to = this.box.getDataById("node-" + i + "-" + (j - 1));
                    link = new twaver.Link(from, to);
                    link.setStyle('link.width', linkWidth);
                    this.box.add(link);
                    linkCounter++;
                }
            }
        }

        message += "\nCreate " + linkCounter + " links, time cost: " + (new Date().getTime() - time) + " ms";

        time = new Date().getTime();
        var alarmCounter = 0;

        this.box.forEach(function (element) {
            if (demo.Util.randomBoolean()) {
                element.getAlarmState().increaseNewAlarm(demo.Util.randomSeverity(), demo.Util.randomInt(5) + 1);
                alarmCounter++;
            }
        });

        message += "\nCreate " + alarmCounter + " alarms, time cost: " + (new Date().getTime() - time) + " ms";

        this.titlePane.setTitle("Node:" + nodeCounter + " Link:" + linkCounter + " Alarm:" + alarmCounter);

        if (showMessage) {
            alert(message);
        }

        this.network.zoomOverview(true);
    },
    tick: function () {
        if (this.increase) {
            this.fillAlpha += 0.2
            if (this.fillAlpha > 1) {
                this.fillAlpha = 1;
                this.increase = false;
            }
        } else {
            this.fillAlpha -= 0.2
            if (this.fillAlpha < 0) {
                this.fillAlpha = 0;
                this.increase = true;
            }
        }
        var color = demo.Util.createColor(this.fillColor, this.fillAlpha);
        this.box.getSelectionModel().getSelection().forEach(function (element) {
            if (element instanceof demo.MatrixNode) {
                element.setStyle('vector.fill.color', color);
            }
        });
    },
    lookup: function (finder, text) {
        this.box.getSelectionModel().clearSelection();
        var elements = finder.find(text).toList(this.network.isVisible, this.network);
        if (elements != null && elements.size() > 0) {
            var fistElement = elements.get(0);
            this.box.getSelectionModel().setSelection(elements);
            this.network.centerByLogicalPoint(fistElement.getX(), fistElement.getY(), true);
        }
    },
    createGroup: function () {
        if (this.box.getSelectionModel().size() == 0) {
            alert("No Selection");
        } else {
            var group = new twaver.Group();
            group.setStyle('group.fill.color', demo.Util.randomColor());
            group.setStyle('group.shape', 'oval');
            group.setExpanded(false);
            this.box.add(group);

            this.box.getSelectionModel().getSelection().forEach(function (element) {
                if (element instanceof twaver.Node) {
                    group.addChild(element);
                }
            });
        }
    }
});