var ass = require('../ass_core.js');

ass.UICompoent.LayoutMgr = ass.proto({
	$init:function(config){
		if(config.view){
			this.setting.view = config.view;
			this.setting.rowViews = this.setting.view.getRowViews();
			this.setting.columnViews = this.setting.view.getColumnViews();
			this.setting.rowViews = this.createRowViews();
			this.setting.columnViews = this.createColumnViews();
		}
	},
	setRowViews:function(rowConfigs){
		this.setting.rowViews = rowConfigs;
	},
	getRowView:function(){
		return this.setting.rowViews;
	},
	setColumnViews:function(colConfigs){
		this.setting.columnViews = colConfigs;
	},
	getColumnView:function(){
		return this.setting.columnViews;
	},
	createChildView:function(name,config){
		return ass.UIFactory.createInstance(name,config);
	},
	createRowView:function(){
		var args = arguments[0];
		var isFun = ass.utils.isAssProto(args);
		var oChildView = (isFun)?args:this.createChildView(args.name,args);		
		return ass. UIFactory.createInstance("RowView",{childView:oChildView});
	},
	createColumnView:function(){
		var col = {};
		var args = arguments[0];
		var isFun = ass.utils.isAssProto(args);
		var oChildView = (isFun)?args:this.createChildView(args.name,args);
		args.config = (args.config)?args.config:{};
		col.weight = (args.config.weight)?args.config.weight:12;
		col.offset = args.config.offset;
		col.padding = args.config.padding;
		col.childView = oChildView;
		return ass.UIFactory.createInstance("ColumnView",col);
	},
	createRowViews:function(){
		var views = [];
		var rowViews = this.setting.rowViews;
		for(var i=0; i<rowViews.length; i++){
			var oRowView = this.createRowView(rowViews[i]);
			views.push(oRowView);
		}
		return views;
	},
	createColumnViews:function(){
		var views = [];
		var columnViews = this.setting.columnViews;
		for(var i=0; i<columnViews.length; i++){
			var oColumnView = this.createColumnView(columnViews[i]);
			views.push(oColumnView);
		}
		return views;
	},
	parseRowViews:function(){
		var tpl = null;
		if(this.setting.rowViews){
			tpl =(this.setting.rowViews.length>0)?"":null;
			for(var i=0; i<this.setting.rowViews.length; i++){
				tpl += this.setting.rowViews[i].getTpl();
			}
		}
		tpl = (tpl)?tpl:"";
		return tpl;
	},
	parseColumnViews:function(){
		var tpl = null;
		if(this.setting.columnViews){
			tpl = (this.setting.columnViews.length>0)?"":null;
			if(this.setting.columnViews.length>0){
				var oRowView = ass. UIFactory.createInstance("RowView");
				for(var i=0; i<this.setting.columnViews.length; i++){
					tpl += this.setting.columnViews[i].getTpl();
				}
				tpl = oRowView.createTpl(tpl);
				oRowView.setTpl(tpl);
			}
		}
		tpl = (tpl)?tpl:"";
		return tpl;
	},
	parse:function(){
		var tpl = this.parseRowViews();
		tpl += this.parseColumnViews();
		return tpl;
	},
	layoutAfter:function(){
		var oViews = [];
		oViews = oViews.concat(this.setting.rowViews).concat(this.setting.columnViews);
		for(var i=0; i<oViews.length; i++){
			var oView = oViews[i];
			if(oView){
				var oChildView = oView.getChildView();
				if(oChildView){
					(oChildView.getlayoutMgr)?(oChildView.getlayoutMgr().layoutAfter()):false;
					oChildView.renderAfter();
				}
			}
						
		}
	}
});

ass.UICompoent.createLayoutMgr = function(config){
	return new ass.UICompoent.LayoutMgr(config);
}
