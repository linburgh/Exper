/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(8);
	__webpack_require__(23);
	__webpack_require__(26);
	__webpack_require__(27);
	__webpack_require__(28);
	__webpack_require__(29);
	__webpack_require__(30);
	__webpack_require__(24);
	__webpack_require__(25);
	__webpack_require__(7);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(18);
	__webpack_require__(31);
	__webpack_require__(32);
	__webpack_require__(33);
	module.exports = __webpack_require__(34);


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);

	ass.protoStore = function(){
		var args = arguments;
		var oStoreDefined = args[0];
		var _ExtendClass = args[1];
		var nameSpace = ass.StoreCompoent;	
		
		return ass.$extend(oStoreDefined,_ExtendClass,nameSpace);
	}


	ass.protoStore({
		name:"DataStore",
		$init:function(config){
			this.setting.data = (config.data)?config.data:[];
		},
		getData:function(){
			return this.setting.data;
		}
	});


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);

	ass.UICompoent.StyleCss=ass.proto({
		$init:function(){
			this.setting.classPrefix = "ass-view";
		},
		getUICss:function(name){
			return this.getClassPrefix()+"-"+name;
		},
		getView:function(){
			return this.getClassPrefix();
		},
		getClassPrefix:function(){
			return this.setting.classPrefix;
		},
		getViewBorderNone:function(){
			return this.getClassPrefix()+"-border-none";
		},
		getCursorCls:function(){
			return this.getClassPrefix()+"-pointer";
		},
		getViewPaddingNone:function(){
			return this.getClassPrefix()+"-padding-none";
		}
	});

	ass.UICompoent.StyleCss = (function(){
		return new ass.UICompoent.StyleCss();
	})();

	module.exports = ass.UICompoent.StyleCss;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);

	ass.UICompoent.LayoutMgr = ass.proto({
		$init:function(config){
			if(config.view){
				this.setting.view = config.view;
				this.setting.rowViews = this.setting.view.getRowViews();
				this.setting.columnViews = this.setting.view.getColumnViews();
				this.setting.rowViews = this.createRowViews();
				this.setting.columnViews = this.createColumnViews();
			}
		},
		setRowViews:function(rowConfigs){
			this.setting.rowViews = rowConfigs;
		},
		getRowView:function(){
			return this.setting.rowViews;
		},
		setColumnViews:function(colConfigs){
			this.setting.columnViews = colConfigs;
		},
		getColumnView:function(){
			return this.setting.columnViews;
		},
		createChildView:function(name,config){
			return ass.UIFactory.createInstance(name,config);
		},
		createRowView:function(){
			var args = arguments[0];
			var isFun = ass.utils.isAssProto(args);
			var oChildView = (isFun)?args:this.createChildView(args.name,args);		
			return ass. UIFactory.createInstance("RowView",{childView:oChildView});
		},
		createColumnView:function(){
			var col = {};
			var args = arguments[0];
			var isFun = ass.utils.isAssProto(args);
			var oChildView = (isFun)?args:this.createChildView(args.name,args);
			args.config = (args.config)?args.config:{};
			col.weight = (args.config.weight)?args.config.weight:12;
			col.offset = args.config.offset;
			col.padding = args.config.padding;
			col.childView = oChildView;
			return ass.UIFactory.createInstance("ColumnView",col);
		},
		createRowViews:function(){
			var views = [];
			var rowViews = this.setting.rowViews;
			for(var i=0; i<rowViews.length; i++){
				var oRowView = this.createRowView(rowViews[i]);
				views.push(oRowView);
			}
			return views;
		},
		createColumnViews:function(){
			var views = [];
			var columnViews = this.setting.columnViews;
			for(var i=0; i<columnViews.length; i++){
				var oColumnView = this.createColumnView(columnViews[i]);
				views.push(oColumnView);
			}
			return views;
		},
		parseRowViews:function(){
			var tpl = null;
			if(this.setting.rowViews){
				tpl =(this.setting.rowViews.length>0)?"":null;
				for(var i=0; i<this.setting.rowViews.length; i++){
					tpl += this.setting.rowViews[i].getTpl();
				}
			}
			tpl = (tpl)?tpl:"";
			return tpl;
		},
		parseColumnViews:function(){
			var tpl = null;
			if(this.setting.columnViews){
				tpl = (this.setting.columnViews.length>0)?"":null;
				if(this.setting.columnViews.length>0){
					var oRowView = ass. UIFactory.createInstance("RowView");
					for(var i=0; i<this.setting.columnViews.length; i++){
						tpl += this.setting.columnViews[i].getTpl();
					}
					tpl = oRowView.createTpl(tpl);
					oRowView.setTpl(tpl);
				}
			}
			tpl = (tpl)?tpl:"";
			return tpl;
		},
		parse:function(){
			var tpl = this.parseRowViews();
			tpl += this.parseColumnViews();
			return tpl;
		},
		layoutAfter:function(){
			var oViews = [];
			oViews = oViews.concat(this.setting.rowViews).concat(this.setting.columnViews);
			for(var i=0; i<oViews.length; i++){
				var oView = oViews[i];
				if(oView){
					var oChildView = oView.getChildView();
					if(oChildView){
						(oChildView.getlayoutMgr)?(oChildView.getlayoutMgr().layoutAfter()):false;
						oChildView.renderAfter();
					}
				}
							
			}
		}
	});

	ass.UICompoent.createLayoutMgr = function(config){
		return new ass.UICompoent.LayoutMgr(config);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);

	ass.UICompoent.Event.Handler = ass.proto({
		$init:function(config){
			this.setting.srcObjs = [];
		},
		pushSrcObj:function(srcObj){
			var _srcObjs = ass.toArray(srcObj);
			this.setting.srcObjs = this.setting.srcObjs.concat(_srcObjs);
		},
		stopPropagation:function(target,type){
			ass.$event(target,type,function(event){
				event.stopPropagation();
			});
		},
		bind:function(){
			if(this.setting.srcObjs){
				var srcObjs = this.setting.srcObjs;
				for(var i=0; i<srcObjs.length; i++){
					var srcObj = srcObjs[i];
					var target = srcObj.target;
					var type = srcObj.type;
					var handler = srcObj.handler;
					ass.$event(target,type,handler);
				}
			}
		}
	});

	ass.UICompoent.Event.createHandler = function(config){
		return new ass.UICompoent.Event.Handler(config);
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.BaseView = __webpack_require__(7);

	ass.protoUI({
		name:'RowView',
		$init:function(config){
			ass.UICompoent.BaseView.prototype.$init.call(this,config);
			this.setting.childView = config.childView;
			this.setting.tpl = this.createTpl((config.childView)?config.childView.getTpl():"");
		},
		createTpl:function(_tpl){
			var cls = "row "+" "+this.getUICss();
			var tpl = "<div class='"+cls+"' id='"+this.setting.id+"'>";
			tpl += (_tpl)?_tpl:"";
			tpl += "</div>";
			return tpl;
		},
		getChildView:function(){
			return this.setting.childView;
		}
	},ass.UICompoent.BaseView);

	module.exports = ass.UICompoent.RowView;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.View = __webpack_require__(8);

	ass.protoUI({
		name:'BaseView',
		scrollAxis:{x:'x',y:'y',xy:'xy'},
		$init:function(config){
			this.$initAction(config);
			this.initLayoutMgr(config);
			this.setting.border =(config.border)?config.border:false;
			this.setting.bgTrans = (config.bgTrans)?config.bgTrans:false;
			this.setting.padding = (config.padding)?config.padding:false;
			this.setting.css = config.css;
			this.setting.hidden = (config.hidden)?config.hidden:false;
			this.setting.scrollBodyObjs = (config.scrollBodyObjs)?config.scrollBodyObjs:[];
			this.setting.scroll = config.scroll;
			this.setting.tpl = this.createTpl(this.setting.layoutTpl);
		},
		initLayoutMgr:function(config){
			this.setting.rowViews = (config.rows)?config.rows:[];
			this.setting.columnViews = (config.cols)?config.cols:[];
			this.setting.layoutMgr = ass.UICompoent.createLayoutMgr({
				view:this,
				rowViews:this.setting.rowViews,
				columnViews:this.setting.columnViews
			});
			this.setting.layoutTpl = this.setting.layoutMgr.parse();
			this.setting.layoutTpl = (this.setting.layoutTpl)?this.setting.layoutTpl:"";
		},
		
		getlayoutMgr:function(){
			return this.setting.layoutMgr;
		},
		getRowViews:function(){
			return this.setting.rowViews;
		},
		getColumnViews:function(){
			return this.setting.columnViews;
		},
		getlayoutTpl:function(){
			return this.setting.layoutTpl;
		},
		getBorder:function(){
			var css = " ";
			if(this.setting.border){
				var boderCsss = this.setting.border;
				css += " ";
				switch(boderCsss){
					case "none":
						css += ass.UICompoent.StyleCss.getViewBorderNone();
					break;
					default:
						css += boderCsss;
					break;
				}
			}
			return css;
		},
		getPadding:function(){
			var css = '';
			if(this.setting.padding){
				var paddingCss = this.setting.padding;
				css += " ";
				switch(paddingCss){
					case "none":
						css += ass.UICompoent.StyleCss.getViewPaddingNone();
					break;
					default:
						css += paddingCss;
					break;
				}
			}
			return css;
		},
		getUICss:function(){
			var css = ass.UICompoent.View.prototype.getUICss.call(this);
			css += this.getBorder();
			css += this.getPadding();
			return css;
		},
		render:function(){
			ass.UICompoent.View.prototype.render.call(this);
			this.renderAfter();
		},
		setEventHandler:function(){
			this.setting.eventHandler = ass.UICompoent.Event.createHandler();
		},
		getEventHandler:function(){
			return this.setting.eventHandler;
		},
		renderAfter:function(){
			this.setViewObj();
			(this.setting.bgTrans)?this.setBackgroundTrans():false;
			(this.setting.listener.renderAfter)?ass.bind(this.setting.listener.renderAfter,this)():false;
			(this.setting.layoutMgr)?this.setting.layoutMgr.layoutAfter():false;
			(this.setting.scroll)?this.appendScroll():false;
			(!this.setting.eventHandler)?this.setEventHandler():false;
		},
		bindEventHandler:function(config){
			if(config){
				this.getViewObj().bind(config.type,config.handler);
			}
		},
		setBackgroundTrans:function(){
			var viewObj = this.getViewObj();
			if(viewObj){
				viewObj.addClass('ass-view-bg-transparent');
			}
		},
		getContainerId:function(){
			if(!this.setting.containerId){
				this.setting.containerId =  ass.uid()+"_container_fluid";
			}
			return this.setting.containerId;
		},
		getContainerObj:function(){
			return $("#"+this.getContainerId(),this.getViewObj());
		},
		createContainerTpl:function(tpl){
			return "<div class='container-fluid'  id='"+this.getContainerId()+"'>"+tpl+"</div>";
		},
		isScrollToEnd:function(scrollBodyObj,interval){
			var result = false;
			if(scrollBodyObj){
				 var viewH =scrollBodyObj.height();
		        var contentH =scrollBodyObj.get(0).scrollHeight;
		        var scrollTop =scrollBodyObj.scrollTop();
		        interval = (interval)?interval:0.95;
		        result = scrollTop/(contentH -viewH)>=interval;
			}
	       
	        return result;
		},
		setScrollBodyObjs:function(){
			if(this.setting.scrollBodyObjs){
				var scrollBodyObjs = this.setting.scrollBodyObjs;
				for(var i=0; i<scrollBodyObjs.length; i++){
					var scrollBodyObj = scrollBodyObjs[i];
					scrollBodyObjs[i] = $("#"+scrollBodyObj);
				}
			}
		},
		getScrollBodyObjs:function(){
			return this.setting.scrollBodyObjs;
		},
		addScrollToEndEventHandler:function(){
			this.setScrollBodyObjs();
			if(this.setting.listener.scrollToEnd){
				var scrollBodyObjs = this.getScrollBodyObjs();
				for(var i=0; i<scrollBodyObjs.length; i++){
					var scrollBodyObj = scrollBodyObjs[i];
					scrollBodyObj.scroll((function(_this,_scrollBodyObj){
					return function(){
							var isScrollToEnd= _this.isScrollToEnd(_scrollBodyObj);
							if(isScrollToEnd){
								_this.setting.listener.scrollToEnd();
							}
						}
					})(this,scrollBodyObj));
				}
			}
		},
		appendScroll:function(){
			if(this.setting.scroll){
				var cls = "ass-view-overflow-scroll"+"-"+this.setting.scroll;
				var containerObj = this.getContainerObj();
				if(containerObj && containerObj.height() > this.getHeight()){
					this.getViewObj().addClass(cls);
				}
			}
		}
	},ass.UICompoent.View);

	module.exports = ass.UICompoent.BaseView;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);

	ass.protoUI({
		name:'View',
		$init:function(config){
			this.$initAction(config);
			this.setting.tpl = this.createTpl();
		},
		$initAction:function(config){
			this.setting.name = this.name;
			this.setting.height = config.height;
			this.setting.width = config.width;
			this.setting.listener = (config.listener)?config.listener:{};
			this.setting.className = ass.UICompoent.StyleCss.getUICss(this.setting.name);
			this.setting.id = (config.id)?(config.id):ass.uid();
			this.setting.styleCss = config.styleCss;
			this.setting.render = (config.render)?config.render:ass.DomHelper.getBody();
		},
		createStyleDefine:function(){
			var style = "";
			if(this.setting.height)
			{
				style += "height:"+this.setting.height+"px;";
			}
			
			if(this.setting.width)
			{
				style += "width:"+this.setting.width+"px;";
			}
			
			style = (style.length>0)?"style='"+style+"'":style;
			return style;
		},
		createTpl:function(_tpl){
			var tpl = "<div class='"+ass.UICompoent.StyleCss.getView()+"' id='"+ this.setting.id+"'>";
			tpl += (_tpl)?_tpl:"";
			tpl += "</div>";
			return tpl;
		},
		parseTpl:function(){
			if(this.setting.render){
				this.setting.render.append(this.setting.tpl);
			}
		},
		removeViewObj:function(){
			var viewObj = this.getViewObj();
			if(viewObj){
				viewObj.remove();
			}
		},
		render:function(){
			this.parseTpl();
			this.setViewObj();
		},
		getParentObj:function(){
			var viewObj = this.getViewObj();
			var parentObj = (viewObj)?viewObj.parent():null;		
			return parentObj;
		},
		setViewObj:function(){
			this.setting.viewObj = $("#"+this.setting.id);
		},
		getViewObj:function(){
			this.setViewObj();
			return this.setting.viewObj;
		},
		getHeight:function(){
			return this.getViewObj().height();
		},
		getWidth:function(){
			return this.getViewObj().width();
		},
		setContentObj:function(render){
			this.setting.render = render;
		},
		getContentObj:function(){
			return this.setting.render;
		},
		resize:function(size){
			var _size = (size)?size:{};
			var w = _size.w;
			var h = _size.h;
			(w)?this.setting.viewObj.width(w):false;
			(h)?this.setting.viewObj.height(h):false;
			this.setting.size = _size;
		},
		getSize:function(){
			var viewObj = this.getViewObj();
			if(viewObj){
				var width = viewObj.width();
				var height = viewObj.height();
				this.setting.size = {w:width,h:height};
			}
			return this.setting.size;
		},
		doViewShowEventHandler:function(){
			var show = (this.setting.listener.show)?this.setting.listener.show:function(){};
			show();
		},
		show:function(){
			var viewObj = this.getViewObj();
			if(viewObj){
				viewObj.show();
			}
			this.doViewShowEventHandler();
		},
		hide:function(){
			var viewObj = this.getViewObj();
			if(viewObj){
				viewObj.hide();
			}
		},
		toggle:function(){
			var viewObj = this.getViewObj();
			if(viewObj){
				viewObj.toggle();
			}
		},
		getUICss:function(){
			this.setting.css = ass.UICompoent.StyleCss.getView() + " " +ass.UICompoent.StyleCss.getUICss(this.name);
			this.setting.css = (this.setting.styleCss)?this.setting.css+" "+this.setting.styleCss:this.setting.css;
			return this.setting.css;
		},
		getTpl:function(){
			return this.setting.tpl;
		},
		setDisplay:function(display){
			this.setting.display = display;
		},
		isDisplay:function(){
			return this.setting.display = (this.setting.display)?this.setting.display:false;
		},
		setTpl:function(tpl){
			this.setting.tpl = tpl;
		},
		setSize:function(size){
			var viewObj = this.getViewObj();
			viewObj.width(size.w);
			viewObj.height(size.h);
		},
		addCss:function(className){
			this.getViewObj.addClass(className);
		},
		getBodyPaddingTop:function(){
			return ass.DomHelper.getBody().css('padding-top').replace('px', '');
		},
		getValueTpl:function(value){
			return (value)?"data-value='"+value+"'":"";
		},
		getID:function(){
			return this.setting.id;
		},
		getCursorCls:function(){
			return  ass.UICompoent.StyleCss.getCursorCls();
		}
	});

	module.exports = ass.UICompoent.View;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.BaseView = __webpack_require__(7);

	ass.protoUI({
		name:'ColumnView',
		$init:function(config){
			ass.UICompoent.BaseView.prototype.$init.call(this,config);
			this.setting.type = (config.type)?config.type:"md";
			this.setting.weight = (config.weight)?config.weight:"1";
			this.setting.offset = config.offset;
			this.setting.childView = config.childView;
			this.setting.tpl = this.createTpl((config.childView)?config.childView.getTpl():"");
		},
		getCls:function(){
			return "col-"+this.setting.type+"-"+this.setting.weight;
		},
		getOffsetCls:function(){
			return (this.setting.offset)?("col-"+this.setting.type+"-offset-"+this.setting.offset):"";
		},
		createTpl:function(_tpl){
			var cls = this.getCls()+" "+this.getUICss()+" "+this.getOffsetCls();
			var tpl = "<div class='"+cls+"' id='"+this.setting.id+"'>";
			tpl += (_tpl)?_tpl:"";
			tpl += "</div>";
			return tpl;
		},
		getChildView:function(){
			return this.setting.childView;
		}
	},ass.UICompoent.BaseView);

	module.exports = ass.UICompoent.ColumnView;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.BaseView = __webpack_require__(7);

	ass.protoUI({
		name:'Viewport',
		$init:function(config){
			ass.UICompoent.BaseView.prototype.$init.call(this,config);
			this.setting.render = ass.DomHelper.getBody();
		},
		createTpl:function(_tpl){
			return  "<div class='container-fluid "+this.getUICss()+"' id='"+this.setting.id+"'>"+_tpl+"</div>";
		},
		renderAfter:function(){
			this.resize();
			ass.UICompoent.BaseView.prototype.renderAfter.call(this);
		},
		resize:function(){
			ass.UICompoent.BaseView.prototype.resize.call(this,{h:$(document).height()- this.getBodyPaddingTop()});
		},
		render:function(){
			ass.UICompoent.BaseView.prototype.render.call(this);
		}
	},ass.UICompoent.BaseView);
	module.exports = ass.UICompoent.Viewport;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.BaseView = __webpack_require__(7);

	ass.protoUI({
		name:'NavbarItem',
		$init:function(config){
			this.setting.text = (config.text)?config.text:"";
			this.setting.icon = config.icon;
			this.setting.handler = config.handler;
			ass.UICompoent.BaseView.prototype.$init.call(this,config);
		},
		createIconStyle:function(){
			var style = null;
			if(this.setting.icon){
				style = "padding-top: 5px;padding-bottom:5px";
			}
			style = "style='"+((style)?style:"")+"'";
			return style;
		},
		createItemTpl:function(){
			var itemCls = this.getUICss();
			var tpl = "<li class='"+itemCls+"'  id='"+this.setting.id+"'>";
			tpl += "<a "+this.createIconStyle()+"  class='"+this.getCursorCls()+"'>";
			tpl += (this.setting.icon)?"<div class='icon "+this.setting.icon+"'></div>":"";
			tpl += "<div class='text'>"+this.setting.text+"</div>";
			tpl += "</a>";
			tpl += "</li>";
			return tpl;
		},
		createTpl:function(){
			return this.createItemTpl();
		},
		bindEventHandler:function(config){
			var viewObj = this.getViewObj();
			if(viewObj){
				var $node = $("a",viewObj);
				var type = config.type;
				var handler = config.handler;
				ass.$event($node,type,handler);
			}
		},
		renderAfter:function(){
			if(this.setting.handler){
				this.bindEventHandler({type:'click',handler:this.setting.handler});
			}
		}
	},ass.UICompoent.BaseView);

	ass.protoUI({
		name:'Navbar',
		$init:function(config){
			this.setting.items = (config.items)?config.items:[];
			this.setting.headTpl = config.headTpl;
			this.setting.title = (config.title)?config.title:"";
			this.setting.pos = (config.pos)?config.pos:"top";
			ass.UICompoent.BaseView.prototype.$init.call(this,config);
		},
		parseItemTpls:function(){
			var tpl = null;
			var navCls = ass.UICompoent.StyleCss.getClassPrefix()+"-nav";
			var navbarCls = ass.UICompoent.StyleCss.getClassPrefix()+"-navbar-nav";
			
			if(this.setting.items){
				var _items = this.setting.items;
				this.setting.navbarItemObjs = [];
				var tpl = "<div class='collapse navbar-collapse '>";
				tpl += "<ul class='nav navbar-nav navbar-right  "+navCls+" "+navbarCls+"' >";
				for(var i=0; i<_items.length; i++){
					var item = _items[i];
					var itemObj = ass.UIFactory.createInstance("NavbarItem",item);
					this.setting.navbarItemObjs.push(itemObj);
					tpl +=itemObj.getTpl();
				}
				tpl +="</ul>";
				tpl += "</div>";
			}
			tpl = (tpl)?tpl:"";
			return tpl;
		},
		getPosition:function(){
			return "navbar-fixed-"+this.setting.pos;
		},
		createHeadTpl:function(){
			var titleTpl = "<a class='navbar-brand' href='#'>"+this.setting.title+"</a>";
			var tpl = "<div class='navbar-header'>";
			tpl += (this.setting.headTpl)?this.setting.headTpl:titleTpl;
			tpl += "</div>";
			return tpl;
		},
		createTpl:function(){
			var pos = this.getPosition();
			var cls = this.getUICss();
			var tpl = "<nav class='navbar navbar-default  "+pos+"  " +this.getUICss()+"'  id='"+this.setting.id+"'>";
			tpl += this.createContainerTpl(this.createHeadTpl()+this.parseItemTpls());
			tpl += "</nav>";
			return tpl;
		},
		appendFixTopPadding:function(){
			$("body").addClass('ass-view-body-fix-padding-top');
		},
		bindNavbarItemEventHandler:function(){
			if(this.setting.navbarItemObjs){
				for(var i=0; i<this.setting.navbarItemObjs.length; i++){
					var itemObj = this.setting.navbarItemObjs[i];
					itemObj.setViewObj();
					itemObj.renderAfter();
				}
			}
		},
		render:function(){
			ass.UICompoent.BaseView.prototype.render.call(this);
			this.appendFixTopPadding();
		},
		renderAfter:function(){
			this.bindNavbarItemEventHandler();
		}
	},ass.UICompoent.BaseView);

	module.exports = ass.UICompoent.Navbar;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.BaseView = __webpack_require__(7);
	ass.UICompoent.Panel = __webpack_require__(13);

	ass.protoUI({
		name:'ColumnModal',
		$init:function(config){
			ass.UICompoent.BaseView.prototype.$init.call(this,config);
			this.setting.columns = (config.columns)?config.columns:[];
			this.setting.dataStore = (config.dataStore)?config.dataStore:[];
			this.setting.tpl = this.createTpl();
		},
		createTheadTpl:function(){
			var tpl = null;
			if(this.setting.columns){
				var columns = this.setting.columns;
				tpl = "<thead>";
				tpl += "<tr>";
				for(var i=0; i<columns.length; i++){
					var column = columns[i];
					var header = column.header;
					tpl += "<th>"+header+"</th>";
				}
				tpl += "</tr>";
				tpl += "</thead>";
			}
			tpl = (tpl)?tpl:"";
			return tpl;
		},
		creatTbodyTpl:function(){
			var tpl = null;
			if(this.setting.columns){
				var columns = this.setting.columns;
				var data  = this.setting.dataStore.getData();
				tpl = "<tbody>";
				for(var td=0; td<data.length; td++){
					var d = data[td];
					tpl += "<tr>";
					for(var col = 0; col<columns.length;col++){
						var index = columns[col].dataIndex;
						var cls = columns[col].cls;
						var text = d[index];
						cls = (cls)?"class='"+cls+"'":"";
						tpl += "<td "+cls+">"+text+"</td>";
					}
					tpl += "</tr>";
				}
				
				tpl += "</tbody>";
			}
			tpl = (tpl)?tpl:"";
			return tpl;
		}, 
		createTpl:function(){
			var tpl = "<table class='table table-striped table-bordered'>";
			tpl += this.createTheadTpl();
			tpl += this.creatTbodyTpl();
			tpl += "</table>";
			return tpl;
		}
	},ass.UICompoent.BaseView);

	ass.protoUI({
		name:"GridPanel",
		$init:function(config){
			ass.UICompoent.Panel.prototype.$init.call(this,config);
			this.setting.border = 'none';
			this.setting.dataStore = this.getDataStore({data:config.data})
			this.setting.columnModal = this.getColumnModal({dataStore:this.setting.dataStore,columns:config.columns});
			this.setting.bodyTpl = this.getColumnTpl();
			this.setting.tpl = this.createTpl();
		},
		getDataStore:function(config){
			if(!this.setting.dataStore){
				this.setting.dataStore = new ass.StoreCompoent.DataStore(config);
			}
			return this.setting.dataStore;
		},
		getColumnModal:function(config){
			if(!this.setting.columnModal){
				this.setting.columnModal = new ass.UICompoent.ColumnModal(config);
			}
			return this.setting.columnModal;
		},
		getColumnTpl:function(){
			return this.setting.columnModal.getTpl();
		}
	},ass.UICompoent.Panel);

	module.exports = ass.UICompoent.GridPanel;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.BaseView = __webpack_require__(7);
	ass.UICompoent.Page = __webpack_require__(14);

	ass.protoUI({
		name:'Panel',
		$init:function(config){
			ass.UICompoent.BaseView.prototype.$init.call(this,config);
			this.setting.bodyId = ass.uid();
			this.setting.theme = (config.theme)?config.theme:'default';
			this.setting.title = (config.title)?config.title:"";
			this.setting.headHidden = (config.headHidden)?config.headHidden:false;
			this.setting.headTpl = (config.headTpl)?config.headTpl:this.createTitle();
			this.setting.bodyTpl = config.bodyTpl;
			this.setting.footerHidden = (config.footerHidden)?config.footerHidden:false;
			this.setting.footerTpl = (config.footerTpl)?config.footerTpl:"";
			this.setting.isPage = (config.isPage)?config.isPage:false;
			this.setting.tpl = this.createTpl();
		},
		initPageConfig:function(config){
			var pageConfig = null;
			config = (config)?config:{};
			if(this.setting.isPage){
				var data = (config.data)?config.data:[];
				var dataCount = data.length;
				pageConfig = ass.copy(config.pageConfig);
				pageConfig.dataCount = data.length;
			}
			return pageConfig;
		},
		createTitle:function(){
			return  this.getTitle();
		},
		getTitle:function(){
			return this.setting.title;
		},
		createThemeCls:function(){
			return "panel-"+this.setting.theme;
		},
		createTpl:function(){
			var title = this.getTitle();
			var themeCls = this.createThemeCls();
			var tpl = "<div class='panel "+themeCls+" "+this.getUICss()+"'  id='"+this.setting.id+"'  "+this.createStyleDefine()+">";
			
			if(!this.setting.headHidden)
			{
				tpl += (this.setting.headTpl)?this.createHeadTpl():"";
			}
			
			tpl += this.createBodyTpl();
			
			if(!this.setting.footerHidden)
			{
				tpl += (this.setting.footerTpl)?this.createFooterTpl():"";
			}
			
			tpl += "</div>";
			return tpl;
		},
		getBodyId:function(){
			if(!this.setting.bodyId){
				this.setting.bodyId =  ass.uid()+"_panel_body";
			}
			return this.setting.bodyId;
		},
		getBodyObj:function(){
			this.setting.bodyObj = $("#"+this.getBodyId());
			return this.setting.bodyObj;
		},
		getHeadId:function(){
			if(!this.setting.headId){
				this.setting.headId = ass.uid()+"_panel_heading";
			}
			return this.setting.headId;
		},
		getHeadObj:function(){
			this.setting.headObj = $("#"+this.getHeadId()); 
			return this.setting.headObj;
		},
		createHeadTpl:function(){
			return "<div class='panel-heading'  id='"+this.getHeadId()+"'>"+this.setting.headTpl+"</div>";
		},
		createBodyTpl:function(){
			var tpl = "<div class='panel-body ' id='"+this.getBodyId()+"'>";
			tpl += (this.setting.bodyTpl)?this.setting.bodyTpl:(this.createContainerTpl(this.setting.layoutTpl));
			tpl += "</div>";
			return tpl;
		},
		isPage:function(){
			return this.setting.isPage;	
		},
		getPage:function(){
			return this.setting.oPage;
		},
		createPageTpl:function(config){
			var tpl = this.setting.footerTpl;
			this.setting.pageConfig = this.initPageConfig(config);
			if(this.setting.pageConfig){
				this.setting.oPage = ass.UIFactory.createInstance('Page',this.setting.pageConfig);
				tpl+=this.setting.oPage.getTpl();
			}
			return (tpl)?tpl:"";
		},
		createFooterTpl:function(p){
			var _p = (p)?p:{};
			var cls = (_p.cls)?_p.cls:"";
			var isPage = this.isPage();
			var tpl = "<div class='panel-footer "+cls+"'>";
			tpl += this.setting.footerTpl;
			tpl += "</div>";
			return tpl;
		},
		renderAfter:function(){
			ass.UICompoent.BaseView.prototype.renderAfter.call(this);
			(this.setting.oPage)?this.setting.oPage.renderAfter():false;
		}
	},ass.UICompoent.BaseView);

	module.exports = ass.UICompoent.Panel;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.BaseView = __webpack_require__(7);

	ass.protoUI({
		name:'Page',
		$init:function(config){
			ass.UICompoent.BaseView.prototype.$init.call(this,config);
			this.initPage(config);
		},
		initPage:function(config){
			config = (config)?config:{};
			this.setting.dataCount = (config.dataCount)?config.dataCount:0;
			this.setting.pageSize = (config.pageSize)?config.pageSize:10;
			this.setting.type = (config.type)?config.type:'simple';
			this.setPageCount(this.setting.dataCount,this.setting.pageSize);
			this.setting.tpl = this.createTpl();
		},
		setCallBack:function(fn){
			this.setting.callBack =fn; 
		},
		getCallBack:function(){
			return this.setting.callBack;
		},
		getPageSize:function(){
			return this.setting.pageSize;
		},
		setPageCount:function(dataCount,pageSize){
			this.setting.pageCount = Math.ceil(dataCount/pageSize);
		},
		getPageCount:function(){
			return this.setting.pageCount;
		},
		createSimpleTpl:function(){
			var pageCount = this.getPageCount();
			var currPageIndex = this.getCurrPageIndex();
			var currPageIndexId = this.getCurrPageIndexId();
			var tpl = "<li class='paginate_button'>";
			tpl += "<a>当前第<span id='"+currPageIndexId+"'>"+currPageIndex+"</span>/"+pageCount+"页</a>";
			tpl += "</li>";
			return tpl;
		},
		setCurrPageIndex:function(currPageIndex){
			var currPageIndexObj = this.getCurrPageIndexObj();
			this.setting.currPageIndex = currPageIndex;
			if(currPageIndexObj){
				currPageIndexObj.text(this.setting.currPageIndex );
			}
		},
		getCurrPageIndex:function(){
			return (this.setting.currPageIndex)?this.setting.currPageIndex:0;
		},
		getPreBtnId:function(){
			if(!this.setting.preBtnId){
				this.setting.preBtnId = ass.uid()+"_page_previous";
			}
			return this.setting.preBtnId;
		},
		getCurrPageIndexId:function(){
			if(!this.setting.currPageIndexId){
				this.setting.currPageIndexId = ass.uid()+"_page_next";
			}
			return this.setting.currPageIndexId;
		},
		getCurrPageIndexObj:function(){
			this.setting.currPageIndexObj = $("#"+this.getCurrPageIndexId());
			return this.setting.currPageIndexObj;
		},
		getNextBtnId:function(){
			if(!this.setting.nextBtnId){
				this.setting.nextBtnId = ass.uid()+"_page_next";
			}
			return this.setting.nextBtnId;
		},
		getPreBtnObj:function(){
			this.setting.preBtnObj = $("#"+ this.getPreBtnId());
			return this.setting.preBtnObj;
		},
		getNextBtnObj:function(){
			this.setting.nextBtnObj = $("#"+this.getNextBtnId());
			return this.setting.nextBtnObj;
		},
		getPaginationId:function(){
			if(!this.setting.paginationId){
				this.setting.paginationId = ass.uid()+"_pagination";
			}
			return this.setting.paginationId;
		},
		getPaginationObj:function(){
			this.setting.paginationObj = $("#"+this.getPaginationId());
			return this.setting.paginationObj;
		},
		createPageBtnGroupTpl:function(_tpl){
			var preBtnId = this.getPreBtnId();
			var nextBtnId = this.getNextBtnId();
			var paginationId = this.getPaginationId();
			var tpl = "<ul class='pagination'  id='"+paginationId+"'>";
			tpl += "<li class='paginate_button previous'><a class='"+this.getCursorCls()+"'  id='"+preBtnId+"'>上一页</a></li>";
			tpl +=(_tpl)?_tpl:'';
			tpl += "<li class='paginate_button next'><a class='"+this.getCursorCls()+"'   id='"+nextBtnId+"'>下一页</a></li>";
			tpl += "</ul>";
			return tpl;
		},
		getTypeCls:function(){
			return "ass-view-Page-"+this.setting.type;
		},
		createPageTpl:function(){
			var tpl = null;
			if(this.setting.pageSize){
				var pageCount = this.getPageCount();
				this.setCurrPageIndex((pageCount>0)?1:0);
				switch(this.setting.type){
					case "simple":
						tpl = this.createSimpleTpl();
					break;
				}
				tpl = this.createPageBtnGroupTpl(tpl);
			}
			return (tpl)?tpl:'';
		},
		createTpl:function(tpl){
			return "<div class='"+this.getUICss()+"  "+this.getTypeCls()+"' id='"+ this.setting.id+"'>"+this.createPageTpl()+"</div>";
		},
		setData:function(data){
			this.setting.data = data;
		},
		getData:function(){
			return this.setting.data;
		},
		//根据当前页加载数据
		load:function(){
			var pageData = [];
			var data = this.getData();
			var currPageIndex = this.getCurrPageIndex();
			var pageSize = this.getPageSize();
			var dataStartIndex = (currPageIndex-1)*pageSize;
			var dataEndIndex = currPageIndex*pageSize;
			for(var i=dataStartIndex; i<dataEndIndex; i++){
				pageData.push(data[i]);
			}
			return pageData;
		},
		doCallBack:function(){
			var callBack = this.getCallBack();
			(callBack)?callBack():false;
		},
		goPrePage:function(){
			var currPageIndex = this.getCurrPageIndex();
			currPageIndex = (currPageIndex>1)?(currPageIndex-1):currPageIndex;
			this.setCurrPageIndex(currPageIndex);
			this.doCallBack();
		},
		goNextPage:function(){
			var currPageIndex = this.getCurrPageIndex();
			var pageCount = this.getPageCount();
			currPageIndex = (currPageIndex<pageCount)?currPageIndex+1:currPageIndex;
			this.setCurrPageIndex(currPageIndex);
			if(!this.isEnd()){
				this.doCallBack();
			}	
		},
		isEnd:function(){
			var result = false;
			var currPageIndex = this.getCurrPageIndex();
			var pageCount = this.getPageCount();
			result  =  (currPageIndex === pageCount);
			return result;
		},
		addPageEventHandler:function(){
			var viewObj = this.getViewObj();
			if(viewObj){		
				var eventHandler = this.getEventHandler();
				var preBtnObj = this.getPreBtnObj();
				var nextBtnObj = this.getNextBtnObj();
				eventHandler.pushSrcObj({
					target:preBtnObj,
					type:'click',
					handler:(function(_this){
						return function(){
							_this.goPrePage();
						}
					})(this)
				});
				eventHandler.pushSrcObj({
					target:nextBtnObj,
					type:'click',
					handler:(function(_this){
						return function(){
							_this.goNextPage();
						}
					})(this)
				});
				eventHandler.bind();
			}
		},
		//重置Page各属性值
		reset:function(config){
			this.getPaginationObj().remove();
			this.initPage(config);
			this.getViewObj().append(this.createPageTpl());
			this.addPageEventHandler();
		},
		renderAfter:function(){
			ass.UICompoent.BaseView.prototype.renderAfter.call(this);
			this.addPageEventHandler();
		}
	},ass.UICompoent.BaseView)

	module.exports = ass.UICompoent.Page

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.BaseView = __webpack_require__(7);
	ass.UICompoent.Panel = __webpack_require__(13);

	ass.protoUI({
		name:'ListItem',
		$init:function(config){
			ass.UICompoent.View.prototype.$init.call(this,config);
			this.setting.text = (config.text)?config.text:"";
			this.setting.value = config.value;
			this.setting.width = config.width;
			this.setting.title = config.title;
			this.setting.itemTpl = config.itemTpl;
			this.setting.iconCls = (config.iconCls)?config.iconCls:"";
			this.setting.handler =(config.handler)?config.handler:function(){};
			this.setting.tpl = this.createTpl();
		},
		createTpl:function(){
			var valueTpl = this.getValueTpl(this.setting.value);
			var styleDefine = this.createStyleDefine();
			var text = this.setting.text;
			var title = (this.setting.title)?"title='"+this.setting.title+"'":"";
			var tpl = "<a  class='list-group-item "+this.getUICss()+" "+this.setting.iconCls+" "+this.getCursorCls()+"'  "+valueTpl+"  "+styleDefine+"  "+title+" id='"+this.setting.id+"'>";
			tpl += text
			tpl += "</a>";
			tpl = (this.setting.itemTpl)?this.setting.itemTpl:tpl;
			return tpl;
		},
		getText:function(){
			return this.setting.text;
		},
		setText:function(Text){
			this.getViewObj().append(Text);
		},
		renderAfter:function(){
			ass.UICompoent.BaseView.prototype.renderAfter.call(this);
			var viewObj = this.getViewObj();
			var eventHandler = this.getEventHandler();
			if(viewObj){
				eventHandler.pushSrcObj({
					target:viewObj,
					type:'click',
					handler:this.setting.handler
				});
				eventHandler.bind();
			}
		}
	},ass.UICompoent.BaseView);

	ass.protoUI({
		name:'ListPanel',
		layout:{vertical:'vertical',horizontal:'horizontal'},
		$init:function(config){
			ass.UICompoent.Panel.prototype.$init.call(this,config);
			this.setting.items = (config.items)?config.items:[];
			this.setting.layout = (config.layout)?config.layout:this.layout.vertical;
			switch(this.setting.layout){
				case this.layout.horizontal:
					this.setting.lineItemNum = config.lineItemNum;
				break;
			}
			this.setting.footerTpl = this.createPageTpl({data:this.setting.items,pageConfig:config.pageConfig});
			this.setting.layoutTpl = this.parseItems();
			this.setting.tpl = this.createTpl();
		},
		getlayoutCss:function(){
			return ass.UICompoent.StyleCss.getClassPrefix() + "-"+this.setting.layout;
		},
		load:function(){
			var data = [];
			var oPage =  this.getPage();
			if(!oPage)
			{
				return this.setting.items;
			}
			oPage.setData(this.setting.items);
			oPage.setCallBack(
				(function(_this){
					return function(){
						_this.refresh();
					}
				})(this)
			);
			data = oPage.load();
			return data;
		},
		setItems:function(items){
			this.setting.items = items;
		},
		getlistGroupId:function(){
			if(!this.setting.listGroupId){
				this.setting.listGroupId = ass.uid() + "_list_group";
			}
			return this.setting.listGroupId;
		},
		getlistGroupObj:function(){
			this.setting.listGroupObj = $("#"+this.getlistGroupId());
			return this.setting.listGroupObj;
		},
		createItemTpls:function(){
			var tpl = null;
			if(this.setting.items){
				var items = this.load();
				var layoutCss = this.getlayoutCss();
				var listGroupId = this.getlistGroupId();
				this.setting.oItems = [];
				tpl = "<div class='list-group "+layoutCss+" ass-view-clearfix'  id='"+listGroupId+"'>";
				for(var i=0; i<items.length; i++){
					var item = items[i];
					if(item){
						var oItem = ass.UIFactory.createInstance('ListItem',item);
						var itemTpl = oItem.getTpl();
						this.setting.oItems.push(oItem);
						tpl += itemTpl;
					}
					
				}
				tpl += "</div>";
			}
			
			tpl = (tpl)?tpl:"";
			return tpl;
		},
		refresh:function(){
			var listGroupObj = this.getlistGroupObj();
			if(listGroupObj){
				var itemTpl = this.createItemTpls();
				var rowViewObj = this.getRowViewObj();
				listGroupObj.remove();
				rowViewObj.append(itemTpl);
				this.doItemObjsRenderAfter();
			}
		},
		getRowViewObj:function(){
			if(this.setting.oRowView && !this.setting.rowViewObj){
				this.setting.oRowView.setViewObj();
				this.setting.rowViewObj = this.setting.oRowView.getViewObj();
			}
			return this.setting.rowViewObj;
		},
		parseItems:function(){
			var tpl = this.createItemTpls();
			if(tpl){
				this.setting.oRowView =  ass.UIFactory.createInstance("RowView");
				tpl =this.setting.oRowView.createTpl(tpl);
			}
			tpl = (tpl)?tpl:"";
			return tpl;
		},
		countItemWidth:function(){
			if(this.setting.lineItemNum){
				var listWidth = this.getViewObj().width();
				if(listWidth>0){
					var itemNum = this.setting.lineItemNum;
					var itemWidth = Math.round(listWidth/itemNum);
					for(var i=0; i<this.setting.oItems.length; i++){
						var oItem = this.setting.oItems[i];
						var itemObj = $("#"+oItem.getID());
						var paddingleft  =parseInt(itemObj.css("padding-left").replace("px",""));
						var paddingRight  =parseInt(itemObj.css("padding-right").replace("px",""));
						var padding = paddingleft+paddingleft;
						var _itemWidth = itemWidth-padding*2;
						oItem.setViewObj(itemObj);
						itemObj.attr("style","overflow-x:hidden;text-overflow:ellipsis ");
						itemObj.width(_itemWidth);
					}
				}
			}
		},
		doItemObjsRenderAfter:function(){
			if(this.setting.oItems){
				for(var i=0; i<this.setting.oItems.length; i++){
					this.setting.oItems[i].renderAfter();
				}
			}
			this.countItemWidth();
		},
		render:function(){
			ass.UICompoent.Panel.prototype.render.call(this);
		},
		renderAfter:function(){
			ass.UICompoent.Panel.prototype.renderAfter.call(this);
			this.doItemObjsRenderAfter();
		}
	},ass.UICompoent.Panel);

	module.exports = ass.UICompoent.ListPanel;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.Panel = __webpack_require__(13);

	ass.protoUI({
		name:"FormPanel",
		$init:function(config){
			ass.UICompoent.Panel.prototype.$init.call(this,config);
			this.setting.formFields = [];
			this.setting.labelWidth = config.labelWidth;
			this.setting.labelAlign = config.labelAlign;
			this.setting.fieldWidth = config.fieldWidth;
			this.setting.items = (config.items)?config.items:[];
			this.setting.buttons = (config.buttons)?config.buttons:[];
			this.setting.buttonAlign = (config.buttonAlign)?config.buttonAlign:"center";
			this.setting.buttonAlign = this.getButtonAlign();
			this.setting.layout = (config.layout)?config.layout:"horizontal";
			this.setting.bodyTpl = this.parseItems();
			this.setting.footerTpl = this.parseButtons();
			this.setting.tpl = this.createTpl();
		},
		createTpl:function(){
			var title = this.getTitle();
			var tpl = "<div class='panel panel-default "+this.getUICss()+"'  id='"+this.setting.id+"'>";
			tpl += (this.setting.headTpl)?this.createHeadTpl():"";
			tpl +=  this.createBodyTpl();
			tpl += (this.setting.footerTpl)?this.createFooterTpl():"";
			tpl += "</div>";
			return tpl;
		},
		createFooterTpl:function(p){
			return ass.UICompoent.Panel.prototype.createFooterTpl.call(this,{cls:this.setting.buttonAlign});
		},
		getButtonAlign:function(){		
			this.setting.buttonAlign = ass.UICompoent.StyleCss.getClassPrefix()+"-"+"button-align"+"-"+this.setting.buttonAlign;
			return this.setting.buttonAlign;
		},
		getFormFields:function(){
			return this.setting.formFields;
		},
		parseItems:function(){
			var tpl = null;
			if(this.setting.items){
				var formFields = this.getFormFields();
				tpl = "<form class='form-"+this.setting.layout+"' role='form'>";

				for(var i=0; i<this.setting.items.length; i++){
					var item = this.setting.items[i];
					var name = item.name;
					var oField = null;
					var itemTpl = null;
					(this.setting.labelWidth)?(item.labelWidth=this.setting.labelWidth):false;
					(this.setting.labelAlign)?(item.labelAlign=this.setting.labelAlign):false;
					(item.width)?(item.width=item.width):((this.setting.fieldWidth)?(item.width=this.setting.fieldWidth):false);
					oField = ass.UIFactory.createInstance(name,item);
					itemTpl = oField.getTpl();
					formFields.push(oField);
					tpl += "<div class='form-group'>";
					tpl += itemTpl;
					tpl += "</div>";
				}
				tpl += "</form>";
			}
			tpl = (tpl)?tpl:"";
			return tpl;
		},
		parseFieldsToFieldObjs:function(){
			var formFields = this.setting.formFields;
			for(var i=0; i<formFields.length; i++){
				formFields[i].renderAfter();
			}
		},
		parseButtons:function(){
			var tpl = null;
			if(this.setting.buttons){
				tpl = "";
				for(var i=0; i<this.setting.buttons.length; i++){
					var button = this.setting.buttons[i];
					var btnTpl =  ass.UIFactory.createInstance("Button",button).getTpl();
					tpl += btnTpl;
				}
			}
			tpl = (tpl)?tpl:"";
			return tpl;
		},
		renderAfter:function(){
			ass.UICompoent.Panel.prototype.renderAfter.call(this);
			this.parseFieldsToFieldObjs();
		}
	},ass.UICompoent.Panel);

	module.exports = ass.UICompoent.FormPanel;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.Panel = __webpack_require__(13);
	ass.UICompoent.Modal = __webpack_require__(18);

	ass.protoUI({
		name:'Window',
		pos:{center:'center'},
		buttonActions:{close:'close'},
		$init:function(config){
			ass.UICompoent.Panel.prototype.$init.call(this,config);
			this.setting.modal = (config.modal)?config.modal:false;
			this.setting.headTpl = this.createHeadTpl();
			this.setting.location = (config.location)?config.location:{left:0,top:0};
			this.setting.align = config.align;
			this.setting.icon = config.icon;
			this.setting.buttons = (config.buttons)?config.buttons:[{type:this.buttonActions.close}];
			this.setting.tpl = this.createTpl();
		},
		parseButtons:function(){
			var tpl = null;
			if(this.setting.buttons){
				tpl = "<div class='collapse navbar-collapse ' >";
				tpl += "<ul class='nav navbar-nav navbar-right'>";
				this.setting.buttonSrcObjs = [];
				for(var i=0; i<this.setting.buttons.length; i++){
					var srcObj = {type:'click'};
					var button = this.setting.buttons[i];
					var iconCls = (button.iconCls)?button.iconCls:"glyphicon glyphicon-remove";
					var type = button.type;
					this.setting.buttonCls = this.setting.className+"-button";
					tpl += "<li class='"+this.setting.buttonCls+"'>";
					switch(type){
						case this.buttonActions.close:
							tpl += "<a class="+this.getCursorCls()+" ><span class='"+iconCls+"'></span></a>";
							srcObj.handler = (function(_this){
								return function(){
									_this.hide();
								}
							})(this);
						break;
					}
					tpl += "</li>";
					this.setting.buttonSrcObjs.push(srcObj);
				}
				tpl += "</ul>";
				tpl += "</div>";
			}
			tpl = (tpl)?tpl:"";
			return tpl;
		},
		createTitleTpl:function(){
			var title = "<span class='title'>"+this.setting.title+"</span>";
			var tpl = "<div class='navbar-header'>";
			tpl +="<div class='navbar-brand'>";
			tpl += (this.setting.icon)?"<span class='icon "+this.setting.icon+"' ></span>":"";
			tpl += title;
			tpl += "</div>";
			tpl += "</div>";
			return tpl;
		},
		createHeadTpl:function(){
			var title = "<span class='title'>"+this.setting.title+"</span>";
			var tpl = "<div class='panel-heading'>";
			tpl += "<nav class='navbar navbar-default'>";
			tpl += this.createContainerTpl(this.createTitleTpl()+this.parseButtons());
			tpl += "</nav>";
			tpl += "</div>";
			return tpl;
		},
		createTpl:function(){
			var tpl = ass.UICompoent.Panel.prototype.createTpl.call(this);
			if(this.setting.modal){
				this.setting.modalId = ass.uid();
				var config = {compClsName:this.setting.className+"Modal",id:this.setting.modalId,bodyTpl:tpl};
				var modalTpl = ass.UICompoent.Modal.prototype.createModalTpl.call(this,config);
				tpl = modalTpl;
			}
			return tpl;
		},
		getCenterPosition:function(){
			var location = {left:0,top:0};
			var viewObj = this.getViewObj();
			if(viewObj){
				var w = viewObj.width(),h = viewObj.height();
				location.left = Math.abs(Math.round((this.setting.render.width()-w)/2));
				location.top = Math.abs(Math.round((this.setting.render.height()-h)/2));
			}
			return location;
		},
		setlocation:function(location){
			var viewObj = this.getViewObj();
			location = (location)?location:this.setting.location;
			if(this.setting.align){
				var align = this.setting.align;
				switch(align){
					case this.pos.center:
						location = this.getCenterPosition();
					break;
				}
			}
			this.setting.location = location;
			viewObj.offset(this.setting.location);
		},
		render:function(){
			ass.UICompoent.Panel.prototype.render.call(this);
		},
		renderAfter:function(){
			ass.UICompoent.Panel.prototype.renderAfter.call(this);
			this.bindButtonEventHandler();
			this.setlocation(this.setting.location);
			this.hide();
		},
		bindButtonEventHandler:function(){
			var eventHandler = this.getEventHandler();
			var srcObs = []; 
			this.setting.buttonObjs = $("."+this.setting.buttonCls,this.getViewObj());
			if(this.setting.buttonObjs.length === this.setting.buttonSrcObjs.length){
				for(var i=0; i<this.setting.buttonObjs.length; i++){
					var buttonObj = this.setting.buttonObjs.eq(i);
					this.setting.buttonSrcObjs[i].target = buttonObj;					
				}
			}
			eventHandler.pushSrcObj(this.setting.buttonSrcObjs);
			eventHandler.bind();
		},
		getModalView:function(){
			return $("#"+this.setting.modalId);
		},
		appendModal:function(){
			this.getModalView().show();
		},
		removeModal:function(){
			this.getModalView().hide();
		},
		show:function(){
			ass.UICompoent.Panel.prototype.show.call(this);
			this.appendModal();
			this.setlocation();
		},
		hide:function(){
			ass.UICompoent.Panel.prototype.hide.call(this);
			this.removeModal();
		}
	},ass.UICompoent.Panel);

	module.exports = ass.UICompoent.Window;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.View = __webpack_require__(8);

	ass.protoUI({
		name:'Modal',
		$init:function(config){
			this.$initAction(config);
			this.setting.title = (config.title)?config.title : "";
			this.setting.tpl = this.createTpl();
		},
		createModalTpl:function(p){
			var id = (p.id)?p.id:"";
			var compClsName = (p.compClsName)?p.compClsName:"";
			var headTpl = (p.headTpl)?p.headTpl:"";
			var bodyTpl = (p.bodyTpl)?p.bodyTpl:"";
			var footerTpl = (p.footTpl)?p.footerTpl:"";
			var tpl = "<div class=' modal fade in "+compClsName+"' role='dialog' id='"+ id+"'>";
			tpl += " <div class='modal-dialog'>";
			if(headTpl || bodyTpl || footerTpl)
			{
				tpl += " <div class='modal-content'>";
				tpl += headTpl+bodyTpl+footerTpl;
				tpl += "</div>";
			}
			tpl += "</div>";
			tpl += "</div>";
			return tpl;
		},
		createTpl:function(_tpl){
			var headTpl = (!this.setting.headHidden)?this.createHeadTpl():"";
			var bodyTpl = this.createBodyTpl(_tpl);
			var footerTpl = (!this.setting.footerHidden)?this.createFooterTpl():"";	
			var compClsName = this.getUICss();
			var id = this.setting.id;
			var tpl = this.createModalTpl({compClsName:compClsName,id:id,headTpl:headTpl,bodyTpl:bodyTpl,footerTpl:footerTpl});
			return tpl;
		},
		createHeadTpl:function(){
			var tpl = "<div class='modal-header'>";
			tpl += "<h4 class='modal-title'>"+this.getTitle()+"</h4>";
			tpl += "</div>";
			return tpl;
		},
		setTitle:function(title){
			this.setting.title = (title)?title:"";
		},
		getTitle:function(){
			return this.setting.title;
		},
		createBodyTpl:function(_tpl){
			var tpl = "<div class='modal-body'>";
			tpl +=(_tpl)?_tpl:"";
			tpl += "</div>";
			return tpl;
		},
		createFooterTpl:function(){
			var tpl = "<div class='modal-footer'>";
			tpl += "</div>";
			return tpl;
		},
		createModalBackDropTpl:function(){
			return "<div class='modal-backdrop fade in'></div>";
		}
	},ass.UICompoent.View);

	module.exports = ass.UICompoent.Modal;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.BaseView = __webpack_require__(7);
	ass.UICompoent.Panel = __webpack_require__(13);

	ass.protoUI({
		name:'TabItem',
		$init:function(config){
			ass.UICompoent.BaseView.prototype.$init.call(this,config);
			this.setting.text = config.text;
			this.setting.loader = (config.loader)?config.loader:false;
			this.setting.tpl =  this.createTpl();
			this.setting.handler = config.handler;
		},
		createItemTpl:function(){
			var tpl = "<li class='"+this.getUICss()+"'  id='"+this.setting.id+"'>";
			tpl += "<a class='"+this.getCursorCls()+"'><span class='ass-view-TabItem-text'>"+this.setting.text+"</span></a>";
			tpl += "</li>";
			return tpl;
		},
		createTpl:function(){
			return this.createItemTpl();
		},
		bindEventHandler:function(config){
			var viewObj = this.getViewObj();
			if(viewObj){
				var $node = $("a",viewObj);
				var type = config.type;
				var handler = config.handler;
				ass.$event($node,type,handler);
			}
		},
		doOnClickAction:function(){
			var viewObj = this.getViewObj();
			if(viewObj){
				$("a",viewObj).trigger("click");
			}
		},
		setBodyRender:function(isBodyRender){
			this.setting.isBodyRender = isBodyRender;
		},
		isBodyRender:function(){
			return (this.setting.isBodyRender)?this.setting.isBodyRender:false;
		},
		isLoader:function(){
			return (this.setting.loader)?this.setting.loader:false;
		},
		appendSpinner:function(){
			var viewObj = this.getViewObj();
			var tabItemTextObj = $('.ass-view-TabItem-text',viewObj);
			var config = {
				width:2,
				lines:5,
				length:4,
				radius:3,
				className:'ass-view-spinner',
				speed:2.2,
				top:0,
				left:0
			}
			var loaderObj = null;
			viewObj.append("<div class='ass-view-loader'>&nbsp;</div>");
			loaderObj = this.getLoader();
			loaderObj.insertBefore(tabItemTextObj);
			this.setting.spinner = new Spinner(config).spin(loaderObj.get(0));
		},
		cancelSpinner:function(){
			var loaderObj = this.getLoader();
			loaderObj.remove();
		},
		getLoader:function(){
			var viewObj = this.getViewObj();
			this.setting.loaderObj =  $('.ass-view-loader',viewObj);
			return this.setting.loaderObj;
		},
		renderAfter:function(){
			ass.UICompoent.BaseView.prototype.renderAfter.call(this);
			(this.setting.handler)?this.bindEventHandler({type:'click',handler:this.setting.handler}):false;
		}
	},ass.UICompoent.BaseView);

	ass.protoUI({
		name:'TabPanel',
		tags:{TabBody:'TabBody'},
		$init:function(config){
			ass.UICompoent.Panel.prototype.$init.call(this,config);
			this.setting.items = config.items;
			this.setting.oItems = this.createItemObjs();
			this.setting.isAutoActived = (config.isAutoActived)?config.isAutoActived:false;
			this.setting.activedIndex = (config.activedIndex)?config.activedIndex:0;
			this.setting.layoutTpl = this.parseItems();
			this.setting.tpl = this.createTpl();
		},
		isAutoActived:function(){
			return  this.setting.isAutoActived;
		},
		createItemObjs:function(){
			var itemObjs = [];
			if(this.setting.items){
				var items = this.setting.items;
				for(var i=0; i<items.length; i++){
					var item = items[i];
					var oItem = null;
					var itemTpl = null;
					var tabId =item.id = (item.id)?item.id:ass.uid();
					var handler = item.handler;
					item.handler = (function(_tabId,_this,_item,_handler){
						return function(){
							var oTabItem = _this.getTabItemById(_tabId);
							var isBodyRender = oTabItem.isBodyRender();
							_this.showTab(_tabId);
							if(!isBodyRender){
								var layoutTpl = oTabItem.getlayoutTpl();
								var tabBodyContainerObj = _this.getTabBodyContainerObj(_tabId);
								$("*",tabBodyContainerObj).remove();
								tabBodyContainerObj.append(layoutTpl);
								oTabItem.setBodyRender(true);
								(_handler)?_handler(oTabItem):false;
							}
						}
					})(tabId,this,item,handler);				
					oItem = ass.UIFactory.createInstance("TabItem",item);
					itemObjs.push(oItem);
				}
			}
			return itemObjs;
		},
		parseItems:function(){
			var tpl = null;
			if(this.setting.oItems){
				var oItems = this.setting.oItems;
				var tabBodyTpl = "";
				tpl = "<ul class='nav nav-tabs'>";
				for(var i=0; i<oItems.length; i++){
					var oItem = oItems[i];
					var tabId = oItem.getID();
					itemTpl = oItem.getTpl();
					tpl += itemTpl;
					tabBodyTpl += this.createTabBody(null,tabId);
				}
				tpl += "</ul>";
				tpl += tabBodyTpl;
			}
			tpl = (tpl)?tpl:"";
			return tpl;
		},
		showTabBody:function(tabId){
			$("#"+tabId+"_"+this.tags.TabBody).show();
		},
		showTab:function(tabId){
			var oTabItem = null;
			this.hideAllTabs();
			this.addActiveTabCls(tabId);
			this.setActivedTabId(tabId);
			this.showTabBody(tabId);
			oTabItem = this.getTabItemById(tabId);
			if(oTabItem){
				var index = this.getTabItemIndex(oTabItem);
				var isBodyRender = oTabItem.isBodyRender();
				var isLoader = oTabItem.isLoader();
				if(!isBodyRender && isLoader){
					oTabItem.appendSpinner();
				}
				this.setActivedIndex(index);
				ass.$Async({
					fn:(function(_oTabItem){
							return function(){
								var isLoader = _oTabItem.isLoader(); 
								(isLoader)?_oTabItem.cancelSpinner():false;
							}
						})(oTabItem)
					}
				);
			}
		},
		addActiveTabCls:function(tabId){
			$("#"+tabId).addClass("active");
		},
		removeActiveTabCls:function(tabId){
			$("#"+tabId).removeClass("active");
		},
		hideTab:function(tabId){
			$("#"+tabId+"_"+this.tags.TabBody).hide();
			this.removeActiveTabCls(tabId);
		},
		hideAllTabs:function(){
			for(var i=0; i<this.setting.oItems.length; i++){
				var oItem = this.setting.oItems[i];
				var tabId = oItem.getID();
				oItem.cancelSpinner();
				this.hideTab(tabId);
			}
		},
		createTabBody:function(_tpl,_id){
			var cls = ass.UICompoent.StyleCss.getClassPrefix()+"-"+this.tags.TabBody;
			var tabBodyObjId = this.getTabBodyObjId(_id);
			var tpl = "<div  class='"+cls+"'  id='"+tabBodyObjId+"'>";
			tpl += this.createContainerTpl((_tpl)?_tpl:"");
			tpl += "</div>";
			return tpl;
		},
		getTabBodyObjId:function(tabId){
			return tabId+"_"+this.tags.TabBody;
		},
		getTabBodyObj:function(tabId){
			return $("#"+this.getTabBodyObjId(tabId));
		},
		getTabBodyContainerObj:function(tabId){
			var tabBodyObj = this.getTabBodyObj(tabId);
			return $("#"+this.getTabBodyObjId(tabId)+" > .container-fluid");
		},
		bindTabItemEventHandler:function(){
			if(this.setting.oItems){
				for(var i=0; i<this.setting.oItems.length; i++){
					var oItem = this.setting.oItems[i];
					oItem.renderAfter();
				}
			}
		},
		getTabItemById:function(tabId){
			var oItem = null;
			var oItems = this.setting.oItems;
			for(var i=0; i<oItems.length; i++){
				var _oItem = oItems[i];
				var id = _oItem.getID();
				if(id===tabId){
					oItem = _oItem;
					break;
				}
			}
			return oItem;
		},
		getTabItemIndex:function(oItem){
			var index = 0;
			var oItems = this.setting.oItems;
			for(var i=0; i<oItems.length; i++){
				var _oItem = oItems[i];
				var id = _oItem.getID();
				if(id===oItem.getID()){
					index = i;
					break;
				}
			}
			return index;
		},
		getTabItem:function(index){
			var oTabItem = null;
			var oItems = this.setting.oItems;
			oTabItem = (oItems.length>0)?oItems[index]:null;
			return oTabItem;
		},
		showActiviedTab:function(){
			var oTabItem = this.getTabItem(this.setting.activedIndex);
			if(oTabItem){
				var tabId = oTabItem.getID();
				this.showTab(tabId);
				oTabItem.doOnClickAction();
			}
		},
		setActivedIndex:function(index){
			this.setting.activedIndex = index;
		},
		getActivedIndex:function(){
			return this.setting.activedIndex;
		},
		setActivedTabId:function(activedTabId){
			this.setting.activedTabId = activedTabId;
		},
		getActivedTabId:function(){
			return this.setting.activedTabId;
		},
		getCurrentActivedTab:function(){
			var index = this.getActivedIndex();
			var oItem = this.getTabItem(index);
			return oItem;
		},
		isTabActived:function(tabId){
			var isActived = false; 
			var currActviedTab = this.getTabItemById(tabId);
			isActived = currActviedTab.getViewObj().hasClass('active');
			return isActived;
		},
		showAutoActivedTab:function(){
			if(this.isAutoActived()){
				this.showActiviedTab();
			}
		},
		getAllTabItem:function(){
			return this.setting.oItems;
		},
		setScrollBodyObjs:function(){
			if(this.setting.scrollBodyObjs){
				var scrollBodyObjs = this.setting.scrollBodyObjs;
				for(var i=0; i<scrollBodyObjs.length; i++){
					var scrollBodyObj = scrollBodyObjs[i];
					scrollBodyObjs[i] = this.getTabBodyObj(scrollBodyObj);
				}
			}
		},
		renderAfter:function(){
			var scrollBodyObjs = null;
			ass.UICompoent.Panel.prototype.renderAfter.call(this);
			this.bindTabItemEventHandler();
			this.showAutoActivedTab();
			this.addScrollToEndEventHandler();
		}
	},ass.UICompoent.Panel);

	module.exports = ass.UICompoent.TabPanel;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.Panel = __webpack_require__(13);

	ass.protoUI({
		name:'TimelineItem',
		$init:function(config){
			ass.UICompoent.Panel.prototype.$init.call(this,config);
			this.setting.label = config.label;
			this.setting.head = config.head;
			this.setting.icon = config.icon;
			this.setting.iconCls = (config.iconCls)?config.iconCls:"";
			this.setting.grouplabel = (config.grouplabel)?config.grouplabel:false;
			this.setting.body = (config.body)?config.body:"";
			this.setting.tpl = this.createTpl();
		},
		createTpl:function(){
			var grouplabel = (this.setting.grouplabel)?"timeline-group-label":"";
			var cls = this.getUICss()+" "+grouplabel;
			var tpl = "<li class='timeline-inverted "+cls+" '  id='"+this.setting.id+"'>";
			tpl += (this.setting.label)?this.createlabelTpl():"";
			tpl += "<div class='timeline-badge    "+this.setting.iconCls+"'>";
			tpl += (this.setting.icon)?this.setting.icon:"";
			tpl += "</div>";
			tpl += "<div class='timeline-panel'>";
			tpl += (this.setting.head)?this.createHeadTpl():"";
			tpl += this.createBodyTpl();
			tpl += "</div>";
			tpl += "</li>";
			return tpl;
		},
		createlabelTpl:function(){
			return "<div class='timeline-label'>"+this.setting.label+"</div>";
		},
		createHeadTpl:function(){
			return "<div class='timeline-heading'>"+this.setting.head+"</div>";
		},
		createBodyTpl:function(){
			return "<div class='timeline-body'>"+this.setting.body+"</div>";
		}
	},ass.UICompoent.Panel);

	ass.protoUI({
		name:"Timeline",
		$init:function(config){
			ass.UICompoent.Panel.prototype.$init.call(this,config);
			this.setting.footer = config.footer;
			this.setting.isPage = (config.isPage)?config.isPage:false;
			this.setting.oPage = this.createPageInstance({pageConfig:config.pageConfig});
			this.setting.items = (config.items)?config.items:[];
			this.setting.tpl = this.createTpl();
		},
		createTitle:function(){
			var tpl = null;
			if(this.setting.title){
				tpl = "<div class='page-header'>";
				tpl += " <h1 >"+this.setting.title+"</h1>";
				tpl += "</div>";
			}
			tpl = (tpl)?tpl:"";
			return tpl;
		},
		createPageInstance:function(config){
			var oPage = null;
			this.setting.pageConfig = this.initPageConfig(config);
			if(this.setting.pageConfig){
				oPage = ass.UIFactory.createInstance('Page',this.setting.pageConfig);
			}
			return oPage;
		},
		createFooter:function(){
			var tpl = null;
			var footer = this.setting.footer;
			if(footer){
				tpl = "<div class='ass-view-Timeline-page-footer'>";
				tpl += " <h5>"+footer+"</h5>";
				tpl += "</div>";
			}
			tpl = (tpl)?tpl:"";
			return tpl;
		},
		createTpl:function(){
			var  tpl = this.createTitle();
			tpl += this.parseItems();
			tpl += this.createFooter();
			tpl  = "<div class='"+ass.UICompoent.StyleCss.getView()+"' id='"+this.setting.id+"'>"+this.createContainerTpl(tpl)+"</div>";
			return tpl;
		},
		getTimelinelistObjId:function(){
			if(!this.setting.timelinelistObjId){
				this.setting.timelinelistObjId = ass.uid()+"_timelinelist";
			}
			return this.setting.timelinelistObjId;
		},
		getTimelinelistObj:function(){
			this.setting.timelinelistObj = $("#"+this.getTimelinelistObjId());
			return this.setting.timelinelistObj;
		},
		getGroupCollect:function(items){
			var collect = {};
			var gIndexs = [];
			
			$.each(items,(function(_this,gIndexs,_collect){
				return function(index,item){
					var grouplabel = item.grouplabel;
					var label = item.label;
					if(grouplabel){
						(!_collect[index])?(_collect[index]={grouplabel:label,items:[]}):false;
						gIndexs.push(index);
					}
				}
			})(this,gIndexs,collect));
			
			for(var i=0; i<gIndexs.length; i++){
				var gIndex = gIndexs[i];
				var nextGIndex = gIndexs[i+1];
				var start = gIndex+1;
				var end = ( i+1 != gIndexs.length )?nextGIndex:items.length;
				for(var j=start; j<end; j++){
					var item = items[j];
					collect[gIndex].items.push(item);
				}
			}
			
			return collect;
		},		
		appendItems:function(targetItems,sourceItems,isAppend){
			var _targetItems = null;
			if(isAppend && targetItems.length>0)
			{
				var items = [];
				var targetCollect = this.getGroupCollect(targetItems);
				var sourceCollect = this.getGroupCollect(sourceItems);
			
				for(var tKey in targetCollect){
					var _items = [];
					var item = {};
					var tCollect = targetCollect[tKey];
					var tGrouplabel = tCollect.grouplabel;
					item.label = tGrouplabel;
					item.grouplabel = true;
					_items.push(item);
					for(var sKey in sourceCollect){
						var sCollect =sourceCollect[sKey]; 
						var sGrouplabel = sCollect.grouplabel;
						if(tGrouplabel == sGrouplabel)
						{
							tCollect.items = tCollect.items.concat(sCollect.items);
							_items = _items.concat(tCollect.items);
						}
					}
					items = items.concat(_items);
				}
				_targetItems=  items;
			}
			else
			{
				_targetItems = sourceItems;
			}
			return _targetItems;
		},
		setItems:function(p){
			var items = p.items;
			var isAppend = (p.isAppend)?p.isAppend:false;
			if(items){
				var targetItems = this.setting.items;
				var sourceItems = items;
				this.setting.items = this.appendItems(targetItems,sourceItems,isAppend);
			}
		},
		removeTimelinelistObj:function(){
			this.getTimelinelistObj().remove();
		},
		load:function(){
			this.refresh();
		},
		refresh:function(){
			var listTpl = this.parseItems();
			this.removeTimelinelistObj();
			this.getContainerObj().append(listTpl);
		},
		parseItems:function(){
			var tpl = null;
			var cls = this.getUICss();
			if(this.setting.items  && this.setting.items.length > 0){
				tpl = "<ul class='timeline "+cls+"'  id='"+this.getTimelinelistObjId()+"'>";
				for(var i=0; i<this.setting.items.length; i++){
					var item = this.setting.items[i];
					var oItem = ass.UIFactory.createInstance("TimelineItem",item);
					tpl += oItem.createTpl();
				}
				tpl += "</ul>";
			}
			tpl = (tpl)?tpl:"";
			return tpl;
		},
		removeAllItems:function(){
			this.setting.items = [];
			this.refresh();
		}
	},ass.UICompoent.Panel);

	module.exports = ass.UICompoent.Timeline;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);

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


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	$TWaver = __webpack_require__(21);

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


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.Input = __webpack_require__(24);
	ass.UICompoent.Hidden = __webpack_require__(25);

	ass.protoUI({
		name:"Text",
		$init:function(config){
			ass.UICompoent.Input.prototype.$init.call(this,config);
		},
		createInputTpl:function(){
			var inputTpl = ass.UICompoent.Input.prototype.createInputTpl.call(this);
			var hiddenTpl = this.createHiddenTpl();
			var tpl = inputTpl+hiddenTpl;
			return tpl;
		},
		createHiddenTpl:function(){
			var tpl = null;
			if(this.setting.hidden){
				this.setting.hidden = ass.UIFactory.createInstance("Hidden",this.setting.hidden);
				tpl = this.setting.hidden.getTpl();
			}
			tpl = (tpl)?tpl:"";
			return tpl;
		},
		getHiddenObj:function(){
			var hiddenObj = null;
			this.setting.hidden.setViewObj();
			hiddenObj = this.setting.hidden.getViewObj();
			return hiddenObj;
		},
		renderAfter:function(){
			ass.UICompoent.Input.prototype.renderAfter.call(this);
			(this.setting.hidden)?this.setting.hidden.setViewObj():false;
		}
	},ass.UICompoent.Input);

	module.exports = ass.UICompoent.Text;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.BaseView = __webpack_require__(7);

	ass.protoUI({
		name:"Input",
		$init:function(config){
			ass.UICompoent.BaseView.prototype.$init.call(this,config);
			this.setting.value = (config.value)?config.value:"";
			this.setting.placeholder = (config.placeholder)?config.placeholder:"";
			this.setting.labelWidth = config.labelWidth;
			this.setting.labelAlign = (config.labelAlign)?config.labelAlign:"center";
			this.setting.addOnTpl = config.addOnTpl;
			this.setting.width = config.width;
			this.setting.label = (config.label)?config.label:"label";
			this.setting.inputTpl = config.inputTpl;
			this.setting.tpl = this.createTpl();
		},
		getlabel:function(){
			var label = null;
			var viewObj = this.getViewObj();
			if(viewObj)
			{
				label = $(".ass-view-input-group-label",viewObj);
			}
			return label;
		},
		createAddOnTpl:function(cls,style,addOnTpl){
			var _cls = (cls)?cls:"";
			var _style = (style)?"style='"+style+"'":"";
			var _addOnTpl = (addOnTpl)?addOnTpl:"";
			var tpl = "<span class='input-group-addon  "+_cls+"'  "+_style+">"+_addOnTpl+"</span>";
			return tpl;
		},
		createlabelTpl:function(){
			var width = (this.setting.labelWidth)?("width:"+this.setting.labelWidth+"px;"):"";
			var textAlign = "text-align:"+this.setting.labelAlign+";";
			var style =width+textAlign;
			return this.createAddOnTpl("ass-view-input-group-label",style,this.setting.label);
		},
		getUICss:function(){
			return "ass-view-input-group"+" "+ass.UICompoent.BaseView.prototype.getUICss.call(this);
		},
		createInputGroupTpl:function(_tpl){
			return "<div class='input-group  "+this.getUICss()+"'   id='"+this.setting.id+"'  "+this.createStyleDefine()+">"+_tpl+"</div>";
		},
		getInputId:function(){
			if(!this.setting.inputId){
				this.setting.inputId = ass.uid()+"_"+this.getInputType();
			}
			return this.setting.inputId;
		},
		getInputObj:function(){
			if(!this.setting.inputObj){
				this.setting.inputObj = $("#"+this.getInputId());
			}
			return this.setting.inputObj;
		},
		createInputTpl:function(){
			var tpl = "<input type='"+this.getInputType()+"'  placeholder='"+this.setting.placeholder+"'   class='form-control ass-view-form-control ass-view-input'  id='"+this.getInputId()+"'>";
			tpl = (this.setting.inputTpl)?this.setting.inputTpl:tpl;
			return tpl;
		},
		createTpl:function(){
			var addOnTpl = null;
			if(this.setting.addOnTpl) {
				var cls = (this.setting.addOnTpl.cls)?this.setting.addOnTpl.cls:"";
				var style =  (this.setting.addOnTpl.style)?this.setting.addOnTpl.style:"";
				var addOnTpl =  (this.setting.addOnTpl.tpl)?this.setting.addOnTpl.tpl:"";
				addOnTpl = this.createAddOnTpl(cls,style,addOnTpl);
			}
			addOnTpl = (addOnTpl)?addOnTpl:'';
			return this.createInputGroupTpl(this.createlabelTpl() +this.createInputTpl()+addOnTpl);
		},
		getInputGroupButtonId:function(){
			if(!this.setting.inputGroupButtonId){
				this.setting.inputGroupButtonId = ass.uid()+"_input-group-button";
			}
			return this.setting.inputGroupButtonId;
		},
		getInputGroupButtonObj:function(){
			return $("#"+this.setting.inputGroupButtonId);
		},
		createInputGroupButtonTpl:function(tpl){
			return "<div class='input-group-btn' id='"+this.getInputGroupButtonId()+"'>"+tpl+"</div>";
		},
		getInputType:function(){
			return this.name.toLowerCase();
		},
		setValue:function(value){
			var inputObj = this.getInputObj();
			if(inputObj){
				this.setting.value = value;
				inputObj.val(this.setting.value);
			}
		},
		getValue:function(){
			return this.setting.value;
		},
		addKeyBoardEventHandler:function(){
			var keyEvents = ["keydown","keyup","keypress"];
			if(this.setting.listener.keyboard){
				var eventHandler = this.getEventHandler();
				var keyboard = this.setting.listener.keyboard;
				for(var key in keyboard){
					var inputObj = this.getInputObj();
					var handler = keyboard[key];
					if($.inArray(key, keyEvents)>-1){
						eventHandler.pushSrcObj({
							target:inputObj,
							type:key,
							handler:(function(_handler,_this){
								return function(event){
									_handler(event,_this);
								}
							})(handler,this)
						});
					}
				}
				eventHandler.bind();
			}
		},
		setFoucs:function(foucs){
			this.setting.foucs = foucs;
			if(this.setting.foucs){
				var inputHtmlObj = this.getInputObj()[0];
				if(inputHtmlObj){
					inputHtmlObj.focus();
				}
			}
		},
		renderAfter:function(){
			ass.UICompoent.BaseView.prototype.renderAfter.call(this);
			this.addKeyBoardEventHandler();
		},
	},ass.UICompoent.BaseView);

	module.exports = ass.UICompoent.Input;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.Input = __webpack_require__(24);

	ass.protoUI({
		name:"Hidden",
		$init:function(config){
			ass.UICompoent.Input.prototype.$init.call(this,config);
		},
		createInputTpl:function(){
			return "<input type='"+this.getInputType()+"'  class='"+this.getUICss()+"' id='"+this.setting.id+"'>";
		},
		createTpl:function(){
			return this.createInputTpl();
		}
	},ass.UICompoent.Input);

	module.exports = ass.UICompoent.Hidden;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.BaseView = __webpack_require__(7);
	ass.UICompoent.Text = __webpack_require__(23);

	ass.protoUI({
		name:'DropdownMenu',
		$init:function(config){
			ass.UICompoent.BaseView.prototype.$init.call(this,config);
			this.setting.options = (config.options)?config.options:[];
			this.setting.emptyOption = (config.emptyOption)?config.emptyOption:{text:"当前暂无可选值"};
			this.setting.tpl = this.createTpl();	
		},
		setOptions:function(options){
			this.setting.emptyOption = {text:"<span class='disabled'>"+this.setting.emptyOption.text+"</span>"}
			this.setting.options = (options.length==0)?[this.setting.emptyOption]:options;
		},
		parseOptions:function(){
			var tpl = null;
			if(this.setting.options){
				tpl = "<ul class='dropdown-menu dropdown-menu-right "+this.getUICss()+"'  id='"+this.setting.id+"'>";
				for(var i=0; i<this.setting.options.length; i++){
					var option = this.setting.options[i];
					var text = option.text;
					var value = (option.value)?"value='"+option.value+"'":"";
					tpl += "<li class='"+this.getItemCls()+"'  "+value+"><a>"+text+"</a></li>";
				}
				tpl += "</ul>";
			}
			tpl = (tpl)?tpl:"";
			return tpl;
		},
		getItemCls:function(){
			return this.setting.className+"-item";
		},
		createTpl:function(){
			return this.parseOptions();
		},
		parseOptionsToObj:function(){
			var optionObjArr = [];
			if(this.setting.options){
				var itemCls = this.getItemCls();
				var viewObj = this.getViewObj();
				var optionObjs = $("."+itemCls,viewObj);
				var options = this.setting.options;
				for(var i=0; i<options.length; i++){
					var optionObj = optionObjs.eq(i);
					var option = options[i];
					optionObjArr.push({srcObj:optionObj,config:option});
				}
			}
			this.setting.optionObjArr = optionObjArr;
		},
		addOptionsEventHandler:function(){
			if(this.setting.optionObjArr){
				var optionObjArr = this.setting.optionObjArr;
				var eventHandler = this.getEventHandler();
				var srcObjs = [];
				for(var i=0; i<optionObjArr.length; i++){
					var option = optionObjArr[i];
					var config = option.config;
					var srcObj = {};
					srcObj.target = option.srcObj;
					srcObj.type = "click";
					srcObj.handler = (config.handler)?config.handler:function(){};
					srcObjs.push(srcObj);
				}
				eventHandler.pushSrcObj(srcObjs);
				eventHandler.bind();
			}
		},
		renderAfter:function(){
			ass.UICompoent.BaseView.prototype.renderAfter.call(this);
			this.parseOptionsToObj();
			this.addOptionsEventHandler();
		}
	},ass.UICompoent.BaseView);

	ass.protoUI({
		name:'Combo',
		$init:function(config){
			ass.UICompoent.Text.prototype.$init.call(this,config);
			this.setting.hidden = (config.hidden)?config.hidden:this.createHiddenConfig();
			this.setting.search = (config.search)?config.search:false;
			this.setting.hiddenInputGroupButton = (config.hiddenInputGroupButton)?config.hiddenInputGroupButton:false;
			config.dropDownMenu = (this.setting.search)?"DropdownMenu":config.dropDownMenu;
			this.setting.options = this.initOptions((config.options)?config.options:[]);
			config.dropDownMenu = (this.setting.search)?'ListPanel':'DropdownMenu';
			this.setDropDownMenuType((config.dropDownMenu)?config.dropDownMenu:"DropdownMenu");
			this.createDropDownMenu(config);
			this.setting.tpl = this.createTpl();
		},
		createHiddenConfig:function(){
			var config = {};
			config.id = this.getID()+"_hidden";
			return config;
		},
		isSearch:function(){
			return this.setting.search;
		},
		isHideInputGroupButton:function(){
			return this.setting.hiddenInputGroupButton;
		},
		getEmptyOption:function(text){
			return {text:"<span class='disabled'>"+text+"</span>"};
		},
		initOptions:function(options){
			for(var i=0; i<options.length; i++){
				var option = options[i];
				var fn = (option.handler)?option.handler:function(){};
				option.checked = false;
				if(!option.search){
					option.search = option.text;
				}
				option.handler = (function(_this,_option,_fn){
					return function(){
						_this.setValue(_option.value);
						_this.getDropdownMenu().toggle();
						_fn();
						_this.setFoucs(true);
					}
				})(this,option,fn)
			}
			return options;
		},
		getDropdownMenu:function(){
			return this.setting.dropdownMenu;
		},
		setDropDownMenuType:function(type){
			this.setting.dropDownMenuType = type;
		},
		getDropDownMenuType:function(){
			return this.setting.dropDownMenuType;
		},
		createDropDownMenu:function(config){
			var dropDownMenuType = this.getDropDownMenuType();		
			var oDropDownMenu = ass.UIFactory.createInstance("DropdownMenu",{emptyOption:this.setting.emptyOption});
			switch(dropDownMenuType){
				case 'DropdownMenu':
					this.setting.emptyOption = config.emptyOption;
					this.setting.dropdownMenu = oDropDownMenu;
					this.setting.dropdownMenu.setOptions(this.setting.options);
				break;
				case 'ListPanel':
					this.setting.dropdownMenu = ass.UIFactory.createInstance("ListPanel",{
						items:this.setting.options,
						isPage:true,
						styleCss:'dropdown-menu dropdown-menu-right '+oDropDownMenu.getUICss(),
						pageConfig:{
							pageSize:5
						}
					});
				break;
			}
			return this.setting.dropdownMenu;
		},
		setDropdownMenuObj:function(){
			var dropdownMenu = this.getDropdownMenu();
			if(!this.setting.dropdownMenuObj && dropdownMenu){
				this.setting.dropdownMenuObj = $("#"+dropdownMenu.getID());
				dropdownMenu.setViewObj(this.setting.dropdownMenuObj);
			}
		},
		getDropdownMenuObj:function(){
			this.setting.dropdownMenuObj = $("#"+this.getDropdownMenu().getID());
			return this.setting.dropdownMenuObj; 
		},
		getDropDownMenuContentId:function(){
			if(!this.setting.dropDownMenuContentId){
				this.setting.dropDownMenuContentId = ass.uid() +"_dropDownMenu_content";
			}
			return this.setting.dropDownMenuContentId;
		},
		getDropDownMenuContentObj:function(){
			this.setting.dropDownMenuContentObj = $("#"+this.getDropDownMenuContentId());
			return this.setting.dropDownMenuContentObj;
		},
		parseOptions:function(){
			var tpl = null;
			var dropdownMenu = this.getDropdownMenu();
			var dropDownMenuContentId = this.getDropDownMenuContentId();
			if(dropdownMenu){
				tpl =dropdownMenu.createTpl();
			}
			tpl = "<div class='ass-view-Combo-dropDownMenu-content'  id='"+dropDownMenuContentId+"'>"+((tpl)?tpl:"")+"</div>";
			return tpl;
		},
		getCaretButtonId:function(){
			if(!this.setting.caretButtonId){
				this.setting.caretButtonId = ass.uid()+"_caret";
			}
			return this.setting.caretButtonId;
		},
		getCaretButtonObj:function(){
			var caretButtonId = this.getCaretButtonId();
			this.setting.caretButtonObj = $("#"+caretButtonId);
			return this.setting.caretButtonObj;
		},
		hideCareButton:function(){
			this.getCaretButtonObj().hide();
		},
		createInputGroupButtonTpl:function(){
			var tpl = "<div class='ass-view-caret' id='"+this.getCaretButtonId()+"'>";
			tpl += "<span class='caret'></span>";
			tpl += "</div>";
			return ass.UICompoent.Text.prototype.createInputGroupButtonTpl.call(this,tpl);
		},
		getInputGroupBtnWidthStyle:function(){
			var style = null;
			if(this.setting.width){
				var w = this.setting.width - ((this.setting.labelWidth)?this.setting.labelWidth:0);
				style = "style='width:"+w+"px'";
			}
			return (style)?style:"";		
		},
		createTpl:function(){
			var tpl = this.createlabelTpl();
			tpl += "<div class='input-group'  "+this.getInputGroupBtnWidthStyle()+">";
			tpl += this.createInputTpl();
			tpl += this.createInputGroupButtonTpl();
			tpl += this.parseOptions();
			tpl += "</div>";
			tpl =  this.createInputGroupTpl(tpl);
			return tpl;
		},
		setValue:function(value){  
			var opts = this.findOpts({key:'value',value:value});
			if(opts.length==1 && opts[0].value.length>0){
				var opt = opts[0];
				var inputObj = this.getInputObj();
				var hiddenObj = this.getHiddenObj();
				var text = opt.text;
				opt.checked = true;
				this.setting.value = opt.value;
				inputObj.val(text);
				hiddenObj.val(this.getValue());
			}
		},
		getCheckedOpt:function(){
			var opt = null;
			if(this.setting.options){
				var options = this.setting.options;
				for(var i=0; i<options.length; i++){
					var option = options[i];
					if(option.checked)
					{
						opt = option;
						break;
					}
				}
			}
			return opt;
		},
		getText:function(){
			var text = null;
			var inputObj = this.getInputObj();
			text = inputObj.val();
			text = (text)?text:"";
			return text;
		},
		addSearchHandler:function(eventHandler){
			if(this.isSearch()){
				eventHandler.pushSrcObj({
					target:this.getInputObj(),
					type:'keyup',
					handler:(function(_this){
						return function(){
							var text = _this.getText();
							var opts = _this.findOpts({key:'text',value:text,action:"fuzzy"});
							var dropDownMenuType = _this.getDropDownMenuType();
							var dropDownMenu = _this.getDropdownMenu();
							var tpl = "";
							if(opts.length>0){
								switch(dropDownMenuType){
									case 'ListPanel':
										var pageConfig = {dataCount:opts.length,pageSize:5};
										dropDownMenu.setItems(opts);
										dropDownMenu.getPage().reset(pageConfig);
										dropDownMenu.refresh();
									break;
								}
							}
							dropDownMenu.show();
						}
					})(this)
				});
			}
		},
		addViewOutClickEventHandler:function(eventHandler){
			eventHandler.pushSrcObj({
				target:$(document),
				type:'click',
				handler:(function(_this){
					return function(event){
						var inpuType = $(event.target).attr('type')
						if(!inpuType || inpuType.toUpperCase()!='COMBO'){
							_this.getDropdownMenu().hide();
						}
					}
				})(this)
			});
		},
		addViewObjEventHandler:function(){
			var eventHandler = this.getEventHandler();
			eventHandler.pushSrcObj({
				target:this.getInputObj(),
				type:'click',
				handler:(function(_this){
					return function(){
						_this.getDropdownMenu().toggle();
					}
				})(this)
			});
			this.addSearchHandler(eventHandler);
			this.addViewOutClickEventHandler(eventHandler);
			eventHandler.stopPropagation(this.getDropDownMenuContentObj(),'click');
			eventHandler.bind();
		},
		//支持模糊（fuzzy）查找与精确（exact ）查找
		findOpts:function(p){
			var opts = [];
			var key = (p.key)?p.key:"value";
			var value = (p.value)?p.value:"";
			var action = (p.action)?p.action:'exact';
			var options = this.setting.options;
			for(var i=0; i<options.length; i++){
				var option = options[i];
				var val = option[key];
				switch(action){
					case 'exact':
						if(val === value){
							opts.push(option);
						}
					break;
					case 'fuzzy':
						if(val.indexOf(value)!=-1){
							opts.push(option);
						}
					break;
				}
			}
			if(opts.length == 0){
				var emptyOption = this.getEmptyOption('当前暂无匹配结果');
				opts.push(emptyOption);
			}
			return opts;
		},
		renderAfter:function(){
			ass.UICompoent.Text.prototype.renderAfter.call(this);
			this.setDropdownMenuObj();
			this.getDropdownMenu().renderAfter();
			this.addViewObjEventHandler();
			if(this.isHideInputGroupButton()){
				this.hideCareButton();
			}
		}
	},ass.UICompoent.Text);

	module.exports = ass.UICompoent.Combo;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.View = __webpack_require__(23);

	ass.protoUI({
		name:'Checkbox',
		$init:function(config){
			ass.UICompoent.Text.prototype.$init.call(this,config);
			this.setting.options = (config.options)?config.options:[];
			this.setting.tpl = this.createTpl();
		},
		parseOptions:function(){
			var tpl = null;
			if(this.setting.options){
				var tpl = "";
				for(var i=0; i<this.setting.options.length; i++){
					var option = this.setting.options[i];
					var text = option.text;
					var value = option.value;
					tpl += this.createOptionTpl(text,value);
				}
			}
			tpl = (tpl)?tpl:"";
			return tpl;
		},
		createOptionTpl:function(text,value){
			var tpl = "<label class='checkbox-inline'>";
			tpl += "<input type='"+this.getInputType()+"'  value='"+value+"'>"+text;
			tpl += "</label>";
			return tpl;
		},
		createInputTpl:function(){
			return "<div class='input-group-checkbox'>"+this.parseOptions()+"</div>";
		},
		createTpl:function(){
			var tpl = this.createlabelTpl()+this.createInputTpl();
			tpl = this.createInputGroupTpl(tpl);
			return tpl;
		}
	},ass.UICompoent.Text);

	module.exports = ass.UICompoent.Checkbox;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.View = __webpack_require__(8);

	ass.protoUI({
		name:"Button",
		getUICss:function(){
			return ass.UICompoent.View.prototype.getUICss.call(this);
		},
		createInputTpl:function(){
			return "<button type='"+this.getInputType()+"'  class='btn btn-default "+this.getUICss()+"'>"+this.setting.label+"</button>";
		},
		createTpl:function(){
			return this.createInputTpl();
		}
	},ass.UICompoent.Text);

	module.exports = ass.UICompoent.Button;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.Checkbox = __webpack_require__(27);

	ass.protoUI({
		name:'Radio',
		createInputTpl:function(){		
			return  "<div class='input-group-radio'>"+this.parseOptions()+"</div>";
		},
		createOptionTpl:function(text,value){
			var tpl = "<label class='radio-inline'>";
			tpl += "<input type='radio'  value='"+value+"'>"+text;
			tpl += "</label>";
			return tpl;
		},
		createTpl:function(){
			var tpl = this.createlabelTpl()+this.createInputTpl();
			tpl = this.createInputGroupTpl(tpl);
			return tpl;
		}
	},ass.UICompoent.Checkbox);

	module.exports = ass.UICompoent.Radio;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.Text = __webpack_require__(23);

	ass.protoUI({
		name:"Textarea",
		createInputTpl:function(){
			return "<textarea class='form-control ass-view-form-control' rows='5' ></textarea>";
		}
	},ass.UICompoent.Text);

	module.exports = ass.UICompoent.Textarea;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.Modal = __webpack_require__(18);

	ass.protoUI({
		name:'Process',
		$init:function(config){
			this.$initAction(config);
			this.setting.processCount = (config.processCount)?config.processCount:0;
			this.setTitle(config.title);
			this.setting.tpl = this.createTpl();
		},
		createTpl:function(){
			var processCount = this.getProcessCount();
			var processText = this.getProcessText();
			var tpl = "<h4>"+processText+"</h4>";
			tpl += "<div class='progress'>";
			tpl += "<div class='progress-bar progress-bar-striped active' role='progressbar' aria-valuenow='45' aria-valuemin='0' aria-valuemax='100' style='width:"+processCount+"%'>";
			tpl +="<span class='sr-only'>"+processCount+"% Complete</span>";
			tpl += "</div>";
			tpl += "</div>";
			this.setting.headHidden = true;
			this.setting.footerHidden = true;
			return ass.UICompoent.Modal.prototype.createTpl.call(this,tpl);
		},
		getProcessText:function(processText){
			return (this.setting.processText)?this.setting.processText:"请稍后，数据加载中.......";
		},
		setProcessCount:function(processCount){
			this.setting.processCount = processCount;
		},
		getProcessCount:function(){
			return this.setting.processCount;
		},
		refresh:function(){
			this.setProcessCount(100);
			if(this.setting.viewObj){
				this.setting.processBar.attr("style","width:"+this.getProcessCount()+"%");
				$(".sr-only",this.setting.processBar).text(this.getProcessCount()+"%Complete");
			}
		},
		show:function(){
			this.getViewObj().modal({backdrop:false});
			ass.DomHelper.getBody().append(this.createModalBackDropTpl());
			this.refresh();
		},
		hide:function(){
			this.getViewObj().modal('hide');
			$(".modal-backdrop",ass.DomHelper.getBody()).remove();
		},
		render:function(){
			this.parseTpl();
			this.setViewObj();
			this.setting.viewObj.addClass(ass.UICompoent.StyleCss.getUICss(this.name));
			this.setting.processBar =$(".progress-bar",this.setting.viewObj);
		}
	},ass.UICompoent.Modal);

	ass.process = function(config){
		if(!ass.UICompoent.ProcessView){
			ass.UICompoent.ProcessView = ass.UIFactory.createInstance("Process",config);
			ass.UICompoent.ProcessView.render();
		}
		return ass.UICompoent.ProcessView;
	}

	module.exports = ass.UICompoent.Process;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.BaseView = __webpack_require__(7);

	ass.protoUI({
		name:"Popover",
		arrow:{top:'top',bottom:"bottom",left:"left",right:"right",none:"none"},
		$init:function(config){
			this.$initAction(config);
			this.setting.arrow = this.createArrow((config.arrow)?config.arrow:this.arrow.right);
			this.setting.title = config.title;
			this.setting.content = config.content;
			this.setting.tpl = this.createTpl();
		},
		createTpl:function(){
			var tpl = "<div class='popover  fade "+this.setting.arrow.type+" "+this.getUICss()+"  in' id='"+this.setting.id+"' role='tooltip' >";
			if(this.setting.arrow != this.arrow.none){
				tpl += "<div class='arrow' style='"+this.setting.arrow.pos+": 50%;'></div>";
			}	
			tpl += (this.setting.title)?this.createHeadTpl():"";
			this.setting.content = (this.setting.content)?this.setting.content:"";
			tpl +=this.createContentTpl();
			tpl += "</div>";
			return tpl;
		},
		createArrow:function(arrow){
			var oArrow = {};
			switch(arrow){
				case this.arrow.top:
					oArrow.type = this.arrow.top;
					oArrow.pos = "left";
				break;
				case this.arrow.bottom:
					oArrow.type = this.arrow.bottom;
					oArrow.pos = "left";
				break;
				case this.arrow.left:
					oArrow.type = this.arrow.left;
					oArrow.pos = "top";
				break;
				case this.arrow.right:
					oArrow.type = this.arrow.right;
					oArrow.pos = "top";
				break;
			}
			
			return oArrow;
		},
		createHeadTpl:function(){	
			return  "<h3 class='popover-title'>"+this.setting.title+"</h3>";
		},
		createContentTpl:function(){
			var tpl = "<div class='popover-content'>";
			tpl += this.setting.content;
			tpl += "</div>";
			return tpl;
		},
		show:function(location){
			var _location = (location)?location:{};
			var top  = (_location.top)?_location.top:0;
			var left = (_location.left)?_location.left:0;
			var viewObj = this.getViewObj();
			var style = "top:"+top+"px;left:"+left+"px";
			viewObj.attr("style",style);
			viewObj.show();
			this.setDisplay(true);
		},
		hide:function(){
			this.setting.viewObj.hide();
		},
		render:function(){
			ass.UICompoent.View.prototype.render.call(this);
			this.setting.titleObj = $(".popover-title",this.getViewObj());
			this.setting.contentObj = $(".popover-content ",this.getViewObj());
		},
		setArrowType:function(oArrow){
			$("."+this.setting.arrow.type,this.getViewObj()).removeCss(this.setting.arrow.type);
			this.setting.arrow.type = this.createArrow(oArrow);
			$("."+this.setting.arrow.type,this.getViewObj()).addCss(this.setting.arrow.type);
		},
		setContent:function(content){
			if(this.setting.contentObj){
				this.setting.contentObj.children().remove();
				this.setting.contentObj.append(content);
			}
		},
		setTitle:function(title){
			if(this.setting.titleObj){
				this.setting.titleObj.children("*").remove();
				this.setting.titleObj.append(title);
			}
		}
	},ass.UICompoent.BaseView);

	ass.popover = function(config){
		if(!ass.UICompoent.PopoverView){
			ass.UICompoent.PopoverView =ass.UIFactory.createInstance("Popover",config);
			ass.UICompoent.PopoverView.render();
		}
		return ass.UICompoent.PopoverView;
	}

	module.exports = ass.UICompoent.Popover;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.BaseView = __webpack_require__(7);

	ass.protoUI({
		name:'WellView',
		$init:function(config){
			ass.UICompoent.BaseView.prototype.$init.call(this,config);
			this.setting.type = config.type;
			this.setting.bodyTpl = config.bodyTpl;
			this.setting.tpl = this.createTpl();
		},
		createBodyTpl:function(){
			return (this.setting.bodyTpl)?this.setting.bodyTpl:this.createContainerTpl(this.setting.layoutTpl);
		},
		createTpl:function(){
			var cls =  "well"+" "+((this.setting.type)?"well-"+(this.setting.type):"");
			var tpl = "<div class='"+cls+" "+this.getUICss()+"'  id='"+this.setting.id+"'>";
			tpl += this.createBodyTpl();
			tpl += "</div>";
			return tpl;
		},
		getlocationTop:function(){
			var paddingTop = this.getBodyPaddingTop();;
			var top = 20+parseInt(paddingTop);
			return top;
		},
		setlocation:function(){
			var viewObj = this.getViewObj();
			var location = {left:0,top:0};
			if(arguments[0])
			{
				var _location = arguments[0];
				_location.top = (_location.top)?_location.top:this.getlocationTop();
				location = _location;
				viewObj.offset(location);
			}
			else
			{
				var w = viewObj.width(),h = viewObj.height();
				location.left = Math.round((this.setting.render.width()-w)/2);
				location.top = this.getlocationTop();
			}
			this.setting.location = location;
			viewObj.offset(this.setting.location);
			
		},
		render:function(){
			ass.UICompoent.BaseView.prototype.render.call(this);
		},
		renderAfter:function(){
			ass.UICompoent.BaseView.prototype.renderAfter.call(this);
			this.setlocation();
		}
	},ass.UICompoent.BaseView);

	module.exports = ass.UICompoent.WellView;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var ass = __webpack_require__(1);
	ass.UICompoent.ListPanel = __webpack_require__(15);
	ass.UICompoent.BaseView = __webpack_require__(7);

	ass.protoUI({
		name:'Sidebar',
		itemType:{item:'item',group:'group'},
		$init:function(config){
			ass.UICompoent.BaseView.prototype.$init.call(this,config);
			this.setting.items = (config.items)?config.items:[];
			this.setting.items = this.createItems();
			this.setting.tpl = this.createTpl();
		},
		createItems:function(){
			if(this.setting.items){
				var items = this.setting.items;
				for(var i=0; i< items.length; i++){
					var item = items[i];
					var type = (item.type)?item.type:this.itemType.item;
					switch(type){
						case this.itemType.group:
							var children = item.children;
							var title = item.title;
							var oGrouplist = ass.UIFactory.createInstance("ListPanel",{
								title:title,
								items:children,
								styleCss:'ass-view-Sidebar-listItem ass-view-Sidebar-listItem-group'
							});
							item.itemTpl = oGrouplist.getTpl();
						break;
						case this.itemType.item:
							item.styleCss = 'ass-view-Sidebar-listItem';
						break;
					}
				}
			}
			return this.setting.items;
		},
		getContainerObj:function(){
			return this.setting.listPanel.getContainerObj();
		},
		parseItems:function(){
			var tpl = null;
			if(this.setting.items){
				var items = this.setting.items;
				this.setting.listPanel = ass.UIFactory.createInstance("ListPanel",{
					items:items,
					styleCss:'ass-view-Sidebar-list'
				});
				tpl = this.setting.listPanel.getTpl();
			}
			
			tpl = (tpl)?tpl:"";
			return tpl;
		},
		createTpl:function(){
			return "<div class='"+this.getUICss()+"'  id='"+this.setting.id+"'>"+this.parseItems()+"</div>";
		},
		setParentObjPosition:function(){
			var parentObj = this.getViewObj().parent();
			if(parentObj.prop('tagName').toUpperCase()!='BODY'){
				var paddingTop = this.getBodyPaddingTop();
				parentObj.addClass("ass-view-poistion-fix-init");
				parentObj.addClass("ass-view-fix-top");
			}
		},
		renderAfter:function(){
			this.resize({h:$(document).height()- this.getBodyPaddingTop()});
			this.setParentObjPosition();
			ass.UICompoent.BaseView.prototype.renderAfter.call(this);
		}
	},ass.UICompoent.BaseView);

	module.exports = ass.UICompoent.Sidebar;

/***/ }
/******/ ]);