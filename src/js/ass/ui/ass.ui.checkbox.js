var ass = require('../ass_core.js');
ass.UICompoent.View = require("./ass.ui.text.js");

ass.protoUI({
	name:'Checkbox',
	$init:function(config){
		ass.UICompoent.Text.prototype.$init.call(this,config);
		this.setting.options = (config.options)?config.options:[];
		this.setting.tpl = this.createTpl();
	},
	parseOptions:function(){
		var tpl = null;
		if(this.setting.options){
			var tpl = "";
			for(var i=0; i<this.setting.options.length; i++){
				var option = this.setting.options[i];
				var text = option.text;
				var value = option.value;
				tpl += this.createOptionTpl(text,value);
			}
		}
		tpl = (tpl)?tpl:"";
		return tpl;
	},
	createOptionTpl:function(text,value){
		var tpl = "<label class='checkbox-inline'>";
		tpl += "<input type='"+this.getInputType()+"'  value='"+value+"'>"+text;
		tpl += "</label>";
		return tpl;
	},
	createInputTpl:function(){
		return "<div class='input-group-checkbox'>"+this.parseOptions()+"</div>";
	},
	createTpl:function(){
		var tpl = this.createlabelTpl()+this.createInputTpl();
		tpl = this.createInputGroupTpl(tpl);
		return tpl;
	}
},ass.UICompoent.Text);

module.exports = ass.UICompoent.Checkbox;
