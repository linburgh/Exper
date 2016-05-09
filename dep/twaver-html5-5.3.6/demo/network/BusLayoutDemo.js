BusLayoutDemo = function () {
    this.box = new ElementBox();
    this.network = demo.Util.createDraggableNetwork();
    this.bus = new twaver.Bus();
    this.busNodeCount = 16;
};
twaver.Util.ext('BusLayoutDemo', Object, {
    init: function () {
        var self = this;
        this.registImages();
        var toolbar = demo.Util.createNetworkToolbar(this.network);
        var main = document.getElementById('main');
//        demo.Util.appendChild(toolbar, main, 0, 0, null, 0);
        var borderBane = new BorderPane(this.network, toolbar);
        demo.Util.appendChild(borderBane.getView(), main, 25, 0, 0, 0);
        demo.Util.addButton(toolbar, "Reload", 'refresh', function () { self.refresh(); });

        this.initBox();
        this.refresh();
        this.network.setElementBox(this.box);
        this.network.addPropertyChangeListener(function (e) {
            if (e.property === "zoom") {
                this.refresh();
            }
        }, this);
        window.onresize = function (e) { self.refresh(); };
    },
    registImages: function () {
        this.registerImage("../images/os/centos.png");
        this.registerImage("../images/os/debian.png");
        this.registerImage("../images/os/linux.png");
        this.registerImage("../images/os/solaris.png");
    },
    registerImage: function (url) {
        demo.Util.registerImage(url, this.network);
    },
    initBox: function () {
        this.bus.setStyle('vector.outline.width', 8);
        this.bus.setStyle('vector.outline.color', '#00AF00');
        this.bus.setStyle('bus.style', 'south');
        this.box.add(this.bus);

        for (var i = 0; i < this.busNodeCount; i++) {
            var id = "10.0.0." + i;
            var node = new twaver.Node(id);
            node.setName(id);
            var index = i % 4;
            if (index == 0) {
                node.setImage("centos");
            } else if (index == 1) {
                node.setImage("debian");
            } else if (index == 2) {
                node.setImage("linux");
            } else if (index == 3) {
                node.setImage("solaris");
            }
            this.box.add(node);

            var link = new twaver.Link(node, this.bus);
            link.setStyle('link.width', 2);
            link.setStyle('link.color', '#AFAF00');
            this.box.add(link);
        }
    },
    refresh: function () {
        var lastWidth = document.documentElement.clientWidth;
        var margin = 40;
        var wGap = 110;
        var hGap = 120;

        var width = Math.max(margin * 2, lastWidth / this.network.getZoom() - margin * 2);
        var columnCount = Math.max(3, Math.floor(width / wGap));
        wGap = width / columnCount;
        var rowCount = Math.floor(this.busNodeCount / (columnCount - 1));
        if (rowCount * (columnCount - 1) < this.busNodeCount) {
            rowCount++;
        }

        this.bus.getPoints().clear();

        var count = 0;
        var x = 0;
        var y = 0;

        this.bus.getPoints().add({ x: margin, y: hGap + 15 });
        this.bus.getPoints().add({ x: margin, y: hGap - 15 });
        for (var i = 0; i < rowCount; i++) {
            y = hGap * (i + 1);
            if (i % 2 == 0) {
                this.bus.getPoints().add({ x: margin, y: y });
                this.bus.getPoints().add({ x: margin + width, y: y });
            } else {
                this.bus.getPoints().add({ x: margin + width, y: y });
                this.bus.getPoints().add({ x: margin, y: y });
            }
            y -= hGap / 2 - 5;
            for (var k = 1; k < columnCount; k++) {
                var node = this.box.getDataById("10.0.0." + count++);
                if (node == null) {
                    continue;
                }
                if (i % 2 == 0) {
                    x = margin + k * wGap;
                } else {
                    x = margin + width - k * wGap;
                }
                node.setCenterLocation(x, y);
            }
        }
        var point = this.bus.getPoints().get(this.bus.getPoints().size() - 1);
        this.bus.getPoints().add({ x: point.x, y: point.y + 15 });
        this.bus.getPoints().add({ x: point.x, y: point.y - 15 });
        this.bus.firePointsChange();
    }
});