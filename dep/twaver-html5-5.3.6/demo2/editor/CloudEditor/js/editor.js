var editor = window.editor = {};

$(function() {
  $("#toolbar button").button();

  var accordionPane = new editor.AccordionPane();
  var network = window.network = new editor.GridNetwork();
  var contentPane = document.createElement('div');
  contentPane.setAttribute('class', 'editor-container');
  contentPane.appendChild(network.getView());
  contentPane.appendChild(accordionPane.getView());

  function adjustBounds() {
    network.adjustBounds({
      x: 200,
      y: 0,
      width: contentPane.clientWidth - 200,
      height: contentPane.clientHeight
    });
  }

  $('.main').append($(contentPane));
  
  network.initOverview();
  network.initPropertySheet();

  adjustBounds();
  accordionPane.initView();

  window.onresize = function(e) {
    adjustBounds();
    accordionPane.refresh();
  };
});

editor.isFullScreenSupported = function() {
  var docElm = document.documentElement;
  return docElm.requestFullscreen || docElm.webkitRequestFullScreen || docElm.mozRequestFullScreen;
};

editor.toggleFullscreen = function() {
  if (editor.isFullScreenSupported()) {
    var fullscreen = document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen;
    if (!fullscreen) {
      var docElm = document.documentElement;
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }
};

editor.getAngle = function (p1, p2) {
  return Math.atan2(p2.y - p1.y, p2.x - p1.x);
};
editor.fixNodeLocation = function (node) {
  var location = node.getLocation();
  location = editor.fixLocation(location);
  node.setLocation(location);
};
var layerIndex = 0;
editor.addNode = function(box, obj, centerLocation, host) {
  var clients;
  if (obj.type === 'layer') {
    clients = {
      title: '未命名层' + (++layerIndex),
      description: ''
    };
  } else if (obj.type === 'ecs') {
    clients = {
      cpu: 1,
      memory: 512,
      bandwidth: 1,
      sysDisk: 1,
      dataDisk: 0
    };
  } else if (obj.type === 'rds') {
    clients = {
      dbType: 'MySQL',
      dbVersion: '5.1',
      memory: 240
    };
  }
  var node = new twaver.Follower({
    image: obj.type,
    location: centerLocation,
    clients: clients
  });
  if (obj.type === 'layer') {
    node.setLayerId('layer');
  } else {
    node.setHost(host);
  }
  if (obj.width && obj.height) {
    node.setSize(obj.width, obj.height);
  }
  node.setCenterLocation(centerLocation);
  box.add(node);
  box.getSelectionModel().setSelection(node);
};

var GAP = 10;
editor.fixLocation = function (location, viewRect) {
  var x = parseInt(location.x / GAP) * GAP;
  var y = parseInt(location.y / GAP) * GAP;
  if (viewRect) {
    if (x !== location.x) {
      if (location.x > 0) {
        x += GAP;
      }
    }
    if (y !== location.y) {
      if (location.y > 0) {
        y += GAP;
      }
    }
  }
  return { x: x, y: y };
};

editor.fixSize = function (size) {
  var width = parseInt(size.width / GAP) * GAP;
  var height = parseInt(size.height / GAP) * GAP;
  if (width != size.width) {
    width += GAP;
  }
  if (height != size.height) {
    height += GAP;
  }
  return { width: width, height: height };
};

editor.addStyleProperty = function (box, propertyName, category, name) {
  return editor._addProperty(box, propertyName, category, name, 'style');
};
editor.addClientProperty = function (box, propertyName, category, name) {
  return editor._addProperty(box, propertyName, category, name, 'client');
};
editor.addAccessorProperty = function (box, propertyName, category, name) {
  return editor._addProperty(box, propertyName, category, name, 'accessor');
};
editor._addProperty = function (box, propertyName, category, name, proprtyType) {
  var property = new twaver.Property();
  property.setCategoryName(category);
  property.setName(name);
  property.setEditable(true);
  property.setPropertyType(proprtyType);
  property.setPropertyName(propertyName);

  var valueType;
  if (proprtyType === 'style') {
    valueType = twaver.SerializationSettings.getStyleType(propertyName);
  } else if (proprtyType === 'client') {
    valueType = twaver.SerializationSettings.getClientType(propertyName);
  } else {
    valueType = twaver.SerializationSettings.getPropertyType(propertyName);
  }
  if (valueType) {
    property.setValueType(valueType);
  }

  box.add(property);
  return property;
};