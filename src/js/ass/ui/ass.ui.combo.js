var ass = require('../ass_core.js');
ass.UICompoent.BaseView = require("./baseView/ass.ui.baseView.js");
ass.UICompoent.Text = require("./ass.ui.text.js");

ass.protoUI({
	name:'DropdownMenu',
	$init:function(config){
		ass.UICompoent.BaseView.prototype.$init.call(this,config);
		this.setting.options = (config.options)?config.options:[];
		this.setting.emptyOption = (config.emptyOption)?config.emptyOption:{text:"当前暂无可选值"};
		this.setting.tpl = this.createTpl();	
	},
	setOptions:function(options){
		this.setting.emptyOption = {text:"<span class='disabled'>"+this.setting.emptyOption.text+"</span>"}
		this.setting.options = (options.length==0)?[this.setting.emptyOption]:options;
	},
	parseOptions:function(){
		var tpl = null;
		if(this.setting.options){
			tpl = "<ul class='dropdown-menu dropdown-menu-right "+this.getUICss()+"'  id='"+this.setting.id+"'>";
			for(var i=0; i<this.setting.options.length; i++){
				var option = this.setting.options[i];
				var text = option.text;
				var value = (option.value)?"value='"+option.value+"'":"";
				tpl += "<li class='"+this.getItemCls()+"'  "+value+"><a>"+text+"</a></li>";
			}
			tpl += "</ul>";
		}
		tpl = (tpl)?tpl:"";
		return tpl;
	},
	getItemCls:function(){
		return this.setting.className+"-item";
	},
	createTpl:function(){
		return this.parseOptions();
	},
	parseOptionsToObj:function(){
		var optionObjArr = [];
		if(this.setting.options){
			var itemCls = this.getItemCls();
			var viewObj = this.getViewObj();
			var optionObjs = $("."+itemCls,viewObj);
			var options = this.setting.options;
			for(var i=0; i<options.length; i++){
				var optionObj = optionObjs.eq(i);
				var option = options[i];
				optionObjArr.push({srcObj:optionObj,config:option});
			}
		}
		this.setting.optionObjArr = optionObjArr;
	},
	addOptionsEventHandler:function(){
		if(this.setting.optionObjArr){
			var optionObjArr = this.setting.optionObjArr;
			var eventHandler = this.getEventHandler();
			var srcObjs = [];
			for(var i=0; i<optionObjArr.length; i++){
				var option = optionObjArr[i];
				var config = option.config;
				var srcObj = {};
				srcObj.target = option.srcObj;
				srcObj.type = "click";
				srcObj.handler = (config.handler)?config.handler:function(){};
				srcObjs.push(srcObj);
			}
			eventHandler.pushSrcObj(srcObjs);
			eventHandler.bind();
		}
	},
	renderAfter:function(){
		ass.UICompoent.BaseView.prototype.renderAfter.call(this);
		this.parseOptionsToObj();
		this.addOptionsEventHandler();
	}
},ass.UICompoent.BaseView);

ass.protoUI({
	name:'Combo',
	$init:function(config){
		ass.UICompoent.Text.prototype.$init.call(this,config);
		this.setting.hidden = (config.hidden)?config.hidden:this.createHiddenConfig();
		this.setting.search = (config.search)?config.search:false;
		this.setting.hiddenInputGroupButton = (config.hiddenInputGroupButton)?config.hiddenInputGroupButton:false;
		config.dropDownMenu = (this.setting.search)?"DropdownMenu":config.dropDownMenu;
		this.setting.options = this.initOptions((config.options)?config.options:[]);
		config.dropDownMenu = (this.setting.search)?'ListPanel':'DropdownMenu';
		this.setDropDownMenuType((config.dropDownMenu)?config.dropDownMenu:"DropdownMenu");
		this.createDropDownMenu(config);
		this.setting.tpl = this.createTpl();
	},
	createHiddenConfig:function(){
		var config = {};
		config.id = this.getID()+"_hidden";
		return config;
	},
	isSearch:function(){
		return this.setting.search;
	},
	isHideInputGroupButton:function(){
		return this.setting.hiddenInputGroupButton;
	},
	getEmptyOption:function(text){
		return {text:"<span class='disabled'>"+text+"</span>"};
	},
	initOptions:function(options){
		for(var i=0; i<options.length; i++){
			var option = options[i];
			var fn = (option.handler)?option.handler:function(){};
			option.checked = false;
			if(!option.search){
				option.search = option.text;
			}
			option.handler = (function(_this,_option,_fn){
				return function(){
					_this.setValue(_option.value);
					_this.getDropdownMenu().toggle();
					_fn();
					_this.setFoucs(true);
				}
			})(this,option,fn)
		}
		return options;
	},
	getDropdownMenu:function(){
		return this.setting.dropdownMenu;
	},
	setDropDownMenuType:function(type){
		this.setting.dropDownMenuType = type;
	},
	getDropDownMenuType:function(){
		return this.setting.dropDownMenuType;
	},
	createDropDownMenu:function(config){
		var dropDownMenuType = this.getDropDownMenuType();		
		var oDropDownMenu = ass.UIFactory.createInstance("DropdownMenu",{emptyOption:this.setting.emptyOption});
		switch(dropDownMenuType){
			case 'DropdownMenu':
				this.setting.emptyOption = config.emptyOption;
				this.setting.dropdownMenu = oDropDownMenu;
				this.setting.dropdownMenu.setOptions(this.setting.options);
			break;
			case 'ListPanel':
				this.setting.dropdownMenu = ass.UIFactory.createInstance("ListPanel",{
					items:this.setting.options,
					isPage:true,
					styleCss:'dropdown-menu dropdown-menu-right '+oDropDownMenu.getUICss(),
					pageConfig:{
						pageSize:5
					}
				});
			break;
		}
		return this.setting.dropdownMenu;
	},
	setDropdownMenuObj:function(){
		var dropdownMenu = this.getDropdownMenu();
		if(!this.setting.dropdownMenuObj && dropdownMenu){
			this.setting.dropdownMenuObj = $("#"+dropdownMenu.getID());
			dropdownMenu.setViewObj(this.setting.dropdownMenuObj);
		}
	},
	getDropdownMenuObj:function(){
		this.setting.dropdownMenuObj = $("#"+this.getDropdownMenu().getID());
		return this.setting.dropdownMenuObj; 
	},
	getDropDownMenuContentId:function(){
		if(!this.setting.dropDownMenuContentId){
			this.setting.dropDownMenuContentId = ass.uid() +"_dropDownMenu_content";
		}
		return this.setting.dropDownMenuContentId;
	},
	getDropDownMenuContentObj:function(){
		this.setting.dropDownMenuContentObj = $("#"+this.getDropDownMenuContentId());
		return this.setting.dropDownMenuContentObj;
	},
	parseOptions:function(){
		var tpl = null;
		var dropdownMenu = this.getDropdownMenu();
		var dropDownMenuContentId = this.getDropDownMenuContentId();
		if(dropdownMenu){
			tpl =dropdownMenu.createTpl();
		}
		tpl = "<div class='ass-view-Combo-dropDownMenu-content'  id='"+dropDownMenuContentId+"'>"+((tpl)?tpl:"")+"</div>";
		return tpl;
	},
	getCaretButtonId:function(){
		if(!this.setting.caretButtonId){
			this.setting.caretButtonId = ass.uid()+"_caret";
		}
		return this.setting.caretButtonId;
	},
	getCaretButtonObj:function(){
		var caretButtonId = this.getCaretButtonId();
		this.setting.caretButtonObj = $("#"+caretButtonId);
		return this.setting.caretButtonObj;
	},
	hideCareButton:function(){
		this.getCaretButtonObj().hide();
	},
	createInputGroupButtonTpl:function(){
		var tpl = "<div class='ass-view-caret' id='"+this.getCaretButtonId()+"'>";
		tpl += "<span class='caret'></span>";
		tpl += "</div>";
		return ass.UICompoent.Text.prototype.createInputGroupButtonTpl.call(this,tpl);
	},
	getInputGroupBtnWidthStyle:function(){
		var style = null;
		if(this.setting.width){
			var w = this.setting.width - ((this.setting.labelWidth)?this.setting.labelWidth:0);
			style = "style='width:"+w+"px'";
		}
		return (style)?style:"";		
	},
	createTpl:function(){
		var tpl = this.createlabelTpl();
		tpl += "<div class='input-group'  "+this.getInputGroupBtnWidthStyle()+">";
		tpl += this.createInputTpl();
		tpl += this.createInputGroupButtonTpl();
		tpl += this.parseOptions();
		tpl += "</div>";
		tpl =  this.createInputGroupTpl(tpl);
		return tpl;
	},
	setValue:function(value){  
		var opts = this.findOpts({key:'value',value:value});
		if(opts.length==1 && opts[0].value.length>0){
			var opt = opts[0];
			var inputObj = this.getInputObj();
			var hiddenObj = this.getHiddenObj();
			var text = opt.text;
			opt.checked = true;
			this.setting.value = opt.value;
			inputObj.val(text);
			hiddenObj.val(this.getValue());
		}
	},
	getCheckedOpt:function(){
		var opt = null;
		if(this.setting.options){
			var options = this.setting.options;
			for(var i=0; i<options.length; i++){
				var option = options[i];
				if(option.checked)
				{
					opt = option;
					break;
				}
			}
		}
		return opt;
	},
	getText:function(){
		var text = null;
		var inputObj = this.getInputObj();
		text = inputObj.val();
		text = (text)?text:"";
		return text;
	},
	addSearchHandler:function(eventHandler){
		if(this.isSearch()){
			eventHandler.pushSrcObj({
				target:this.getInputObj(),
				type:'keyup',
				handler:(function(_this){
					return function(){
						var text = _this.getText();
						var opts = _this.findOpts({key:'text',value:text,action:"fuzzy"});
						var dropDownMenuType = _this.getDropDownMenuType();
						var dropDownMenu = _this.getDropdownMenu();
						var tpl = "";
						if(opts.length>0){
							switch(dropDownMenuType){
								case 'ListPanel':
									var pageConfig = {dataCount:opts.length,pageSize:5};
									dropDownMenu.setItems(opts);
									dropDownMenu.getPage().reset(pageConfig);
									dropDownMenu.refresh();
								break;
							}
						}
						dropDownMenu.show();
					}
				})(this)
			});
		}
	},
	addViewOutClickEventHandler:function(eventHandler){
		eventHandler.pushSrcObj({
			target:$(document),
			type:'click',
			handler:(function(_this){
				return function(event){
					var inpuType = $(event.target).attr('type')
					if(!inpuType || inpuType.toUpperCase()!='COMBO'){
						_this.getDropdownMenu().hide();
					}
				}
			})(this)
		});
	},
	addViewObjEventHandler:function(){
		var eventHandler = this.getEventHandler();
		eventHandler.pushSrcObj({
			target:this.getInputObj(),
			type:'click',
			handler:(function(_this){
				return function(){
					_this.getDropdownMenu().toggle();
				}
			})(this)
		});
		this.addSearchHandler(eventHandler);
		this.addViewOutClickEventHandler(eventHandler);
		eventHandler.stopPropagation(this.getDropDownMenuContentObj(),'click');
		eventHandler.bind();
	},
	//支持模糊（fuzzy）查找与精确（exact ）查找
	findOpts:function(p){
		var opts = [];
		var key = (p.key)?p.key:"value";
		var value = (p.value)?p.value:"";
		var action = (p.action)?p.action:'exact';
		var options = this.setting.options;
		for(var i=0; i<options.length; i++){
			var option = options[i];
			var val = option[key];
			switch(action){
				case 'exact':
					if(val === value){
						opts.push(option);
					}
				break;
				case 'fuzzy':
					if(val.indexOf(value)!=-1){
						opts.push(option);
					}
				break;
			}
		}
		if(opts.length == 0){
			var emptyOption = this.getEmptyOption('当前暂无匹配结果');
			opts.push(emptyOption);
		}
		return opts;
	},
	renderAfter:function(){
		ass.UICompoent.Text.prototype.renderAfter.call(this);
		this.setDropdownMenuObj();
		this.getDropdownMenu().renderAfter();
		this.addViewObjEventHandler();
		if(this.isHideInputGroupButton()){
			this.hideCareButton();
		}
	}
},ass.UICompoent.Text);

module.exports = ass.UICompoent.Combo;
