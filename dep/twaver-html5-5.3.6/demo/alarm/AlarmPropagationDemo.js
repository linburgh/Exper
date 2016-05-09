AlarmPropagationDemo = function () {
    this.box = new ElementBox();
    this.network = demo.Util.createDraggableNetwork();
    this.tree = new Tree();
};
twaver.Util.ext('AlarmPropagationDemo', Object, {
    init: function () {
        var overview = new twaver.vector.Overview(this.network);
        demo.Util.initOverviewPopupMenu(overview);
        var leftSplit = new SplitPane(this.tree, overview, 'vertical', 0.7);
//        var rightDiv = document.createElement('div');
        this.registImages();
        var toolbar = demo.Util.createNetworkToolbar(this.network);
        var borderBane = new BorderPane(this.network, toolbar);
        var mainSplit = new SplitPane(leftSplit, borderBane, 'horizontal', 0.3);
//        demo.Util.appendChild(toolbar, rightDiv, 0, 0, null, 0);
//        demo.Util.appendChild(this.network.getView(), rightDiv, 25, 0, 0, 0);
        demo.Util.appendChild(mainSplit.getView(), document.getElementById('main'), 0, 0, 0, 0);
//        network.adjustBounds({ x: 0, y: 0, width: 1200, height: 800 });
        window.onresize = function (e) { mainSplit.invalidate(); };
        this.initBox();
        this.tree.expandAll();
    },
    registImages: function () {
        this.registerImage("../images/propagation/portDownImage.png");
        this.registerImage("../images/propagation/portUpImage.png");
        this.registerImage("../images/propagation/rackImage.png");
        this.registerImage("../images/propagation/server1.png");
        this.registerImage("../images/propagation/server2.png");
        this.registerImage("../images/propagation/server3.png");
        this.registerImage("../images/propagation/server4.png");
        this.registerImage("../images/toolbar/rack_icon.png");

        this.registerImage("../images/attachment/att1.png");
        this.registerImage("../images/attachment/att2.png");
        this.registerImage("../images/attachment/att3.png");
        this.registerImage("../images/attachment/att4.png");
        this.registerImage("../images/attachment/att5.png");
        this.registerImage("../images/attachment/att6.png");
        this.registerImage("../images/attachment/att7.png");
        this.registerImage("../images/attachment/att8.png");
    },
    registerImage: function (url) {
        demo.Util.registerImage(url, this.network, this.tree);
    },
    initBox: function () {
        this.network.setElementBox(this.box);
        this.tree.setDataBox(this.box);

        this.tree.getLabel = function (data) {
            return data.getClient('tree.name') || data.getName();
        };

        var server1 = new twaver.SubNetwork();
        server1.setName("server1");
        server1.setImage("server1");
        server1.setLocation(80, 80);
        server1.setStyle('icons.names', ["att5", "att6", "att7", "att8"]);
        server1.setStyle('icons.position', 'bottomright.topright');
        server1.setStyle('icons.orientation', 'top');
        server1.setStyle('icons.xoffset', 5);

        var server2 = new Node();
        server2.setName("server2");
        server2.setImage("server2");
        server2.setLocation(300, 300);
        server2.setStyle('alarm.position', 'center');
        server2.setStyle('alarm.yoffset', -20);
        server2.getAlarmState().setNewAlarmCount(twaver.AlarmSeverity.INDETERMINATE, 3);
        server2.getAlarmState().setAcknowledgedAlarmCount(twaver.AlarmSeverity.WARNING, 1);

        var server3 = new Node();
        server3.setName("server3");
        server3.setLocation(500, 380);
        server3.setImage("server3");
        server3.setStyle('outer.color', '#FF00FF');
        server3.setStyle('outer.width', 3);
        server3.setStyle('outer.padding', 10);
        server3.setStyle('outer.padding.bottom', 10);
        server3.setStyle('outer.shape', 'roundrect');

        var server4 = new Node();
        server4.setName("server4");
        server4.setLocation(500, 250);
        server4.setImage("server4");
        server4.setStyle('inner.color', '#0000FF');

        var group = new twaver.Group("group");
        group.addChild(server2);
        group.addChild(server3);
        group.addChild(server4);
        group.setExpanded(true);
        group.setStyle('outer.shape', 'oval');
        group.setStyle('group.shape', 'oval');
        group.setStyle('group.gradient', 'radial.northeast');
        group.setStyle('group.padding', 10);
        group.setStyle('body.type', 'vector');
        group.setStyle('vector.shape', 'oval');
        group.setStyle('vector.gradient', 'radial.northeast');

        var link = new Link(server1, server2);
        link.setStyle('link.width', 10);
        link.setStyle('link.color', '#00FF00');
        link.setStyle('icons.names', ["att1", "att2", "att3", "att4"]);
        link.setStyle('icons.colors', ['#FF0000', '#00FF00', null, '#FFFF00']);
        link.setStyle('icons.position', 'center');

        this.box.add(server1);
        this.box.add(server2);
        this.box.add(server3);
        this.box.add(server4);
        this.box.add(group);
        this.box.add(link);

        var rack = new Node();
        rack.setName("Rack");
        rack.setLocation(50, 50);
        rack.setIcon("rack_icon");
        rack.setImage("rackImage");
        server1.addChild(rack);
        this.box.add(rack);

        for (var i = 0; i < 4; i++) {
            var dummy = new twaver.Dummy();
            dummy.setName("module" + i);
            dummy.setParent(rack);
            this.box.add(dummy);

            for (var index = 0; index < 4; index++) {
                var port = new twaver.Follower(i + "-" + index);
                var x;
                var y;
                if (i % 2 == 0) {
                    x = 210 + index * 24;
                } else {
                    x = 319 + index * 24;
                }
                if (i < 2) {
                    y = 16;
                    port.setIcon("portUpImage");
                    port.setImage("portUpImage");
                } else {
                    y = 37;
                    port.setIcon("portDownImage");
                    port.setImage("portDownImage");
                }
                x += rack.getX();
                y += rack.getY();
                port.setHost(rack);
                port.setLocation(x, y);
                port.setClient('tree.name', "port:" + i + "-" + index);
                dummy.addChild(port);
                this.box.add(port);
            }
        }

        this.box.getDataById("0-0").getAlarmState().setNewAlarmCount(twaver.AlarmSeverity.CRITICAL, 3);
        this.box.getDataById("3-3").getAlarmState().setNewAlarmCount(twaver.AlarmSeverity.MINOR, 2);
    }
});