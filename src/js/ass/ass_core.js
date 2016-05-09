if(!window.ass){
	ass = {};
	ass.UICompoent = {};
	ass.UICompoent.Instances = {};
	ass.UICompoent.Event = {};
	ass.UIFactory = {};
	ass.StoreCompoent = {};
}
ass.uid = function(){
	if (!this._seed) this._seed=(new Date).valueOf();	
	this._seed++;
	return "ass_view_"+this._seed;
}

ass.isUndefined=function(obj){
	return typeof obj == "undefined";
};

ass.copy = function(oSource,oTarget){
	var obj = (oTarget)?oTarget:{};
	if(oSource){
		for(var key in oSource){
			obj[key] = oSource[key];
		}
	}
	return obj;
}

ass.$ajax = function(p){
	var result = null;
	var url = (p.url)?p.url:"";
	var type = (p.type)?p.type:"post";
	var param = (p.param)?p.param:[];
	var async = (p.async)?p.async:false;
	var dataType = (p.dataType)?(p.dataType):"json";
	var callBack = (p.callBack)?p.callBack:{};
	var success =(callBack.success)?callBack.success:function(data, textStatus){};
	var error = (callBack.error)?callBack.error:function(XMLHttpRequest, textStatus, errorThrown){
		alert(XMLHttpRequest.statusText);
	}
	var _param ={type:type,url:url,data:param,async:async,dataType:dataType,success:success,error:error}
	if(!async){
		var result = $.ajax(_param);
		switch(dataType){
			case "json":
				result =result.responseJSON;
			break;
			case "xml":
				result =result.responseXML;
			break;
			default:
				result =result.responseText;
			break;
		}
		return result;
	}
	$.ajax(_param);
}

ass.$log = function(type,message,details){
	if (arguments.length == 1){
		message = type;
		type = "log";
	}
	if (window.console && console.log){
		type=type.toLowerCase();
		if (window.console[type])
			window.console[type](message||"unknown error");
		else
			window.console.log(type +": "+message);
		if (details) 
			window.console.log(details);
	}	
};

ass.$Async = function(p){
	var fn = (p.fn)?p.fn:function(){};
	var time = (p.time)?p.time:1000;
	setTimeout(fn,time);
}

ass.$DoInterval =function(p){
	var fn = (p.fn)?p.fn:function(){};
	var time = (p.time)?p.time:1000;
	setInterval(fn,time);
}

ass.bind=function(functor, object){ 
	return function(){ return functor.apply(object,arguments); };  
};

ass.utils = {
	getImageName: function (url) {
		var index = url.lastIndexOf('/');
		var name = url;
		if (index >= 0) {
			name = url.substring(index + 1);
		}
		index = name.lastIndexOf('.');
		if (index >= 0) {
			name = name.substring(0, index);
		}
		return name;
	},
	getUrlParam:function(name){
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); 
        return null; //返回参数值
	},
	isAssProto:function(obj){
		var result = false;
		if(obj){
			result = (obj.$isAssProto)?obj.$isAssProto:false;
		}
		return result;
	},
	isHidden:function(viewObj){
		return viewObj.is(":hidden");
	}
}

ass.event = function(node,event,handler,master){
	if (master) 
		handler=ass.bind(handler,master);		
	if (node.addEventListener)
		node.addEventListener(event, handler, false);
	else if (node.attachEvent)
		node.attachEvent("on"+event, handler);
}

ass.$event = function($node,event,fn){
	if($node){
		$node.on(event,fn);
	}
}

ass.getEventObj = function(e){
	return window.event||e;
}

ass.toArray = function(d){	
	var arr = [];
	if(!d.length)
	{
		arr.push(d);
	}
	else
	{
		arr = arr.concat(d)
	}
	return arr;
}

ass.isArray = function(d){
	return typeof d == 'Array'
}

ass.isUndefined=function(a){
	return typeof a == "undefined";
};

ass.proto = function(){
	
	var origins = arguments;
	var compilation = origins[0];
	var has_constructor = !!compilation.$init;
	var construct = [];
	
	for(var i=0; i<origins.length; i++){
		
		var origin = origins[i];
		
		if( typeof origin == "function")
		{
			origin = orign.prototype;
		}
		
		if (origin.$init)
		{
			construct.push(origin.$init);
		} 

		for (var key in origin)
		{
			if (!compilation[key])
			{
				compilation[key] = origin[key];
			}
				
		}
	}
		
	compilation.$init = function(){
		for (var i=0; i<construct.length; i++){
			construct[i].apply(this, arguments);
		}
	};
	
	var fn = function(config){
		if(!this.setting) this.setting = {};
		var _config = (config)?config:{};
		this.setting.config = _config;
		this.$isAssProto = true;
		this.$init(_config);	
	}
	fn.prototype = compilation;
	return fn;
}

ass.extend = function(target,source){
	var t_proto = (typeof target == 'function')?target.prototype:target;
	var s_proto = (typeof source=='function')?source.prototype:source;
	
	for (var key in s_proto){
		if (!t_proto[key])
		{
			t_proto[key] = s_proto[key];
		}
	}
	if(source){
		t_proto.$super = source;
	}
	return t_proto;	
} 

ass.$extend = function(){
	var args = arguments;
	var oClassDefined = args[0];
	var _ExtendClass = args[1];
	var nameSpaces = (args[2])?args[2]:ass;
	
	if(_ExtendClass){
		oClassDefined = ass.extend(oClassDefined,_ExtendClass);
		oClassDefined.nameSpaces = nameSpaces;
	}
	
	nameSpaces[oClassDefined.name] = ass.proto(oClassDefined);
	return nameSpaces[oClassDefined.name];
}

ass.findDimensions=function() // 函数：获取尺寸
{
	// 获取窗口宽度
	if (window.innerWidth) 
	{
		winWidth = window.innerWidth;
	}
	else if ((document.body) && (document.body.clientWidth))
	{
		winWidth = document.body.clientWidth;
	}
	// 获取窗口高度
	if (window.innerHeight)
	{
		winHeight = window.innerHeight;
	}
	
	else if ((document.body) && (document.body.clientHeight))
	{
		winHeight = document.body.clientHeight;
	}	
	// 通过深入Document内部对body进行检测，获取窗口大小
	if (document.documentElement  && document.documentElement.clientHeight && document.documentElement.clientWidth)
	{
		winHeight = document.documentElement.clientHeight;
		winWidth = document.documentElement.clientWidth;
	}
	return {w:winWidth,h:winHeight}
}

ass.DomHelper = {
	getBody:function(){
		return $("body");
	}
}

ass.protoUI = function(){
	var args = arguments;
	var oViewDefined = args[0];
	var _ExtendClass = args[1];
	var nameSpace = (args[2])?args[2]:ass.UICompoent;
	return ass.$extend(oViewDefined,_ExtendClass,nameSpace);
}

ass.UIFactory.createInstance = function(name,config){
	var oView = null;
	if(ass.UICompoent[name]){
		var id = null;
		var instances = ass.UICompoent.Instances;
		oView = new ass.UICompoent[name](config);
		id = oView.getID();
		if(!instances[id]){
			instances[id] = oView;
		}
	}
	return oView;
}

ass.UICompoent.getView = function(id){
	return ass.UICompoent.Instances[id];
}

module.exports = ass;
