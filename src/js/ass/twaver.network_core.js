var ass = require('./ass_core.js');

if(!window.$TWaver)
{
	$TWaver = {};
	$TWaver.NetWork = {};
	$TWaver.NetWork.EventHandler = {};
}

if(!window.TWAVER)
{
	TWAVER = {};	
	TWAVER.CONST = {};	
}

TWAVER.CONST = {
	PARAM_TWAVER_MODELID:"Modelid",
	PARAM_TWAVER_RESPONSE_FORMAT:"twaver.response.format",
	PARAM_TWAVER_HANDLER_METHOD:"twaver.handle.method",
	PARAM_TWAVER_RESPONSE_FORMAT_JSON_TYPE:"json",
	ELEMENT_ROOT_ID:'out_g_node_id',
	ELEMENT_CLASS:{NODE:"NODE",GROUP:"GROUP",LINK:"LINK",NONE:'NONE'},
	ELEMENT_ATTR:{
		NODE_ID:"node_id",
		NAME:"name",
		X_ID:"x_id",
		GROUP_ID:"group_id",
		CHILDREN_ID:"twaver.group.node.x_ids",
		RELATION_ID:"relation_id",
		ELEMENT_CLASS:"elementClass",
		FROM_TO_ID: "from_to_id",
		LOCATION:"location",
		BX:'bx',
		BY:"by"
	},
	NETWORK:{}
}

TWAVER.CONST.NETWORK.URL = {
	TWAVER_SERVICE:"/servlet/twaverService.do?handle=ImpactServiceConfig",
	CI_TREE_IMAGE_RESOURCE:"/servlet/impactServiceWebAction.do?method=loadImpactServiceCITreeClassImageResource"
}


 $TWaver.Utils = {
	 getElementClass:function(element){
		 return (element.getClient)?element.getClient(TWAVER.CONST.ELEMENT_ATTR.ELEMENT_CLASS):TWAVER.CONST.ELEMENT_CLASS.NONE;
	 },
	 isNode:function(element){
		 return (element)?(this.getElementClass(element) == TWAVER.CONST.ELEMENT_CLASS.NODE):false;
	 },
	 getSelectionNode:function(selectionModel){
		 var element = selectionModel.getFirstData();
		 var isNode = $TWaver.Utils.isNode(element);
		 return (element && isNode)?element:null;
	 }
 }
 
$TWaver.NetWork.ImageResource = ass.proto({
	$init:function(config){
		this.setting.netWork = config.netWork;
//		this.loadImageResource();
		this.loadAlarmICONResource();
	},
	setDataSource:function(dataSource){
		this.setting.dataSource = ass.toArray(dataSource.rowSet);
	},
	loadImageResource:function(){
		var oSend = {};
		oSend.url = TWAVER.CONST.NETWORK.URL.CI_TREE_IMAGE_RESOURCE;
		oSend.callBack = {
			success:ass.bind(this.setDataSource,this)
		};
		ass.$ajax(oSend);
		if(this.setting.netWork){
			for(var i=0; i<this.setting.dataSource.length; i++){
				var data = this.setting.dataSource[i];
				var url = data["imageName"];
				var oImage = {url:url,svg:this.setting.netWork};
				this.registerImage(oImage);
			}
			
		}
	},
	loadAlarmICONResource:function(){
		var icons = [
				{url:'/resource/image/ico/alarm/critical.png'},//严重告警图标
				{url:'/resource/image/ico/alarm/major.png'},//重要告警图标
				{url:'/resource/image/ico/alarm/minor.png'}//一般告警图标
			];
		if(this.setting.netWork){
			for(var i=0; i<icons.length; i++){
				var icon = icons[i];
				var url = icon["url"];
				icon.svg = this.setting.netWork;
				this.registerImage(icon);
			}
			
		}
	},
	loadImage:function(url,svg,image,views){
		twaver.Util.registerImage(ass.utils.getImageName(url), image, image.width, image.height, svg === true);
		image.onload = null;
		for (var i = 1; i < views.length; i++) { 
			var view = views[i];
			if (view.invalidateElementUIs) {
				view.invalidateElementUIs();
			}
			if (view.invalidateDisplay) {
				view.invalidateDisplay();
			}
		}
	},
	registerImage: function (p) {
		var url = p.url;
		var imageBase64Info = p.imageBase64Info;
		var svg = p.svg;
		var image = new Image();
		image.src = (imageBase64Info)?imageBase64Info:url;
		var views = arguments;
		ass.event(image,"load",(function(_e,_url,_svg,_image,_views){
			return function(){
				this.loadImage(_url,_svg,_image,_views);
			}
		})(window.event,url,svg,image,views),this);
	}
});



$TWaver.NetWork.getImageResourceInstance = function(config){
	if(!$TWaver.NetWork.ImageResourceInstance && config){
		$TWaver.NetWork.ImageResourceInstance = new $TWaver.NetWork.ImageResource(config);
	}
	return $TWaver.NetWork.ImageResourceInstance;
}

module.exports = $TWaver
