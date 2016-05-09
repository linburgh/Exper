SuccessStoryDemo = function () {
    this.box = new ElementBox();
    this.network = demo.Util.createDraggableNetwork(this.box);
    this.centerNode = new Node();
};
twaver.Util.ext('SuccessStoryDemo', Object, {
    init: function () {
        this.registImages();
        twaver.SerializationSettings.setClientType("part", 'number');
        demo.Util.appendChild(this.network.getView(), document.getElementById('main'), 0, 0, 0, 0);
        this.network.adjustBounds({ x: 0, y: 0, width: 1200, height: 800 });
        var self = this;
        window.onresize = function (e) { self.network.invalidate(); };

        this.initBox();
    },
    registImages: function () {
        for (var i = 0; i < 80; i++) {
            this.registerImage("../images/successstory/story" + i + '.png');
        }
    },
    registerImage: function (url) {
        demo.Util.registerImage(url, this.network);
    },
    initBox: function () {
        this.centerNode.setStyle('outer.color', '#66CCFF');

        for (var i = 0; i < 80; i++) {
            var node = new Node();
            node.setImage("story" + i);
            node.setStyle('select.color', '#66CCFF');
            node.setStyle('body.type', 'default.vector');
            node.setStyle('vector.shape', 'rectangle');
            node.setStyle('vector.fill.color', demo.Util.createColor(0xB4B4B4, 0.6));
            node.setStyle('vector.outline.width', -1);
            node.setStyle('vector.outline.color', '#00FF00');
            node.setStyle('vector.padding', -3);
            node.setClient("part", Math.floor(i / 20));

            this.box.add(node);
        }

        this.network.getSelectionModel().setSelectionMode('singleSelection');

        var layout = new twaver.layout.CloudLayouter(this.network);
        layout.setUpdateNodeFunction(function (node, zIndex, count, alpha) {
            node.setStyle('whole.alpha', 0.3 + alpha * 0.7);
            var point = node.getCenterLocation();
            var image = twaver.Util.getImageAsset(node.getImage());
            if (image) {
                node.setWidth(image.getWidth() * (0.3 + alpha * 0.4));
                node.setHeight(image.getHeight() * (0.3 + alpha * 0.4));
                node.setCenterLocation(point);
            }
        });
        layout.start();
    }
});