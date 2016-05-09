StatesMapDemo = function () {
    this.box = new ElementBox();
    this.network = demo.Util.createDraggableNetwork(this.box);
    this.optionSheet = new PropertySheet();
};
twaver.Util.ext('StatesMapDemo', Object, {
    init: function () {
        twaver.SerializationSettings.setClientType("EMPLOYED", 'int');
        twaver.SerializationSettings.setClientType("UNEMPLOY", 'int');
        twaver.SerializationSettings.setClientType("MALE", 'int');
        twaver.SerializationSettings.setClientType("FEMALE", 'int');
        twaver.SerializationSettings.setClientType("STATE_ABBR", 'string');
        twaver.SerializationSettings.setClientType("STATE_NAME", 'string');
        twaver.SerializationSettings.setClientType("PERSONS", 'int');
        twaver.SerializationSettings.setClientType("FAMILIES", 'int');
        twaver.SerializationSettings.setClientType("HOUSHOLD", 'int');

        var self = this;
        var toolbar = demo.Util.createNetworkToolbar(this.network, 'Edit-Live');
        this.centerPane = new BorderPane(this.network, toolbar);
        this.centerPane.setTopHeight(25);
        this.editable = demo.Util.addCheckBox(toolbar, false, 'Editable', function () { self.network.invalidateSelectedElementUIs(); });
        demo.Util.addButton(toolbar, 'Reload', 'refresh', function () { self.initBox(); });
        this.initSheet();
        demo.Util.appendChild(this.centerPane.getView(), document.getElementById('main'), 0, 0, 0, 0);
        this.optionSheet.getView().style.width = '280px';
        this.optionSheet.getView().style.height = '100px';
        demo.Util.appendChild(this.optionSheet.getView(), this.centerPane.getView(), null, 17, 17, null);
        this.initPropertyPane();
        window.onresize = function (e) { self.centerPane.invalidate(); };

        this.network.setMovableFunction(function (element) {
            return self.editable.checked;
        });
        this.network.setEditableFunction(function (element) {
            return self.editable.checked;
        });

        this.network.setEditInteractions(false);
        this.network.getView().addEventListener('mousemove', function (e) {
            if (self.editable.checked) {
                return;
            }
            var element = self.network.getElementAt(e);
            self.selectElement(element);
        }, false);
        this.network.getSelectionModel().addSelectionChangeListener(this.selectionChange, this);

        this.initBox();
    },
    initSheet: function () {
        this.optionSheet.setEditable(true);
        var isCellEditable = this.optionSheet.isCellEditable;
        this.optionSheet.isCellEditable = function (data, property) {
            if (property.getPropertyName() === 'vector.fill.color') {
                return !data.getClient('random.color');
            }
            return isCellEditable.call(this, data, property);
        };
        var propertyBox = this.optionSheet.getPropertyBox();
        demo.Util.addClientProperty(propertyBox, "random.color").setValueType('boolean');
        demo.Util.addClientProperty(propertyBox, "vector.fill.color");
        demo.Util.addClientProperty(propertyBox, "select.color");
        demo.Util.addClientProperty(propertyBox, "vector.outline.width").setValueType('number');
        demo.Util.addClientProperty(propertyBox, "vector.outline.color");

        this.data = new twaver.Element();
        this.data.setClient("random.color", true);
        this.data.setClient("vector.fill.color", '#CCCCFF');
        this.data.setClient("select.color", '#202020');
        this.data.setClient("vector.outline.width", 0);
        this.data.setClient("vector.outline.color", '#FFFFFF');
        this.optionSheet.getDataBox().add(this.data);
        this.optionSheet.getDataBox().getSelectionModel().setSelection(this.data);
        this.optionSheet.getDataBox().addDataPropertyChangeListener(this.handlePropertyChange, this);
    },
    handlePropertyChange: function (e) {
        var name = demo.Util.getPropertyName(e);
        if (name === 'random.color') {
            this.changeStyle('vector.fill.color', this.data.getClient('vector.fill.color'), e.newValue);
        } else {
            this.changeStyle(name, e.newValue);
        }
    },
    initPropertyPane: function () {
        this.pieChart = new twaver.charts.PieChart();
        var data = new twaver.Element('employed');
        data.setName('Employed');
        this.pieChart.getDataBox().add(data);
        data = new twaver.Element('unemployed');
        data.setName('Unemployed');
        this.pieChart.getDataBox().add(data);

        this.barChart = new twaver.charts.BarChart();
        data = new twaver.Element('male');
        data.setName('Male');
        this.barChart.getDataBox().add(data);
        data = new twaver.Element('female');
        data.setName('Female');
        this.barChart.getDataBox().add(data);

        this.propertySheet = new PropertySheet();
        var propertyBox = this.propertySheet.getPropertyBox();
        demo.Util.addClientProperty(propertyBox, 'PERSONS');
        demo.Util.addClientProperty(propertyBox, 'FAMILIES');
        demo.Util.addClientProperty(propertyBox, 'HOUSHOLD');
        data = new twaver.Data();
        this.propertySheet.getDataBox().add(data);
        this.propertySheet.getDataBox().getSelectionModel().setSelection(data);

        var pieChartPane = new twaver.charts.ChartPane(this.pieChart, null, 'top');
        var barChartPane = new twaver.charts.ChartPane(this.barChart, null, 'top');
        var propertyPane = document.createElement('div');
        this.propertySheet.getView().style.height = '60px';
        barChartPane.getView().style.height = '100px';
        pieChartPane.getView().style.height = '100px';
        demo.Util.appendChild(this.propertySheet.getView(), propertyPane, 0, 0, null, 0);
        demo.Util.appendChild(pieChartPane.getView(), propertyPane, 60, 0, 100, 0);
        demo.Util.appendChild(barChartPane.getView(), propertyPane, null, 0, 0, 0);
        propertyPane.style.height = '260px';
        this.titlePane = new twaver.controls.TitlePane(propertyPane, '');
        this.titlePane.getView().style.width = '170px';
        this.titlePane.getView().style.height = '277px';
        demo.Util.appendChild(this.titlePane.getView(), this.centerPane.getView(), 17, 17, null, null);
        this.titlePane.getView().style.display = 'none';
    },
    initBox: function () {
        this.box.clear();
        /*var xml = document.getElementsByTagName("noscript")[0];
        xml = xml.innerText || xml.textContent;
        xml = demo.Util.loadXmlString(xml).documentElement;*/
        var xml = demo.Util.loadXmlFile('state.xml');
        var datas = xml.getElementsByTagName('f');

        for (var i = 0, count = datas.length; i < count; i++) {
            var features = datas[i];
            var node = new twaver.ShapeNode();

            node.setStyle('label.position', 'center');
            node.setStyle('label.fill', true);
            node.setStyle('label.fill.color', '#C0C0C0');
            node.setStyle('label.outline.width', 0);
            node.setStyle('label.outline.color', '#606060');
            node.setStyle('label.corner.radius', 3);

            node.setStyle('vector.fill', true);
            var fillColor = demo.Util.createColor(this.data.getClient('random.color') ? demo.Util.randomColor() : this.data.getClient('vector.fill.color'), 0.7);
            node.setStyle('vector.fill.color', fillColor);
            node.setStyle('vector.gradient', 'linear.northwest');
            node.setStyle("select.color", '#202020');
            node.setStyle("vector.outline.width", 0);
            node.setStyle("vector.outline.color", '#FFFFFF');

            var j, l, key, value, attribute;
            var attributes = features.getElementsByTagName('a');
            for (j = 0, l = attributes.length; j < l; j++) {
                attribute = attributes[j];
                key = attribute.getAttribute('n');
                value = attribute.getAttribute('v');
                if (key != "STATE_NAME" && key != "STATE_ABBR" && key != 'SUB_REGION') {
                    value = parseFloat(value);
                }
                node.setClient(key, value);
            }
            node.setName(node.getClient("STATE_ABBR"));
            node.setToolTip(node.getClient("STATE_NAME"));

            var segments = new twaver.List();
            var points = new twaver.List();
            attributes = features.getElementsByTagName('p');
            for (j = 0, l = attributes.length; j < l; j++) {
                attribute = attributes[j];
                var isMoveTo = attribute.getAttribute('s') == "m";
                segments.add(isMoveTo ? 'moveto' : 'lineto');
                points.add({ x: parseFloat(attribute.getAttribute('x')), y: parseFloat(attribute.getAttribute('y')) });
            }

            node.setSegments(segments);
            node.setPoints(points);
            this.box.add(node);
        }

        if (!this.editable.checked) {
            this.selectElement(this.box.getDatas().get(27));
        }
    },
    selectionChange: function (e) {
        var element = this.network.getSelectionModel().getLastData();
        if (element == null) {
            this.titlePane.getView().style.display = 'none';
        } else {
            var data = this.propertySheet.getDataBox().getSelectionModel().getLastData();
            data.setClient('PERSONS', element.getClient("PERSONS"));
            data.setClient('FAMILIES', element.getClient("FAMILIES"));
            data.setClient('HOUSHOLD', element.getClient("HOUSHOLD"));

            data = this.pieChart.getDataBox().getDataById('employed');
            data.setStyle('chart.value', element.getClient("EMPLOYED"));
            data = this.pieChart.getDataBox().getDataById('unemployed');
            data.setStyle('chart.value', element.getClient("UNEMPLOY"));

            data = this.barChart.getDataBox().getDataById('male');
            data.setStyle('chart.value', element.getClient("MALE"));
            data = this.barChart.getDataBox().getDataById('female');
            data.setStyle('chart.value', element.getClient("FEMALE"));
            this.titlePane.setTitle(element.getClient("STATE_ABBR") + " - " + element.getClient("STATE_NAME"));
            this.titlePane.getView().style.display = 'block';
        }
    },
    selectElement: function (element) {
        if (element !== this.lastElement && !this.network.isMovingElement() && !this.network.isEditingElement() && !this.network.isSelectingElement()) {
            if (element != null) {
                element.setStyle('vector.outline.color', this.data.getClient("select.color"));
            }
            if (this.lastElement != null) {
                this.lastElement.setStyle('vector.outline.color', this.data.getClient("vector.outline.color"));
            }
            this.lastElement = element;
            this.network.getSelectionModel().setSelection(element);
        }
    },
    changeStyle: function (style, value, random) {
        this.box.getDatas().forEach(function (element) {
            element.setStyle(style, random ? demo.Util.randomColor() : value);
        });
    }
});