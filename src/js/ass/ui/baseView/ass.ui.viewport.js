var ass = require('../../ass_core.js');
ass.UICompoent.BaseView = require("./ass.ui.baseView.js");

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