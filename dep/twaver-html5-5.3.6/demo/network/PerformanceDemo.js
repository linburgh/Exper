PerformanceDemo = function () {
    this.box = new twaver.ElementBox();
    this.emptyBox = new twaver.ElementBox();
    this.network = new twaver.vector.Network(this.emptyBox);
    this.toolbar = document.createElement('div');
    this.chart = new twaver.charts.BarChart();
    this.txtRowCount = this.addInput('Row count:');
    this.txtColumnCount = this.addInput('Column count:');
    this.overview=new twaver.vector.Overview();
    demo.Util.initOverviewPopupMenu(this.overview);
    this.popupMenu = new twaver.controls.PopupMenu(this.network);
    twaver.Styles.setStyle('select.style', 'border');
};
twaver.Util.ext('PerformanceDemo', Object, {
    init: function () {
        this.chart.setType('group');
        this.chart.setXScaleTexts(new twaver.List(['DataBox Loading Time', 'Network Loading Time']));
        this.chart.formatValueText = function (value, data) {
            return value.toFixed(2);
        };

        this.tabPane = new twaver.controls.TabPane();
        this.tabPane.setTabRadius(8);
        this.tabPane.setTabGap(5);
        this.tabPane.setSelectBackground('#8080FF');
        this.tabPane.setTabBackground('#C0C0C0');

        var networkToolbar = demo.Util.createNetworkToolbar(this.network);
        this.networkPane = new twaver.controls.BorderPane(this.network, networkToolbar);
        this.networkPane.setTopHeight(25);
        this.networkTab = demo.Util.addTab(this.tabPane, 'Network', this.networkPane, true);
        this.chartTab = demo.Util.addTab(this.tabPane, 'Report', new twaver.charts.ChartPane(this.chart), false);
		
        var self = this;
        demo.Util.addButton(this.toolbar, 'Start', null, function () {
            self.test();
        });
        demo.Util.addButton(this.toolbar, 'Clear', null, function () {
            self.clear();
        });
		
		demo.Util.addCheckBox(this.toolbar, false, "OverView Visible", function (e) {
		    self.overview.setNetwork(self.overview.getNetwork() ? null : self.network);
			if(this.checked){
				overviewDiv.style.display="block";
			}else{
				overviewDiv.style.display="none";
			}
		});

        var centerPane = new twaver.controls.BorderPane(this.tabPane, this.toolbar);
        centerPane.setTopHeight(25);
        var view = centerPane.getView();
        document.body.appendChild(view);
        view.style.left = '10px';
        view.style.right = '10px';
        view.style.top = '10px';
        view.style.bottom = '10px';
		
		this.overview.setFillColor("rgba(184,211,240,0.8)");
		var overviewDiv=document.createElement("div");
		overviewDiv.style.background="white";
		overviewDiv.style.position="absolute";
		overviewDiv.style.right="20px";
		overviewDiv.style.bottom="20px";
		overviewDiv.style.width="300px";
		overviewDiv.style.display="none";
		
		var self=this;
		this.network.addPropertyChangeListener(function(e){
			if(e.property==="canvasSizeChange"){
				overviewDiv.style.height=Math.ceil(300*self.network.getCanvasSize().height/self.network.getCanvasSize().width)+"px";
			}
		});
		
		overviewView=this.overview.getView();
		overviewView.style.left = '0px';
        overviewView.style.right = '0px';
        overviewView.style.top = '0px';
        overviewView.style.bottom = '0px';
		overviewDiv.appendChild(overviewView);
		document.body.appendChild(overviewDiv);
        window.onresize = function () {
            centerPane.invalidate();
        };
        this.initPopupMenu();
    },
    addInput: function (name) {
        var input = document.createElement('input');
        if (!twaver.Util.isIE) {
            input.type = 'number';
        }
        input.id = name;
        input.min = 10;
        input.max = 500;
        input.step = 10;
        input.value = 50;
        
        var label = document.createElement('label');
        label.htmlFor = name;
        label.innerHTML = name;
        this.toolbar.appendChild(label);
        this.toolbar.appendChild(input);
        
        return input;
    },
    clear: function () {
        this.network.setElementBox(this.emptyBox);
        this.box.clear();
        this.chart.getDataBox().clear();
    },
    test: function () {
        var self = this;
        this.network.setElementBox(this.emptyBox);
        this.box.clear();
        var rowCount = this.txtRowCount.value,
            columnCount = this.txtColumnCount.value;

        var now = new Date().getTime();
        this.addDatas(rowCount, columnCount);
        var initTime = (new Date().getTime() - now) / 1000.0;

        now = new Date().getTime();
        this.network.setElementBox(this.box);
        setTimeout(function () {
            var showTime = (new Date().getTime() - now) / 1000.0;

            var element = new twaver.Node();
            element.setName("" + (self.nodeCount + self.linkCount));
            self.chart.getDataBox().add(element);
            element.setStyle('chart.values', [initTime, showTime]);
            alert('Load ' + self.nodeCount + ' nodes and ' + self.linkCount + ' links in: ' + initTime + 's\n' + 'Network Loading Time: ' + showTime + 's');
        });
    },
    addDatas: function (rowCount, columnCount) {
        var i = 0, j = 0, node, name;
		this.nodeCount = 0;
		for (j = 0; j < rowCount; j++) {
			for (i = 0; i < columnCount; i++) {
			    name = "Node:" + j + ","+ i;
				node = new twaver.Node(name);
				node.setName(name);
				node.setLocation(30 + i * 70, 30 + j * 70);
				if(demo.Util.randomBoolean()){
					node.getAlarmState().increaseNewAlarm(demo.Util.randomSeverity(), demo.Util.randomInt(5)+1);
				}
				this.box.add(node);
				this.nodeCount++;
			}
		}
		
		this.linkCount = 0;
		var from, to, link;
		var linkList = new twaver.List();
		for (j = 0; j < rowCount; j++) {
			for (i = 0; i < columnCount; i++) {
				if (i > 0) {
					from = this.box.getDatas().get(i + j*rowCount);
					to = this.box.getDatas().get(i - 1 + j*rowCount);
					link = new twaver.Link(from, to);
					linkList.add(link);
					this.linkCount++;
				}
				if (j > 0) {
					from = this.box.getDatas().get(i + j*rowCount);
					to = this.box.getDatas().get(i + (j -1)*rowCount);
					link = new twaver.Link(from, to);
					linkList.add(link);
					this.linkCount++;
				}
			}
		}
		linkList.forEach(function (link) {
		    this.box.add(link);
		}, this);
    },
    initPopupMenu: function () {
        var magnifyInteraction;
        this.popupMenu.onMenuShowing = function (e) {
            magnifyInteraction = null;
            self.network.getInteractions().forEach(function (interaction) {
                if (interaction instanceof twaver.network.interaction.MagnifyInteraction
                        || interaction instanceof twaver.vector.interaction.MagnifyInteraction) {
                    magnifyInteraction = interaction;
                }
            });
            return true;
        };
        var self = this;
        this.popupMenu.isVisible = function (menuItem) {
            if (magnifyInteraction) {
                return menuItem.group === 'Magnify';
            } else {
                return false;
            }
        };
        this.popupMenu.setMenuItems([
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
    }
});