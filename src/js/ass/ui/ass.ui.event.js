var ass = require('../ass_core.js');

ass.UICompoent.Event.Handler = ass.proto({
	$init:function(config){
		this.setting.srcObjs = [];
	},
	pushSrcObj:function(srcObj){
		var _srcObjs = ass.toArray(srcObj);
		this.setting.srcObjs = this.setting.srcObjs.concat(_srcObjs);
	},
	stopPropagation:function(target,type){
		ass.$event(target,type,function(event){
			event.stopPropagation();
		});
	},
	bind:function(){
		if(this.setting.srcObjs){
			var srcObjs = this.setting.srcObjs;
			for(var i=0; i<srcObjs.length; i++){
				var srcObj = srcObjs[i];
				var target = srcObj.target;
				var type = srcObj.type;
				var handler = srcObj.handler;
				ass.$event(target,type,handler);
			}
		}
	}
});

ass.UICompoent.Event.createHandler = function(config){
	return new ass.UICompoent.Event.Handler(config);
}