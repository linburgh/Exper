LinkEditorDemo = function () {
    this.box = new ElementBox();
    this.network = demo.Util.createDraggableNetwork(this.box);
    this.sheet = new PropertySheet(this.box);
    this.imageNodesDiv = document.createElement('div');
    this.shapeNodesDiv = document.createElement('div');
    this.linksDiv = document.createElement('div');
    this.accordion = new Accordion();
};
twaver.Util.ext('LinkEditorDemo', Object, {
    init: function () {
        this.registImages();
        this.sheet.getView().style.width = '250px';
        var toolbar = demo.Util.createNetworkToolbar(this.network);
        var centerPane = new BorderPane(this.network, toolbar);
        centerPane.setTopHeight(25);
        var mainSplit = new SplitPane(this.accordion, centerPane, 'horizontal', 0.2);
        demo.Util.appendChild(this.sheet.getView(), centerPane.getView(), 25, 17, null, null);
        demo.Util.appendChild(mainSplit.getView(), document.getElementById('main'), 0, 0, 0, 0);
        this.sheet.setEditable(true);
        this.sheet.getDataBox().getSelectionModel().addSelectionChangeListener(function (e) {
            if (this.sheet.getDataBox().getSelectionModel().getLastData() instanceof Link) {
                this.sheet.getView().style.height = '400px';
            } else {
                this.sheet.getView().style.height = '120px';
            }
        }, this);
        this.initSheet();
        this.initAccordion();
        window.onresize = function (e) { mainSplit.invalidate(); };
        this.network.setEditableFunction(function (element) {
            if (element instanceof Node) {
                return element.getWidth() > 0 && element.getHeight() > 0;
            }
            return true;
        });

        var that = this;
        this.network.addElementByInteraction = function(element) {
            twaver.vector.Network.prototype.addElementByInteraction.call(this, element);
            this.setInteractions([new twaver.vector.interaction.DefaultInteraction(this, false)]);
        };

        this.initBox();
    },
    registImages: function () {
        this.registerImage("../images/os/linux.png");
        this.registerImage("../images/os/centos.png");
        this.registerImage("../images/os/debian.png");
        this.registerImage("../images/os/solaris.png");
        this.registerImage("../images/link/HAProxy.png");
        this.registerImage("../images/link/INTARWEB.png");
        this.registerImage("../images/link/SOWEB.png");
        this.registerImage("../images/link/VLAN.png");
        this.registerImage("../images/link/shapeEdit.png");
    },
    registerImage: function (url) {
        demo.Util.registerImage(url, this.network);
    },
    addDraggableNodeButton:function(src){
        var image = new Image();
        var imageName = demo.Util.getImageName(src);
        image.setAttribute('title', imageName);
        image.setAttribute('draggable', 'true');
        image.style.cursor = 'move';
        image.style.verticalAlign = 'top';
        image.style.width = '40px';
        image.style.height = '40px';
        image.style.padding = '4px 4px 4px 4px';
        image.setAttribute('src', src);
        image.addEventListener('dragstart', function (e) {
            e.dataTransfer.effectAllowed = 'copy';
            e.dataTransfer.setData('Text','className:twaver.Node');
            e.dataTransfer.setData('Image', 'image:' + imageName);
        }, false);
        
        this.imageNodesDiv.appendChild(image);
        return image;
    },
    addDraggableShapeButton:function(shape){
        var canvas = document.createElement('canvas');
        canvas.setAttribute('title', shape);
        canvas.setAttribute('draggable', 'true');
        canvas.style.cursor = 'pointer';
        var rect = { x: 0, y: 0, width: 50, height: 50 };
        var g = twaver.Util.setCanvas(canvas, rect);
        g.strokeStyle = twaver.Styles.getStyle('vector.outline.color');
        g.lineWidth = 1;
        g.fillStyle = twaver.Styles.getStyle('vector.fill.color');
        g.beginPath();
        twaver.Util.grow(rect, -5, -5);
        twaver.Util.drawVector(g, shape, null, rect);
        g.fill();
        g.stroke();
        canvas.addEventListener('dragstart', function (e) {
            e.dataTransfer.effectAllowed = 'copy';
            e.dataTransfer.setData('Text','className:twaver.Node');
            e.dataTransfer.setData('Shape', 'shape:' + shape);
        }, false);
        this.shapeNodesDiv.appendChild(canvas);
        return canvas;
    },
    addDraggableCreateButton:function(src){
        var image = new Image();
        var imageName = demo.Util.getImageName(src);
        image.setAttribute('title', imageName);
        image.setAttribute('draggable', 'true');
        image.style.cursor = 'move';
        image.style.verticalAlign = 'top';
        image.style.width = '40px';
        image.style.height = '40px';
        image.style.padding = '4px 4px 4px 4px';
        image.setAttribute('src', src);
        var that = this;
        image.addEventListener('dragstart', function (e) {
            e.dataTransfer.effectAllowed = 'copy';
            that._createShapeNodeInteractions();
        }, false);
        this.shapeNodesDiv.appendChild(image);
        return image;
    },
    addNodeButton: function (src) {
        var imageName = demo.Util.getImageName(src);
        var button = document.createElement('input');
        button.setAttribute('type', 'image');
        button.setAttribute('title', imageName);
        button.style.padding = '5px 5px 5px 5px';
        button.style.width = '40px';
        button.style.height = '40px';
        button.setAttribute('src', src);
        var self = this;
        button.addEventListener('click', function () {
            self.network.setCreateElementInteractions(function (point) {
                var element = new Node();
                element.setImage(imageName);
                element.setCenterLocation(point);
                return element;
            });
        }, false);
        this.imageNodesDiv.appendChild(button);
        return button;
    },
    addShapeNodeButton: function (shape) {
        var canvas = document.createElement('canvas');
        canvas.setAttribute('title', shape);
        canvas.style.cursor = 'pointer';
        var rect = { x: 0, y: 0, width: 50, height: 50 };
        var g = twaver.Util.setCanvas(canvas, rect);
        g.strokeStyle = twaver.Styles.getStyle('vector.outline.color');
        g.lineWidth = 1;
        g.fillStyle = twaver.Styles.getStyle('vector.fill.color');
        g.beginPath();
        twaver.Util.grow(rect, -5, -5);
        twaver.Util.drawVector(g, shape, null, rect);
        g.fill();
        g.stroke();
        var self = this;
        canvas.addEventListener('click', function () {
            self.network.setCreateElementInteractions(function (point) {
                var node = new Node();
                node.setStyle('body.type', 'vector');
                node.setStyle('vector.shape', shape);
                node.setCenterLocation(point);
                return node;
            });
        }, false);
        this.shapeNodesDiv.appendChild(canvas);
        return canvas;
    },
    addLinkButton: function (src) {
        var imageName = demo.Util.getImageName(src);
        var button = document.createElement('input');
        button.setAttribute('type', 'image');
        button.setAttribute('title', imageName);
        button.style.padding = '5px 5px 5px 5px';
        button.style.width = '40px';
        button.style.height = '40px';
        button.setAttribute('src', src);
        var self = this;
        button.addEventListener('click', function () {
            self.network.setCreateLinkInteractions(function (fromNode, toNode) {
                var link = new Link();
                link.setStyle('link.type', imageName);
                link.setFromNode(fromNode);
                link.setToNode(toNode);
                return link;
            });
        }, false);
        this.linksDiv.appendChild(button);
        return button;
    },
    initAccordion: function () {
        this.accordion.add('Image Nodes', this.imageNodesDiv);
        this.accordion.add('Shape Nodes', this.shapeNodesDiv);
        this.accordion.add('Links', this.linksDiv);

        this.addDraggableNodeButton('../images/os/linux.png');
        this.addDraggableNodeButton('../images/os/centos.png');
        this.addDraggableNodeButton('../images/os/debian.png');
        this.addDraggableNodeButton('../images/os/solaris.png');
        this.addDraggableNodeButton('../images/link/HAProxy.png');
        this.addDraggableNodeButton('../images/link/INTARWEB.png');
        this.addDraggableNodeButton('../images/link/SOWEB.png');
        this.addDraggableNodeButton('../images/link/VLAN.png');

        this.addDraggableShapeButton('circle');
        this.addDraggableShapeButton('diamond');
        this.addDraggableShapeButton('hexagon');
        this.addDraggableShapeButton('oval');
        this.addDraggableShapeButton('pentagon');
        this.addDraggableShapeButton('rectangle');
        this.addDraggableShapeButton('roundrect');
        this.addDraggableShapeButton('star');
        this.addDraggableShapeButton('triangle');
        this.addDraggableCreateButton('../images/link/shapeEdit.png');

        this.addLinkButton('../images/link/flexional.png');
        this.addLinkButton('../images/link/orthogonal.png');
        this.addLinkButton('../images/link/extend.top.png');
        this.addLinkButton('../images/link/extend.left.png');
        this.addLinkButton('../images/link/extend.bottom.png');
        this.addLinkButton('../images/link/extend.right.png');
    },
    initSheet: function () {
        this.sheet.setVisibleFunction(function (property) {
            var propertyTpe = property.getPropertyType();
            if (propertyTpe === 'style') {
                var propertyName = property.getPropertyName();
                if (propertyName.indexOf('label') == 0) {
                    return true;
                } else {
                    return this.getDataBox().getSelectionModel().getLastData() instanceof Link;
                };
            } else {
                return true;
            }
        });
        var propertyBox = this.sheet.getPropertyBox();
        var catagory = 'Basic';
        demo.Util.addAccessorProperty(propertyBox, 'name', catagory);
        demo.Util.addStyleProperty(propertyBox, 'label.color', catagory);
        demo.Util.addStyleProperty(propertyBox, 'label.position', catagory).setEnumInfo(demo.POSITION_TYPE);
        demo.Util.addStyleProperty(propertyBox, 'label.xoffset', catagory);
        demo.Util.addStyleProperty(propertyBox, 'label.yoffset', catagory);
        catagory = 'Link';
        demo.Util.addStyleProperty(propertyBox, 'link.type', catagory).setEnumInfo(demo.LINK_TYPE);
        demo.Util.addStyleProperty(propertyBox, 'link.color', catagory);
        demo.Util.addStyleProperty(propertyBox, 'link.width', catagory);
        demo.Util.addStyleProperty(propertyBox, 'link.split.by.percent', catagory);
        demo.Util.addStyleProperty(propertyBox, 'link.split.percent', catagory);
        demo.Util.addStyleProperty(propertyBox, 'link.split.value', catagory);
        demo.Util.addStyleProperty(propertyBox, 'link.extend', catagory);
        demo.Util.addStyleProperty(propertyBox, 'link.from.at.edge', catagory);
        demo.Util.addStyleProperty(propertyBox, 'link.from.xoffset', catagory);
        demo.Util.addStyleProperty(propertyBox, 'link.from.yoffset', catagory);
        demo.Util.addStyleProperty(propertyBox, 'link.to.at.edge', catagory);
        demo.Util.addStyleProperty(propertyBox, 'link.to.xoffset', catagory);
        demo.Util.addStyleProperty(propertyBox, 'link.to.yoffset', catagory);
    },
    initBox: function () {
        var title = this.createTitle('Stack Overflow\nNetwork Configuration', 5, 40);
        var VLAN1 = this.createNode("VLAN1(PRIVATE) Ports 1-12", "VLAN", 300, 25, 'bottomright.topright');
        var HAProxy1 = this.createNode("HAProxy1", "HAProxy", 180, 280, 'bottomleft');
        var HAProxy2 = this.createNode("HAProxy2", "HAProxy", 400, 280, 'bottomright');
        var VLAN2 = this.createNode("VLAN2(PUBLIC) Ports 13-24", "VLAN", 300, 350, 'bottomright.topright');
        var PECK_GW = this.createNode("PECK GW", "HAProxy", 300, 480, 'right.right');
        var INTARWEBZ = this.createNode("INTARWEBZ", "INTARWEB", 50, 480);

        this.createLink(HAProxy1, HAProxy2, '#F00020', 'parallel', "Backup");
        this.createLink(HAProxy1, VLAN2, '#F00020', 'orthogonal.V.H');
        this.createLink(HAProxy2, VLAN2, '#F00020', 'orthogonal.V.H');
        this.createLink(VLAN2, PECK_GW, '#F00020', 'parallel', "Backup", 'right.right');
        this.createLink(VLAN2, PECK_GW, '#F00020', 'parallel');
        this.createLink(PECK_GW, INTARWEBZ, '#F00020', 'parallel');

        for (var i = 1; i <= 8; i++) {
            var SOWEB = this.createNode("SOWEB" + i, "SOWEB", 30 + 75 * (i - 1), 160, 'bottomleft');
            this.createLink(VLAN1, SOWEB, '#10F000');
            if (i <= 6) {
                this.createLink(SOWEB, HAProxy1, '#F00020');
                this.createLink(SOWEB, HAProxy2, '#F00020');
            } else {
                this.createLink(SOWEB, VLAN2, '#F00020', 'orthogonal.V.H');
            }
        }
    },
    createTitle: function (name, x, y) {
        var title = new twaver.Follower();
        title.setName(name);
        title.setWidth(0);
        title.setHeight(0);
        title.setStyle('label.font', 'bold 18px Arial');
        title.setStyle('label.position', 'bottomright.bottomright');
        title.setLocation(x, y);
        this.box.add(title);
        return title;
    },
    createNode: function (name, image, x, y, labelPosition) {
        var node = new Node();
        node.setName(name);
        node.setImage(image);
        node.setLocation(x, y);
        if (labelPosition) {
            node.setStyle('label.position', labelPosition);
        }
        this.box.add(node);
        return node;
    },
    createLink: function (from, to, color, linkType, name, labelPosition, lineWidth) {
        if (lineWidth == null) {
            lineWidth = 2;
        }
        var link = new Link(from, to);
        link.setStyle('link.color', color);
        link.setStyle('link.width', lineWidth);
        if (linkType == null) {
            linkType = 'orthogonal.vertical';
            link.setStyle('link.split.value', 34);
            link.setStyle('link.corner', 'none');
        }
        link.setStyle('link.type', linkType);
        if (name) {
            link.setName(name);
        }
        if (labelPosition) {
            link.setStyle('label.position', labelPosition);
        }
        this.box.add(link);
        return link;
    },
     _createShapeNodeInteractions: function() {
      this.network.setInteractions([
        new twaver.vector.interaction.CreateShapeNodeInteraction(this.network, false),
        new twaver.vector.interaction.DefaultInteraction(this.network)
      ]);
    },
});
