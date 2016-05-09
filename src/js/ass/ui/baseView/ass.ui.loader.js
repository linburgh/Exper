var ass = require('../../ass_core.js');
ass.UICompoent.BaseView = require("./ass.ui.baseView.js");

ass.protoUI({
	name:"Loader",
	$init:function(config){
		ass.UICompoent.BaseView.prototype.$init.call(this,config);
	}
},ass.UICompoent.BaseView);

module.exports = ass.UICompoent.Loader;
