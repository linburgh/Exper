ChassisDemo = function () {
    this.box = new ElementBox();
    this.network = demo.Util.createDraggableNetwork();
    this.ports = new twaver.List();
    this.cards = new twaver.List();
};
twaver.Util.ext('ChassisDemo', Object, {
    init: function () {
        this.registImages();
        var toolbar = demo.Util.createNetworkToolbar(this.network);
        var borderBane = new BorderPane(this.network, toolbar);
        var main = document.getElementById('main');
//        demo.Util.appendChild(toolbar, main, 0, 0, null, 0);
        demo.Util.appendChild(borderBane.getView(), main, 25, 0, 0, 0);
        demo.Util.addButton(toolbar, "Reload", 'refresh', function () { self.initBox(); });
        var movable = demo.Util.addCheckBox(toolbar, false, "Movable");

        this.initBox();
        this.network.setElementBox(this.box);

        this.network.setMovableFunction(function (element) {
            return movable.checked;
        });

        this.network.setVisibleFunction(function (element) {
            if (element.getClient("hidden")) {
                return false;
            }
            if (element.getParent() && element.getParent().getClient("hidden")) {
                return false;
            }
            return true;
        });
        var self = this;
        setInterval(function () { self.tick(); }, 1500);
    },
    registImages: function () {
        this.registerImage("../images/chassis/bolt.png");
        for (var i = 1; i <= 10; i++) {
            this.registerImage("../images/chassis/chassis" + i + ".png");
        }
    },
    registerImage: function (url) {
        demo.Util.registerImage(url, this.network);
    },
    tick: function () {
        for (var i = 0; i < this.ports.size(); i++) {
            this.ports.get(i).getAlarmState().clear();
        }
        for (i = 0; i < this.cards.size(); i++) {
            this.cards.get(i).setClient("hidden", false);
        }
        var node = this.ports.get(demo.Util.randomInt(this.ports.size()));
        node.getAlarmState().increaseNewAlarm(demo.Util.randomNonClearedSeverity());
        node = this.ports.get(demo.Util.randomInt(this.ports.size()));
        node.getAlarmState().increaseNewAlarm(demo.Util.randomNonClearedSeverity());

        node = this.cards.get(demo.Util.randomInt(this.cards.size()));
        node.setClient("hidden", true);

        if (this.light1.getStyle('vector.fill.color') == '#00FF00') {
            this.light1.setStyle('vector.fill.color', '#FFFF00');
        } else {
            this.light1.setStyle('vector.fill.color', '#00FF00');
        }

        if (this.light2.getStyle('vector.fill.color') == '#0000FF') {
            this.light2.setStyle('vector.fill.color', '#FF0000');
        } else {
            this.light2.setStyle('vector.fill.color', '#0000FF');
        }
    },
    initBox: function () {
        this.box.clear();

        var first = this.createNode(null, 16, 11, "chassis9");
        first.setStyle('outer.padding', 1);

        var cardContainer = this.createNode(first, 44, 27, null, 638, 269);
        cardContainer.setStyle('vector.fill.color', '#AAAAAA');
        cardContainer.setStyle('outer.padding', -1);
        cardContainer.setStyle('vector.deep', -4);

        this.cards.clear();
        for (var i = 0; i <= 12; i++) {
            this.cards.add(this.createCard(cardContainer, i));
        }

        card = this.createNode(cardContainer, 560, 27, null, 38, 268);
        this.createNode(card, 565, 223, "chassis4");
        this.createNode(card, 565, 251, "chassis4");
        card = this.createNode(card, 565, 46, null, 24, 163);
        card.setStyle('vector.fill.color', '#868686');
        this.createNode(card, 568, 52, "chassis3").setStyle('alarm.direction', 'left');
        this.createNode(card, 568, 166, "chassis3").setStyle('alarm.direction', 'left');
        this.createNode(card, 568, 147, "chassis3").setStyle('alarm.direction', 'left');
        this.createNode(card, 568, 128, "chassis3").setStyle('alarm.direction', 'left');
        this.createNode(card, 568, 109, "chassis3").setStyle('alarm.direction', 'left');
        this.createNode(card, 568, 90, "chassis3").setStyle('alarm.direction', 'left');
        this.createNode(card, 568, 71, "chassis3").setStyle('alarm.direction', 'left');
        this.createNode(card, 568, 185, "chassis3").setStyle('alarm.direction', 'left');

        card = this.createNode(cardContainer, 598, 27, null, 43, 268);
        this.light1 = this.createLight(card, 610, 225, '#00FF00');
        this.light2 = this.createLight(card, 610, 253, '#0000FF');
        card = this.createNode(card, 603, 46, null, 24, 163);
        card.setStyle('vector.fill.color', '#868686');
        this.createNode(card, 606, 52, "chassis3").setStyle('alarm.direction', 'right');
        this.createNode(card, 606, 166, "chassis3").setStyle('alarm.direction', 'right');
        this.createNode(card, 606, 147, "chassis3").setStyle('alarm.direction', 'right');
        this.createNode(card, 606, 128, "chassis3").setStyle('alarm.direction', 'right');
        this.createNode(card, 606, 109, "chassis3").setStyle('alarm.direction', 'right');
        this.createNode(card, 606, 90, "chassis3").setStyle('alarm.direction', 'right');
        this.createNode(card, 606, 71, "chassis3").setStyle('alarm.direction', 'right');
        this.createNode(card, 606, 185, "chassis3").setStyle('alarm.direction', 'right');

        var card = this.createNode(cardContainer, 641, 27, null, 43, 268);
        this.createNode(card, 653, 50, "chassis1");
        this.createNode(card, 653, 225, "chassis1");
        this.createNode(card, 653, 167, "chassis1");
        this.createNode(card, 653, 108, "chassis1");

        var secondShelf = this.createNode(null, 16, 319, "chassis10");
        var thirdShelf = this.createNode(null, 16, 447, "chassis2");
        this.createNode(thirdShelf, 363, 479, "chassis5");
        this.createNode(thirdShelf, 386, 479, "chassis5");
        this.createNode(thirdShelf, 409, 479, "chassis5");
        this.createNode(thirdShelf, 591, 479, "chassis5");
        this.createNode(thirdShelf, 614, 479, "chassis5");
        this.createNode(thirdShelf, 637, 479, "chassis5");
        this.createNode(thirdShelf, 461, 499, "chassis6");
        card = this.createNode(thirdShelf, 513, 447, null, 66, 120);
        this.createNode(card, 538, 526, "chassis7");
        this.createNode(card, 538, 489, "chassis7");
        this.createNode(card, 538, 450, "chassis7");

        var finder = new twaver.QuickFinder(this.box, "image");
        this.ports = new twaver.List(finder.find("chassis3"));
        finder.dispose();

        twaver.Util.moveElements(this.box.datas, 0, 40);
    },
    createCard: function (parent, index) {
        var node = this.createNode(parent, 44 + 43 * index, 27, null, 43, 268);
        this.createNode(node, node.getX() + 16, node.getY() + 10, "bolt");
        this.createNode(node, node.getX() + 16, node.getY() + node.getHeight() - 27, "bolt");
        return node;
    },
    createLight: function (parent, x, y, color) {
        var light = new twaver.Follower();
        light.setHost(parent);
        light.setStyle('body.type', 'vector');
        light.setStyle('vector.shape', 'circle');
        light.setStyle('vector.fill.color', color);
        light.setStyle('vector.gradient', 'radial.northeast');
        light.setSize(18, 18);
        light.setLocation(x, y);
        this.box.add(light);
        return light;
    },
    createNode: function (parent, x, y, image, w, h) {
        var node = new twaver.Follower();
        node.setStyle('outer.padding', 2);
        node.setStyle('select.color', '#000000');
        node.setStyle('alarm.position', 'center');
        node.setParent(parent);
        node.setHost(parent);
        node.setLocation(x, y);
        if (w) node.setWidth(w);
        if (h) node.setHeight(h);
        if (image != null) {
            node.setImage(image);
        } else {
            node.setStyle('body.type', 'vector');
            node.setStyle('vector.gradient', 'none');
            node.setStyle('vector.shape', 'rectangle');
            node.setStyle('vector.deep', 4);
        }
        this.box.add(node);
        return node;
    }
});