$TWaver.NetWork.DataCollection = ass.proto({
	$init:function(config){
		this.initData(config.dataSource[0].svg);
	},
	initData:function(dataSource){
		this.setDataSource(dataSource);
		if(this.getDataSource()){
			this.setting.root = this.getRoot();
			this.setting.imageDefs = this.getImageDefs();
			this.loadElementDatas();
		}
	},
	setDataSource:function(dataSource){
		this.setting.dataSource = dataSource;
	},
	getDataSource:function(){
		return this.setting.dataSource;
	},
	setNetWork:function(netWork){
		this.setting.netWork = netWork;
	},
	getNetWork:function(){
		return this.setting.netWork;
	},
	setImageResourceInstance:function(imageResource){
		this.setting.imageResource = imageResource;
	},
	getImageResourceInstance:function(){
		return this.setting.imageResource;
	},
	getImageDefs:function(){
		return (this.setting.dataSource)?ass.toArray(this.setting.dataSource.defs.image):null;
	},
	getGItems:function(){
		return ass.toArray(this.getRoot().g);
	},
	getImageDefById:function(imageId){
		var imageDef = null;
		if(this.setting.imageDefs){
			for(var i=0; i<this.setting.imageDefs.length; i++){
				var _imageDef = this.setting.imageDefs[i];
				var _imageId = _imageDef.id;
				if(_imageId == imageId){
					imageDef = _imageDef;
					break;
				}
			}
		}
		return imageDef;
	},
	getRoot:function(){
		var root = null;
		if(this.setting.dataSource){
			var dataSource = this.setting.dataSource.g;
			for(var i=0; i<dataSource.length; i++){
				var g = dataSource[i];
				var id = g.id;
				if(id==TWAVER.CONST.ELEMENT_ROOT_ID){
					root = g;
					break;
				}
			}
		}
		return root;
	},
	loadElementDatas:function(){
		var g = this.getGItems();
		var elementDatas = this.setting.elementDatas = g;
		this.setting.groupDatas = (this.setting.groupDatas)?this.setting.groupDatas:[];
		this.setting.nodeDatas = (this.setting.nodeDatas)?this.setting.nodeDatas:[];
		this.setting.linkDatas = (this.setting.linkDatas)?this.setting.linkDatas:[];
		for(var i=0; i<elementDatas.length; i++){
			var elementData = elementDatas[i];
			var elementClass =(elementData.elementClass)?elementData.elementClass.toUpperCase():TWAVER.CONST.ELEMENT_CLASS.NODE;
			elementData.elementClass = elementClass;
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
	},
	getElementSize:function(key){
		var size = 0;
		var data = this.getElementDatas(key);
		size = (data)?data.length:size;
		return size;
	},
	getElementDatas:function(key){
		var datas = null;
		switch(key){
			case TWAVER.CONST.ELEMENT_CLASS.GROUP:
				datas = this.setting.groupDatas;
			break;
			case TWAVER.CONST.ELEMENT_CLASS.NODE:
				datas = this.setting.nodeDatas;
			break;
			case TWAVER.CONST.ELEMENT_CLASS.LINK:
				datas = this.setting.linkDatas;
			break;
		}
		
		return datas;
	}
	
});
