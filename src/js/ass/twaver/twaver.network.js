
$TWaver.NetWork.NetWorkService = ass.proto({
	$init:function(config){

		this.setting.isAutoInit = (!ass.isUndefined(config.isAutoInit))?config.isAutoInit:true;
		this.setting.initConfig = config;

		if(this.setting.isAutoInit)
		{
			this.doInitAction(config);	
		}
		
	},

	setHiddenElements:function(hiddenElementIds){
		this.setting.hiddenElementIds = (hiddenElementIds)?hiddenElementIds:[];
	},

	getHiddenElements:function(){
		return this.setting.hiddenElementIds;
	},

	getInitConfig:function(){
		return this.setting.initConfig;
	},

	setInitConfig:function(config){
		this.setting.initConfig = config;
	},

	doInitAction:function(config){
		var c = this.setting.initConfig = (config)?config:this.setting.initConfig;
		this.setting.modelId = c.modelId;
		this.setting.isAutoZoomView = (!ass.isUndefined(c.isAutoZoomView))?c.isAutoZoomView:true;
		this.setting.render = c.render;
		this.setting.sendXml = c.sendXml;
		this.setting.listener = (c.listener)?c.listener:{};
		this.setting.textEllipsis = (!ass.isUndefined(c.textEllipsis))?c.textEllipsis:true;
		this.setting.id = (c.id)?c.id:ass.uid();
		this.setting.url = (c.url)?c.url:TWAVER.CONST.NETWORK.URL.TWAVER_SERVICE;
		this.setting.isAutoRender = (!ass.isUndefined(c.isAutoRender))?c.isAutoRender:true; 

		try{
			
			this.renderBefore();

			if(this.isAutoRender())
			{
				this.load();
			}
			
		}catch(err){
		}
	},

	isAutoRender:function(){
		return this.setting.isAutoRender;
	},

	isAutoZoomView:function(){
		return this.setting.isAutoZoomView;
	},

	setType:function(type){
		this.setting.type = type;
	},
	getType:function(){
		return this.setting.type;
	},
	initDataCollection:function(config){
		var dataCollection = null;
		var type = this.getType();
		var viewData = this.getViewData();
		var hiddenElementIds = this.getHiddenElements();
		var dataCollectionConfig = {
			dataSource:viewData,
			imageResource:this.setting.imageResource,
			hiddenElementIds:hiddenElementIds
		};
		switch(type.toUpperCase()){
			case TWAVER.CONST.DATACOLLECTION.TYPE.NORMAL:
				dataCollection = new $TWaver.NetWork.DataCollection(dataCollectionConfig);
			break;
			case TWAVER.CONST.DATACOLLECTION.TYPE.SIMPLE:
				dataCollection = new $TWaver.NetWork.SimpleDataCollection(dataCollectionConfig);
			break;
		}
		if(dataCollection){
			this.setting.dataCollection = dataCollection;
		}
	},
	getDataCollection:function(){
		return this.setting.dataCollection;
	},
	initDataBox:function(config){
		var type = this.getType();
		if(this.setting.dataCollection){
			var netWork = this.getNetWork();
			var box = null;
			switch(type.toUpperCase()){
				case TWAVER.CONST.DATABOX.TYPE.NORMAL:
					this.setting.dataBox = new $TWaver.NetWork.DataBox({
						dataCollection:this.setting.dataCollection,
						imageResource:this.setting.imageResource,
						netWork:netWork
					});				
				break;
				case TWAVER.CONST.DATABOX.TYPE.SIMPLE:
					this.setting.dataBox = new $TWaver.NetWork.SimpleDataBox({
						dataCollection:this.setting.dataCollection,
						imageResource:this.setting.imageResource,
						netWork:netWork,
						nodeConfig:config.nodeConfig,
						linkConfig:config.linkConfig
					});
				break;
			}
			this.setBox(this.setting.dataBox.getBox());
		}
	},
	loadCallBack:function(data){
		if(data){
			var _config = this.setting.initConfig;
			this.setType((_config.type)?_config.type:TWAVER.CONST.NETWORK.TYPE.NORMAL);
			this.setViewData(data);
			this.setZoom(data.zoom);
			this.setViewRect(data.viewRect);
			this.setting.isToolTipEnabled = (!ass.isUndefined(_config.isToolTipEnabled))?_config.isToolTipEnabled:true;
			this.setting.netWork = this.createNetWork();
			this.setting.isDragToPan = (!ass.isUndefined(_config.isDragToPan))?_config.isDragToPan:false;
			this.setting.isAutoLayouter = (_config.isAutoLayouter)?_config.isAutoLayouter:false;
			this.setting.location =( _config.location)?_config.location:{x:0,y:0};
			this.setting.width = (_config.width)?_config.width:document.documentElement.clientWidth;
			this.setting.height = (_config.height)?_config.height:document.documentElement.clientHeight;
			this.setting.imageResource = $TWaver.NetWork.getImageResourceInstance({netWork:this.setting.netWork});
			this.initDataCollection(_config);
			this.setting.dataCollection.setNetWork(this.setting.netWork);
			this.initDataBox(_config);
			this.setting.layout = this.getlayoutConfig();
			this.doAutoLayouter();
		}
		this.render();
		
	},
	
	refresh:function(){
		this.load();
	},

	setViewRect:function(viewRect){
		this.setting.viewRect = viewRect;
	},
	
	getViewRect:function(){
		return this.setting.viewRect;
	},
	
	setZoom:function(zoom){
		this.setting.zoom = zoom;
	},
	
	getZoom:function(){
		return this.setting.zoom;
	},
	
	setToolTipEnabled:function(isToolTipEnabled){
		this.setting.isToolTipEnabled = isToolTipEnabled;
	},
	
	isToolTipEnabled:function(){
		return this.setting.isToolTipEnabled;
	},
	
	getDataBox:function(){
		return this.setting.dataBox;
	},
	getlayoutConfig:function(){
		var layout = null;
		var data =ass.toArray(this.getViewData());
		var svg = data[0].svg;
		layout = (svg)?svg.layout: data[0].layout
		
		return layout;
	},
	isTextEllipsis:function(){
		return this.setting.textEllipsis;
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
		if(oHtmlView){
			this.$setViewObj($(oHtmlView));
			this.$getViewObj().attr('id',this.getID());
			oRender.get(0).appendChild(oHtmlView);
			_p.width = (_p.width)?_p.width:this.setting.width;
			_p.height = (_p.height)?_p.height:this.setting.height;	
			this.setting.netWork.adjustBounds(_p);
			this.setViewRelativePosition(oHtmlView);
		}
		
	},

	doNetWorkResize:function(){
		var oRender = this.getRenderObj();
		var width = oRender.width();
		var height = oRender.height();
		var netWork = this.getNetWork();
		netWork.adjustBounds({width:width,height:height});
	},

	addWindowResizeHandler:function(){
		$(window).resize((function(_this){
			return function(){
				_this.doNetWorkResize();
			}
		})(this));
	},

	getRenderObj:function(){
		return this.setting.render;
	},

	render:function(p){
		var netWork = this.getNetWork();
		if(netWork){
			this.clear();
			this.flush(p);
		}
		this.renderAfter();
	},
	setViewRelativePosition:function(oHtmlView){
		oHtmlView.style.position = "relative";
	},
	
	isDragToPan:function(){
		return this.setting.isDrapToPan;
	},
	createNetWork:function(){		
		var netWork = new twaver.vector.Network();
		var isToolTipEnabled = this.isToolTipEnabled();
		netWork.setDragToPan(this.isDragToPan());
		netWork.setZoomDivVisible(false);
		netWork.setToolTipEnabled(isToolTipEnabled);
		return  netWork;
	},
	getNetWork:function(){
		return this.setting.netWork;
	},
	setBox:function(box){
		this.setting.netWork.setElementBox(box);
	},
	
	setDataBox:function(dataBox){
		this.setting.dataBox = dataBox;
	},
	
	getDataBox:function(){
		return this.setting.dataBox;
	},
	
	getView:function(){
		var view = null;
		if(this.setting.netWork){
			view = this.setting.netWork.getView();
		}
		return view;
	},
	load:function(){
		var callBack = {
			success:(function(_this){
						return function(data){
							_this.loadCallBack(data);
						}
					})(this),
			error:(function(_process){
				return function(){
					ass.$log("$TWaver.NetWork.NetWorkService Loading Error~!");
				}
			})(process)
		};

		var oSend = {};
		var param = {};
		param[TWAVER.CONST.PARAM_TWAVER_MODELID] =this.setting.modelId;
		param[TWAVER.CONST.PARAM_TWAVER_RESPONSE_FORMAT] = TWAVER.CONST.PARAM_TWAVER_RESPONSE_FORMAT_JSON_TYPE;
		
		if(!this.setting.param)
		{
			this.setting.param = param;		
		}
		this.setting.param = (!this.setting.param)?param:this.setting.param;
		oSend.url = this.getServiceUrl();
		oSend.async = true;
		oSend.param = this.setting.param;
		oSend.callBack = callBack;

		
		
		if(!this.setting.sendXml)
		{
			ass.$ajax(oSend);
		}
		else
		{
			oSend.sendXml = this.setting.sendXml;
			oSend.callBack = oSend.callBack.success;
			ass.ajax(oSend);
		}
		
	},

	setServiceUrl:function(url){
		this.setting.url = url;
	},

	getServiceUrl:function(){
		return this.setting.url;
	},

	setViewData:function(data){
		this.setting.viewData = data;
	},
	
	getViewData:function(){
		return this.setting.viewData;
	},
	
	getDataBox:function(){
		return this.setting.dataBox;
	},
	
	getlayout:function(){
		return this.setting.layout;
	},
	
	isAutoLayouter:function(){
		return this.setting.isAutoLayouter;
	},
	doAutoLayouter:function(){
		if(this.isAutoLayouter()){
			var autoLayouter = new twaver.layout.AutoLayouter(this.setting.dataBox.getBox());
			var layout = this.getlayout();
			autoLayouter.doLayout(layout,(function(_this){
			 	return function(){
			 		var isAutoZoomView = _this.isAutoZoomView();
			 		var netWork = _this.getNetWork();
			 		
			 		if(isAutoZoomView)
			 		{
			 			netWork.zoomOverview(false);
			 		}
			 		else
			 		{
			 			var zoom = _this.getZoom();
			 			var viewRect = _this.getViewRect();
			 			(zoom)?netWork.setZoom(zoom):false;
			 			(viewRect)?netWork.setViewRect(viewRect.x,viewRect.y,viewRect.width,viewRect.height):false;	
			 		}
			 		
			 		_this.doAfterAutoLayouter();
			 	}
			})(this));	
		}
		
	},
	setEventHandler:function(eventHandler){
		this.setting.eventHandler = eventHandler;
	},
	doRenderAfter:function(){
		var fn = this.setting.listener.renderAfter;
		(fn)?fn(this):false;
	},
	doAfterAutoLayouter:function(){
		var fn = this.setting.listener.afterAutolayouter;
		(fn)?fn(this):false;
	},
	renderAfter:function(){
		this.doRenderAfter();
	},
	doRenderBefore:function(){
		var fn = this.setting.listener.renderBefore;
		this.addWindowResizeHandler();
		(fn)?fn(this):false;
	},
	renderBefore:function(){
		this.doRenderBefore();
	}
});

