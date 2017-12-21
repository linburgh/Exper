

$TWaver.NetWork.SimpleDataBox = ass.$extend({
	
	$init:function(config){
		this.setting.selfLinks = (config.selfLinks)?config.selfLinks:[];
		this.setNodeConfig(config.nodeConfig);
		this.setLinkConfig(config.linkConfig);
		$TWaver.NetWork.DataBox.prototype.$init.call(this,config);
	},

	getSelfLinks:function(){
		return this.setting.selfLinks;
	},
	
	getDataElementLocation:function(data){
		data.location = (data.location)?data.location:{};
		var x = (data.location.x)?data.location.x: 0;
		var y =  (data.location.y)?data.location.y:0; 
		return x+","+y;
	},
	
	setNodeConfig:function(nodeConfig){
		this.setting.nodeConfig = (nodeConfig)?nodeConfig:{type:TWAVER.CONST.NODE_TYPE.NORMAL};
	},
	
	getNodeConfig:function(){
		return this.setting.nodeConfig;	
	},

	setLinkConfig:function(linkConfig){
		this.setting.linkConfig = (linkConfig)?linkConfig:{type:TWAVER.CONST.LINK_TYPE.NORMAL};
	},

	getLinkConfig:function(){
		return this.setting.linkConfig;
	},
	
	parseToNodes:function(nodeDatas){
		var nodes = [];
	
		if(nodeDatas){
			for(var i=0; i<nodeDatas.length; i++){
				var nodeData = nodeDatas[i];
				var name = this.getDataElementName(nodeData);
				var elementClass = this.getDataElementClass(nodeData);
				var elementId = this.getDataElementId(nodeData);				
				var location = this.getDataElementLocation(nodeData);
				var oICON = this.getDataElementICON(nodeData);
				var oStyle = this.getDataElementStyle(nodeData);
				var imageUrl = oICON["url"];
				var imageBase64Info = oICON["base64"];
				var imageName = oICON["name"];
				var styleScript = oStyle["script"];
				var styles = [
						{key:"select.style",value:'border'},
						{key:"select.color",value:'rgba(57, 96, 212, 0.44)'}
					];
				var nodeConfig = this.getNodeConfig();
				var nodeType = nodeConfig.type;
				var n = null;
				
				switch(nodeType){
					case TWAVER.CONST.NODE_TYPE.NORMAL:
						n = new twaver.Node();
						n.setName(name);
						if(imageName)
						{
							this.getImageResourceInstance().registerImage({url:imageUrl,imageBase64Info:imageBase64Info,svg:this.getNetWork()});
							n.setImage(imageName);
						}
					break;
					case TWAVER.CONST.NODE_TYPE.HTML:
						n = new twaver.HTMLNode();
						var tpl = nodeConfig.tpl;
						var imageName = this.getNodeConfigImageName(nodeConfig,nodeData);
						n.setName(tpl(nodeData));
						n.setImage(imageName);
					break;
				}
				
				styles = (styleScript!="-1")?styles.concat(styleScript):styles;
				styles = (nodeConfig.styles)?styles.concat(nodeConfig.styles):styles;
				
				this.doElementStyleFormat(n,styles);
				n.setClient(TWAVER.CONST.SIMPLE_ELEMENT_ATTR.ELEMENT_CLASS,elementClass);
				n.setClient(TWAVER.CONST.SIMPLE_ELEMENT_ATTR.ELEMENT_ID,elementId);
				this.setElementLocation(n,location.split(",")[0],location.split(",")[1]);
				
				this.setting.box.add(n);
				nodes.push(n);
			}
		}
		return nodes;
	},
	getNodeConfigImageName:function(nodeConfig,nodeData) {
		var imageName = null;
		if(typeof nodeConfig.image == 'function')
		{
			imageName = nodeConfig.image(nodeData);
		}
		else
		{
			imageName = nodeConfig.image;
		}


		imageName = (imageName)?imageName:"";
		return imageName;
	},
	parseToLinks:function(linkDatas){
		var links = [];
		if(linkDatas){
			for(var i=0; i<linkDatas.length; i++){
				var l = null;
				
				var styles = null;
				var linkData = linkDatas[i];
				var styleId = linkData['style'];
				var relationId = this.getDataElementId(linkData);
				var elementClass = this.getDataElementClass(linkData);
				var fromToId = this.getDataElementFromToId(linkData);
				var styleScript = this.getStyleScriptById(styleId);

				var linkConfig = this.getLinkConfig();
				var linkType = linkConfig.type;
				var linkConfigStyles = linkConfig.styles;

				switch(linkType){
					case TWAVER.CONST.LINK_TYPE.NORMAL:
						l = new twaver.Link();
					break;
					case TWAVER.CONST.LINK_TYPE.HTML:
						var tpl = linkConfig.tpl;
						l = new twaver.HTMLLink();
						(tpl.name)?(l.setName(tpl.name(linkData))):false;
						(tpl.name2)?(l.setName2(tpl.name2(linkData))):false;
					break;
				}

				styles  = (styleScript!="-1")?[].concat(styleScript):[];

				if(linkConfigStyles){
					linkConfigStyles = (typeof linkConfigStyles == 'function')?linkConfigStyles(linkData):linkConfigStyles;
					styles = styles.concat(linkConfigStyles);
				}


				l.setClient(TWAVER.CONST.SIMPLE_ELEMENT_ATTR.ELEMENT_CLASS,elementClass);
				l.setClient(TWAVER.CONST.SIMPLE_ELEMENT_ATTR.ELEMENT_ID,relationId);
				l.setClient(TWAVER.CONST.SIMPLE_ELEMENT_ATTR.FROM_TO_ID,fromToId);
				this.doElementStyleFormat(l,styles);
				this.setting.box.add(l);
				links.push(l);
			}
		}
		return links;
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
				var styleId = groupData['style'];
				var name = this.getDataElementName(groupData);
				var elementClass = this.getDataElementClass(groupData);
				var groupId = this.getDataElementId(groupData);	
				var location = this.getDataElementLocation(groupData);
				var g = new twaver.Group();
				var styleScript = this.getStyleScriptById(styleId);
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
				g.setClient(TWAVER.CONST.SIMPLE_ELEMENT_ATTR.ELEMENT_CLASS,elementClass);
				g.setClient(TWAVER.CONST.SIMPLE_ELEMENT_ATTR.ELEMENT_ID,groupId);
				this.setGroupChildrenIds(g,groupData);
				this.setElementLocation(g,location.split(",")[0],location.split(",")[1]);
				this.doElementStyleFormat(g,styles);
				this.setting.box.add(g);
				groups.push(g);
			}
		}
		return groups;
	},
	getDataElementICON:function(data){
		var oICON = {};
		var iconId = data["icon"];
		var imageUrl = this.getImageUrlById(iconId);
		var base64 = this.getImageBase64InfoById(iconId);
		oICON["url"] = imageUrl;
		oICON["base64"] = base64;
		oICON["name"] = ass.utils.getImageName(imageUrl);
		return oICON;
	},
	getImageUrlById:function(imageId){
		var imageUrl = null;
		var dataCollection = this.getDataCollection();
		var imageDef = dataCollection.getImageDefById(imageId);
		imageUrl = (imageDef)?imageDef["url"]:null;
		return imageUrl;
	},
	getImageBase64InfoById:function(imageId){
		var base64Info = null;
		var dataCollection = this.getDataCollection();
		var imageDef = dataCollection.getImageDefById(imageId);
		base64Info = (imageDef)?imageDef["base64Info"]:null;
		return base64Info;
	},
	getDataElementStyle:function(data){
		var oStyle = {};
		var styleId = data["style"];
		oStyle["script"] = this.getStyleScriptById(styleId);
		return oStyle;
	},
	getStyleScriptById:function(styleId){
		var styleScript = null;
		var dataCollection = this.getDataCollection();
		var styleDef =  dataCollection.getStyleDefById(styleId);
		styleScript = (styleDef)?styleDef['script']:[];
		return styleScript;
	},
	getDataElementId:function(data){
		return data[TWAVER.CONST.SIMPLE_ELEMENT_ATTR.ELEMENT_ID]; 
	},
	getDataElementName:function(data){
		return data[TWAVER.CONST.SIMPLE_ELEMENT_ATTR.NAME]; 
	},
	getDataElementClass:function(data){
		return data[TWAVER.CONST.SIMPLE_ELEMENT_ATTR.ELEMENT_CLASS]; 
	},
	getDataElementFromToId:function(data){
		return data[TWAVER.CONST.SIMPLE_ELEMENT_ATTR.FROM_TO_ID];
	},
	getElementById:function(id){
		var element = null;
		if(this.setting.elements){
			var elements = this.setting.elements;
			for(var i=0; i<elements.length; i++){
				var _element = elements[i];
				var _id = _element.getClient(TWAVER.CONST.SIMPLE_ELEMENT_ATTR.ELEMENT_ID);
				if(id == _id){
					element = _element;
					break;
				}
			}
		}
		return element;
	},
	addSelfLink:function(selfLink){
		if(selfLink)
		{
			this.getSelfLinks().push(selfLink);
		}
	},
	makeUpLinkRelations:function(){
		if(this.setting.links){
			var links = this.setting.links;
			for(var i=0; i<links.length; i++){
				var l = links[i];
				var fromToId = l.getClient(TWAVER.CONST.SIMPLE_ELEMENT_ATTR.FROM_TO_ID); 
				var fromId = fromToId.split("#")[0];
				var toId = fromToId.split("#")[1];
				var from  = this.getElementById(fromId);
				var to = this.getElementById(toId);
				if(from != null  && to != null){
					l.setFromNode(from);
					l.setToNode(to);

					if(fromId == toId){
						this.addSelfLink(l);
					}
				}
				else
				{
					this.getBox().remove(l);
				}
				
			}
		}
	},

	setGroupChildrenIds:function(group,groupData){
		var childrenIds = null;
		var oChildren = (groupData["CHILDREN"])?ass.toArray(groupData["CHILDREN"]):null;
		if(oChildren){
			childrenIds = "";
			for(var i=0; i<oChildren.length; i++){
				var oChild = oChildren[i];
				childrenIds += oChild.id+",";
			}

			if(childrenIds){
				childrenIds = childrenIds.substring(0,childrenIds.length-1);
				group.setClient(TWAVER.CONST.SIMPLE_ELEMENT_ATTR.CHILDREN_ID,childrenIds);
			}
		}
	},
	makeUpGroups:function(){
		if(this.setting.groups){
			var groups = this.setting.groups;
			for(var i=0; i<groups.length; i++){
				this.setGroupChildren(groups[i]);
			}
		}
	},
	setGroupChildren:function(element){
		var childrenIds = element.getClient(TWAVER.CONST.SIMPLE_ELEMENT_ATTR.CHILDREN_ID);
		var _childrenIds = childrenIds.split(",");
		for(var i=0; i<_childrenIds.length; i++){
			var elementId = _childrenIds[i];
			var child = this.getElementById(elementId);
			if(child){
				var elementClass = child.getClient(TWAVER.CONST.SIMPLE_ELEMENT_ATTR.ELEMENT_CLASS);
				if(elementClass != TWAVER.CONST.ELEMENT_CLASS.LINK){
					element.addChild(child);
					if(elementClass == TWAVER.CONST.ELEMENT_CLASS.GROUP){
						this.setGroupChildren(child);
					}
				}
			}
			
		}
	}
},$TWaver.NetWork.DataBox);