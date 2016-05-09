var ass = require('../../ass_core.js');
ass.UICompoent.ListPanel = require("../panel/ass.ui.listPanel.js");
ass.UICompoent.BaseView = require("./ass.ui.baseView.js");

ass.protoUI({
	name:'Sidebar',
	itemType:{item:'item',group:'group'},
	$init:function(config){
		ass.UICompoent.BaseView.prototype.$init.call(this,config);
		this.setting.items = (config.items)?config.items:[];
		this.setting.items = this.createItems();
		this.setting.tpl = this.createTpl();
	},
	createItems:function(){
		if(this.setting.items){
			var items = this.setting.items;
			for(var i=0; i< items.length; i++){
				var item = items[i];
				var type = (item.type)?item.type:this.itemType.item;
				switch(type){
					case this.itemType.group:
						var children = item.children;
						var title = item.title;
						var oGrouplist = ass.UIFactory.createInstance("ListPanel",{
							title:title,
							items:children,
							styleCss:'ass-view-Sidebar-listItem ass-view-Sidebar-listItem-group'
						});
						item.itemTpl = oGrouplist.getTpl();
					break;
					case this.itemType.item:
						item.styleCss = 'ass-view-Sidebar-listItem';
					break;
				}
			}
		}
		return this.setting.items;
	},
	getContainerObj:function(){
		return this.setting.listPanel.getContainerObj();
	},
	parseItems:function(){
		var tpl = null;
		if(this.setting.items){
			var items = this.setting.items;
			this.setting.listPanel = ass.UIFactory.createInstance("ListPanel",{
				items:items,
				styleCss:'ass-view-Sidebar-list'
			});
			tpl = this.setting.listPanel.getTpl();
		}
		
		tpl = (tpl)?tpl:"";
		return tpl;
	},
	createTpl:function(){
		return "<div class='"+this.getUICss()+"'  id='"+this.setting.id+"'>"+this.parseItems()+"</div>";
	},
	setParentObjPosition:function(){
		var parentObj = this.getViewObj().parent();
		if(parentObj.prop('tagName').toUpperCase()!='BODY'){
			var paddingTop = this.getBodyPaddingTop();
			parentObj.addClass("ass-view-poistion-fix-init");
			parentObj.addClass("ass-view-fix-top");
		}
	},
	renderAfter:function(){
		this.resize({h:$(document).height()- this.getBodyPaddingTop()});
		this.setParentObjPosition();
		ass.UICompoent.BaseView.prototype.renderAfter.call(this);
	}
},ass.UICompoent.BaseView);

module.exports = ass.UICompoent.Sidebar;