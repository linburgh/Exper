ChipDemo = function () {
    var self = this;
    this.box = new ElementBox();
    this.network = new twaver.network.Network(this.box);
    this.canvasNetwork = new twaver.canvas.Network(this.box);
    this.image = document.createElement("img");
    this.network.hPinNumber = 4; this.network.vPinNumber = 5;
    this.canvasNetwork.hPinNumber = 4; this.canvasNetwork.vPinNumber = 5;
    this.zoomTextSpan = document.createElement("span");
    this.network.getView().addEventListener("dragenter", this.dragEnter, false);
    this.network.getView().addEventListener('dragover', this.dragEnter, false);
    this.network.getView().addEventListener('drop', function (e) { self.drop(e) }, false);

    this.canvasNetwork.getView().addEventListener("dragenter", this.dragEnter, false);
    this.canvasNetwork.getView().addEventListener('dragover', this.dragEnter, false);
    this.canvasNetwork.getView().addEventListener('drop', function (e) { self.drop(e) }, false);

    this.networkType = 0;
    self.zoomTextSpan.innerHTML = "Zoom:1 &nbsp;&nbsp;&nbsp;R:0  C:0 N:";
};
twaver.Util.ext('ChipDemo', Object, {
    init: function () {
        var self = this;
        var silderNetwork = new twaver.network.Network();
        var backgroundNode = new Node();
        backgroundNode.setSize(6, 2);
        backgroundNode.setStyle("body.type", "vector");
        backgroundNode.setStyle("vector.fill.color", "#e4e4e4");
        backgroundNode.setStyle("vector.outline.width", "1");
        backgroundNode.setStyle("vector.outline.color", "#c8c8c8");
        var silderNode = new Node();
        silderNode.setStyle("body.type", "vector");
        silderNode.setStyle("vector.shape", "circle");
        silderNode.setStyle("vector.fill.color", "#ffffff");
        silderNode.setStyle("vector.gradient", "spread.diagonal");
        silderNode.setStyle("vector.gradient.color", "#0ebbe7");
        silderNode.setStyle("select.style", "none");
        silderNode.setSize(15, 15);
        
        silderNode.setLocation = function (x, y) {
            if (y > backgroundNode.getHeight() - 12) y = backgroundNode.getHeight() - 12;
            var zoom = Math.round((y + backgroundNode.getHeight() / 5 / 10) / (backgroundNode.getHeight() / 5) * 100) / 100;
            Node.prototype.setLocation.call(silderNode, (parseInt(silderNetwork.getView().style.width) - silderNode.getWidth()) / 2, y);
            var size = null;
            if (self.networkType == 0) {
                size = self.canvasNetwork.getCanvasSize();
                self.canvasNetwork.setZoom(zoom, false);
            } else {
                size = { width: self.network.getView().scrollWidth, height: self.network.getView().scrollHeight }
                self.network.setZoom(zoom, false);
            }
            self.zoomTextSpan.innerHTML = "Zoom:" + zoom + " &nbsp;&nbsp;&nbsp;R:" + self.height + " C:" + self.width + " N:" + self.box.size();
        }
        
        silderNetwork.getElementBox().add(backgroundNode);
        silderNetwork.getElementBox().add(silderNode);
        
        silderNetwork.getElementBox().getSelectionModel().setFilterFunction(function (ele) {
            return ele === silderNode;
        });
        silderNetwork.setRectSelectEnabled(false);
        
        silderNetwork.validateImpl = function (delay) {
            twaver.network.Network.prototype.validateImpl.call(silderNetwork, delay);
            backgroundNode.setSize(6, parseInt(silderNetwork.getView().style.height) - 4);
            backgroundNode.setLocation((parseInt(silderNetwork.getView().style.width) - backgroundNode.getWidth()) / 2, 2);
            silderNode.setLocation(0, silderNode.getY());
        }

        var controlTable = document.getElementById("tableControlDiv").firstChild;

        var borderPane = new twaver.controls.BorderPane(silderNetwork, this.zoomTextSpan, null, controlTable);

        var imageTable = document.createElement("table");
        var tbody = document.createElement("tbody");
        imageTable.appendChild(tbody);
        var tr = document.createElement("tr");
        tbody.appendChild(tr);
        var td = document.createElement("td");
        td.align = "center";
        tr.appendChild(td);

        td.appendChild(this.image);

        this.image.onload = function () {
            self.convertImgToNetwork(self.image);
        };

        this.networkToolbar = demo.Util.createNetworkToolbar(this.network);
        this.canvasNetworkToolbar = demo.Util.createNetworkToolbar(this.canvasNetwork);
        this.networkPane = new twaver.controls.BorderPane(this.canvasNetwork, this.canvasNetworkToolbar);

        var rightPane = new twaver.controls.SplitPane(borderPane, imageTable, "vetical", 0.7);
        var mainSplit = new twaver.controls.SplitPane(this.networkPane, rightPane, 'horizontal', 0.8);


        demo.Util.appendChild(mainSplit.getView(), document.getElementById('main'), 0, 0, 0, 0);
        window.onresize = function (e) { mainSplit.invalidate(); };

        this.image.src = "../images/logo.png";
    },
    convertImgToNetwork: function (image) {
        this.box.clear();
        var canvas = document.createElement("canvas");
        var max = image.width > image.height ? image.width : image.height;
        var width = image.width, height = image.height;
        if (image.width * image.height > 10000) {
            var ratio = 100 / max;
            if (image.width > image.height) {
                width = 100;
                height = Math.round(image.height * ratio);
            } else {
                height = 100;
                width = Math.round(image.width * ratio);
            }
        }
        var ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, width, height);
        this.width = width;
        this.height = height;
        for (var y = 0; y < height; y += 1) {
            for (var x = 0; x < width; x += 1) {
                var imageData = ctx.getImageData(x, y, 1, 1);
                var pix = imageData.data;
                if (pix[3] > 0 || this.network.transparentPixelsVisible) {
                    var node = new demo.ChipNode();
                    node.setLocation(x * node.getWidth() + x * 25, y * node.getHeight() + y * 25);
                    node.setStyle("body.type", "vector");
                    node.setStyle("vector.fill.color", "rgba(" + (pix[0]) + "," + (pix[1]) + "," + (pix[2]) + "," + (pix[3]) + ")");
                    this.box.add(node);
                }
            }
        }
        this.zoomTextSpan.innerHTML = "Zoom:" + this.network.getZoom() + " &nbsp;&nbsp;&nbsp;R:" + this.height + " C:" + this.width + " N:" + this.box.size();
    },
    setTransparentPixelsVisible: function (v) {
        this.network.transparentPixelsVisible = v;
        this.canvasNetwork.transparentPixelsVisible = v;
        this.box.clear();
        this.convertImgToNetwork(this.image);
    },
    setPinVisible: function (v) {
        this.network.pinVisible = v;
        this.canvasNetwork.pinVisible = v;
    },
    setHPinNumber: function (v) {
        this.network.hPinNumber = v;
        this.canvasNetwork.hPinNumber = v;
    },
    setVPinNumber: function (v) {
        this.network.vPinNumber = v;
        this.canvasNetwork.vPinNumber = v;
    },
    refreshUI: function () {
        if (this.networkType == 0) {
            this.canvasNetwork.invalidateElementUIs();
        } else {
            this.network.invalidateElementUIs();
        }
    },
    switchNetwork: function (type) {
        if (type == 0) {
            this.canvasNetwork.setZoom(this.network.getZoom(), false);
            var w = this.canvasNetwork.getViewRect().width;
            var h = this.canvasNetwork.getViewRect().height;
            this.canvasNetwork.setViewRect(this.network.getView().scrollLeft, this.network.getView().scrollTop, w, h);
            this.networkPane.setCenter(this.canvasNetwork);
            this.networkPane.setTop(this.canvasNetworkToolbar);
        } else {
            this.network.setZoom(this.canvasNetwork.getZoom(), false);
            this.networkPane.setCenter(this.network);
            this.network.getView().scrollLeft = this.canvasNetwork.getViewRect().x;
            this.network.getView().scrollTop = this.canvasNetwork.getViewRect().y;
            this.networkPane.setTop(this.networkToolbar);
        }
        this.networkType = type;

        this.refreshUI();
    },
    dragEnter: function (e) {
        e.stopPropagation();
        e.preventDefault();
    },
    drop: function (e) {
        var self = this;
        e.stopPropagation();
        e.preventDefault();
        var fileList = e.dataTransfer.files, reader = new FileReader();
        reader.onload = function (e) {
            self.image.src = this.result;
        }
        reader.readAsDataURL(fileList[0]);
    }
});