function HtmlLabelNodeUI(network, element) {
    HtmlLabelNodeUI.superClass.constructor.call(this, network, element);
}
twaver.Util.ext(HtmlLabelNodeUI, twaver.network.NodeUI, {
    checkAttachments: function () {
        twaver.network.NodeUI.prototype.checkAttachments.call(this);
        this.checkComponentAttachment();
    },
    checkComponentAttachment: function () {
        if (!this._componentAttachment&&this._element.getStyle('component.content')) {
            this._componentAttachment = new HtmlComponentAttachment(this);
            this.addAttachment(this._componentAttachment);
        }
    },
    checkLabelAttachment: function () {
        var label = this._network.getLabel(this._element);
        if (label != null && label !== "") {
            if (!this._labelAttachment) {
                this._labelAttachment = new HtmlLabelAttachment(this);
                this.addAttachment(this._labelAttachment);
            }
        } else {
            if (this._labelAttachment) {
                this.removeAttachment(this._labelAttachment);
                this._labelAttachment = null;
            }
        }
    },
    checkAlarmAttachment: function () {
        var label = this._network.getAlarmLabel(this._element);
        if (label != null && label !== "") {
            if (!this._alarmAttachment) {
                this._alarmAttachment = new HtmlAlarmAttachment(this, false);
                this.addAttachment(this._alarmAttachment);
            }
        } else {
            if (this._alarmAttachment) {
                this.removeAttachment(this._alarmAttachment);
                this._alarmAttachment = null;
            }
        }
    }
});
//node
function HtmlLabelNode(id) {
    HtmlLabelNode.superClass.constructor.call(this, id);
}
twaver.Util.ext(HtmlLabelNode, twaver.Node, {
    getElementUIClass: function () {
        return HtmlLabelNodeUI;
    }
});


function HtmlLabelLinkUI(network, element) {
    HtmlLabelLinkUI.superClass.constructor.call(this, network, element);
}
twaver.Util.ext(HtmlLabelLinkUI, twaver.network.LinkUI, {
    checkAttachments: function () {
        twaver.network.NodeUI.prototype.checkAttachments.call(this);
        this.checkComponentAttachment();
    },
    checkComponentAttachment: function () {
        if (!this._componentAttachment) {
            this._componentAttachment = new HtmlComponentAttachment(this);
            this.addAttachment(this._componentAttachment);
        }
    },
    checkLabelAttachment: function () {
        var label = this._network.getLabel(this._element);
        if (label != null && label !== "") {
            if (!this._labelAttachment) {
                this._labelAttachment = new HtmlLabelAttachment(this);
                this.addAttachment(this._labelAttachment);
            }
        } else {
            if (this._labelAttachment) {
                this.removeAttachment(this._labelAttachment);
                this._labelAttachment = null;
            }
        }
    },
    checkAlarmAttachment: function () {
        var label = this._network.getAlarmLabel(this._element);
        if (label != null && label !== "") {
            if (!this._alarmAttachment) {
                this._alarmAttachment = new HtmlAlarmAttachment(this, false);
                this.addAttachment(this._alarmAttachment);
            }
        } else {
            if (this._alarmAttachment) {
                this.removeAttachment(this._alarmAttachment);
                this._alarmAttachment = null;
            }
        }
    }
});

function HtmlLabelLink(id, from, to) {
    HtmlLabelLink.superClass.constructor.call(this, id, from, to);
}
twaver.Util.ext(HtmlLabelLink, twaver.Link, {
    getElementUIClass: function () {
        return HtmlLabelLinkUI;
    }
});

AttachmentDemo = function () {
    this.box = new ElementBox();
    this.network = demo.Util.createDraggableNetwork();
    this.toolbar = demo.Util.createNetworkToolbar(this.network);
    this.pieChart = new twaver.charts.PieChart();
    this.barChart = new twaver.charts.BarChart();

    this.pieChart.getView().style.width = "100px";
    this.pieChart.getView().style.height = "100px";

    this.barChart.getView().style.width = "100px";
    this.barChart.getView().style.height = "100px";
    this.barChart.setYScaleTextVisible(false);
    var self = this;
    this.pieChart.formatValueText = function (value) {
        return Math.round(value);
    }
    this.barChart.formatValueText = function (value) {
        return Math.round(value);
    }

    this.network.addPropertyChangeListener(function (e) {
        if ('zoom' == e.property) {
            self.pieChart.setOuterZoom(e.newValue);
            self.barChart.setOuterZoom(e.newValue);
        }
    });

    twaver.Defaults.KEEP_DEFAULT_FUNCTION = function (e) {
        var node = e.target||e.srcElement;
        if (node.tagName != 'INPUT') return false;
        if (node.keeyDefault || node.getAttribute('keepDefault')) return true;
        while (node.parentNode) {
            node = node.parentNode;
            if (node == self.network.getView() || !node.getAttribute) return false;
            if (node.keeyDefault || node.getAttribute('keepDefault')) { return true };
        }
        return false;
    }

};
twaver.Util.ext('AttachmentDemo', Object, {
    init: function () {
        var main = document.getElementById('main');
        demo.Util.appendChild(this.toolbar, main, 0, 0, null, 0);
        demo.Util.appendChild(this.network.getView(), main, 25, 0, 0, 0);

        this.initBox();
        this.initPieChart();
        this.initBarChart();
        this.network.setElementBox(this.box);
        this.network.setLinkFlowEnabled(true);
        this.network.setSendToTopOnSelected(false);

        var view = this.network.getView();
        if (twaver.Util.isFirefox) {
            view.style.setProperty('background', 'url(../images/background/usa.gif) no-repeat,-moz-linear-gradient(top, #2074af 0%,#2c91d2 100%)', null);
        } else if (twaver.Util.isIE) {
            view.style.background = 'url(../images/background/usa.gif) no-repeat,#2c91d2';
        } else if (twaver.Util.isOpera) {
            view.style.setProperty('background', 'url(../images/background/usa.gif) no-repeat,-o-linear-gradient(top, #2074af 0%,#2c91d2 100%)', null);
        } else {
            view.style.setProperty('background', 'url(../images/background/usa.gif) no-repeat,-webkit-linear-gradient(top, #2074af 0%,#2c91d2 100%)', null);
        }
    },
    initBox: function () {
        this.startNode = new HtmlLabelNode();
        this.endNode = new HtmlLabelNode();
        this.startNode.setLocation(380, 156);
        this.startNode.setName('<b>Start</b>');
        this.startNode.setStyle('component.content', this.pieChart.getView());
        this.startNode.setStyle('component.fillcolor', 'rgba(255,255,0,0.8)');
        this.startNode.setStyle('component.position', 'topleft');
        this.startNode.setStyle('component.direction', 'aboveleft');
        this.startNode.setStyle('component.pointer.length', 20);
        this.startNode.setStyle('component.pointer.width', 40);

        this.endNode.setLocation(750, 380);
        this.endNode.setName('<b>End</b>');
        this.endNode.setStyle('component.content', this.barChart.getView());
        this.endNode.setStyle('component.fillcolor', 'rgba(255,255,0,0.8)');
        this.endNode.setStyle('component.position', 'topright');
        this.endNode.setStyle('component.direction', 'right');
        this.endNode.setStyle('component.pointer.length', 20);
        this.endNode.setStyle('component.pointer.width', 30);
        this.link = new HtmlLabelLink(this.startNode, this.endNode);
        this.link.setName('<div style="font-size:20px;color:white">hello,world<br/>I am flowing</div>');
        this.link.setStyle('label.rotatable', true);
        this.link.setStyle('link.type', 'flexional');
        this.link.setStyle('link.pattern', [10, 10]);
        this.link.setStyle('link.flow', true);
        this.link.setStyle('link.width', 6);
        this.link.setStyle('link.color', 'white');
        this.link.setStyle('link.flow.color', 'black');
        this.link.setStyle('component.content', document.getElementById('linkFlowColorDiv'));
        this.link.setStyle('component.fillcolor', 'rgba(200,200,200,0.5)');
        this.link.setStyle('component.pointer.width', 10);


        var htmlLabelNode = new HtmlLabelNode();
        htmlLabelNode.setLocation(200, 200);
        htmlLabelNode.setName("<div style='background:rgba(200,200,200,0.4)'>In case you thought that TWaver label had to be" +
			    "<p>boring, one line descriptions, the " +
			    "<p><font color=yellow size=+2>TWaver Team</font>" +
			    "<p> is happy to shatter your illusions.<p>" +
			    "In TWaver, they can use HTML to " +
			    "<ul><li>Have Lists<li><b>Bold</b> " +
			    "text<li><em>emphasized</em> " +
			    "text<li>text with <font color=red>Color</font>" +
			    "<li>text in different <font size=+3>sizes</font>" +
			    "<li>and <font face=AvantGarde>Fonts</font></ul>" +
			    "Oh, and they can be multi-line, too.</div>");

        this.box.add(htmlLabelNode);
        this.box.add(this.startNode);
        this.box.add(this.endNode);
        this.box.add(this.link);

        this.box.addDataPropertyChangeListener(this.dataPropertyChangeHandler, this);
    },
    createPieChartElement: function (name, value, color) {
        var element = new twaver.Element();
        element.setName(name);
        element.setStyle('chart.value', value);
        element.setStyle('chart.color', color);
        this.pieChart.getDataBox().add(element);
        return element;
    },
    createBarChartElement: function (name, value, color) {
        var element = new twaver.Element();
        element.setName(name);
        element.setStyle('chart.value', value);
        element.setStyle('chart.color', color);
        this.barChart.getDataBox().add(element);
        return element;
    },
    initPieChart: function () {
        this.startXElement = this.createPieChartElement('x', this.startNode.getLocation().x, 'red');
        this.startYElement = this.createPieChartElement('y', this.startNode.getLocation().y, 'blue');
    },
    initBarChart: function () {
        this.endXElement = this.createBarChartElement('x', this.endNode.getLocation().x, 'red');
        this.endYElement = this.createBarChartElement('y', this.endNode.getLocation().y, 'blue');
    },
    dataPropertyChangeHandler: function (e) {
        if (e.property === 'location') {
            if (e.source == this.startNode) {
                this.startXElement.setStyle('chart.value', e.newValue.x);
                this.startYElement.setStyle('chart.value', e.newValue.y);
            } else if (e.source == this.endNode) {
                this.endXElement.setStyle('chart.value', e.newValue.x);
                this.endYElement.setStyle('chart.value', e.newValue.y);
            }
        }
    }
});