var ass = require('../../ass_core.js');
ass.UICompoent.View = require("../ass.ui.view.js");

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
	isScrollToStart:function(scrollBodyObj,interval){
		var result = false;
		if(scrollBodyObj){
			 var viewH =scrollBodyObj.height();
	        var contentH =scrollBodyObj.get(0).scrollHeight;
	        var scrollTop =scrollBodyObj.scrollTop();
	        interval = (interval)?interval:0.1;
	        result = scrollTop/(contentH -viewH)<=interval
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
