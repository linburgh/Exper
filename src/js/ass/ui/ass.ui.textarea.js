var ass = require('../ass_core.js');
ass.UICompoent.Text = require("./ass.ui.text.js");

ass.protoUI({
	name:"Textarea",
	createInputTpl:function(){
		return "<textarea class='form-control ass-view-form-control' rows='5' ></textarea>";
	}
},ass.UICompoent.Text);

module.exports = ass.UICompoent.Textarea;