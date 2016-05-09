var ass = require('../../ass_core.js');
ass.UICompoent.BaseView = require("../baseView/ass.ui.baseView.js");
ass.UICompoent.Panel = require("./ass.ui.panel.js");

ass.protoUI({
	name:'ListItem',
	$init:function(config){
		ass.UICompoent.View.prototype.$init.call(this,config);
		this.setting.text = (config.text)?config.text:"";
		this.setting.value = config.value;
		this.setting.width = config.width;
		this.setting.title = config.title;
		this.setting.itemTpl = config.itemTpl;
		this.setting.iconCls = (config.iconCls)?config.iconCls:"";
		this.setting.handler =(config.handler)?config.handler:function(){};
		this.setting.tpl = this.createTpl();
	},
	createTpl:function(){
		var valueTpl = this.getValueTpl(this.setting.value);
		var styleDefine = this.createStyleDefine();
		var text = this.setting.text;
		var title = (this.setting.title)?"title='"+this.setting.title+"'":"";
		var tpl = "<a  class='list-group-item "+this.getUICss()+" "+this.setting.iconCls+" "+this.getCursorCls()+"'  "+valueTpl+"  "+styleDefine+"  "+title+" id='"+this.setting.id+"'>";
		tpl += text
		tpl += "</a>";
		tpl = (this.setting.itemTpl)?this.setting.itemTpl:tpl;
		return tpl;
	},
	getText:function(){
		return this.setting.text;
	},
	setText:function(Text){
		this.getViewObj().append(Text);
	},
	renderAfter:function(){
		ass.UICompoent.BaseView.prototype.renderAfter.call(this);
		var viewObj = this.getViewObj();
		var eventHandler = this.getEventHandler();
		if(viewObj){
			eventHandler.pushSrcObj({
				target:viewObj,
				type:'click',
				handler:this.setting.handler
			});
			eventHandler.bind();
		}
	}
},ass.UICompoent.BaseView);

ass.protoUI({
	name:'ListPanel',
	layout:{vertical:'vertical',horizontal:'horizontal'},
	$init:function(config){
		ass.UICompoent.Panel.prototype.$init.call(this,config);
		this.setting.items = (config.items)?config.items:[];
		this.setting.layout = (config.layout)?config.layout:this.layout.vertical;
		switch(this.setting.layout){
			case this.layout.horizontal:
				this.setting.lineItemNum = config.lineItemNum;
			break;
		}
		this.setting.footerTpl = this.createPageTpl({data:this.setting.items,pageConfig:config.pageConfig});
		this.setting.layoutTpl = this.parseItems();
		this.setting.tpl = this.createTpl();
	},
	getlayoutCss:function(){
		return ass.UICompoent.StyleCss.getClassPrefix() + "-"+this.setting.layout;
	},
	load:function(){
		var data = [];
		var oPage =  this.getPage();
		if(!oPage)
		{
			return this.setting.items;
		}
		oPage.setData(this.setting.items);
		oPage.setCallBack(
			(function(_this){
				return function(){
					_this.refresh();
				}
			})(this)
		);
		data = oPage.load();
		return data;
	},
	setItems:function(items){
		this.setting.items = items;
	},
	getlistGroupId:function(){
		if(!this.setting.listGroupId){
			this.setting.listGroupId = ass.uid() + "_list_group";
		}
		return this.setting.listGroupId;
	},
	getlistGroupObj:function(){
		this.setting.listGroupObj = $("#"+this.getlistGroupId());
		return this.setting.listGroupObj;
	},
	createItemTpls:function(){
		var tpl = null;
		if(this.setting.items){
			var items = this.load();
			var layoutCss = this.getlayoutCss();
			var listGroupId = this.getlistGroupId();
			this.setting.oItems = [];
			tpl = "<div class='list-group "+layoutCss+" ass-view-clearfix'  id='"+listGroupId+"'>";
			for(var i=0; i<items.length; i++){
				var item = items[i];
				if(item){
					var oItem = ass.UIFactory.createInstance('ListItem',item);
					var itemTpl = oItem.getTpl();
					this.setting.oItems.push(oItem);
					tpl += itemTpl;
				}
				
			}
			tpl += "</div>";
		}
		
		tpl = (tpl)?tpl:"";
		return tpl;
	},
	refresh:function(){
		var listGroupObj = this.getlistGroupObj();
		if(listGroupObj){
			var itemTpl = this.createItemTpls();
			var rowViewObj = this.getRowViewObj();
			listGroupObj.remove();
			rowViewObj.append(itemTpl);
			this.doItemObjsRenderAfter();
		}
	},
	getRowViewObj:function(){
		if(this.setting.oRowView && !this.setting.rowViewObj){
			this.setting.oRowView.setViewObj();
			this.setting.rowViewObj = this.setting.oRowView.getViewObj();
		}
		return this.setting.rowViewObj;
	},
	parseItems:function(){
		var tpl = this.createItemTpls();
		if(tpl){
			this.setting.oRowView =  ass.UIFactory.createInstance("RowView");
			tpl =this.setting.oRowView.createTpl(tpl);
		}
		tpl = (tpl)?tpl:"";
		return tpl;
	},
	countItemWidth:function(){
		if(this.setting.lineItemNum){
			var listWidth = this.getViewObj().width();
			if(listWidth>0){
				var itemNum = this.setting.lineItemNum;
				var itemWidth = Math.round(listWidth/itemNum);
				for(var i=0; i<this.setting.oItems.length; i++){
					var oItem = this.setting.oItems[i];
					var itemObj = $("#"+oItem.getID());
					var paddingleft  =parseInt(itemObj.css("padding-left").replace("px",""));
					var paddingRight  =parseInt(itemObj.css("padding-right").replace("px",""));
					var padding = paddingleft+paddingleft;
					var _itemWidth = itemWidth-padding*2;
					oItem.setViewObj(itemObj);
					itemObj.attr("style","overflow-x:hidden;text-overflow:ellipsis ");
					itemObj.width(_itemWidth);
				}
			}
		}
	},
	doItemObjsRenderAfter:function(){
		if(this.setting.oItems){
			for(var i=0; i<this.setting.oItems.length; i++){
				this.setting.oItems[i].renderAfter();
			}
		}
		this.countItemWidth();
	},
	render:function(){
		ass.UICompoent.Panel.prototype.render.call(this);
	},
	renderAfter:function(){
		ass.UICompoent.Panel.prototype.renderAfter.call(this);
		this.doItemObjsRenderAfter();
	}
},ass.UICompoent.Panel);

module.exports = ass.UICompoent.ListPanel;
