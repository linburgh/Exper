$TWaver.NetWork.DataBox = ass.proto({
	$init:function(config){
		this.setDataCollection((config.dataCollection)?config.dataCollection:{});
		this.setting.imageResource = config.imageResource;
		this.setting.box = new twaver.ElementBox();
		this.setting.netWork = config.netWork;
		this.parseToElements();
	},
	setDataCollection:function(dataCollection){
		this.setting.dataCollection = dataCollection;
	},
	getDataCollection:function(){
		return this.setting.dataCollection;
	},
	getStyleUtils:function(){
		if(!this.setting.styleUtils){
			this.setting.styleUtils = $TWaver.NetWork.getStyleUtils();
		}
		return this.setting.styleUtils;
	},
	getBox:function(){
		return this.setting.box;
	},
	findBoxElementByName:function(name){
		var elements = this.getElementsByName(name);
		this.getBox().getSelectionModel().setSelection(elements);
		return elements; 
	},
	setImageResourceInstance:function(imageResource){
		this.setting.imageResource = imageResource;
	},
	getImageResourceInstance:function(){
		return this.setting.imageResource;
	},
	parseToElements:function(){
		if(this.setting.dataCollection){
			this.setting.elements = [];
			var dataCollection = this.setting.dataCollection;
			var groupDatas = dataCollection.getElementDatas(TWAVER.CONST.ELEMENT_CLASS.GROUP);
			var nodeDatas = dataCollection.getElementDatas(TWAVER.CONST.ELEMENT_CLASS.NODE);
			var linkDatas = dataCollection.getElementDatas(TWAVER.CONST.ELEMENT_CLASS.LINK);
			
			this.setting.nodes = this.parseToNodes(nodeDatas);
			this.setting.groups = this.parseToGroups(groupDatas);
			this.setting.links = this.parseToLinks(linkDatas);
			
			this.setElements(this.setting.elements.concat(this.setting.groups).concat(this.setting.nodes).concat(this.setting.links));

			this.makeUpGroups();
			this.makeUpLinkRelations();
		}
	},
	
	getLinks:function(){
		return this.setting.links;
	},
	getNodes:function(){
		return this.setting.nodes;
	},
	getGroups:function(){
		return this.setting.groups;
	},

	setElements:function(elements){
		this.setting.elements = elements;
	},
	getElements:function(){
		return this.setting.elements;
	},
	setElementChildren:function(element){
		var childrenIds = element.getClient(TWAVER.CONST.ELEMENT_ATTR.CHILDREN_ID);
		var _childrenIds = childrenIds.split(",");
		for(var i=0; i<_childrenIds.length; i++){
			var xId = _childrenIds[i];
			var child = this.getElementByXId(xId);
			if(child){
				var elementClass = child.getClient(TWAVER.CONST.ELEMENT_ATTR.ELEMENT_CLASS);
				if(elementClass != TWAVER.CONST.ELEMENT_CLASS.LINK){
					element.addChild(child);
					if(elementClass == TWAVER.CONST.ELEMENT_CLASS.GROUP){
						this.setElementChildren(child);
					}
				}
			}
			
		}
	},
	makeUpGroups:function(){
		if(this.setting.groups){
			var groups = this.setting.groups;
			for(var i=0; i<groups.length; i++){
				this.setElementChildren(groups[i]);
			}
		}
	},
	
	makeUpLinkRelations:function(){
		if(this.setting.links){
			var links = this.setting.links;
			for(var i=0; i<links.length; i++){
				var l = links[i];
				var fromToId = l.getClient(TWAVER.CONST.ELEMENT_ATTR.FROM_TO_ID); 
				var fromId = fromToId.split("#")[0];
				var toId = fromToId.split("#")[1];
				var from  = this.getElementByNodeId(fromId);
				var to = this.getElementByNodeId(toId);
				if(from != null  && to != null){
					l.setFromNode(from);
					l.setToNode(to);
				}
				
			}
		}
	},
	getElementByXId:function(xId){
		var element = null;
		if(this.setting.elements){
			var elements = this.setting.elements;
			for(var i=0; i<elements.length; i++){
				var _element = elements[i];
				var _xId = _element.getClient(TWAVER.CONST.ELEMENT_ATTR.X_ID);  
				if(_xId == xId){
					element = _element;
					break;
				}
			}
		}
		
		return element;
	},
	getElementByNodeId:function(nodeId){
		var element = null;
		if(this.setting.elements){
			var elements = this.setting.elements;
			for(var i=0; i<elements.length; i++){
				var _element = elements[i];
				var _nodeId = _element.getClient(TWAVER.CONST.ELEMENT_ATTR.NODE_ID);
				if(nodeId == _nodeId){
					element = _element;
					break;
				}
			}
		}
		return element;
	},
	getElementsByName:function(name){
		var results = [];
		if(this.setting.elements){
			var elements = this.setting.elements;
			for(var i=0; i<elements.length; i++){
				var _element = elements[i];
				var elementName = _element.getName();
				if(elementName.indexOf(name)!=-1){
					results.push(_element);
				}
			}
		}
		return results;
	},
	getDataElementName:function(data){
		return  data[TWAVER.CONST.ELEMENT_ATTR.NAME];
	},
	getDataElementXID:function(data){
		return data[TWAVER.CONST.ELEMENT_ATTR.X_ID];
	},
	getDataElementNodeId:function(data){
		return data[TWAVER.CONST.ELEMENT_ATTR.NODE_ID];
	},
	getDataElementChildrenId:function(data){
		return data[TWAVER.CONST.ELEMENT_ATTR.CHILDREN_ID];
	},
	getDataElementGroupId:function(data){
		return data[TWAVER.CONST.ELEMENT_ATTR.GROUP_ID];
	},
	getDataElementClass:function(data){
		return data[TWAVER.CONST.ELEMENT_ATTR.ELEMENT_CLASS];
	},
	getDataElementLocation:function(data){
		var x = data[TWAVER.CONST.ELEMENT_ATTR.BX] || 0;
		var y =  data[TWAVER.CONST.ELEMENT_ATTR.BY] || 0; 
		return x+","+y;
	},
	getDataElementRelationId:function(data){
		return data[TWAVER.CONST.ELEMENT_ATTR.RELATION_ID];
	},
	getDataElementFromToId:function(data){
		return data[TWAVER.CONST.ELEMENT_ATTR.FROM_TO_ID];
	},
	getDataElementStyleScript:function(data){
		return data[TWAVER.CONST.ELEMENT_ATTR.STYLE_SCRIPT];
	},
	setElementLocation:function(element,x,y){
		var _x = parseInt(x);
		var _y = parseInt(y);
		element.setLocation(_x,_y);
	},
	parseToGroups:function(groupDatas){
		
		var groups = [];
		var styles=[
			['#99caea', 6, [1,0], '#eaf6fd'],
			['#899cc1', 4, [16, 3], '#e5ebf7'],
			['#7c73a0', 2, [16, 3], '#e3dbed'],
			['#704b84', 1, [12, 3], '#e3cedb'],
			['#6a1e74', 0.3, [12, 3], '#e1bbcb'],
		];
		var style = styles[2];
		if(groupDatas){
			for(var i=0; i<groupDatas.length; i++){
				var groupData = groupDatas[i];
				var name = this.getDataElementName(groupData);
				var xId = this.getDataElementXID(groupData);
				var childrenIds = this.getDataElementChildrenId(groupData);
				var groupId = this.getDataElementGroupId(groupData);
				var elementClass = this.getDataElementClass(groupData);
				var location = this.getDataElementLocation(groupData);
				var nodeId = this.getDataElementNodeId(groupData);
				var g = new twaver.Group();
				var styleScript = this.getDataElementStyleScript(groupData);
				var styles = [
						{key:'group.alpha',value:0.1},
						{key:'group.fill',value:false},
						{key:'group.deep',value:0},
						{key:'group.outline.width',value:style[1]},
						{key:'group.outline.color', value:style[0]},
						{key:'group.shape', value:'roundrect'},			
						{key:'select.style',value:'none'},
						{key:'vector.outline.pattern', value:style[2]},
						{key:'label.font', value:'12px "Microsoft Yahei"'},
						{key:'group.padding', value:5},
						{key:'label.position', value:'topright.topleft'}
					];
				styles = (styleScript!="-1")?styles.concat(styleScript):styles;
				g.setExpanded(true);
				g.setName(name);
				g.setClient(TWAVER.CONST.ELEMENT_ATTR.NODE_ID,nodeId);
				g.setClient(TWAVER.CONST.ELEMENT_ATTR.X_ID,xId);
				g.setClient(TWAVER.CONST.ELEMENT_ATTR.CHILDREN_ID,childrenIds);
				g.setClient(TWAVER.CONST.ELEMENT_ATTR.GROUP_ID,groupId);
				g.setClient(TWAVER.CONST.ELEMENT_ATTR.ELEMENT_CLASS,elementClass);
				this.setElementLocation(g,location.split(",")[0],location.split(",")[1]);
				this.doElementStyleFormat(g,styles);
				this.setting.box.add(g);
				groups.push(g);
			}
		}
		return groups;
	},
	parseToNodes:function(nodeDatas){
		var nodes = [];
	
		if(nodeDatas){
			for(var i=0; i<nodeDatas.length; i++){
				var nodeData = nodeDatas[i];
				var name = this.getDataElementName(nodeData);
				var xId = this.getDataElementXID(nodeData);
				var groupId = this.getDataElementGroupId(nodeData);
				var elementClass = this.getDataElementClass(nodeData)
				var nodeId = this.getDataElementNodeId(nodeData);				
				var location = this.getDataElementLocation(nodeData);
				var use = ass.toArray(nodeData.use);
				var imageUrl = this.getUseImageUrl(use);
				var imageBase64Info = this.getUseImageBase64Info(use);
				var imageName = ass.utils.getImageName(imageUrl);
				var n = new twaver.Node();
				var styleScript = this.getDataElementStyleScript(nodeData);
				var styles = [
						{key:"select.style",value:'border'},
						{key:"select.color",value:'rgba(57, 96, 212, 0.44)'}
					];
				styles = (styleScript!="-1")?styles.concat(styleScript):styles;
				if(name.length>4)
				{
					n.setName(name.substring(0,4)+"...");
					n.setToolTip(name);
				}
				else
				{
					n.setName(name);	
				}
				
				if(imageName)
				{
					this.getImageResourceInstance().registerImage({url:imageUrl,imageBase64Info:imageBase64Info,svg:this.getNetWork()});
					n.setImage(imageName);
				}
				this.doElementStyleFormat(n,styles);
				n.setClient(TWAVER.CONST.ELEMENT_ATTR.X_ID,xId);
				n.setClient(TWAVER.CONST.ELEMENT_ATTR.GROUP_ID,groupId);
				n.setClient(TWAVER.CONST.ELEMENT_ATTR.ELEMENT_CLASS,elementClass);
				n.setClient(TWAVER.CONST.ELEMENT_ATTR.NODE_ID,nodeId);
				this.setElementLocation(n,location.split(",")[0],location.split(",")[1]);
				
				this.setting.box.add(n);
				nodes.push(n);
			}
		}
		return nodes;
	},
	getNetWork:function(){
		return this.setting.netWork;
	},
	getUseImageUrl:function(uses){
		var imageUrl = null;
		if(uses){
			for(var i=0; i<uses.length; i++){
				var use = uses[i];
				var id = use["xlink:href"].split("#")[1];
				if(id.toUpperCase().indexOf("IMG")!=-1){
					var imageDef = this.setting.dataCollection.getImageDefById(id);
					imageUrl = imageDef["xlink:href"];
					break;
				}
			}
		}
		return imageUrl;
	},
	getUseImageBase64Info:function(uses){
		var base64Info = null;
		if(uses){
			for(var i=0; i<uses.length; i++){
				var use = uses[i];
				var id = use["xlink:href"].split("#")[1];
				if(id.toUpperCase().indexOf("IMG")!=-1){
					var imageDef = this.setting.dataCollection.getImageDefById(id);
					base64Info = "data:image/png;base64,"+imageDef['base64Info'];
					break;
				}
			}
		}
		return base64Info;
	},
	parseToLinks:function(linkDatas){
		var links = [];
		if(linkDatas){
			for(var i=0; i<linkDatas.length; i++){
				var linkData = linkDatas[i];
				var name = this.getDataElementName(linkData);
				var xId =this.getDataElementXID(linkData);
				var relationId = this.getDataElementRelationId(linkData);
				var groupId = this.getDataElementGroupId(linkData);
				var elementClass = this.getDataElementClass(linkData);
				var fromToId = this.getDataElementFromToId(linkData);
				var styleScript = this.getDataElementStyleScript(linkData);
				var l = new twaver.Link();
				var styles = [
						{key:'arrow.to', value:true},
						{key:'arrow.from.color', value:'#658dc1'},
		                {key:'arrow.to.color', value:'#658dc1'},
		                {key:'link.width', value:'2'},
			            {key:'link.from.position', value:'top.top'},
			            {key:'link.to.position', value:'bottom.bottom'}
					]
				styles = (styleScript!="-1")?styles.concat(styleScript):styles;
				l.setName(name);
				l.setClient(TWAVER.CONST.ELEMENT_ATTR.X_ID,xId);
				l.setClient(TWAVER.CONST.ELEMENT_ATTR.RELATION_ID,relationId);
				l.setClient(TWAVER.CONST.ELEMENT_ATTR.GROUP_ID,groupId);
				l.setClient(TWAVER.CONST.ELEMENT_ATTR.ELEMENT_CLASS,elementClass);
				l.setClient(TWAVER.CONST.ELEMENT_ATTR.FROM_TO_ID,fromToId);
				this.doElementStyleFormat(l,styles);
				this.setting.box.add(l);
				links.push(l);
			}
		}
		return links;
	},
	doElementStyleFormat:function(element,styleScript){
		if(styleScript!="-1"){
			var styleUtils = this.getStyleUtils();
			styleUtils.setElements([{el:element,styles:styleScript}]);
			styleUtils.format();
		}
	},
	getLinkByFromId:function(formId){
		var elements = [];
		if(this.setting.elements){
			var _elements = this.setting.elements;
			for(var i=0; i<_elements.length; i++){
				var element = _elements[i];
				var formToId = element.getClient(TWAVER.CONST.ELEMENT_ATTR.FROM_TO_ID);  
				if(formToId && formToId.split("#")[0] == formId){
					elements.push(element);
				}
			}
		}

		return elements;
	},
	getLinkByFromToId:function(formToId){
		var element = null;
		if(this.setting.elements){
			var elements = this.setting.elements;
			for(var i=0; i<elements.length; i++){
				var _element = elements[i];
				var _formToId = _element.getClient(TWAVER.CONST.ELEMENT_ATTR.FROM_TO_ID);  
				if(_formToId == formToId){
					element = _element;
					break;
				}
			}
		}
		return element;
	}
});

// module.exports = $TWaver.NetWork.DataBox;