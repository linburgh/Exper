var ass = require('../../ass_core.js');
ass.UICompoent.BaseView = require('../baseView/ass.ui.baseView.js');
ass.UICompoent.Page = require("./ass.ui.page.js");

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
	getFooterId:function(){
		if(!this.setting.footerId){
			this.setting.footerId =  ass.uid()+"_panel_footer";
		}
		return this.setting.footerId;
	},
	getFooterObj:function(){
		this.setting.footerObj = $("#"+this.getFooterId()); 
		return this.setting.footerObj;
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
		var id = this.getFooterId();
		var tpl = "<div class='panel-footer "+cls+"' id='"+id+"'>";
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
