var ass = require('../../ass_core.js');
ass.UICompoent.BaseView = require("./ass.ui.baseView.js");

ass.protoUI({
	name:"Popover",
	arrow:{top:'top',bottom:"bottom",left:"left",right:"right",none:"none"},
	$init:function(config){
		this.$initAction(config);
		this.setting.arrow = this.createArrow((config.arrow)?config.arrow:this.arrow.right);
		this.setting.title = config.title;
		this.setting.content = config.content;
		this.setting.tpl = this.createTpl();
	},
	createTpl:function(){
		var tpl = "<div class='popover  fade "+this.setting.arrow.type+" "+this.getUICss()+"  in' id='"+this.setting.id+"' role='tooltip' >";
		if(this.setting.arrow != this.arrow.none){
			tpl += "<div class='arrow' style='"+this.setting.arrow.pos+": 50%;'></div>";
		}	
		tpl += (this.setting.title)?this.createHeadTpl():"";
		this.setting.content = (this.setting.content)?this.setting.content:"";
		tpl +=this.createContentTpl();
		tpl += "</div>";
		return tpl;
	},
	createArrow:function(arrow){
		var oArrow = {};
		switch(arrow){
			case this.arrow.top:
				oArrow.type = this.arrow.top;
				oArrow.pos = "left";
			break;
			case this.arrow.bottom:
				oArrow.type = this.arrow.bottom;
				oArrow.pos = "left";
			break;
			case this.arrow.left:
				oArrow.type = this.arrow.left;
				oArrow.pos = "top";
			break;
			case this.arrow.right:
				oArrow.type = this.arrow.right;
				oArrow.pos = "top";
			break;
		}
		
		return oArrow;
	},
	createHeadTpl:function(){	
		return  "<h3 class='popover-title'>"+this.setting.title+"</h3>";
	},
	createContentTpl:function(){
		var tpl = "<div class='popover-content'>";
		tpl += this.setting.content;
		tpl += "</div>";
		return tpl;
	},
	show:function(location){
		var _location = (location)?location:{};
		var top  = (_location.top)?_location.top:0;
		var left = (_location.left)?_location.left:0;
		var viewObj = this.getViewObj();
		var style = "top:"+top+"px;left:"+left+"px";
		viewObj.attr("style",style);
		viewObj.show();
		this.setDisplay(true);
	},
	hide:function(){
		this.setting.viewObj.hide();
	},
	render:function(){
		ass.UICompoent.View.prototype.render.call(this);
		this.setting.titleObj = $(".popover-title",this.getViewObj());
		this.setting.contentObj = $(".popover-content ",this.getViewObj());
	},
	setArrowType:function(oArrow){
		$("."+this.setting.arrow.type,this.getViewObj()).removeCss(this.setting.arrow.type);
		this.setting.arrow.type = this.createArrow(oArrow);
		$("."+this.setting.arrow.type,this.getViewObj()).addCss(this.setting.arrow.type);
	},
	setContent:function(content){
		if(this.setting.contentObj){
			this.setting.contentObj.children().remove();
			this.setting.contentObj.append(content);
		}
	},
	setTitle:function(title){
		if(this.setting.titleObj){
			this.setting.titleObj.children("*").remove();
			this.setting.titleObj.append(title);
		}
	}
},ass.UICompoent.BaseView);

ass.popover = function(config){
	if(!ass.UICompoent.PopoverView){
		ass.UICompoent.PopoverView =ass.UIFactory.createInstance("Popover",config);
		ass.UICompoent.PopoverView.render();
	}
	return ass.UICompoent.PopoverView;
}

module.exports = ass.UICompoent.Popover;
