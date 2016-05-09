var ass = require('../../ass_core.js');
ass.UICompoent.BaseView = require("./ass.ui.baseView.js");

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