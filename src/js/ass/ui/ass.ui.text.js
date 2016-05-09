var ass = require('../ass_core.js');
ass.UICompoent.Input = require("./ass.ui.input.js");
ass.UICompoent.Hidden = require("./ass.ui.hidden.js");

ass.protoUI({
	name:"Text",
	$init:function(config){
		ass.UICompoent.Input.prototype.$init.call(this,config);
	},
	createInputTpl:function(){
		var inputTpl = ass.UICompoent.Input.prototype.createInputTpl.call(this);
		var hiddenTpl = this.createHiddenTpl();
		var tpl = inputTpl+hiddenTpl;
		return tpl;
	},
	createHiddenTpl:function(){
		var tpl = null;
		if(this.setting.hidden){
			this.setting.hidden = ass.UIFactory.createInstance("Hidden",this.setting.hidden);
			tpl = this.setting.hidden.getTpl();
		}
		tpl = (tpl)?tpl:"";
		return tpl;
	},
	getHiddenObj:function(){
		var hiddenObj = null;
		this.setting.hidden.setViewObj();
		hiddenObj = this.setting.hidden.getViewObj();
		return hiddenObj;
	},
	renderAfter:function(){
		ass.UICompoent.Input.prototype.renderAfter.call(this);
		(this.setting.hidden)?this.setting.hidden.setViewObj():false;
	}
},ass.UICompoent.Input);

module.exports = ass.UICompoent.Text;
