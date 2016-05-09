var ass = require('../../ass_core.js');
ass.UICompoent.Panel = require("./ass.ui.panel.js");

ass.protoUI({
	name:'TimelineItem',
	$init:function(config){
		ass.UICompoent.Panel.prototype.$init.call(this,config);
		this.setting.label = config.label;
		this.setting.head = config.head;
		this.setting.icon = config.icon;
		this.setting.iconCls = (config.iconCls)?config.iconCls:"";
		this.setting.grouplabel = (config.grouplabel)?config.grouplabel:false;
		this.setting.body = (config.body)?config.body:"";
		this.setting.tpl = this.createTpl();
	},
	createTpl:function(){
		var grouplabel = (this.setting.grouplabel)?"timeline-group-label":"";
		var cls = this.getUICss()+" "+grouplabel;
		var tpl = "<li class='timeline-inverted "+cls+" '  id='"+this.setting.id+"'>";
		tpl += (this.setting.label)?this.createlabelTpl():"";
		tpl += "<div class='timeline-badge    "+this.setting.iconCls+"'>";
		tpl += (this.setting.icon)?this.setting.icon:"";
		tpl += "</div>";
		tpl += "<div class='timeline-panel'>";
		tpl += (this.setting.head)?this.createHeadTpl():"";
		tpl += this.createBodyTpl();
		tpl += "</div>";
		tpl += "</li>";
		return tpl;
	},
	createlabelTpl:function(){
		return "<div class='timeline-label'>"+this.setting.label+"</div>";
	},
	createHeadTpl:function(){
		return "<div class='timeline-heading'>"+this.setting.head+"</div>";
	},
	createBodyTpl:function(){
		return "<div class='timeline-body'>"+this.setting.body+"</div>";
	}
},ass.UICompoent.Panel);

ass.protoUI({
	name:"Timeline",
	$init:function(config){
		ass.UICompoent.Panel.prototype.$init.call(this,config);
		this.setting.footer = config.footer;
		this.setting.isPage = (config.isPage)?config.isPage:false;
		this.setting.oPage = this.createPageInstance({pageConfig:config.pageConfig});
		this.setting.items = (config.items)?config.items:[];
		this.setting.tpl = this.createTpl();
	},
	createTitle:function(){
		var tpl = null;
		if(this.setting.title){
			tpl = "<div class='page-header'>";
			tpl += " <h1 >"+this.setting.title+"</h1>";
			tpl += "</div>";
		}
		tpl = (tpl)?tpl:"";
		return tpl;
	},
	createPageInstance:function(config){
		var oPage = null;
		this.setting.pageConfig = this.initPageConfig(config);
		if(this.setting.pageConfig){
			oPage = ass.UIFactory.createInstance('Page',this.setting.pageConfig);
		}
		return oPage;
	},
	createFooter:function(){
		var tpl = null;
		var footer = this.setting.footer;
		if(footer){
			tpl = "<div class='ass-view-Timeline-page-footer'>";
			tpl += " <h5>"+footer+"</h5>";
			tpl += "</div>";
		}
		tpl = (tpl)?tpl:"";
		return tpl;
	},
	createTpl:function(){
		var  tpl = this.createTitle();
		tpl += this.parseItems();
		tpl += this.createFooter();
		tpl  = "<div class='"+ass.UICompoent.StyleCss.getView()+"' id='"+this.setting.id+"'>"+this.createContainerTpl(tpl)+"</div>";
		return tpl;
	},
	getTimelinelistObjId:function(){
		if(!this.setting.timelinelistObjId){
			this.setting.timelinelistObjId = ass.uid()+"_timelinelist";
		}
		return this.setting.timelinelistObjId;
	},
	getTimelinelistObj:function(){
		this.setting.timelinelistObj = $("#"+this.getTimelinelistObjId());
		return this.setting.timelinelistObj;
	},
	getGroupCollect:function(items){
		var collect = {};
		var gIndexs = [];
		
		$.each(items,(function(_this,gIndexs,_collect){
			return function(index,item){
				var grouplabel = item.grouplabel;
				var label = item.label;
				if(grouplabel){
					(!_collect[index])?(_collect[index]={grouplabel:label,items:[]}):false;
					gIndexs.push(index);
				}
			}
		})(this,gIndexs,collect));
		
		for(var i=0; i<gIndexs.length; i++){
			var gIndex = gIndexs[i];
			var nextGIndex = gIndexs[i+1];
			var start = gIndex+1;
			var end = ( i+1 != gIndexs.length )?nextGIndex:items.length;
			for(var j=start; j<end; j++){
				var item = items[j];
				collect[gIndex].items.push(item);
			}
		}
		
		return collect;
	},		
	appendItems:function(targetItems,sourceItems,isAppend){
		var _targetItems = null;
		if(isAppend && targetItems.length>0)
		{
			var items = [];
			var targetCollect = this.getGroupCollect(targetItems);
			var sourceCollect = this.getGroupCollect(sourceItems);
		
			for(var tKey in targetCollect){
				var _items = [];
				var item = {};
				var tCollect = targetCollect[tKey];
				var tGrouplabel = tCollect.grouplabel;
				item.label = tGrouplabel;
				item.grouplabel = true;
				_items.push(item);
				for(var sKey in sourceCollect){
					var sCollect =sourceCollect[sKey]; 
					var sGrouplabel = sCollect.grouplabel;
					if(tGrouplabel == sGrouplabel)
					{
						tCollect.items = tCollect.items.concat(sCollect.items);
						_items = _items.concat(tCollect.items);
					}
				}
				items = items.concat(_items);
			}
			_targetItems=  items;
		}
		else
		{
			_targetItems = sourceItems;
		}
		return _targetItems;
	},
	setItems:function(p){
		var items = p.items;
		var isAppend = (p.isAppend)?p.isAppend:false;
		if(items){
			var targetItems = this.setting.items;
			var sourceItems = items;
			this.setting.items = this.appendItems(targetItems,sourceItems,isAppend);
		}
	},
	removeTimelinelistObj:function(){
		this.getTimelinelistObj().remove();
	},
	load:function(){
		this.refresh();
	},
	refresh:function(){
		var listTpl = this.parseItems();
		this.removeTimelinelistObj();
		this.getContainerObj().append(listTpl);
	},
	parseItems:function(){
		var tpl = null;
		var cls = this.getUICss();
		if(this.setting.items  && this.setting.items.length > 0){
			tpl = "<ul class='timeline "+cls+"'  id='"+this.getTimelinelistObjId()+"'>";
			for(var i=0; i<this.setting.items.length; i++){
				var item = this.setting.items[i];
				var oItem = ass.UIFactory.createInstance("TimelineItem",item);
				tpl += oItem.createTpl();
			}
			tpl += "</ul>";
		}
		tpl = (tpl)?tpl:"";
		return tpl;
	},
	removeAllItems:function(){
		this.setting.items = [];
		this.refresh();
	}
},ass.UICompoent.Panel);

module.exports = ass.UICompoent.Timeline;
