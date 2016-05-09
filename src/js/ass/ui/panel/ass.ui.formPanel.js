var ass = require('../../ass_core.js');
ass.UICompoent.Panel = require("./ass.ui.panel.js");

ass.protoUI({
	name:"FormPanel",
	$init:function(config){
		ass.UICompoent.Panel.prototype.$init.call(this,config);
		this.setting.formFields = [];
		this.setting.labelWidth = config.labelWidth;
		this.setting.labelAlign = config.labelAlign;
		this.setting.fieldWidth = config.fieldWidth;
		this.setting.items = (config.items)?config.items:[];
		this.setting.buttons = (config.buttons)?config.buttons:[];
		this.setting.buttonAlign = (config.buttonAlign)?config.buttonAlign:"center";
		this.setting.buttonAlign = this.getButtonAlign();
		this.setting.layout = (config.layout)?config.layout:"horizontal";
		this.setting.bodyTpl = this.parseItems();
		this.setting.footerTpl = this.parseButtons();
		this.setting.tpl = this.createTpl();
	},
	createTpl:function(){
		var title = this.getTitle();
		var tpl = "<div class='panel panel-default "+this.getUICss()+"'  id='"+this.setting.id+"'>";
		tpl += (this.setting.headTpl)?this.createHeadTpl():"";
		tpl +=  this.createBodyTpl();
		tpl += (this.setting.footerTpl)?this.createFooterTpl():"";
		tpl += "</div>";
		return tpl;
	},
	createFooterTpl:function(p){
		return ass.UICompoent.Panel.prototype.createFooterTpl.call(this,{cls:this.setting.buttonAlign});
	},
	getButtonAlign:function(){		
		this.setting.buttonAlign = ass.UICompoent.StyleCss.getClassPrefix()+"-"+"button-align"+"-"+this.setting.buttonAlign;
		return this.setting.buttonAlign;
	},
	getFormFields:function(){
		return this.setting.formFields;
	},
	parseItems:function(){
		var tpl = null;
		if(this.setting.items){
			var formFields = this.getFormFields();
			tpl = "<form class='form-"+this.setting.layout+"' role='form'>";

			for(var i=0; i<this.setting.items.length; i++){
				var item = this.setting.items[i];
				var name = item.name;
				var oField = null;
				var itemTpl = null;
				(this.setting.labelWidth)?(item.labelWidth=this.setting.labelWidth):false;
				(this.setting.labelAlign)?(item.labelAlign=this.setting.labelAlign):false;
				(item.width)?(item.width=item.width):((this.setting.fieldWidth)?(item.width=this.setting.fieldWidth):false);
				oField = ass.UIFactory.createInstance(name,item);
				itemTpl = oField.getTpl();
				formFields.push(oField);
				tpl += "<div class='form-group'>";
				tpl += itemTpl;
				tpl += "</div>";
			}
			tpl += "</form>";
		}
		tpl = (tpl)?tpl:"";
		return tpl;
	},
	parseFieldsToFieldObjs:function(){
		var formFields = this.setting.formFields;
		for(var i=0; i<formFields.length; i++){
			formFields[i].renderAfter();
		}
	},
	parseButtons:function(){
		var tpl = null;
		if(this.setting.buttons){
			tpl = "";
			for(var i=0; i<this.setting.buttons.length; i++){
				var button = this.setting.buttons[i];
				var btnTpl =  ass.UIFactory.createInstance("Button",button).getTpl();
				tpl += btnTpl;
			}
		}
		tpl = (tpl)?tpl:"";
		return tpl;
	},
	renderAfter:function(){
		ass.UICompoent.Panel.prototype.renderAfter.call(this);
		this.parseFieldsToFieldObjs();
	}
},ass.UICompoent.Panel);

module.exports = ass.UICompoent.FormPanel;
