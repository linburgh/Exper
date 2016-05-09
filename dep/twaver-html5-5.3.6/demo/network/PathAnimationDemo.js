PathAnimationDemo = function () {
    this.box = new ElementBox();
    this.network = demo.Util.createDraggableNetwork();

    this.distance = 0;
    this._alpha = 50;
    this.car = new twaver.Node();
    this.track = new twaver.ShapeNode();
    this.trackBackground = new twaver.ShapeNode();
};
twaver.Util.ext('PathAnimationDemo', Object, {
    init: function () {
        this.registImages();
        var main = document.getElementById('main');
        var toolbar = demo.Util.createNetworkToolbar(this.network);
        demo.Util.appendChild(toolbar, main, 0, 0, null, 0);
        demo.Util.appendChild(this.network.getView(), main, 20, 0, 0, 0);

        this.box.getLayerBox().add(new twaver.Layer('1'));
        this.box.getLayerBox().add(new twaver.Layer('2'));
        this.initBox();
        this.network.setElementBox(this.box);
        var self = this;
        this.network.getSelectionModel().setFilterFunction(function (e) {
            return e != self.track;
        });
        setInterval(function () { self.tick.call(self); }, 100);
        this.network.adjustBounds({ x: 0, y: 0, width: 1200, height: 800 });
    },
    registImages: function () {
        this.registerImage("../images/pathAnimation/car.png");
    },
    registerImage: function (url) {
        demo.Util.registerImage(url, this.network);
    },
    tick: function () {
        this.distance += 5.0;
        if (this.distance > this.track.getLineLength()) {
            this.distance = 0;
        }
        this._alpha += 30;
        if (this._alpha > 255) {
            this._alpha = 50;
        }

        var pointAngle = twaver.Util.calculatePointAngleAlongLine(this.track.getPoints(), this.track.getSegments(), true, this.distance, 0);
        this.car.setCenterLocation(pointAngle.point);
        this.car.setAngle(pointAngle.angle * 180 / Math.PI);

        this.track.setStyle('arrow.to.xoffset', this.track.getLineLength() - (this.distance + 50));
        this.track.setStyle('arrow.to.color', 'rgba(255, 0, 0, ' + this._alpha / 255 + ')');
    },
    initBox: function () {
        var points = new twaver.List([
			{ x: 16, y: 89 },
			{ x: 46, y: 5 },
			{ x: 48, y: 0 }, { x: 64, y: 1 },
			{ x: 73, y: 4 },
			{ x: 68, y: 63 }, { x: 84, y: 131 },
			{ x: 107, y: 144 },
			{ x: 114, y: 166 }, { x: 97, y: 172 },
			{ x: 50, y: 155 },
			{ x: 0, y: 132 }, { x: 9, y: 108 },
			{ x: 16, y: 89 }
		]);
        for (var i = 0, n = points.size(); i < n; i++) {
            var point = points.get(i);
            points.set(i, { x: point.x * 3 + 200, y: point.y * 3 + 50 });
        }
        this.track.setPoints(points);
        this.track.setSegments(new twaver.List([
			'moveto',
			'lineto',
			'quadto',
			'lineto',
			'quadto',
			'lineto',
			'quadto',
			'lineto',
			'quadto',
			'lineto'
		]));
        this.track.setStyle('arrow.to', true)
			.setStyle('arrow.to.color', '#FF0000')
			.setStyle('vector.outline.width', 2.0)
			.setStyle('vector.outline.color', '#FFFFFF')
			.setStyle('vector.fill', false);
        this.track.setLayerId('1');
        this.car.setImage('car');
        this.trackBackground.setPoints(new twaver.List(points));
        this.trackBackground.setSegments(this.track.getSegments());
        this.trackBackground.setStyle('vector.outline.color', '#333333')
			.setStyle('vector.outline.width', 20.0)
			.setStyle('vector.gradient', 'linear.west')
			.setStyle('vector.fill.color', '#838300')
			.setStyle('vector.gradient.color', '#FFFFFF');
        this.box.add(this.trackBackground);
        this.box.add(this.track);

        this.car.setLayerId('2');
        this.car.setCenterLocation(points.get(0));
        this.car.setStyle('select.style', 'border');
        this.box.add(this.car);

        this.trackBackground.addPropertyChangeListener(function (e) {
            this.track.setPoints(new twaver.List(this.trackBackground.getPoints()));
        }, this);
    }
});