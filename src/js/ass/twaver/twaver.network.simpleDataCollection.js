

$TWaver.NetWork.SimpleDataCollection = ass.$extend({
	$init:function(config){
		this.setting.hiddenElementIds = (config.hiddenElementIds)?config.hiddenElementIds:[];
		this.initData(config.dataSource);
	},
	initData:function(dataSource){
		this.setDataSource(dataSource);
		if(this.getDataSource()){
			this.setting.root = this.getRoot();
			this.setting.imageDefs = this.getImageDefs();
			this.setting.styleDefs = this.getStyleDefs();
			this.loadElementDatas();

		}
	},
	getRoot:function(){
		var root = null;
		var dataSource = this.getDataSource();
		if(dataSource)
		{
			root = ass.toArray(this.setting.dataSource.ELEMENT);
		}
		return root;
	},
	getImageDefs:function(){
		var imageDefs = null;
		var dataSource = this.getDataSource();
		imageDefs = (dataSource.DEFS)?ass.toArray(dataSource.DEFS.IMAGES):null;
		return imageDefs;
	},
	setHiddenElements:function(hiddenElementIds){
		this.setting.hiddenElementIds = (hiddenElementIds)?hiddenElementIds:[];
	},
	getHiddenElements:function(){
		return this.setting.hiddenElementIds;
	},
	filterHiddenElementData:function(elementDatas){
		var newElementDatas = [];
		var hiddenElementIds = this.getHiddenElements();
		for(var i=0; i<elementDatas.length; i++){
			var isHidden = false;
			var elementData = elementDatas[i];
			var elementDataId = elementData.id;
		
			for(var j=0; j<hiddenElementIds.length; j++){
				var elementId = hiddenElementIds[j];
				if(elementId == parseInt(elementDataId)){
					isHidden = true;
					break;
				}
			}

			if(!isHidden){
				newElementDatas.push(elementData);
			}
		}

		newElementDatas = (newElementDatas.length>0)?newElementDatas:elementDatas;

		return newElementDatas;
	},

	loadElementDatas:function(){
		var elementDatas = this.setting.elementDatas = this.getRoot();
		this.setting.groupDatas = (this.setting.groupDatas)?this.setting.groupDatas:[];
		this.setting.nodeDatas = (this.setting.nodeDatas)?this.setting.nodeDatas:[];
		this.setting.linkDatas = (this.setting.linkDatas)?this.setting.linkDatas:[];

		for(var i=0; i<elementDatas.length; i++){
			var elementData = elementDatas[i];
			var classNameKey = TWAVER.CONST.SIMPLE_ELEMENT_ATTR.ELEMENT_CLASS;
			var elementClass =(elementData[classNameKey])?elementData[classNameKey].toUpperCase():TWAVER.CONST.ELEMENT_CLASS.NODE;
			switch(elementClass){
				case TWAVER.CONST.ELEMENT_CLASS.GROUP:
					this.setting.groupDatas.push(elementData);
				break;
				case TWAVER.CONST.ELEMENT_CLASS.NODE:
					this.setting.nodeDatas.push(elementData);
				break;
				case TWAVER.CONST.ELEMENT_CLASS.LINK:
					this.setting.linkDatas.push(elementData);
				break;
			}
		}

		this.setting.groupDatas = this.filterHiddenElementData(this.setting.groupDatas);
		this.setting.nodeDatas = this.filterHiddenElementData(this.setting.nodeDatas);
		this.setting.linkDatas = this.filterHiddenElementData(this.setting.linkDatas);
	},
	getStyleDefs:function(){
		return (this.setting.dataSource.DEFS)?ass.toArray(this.setting.dataSource.DEFS.STYLES):null;
	},
	getStyleDefById:function(styleId){
		var styleDef = null;
		if(this.setting.styleDefs){
			var styleDefs = this.setting.styleDefs;
			for(var i=0; i<styleDefs.length; i++){
				var _styleDef = styleDefs[i];
				var _styleId  = _styleDef.id;
				if(_styleId == styleId){
					styleDef = _styleDef;
					break;
				}
			}
		}
		return styleDef;
	},
	getElementDataSourceById:function(id){
		var result = null;
		var dataSource = this.getDataSource();
		var elements = dataSource["ELEMENT"];
		for(var i=0; i<elements.length; i++){
			var element = elements[i];
			if(element.id === id){
				result = element;
				break;
			}
		}

		return result;
	}
},$TWaver.NetWork.DataCollection);