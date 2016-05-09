var ass = require('../../ass_core.js');
ass.UICompoent.Panel = require("./ass.ui.panel.js");
ass.UICompoent.Modal = require("../baseView/ass.ui.modal.js");

ass.protoUI({
	name:'Window',
	pos:{center:'center'},
	buttonActions:{close:'close'},
	$init:function(config){
		ass.UICompoent.Panel.prototype.$init.call(this,config);
		this.setting.modal = (config.modal)?config.modal:false;
		this.setting.headTpl = this.createHeadTpl();
		this.setting.location = (config.location)?config.location:{left:0,top:0};
		this.setting.align = config.align;
		this.setting.icon = config.icon;
		this.setting.buttons = (config.buttons)?config.buttons:[{type:this.buttonActions.close}];
		this.setting.tpl = this.createTpl();
	},
	parseButtons:function(){
		var tpl = null;
		if(this.setting.buttons){
			tpl = "<div class='collapse navbar-collapse ' >";
			tpl += "<ul class='nav navbar-nav navbar-right'>";
			this.setting.buttonSrcObjs = [];
			for(var i=0; i<this.setting.buttons.length; i++){
				var srcObj = {type:'click'};
				var button = this.setting.buttons[i];
				var iconCls = (button.iconCls)?button.iconCls:"glyphicon glyphicon-remove";
				var type = button.type;
				this.setting.buttonCls = this.setting.className+"-button";
				tpl += "<li class='"+this.setting.buttonCls+"'>";
				switch(type){
					case this.buttonActions.close:
						tpl += "<a class="+this.getCursorCls()+" ><span class='"+iconCls+"'></span></a>";
						srcObj.handler = (function(_this){
							return function(){
								_this.hide();
							}
						})(this);
					break;
				}
				tpl += "</li>";
				this.setting.buttonSrcObjs.push(srcObj);
			}
			tpl += "</ul>";
			tpl += "</div>";
		}
		tpl = (tpl)?tpl:"";
		return tpl;
	},
	createTitleTpl:function(){
		var title = "<span class='title'>"+this.setting.title+"</span>";
		var tpl = "<div class='navbar-header'>";
		tpl +="<div class='navbar-brand'>";
		tpl += (this.setting.icon)?"<span class='icon "+this.setting.icon+"' ></span>":"";
		tpl += title;
		tpl += "</div>";
		tpl += "</div>";
		return tpl;
	},
	createHeadTpl:function(){
		var title = "<span class='title'>"+this.setting.title+"</span>";
		var tpl = "<div class='panel-heading'>";
		tpl += "<nav class='navbar navbar-default'>";
		tpl += this.createContainerTpl(this.createTitleTpl()+this.parseButtons());
		tpl += "</nav>";
		tpl += "</div>";
		return tpl;
	},
	createTpl:function(){
		var tpl = ass.UICompoent.Panel.prototype.createTpl.call(this);
		if(this.setting.modal){
			this.setting.modalId = ass.uid();
			var config = {compClsName:this.setting.className+"Modal",id:this.setting.modalId,bodyTpl:tpl};
			var modalTpl = ass.UICompoent.Modal.prototype.createModalTpl.call(this,config);
			tpl = modalTpl;
		}
		return tpl;
	},
	getCenterPosition:function(){
		var location = {left:0,top:0};
		var viewObj = this.getViewObj();
		if(viewObj){
			var w = viewObj.width(),h = viewObj.height();
			location.left = Math.abs(Math.round((this.setting.render.width()-w)/2));
			location.top = Math.abs(Math.round((this.setting.render.height()-h)/2));
		}
		return location;
	},
	setlocation:function(location){
		var viewObj = this.getViewObj();
		location = (location)?location:this.setting.location;
		if(this.setting.align){
			var align = this.setting.align;
			switch(align){
				case this.pos.center:
					location = this.getCenterPosition();
				break;
			}
		}
		this.setting.location = location;
		viewObj.offset(this.setting.location);
	},
	render:function(){
		ass.UICompoent.Panel.prototype.render.call(this);
	},
	renderAfter:function(){
		ass.UICompoent.Panel.prototype.renderAfter.call(this);
		this.bindButtonEventHandler();
		this.setlocation(this.setting.location);
		this.hide();
	},
	bindButtonEventHandler:function(){
		var eventHandler = this.getEventHandler();
		var srcObs = []; 
		this.setting.buttonObjs = $("."+this.setting.buttonCls,this.getViewObj());
		if(this.setting.buttonObjs.length === this.setting.buttonSrcObjs.length){
			for(var i=0; i<this.setting.buttonObjs.length; i++){
				var buttonObj = this.setting.buttonObjs.eq(i);
				this.setting.buttonSrcObjs[i].target = buttonObj;					
			}
		}
		eventHandler.pushSrcObj(this.setting.buttonSrcObjs);
		eventHandler.bind();
	},
	getModalView:function(){
		return $("#"+this.setting.modalId);
	},
	appendModal:function(){
		this.getModalView().show();
	},
	removeModal:function(){
		this.getModalView().hide();
	},
	show:function(){
		ass.UICompoent.Panel.prototype.show.call(this);
		this.appendModal();
		this.setlocation();
	},
	hide:function(){
		ass.UICompoent.Panel.prototype.hide.call(this);
		this.removeModal();
	}
},ass.UICompoent.Panel);

module.exports = ass.UICompoent.Window;
