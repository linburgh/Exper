var ass = require('../../ass_core.js');
ass.UICompoent.BaseView = require("../baseView/ass.ui.baseView.js");
ass.UICompoent.Panel = require("./ass.ui.panel.js");

ass.protoUI({
	name:'ColumnModal',
	$init:function(config){
		ass.UICompoent.BaseView.prototype.$init.call(this,config);
		this.setting.columns = (config.columns)?config.columns:[];
		this.setting.dataStore = (config.dataStore)?config.dataStore:[];
		this.setting.tpl = this.createTpl();
	},
	createTheadTpl:function(){
		var tpl = null;
		if(this.setting.columns){
			var columns = this.setting.columns;
			tpl = "<thead>";
			tpl += "<tr>";
			for(var i=0; i<columns.length; i++){
				var column = columns[i];
				var header = column.header;
				tpl += "<th>"+header+"</th>";
			}
			tpl += "</tr>";
			tpl += "</thead>";
		}
		tpl = (tpl)?tpl:"";
		return tpl;
	},
	creatTbodyTpl:function(){
		var tpl = null;
		if(this.setting.columns){
			var columns = this.setting.columns;
			var data  = this.setting.dataStore.getData();
			tpl = "<tbody>";
			for(var td=0; td<data.length; td++){
				var d = data[td];
				tpl += "<tr>";
				for(var col = 0; col<columns.length;col++){
					var index = columns[col].dataIndex;
					var cls = columns[col].cls;
					var text = d[index];
					cls = (cls)?"class='"+cls+"'":"";
					tpl += "<td "+cls+">"+text+"</td>";
				}
				tpl += "</tr>";
			}
			
			tpl += "</tbody>";
		}
		tpl = (tpl)?tpl:"";
		return tpl;
	}, 
	createTpl:function(){
		var tpl = "<table class='table table-striped table-bordered'>";
		tpl += this.createTheadTpl();
		tpl += this.creatTbodyTpl();
		tpl += "</table>";
		return tpl;
	}
},ass.UICompoent.BaseView);

ass.protoUI({
	name:"GridPanel",
	$init:function(config){
		ass.UICompoent.Panel.prototype.$init.call(this,config);
		this.setting.border = 'none';
		this.setting.dataStore = this.getDataStore({data:config.data})
		this.setting.columnModal = this.getColumnModal({dataStore:this.setting.dataStore,columns:config.columns});
		this.setting.bodyTpl = this.getColumnTpl();
		this.setting.tpl = this.createTpl();
	},
	getDataStore:function(config){
		if(!this.setting.dataStore){
			this.setting.dataStore = new ass.StoreCompoent.DataStore(config);
		}
		return this.setting.dataStore;
	},
	getColumnModal:function(config){
		if(!this.setting.columnModal){
			this.setting.columnModal = new ass.UICompoent.ColumnModal(config);
		}
		return this.setting.columnModal;
	},
	getColumnTpl:function(){
		return this.setting.columnModal.getTpl();
	}
},ass.UICompoent.Panel);

module.exports = ass.UICompoent.GridPanel;
