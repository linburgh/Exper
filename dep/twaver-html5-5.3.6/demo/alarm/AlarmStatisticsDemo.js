AlarmStatisticsDemo = function () {
    this.box = new ElementBox();
    this.network = demo.Util.createDraggableNetwork();
    this.alarmTable = new Table();
    this.alarmTablePane = new TablePane(this.alarmTable);
    this.isInitAlarmTable = false;
};
twaver.Util.ext('AlarmStatisticsDemo', Object, {
    init: function () {
        var alarmOverview = new demo.AlarmOverview(this.box);
        var toolbar = demo.Util.createNetworkToolbar(this.network);
        var mainPane = new BorderPane(this.network, toolbar);
        mainPane.setTopHeight(25);
        this.registImages();
        demo.Util.appendChild(mainPane.getView(), document.getElementById('main'), 0, 0, 0, 0);
        this.alarmTablePane.getView().style.width = '200px';
        this.alarmTablePane.getView().style.height = '200px';
        alarmOverview.getView().style.width = '240px';
        alarmOverview.getView().style.height = '180px';
        demo.Util.appendChild(this.alarmTablePane.getView(), mainPane.getView(), 10, 17, null, null);
        demo.Util.appendChild(alarmOverview.getView(), mainPane.getView(), null, 17, 17, null);
        window.onresize = function (e) { mainPane.invalidate(); };

        this.initAlarmTable();
        this.initBox();
        this.network.setZoom(0.7);
        this.network.setElementBox(this.box);
        if (!twaver.Util.isTouchable) {
            this.network.setInteractions([
						new twaver.vector.interaction.DefaultInteraction(this.network),
						new twaver.vector.interaction.MagnifyInteraction(this.network)
				]);
        }
        this.box.getSelectionModel().addSelectionChangeListener(this.handleSelectionChange, this);

        var element = this.box.getDataById("eric");
        element.getAlarmState().setNewAlarmCount(twaver.AlarmSeverity.WARNING, 5);
        element.getAlarmState().setAcknowledgedAlarmCount(twaver.AlarmSeverity.CLEARED, 1);
        element.getAlarmState().setAcknowledgedAlarmCount(twaver.AlarmSeverity.INDETERMINATE, 5);

        element = this.box.getDataById("sam");
        element.getAlarmState().setNewAlarmCount(twaver.AlarmSeverity.MINOR, 1);
        element.getAlarmState().setAcknowledgedAlarmCount(twaver.AlarmSeverity.MINOR, 3);
        element.getAlarmState().setNewAlarmCount(twaver.AlarmSeverity.CLEARED, 2);
        element.getAlarmState().setAcknowledgedAlarmCount(twaver.AlarmSeverity.WARNING, 1);

        element = this.box.getDataById("todd");
        element.getAlarmState().setAcknowledgedAlarmCount(twaver.AlarmSeverity.INDETERMINATE, 2);
        element.getAlarmState().setNewAlarmCount(twaver.AlarmSeverity.WARNING, 2);
        element.getAlarmState().setNewAlarmCount(twaver.AlarmSeverity.MAJOR, 5);

        element = this.box.getDataById("Veritas");
        element.getAlarmState().setNewAlarmCount(twaver.AlarmSeverity.CRITICAL, 3);
        element.getAlarmState().setNewAlarmCount(twaver.AlarmSeverity.WARNING, 1);

        element = this.box.getDataById("vic");
        element.getAlarmState().setAcknowledgedAlarmCount(twaver.AlarmSeverity.CRITICAL, 2);
        element.getAlarmState().setAcknowledgedAlarmCount(twaver.AlarmSeverity.MAJOR, 1);

        this.box.getSelectionModel().setSelection(element);
    },
    registImages: function () {
        this.registerImage("../images/statistics/center.png");
        this.registerImage("../images/statistics/gather.png");
        this.registerImage("../images/statistics/server.png");
        this.registerImage("../images/statistics/wanjet.png");
        this.registerImage("../images/statistics/wanjet2.png");
    },
    registerImage: function (url) {
        demo.Util.registerImage(url, this.network);
    },
    initAlarmTable: function () {
        this.alarmTable.setEditable(true);
        this.alarmTable.onCellRendered = function (params) {
            if (params.column.getName() === 'Name') {
                params.div.style.backgroundColor = params.data.getClient('AlarmSeverity').color;
            }
        };
        demo.Util.createColumn(this.alarmTable, 'Name', 'Name', 'client', 'string', false).setWidth(100);
        demo.Util.createColumn(this.alarmTable, 'New', 'New', 'client', 'int', true).setWidth(50);
        demo.Util.createColumn(this.alarmTable, 'Ack', 'Ack', 'client', 'int', true).setWidth(50);
        var tableBox = this.alarmTable.getDataBox();
        twaver.AlarmSeverity.severities.forEachReverse(function (alarmSeverity) {
            var data = new twaver.Data(alarmSeverity.name);
            data.setClient('Name', alarmSeverity.name);
            data.setClient('AlarmSeverity', alarmSeverity);
            tableBox.add(data);
        });
        tableBox.addDataPropertyChangeListener(this.handleDataPropertyChange, this);
    },
    handleDataPropertyChange: function (e) {
        if (this.isInitAlarmTable) {
            return;
        }
        var lastElement = this.box.getSelectionModel().getLastData();
        if (lastElement) {
            var data = e.source;
            var severity = data.getClient('AlarmSeverity');
            var count = e.newValue;
            if (e.property.indexOf('New') >= 0) {
                lastElement.getAlarmState().setNewAlarmCount(severity, count);
            } else {
                lastElement.getAlarmState().setAcknowledgedAlarmCount(severity, count);
            }
        }
    },
    initBox: function () {
        var wan = this.createNode("WAN", "subnetwork_image", 203, 277, 'center');
        var center1 = this.createNode(null, "center", 207, 227);
        var center2 = this.createNode(null, "center", 207, 347);
        var wanjet1 = this.createNode(null, "wanjet", 165.5, 170);
        var wanjet2 = this.createNode(null, "wanjet2", 174, 413);
        var gather1 = this.createNode(null, "gather", 209.5, 109.5);
        var gather2 = this.createNode(null, "gather", 209.5, 439.5);
        var siebel = this.createNode("Siebel", "server", 119.5, 34.5, 'top.top');
        var email = this.createNode("Email", "server", 209.5, 34.5, 'top.top');
        var veritas = this.createNode("Veritas", "server", 299.5, 34.5, 'top.top');
        var sam = this.createNode("sam", "node_image", 105, 524);
        var paul = this.createNode("paul", "node_image", 205, 524);
        var todd = this.createNode("todd", "node_image", 305, 524);
        var vic = this.createNode("vic", "node_image", 55, 604);
        var larry = this.createNode("larry", "node_image", 155, 604);
        var joshua = this.createNode("joshua", "node_image", 255, 604);
        var eric = this.createNode("eric", "node_image", 355, 604);

        siebel.setStyle('alarm.position', 'center').setStyle('alarm.direction', 'right');
        email.setStyle('alarm.position', 'center').setStyle('alarm.direction', 'right');
        veritas.setStyle('alarm.position', 'center').setStyle('alarm.direction', 'right');

        this.createLink(gather1, wanjet1);
        this.createLink(wanjet1, center1);
        this.createLink(center1, wan);
        this.createLink(wan, center2);
        this.createLink(center2, wanjet2);
        this.createLink(wanjet2, gather2);

        this.createLink(email, gather1);
        this.createShapeLink(siebel, gather1, { x: 130, y: 120 }, 'left');
        this.createShapeLink(veritas, gather1, { x: 310, y: 120 });

        this.createLink(gather2, paul);
        this.createShapeLink(gather2, sam, { x: 120, y: 480 }, 'left');
        this.createShapeLink(gather2, todd, { x: 320, y: 480 });

        this.createShapeLink(gather2, larry, { x: 170, y: 485 }, 'left').setStyle('link.from.yoffset', 5);
        this.createShapeLink(gather2, joshua, { x: 270, y: 485 }).setStyle('link.from.yoffset', 5);

        this.createShapeLink(gather2, vic, { x: 70, y: 475 }, 'left').setStyle('link.from.yoffset', -5);
        this.createShapeLink(gather2, eric, { x: 370, y: 475 }).setStyle('link.from.yoffset', -5);
    },
    createNode: function (name, image, x, y, position) {
        if (!position) {
            position = 'bottom.bottom';
        }
        var node = new Node(name);
        node.setName(name);
        node.setImage(image);
        node.setStyle('label.position', position);
        node.setStyle('label.color', '#000000');
        node.setLocation(x, y);
        this.box.add(node);
        return node;
    },
    createLink: function (fromNode, toNode, direction) {
        if (!direction) {
            direction = 'right';
        }
        var link = new Link(fromNode, toNode);
        link.setStyle('alarm.direction', direction);
        this.box.add(link);
        return link;
    },
    createShapeLink: function (fromNode, toNode, point, direction) {
        if (!direction) {
            direction = 'right';
        }
        var link = new twaver.ShapeLink(fromNode, toNode);
        link.setStyle('alarm.direction', direction);
        link.addPoint(point);
        this.box.add(link);
        return link;
    },
    handleSelectionChange: function (e) {
        this.alarmTable.cancelEditing();
        if (this.box.getSelectionModel().size() == 1) {
            var alarmState = this.box.getSelectionModel().getLastData().getAlarmState();
            var tableBox = this.alarmTable.getDataBox();

            this.isInitAlarmTable = true;
            twaver.AlarmSeverity.forEach(function (alarmSeverity) {
                var data = tableBox.getDataById(alarmSeverity.name);
                data.setClient('New', alarmState.getNewAlarmCount(alarmSeverity));
                data.setClient('Ack', alarmState.getAcknowledgedAlarmCount(alarmSeverity));
            });
            this.isInitAlarmTable = false;

            this.alarmTablePane.getView().style.display = 'block';
        } else {
            this.alarmTablePane.getView().style.display = 'none';
        }
    }
});