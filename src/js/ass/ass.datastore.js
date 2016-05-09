var ass = require('./ass_core.js');

ass.protoStore = function(){
	var args = arguments;
	var oStoreDefined = args[0];
	var _ExtendClass = args[1];
	var nameSpace = ass.StoreCompoent;	
	
	return ass.$extend(oStoreDefined,_ExtendClass,nameSpace);
}


ass.protoStore({
	name:"DataStore",
	$init:function(config){
		this.setting.data = (config.data)?config.data:[];
	},
	getData:function(){
		return this.setting.data;
	}
});
