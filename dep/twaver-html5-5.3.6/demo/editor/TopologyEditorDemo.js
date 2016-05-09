TopologyEditorDemo = function () {
    this.box = new ElementBox();
    this.layerBox = this.box.getLayerBox();
    this.network = demo.Util.createDraggableNetwork(this.box);
    
    this.tree = new Tree(this.box);
    this.sheet = new PropertySheet(this.box);
    this.treeTable = new demo.AutoPackTreeTable(this.box);
    this.layerTable = new Table(this.layerBox);
    this.alarmTable = new Table(this.box.getAlarmBox());
    this.tabPane = new TabPane();
    this.toolbar = demo.Util.createNetworkToolbar(this.network);
    this.popupMenu = new twaver.controls.PopupMenu(this.network);
};
twaver.Util.ext('TopologyEditorDemo', Object, {
    init: function () {
        twaver.Defaults.PROPERTYSHEET_EXPAND_CATEGORY = false;
        this.initToolbar();
        var leftSplit = new SplitPane(this.tree, this.sheet, 'vertical', 0.5);
        var rightSplit = new SplitPane(this.network, this.tabPane, 'vertical', 0.7);
        var mainSplitPane = new SplitPane(leftSplit, rightSplit, 'horizontal', 0.3);
        var mainPane = new BorderPane(mainSplitPane, this.toolbar);
        mainPane.setTopHeight(25);
        demo.Util.appendChild(mainPane.getView(), document.getElementById('main'), 0, 0, 0, 0);
        window.onresize = function (e) { mainPane.invalidate(); };

        demo.Util.initPropertySheet(this.sheet);
        this.tabPane.setTabRadius(8);
        this.tabPane.setTabGap(5);
        this.tabPane.setSelectBackground('#8080FF');
        this.tabPane.setTabBackground('#C0C0C0');
        this.refreshLayerId();
        this.initTreeTable();
        this.initLayerTable();
        this.initAlarmTable();

        var index = 0;
        this.box.addDataBoxChangeListener(function (e) {
            if (e.kind === 'preAdd' && !twaver.Util.isDeserializing()) {
                !e.data.getName() && e.data.setName(e.data.getClassName().substr(7) + ' ' + (++index));
            }
        });
        this.network.getToolTip = function (data) {
            var tooltip = data.getToolTip();
            if (tooltip) {
                return tooltip;
            }
            return data.getName();
        };
        this.initBox();

        var self = this;
        this.network.getView().addEventListener('mousedown', function (e) {
            var target = self.network.hitTest(e);
            if (target) {
                if (target instanceof twaver.vector.ElementUI) {
                    console.log('clicked ElementUI');
                }
                if (target instanceof twaver.vector.LabelAttachment) {
                    console.log('clicked LabelAttachment');
                }
            }
        });
        var timer = 0, doubleClickInterval = 300;
        this.network.addInteractionListener(function (e) {
            if (e.kind === 'clickElement') {
                console.log(self.network.getElementBox().getSelectionModel().getLastData());
                if (timer) {
                    clearTimeout(timer);
                    timer = 0;
                }
                timer = setTimeout(function () {
                    console.log("1");
                }, doubleClickInterval);
            } else if (e.kind === 'doubleClickElement') {
                if (timer) {
                    clearTimeout(timer);
                    timer = 0;
                }
                console.log("2");
            }
        });
        this.network.setLinkableFunction(function (node) {
            return !(node instanceof twaver.Group);
        });
        this.registerImage("../images/svg/boy.svg");
        this.registerImage("../images/svg/girl.svg");
        this.initPopupMenu();

        var undoManager = this.box.getUndoManager();
        undoManager.setEnabled(true);
        var btnUndo = demo.Util.addButton(this.toolbar, 'Undo', 'undo', function () {
            undoManager.undo();
        });
        btnUndo.disabled = true;
        var btnRedo = demo.Util.addButton(this.toolbar, 'Redo', 'redo', function () {
            undoManager.redo();
        });
        btnRedo.disabled = true;
        undoManager.on(function (e) {
            btnUndo.disabled = !undoManager.canUndo();
            btnRedo.disabled = !undoManager.canRedo();
        });

    },
    registerImage: function (url) {
        demo.Util.registerImage(url, true, this.network);
    },
    initBox: function () {
        var group1 = new twaver.Group();
        group1.setExpanded(true);
        this.box.add(group1);

        var node3 = new twaver.Node();
        node3.setImage('boy');
        node3.setLocation(50, 50);
        node3.setParent(group1);
        node3.getAlarmState().increaseNewAlarm(twaver.AlarmSeverity.CRITICAL);
        this.box.add(node3);

        var node4 = new twaver.Node();
        node4.setImage('boy');
        node4.setLocation(150, 150);
        node4.setParent(group1);
        this.box.add(node4);

        var group2 = new twaver.Group();
        group2.setStyle('group.shape', 'circle');
        group2.setExpanded(true);
        this.box.add(group2);

        var node5 = new twaver.Node();
        //node5.setImage('girl');
        node5.setLocation(350, 50);
        node5.setParent(group2);
        this.box.add(node5);

        var node6 = new twaver.Node();
        //node6.setImage('girl');
        node6.setSize(120, 120);
        node6.setLocation(450, 150);
        node6.setParent(group2);
        this.box.add(node6);

        var link7 = new twaver.Link(node3, node5);
        link7.setStyle('arrow.from', true);
        link7.setStyle('arrow.from.shape', 'arrow.slant');
        this.box.add(link7);
        var link8 = new twaver.Link(node4, node6);
        link8.setStyle('arrow.to', true);
        link8.setStyle('arrow.to.shape', 'arrow.slant');
        this.box.add(link8);

        this.box.getSelectionModel().setSelection(group2);
    },
    initToolbar: function () {
        var self = this;
        if (!twaver.Util.isTouchable) {
            demo.Util.addDraggableButton(this.toolbar, 'Create Node', 'node_icon', 'twaver.Node');
            demo.Util.addDraggableButton(this.toolbar, 'Create Group', 'group_icon', 'twaver.Group');
            demo.Util.addDraggableButton(this.toolbar, 'Create SubNetwork', 'subnetwork_icon', 'twaver.SubNetwork');
            demo.Util.addDraggableButton(this.toolbar, 'Create Grid', 'grid_icon', 'twaver.Grid');
        } else {
            demo.Util.addButton(this.toolbar, 'Create Node', 'node_icon', function () {
                self.network.setCreateElementInteractions(twaver.Node);
            });
            demo.Util.addButton(this.toolbar, 'Create Group', 'group_icon', function () {
                self.network.setCreateElementInteractions(twaver.Group);
            });
            demo.Util.addButton(this.toolbar, 'Create SubNetwork', 'subnetwork_icon', function () {
                self.network.setCreateElementInteractions(twaver.SubNetwork);
            });
            demo.Util.addButton(this.toolbar, 'Create Grid', 'grid_icon', function () {
                self.network.setCreateElementInteractions(twaver.Grid);
            });
        }

        demo.Util.addButton(this.toolbar, 'Create ShapeNode', 'shapenode_icon', function () {
            self.network.setCreateShapeNodeInteractions(twaver.ShapeNode);
        });
        demo.Util.addButton(this.toolbar, 'Create ShapeSubNetwork', 'shapesubnetwork_icon', function () {
            self.network.setCreateShapeNodeInteractions(twaver.ShapeSubNetwork);
        });

        demo.Util.addButton(this.toolbar, 'Create Link', 'link_icon', function () {
            self.network.setCreateLinkInteractions(twaver.Link);
        });
        demo.Util.addButton(this.toolbar, 'Create LinkSubNetwork', 'linksubnetwork_icon', function () {
            self.network.setCreateLinkInteractions(twaver.LinkSubNetwork);
        });
        demo.Util.addButton(this.toolbar, 'Create ShapeLink', 'shapelink_icon', function () {
            self.network.setCreateShapeLinkInteractions(twaver.ShapeLink);
        });

        demo.Util.addButton(this.toolbar, 'Align Left', 'align_left', function () { self.doAlign("left"); });
        demo.Util.addButton(this.toolbar, 'Align Horizontal Center', 'align_horizontalcenter', function () { self.doAlign("horizontalcenter"); });
        demo.Util.addButton(this.toolbar, 'Align Right', 'align_right', function () { self.doAlign("right"); });

        demo.Util.addButton(this.toolbar, 'Align Top', 'align_top', function () { self.doAlign("top"); });
        demo.Util.addButton(this.toolbar, 'Align Vertical Center', 'align_verticalcenter', function () { self.doAlign("verticalcenter"); });
        demo.Util.addButton(this.toolbar, 'Align Bottom', 'align_bottom', function () { self.doAlign("bottom"); });

        demo.Util.addButton(this.toolbar, 'Align Even Horizontal', 'align_even_horizontal', function () { self.doEvenSpace(true); });
        demo.Util.addButton(this.toolbar, 'Align Even Vertical', 'align_even_vertical', function () { self.doEvenSpace(false); });
    },
    initPopupMenu: function () {
        var lastData, lastPoint, magnifyInteraction;
        this.popupMenu.onMenuShowing = function (e) {
            lastData = self.network.getSelectionModel().getLastData();
            lastPoint = self.network.getLogicalPoint(e);
            magnifyInteraction = null;
            self.network.getInteractions().forEach(function (interaction) {
                if (interaction instanceof twaver.network.interaction.MagnifyInteraction
                    || interaction instanceof twaver.canvas.interaction.MagnifyInteraction) {
                    magnifyInteraction = interaction;
            }
        });
            return true;
        };
        var self = this;
        this.popupMenu.onAction = function (menuItem) {
            if (menuItem.label === 'Expand Group'
               || menuItem.label === 'Collapse Group') {
                lastData.reverseExpanded();
        }
        if (menuItem.label === 'Enter SubNetwork') {
            self.network.setCurrentSubNetwork(lastData);
        }
        if (menuItem.label === 'Up SubNetwork') {
            self.network.upSubNetwork();
        }
        if (menuItem.label === 'Expand LinkBundle'
           || menuItem.label === 'Collapse LinkBundle') {
            lastData.reverseBundleExpanded();
    }
    if (menuItem.label === 'Critical') {
        lastData.getAlarmState().increaseNewAlarm(twaver.AlarmSeverity.CRITICAL, 1);
    }
    if (menuItem.label === 'Major') {
        lastData.getAlarmState().increaseNewAlarm(twaver.AlarmSeverity.MAJOR, 1);
    }
    if (menuItem.label === 'Minor') {
        lastData.getAlarmState().increaseNewAlarm(twaver.AlarmSeverity.MINOR, 1);
    }
    if (menuItem.label === 'Warning') {
        lastData.getAlarmState().increaseNewAlarm(twaver.AlarmSeverity.WARNING, 1);
    }
    if (menuItem.label === 'Indeterminate') {
        lastData.getAlarmState().increaseNewAlarm(twaver.AlarmSeverity.INDETERMINATE, 1);
    }
    if (menuItem.label === 'Clear Alarm') {
        lastData.getAlarmState().clear();
    }
    if (menuItem.label === 'Remove') {
        self.box.remove(lastData);
    }
    if (menuItem.label === 'Add Node') {
        var node = new twaver.Node();
        node.setParent(self.network.getCurrentSubNetwork());
        node.setCenterLocation(lastPoint);
        self.box.add(node);
    }
};
this.popupMenu.isVisible = function (menuItem) {
    if (magnifyInteraction) {
        return menuItem.group === 'Magnify';
    } else {
        if (lastData) {
            if (lastData instanceof twaver.SubNetwork && menuItem.group === 'SubNetwork') {
                return true;
            }
            if (lastData instanceof twaver.Group && menuItem.group === 'Group') {
                return true;
            }
            if (lastData instanceof twaver.Link && menuItem.group === 'Link') {
                return true;
            }
            return menuItem.group === 'Element';
        } else {
            return menuItem.group === 'none';
        }
    }
};
this.popupMenu.isEnabled = function (menuItem) {
    if (lastData) {
        if (lastData instanceof twaver.SubNetwork) {
            return true;
        }
        if (lastData instanceof twaver.Group && menuItem.group === 'Group') {
            var expanded = lastData.isExpanded();
            return menuItem.expand ? !expanded : expanded;
        }
        if (lastData instanceof twaver.Link && menuItem.group === 'Link') {
            var expanded = lastData.getStyle("link.bundle.expanded");
            return menuItem.expand ? !expanded : expanded;
        }
        if (menuItem.label === 'Clear Alarm') {
            return !lastData.getAlarmState().isEmpty();
        }
    } else {
        if (menuItem.label === 'Up SubNetwork') {
            return self.network.getCurrentSubNetwork() != null;
        }
    }
    return true;
};
this.popupMenu.setMenuItems([
 { label: 'Remove', group: 'Element' },
 { label: 'Add Alarm', group: 'Element', 
 items:[{label:'Critical', group:'Element'},
 {label:'Major', group:'Element'},
 {label:'Minor', group:'Element'},
 {label:'Warning', group:'Element'},
 {label:'Indeterminate', group:'Element'}] },
 { label: 'Clear Alarm', group: 'Element' },
 { separator: true, group: 'Element' },
 { label: 'Expand LinkBundle', group: 'Link', expand: true },
 { label: 'Collapse LinkBundle', group: 'Link' },
 { separator: true, group: 'Link' },
 { label: 'Expand Group', group: 'Group', expand: true },
 { label: 'Collapse Group', group: 'Group' },
 { separator: true, group: 'Group' },
 { label: 'Enter SubNetwork', group: 'SubNetwork' },

 { label: 'Add Node', group: 'none', icon: '../images/toolbar/node_icon.png' },
 { label: 'Up SubNetwork', group: 'none' },
 { label: 'Shape', group: 'Magnify', items: [
 { label: 'rectangle', type: 'radio', groupName: 'Shape', group: 'Magnify', action: function () {
  magnifyInteraction.setShape('rectangle');
  magnifyInteraction.setYRadius(magnifyInteraction.getXRadius());
} },
{ label: 'roundrect', type: 'radio', groupName: 'Shape', group: 'Magnify', action: function () {
  magnifyInteraction.setShape('roundrect');
  magnifyInteraction.setYRadius(magnifyInteraction.getXRadius());
} },
{ label: 'oval', type: 'radio', groupName: 'Shape', group: 'Magnify', action: function () {
  magnifyInteraction.setShape('oval');
  magnifyInteraction.setYRadius(magnifyInteraction.getXRadius() * 0.75);
} },
{ label: 'round', type: 'radio', groupName: 'Shape', selected: true, group: 'Magnify', action: function () {
  magnifyInteraction.setShape('round');
  magnifyInteraction.setYRadius(magnifyInteraction.getXRadius());
} },
{ label: 'star', type: 'radio', groupName: 'Shape', group: 'Magnify', action: function () {
  magnifyInteraction.setShape('star');
  magnifyInteraction.setYRadius(magnifyInteraction.getXRadius());
} },
] },
{ label: 'Zoom', group: 'Magnify', items: [
{ label: 2, type: 'radio', groupName: 'Zoom', selected: true, group: 'Magnify', action: function () { magnifyInteraction.setZoom(2); } },
{ label: 3, type: 'radio', groupName: 'Zoom', group: 'Magnify', action: function () { magnifyInteraction.setZoom(3); } },
{ label: 4, type: 'radio', groupName: 'Zoom', group: 'Magnify', action: function () { magnifyInteraction.setZoom(4); } }
] },
{ label: 'Size', group: 'Magnify', items: [
{ label: 50, type: 'radio', groupName: 'Size', group: 'Magnify', action: function () { magnifyInteraction.setXRadius(50); magnifyInteraction.setYRadius(50); } },
{ label: 100, type: 'radio', groupName: 'Size', selected: true, group: 'Magnify', action: function () { magnifyInteraction.setXRadius(100); magnifyInteraction.setYRadius(100); } },
{ label: 200, type: 'radio', groupName: 'Size', group: 'Magnify', action: function () { magnifyInteraction.setXRadius(200); magnifyInteraction.setYRadius(200); } }
] },
{ label: 'BorderWidth', group: 'Magnify', items: [
{ label: '1', type: 'radio', groupName: 'BorderWidth', selected: true, group: 'Magnify', action: function () { magnifyInteraction.setBorderWidth(1); } },
{ label: '2', type: 'radio', groupName: 'BorderWidth', group: 'Magnify', action: function () { magnifyInteraction.setBorderWidth(2); } },
{ label: '3', type: 'radio', groupName: 'BorderWidth', group: 'Magnify', action: function () { magnifyInteraction.setBorderWidth(3); } }
] },
{ label: 'BorderColor', group: 'Magnify', items: [
{ label: 'black', type: 'radio', groupName: 'BorderColor', selected: true, group: 'Magnify', action: function () { magnifyInteraction.setBorderColor('black'); } },
{ label: 'green', type: 'radio', groupName: 'BorderColor', group: 'Magnify', action: function () { magnifyInteraction.setBorderColor('green'); } },
{ label: 'blue', type: 'radio', groupName: 'BorderColor', group: 'Magnify', action: function () { magnifyInteraction.setBorderColor('blue'); } }
] },
{ label: 'BackgroundColor', group: 'Magnify', items: [
{ label: 'white', type: 'radio', groupName: 'BackgroundColor', selected: true, group: 'Magnify', action: function () { magnifyInteraction.setBackgroundColor('white'); } },
{ label: 'transparent', type: 'radio', groupName: 'BackgroundColor', group: 'Magnify', action: function () { magnifyInteraction.setBackgroundColor('transparent'); } },
{ label: 'black', type: 'radio', groupName: 'BackgroundColor', group: 'Magnify', action: function () { magnifyInteraction.setBackgroundColor('black'); } }
] }
]);
},
initTreeTable: function () {
    this.treeTable.setEditable(true);
    this.treeTable.getTreeColumn().setClient('pack', true);
    var headerPool = new twaver.Pool('spane');
    this.treeTable.addPool(headerPool);
    this.treeTable.getTreeColumn().renderHeader = function (div) {
        var span = headerPool.get();
        span.style.whiteSpace = 'nowrap';
        span.style.verticalAlign = 'middle';
        span.style.padding = '1px 2px 1px 2px';
        span.innerHTML = 'Tree';
        span.setAttribute('title', span.innerHTML);
        span.style.font = 'bold 12px Helvetica';
        div.style.textAlign = 'center';
        div.appendChild(span);
    };
    demo.Util.createColumn(this.treeTable, 'Location', 'location', 'accessor', 'string', false).getValue = function (data) {
        if (data.getLocation) {
            var location = data.getLocation();
            return 'X:' + Math.round(location.x) + ', Y:' + Math.round(location.y);
        }
        return '';
    };
    var column = demo.Util.createColumn(this.treeTable, 'Width', 'width', 'accessor', 'number', true);
    column.getValue = function (data) {
        if (data.getWidth) {
            return Math.round(data.getWidth());
        }
        return '';
    };
    column.setWidth(50);
    column = demo.Util.createColumn(this.treeTable, 'Height', 'height', 'accessor', 'number', true);
    column.getValue = function (data) {
        if (data.getHeight) {
            return Math.round(data.getHeight());
        }
        return '';
    };
    column.setWidth(50);
    column = demo.Util.createColumn(this.treeTable, 'From', 'from', 'accessor', 'string', false);
    column.getValue = function (data) {
        if (data.getFromNode) {
            return data.getFromNode().getName();
        }
        return '';
    };
    column = demo.Util.createColumn(this.treeTable, 'To', 'to', 'accessor', 'string', false);
    column.getValue = function (data) {
        if (data.getToNode) {
            return data.getToNode().getName();
        }
        return '';
    };
    demo.Util.createColumn(this.treeTable, 'Parent', 'parent', 'accessor', 'string', false).setWidth(80);
    demo.Util.createColumn(this.treeTable, 'Alpha', 'whole.alpha', 'style', 'number', true).setWidth(50);
    demo.Util.createColumn(this.treeTable, 'Layer Id', 'layerId', 'accessor', 'string', false).setWidth(50);
    demo.Util.createColumn(this.treeTable, 'ToolTip', 'toolTip', 'accessor', 'string', true);

    this.addTab('Tree Table', new TablePane(this.treeTable), true);
},
initLayerTable: function () {
    var self = this;
    this.layerTable.setEditable(true);
    demo.Util.createColumn(this.layerTable, 'Id', 'id', 'accessor', 'string');
    demo.Util.createColumn(this.layerTable, 'Visible', 'visible', 'accessor', 'boolean', true);
    demo.Util.createColumn(this.layerTable, 'Movable', 'movable', 'accessor', 'boolean', true);
    demo.Util.createColumn(this.layerTable, 'Editable', 'editable', 'accessor', 'boolean', true);
    this.layerBox.addDataBoxChangeListener(function (e) { this.refreshLayerId(); }, this);
    var layerTableToolbar = document.createElement('div');
    var layerId = document.createElement('input');
    layerId.style.width = '50px';
    layerTableToolbar.appendChild(layerId);
    demo.Util.addButton(layerTableToolbar, 'Add layer', 'add', function () {
        self.layerBox.add(new twaver.Layer(layerId.value));
        layerId.value = '';
    });
    var btnDelete = demo.Util.addButton(layerTableToolbar, 'Delete selected layers', 'delete', function () {
        self.layerBox.getSelectionModel().getSelection().forEach(function (layer) {
            self.layerBox.remove(layer);
        });
    });
    var btnTop = demo.Util.addButton(layerTableToolbar, 'Move selected layers to top', 'top', function () {
        self.layerBox.moveSelectionToTop();
    });
    var btnUp = demo.Util.addButton(layerTableToolbar, 'Move selected layers up', 'up', function () {
        self.layerBox.moveSelectionUp();
    });
    var btnDown = demo.Util.addButton(layerTableToolbar, 'Move selected layers down', 'down', function () {
        self.layerBox.moveSelectionDown();
    });
    var btnBottom = demo.Util.addButton(layerTableToolbar, 'Move selected layers to bottom', 'bottom', function () {
        self.layerBox.moveSelectionToBottom();
    });
    btnDelete.setAttribute('disabled', 'disabled');
    btnTop.setAttribute('disabled', 'disabled');
    btnUp.setAttribute('disabled', 'disabled');
    btnDown.setAttribute('disabled', 'disabled');
    btnBottom.setAttribute('disabled', 'disabled');
    this.layerBox.getSelectionModel().addSelectionChangeListener(function (e) {
        var isEmpty = this.layerBox.getSelectionModel().size() == 0;
        if (isEmpty) {
            btnDelete.setAttribute('disabled', 'disabled');
            btnTop.setAttribute('disabled', 'disabled');
            btnUp.setAttribute('disabled', 'disabled');
            btnDown.setAttribute('disabled', 'disabled');
            btnBottom.setAttribute('disabled', 'disabled');
        } else {
            btnDelete.removeAttribute('disabled');
            btnTop.removeAttribute('disabled');
            btnUp.removeAttribute('disabled');
            btnDown.removeAttribute('disabled');
            btnBottom.removeAttribute('disabled');
        }
    }, this);
    var layerTablePane = new BorderPane(new TablePane(this.layerTable), layerTableToolbar);
    layerTablePane.setTopHeight(25);

    this.addTab('Layer Table', layerTablePane);
},
initAlarmTable: function () {
    this.alarmTable.setEditable(true);
    var column = demo.Util.createColumn(this.alarmTable, 'Alarm Severity', 'alarmSeverity', 'accessor', 'string', true);
    column.setWidth(120);
    column.setHorizontalAlign('center');
    var setValue = column.setValue;
    column.setValue = function (data, value, view) {
        value = twaver.AlarmSeverity.getByName(value);
        setValue.call(column, data, value, view);
    };
    column.setEnumInfo(twaver.AlarmSeverity.severities.toArray());
    demo.Util.createColumn(this.alarmTable, 'Id', 'id', 'accessor', 'string').setWidth(50);
    demo.Util.createColumn(this.alarmTable, 'Element Id', 'elementId', 'accessor', 'string').setWidth(100);
    demo.Util.createColumn(this.alarmTable, 'Acked', 'acked', 'accessor', 'boolean', true).setWidth(50);
    demo.Util.createColumn(this.alarmTable, 'Cleared', 'cleared', 'accessor', 'boolean', true).setWidth(50);

    this.addTab('Alarm Table', new TablePane(this.alarmTable));
},
addTab: function (name, view, selected) {
    var tab = new twaver.Tab(name);
    tab.setName(name);
    tab.setView(view)
    this.tabPane.getTabBox().add(tab);
    if (selected) {
        this.tabPane.getTabBox().getSelectionModel().setSelection(tab);
    }
},
refreshLayerId: function () {
    var layers = [];
    this.layerBox.forEach(function (layer) {
        layers.push(layer.getId());
    });
    this.sheet.getPropertyBox().forEach(function (property) {
        if (property.getPropertyName() === 'layerId') {
            property.setEnumInfo(layers);
        }
    });
},
doAlign: function (type) {
    var nodes = this.network.getSelectionModel().getSelection().toArray();
    demo.Util.align(nodes, type);
},
doEvenSpace: function (isHorizontal) {
    var nodes = this.network.getSelectionModel().getSelection().toArray();
    demo.Util.evenSpace(nodes, isHorizontal);
}
});