
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
	NODE_TYPE:{HTML:"HTML",NORMAL:"NORMAL"},
	LINK_TYPE:{HTML:"HTML",NORMAL:"NORMAL"},
	NETWORK_TYPE:{NORMAL:"normal",SIMPLE:"simple"},
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
		STYLE_SCRIPT:'styleScript',
		BX:'bx',
		BY:"by"
	},
	SIMPLE_ELEMENT_ATTR:{
		NAME:"name",
		ELEMENT_ID:"id",
		ELEMENT_CLASS:'className',
		CHILDREN_ID:"children",
		FROM_TO_ID:"fromToId"
	},
	NETWORK:{
		TYPE:{NORMAL:"normal",SIMPLE:"simple"}
	},
	DATACOLLECTION:{},
	DATABOX:{}
}

TWAVER.CONST.NETWORK.URL = {
	TWAVER_SERVICE:"/servlet/twaverService.do?handle=ImpactServiceConfig",
	CI_TREE_IMAGE_RESOURCE:"/servlet/impactServiceWebAction.do?method=loadImpactServiceCITreeClassImageResource"
}

TWAVER.CONST.DATACOLLECTION.TYPE={NORMAL:"NORMAL",SIMPLE:"SIMPLE"}
TWAVER.CONST.DATABOX.TYPE={NORMAL:"NORMAL",SIMPLE:"SIMPLE"}



 $TWaver.Utils = {
	 getElementClass:function(element,classKey){
	 	var cls = null;
	 	if(element){
	 		var _classKey = (classKey)?classKey:TWAVER.CONST.ELEMENT_ATTR.ELEMENT_CLASS;
	 		cls = element.getClient(_classKey);
	 		cls = (cls)?cls:TWAVER.CONST.ELEMENT_CLASS.NONE;
	 	}
	 	
		return cls;
	 },
	 isNode:function(element,classKey){
	 	var result = false;
	 	var elementCls =this.getElementClass(element,classKey);
	 	result = (elementCls == TWAVER.CONST.ELEMENT_CLASS.NODE);
	 	return result;
	 },
	 isLink:function(element,classKey){
	 	var result = false;
	 	var elementCls =this.getElementClass(element,classKey);
	 	result = (elementCls == TWAVER.CONST.ELEMENT_CLASS.LINK);
	 	return result;
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
		this.loadAlarmICONResource();
	},
	setDataSource:function(dataSource){
		this.setting.dataSource = ass.toArray(dataSource.rowSet);
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

$TWaver.NetWork.Styles = ass.proto({
	$init:function(config){
		this.setting.elements = (config.elements)?config.elements:[];		
	},
	getElements:function(){
		return this.setting.elements;
	},
	setElements:function(elements){
		this.setting.elements = elements;
	},
	format:function(){
		if(this.setting.elements){
			var elements = this.setting.elements;
			$.each(elements,function(index,element){
				var el = element.el;
				var styles = (element.styles)?element.styles:[];
				for(var i=0; i<styles.length; i++){
					var style = styles[i];
					var key = style.key;
					var value = style.value;
					switch(key){
						case "icons.names":
							var values = value.split(",");
							(style)?el.setStyle(key,[values]):false;
						break;
						default:
							(style)?el.setStyle(key,value):false;
						break;
					}
					
				}
			});
		}
	}
});

$TWaver.NetWork.getImageResourceInstance = function(config){
	if(!$TWaver.NetWork.ImageResourceInstance && config){
		$TWaver.NetWork.ImageResourceInstance = new $TWaver.NetWork.ImageResource(config);
	}
	return $TWaver.NetWork.ImageResourceInstance;
}

$TWaver.NetWork.getStyleUtils = function(config){
	if(!$TWaver.NetWork.StyleUtils){
		$TWaver.NetWork.StyleUtils = new $TWaver.NetWork.Styles(config);
	}
	return $TWaver.NetWork.StyleUtils;
}

