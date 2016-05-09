var ass = require('../ass_core.js');
ass.UICompoent.BaseView = require("./baseView/ass.ui.baseView.js");

ass.protoUI({
	name:"Input",
	$init:function(config){
		ass.UICompoent.BaseView.prototype.$init.call(this,config);
		this.setting.value = (config.value)?config.value:"";
		this.setting.placeholder = (config.placeholder)?config.placeholder:"";
		this.setting.labelWidth = config.labelWidth;
		this.setting.labelAlign = (config.labelAlign)?config.labelAlign:"center";
		this.setting.addOnTpl = config.addOnTpl;
		this.setting.width = config.width;
		this.setting.label = (config.label)?config.label:"label";
		this.setting.inputTpl = config.inputTpl;
		this.setting.tpl = this.createTpl();
	},
	getlabel:function(){
		var label = null;
		var viewObj = this.getViewObj();
		if(viewObj)
		{
			label = $(".ass-view-input-group-label",viewObj);
		}
		return label;
	},
	createAddOnTpl:function(cls,style,addOnTpl){
		var _cls = (cls)?cls:"";
		var _style = (style)?"style='"+style+"'":"";
		var _addOnTpl = (addOnTpl)?addOnTpl:"";
		var tpl = "<span class='input-group-addon  "+_cls+"'  "+_style+">"+_addOnTpl+"</span>";
		return tpl;
	},
	createlabelTpl:function(){
		var width = (this.setting.labelWidth)?("width:"+this.setting.labelWidth+"px;"):"";
		var textAlign = "text-align:"+this.setting.labelAlign+";";
		var style =width+textAlign;
		return this.createAddOnTpl("ass-view-input-group-label",style,this.setting.label);
	},
	getUICss:function(){
		return "ass-view-input-group"+" "+ass.UICompoent.BaseView.prototype.getUICss.call(this);
	},
	createInputGroupTpl:function(_tpl){
		return "<div class='input-group  "+this.getUICss()+"'   id='"+this.setting.id+"'  "+this.createStyleDefine()+">"+_tpl+"</div>";
	},
	getInputId:function(){
		if(!this.setting.inputId){
			this.setting.inputId = ass.uid()+"_"+this.getInputType();
		}
		return this.setting.inputId;
	},
	getInputObj:function(){
		if(!this.setting.inputObj){
			this.setting.inputObj = $("#"+this.getInputId());
		}
		return this.setting.inputObj;
	},
	createInputTpl:function(){
		var tpl = "<input type='"+this.getInputType()+"'  placeholder='"+this.setting.placeholder+"'   class='form-control ass-view-form-control ass-view-input'  id='"+this.getInputId()+"'>";
		tpl = (this.setting.inputTpl)?this.setting.inputTpl:tpl;
		return tpl;
	},
	createTpl:function(){
		var addOnTpl = null;
		if(this.setting.addOnTpl) {
			var cls = (this.setting.addOnTpl.cls)?this.setting.addOnTpl.cls:"";
			var style =  (this.setting.addOnTpl.style)?this.setting.addOnTpl.style:"";
			var addOnTpl =  (this.setting.addOnTpl.tpl)?this.setting.addOnTpl.tpl:"";
			addOnTpl = this.createAddOnTpl(cls,style,addOnTpl);
		}
		addOnTpl = (addOnTpl)?addOnTpl:'';
		return this.createInputGroupTpl(this.createlabelTpl() +this.createInputTpl()+addOnTpl);
	},
	getInputGroupButtonId:function(){
		if(!this.setting.inputGroupButtonId){
			this.setting.inputGroupButtonId = ass.uid()+"_input-group-button";
		}
		return this.setting.inputGroupButtonId;
	},
	getInputGroupButtonObj:function(){
		return $("#"+this.setting.inputGroupButtonId);
	},
	createInputGroupButtonTpl:function(tpl){
		return "<div class='input-group-btn' id='"+this.getInputGroupButtonId()+"'>"+tpl+"</div>";
	},
	getInputType:function(){
		return this.name.toLowerCase();
	},
	setValue:function(value){
		var inputObj = this.getInputObj();
		if(inputObj){
			this.setting.value = value;
			inputObj.val(this.setting.value);
		}
	},
	getValue:function(){
		return this.setting.value;
	},
	addKeyBoardEventHandler:function(){
		var keyEvents = ["keydown","keyup","keypress"];
		if(this.setting.listener.keyboard){
			var eventHandler = this.getEventHandler();
			var keyboard = this.setting.listener.keyboard;
			for(var key in keyboard){
				var inputObj = this.getInputObj();
				var handler = keyboard[key];
				if($.inArray(key, keyEvents)>-1){
					eventHandler.pushSrcObj({
						target:inputObj,
						type:key,
						handler:(function(_handler,_this){
							return function(event){
								_handler(event,_this);
							}
						})(handler,this)
					});
				}
			}
			eventHandler.bind();
		}
	},
	setFoucs:function(foucs){
		this.setting.foucs = foucs;
		if(this.setting.foucs){
			var inputHtmlObj = this.getInputObj()[0];
			if(inputHtmlObj){
				inputHtmlObj.focus();
			}
		}
	},
	renderAfter:function(){
		ass.UICompoent.BaseView.prototype.renderAfter.call(this);
		this.addKeyBoardEventHandler();
	},
},ass.UICompoent.BaseView);

module.exports = ass.UICompoent.Input;
