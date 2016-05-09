var ass = require('../ass_core.js');
ass.UICompoent.View = require("./ass.ui.view.js");

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
