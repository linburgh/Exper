$TWaver.NetWork.EventHandler= ass.proto({
	EVENT_CODE:{
		MOUSE_BUTTON:{LEFT:1,MID:2,RIGHT:3}
	},
	$init:function(config){
		if(config.netWork){
			this.setting.netWork = config.netWork;
			this.setting.dataBox = this.setting.netWork.getElementBox(); 
			this.setting.selectionModel = this.setting.dataBox.getSelectionModel();
			this.addNetWorkEvent();
		}
	},
	addNetWorkEvent:function(){
		this.addHtmlEventListener();
	},
	addHtmlEventListener:function(){
		var oView = this.setting.netWork.getView();
		ass.event(oView,'mousedown',(function(_this){
			return function(e){
				_this.onMouseDown(e);
			}
		})(this));
		ass.event(oView,'mousemove',(function(_this){
			return function(e){
				_this.onMouseMove(e);
			}
		})(this));
		ass.event(oView,'dblclick',(function(_this){
			return function(e){
				_this.onClick(e);
			}
		})(this));
	},
	getNetWork:function(){
		return this.setting.netWork;
	},
	onMouseDown:function(e){},
	onMouseMove:function(e){},
	onClick:function(e){},
	onKeyup:function(e){}
});