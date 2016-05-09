SpringLayoutDemo = function () {
    this.box = new ElementBox();
    this.network = demo.Util.createDraggableNetwork();
    this.sheet = new PropertySheet();
    this.springLayouter = new twaver.layout.SpringLayouter(this.network);

    this.nodeColor = '#FF0000';
    this.linkColor = '#66CCFF';
    this.nodeOverColor = '#FFFF00';
    this.linkOverColor = '#FF00FF';
    this.selectColor = '#00FF00';
};
twaver.Util.ext('SpringLayoutDemo', Object, {
    init: function () {
        var self = this;
        var toolbar = demo.Util.createNetworkToolbar(this.network);
        var start = demo.Util.addButton(toolbar, 'Stop', null, function () {
            var isRunning = self.springLayouter.isRunning();
            if (isRunning) {
                self.springLayouter.stop();
                start.value = 'Start';
            } else {
                self.springLayouter.start();
                start.value = 'Stop';
            }
        });
        var main = document.getElementById('main');
//        demo.Util.appendChild(toolbar, main, 0, 0, null, 0);
        var borderBane = new BorderPane(this.network, toolbar);
        demo.Util.appendChild(borderBane.getView(), main, 20, 0, 0, 0);
        this.sheet.getView().style.width = '250px';
        this.sheet.getView().style.height = '150px';
        demo.Util.appendChild(this.sheet.getView(), main, 20, 17, null, null);
        this.initSheet();

        this.initBox();
        this.network.setElementBox(this.box);

        this.network.getView().addEventListener('mousemove', function (e) { self.handleMouseMove(e); });
        this.network.setZoom(0.6);
        var autoLayouter = new twaver.layout.AutoLayouter(this.box);
        autoLayouter.doLayout('symmetry', function () {
            self.springLayouter.start();
        });
    },
    initSheet: function () {
        this.sheet.setEditable(true);
        var propertyBox = this.sheet.getPropertyBox();
        demo.Util.addClientProperty(propertyBox, "interval").setValueType('int');
        demo.Util.addClientProperty(propertyBox, "step.count").setValueType('int');
        demo.Util.addClientProperty(propertyBox, "node.repulsion.factor").setValueType('number');
        demo.Util.addClientProperty(propertyBox, "link.repulsion.factor").setValueType('number');
        demo.Util.addClientProperty(propertyBox, "node.shape.type").setEnumInfo(demo.SHAPE_TYPE);
        demo.Util.addClientProperty(propertyBox, "node.gradient.type").setEnumInfo(demo.GRADIENT_TYPE);

        var element = new twaver.Element();
        element.setClient("interval", this.springLayouter.getInterval());
        element.setClient("step.count", this.springLayouter.getStepCount());
        element.setClient("node.repulsion.factor", this.springLayouter.getNodeRepulsionFactor());
        element.setClient("link.repulsion.factor", this.springLayouter.getLinkRepulsionFactor());
        element.setClient("node.shape.type", 'circle');
        element.setClient("node.gradient.type", 'radial.northeast');
        this.sheet.getDataBox().add(element);
        this.sheet.getDataBox().getSelectionModel().setSelection(element);
        this.sheet.getDataBox().addDataPropertyChangeListener(this.handlePropertyChange, this);
    },
    initBox: function () {
        var root = this.createNode('TWaver HTML5 Demo');
        root.setSize(30, 30);

        demo.Util.initDemoBox();

        demo.Util.demoBox.forEachByBreadthFirst(function (parent) {
            if (parent.getChildrenSize() == 0) {
                this.box.getDataById(parent.getName()).setSize(16, 16);
                return;
            }
            var node = this.createNode(parent.getName());
            if (parent.getParent() == null) {
                this.createLink(root, node);
            }
            for (var i = 0; i < parent.getChildrenSize(); i++) {
                var child = parent.getChildren().get(i);
                child = this.createNode(child.getName());
                this.createLink(node, child);
            }
        }, null, this);
    },
    createNode: function (name) {
        if (this.box.containsById(name)) {
            return this.box.getDataById(name);
        }
        var node = new Node(name);
        node.setName(name);
        node.setSize(22, 22);
        node.setStyle('select.color', this.selectColor);
        node.setStyle('body.type', 'vector');
        node.setStyle('vector.shape', 'circle');
        node.setStyle('vector.gradient', 'radial.northeast');
        node.setStyle('vector.fill.color', this.nodeColor);
        this.box.add(node);
        return node;
    },
    createLink: function (fromNode, toNode) {
        var link = new Link(fromNode, toNode);
        link.setStyle('link.color', this.linkColor);
        link.setStyle('select.color', this.selectColor);
        link.setStyle('link.width', 2);
        link.setStyle('link.type', 'parallel');
        this.box.add(link);
    },
    handleMouseMove: function (e) {
        var element = this.network.getElementAt(e);
        if (element !== this.lastElement && !this.network.isMovingElement() && !this.network.isSelectingElement()) {
            if (this.lastElement instanceof Node) {
                this.lastElement.setStyle('vector.fill.color', this.nodeColor);
                this.lastElement.setStyle('label.fill', false);
            } else if (this.lastElement instanceof Link) {
                this.lastElement.setStyle('link.color', this.linkColor);
            }

            if (element instanceof Node) {
                element.setStyle('vector.fill.color', this.nodeOverColor);
                element.setStyle('label.fill', true);
            } else if (element instanceof Link) {
                element.setStyle('link.color', this.linkOverColor);
            }

            this.lastElement = element;
        }
    },
    handlePropertyChange: function (e) {
        var name = demo.Util.getPropertyName(e);
        if (name === 'interval') {
            this.springLayouter.setInterval(e.newValue);
        } else if (name === 'step.count') {
            this.springLayouter.setStepCount(e.newValue);
        } else if (name === 'node.repulsion.factor') {
            this.springLayouter.setNodeRepulsionFactor(e.newValue);
        } else if (name === 'link.repulsion.factor') {
            this.springLayouter.setLinkRepulsionFactor(e.newValue);
        } else if (name === 'node.shape.type') {
            this.handleShapeChange('vector.shape', e.newValue);
        } else if (name === 'node.gradient.type') {
            this.handleShapeChange('vector.gradient', e.newValue);
        }
    },
    handleShapeChange: function (property, value) {
        var datas = this.box.getDatas();
        for (var i = 0, s = this.box.size(); i < s; i++) {
            var element = datas.get(i);
            if (element instanceof Node) {
                element.setStyle(property, value);
            }
        }
    }
});