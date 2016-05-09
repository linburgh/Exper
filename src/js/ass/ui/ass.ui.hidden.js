var ass = require('../ass_core.js');
ass.UICompoent.Input = require("./ass.ui.input.js");

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
