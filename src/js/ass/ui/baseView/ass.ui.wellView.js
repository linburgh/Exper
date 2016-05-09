var ass = require('../../ass_core.js');
ass.UICompoent.BaseView = require("./ass.ui.baseView.js");

ass.protoUI({
	name:'WellView',
	$init:function(config){
		ass.UICompoent.BaseView.prototype.$init.call(this,config);
		this.setting.type = config.type;
		this.setting.bodyTpl = config.bodyTpl;
		this.setting.tpl = this.createTpl();
	},
	createBodyTpl:function(){
		return (this.setting.bodyTpl)?this.setting.bodyTpl:this.createContainerTpl(this.setting.layoutTpl);
	},
	createTpl:function(){
		var cls =  "well"+" "+((this.setting.type)?"well-"+(this.setting.type):"");
		var tpl = "<div class='"+cls+" "+this.getUICss()+"'  id='"+this.setting.id+"'>";
		tpl += this.createBodyTpl();
		tpl += "</div>";
		return tpl;
	},
	getlocationTop:function(){
		var paddingTop = this.getBodyPaddingTop();;
		var top = 20+parseInt(paddingTop);
		return top;
	},
	setlocation:function(){
		var viewObj = this.getViewObj();
		var location = {left:0,top:0};
		if(arguments[0])
		{
			var _location = arguments[0];
			_location.top = (_location.top)?_location.top:this.getlocationTop();
			location = _location;
			viewObj.offset(location);
		}
		else
		{
			var w = viewObj.width(),h = viewObj.height();
			location.left = Math.round((this.setting.render.width()-w)/2);
			location.top = this.getlocationTop();
		}
		this.setting.location = location;
		viewObj.offset(this.setting.location);
		
	},
	render:function(){
		ass.UICompoent.BaseView.prototype.render.call(this);
	},
	renderAfter:function(){
		ass.UICompoent.BaseView.prototype.renderAfter.call(this);
		this.setlocation();
	}
},ass.UICompoent.BaseView);

module.exports = ass.UICompoent.WellView;
