var ass = require('../../ass_core.js');
ass.UICompoent.Modal = require("./ass.ui.modal.js");

ass.protoUI({
	name:'Process',
	$init:function(config){
		this.$initAction(config);
		this.setting.processCount = (config.processCount)?config.processCount:0;
		this.setTitle(config.title);
		this.setting.tpl = this.createTpl();
	},
	createTpl:function(){
		var processCount = this.getProcessCount();
		var processText = this.getProcessText();
		var tpl = "<h4>"+processText+"</h4>";
		tpl += "<div class='progress'>";
		tpl += "<div class='progress-bar progress-bar-striped active' role='progressbar' aria-valuenow='45' aria-valuemin='0' aria-valuemax='100' style='width:"+processCount+"%'>";
		tpl +="<span class='sr-only'>"+processCount+"% Complete</span>";
		tpl += "</div>";
		tpl += "</div>";
		this.setting.headHidden = true;
		this.setting.footerHidden = true;
		return ass.UICompoent.Modal.prototype.createTpl.call(this,tpl);
	},
	getProcessText:function(processText){
		return (this.setting.processText)?this.setting.processText:"请稍后，数据加载中.......";
	},
	setProcessCount:function(processCount){
		this.setting.processCount = processCount;
	},
	getProcessCount:function(){
		return this.setting.processCount;
	},
	refresh:function(){
		this.setProcessCount(100);
		if(this.setting.viewObj){
			this.setting.processBar.attr("style","width:"+this.getProcessCount()+"%");
			$(".sr-only",this.setting.processBar).text(this.getProcessCount()+"%Complete");
		}
	},
	show:function(){
		this.getViewObj().modal({backdrop:false});
		ass.DomHelper.getBody().append(this.createModalBackDropTpl());
		this.refresh();
	},
	hide:function(){
		this.getViewObj().modal('hide');
		$(".modal-backdrop",ass.DomHelper.getBody()).remove();
	},
	render:function(){
		this.parseTpl();
		this.setViewObj();
		this.setting.viewObj.addClass(ass.UICompoent.StyleCss.getUICss(this.name));
		this.setting.processBar =$(".progress-bar",this.setting.viewObj);
	}
},ass.UICompoent.Modal);

ass.process = function(config){
	if(!ass.UICompoent.ProcessView){
		ass.UICompoent.ProcessView = ass.UIFactory.createInstance("Process",config);
		ass.UICompoent.ProcessView.render();
	}
	return ass.UICompoent.ProcessView;
}

module.exports = ass.UICompoent.Process;
