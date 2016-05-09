var ass = require('./ass_core.js');
$TWaver = require("./twaver.network_core.js");

$TWaver.NetWork.DataCollection = ass.proto({
	$init:function(config){
		this.setting.dataSource = config.dataSource[0].svg;
		if(this.setting.dataSource){
			this.setting.root = this.getRoot();
			this.setting.imageDefs = this.getImageDefs();
			this.loadElementDatas();
		}
	},
	setNetWork:function(netWork){
		this.setting.netWork = netWork;
	},
	getNetWork:function(){
		return this.setting.netWork;
	},
	setImageResourceInstance:function(imageResource){
		this.setting.imageResource = imageResource;
	},
	getImageResourceInstance:function(){
		return this.setting.imageResource;
	},
	getImageDefs:function(){
		return (this.setting.dataSource)?ass.toArray(this.setting.dataSource.defs.image):null;
	},
	getGItems:function(){
		return ass.toArray(this.getRoot().g);
	},
	getImageDefById:function(imageId){
		var imageDef = null;
		if(this.setting.imageDefs){
			for(var i=0; i<this.setting.imageDefs.length; i++){
				var _imageDef = this.setting.imageDefs[i];
				var _imageId = _imageDef.id;
				if(_imageId == imageId){
					imageDef = _imageDef;
					break;
				}
			}
		}
		return imageDef;
	},
	getRoot:function(){
		var root = null;
		if(this.setting.dataSource){
			var dataSource = this.setting.dataSource.g;
			for(var i=0; i<dataSource.length; i++){
				var g = dataSource[i];
				var id = g.id;
				if(id==TWAVER.CONST.ELEMENT_ROOT_ID){
					root = g;
					break;
				}
			}
		}
		return root;
	},
	loadElementDatas:function(){
		var g = this.getGItems();
		var elementDatas = this.setting.elementDatas = g;
		this.setting.groupDatas = (this.setting.groupDatas)?this.setting.groupDatas:[];
		this.setting.nodeDatas = (this.setting.nodeDatas)?this.setting.nodeDatas:[];
		this.setting.linkDatas = (this.setting.linkDatas)?this.setting.linkDatas:[];
		for(var i=0; i<elementDatas.length; i++){
			var elementData = elementDatas[i];
			var elementClass =(elementData.elementClass)?elementData.elementClass.toUpperCase():TWAVER.CONST.ELEMENT_CLASS.NODE;
			elementData.elementClass = elementClass;
			switch(elementClass){
				case TWAVER.CONST.ELEMENT_CLASS.GROUP:
					this.setting.groupDatas.push(elementData);
				break;
				case TWAVER.CONST.ELEMENT_CLASS.NODE:
					this.setting.nodeDatas.push(elementData);
				break;
				case TWAVER.CONST.ELEMENT_CLASS.LINK:
					this.setting.linkDatas.push(elementData);
				break;
			}
		}
	},
	getElementDatas:function(key){
		var datas = null;
		switch(key){
			case TWAVER.CONST.ELEMENT_CLASS.GROUP:
				datas = this.setting.groupDatas;
			break;
			case TWAVER.CONST.ELEMENT_CLASS.NODE:
				datas = this.setting.nodeDatas;
			break;
			case TWAVER.CONST.ELEMENT_CLASS.LINK:
				datas = this.setting.linkDatas;
			break;
		}
		
		return datas;
	}
});

$TWaver.NetWork.DataBox = ass.proto({
	$init:function(config){
		this.setting.dataCollection = (config.dataCollection)?config.dataCollection:{};
		this.setting.imageResource = config.imageResource;
		this.setting.box = new twaver.ElementBox();
		this.setting.netWork = config.netWork;
		this.parseToElements();
	},
	getBox:function(){
		return this.setting.box;
	},
	findBoxElementByName:function(name){
		var elements = this.getElementsByName(name);
		this.getBox().getSelectionModel().setSelection(elements);
		return elements; 
	},
	setImageResourceInstance:function(imageResource){
		this.setting.imageResource = imageResource;
	},
	getImageResourceInstance:function(){
		return this.setting.imageResource;
	},
	parseToElements:function(){
		if(this.setting.dataCollection){
			this.setting.elements = [];
			var dataCollection = this.setting.dataCollection;
			var groupDatas = dataCollection.getElementDatas(TWAVER.CONST.ELEMENT_CLASS.GROUP);
			var nodeDatas = dataCollection.getElementDatas(TWAVER.CONST.ELEMENT_CLASS.NODE);
			var linkDatas = dataCollection.getElementDatas(TWAVER.CONST.ELEMENT_CLASS.LINK);
			
			this.setting.groups = this.parseToGroups(groupDatas);
			this.setting.nodes = this.parseToNodes(nodeDatas);
			this.setting.links = this.parseToLinks(linkDatas);
			
			this.setting.elements = this.setting.elements.concat(this.setting.groups).concat(this.setting.nodes).concat(this.setting.links);
			
			this.makeUpGroups();
			this.makeUpLinkRelations();
		}
	},
	setElementChildren:function(element){
		var childrenIds = element.getClient(TWAVER.CONST.ELEMENT_ATTR.CHILDREN_ID);
		var _childrenIds = childrenIds.split(",");
		for(var i=0; i<_childrenIds.length; i++){
			var xId = _childrenIds[i];
			var child = this.getElementByXId(xId);
			if(child){
				var elementClass = child.getClient(TWAVER.CONST.ELEMENT_ATTR.ELEMENT_CLASS);
				if(elementClass != TWAVER.CONST.ELEMENT_CLASS.LINK){
					element.addChild(child);
					if(elementClass == TWAVER.CONST.ELEMENT_CLASS.GROUP){
						this.setElementChildren(child);
					}
				}
			}
			
		}
	},
	makeUpGroups:function(){
		if(this.setting.groups){
			var groups = this.setting.groups;
			for(var i=0; i<groups.length; i++){
				this.setElementChildren(groups[i]);
			}
		}
	},
	
	makeUpLinkRelations:function(){
		if(this.setting.links){
			var links = this.setting.links;
			for(var i=0; i<links.length; i++){
				var l = links[i];
				var fromToId = l.getClient(TWAVER.CONST.ELEMENT_ATTR.FROM_TO_ID); 
				var fromId = fromToId.split("#")[0];
				var toId = fromToId.split("#")[1];
				var from  = this.getElementByNodeId(fromId);
				var to = this.getElementByNodeId(toId);
				if(from != null  && to != null){
					l.setFromNode(from);
					l.setToNode(to);
				}
				
			}
		}
	},
	getElementByXId:function(xId){
		var element = null;
		if(this.setting.elements){
			var elements = this.setting.elements;
			for(var i=0; i<elements.length; i++){
				var _element = elements[i];
				var _xId = _element.getClient(TWAVER.CONST.ELEMENT_ATTR.X_ID);  
				if(_xId == xId){
					element = _element;
					break;
				}
			}
		}
		
		return element;
	},
	getElementByNodeId:function(nodeId){
		var element = null;
		if(this.setting.elements){
			var elements = this.setting.elements;
			for(var i=0; i<elements.length; i++){
				var _element = elements[i];
				var _nodeId = _element.getClient(TWAVER.CONST.ELEMENT_ATTR.NODE_ID);
				if(nodeId == _nodeId){
					element = _element;
					break;
				}
			}
		}
		return element;
	},
	getElementsByName:function(name){
		var results = [];
		if(this.setting.elements){
			var elements = this.setting.elements;
			for(var i=0; i<elements.length; i++){
				var _element = elements[i];
				var elementName = _element.getName();
				if(elementName.indexOf(name)!=-1){
					results.push(_element);
				}
			}
		}
		return results;
	},
	getDataElementName:function(data){
		return  data[TWAVER.CONST.ELEMENT_ATTR.NAME];
	},
	getDataElementXID:function(data){
		return data[TWAVER.CONST.ELEMENT_ATTR.X_ID];
	},
	getDataElementNodeId:function(data){
		return data[TWAVER.CONST.ELEMENT_ATTR.NODE_ID];
	},
	getDataElementChildrenId:function(data){
		return data[TWAVER.CONST.ELEMENT_ATTR.CHILDREN_ID];
	},
	getDataElementGroupId:function(data){
		return data[TWAVER.CONST.ELEMENT_ATTR.GROUP_ID];
	},
	getDataElementElemetClass:function(data){
		return data[TWAVER.CONST.ELEMENT_ATTR.ELEMENT_CLASS];
	},
	getDataElementLocation:function(data){
		var x = data[TWAVER.CONST.ELEMENT_ATTR.BX];
		var y =  data[TWAVER.CONST.ELEMENT_ATTR.BY];
		return x+","+y;
	},
	getDataElementRelationId:function(data){
		return data[TWAVER.CONST.ELEMENT_ATTR.RELATION_ID];
	},
	getDataEelementFromToId:function(data){
		return data[TWAVER.CONST.ELEMENT_ATTR.FROM_TO_ID];
	},
	setElementLocation:function(element,x,y){
		var _x = parseInt(x);
		var _y = parseInt(y);
		element.setLocation(_x,_y);
	},
	parseToGroups:function(groupDatas){
		
		var groups = [];
		var styles=[
			['#99caea', 6, [1,0], '#eaf6fd'],
			['#899cc1', 4, [16, 3], '#e5ebf7'],
			['#7c73a0', 2, [16, 3], '#e3dbed'],
			['#704b84', 1, [12, 3], '#e3cedb'],
			['#6a1e74', 0.3, [12, 3], '#e1bbcb'],
		];
		var style = styles[2];
		if(groupDatas){
			for(var i=0; i<groupDatas.length; i++){
				var groupData = groupDatas[i];
				var name = this.getDataElementName(groupData);
				var xId = this.getDataElementXID(groupData);
				var childrenIds = this.getDataElementChildrenId(groupData);
				var groupId = this.getDataElementGroupId(groupData);
				var elementClass = this.getDataElementElemetClass(groupData);
				var location = this.getDataElementLocation(groupData);
				var g = new twaver.Group();
				g.setExpanded(true);
				g.setName(name);
				g.setClient(TWAVER.CONST.ELEMENT_ATTR.X_ID,xId);
				g.setClient(TWAVER.CONST.ELEMENT_ATTR.CHILDREN_ID,childrenIds);
				g.setClient(TWAVER.CONST.ELEMENT_ATTR.GROUP_ID,groupId);
				g.setClient(TWAVER.CONST.ELEMENT_ATTR.ELEMENT_CLASS,elementClass);
				this.setElementLocation(g,location.split(",")[0],location.split(",")[1]);
				g.s('group.alpha', 0.1);
				g.s('group.fill',false);
				g.s('group.deep', 0);
				g.s('group.outline.width', style[1]);
				g.s('group.outline.color', style[0]);
				g.s('group.shape', 'roundrect');			
				g.s('select.style', 'none');
				g.s('vector.outline.pattern', style[2]);
				g.s('label.font', '12px "Microsoft Yahei"');
				g.s('group.padding', 5);
				g.s('label.position', 'topright.topleft');
				
				this.setting.box.add(g);
				groups.push(g);
			}
		}
		return groups;
	},
	parseToNodes:function(nodeDatas){
		var nodes = [];
	
		if(nodeDatas){
			for(var i=0; i<nodeDatas.length; i++){
				var nodeData = nodeDatas[i];
				var name = this.getDataElementName(nodeData);
				var xId = this.getDataElementXID(nodeData);
				var groupId = this.getDataElementGroupId(nodeData);
				var elementClass = this.getDataElementElemetClass(nodeData)
				var nodeId = this.getDataElementNodeId(nodeData);				
				var location = this.getDataElementLocation(nodeData);
				var use = ass.toArray(nodeData.use);
				var imageUrl = this.getUserImageUrl(use);
				var imageBase64Info = this.getUseImageBase64Info(use);
				var imageName = ass.utils.getImageName(imageUrl);
				var n = new twaver.Node();
				if(name.length>4)
				{
					n.setName(name.substring(0,4)+"...");
					n.setToolTip(name);
				}
				else
				{
					n.setName(name);	
				}
				
				if(imageName)
				{
					this.getImageResourceInstance().registerImage({url:imageUrl,imageBase64Info:imageBase64Info,svg:this.getNetWork()});
					n.setImage(imageName);
				}
				n.setStyle("select.style",'border');
				n.setStyle("select.color",'rgba(57, 96, 212, 0.44)');
				n.setClient(TWAVER.CONST.ELEMENT_ATTR.X_ID,xId);
				n.setClient(TWAVER.CONST.ELEMENT_ATTR.GROUP_ID,groupId);
				n.setClient(TWAVER.CONST.ELEMENT_ATTR.ELEMENT_CLASS,elementClass);
				n.setClient(TWAVER.CONST.ELEMENT_ATTR.NODE_ID,nodeId);
				this.setElementLocation(n,location.split(",")[0],location.split(",")[1]);
				this.setting.box.add(n);
				nodes.push(n);
			}
		}
		return nodes;
	},
	getNetWork:function(){
		return this.setting.netWork;
	},
	getUserImageUrl:function(uses){
		var imageUrl = null;
		if(uses){
			for(var i=0; i<uses.length; i++){
				var use = uses[i];
				var id = use["xlink:href"].split("#")[1];
				if(id.toUpperCase().indexOf("IMG")!=-1){
					var imageDef = this.setting.dataCollection.getImageDefById(id);
					imageUrl = imageDef["xlink:href"];
					break;
				}
			}
		}
		return imageUrl;
	},
	getUseImageBase64Info:function(uses){
		var base64Info = null;
		if(uses){
			for(var i=0; i<uses.length; i++){
				var use = uses[i];
				var id = use["xlink:href"].split("#")[1];
				if(id.toUpperCase().indexOf("IMG")!=-1){
					var imageDef = this.setting.dataCollection.getImageDefById(id);
					base64Info = "data:image/png;base64,"+imageDef['base64Info'];
					break;
				}
			}
		}
		return base64Info;
	},
	parseToLinks:function(linkDatas){
		var links = [];
		if(linkDatas){
			for(var i=0; i<linkDatas.length; i++){
				var linkData = linkDatas[i];
				var name = this.getDataElementName(linkData);
				var xId =this.getDataElementXID(linkData);
				var relationId = this.getDataElementRelationId(linkData);
				var groupId = this.getDataElementGroupId(linkData);
				var elementClass = this.getDataElementElemetClass(linkData);
				var fromToId = this.getDataEelementFromToId(linkData);
				var l = new twaver.Link();
				l.setName(name);
				l.setClient(TWAVER.CONST.ELEMENT_ATTR.X_ID,xId);
				l.setClient(TWAVER.CONST.ELEMENT_ATTR.RELATION_ID,relationId);
				l.setClient(TWAVER.CONST.ELEMENT_ATTR.GROUP_ID,groupId);
				l.setClient(TWAVER.CONST.ELEMENT_ATTR.ELEMENT_CLASS,elementClass);
				l.setClient(TWAVER.CONST.ELEMENT_ATTR.FROM_TO_ID,fromToId);
				l.setStyle('arrow.to', true);
				l.setStyle('arrow.from.color', '#658dc1');
                l.setStyle('arrow.to.color', '#658dc1');
				this.setting.box.add(l);
				links.push(l);
			}
		}
		return links;
	},
	getLinkByFromToId:function(formToId){
		var element = null;
		if(this.setting.elements){
			var elements = this.setting.elements;
			for(var i=0; i<elements.length; i++){
				var _element = elements[i];
				var _formToId = _element.getClient(TWAVER.CONST.ELEMENT_ATTR.FROM_TO_ID);  
				if(_formToId == formToId){
					element = _element;
					break;
				}
			}
		}
		return element;
	}
});

$TWaver.NetWork.EventHandler= ass.proto({
	EVENT_CODE:{
		MOUSE_BUTTON:{LEFT:0,MID:1}
	},
	$init:function(config){
		if(config.netWork){
			this.setting.netWork = config.netWork;
			this.setting.dataBox = this.setting.netWork.getElementBox(); 
			this.setting.selectionModel = this.setting.dataBox.getSelectionModel();
			this.addNetWorkEvent();
		}
	},
	addNetWorkEvent:function(){
		this.addHtmlEventListener();
	},
	addHtmlEventListener:function(){
		var oView = this.setting.netWork.getView();
		ass.event(oView,'mousedown',(function(_this){
			return function(e){
				_this.onMouseDown(e);
			}
		})(this));
		ass.event(oView,'mousemove',(function(_this){
			return function(e){
				_this.onMouseMove(e);
			}
		})(this));
		ass.event(oView,'dblclick',(function(_this){
			return function(e){
				_this.onClick(e);
			}
		})(this));
	},
	getNetWork:function(){
		return this.setting.netWork;
	},
	onMouseDown:function(e){},
	onMouseMove:function(e){},
	onClick:function(){}
});

$TWaver.NetWork.NetWorkService = ass.proto({
	$init:function(config){
		this.setting.modelId = config.modelId;
		this.setting.render = config.render;
		this.setting.listener = (config.listener)?config.listener:{};
		this.setting.id = (config.id)?config.id:ass.uid();
		this.setting.url = (config.url)?config.url:TWAVER.CONST.NETWORK.URL.TWAVER_SERVICE;
		var process = ass.process({title:"系统信息"});
		process.show();
		try{
			this.load({
					success:(function(_this,_config,_process){

								return function(data){
									_this.setViewData(data);
									_this.setting.netWork = _this.createNetWork();
									_this.setting.isAutoLayouter = (_config.isAutoLayouter)?_config.isAutoLayouter:false;
									_this.setting.location =( _config.location)?_config.location:{x:0,y:0};
									_this.setting.width = (_config.width)?_config.width:document.documentElement.clientWidth;
									_this.setting.height = (_config.height)?_config.height:document.documentElement.clientHeight;
									_this.setting.imageResource = $TWaver.NetWork.getImageResourceInstance({netWork:_this.setting.netWork});
									_this.setting.dataCollection = new $TWaver.NetWork.DataCollection({
										dataSource:_this.setting.viewData,
										imageResource:_this.setting.imageResource
									});
									_this.setting.dataCollection.setNetWork(_this.setting.netWork);
									_this.initDataBox();
									_this.render();
									_process.hide();
								}

							})(this,config,process),
					error:(function(_process){
						return function(){
							//此处后续需添加错误提示框
							_process.hide();
						}
					})(process)
				}
				
			);
		}catch(err){
			process.hide();
		}
	},
	getID:function(){
		return this.setting.id;
	},
	setID:function(id){
		this.setting.id = id;
	},
	clear:function(){
		$('#'+this.getID()).remove();
	},
	$getViewObj:function(){
		return this.setting.$viewObj;
	},
	$setViewObj:function($viewObj){
		this.setting.$viewObj = $viewObj;
	},
	flush:function(p){
		var _p = (p)?p:this.setting.location;
		var oRender = this.setting.render;
		var oHtmlView = this.getView();
		this.$setViewObj($(oHtmlView));
		this.$getViewObj().attr('id',this.getID());
		oRender.get(0).appendChild(oHtmlView);
		_p.width = (_p.width)?_p.width:this.setting.width;
		_p.height = (_p.height)?_p.height:this.setting.height;	
		this.setting.netWork.adjustBounds(_p);
		this.setViewRelativePosition(oHtmlView);
	},
	render:function(p){
		this.clear();
		this.flush(p);
		this.renderAfter();
	},
	setViewRelativePosition:function(oHtmlView){
		oHtmlView.style.position = "relative";
	},
	createNetWork:function(){		
		var netWork = new twaver.vector.Network();
		netWork.setDragToPan(false);
		netWork.setZoomDivVisible(false);
		return  netWork;
	},
	getNetWork:function(){
		return this.setting.netWork;
	},
	setBox:function(box){
		this.setting.netWork.setElementBox(box);
	},
	getView:function(){
		return this.setting.netWork.getView();
	},
	load:function(callBack){
		var oSend = {};
		var param = {};
		param[TWAVER.CONST.PARAM_TWAVER_MODELID] =this.setting.modelId;
		param[TWAVER.CONST.PARAM_TWAVER_RESPONSE_FORMAT] = TWAVER.CONST.PARAM_TWAVER_RESPONSE_FORMAT_JSON_TYPE;
		
		if(!this.setting.param)
		{
			this.setting.param = param;		
		}

		oSend.url = this.setting.url;
		oSend.async = true;
		oSend.param = this.setting.param;
		oSend.callBack = callBack;
		ass.$ajax(oSend);
	},
	setViewData:function(data){
		this.setting.viewData = data;
	},
	getViewData:function(){
		return this.setting.viewData;
	},
	initDataBox:function(){
		if(this.setting.dataCollection){
			var netWork = this.getNetWork();
			var box = null;
			this.setting.dataBox = new $TWaver.NetWork.DataBox({
				dataCollection:this.setting.dataCollection,
				imageResource:this.setting.imageResource,
				netWork:netWork
			});
			this.setBox(this.setting.dataBox.getBox());
			if(this.isAutoLayouter()){
				this.doAutoLayouter();
			}
		}
	},
	getDataBox:function(){
		return this.setting.dataBox;
	},
	isAutoLayouter:function(){
		return this.setting.isAutoLayouter;
	},
	doAutoLayouter:function(){
		var autoLayouter = new twaver.layout.AutoLayouter(this.setting.dataBox.getBox());
		 autoLayouter.doLayout('topbottom',(function(_this){
		 	return function(){
		 		_this.getNetWork().zoomOverview(true);
		 	}
		 })(this));
	},
	setEventHandler:function(eventHandler){
		this.setting.eventHandler = eventHandler;
	},
	renderAfter:function(){
		var fn = this.setting.listener.renderAfter;
		(fn)?fn(this):false;
	}
});
