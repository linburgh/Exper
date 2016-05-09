var ass = require('./ass_core.js');

ass.Template = ass.proto({
	parseToTpl:function(dataSource,itemTpl){
		var tpl = "";
		if(dataSource){
			for(var i=0; i<dataSource.length; i++){
				var d = dataSource[i];
				if(typeof itemTpl == 'function'){
					itemTpl =itemTpl(d);
				}
				tpl += ass.template(itemTpl,d);
			}
		}
		return tpl;
	},
	analyzeTpl:function(_tpl,obj){
		var str = _tpl;
		var _obj = obj;
		str=str.replace(/(\r\n|\n)/g,"\\n");
		str=str.replace(/(\")/g,"\\\"");
		str=str.replace(/\{obj\.([^}?]+)\?([^:]*):([^}]*)\}/g,"\"+("+_obj+".$1?\"$2\":\"$3\")+\"");
		str=str.replace(/\{obj\.([^}]*)\}/g,"\"+("+_obj+".$1||'')+\"");
		str=str.replace(/#([$a-z0-9_\[\]]+)#/gi,"\"+("+_obj+".$1||'')+\"");
		str=str.replace(/\{obj\}/g,"\"+"+_obj+"+\"");
		str=str.replace(/\{-obj/g,"{"+_obj+"");
		str="return \""+str+"\";";
		return Function(_obj,str);
	}
});

ass.template = function(){
	if(!ass.TemplateUitl){
		ass.TemplateUitl = new ass.Template();
	}
	return ass.TemplateUitl;
}
