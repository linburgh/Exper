var ass = require('../../ass_core.js');
ass.UICompoent.BaseView = require("./ass.ui.baseView.js");

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
