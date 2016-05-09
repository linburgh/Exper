var ass = require('../../ass_core.js');
ass.UICompoent.BaseView = require("./ass.ui.baseView.js");

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
