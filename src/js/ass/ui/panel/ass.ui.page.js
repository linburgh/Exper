var ass = require('../../ass_core.js');
ass.UICompoent.BaseView = require('../baseView/ass.ui.baseView.js');

ass.protoUI({
	name:'Page',
	$init:function(config){
		ass.UICompoent.BaseView.prototype.$init.call(this,config);
		this.initPage(config);
	},
	initPage:function(config){
		config = (config)?config:{};
		this.setting.dataCount = (config.dataCount)?config.dataCount:0;
		this.setting.pageSize = (config.pageSize)?config.pageSize:10;
		this.setting.type = (config.type)?config.type:'simple';
		this.setPageCount(this.setting.dataCount,this.setting.pageSize);
		this.setting.tpl = this.createTpl();
	},
	setCallBack:function(fn){
		this.setting.callBack =fn; 
	},
	getCallBack:function(){
		return this.setting.callBack;
	},
	getPageSize:function(){
		return this.setting.pageSize;
	},
	setPageCount:function(dataCount,pageSize){
		this.setting.pageCount = Math.ceil(dataCount/pageSize);
	},
	getPageCount:function(){
		return this.setting.pageCount;
	},
	createSimpleTpl:function(){
		var pageCount = this.getPageCount();
		var currPageIndex = this.getCurrPageIndex();
		var currPageIndexId = this.getCurrPageIndexId();
		var tpl = "<li class='paginate_button'>";
		tpl += "<a>当前第<span id='"+currPageIndexId+"'>"+currPageIndex+"</span>/"+pageCount+"页</a>";
		tpl += "</li>";
		return tpl;
	},
	setCurrPageIndex:function(currPageIndex){
		var currPageIndexObj = this.getCurrPageIndexObj();
		this.setting.currPageIndex = currPageIndex;
		if(currPageIndexObj){
			currPageIndexObj.text(this.setting.currPageIndex );
		}
	},
	getCurrPageIndex:function(){
		return (this.setting.currPageIndex)?this.setting.currPageIndex:0;
	},
	getPreBtnId:function(){
		if(!this.setting.preBtnId){
			this.setting.preBtnId = ass.uid()+"_page_previous";
		}
		return this.setting.preBtnId;
	},
	getCurrPageIndexId:function(){
		if(!this.setting.currPageIndexId){
			this.setting.currPageIndexId = ass.uid()+"_page_next";
		}
		return this.setting.currPageIndexId;
	},
	getCurrPageIndexObj:function(){
		this.setting.currPageIndexObj = $("#"+this.getCurrPageIndexId());
		return this.setting.currPageIndexObj;
	},
	getNextBtnId:function(){
		if(!this.setting.nextBtnId){
			this.setting.nextBtnId = ass.uid()+"_page_next";
		}
		return this.setting.nextBtnId;
	},
	getPreBtnObj:function(){
		this.setting.preBtnObj = $("#"+ this.getPreBtnId());
		return this.setting.preBtnObj;
	},
	getNextBtnObj:function(){
		this.setting.nextBtnObj = $("#"+this.getNextBtnId());
		return this.setting.nextBtnObj;
	},
	getPaginationId:function(){
		if(!this.setting.paginationId){
			this.setting.paginationId = ass.uid()+"_pagination";
		}
		return this.setting.paginationId;
	},
	getPaginationObj:function(){
		this.setting.paginationObj = $("#"+this.getPaginationId());
		return this.setting.paginationObj;
	},
	createPageBtnGroupTpl:function(_tpl){
		var preBtnId = this.getPreBtnId();
		var nextBtnId = this.getNextBtnId();
		var paginationId = this.getPaginationId();
		var tpl = "<ul class='pagination'  id='"+paginationId+"'>";
		tpl += "<li class='paginate_button previous'><a class='"+this.getCursorCls()+"'  id='"+preBtnId+"'>上一页</a></li>";
		tpl +=(_tpl)?_tpl:'';
		tpl += "<li class='paginate_button next'><a class='"+this.getCursorCls()+"'   id='"+nextBtnId+"'>下一页</a></li>";
		tpl += "</ul>";
		return tpl;
	},
	getTypeCls:function(){
		return "ass-view-Page-"+this.setting.type;
	},
	createPageTpl:function(){
		var tpl = null;
		if(this.setting.pageSize){
			var pageCount = this.getPageCount();
			this.setCurrPageIndex((pageCount>0)?1:0);
			switch(this.setting.type){
				case "simple":
					tpl = this.createSimpleTpl();
				break;
			}
			tpl = this.createPageBtnGroupTpl(tpl);
		}
		return (tpl)?tpl:'';
	},
	createTpl:function(tpl){
		return "<div class='"+this.getUICss()+"  "+this.getTypeCls()+"' id='"+ this.setting.id+"'>"+this.createPageTpl()+"</div>";
	},
	setData:function(data){
		this.setting.data = data;
	},
	getData:function(){
		return this.setting.data;
	},
	//根据当前页加载数据
	load:function(){
		var pageData = [];
		var data = this.getData();
		var currPageIndex = this.getCurrPageIndex();
		var pageSize = this.getPageSize();
		var dataStartIndex = (currPageIndex-1)*pageSize;
		var dataEndIndex = currPageIndex*pageSize;
		for(var i=dataStartIndex; i<dataEndIndex; i++){
			pageData.push(data[i]);
		}
		return pageData;
	},
	doCallBack:function(){
		var callBack = this.getCallBack();
		(callBack)?callBack():false;
	},
	goPrePage:function(){
		var currPageIndex = this.getCurrPageIndex();
		currPageIndex = (currPageIndex>1)?(currPageIndex-1):currPageIndex;
		this.setCurrPageIndex(currPageIndex);
		this.doCallBack();
	},
	goNextPage:function(){
		var currPageIndex = this.getCurrPageIndex();
		var pageCount = this.getPageCount();
		currPageIndex = (currPageIndex<pageCount)?currPageIndex+1:currPageIndex;
		this.setCurrPageIndex(currPageIndex);
		if(!this.isEnd()){
			this.doCallBack();
		}	
	},
	isEnd:function(){
		var result = false;
		var currPageIndex = this.getCurrPageIndex();
		var pageCount = this.getPageCount();
		result  =  (currPageIndex === pageCount);
		return result;
	},
	addPageEventHandler:function(){
		var viewObj = this.getViewObj();
		if(viewObj){		
			var eventHandler = this.getEventHandler();
			var preBtnObj = this.getPreBtnObj();
			var nextBtnObj = this.getNextBtnObj();
			eventHandler.pushSrcObj({
				target:preBtnObj,
				type:'click',
				handler:(function(_this){
					return function(){
						_this.goPrePage();
					}
				})(this)
			});
			eventHandler.pushSrcObj({
				target:nextBtnObj,
				type:'click',
				handler:(function(_this){
					return function(){
						_this.goNextPage();
					}
				})(this)
			});
			eventHandler.bind();
		}
	},
	//重置Page各属性值
	reset:function(config){
		this.getPaginationObj().remove();
		this.initPage(config);
		this.getViewObj().append(this.createPageTpl());
		this.addPageEventHandler();
	},
	renderAfter:function(){
		ass.UICompoent.BaseView.prototype.renderAfter.call(this);
		this.addPageEventHandler();
	}
},ass.UICompoent.BaseView)

module.exports = ass.UICompoent.Page