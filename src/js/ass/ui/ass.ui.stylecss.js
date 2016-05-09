var ass = require('../ass_core.js');

ass.UICompoent.StyleCss=ass.proto({
	$init:function(){
		this.setting.classPrefix = "ass-view";
	},
	getUICss:function(name){
		return this.getClassPrefix()+"-"+name;
	},
	getView:function(){
		return this.getClassPrefix();
	},
	getClassPrefix:function(){
		return this.setting.classPrefix;
	},
	getViewBorderNone:function(){
		return this.getClassPrefix()+"-border-none";
	},
	getCursorCls:function(){
		return this.getClassPrefix()+"-pointer";
	},
	getViewPaddingNone:function(){
		return this.getClassPrefix()+"-padding-none";
	}
});

ass.UICompoent.StyleCss = (function(){
	return new ass.UICompoent.StyleCss();
})();

module.exports = ass.UICompoent.StyleCss;
