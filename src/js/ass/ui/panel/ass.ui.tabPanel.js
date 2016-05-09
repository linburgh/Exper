var ass = require('../../ass_core.js');
ass.UICompoent.BaseView = require("../baseView/ass.ui.baseView.js");
ass.UICompoent.Panel = require("./ass.ui.panel.js");

ass.protoUI({
	name:'TabItem',
	$init:function(config){
		ass.UICompoent.BaseView.prototype.$init.call(this,config);
		this.setting.text = config.text;
		this.setting.loader = (config.loader)?config.loader:false;
		this.setting.tpl =  this.createTpl();
		this.setting.handler = config.handler;
	},
	createItemTpl:function(){
		var tpl = "<li class='"+this.getUICss()+"'  id='"+this.setting.id+"'>";
		tpl += "<a class='"+this.getCursorCls()+"'><span class='ass-view-TabItem-text'>"+this.setting.text+"</span></a>";
		tpl += "</li>";
		return tpl;
	},
	createTpl:function(){
		return this.createItemTpl();
	},
	bindEventHandler:function(config){
		var viewObj = this.getViewObj();
		if(viewObj){
			var $node = $("a",viewObj);
			var type = config.type;
			var handler = config.handler;
			ass.$event($node,type,handler);
		}
	},
	doOnClickAction:function(){
		var viewObj = this.getViewObj();
		if(viewObj){
			$("a",viewObj).trigger("click");
		}
	},
	setBodyRender:function(isBodyRender){
		this.setting.isBodyRender = isBodyRender;
	},
	isBodyRender:function(){
		return (this.setting.isBodyRender)?this.setting.isBodyRender:false;
	},
	isLoader:function(){
		return (this.setting.loader)?this.setting.loader:false;
	},
	appendSpinner:function(){
		var viewObj = this.getViewObj();
		var tabItemTextObj = $('.ass-view-TabItem-text',viewObj);
		var config = {
			width:2,
			lines:5,
			length:4,
			radius:3,
			className:'ass-view-spinner',
			speed:2.2,
			top:0,
			left:0
		}
		var loaderObj = null;
		viewObj.append("<div class='ass-view-loader'>&nbsp;</div>");
		loaderObj = this.getLoader();
		loaderObj.insertBefore(tabItemTextObj);
		this.setting.spinner = new Spinner(config).spin(loaderObj.get(0));
	},
	cancelSpinner:function(){
		var loaderObj = this.getLoader();
		loaderObj.remove();
	},
	getLoader:function(){
		var viewObj = this.getViewObj();
		this.setting.loaderObj =  $('.ass-view-loader',viewObj);
		return this.setting.loaderObj;
	},
	renderAfter:function(){
		ass.UICompoent.BaseView.prototype.renderAfter.call(this);
		(this.setting.handler)?this.bindEventHandler({type:'click',handler:this.setting.handler}):false;
	}
},ass.UICompoent.BaseView);

ass.protoUI({
	name:'TabPanel',
	tags:{TabBody:'TabBody'},
	$init:function(config){
		ass.UICompoent.Panel.prototype.$init.call(this,config);
		this.setting.items = config.items;
		this.setting.oItems = this.createItemObjs();
		this.setting.isAutoActived = (config.isAutoActived)?config.isAutoActived:false;
		this.setting.activedIndex = (config.activedIndex)?config.activedIndex:0;
		this.setting.layoutTpl = this.parseItems();
		this.setting.tpl = this.createTpl();
	},
	isAutoActived:function(){
		return  this.setting.isAutoActived;
	},
	createItemObjs:function(){
		var itemObjs = [];
		if(this.setting.items){
			var items = this.setting.items;
			for(var i=0; i<items.length; i++){
				var item = items[i];
				var oItem = null;
				var itemTpl = null;
				var tabId =item.id = (item.id)?item.id:ass.uid();
				var handler = item.handler;
				item.handler = (function(_tabId,_this,_item,_handler){
					return function(){
						var oTabItem = _this.getTabItemById(_tabId);
						var isBodyRender = oTabItem.isBodyRender();
						_this.showTab(_tabId);
						if(!isBodyRender){
							var layoutTpl = oTabItem.getlayoutTpl();
							var tabBodyContainerObj = _this.getTabBodyContainerObj(_tabId);
							$("*",tabBodyContainerObj).remove();
							tabBodyContainerObj.append(layoutTpl);
							oTabItem.setBodyRender(true);
							(_handler)?_handler(oTabItem):false;
						}
					}
				})(tabId,this,item,handler);				
				oItem = ass.UIFactory.createInstance("TabItem",item);
				itemObjs.push(oItem);
			}
		}
		return itemObjs;
	},
	parseItems:function(){
		var tpl = null;
		if(this.setting.oItems){
			var oItems = this.setting.oItems;
			var tabBodyTpl = "";
			tpl = "<ul class='nav nav-tabs'>";
			for(var i=0; i<oItems.length; i++){
				var oItem = oItems[i];
				var tabId = oItem.getID();
				itemTpl = oItem.getTpl();
				tpl += itemTpl;
				tabBodyTpl += this.createTabBody(null,tabId);
			}
			tpl += "</ul>";
			tpl += tabBodyTpl;
		}
		tpl = (tpl)?tpl:"";
		return tpl;
	},
	showTabBody:function(tabId){
		$("#"+tabId+"_"+this.tags.TabBody).show();
	},
	showTab:function(tabId){
		var oTabItem = null;
		this.hideAllTabs();
		this.addActiveTabCls(tabId);
		this.setActivedTabId(tabId);
		this.showTabBody(tabId);
		oTabItem = this.getTabItemById(tabId);
		if(oTabItem){
			var index = this.getTabItemIndex(oTabItem);
			var isBodyRender = oTabItem.isBodyRender();
			var isLoader = oTabItem.isLoader();
			if(!isBodyRender && isLoader){
				oTabItem.appendSpinner();
			}
			this.setActivedIndex(index);
			ass.$Async({
				fn:(function(_oTabItem){
						return function(){
							var isLoader = _oTabItem.isLoader(); 
							(isLoader)?_oTabItem.cancelSpinner():false;
						}
					})(oTabItem)
				}
			);
		}
	},
	addActiveTabCls:function(tabId){
		$("#"+tabId).addClass("active");
	},
	removeActiveTabCls:function(tabId){
		$("#"+tabId).removeClass("active");
	},
	hideTab:function(tabId){
		$("#"+tabId+"_"+this.tags.TabBody).hide();
		this.removeActiveTabCls(tabId);
	},
	hideAllTabs:function(){
		for(var i=0; i<this.setting.oItems.length; i++){
			var oItem = this.setting.oItems[i];
			var tabId = oItem.getID();
			oItem.cancelSpinner();
			this.hideTab(tabId);
		}
	},
	createTabBody:function(_tpl,_id){
		var cls = ass.UICompoent.StyleCss.getClassPrefix()+"-"+this.tags.TabBody;
		var tabBodyObjId = this.getTabBodyObjId(_id);
		var tpl = "<div  class='"+cls+"'  id='"+tabBodyObjId+"'>";
		tpl += this.createContainerTpl((_tpl)?_tpl:"");
		tpl += "</div>";
		return tpl;
	},
	getTabBodyObjId:function(tabId){
		return tabId+"_"+this.tags.TabBody;
	},
	getTabBodyObj:function(tabId){
		return $("#"+this.getTabBodyObjId(tabId));
	},
	getTabBodyContainerObj:function(tabId){
		var tabBodyObj = this.getTabBodyObj(tabId);
		return $("#"+this.getTabBodyObjId(tabId)+" > .container-fluid");
	},
	bindTabItemEventHandler:function(){
		if(this.setting.oItems){
			for(var i=0; i<this.setting.oItems.length; i++){
				var oItem = this.setting.oItems[i];
				oItem.renderAfter();
			}
		}
	},
	getTabItemById:function(tabId){
		var oItem = null;
		var oItems = this.setting.oItems;
		for(var i=0; i<oItems.length; i++){
			var _oItem = oItems[i];
			var id = _oItem.getID();
			if(id===tabId){
				oItem = _oItem;
				break;
			}
		}
		return oItem;
	},
	getTabItemIndex:function(oItem){
		var index = 0;
		var oItems = this.setting.oItems;
		for(var i=0; i<oItems.length; i++){
			var _oItem = oItems[i];
			var id = _oItem.getID();
			if(id===oItem.getID()){
				index = i;
				break;
			}
		}
		return index;
	},
	getTabItem:function(index){
		var oTabItem = null;
		var oItems = this.setting.oItems;
		oTabItem = (oItems.length>0)?oItems[index]:null;
		return oTabItem;
	},
	showActiviedTab:function(){
		var oTabItem = this.getTabItem(this.setting.activedIndex);
		if(oTabItem){
			var tabId = oTabItem.getID();
			this.showTab(tabId);
			oTabItem.doOnClickAction();
		}
	},
	setActivedIndex:function(index){
		this.setting.activedIndex = index;
	},
	getActivedIndex:function(){
		return this.setting.activedIndex;
	},
	setActivedTabId:function(activedTabId){
		this.setting.activedTabId = activedTabId;
	},
	getActivedTabId:function(){
		return this.setting.activedTabId;
	},
	getCurrentActivedTab:function(){
		var index = this.getActivedIndex();
		var oItem = this.getTabItem(index);
		return oItem;
	},
	isTabActived:function(tabId){
		var isActived = false; 
		var currActviedTab = this.getTabItemById(tabId);
		isActived = currActviedTab.getViewObj().hasClass('active');
		return isActived;
	},
	showAutoActivedTab:function(){
		if(this.isAutoActived()){
			this.showActiviedTab();
		}
	},
	getAllTabItem:function(){
		return this.setting.oItems;
	},
	setScrollBodyObjs:function(){
		if(this.setting.scrollBodyObjs){
			var scrollBodyObjs = this.setting.scrollBodyObjs;
			for(var i=0; i<scrollBodyObjs.length; i++){
				var scrollBodyObj = scrollBodyObjs[i];
				scrollBodyObjs[i] = this.getTabBodyObj(scrollBodyObj);
			}
		}
	},
	renderAfter:function(){
		var scrollBodyObjs = null;
		ass.UICompoent.Panel.prototype.renderAfter.call(this);
		this.bindTabItemEventHandler();
		this.showAutoActivedTab();
		this.addScrollToEndEventHandler();
	}
},ass.UICompoent.Panel);

module.exports = ass.UICompoent.TabPanel;
