var ass = require('../ass_core.js');
ass.UICompoent.Checkbox = require("./ass.ui.checkbox.js");

ass.protoUI({
	name:'Radio',
	createInputTpl:function(){		
		return  "<div class='input-group-radio'>"+this.parseOptions()+"</div>";
	},
	createOptionTpl:function(text,value){
		var tpl = "<label class='radio-inline'>";
		tpl += "<input type='radio'  value='"+value+"'>"+text;
		tpl += "</label>";
		return tpl;
	},
	createTpl:function(){
		var tpl = this.createlabelTpl()+this.createInputTpl();
		tpl = this.createInputGroupTpl(tpl);
		return tpl;
	}
},ass.UICompoent.Checkbox);

module.exports = ass.UICompoent.Radio;