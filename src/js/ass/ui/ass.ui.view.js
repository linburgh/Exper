var ass = require('../ass_core.js');

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
