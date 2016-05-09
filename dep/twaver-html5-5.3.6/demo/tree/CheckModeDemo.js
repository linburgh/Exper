CheckModeDemo = function () {
    this.box = new ElementBox();
    this.network = demo.Util.createDraggableNetwork(this.box);
    this.tree = new Tree(this.box);
    this.optionSheet = new PropertySheet();
    this.autoLayouter = new twaver.layout.AutoLayouter(this.box);
    this.data = new twaver.Element();
    this.root = this.createNode('TWaver HTML5 Demo');
    this.root.setSize(30, 30);
};
twaver.Util.ext('CheckModeDemo', Object, {
    init: function () {
        var rightPane = new twaver.controls.BorderPane(this.network, this.optionSheet);
        rightPane.setTopHeight(100);
        var textArea = document.createElement('textarea');
        var leftSplit = new twaver.controls.SplitPane(this.tree, textArea, 'vertical', 0.7);
        var mainSplit = new twaver.controls.SplitPane(leftSplit, rightPane, 'horizontal', 0.3);
        this.registImages();
        demo.Util.appendChild(mainSplit.getView(), document.getElementById('main'), 0, 0, 0, 0);
        this.tree.setCheckMode('descendantAncestor');
        this.initSheet();
        this.network.setZoom(0.7);
        window.onresize = function (e) { mainSplit.invalidate(); };

        this.tree.setVisibleFunction(function (element) {
            return element instanceof twaver.Node;
        });
        var data = this.data;
        this.tree.isCheckable = function (element) {
            if (!this.isCheckMode()) {
                return false;
            }
            var checkable = data.getClient('checkable.function');
            if (checkable === 'Leaf') {
                return element.getChildrenSize() == 0;
            } else if (checkable === 'Category') {
                return element.getChildrenSize() > 0;
            } else if (checkable === 'Check Network') {
                if (element.getName() === "Network Demos") {
                    return true;
                }
                if (element.getParent() != null) {
                    return this.isCheckable(element.getParent());
                }
                return false;
            } else {
                return true;
            }
        };
        this.tree.getIcon = function (element) {
            if (data.getClient('show.icon')) {
                return element.getIcon();
            }
            return null;
        };
        this.tree.addInteractionListener(function (e) {
            if (textArea.value.length > 300) {
                textArea.value = '';
            }
            textArea.value = e.kind + ":" + e.data.getName() + '\n' + textArea.value;
        });

        this.initBox();
        this.tree.expandAll();
        this.autoLayouter.setAnimate(false);
        this.autoLayouter.doLayout('round');
    },
    registImages: function () {
        this.registerImage("../images/file/fileclose.png");
        this.registerImage("../images/file/fileleaf.png");
        this.registerImage("../images/file/fileopen.png");
    },
    registerImage: function (url) {
        demo.Util.registerImage(url, this.tree);
    },
    initSheet: function () {
        this.optionSheet.setEditable(true);
        var propertyBox = this.optionSheet.getPropertyBox();
        var map = { '': 'None', 'default': 'Default', 'children': 'Children', 'descendant': 'Descendant', 'descendantAncestor': 'Descendant and Ancestor' };
        demo.Util.addClientProperty(propertyBox, "check.mode")
                .setEnumInfo({ map: map, values: ['', 'default', 'children', 'descendant', 'descendantAncestor'] });
        demo.Util.addClientProperty(propertyBox, "checkable.function").setEnumInfo(['Leaf', 'Category', 'Check Network', 'Check All']);
        demo.Util.addClientProperty(propertyBox, "unCheckable.style").setEnumInfo(['none', 'disabled']);
        demo.Util.addClientProperty(propertyBox, "show.icon").setValueType('boolean');
        demo.Util.addClientProperty(propertyBox, "layout.type").setEnumInfo(demo.LAYOUT_TYPE);

        this.data.setClient("check.mode", this.tree.isCheckMode());
        this.data.setClient("checkable.function", 'Check All');
        this.data.setClient("unCheckable.style", this.tree.getUncheckableStyle());
        this.data.setClient("show.icon", true);
        this.data.setClient("layout.type", 'round');
        this.optionSheet.getDataBox().add(this.data);
        this.optionSheet.getDataBox().getSelectionModel().setSelection(this.data);
        this.optionSheet.getDataBox().addDataPropertyChangeListener(this.handlePropertyChange, this);
    },
    handlePropertyChange: function (e) {
        var name = demo.Util.getPropertyName(e);
        if (name === 'check.mode') {
            this.tree.getSelectionModel().clearSelection();
            this.tree.setCheckMode(e.newValue);
        } else if (name === 'checkable.function') {
            this.tree.invalidateModel();
        } else if (name === 'unCheckable.style') {
            this.tree.setUncheckableStyle(e.newValue);
        } else if (name === 'show.icon') {
            this.tree.invalidateDisplay();
        } else if (name === 'layout.type') {
            this.autoLayouter.doLayout(e.newValue);
        }
    },
    initBox: function () {
        demo.Util.initDemoBox();
        demo.Util.demoBox.forEachByBreadthFirst(this.addElement, null, this);
    },
    addElement: function (parent) {
        if (parent.getChildrenSize() == 0) {
            var n = this.box.getDataById(parent.getName());
            n.setSize(16, 16);
            n.setIcon('fileleaf');
            return;
        }
        var node = this.createNode(parent.getName());
        if (parent.getParent() == null) {
            this.createLink(this.root, node);
            node.setParent(this.root);
        }
        for (var i = 0; i < parent.getChildrenSize(); i++) {
            var child = parent.getChildren().get(i);
            child = this.createNode(child.getName());
            child.setParent(this.box.getDataById(parent.getName()));
            this.createLink(node, child);
        }
    },
    createNode: function (name) {
        if (this.box.containsById(name)) {
            return this.box.getDataById(name);
        }
        var node = new twaver.Node(name);
        node.setName(name);
        node.setSize(22, 22);
        node.setIcon("fileclose");
        node.setStyle('select.color', '#00FF00');
        node.setStyle('body.type', 'vector');
        node.setStyle('vector.shape', 'circle');
        node.setStyle('vector.gradient', 'radial.northeast');
        node.setStyle('vector.fill.color', '#FF0000');
        this.box.add(node);
        return node;
    },
    createLink: function (fromNode, toNode) {
        var link = new twaver.Link(fromNode, toNode);
        link.setStyle('link.width', 1);
        link.setParent(fromNode);
        this.box.add(link);
    }
});