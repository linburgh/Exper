AutoLayoutDemo = function () {
    this.box = new ElementBox();
    this.network = demo.Util.createDraggableNetwork();
    this.autoLayouter = new twaver.layout.AutoLayouter(this.box);
    this.toolbar = demo.Util.createNetworkToolbar(this.network);
};
twaver.Util.ext('AutoLayoutDemo', Object, {
    init: function () {
        demo.Util.registerImage("../images/element/routerImage.png", this.network);
        var main = document.getElementById('main');
        var centerPane = new twaver.controls.BorderPane(this.network, this.toolbar);
        centerPane.setTopHeight(25);
        demo.Util.appendChild(centerPane.getView(), main, 0, 0, 0, 0);
        window.onresize = function (e) {
            centerPane.invalidate();
        };
        
        this.initControl();
var self = this;
var callback = function (e) {
  if (e.kind === 'validateEnd') {
    self.network.removeViewListener(callback);
    self.network.zoomOverview();
  }
};
this.network.addViewListener(callback);
        this.initBox();
        this.network.setElementBox(this.box);
        var self = this;
        /*var oldGetDimensionFunction = this.autoLayouter.getDimension;
        this.autoLayouter.getDimension = function (node) {
            if (self.accountAttachments.checked) {
                var ui = self.network.getElementUI(node);
                if (ui) {
                    var bounds = ui.getViewRect();
                    return { width: bounds.width, height: bounds.height };
                } else {
                    return null;
                }
            } else {
                return oldGetDimensionFunction(node);
            }
        };
        this.autoLayouter.getGroupLayoutType = function (group) {
            return 'topbottom';
        };*/
        this.autoLayouter.setAnimate(false);
        this.autoLayouter.doLayout('round');
        this.autoLayouter.setAnimate(true);
    },
    initControl: function () {
        var self = this;
        var animation = demo.Util.addCheckBox(this.toolbar, false, "Animation", function () {
            self.autoLayouter.setAnimate(animation.checked);
            self.doLayout();
        });
        animation.checked = this.autoLayouter.isAnimate();

        this.zoomToOverview = demo.Util.addCheckBox(this.toolbar, false, "Overview", function () {
            self.doLayout();
        });
        this.accountAttachments = demo.Util.addCheckBox(this.toolbar, false, "Attachment", function () {
            self.doLayout();
        });

        this.autoLayouterType = document.createElement('select');
        var items = ['round', 'symmetry', 'topbottom', 'bottomtop', 'leftright', 'rightleft', 'hierarchic'];
        items.forEach(function (item) {
            var option = document.createElement('option');
            option.appendChild(document.createTextNode(item));
            option.setAttribute('value', item);
            self.autoLayouterType.appendChild(option);
        });
        this.autoLayouterType.addEventListener('change', function () { self.doLayout(); }, false);
        this.toolbar.appendChild(this.autoLayouterType);
        demo.Util.addButton(this.toolbar, 'Create Group', 'group_icon', function () { self.createGroup(); });
    },
    doLayout: function () {
        if (this.zoomToOverview.checked) {
            var self = this;
            this.autoLayouter.doLayout(this.autoLayouterType.value, function () {
                self.network.zoomOverview(false);
            });
        } else {
            this.autoLayouter.doLayout(this.autoLayouterType.value);
        }
    },
    initBox: function () {
        for (var k = 0; k < 2; k++) {
            var ip = "192.168." + k + ".";
            var count = 0;
            var root = new twaver.Node();
            root.setName(ip + count++);
            root.setImage("routerImage");
            this.box.add(root);

            for (var i = 0; i < 3; i++) {
                var iNode = new twaver.Node();
                iNode.setName(ip + count++);
                iNode.setImage("routerImage");
                this.box.add(iNode);
                var link = new twaver.Link(root, iNode);
                link.setStyle('link.width', 2);
                link.setStyle('link.color', '#00FF00');
                this.box.add(link);
                for (var j = 0; j < 9; j++) {
                    var jNode = new twaver.Node();
                    jNode.setName(ip + count++);
                    if (j % 3 == 0) {
                        jNode.getAlarmState().increaseNewAlarm(demo.Util.randomNonClearedSeverity());
                    }
                    this.box.add(jNode);
                    link = new twaver.Link(iNode, jNode);
                    link.setStyle('link.width', 2);
                    link.setStyle('link.color', '#00FF00');
                    this.box.add(link);
                }
            }
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