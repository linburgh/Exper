twaver.Styles.setStyle('select.style', 'none');
twaver.Styles.setStyle('link.type', 'orthogonal');
twaver.Styles.setStyle('link.corner', 'none');
twaver.Styles.setStyle('link.pattern', [8, 8]);

editor.GridNetwork = function(box) {
  editor.GridNetwork.superClass.constructor.call(this, box);
  this.init();
};

twaver.Util.ext(editor.GridNetwork, twaver.vector.Network, {
  init: function() {
    this.box = this.getElementBox();
    this.setKeyboardRemoveEnabled(false);
    this.setToolTipEnabled(false);
    this.setTransparentSelectionEnable(true);
    this.setMinZoom(0.001);
    this.setMaxZoom(100);
    this.getView().setAttribute('draggable', 'true');
    var self = this;
    this._curveLine = true;
    this._showLine = true;
    this._lineTip = true;
    this.setVisibleFunction(function (data) {
      if (data instanceof twaver.Link) {
        return self._showLine;
      }
      return true;
    });
    this.getLabel = function (data) {
      if (data instanceof twaver.Link) {
        if (self._lineTip) {
          return data.getClient('title') + '\n' + data.getClient('description');
        }
        return null;
      }
      return data.getName();
    };
    this.setLinkPathFunction(function (linkUI, defaultPoints) {
      if (defaultPoints.size() !== 4) {
        return defaultPoints;
      }
      if (this._curveLine) {
        result = new twaver.List();
        var from = defaultPoints.get(0);
        var to = defaultPoints.get(3);
        var center = { x: (from.x + to.x) / 2, y: (from.y + to.y) / 2 };
        result.add(from);
        var p1 = defaultPoints.get(1);
        var p2 = defaultPoints.get(2);
        if (p1.x === p2.x) {
          p1 = { x: (from.x + p1.x) / 2, y: p1.y };
          p2 = { x: (to.x + p2.x) / 2, y: p2.y };
        } else {
          p1 = { x: p1.x, y: (from.y + p1.y) / 2 };
          p2 = { x: p2.x, y: (to.y + p2.y) / 2 };
        }
        result.add(new twaver.List([p1, center]));
        result.add(new twaver.List([p2, to]));
        result.add(to);
        return result;
      } else {
        return defaultPoints;
      }
    });
    this.getInnerColor = function (data) {
      if (data instanceof twaver.Link) {
        var sm = this.getSelectionModel();
        return sm.contains(data)
          || sm.contains(data.getFromNode())
          || sm.contains(data.getToNode()) ? 'rgba(0, 128, 0, 1)' : 'rgba(0, 128, 0, 0.3)';
      }
      return null;
    };
    this.box.getLayerBox().add(new twaver.Layer('layer'), 0);

    this.initListener();
    this.initToolbar();
  },
  initOverview: function () {
    var overview = new twaver.vector.Overview(this);
    overviewView = overview.getView();
    overviewView.id = 'overviewDiv';
    overviewView.style.background = 'white';
    overviewView.style.position = 'absolute';
    overviewView.style.right = '20px';
    overviewView.style.bottom = '20px';
    overviewView.style.width = '200px';
    overviewView.style.height = '200px';
    $('.main').append(overviewView);
  },
  initPropertySheet: function () {
    var sheet = this.sheet = new twaver.controls.PropertySheet(this.box);
    var sheetView = sheet.getView();
    sheetView.style.background = 'white';
    sheetView.style.position = 'absolute';
    sheetView.style.right = '20px';
    sheetView.style.top = '20px';
    sheetView.style.width = '200px';
    sheetView.style.height = '200px';
    sheetView.style.display = 'none';
    $('.main').append(sheetView);

    sheet.setEditable(true);
    var sheetBox = sheet.getPropertyBox();
    var layerVisible = function (data) {
      return data instanceof twaver.Node && data.getImage() === 'layer';
    };
    var rdsVisible = function (data) {
      return data instanceof twaver.Node && data.getImage() === 'rds';
    };
    var ecsVisible = function (data) {
      return data instanceof twaver.Node && data.getImage() === 'ecs';
    };
    var linkVisible = function (data) {
      return data instanceof twaver.Link;
    };

    editor.addClientProperty(sheetBox, 'title', null, '标题').isVisible = function (data) {
      return layerVisible(data) || linkVisible(data);
    };
    editor.addClientProperty(sheetBox, 'description', null, '描述').isVisible = function (data) {
      return layerVisible(data) || linkVisible(data);
    };

    editor.addClientProperty(sheetBox, 'cpu', null, 'CPU(核)').isVisible = ecsVisible;
    editor.addClientProperty(sheetBox, 'memory', null, '内存(M)').isVisible = function (data) {
      return rdsVisible(data) || ecsVisible(data);
    };
    editor.addClientProperty(sheetBox, 'bandwidth', null, '带宽(M)').isVisible = ecsVisible;
    //editor.addClientProperty(sheetBox, 'sysDisk', null, '系统盘').isVisible = ecsVisible;
    editor.addClientProperty(sheetBox, 'dataDisk', null, '数据盘').isVisible = ecsVisible;

    editor.addClientProperty(sheetBox, 'dbType', null, '数据库类型').isVisible = rdsVisible;
    editor.addClientProperty(sheetBox, 'dbVersion', null, '数据库版本').isVisible = rdsVisible;
  },
  initToolbar: function() {
    var self = this;
    var box = this.box;
    var undoManager = box.getUndoManager();
    var btnUndo = $('#undo');
    var btnRedo = $('#redo');
    btnUndo.button('option', 'disabled', true);
    btnRedo.button('option', 'disabled', true);
    undoManager.setEnabled(true);
    undoManager.on(function(e) {
      btnUndo.button('option', 'disabled', !undoManager.canUndo());
      btnRedo.button('option', 'disabled', !undoManager.canRedo());
    });
    btnUndo.click(function() {
      undoManager.undo();
    });
    btnRedo.click(function() {
      undoManager.redo();
    });
    $('#fullscreen').click(function() {
      editor.toggleFullscreen();
    });
    if (!editor.isFullScreenSupported()) {
      $('#fullscreen').toggle(0);
    }
    $('#link').click(function() {
      self.setCurveLine(!self.isCurveLine());
    });
    $('#line').click(function() {
      self.setShowLine(!self.isShowLine());
    });
    $('#tip').click(function() {
      self.setLineTip(!self.isLineTip());
    });
    $('#overview').click(function() {
      $('#overviewDiv').toggle();
    });
    $('#zoomIn').click(function() {
      self.zoomIn();
    });
    $('#zoomOut').click(function() {
      self.zoomOut();
    });
    $('#zoomOverview').click(function() {
      self.zoomOverview();
    });
    $('#zoomReset').click(function() {
      self.zoomReset();
    });
    $('#export').click(function() {
      var canvas = network.toCanvas(network.getCanvasSize().width, network.getCanvasSize().height);
      if (twaver.Util.isIE) {
        var w = window.open();
        w.document.open();
        w.document.write("<img src='" + canvas.toDataURL() + "'/>");
        w.document.close();
      } else {
        window.open(canvas.toDataURL(), 'network.png');
      }
    });
  },
  initListener: function() {
    _twaver.html.addEventListener('keydown', 'handle_keydown', this.getView(), this);
    _twaver.html.addEventListener('dragover', 'handle_dragover', this.getView(), this);
    _twaver.html.addEventListener('drop', 'handle_drop', this.getView(), this);
    _twaver.html.addEventListener('mousedown', 'handle_mousedown', this.getView(), this);
    _twaver.html.addEventListener('mousemove', 'handle_mousemove', this.getView(), this);
    _twaver.html.addEventListener('mouseup', 'handle_mouseup', this.getView(), this);
    var box = this.box;
    var sm = this.getSelectionModel();
    var self = this;
    var changing = false;

    var buttonLayer = new twaver.Layer('button');
    box.getLayerBox().add(buttonLayer);
    var infoNode = this.infoNode = new twaver.Follower({
      image: 'info',
      layerId: 'button'
    });
    infoNode.setVisible(false);
    box.add(infoNode);
    var optionNode = this.optionNode = new twaver.Follower({
      image: 'option',
      layerId: 'button'
    });
    optionNode.setVisible(false);
    box.add(optionNode);
    var linkNode = this.linkNode = new twaver.Follower({
      image: 'link',
      layerId: 'button'
    });
    linkNode.setVisible(false);
    box.add(linkNode);
    var fourthNode = this.fourthNode = new twaver.Follower({
      image: 'fourth',
      layerId: 'button'
    });
    fourthNode.setVisible(false);
    box.add(fourthNode);

    sm.setSelectionMode('singleSelection');
    this.setMovableFunction(function (data) {
      return data.getLayerId() !== 'button';
    });
    sm.addSelectionChangeListener(function (e) {
      if (changing) {
        return;
      }
      var data = sm.getLastData();
      if (data && data.getLayerId() === 'button') {
        changing = true;
        sm.setSelection(data.getHost());
        changing = false;
        return;
      }
      self.sheet.getView().style.display = data ? 'block' : 'none';
      box.getUndoManager().setSuspended(true);
      var visible = data instanceof twaver.Node;
      infoNode.setVisible(visible);
      optionNode.setVisible(visible);
      linkNode.setVisible(visible);
      fourthNode.setVisible(visible);
      if (visible) {
        infoNode.setHost(data);
        optionNode.setHost(data);
        linkNode.setHost(data);
        fourthNode.setHost(data);
        self.refreshButtonNodeLocation(data);
      }
      box.getUndoManager().setSuspended(false);
    });
    box.addDataBoxChangeListener(function (e) {
      if (e.kind === 'preAdd' && e.data instanceof twaver.Node) {
        editor.fixNodeLocation(e.data);
      }
      self.invalidateElementUIs();
    });
    box.addDataPropertyChangeListener(function (e) {
      self.invalidateElementUIs();
    });
    this.addPropertyChangeListener(function (e) {
      if (e.property === 'movingElement') {
        editor.fixNodeLocation(self.getSelectionModel().getLastData());
      }
    });
  },
  refreshButtonNodeLocation: function (node) {
    var rect = node.getRect();
    this.infoNode.setCenterLocation({ x: rect.x, y: rect.y });
    this.optionNode.setCenterLocation({ x: rect.x, y: rect.y + rect.height });
    this.linkNode.setCenterLocation({ x: rect.x + rect.width, y: rect.y });
    this.fourthNode.setCenterLocation({ x: rect.x + rect.width, y: rect.y + rect.height });
  },
  handle_mousedown: function(e) {
    var data = this.getElementAt(e);
    if (data) {
      if (data.getLayerId() === 'button') {
        this.__button = true;
        this.setInteractions(null);
        if (data.getImage() === 'fourth' && data.getHost().getImage() === 'layer') {
          this.__startPoint = this.getLogicalPoint(e);
          this.__resizeNode = data.getHost();
          this.__originSize = this.__resizeNode.getSize();
          this.box.getUndoManager().startBatch();
          this.__resize = true;
        }
        if (data.getImage() === 'link') {
          this.__createLink = true;
          this.__fromButton = data;
        }
      }
    } else {
      this.__dragging = true;
    }
  },
  handle_mousemove: function(e) {
    var point = this.getLogicalPoint(e);
    if (this.__resize) {
      this.__resizeNode.setSize(this.__originSize.width + point.x - this.__startPoint.x, this.__originSize.height + point.y - this.__startPoint.y);
      this.refreshButtonNodeLocation(this.__resizeNode);
      return;
    }
    if (this.__createLink) {
      this.__currentPoint = point;
      this.invalidateElementUIs();
    }
    var element = this.getElementAt(e);
    if (element === this.__focusElement) {
      return;
    }
    this.box.getUndoManager().setSuspended(true);
    if (this.__focusElement) {
      this.__focusElement.setClient('focus', false);
    }
    if (element &&
        ((!this.__createLink
            && element.getLayerId() === 'button'
            && (element.getImage() !== 'fourth'
              || (element.getHost().getImage()=== 'layer' || element.getHost().getImage()=== 'ecs')))
          || (this.__createLink
            && element !== this.__fromButton.getHost()
            && element instanceof twaver.Node
            && element.getLayerId() !== 'button'
            && !twaver.Util.isSharedLinks(this.__fromButton.getHost(), element)
            && element.getHost() !== this.__fromButton.getHost()
            && this.__fromButton.getHost().getHost() !== element))) {
      element.setClient('focus', true);
      this.__focusElement = element;
    } else {
      this.__focusElement = null;
    }
    this.box.getUndoManager().setSuspended(false);
  },
  handle_mouseup: function(e) {
    if (this.__dragging) {
      var rect = this.getViewRect();
      var location = editor.fixLocation(rect, true);
      this.setViewRect(location.x, location.y, rect.width, rect.height);
      this.__dragging = false;
    }
    if (this.__button) {
      this.setDefaultInteractions();
      this.__button = false;
    }
    if (this.__resize) {
      this.__resizeNode.setSize(editor.fixSize(this.__resizeNode.getSize()));
      this.refreshButtonNodeLocation(this.__resizeNode);
      this.box.getUndoManager().endBatch();
      this.__resizeNode = null;
      this.__resize = false;
    }
    if (this.__createLink) {
      if (this.__focusElement) {
        var link = new twaver.Link(this.__fromButton.getHost(), this.__focusElement);
        link.setClient('title', '线条标题');
        link.setClient('description', '线条描述');
        link.setStyle('label.position', 'top.top');
        this.box.add(link);
        this.box.getUndoManager().setSuspended(true);
        this.__focusElement.setClient('focus', false);
        this.box.getUndoManager().setSuspended(false);
        this.__focusElement = null;
      }
      this.__fromButton = null;
      this.__createLink = false;
      this.invalidateElementUIs();
    }
  },
  handle_keydown: function(e) {
    var myKey = false;
    if (e.keyCode == 46) {
      if (this.getSelectionModel().getSelection().size() > 0) {
        if (confirm('Sure to Delete')) {
          this.removeSelection();
        }
      }
      myKey = true;
    }
    if (e.keyCode == 37) { //Left
      this._moveSelectionElements("left");
      myKey = true;
    }
    if (e.keyCode == 38) { //Top
      this._moveSelectionElements("top");
      myKey = true;
    }
    if (e.keyCode == 39) { //Right 
      this._moveSelectionElements("right");
      myKey = true;
    }
    if (e.keyCode == 40) { //Bottom 
      this._moveSelectionElements("bottom");
      myKey = true;
    }

    if (myKey) {
      e.preventDefault();
      e.stopPropagation();
    }

  },
  //get element by mouse event, set lastElement as ImageShapeNode
  handle_dragover: function(e) {
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
    e.dataTransfer.dropEffect = 'copy';

    var element = this.getElementAt(e);

    return false;
  },
  handle_drop: function(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      e.returnValue = false;
    }
    var text = e.dataTransfer.getData('Text');
    if (!text) {
      return false;
    }
    var obj = JSON.parse(text);
    var centerLocation = this.getLogicalPoint(e);
    var node = this.getElementAt(e);
    if (obj.type === 'os') {
      if (node instanceof twaver.Node && node.getImage() === 'ecs') {
        var undoManager = this.box.getUndoManager();
        undoManager.batch(function () {
          node.setClient('os', obj.os);
          node.setClient('version', obj.version);
          node.setClient('bit', obj.bit);
        });
      } else {
        alert('系统镜像只能拖放到 ECS 组件上');
      }
    } else {
      if (obj.type === 'layer' || (node instanceof twaver.Node && node.getImage() === 'layer')) {
        editor.addNode(this.box, obj, centerLocation, node);
      } else {
        alert('除SLB和自定义组件，组件只能放置在层内');
      }
    }
    this.getView().focus();
    return false;
  },
  _moveSelectionElements: function(type) {
    var box = this.box;
    var selections = box.getSelectionModel().getSelection();
    if (selections.size() > 0) {
      var xoffset = 0;
      var yoffset = 0;
      if (type === "left") {
        xoffset = -GAP;
      }
      if (type === "right") {
        xoffset = GAP;
      }
      if (type === "top") {
        yoffset = -GAP;
      }
      if (type === "bottom") {
        yoffset = GAP;
      }
      box.getUndoManager().startBatch();
      twaver.Util.moveElements(selections, xoffset, yoffset, false);
      box.getUndoManager().endBatch();
    }
  },
  isCurveLine: function () {
    return this._curveLine;
  },
  setCurveLine: function (value) {
    this._curveLine = value;
    this.invalidateElementUIs();
  },
  isShowLine: function () {
    return this._showLine;
  },
  setShowLine: function (value) {
    this._showLine = value;
    this.invalidateElementUIs();
  },
  isLineTip: function () {
    return this._lineTip;
  },
  setLineTip: function (value) {
    this._lineTip = value;
    this.invalidateElementUIs();
  },
  paintTop: function (g) {
    if (this.__fromButton && this.__currentPoint) {
      var from = this.__fromButton.getCenterLocation();
      var to = this.__currentPoint;
      g.strokeStyle = 'green';
      g.lineWidth = 2;
      g.beginPath();
      g.moveTo(from.x, from.y);
      g.lineTo(to.x, to.y);
      g.stroke();
      g.beginPath();
      g.fillStyle = 'green';
      var p1 = { x: to.x - 12, y: to.y - 6 },
        p2 = { x: to.x - 8, y: to.y },
        p3 = { x: to.x - 12, y: to.y + 6 },
        angle = editor.getAngle(from, to);
      var matrix = _twaver.math.createMatrix(angle, to.x, to.y);
      p1 = matrix.transform(p1);
      p2 = matrix.transform(p2);
      p3 = matrix.transform(p3);
      g.moveTo(to.x, to.y);
      g.lineTo(p1.x, p1.y);
      g.lineTo(p2.x, p2.y);
      g.lineTo(p3.x, p3.y);
      g.closePath();
      g.fill();
    }
  },
  paintBottom: function(g) {
    var viewRect = this.getViewRect();
    var zoom = this.getZoom();
    var width = viewRect.width / zoom;
    var height = viewRect.height / zoom;
    var x = 0,
      y = 0;
    var colCount = width / GAP;
    var rowCount = height / GAP;
    g.save();
    g.strokeStyle = 'rgba(0,0,0,0.1)';
    g.lineWidth = 1;
    g.beginPath();
    g.translate(viewRect.x / zoom - 0.5, viewRect.y / zoom - 0.5);
    for (var col = 0; col < colCount; col++) {
      g.moveTo(x, 0);
      g.lineTo(x, height);
      x += GAP;
    }
    for (var row = 0; row < rowCount; row++) {
      g.moveTo(0, y);
      g.lineTo(width, y);
      y += GAP;
    }
    g.stroke();
    g.restore();
  }
});