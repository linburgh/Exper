var ass = require('../../ass_core.js');
ass.UICompoent.View = require("../ass.ui.view.js");

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
