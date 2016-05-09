if(!window.Index){
	Index = {};
	Index.View = {};
}

Index.IndexView = ass.proto({
	name:'IndexView',
	$init:function(config){
		this.setting.navbar = new Index.View.Navbar({styleCss:'index-view-navbar'});
		this.setting.sidebar = new Index.View.Sidebar();
		this.setting.contentPanel = new Index.View.Panel();
		this.setting.indexView = ass.UIFactory.createInstance("Viewport",{
			cols:[
				this.setting.sidebar,
				this.setting.contentPanel
			]
		});
	},
	getSidebar:function(){
		return this.setting.sidebar;
	},
	render:function(){
		this.setting.navbar.render();
		this.setting.indexView.render();
	}
});

ass.protoUI({
	name:'Sidebar',
	config:{weight:2,padding:'none'},
	items:[
		{title:'BaseView',type:'group',children:[
			{text:'Process'},
			{text:'WellView'},
			{text:'Modal'}
		]},
		{title:'Panel',type:'group',children:[
			{text:'FormPanel'},
			{text:'GridPanel'},
			{text:'TreePanel'}
		]}
	],
	$init:function(config){
		ass.UICompoent.Sidebar.prototype.$init.call(this,config);
	},
	createItems:function(){
		this.setting.items = this.setting.items.concat(this.items);
		return ass.UICompoent.Sidebar.prototype.createItems.call(this);
	},
},ass.UICompoent.Sidebar,Index.View);


ass.protoUI({
	name:'Panel',
	config:{weight:10,offset:2},
	$init:function(config){
		ass.UICompoent.Panel.prototype.$init.call(this,config);
	},
	createBodyTpl:function(){
		this.setting.bodyTpl = ' ';
		return ass.UICompoent.Panel.prototype.createBodyTpl.call(this);
	}
},ass.UICompoent.Panel,Index.View);

ass.protoUI({
	name:'Navbar',
	$init:function(config){
		ass.UICompoent.Navbar.prototype.$init.call(this,config);
	},
	createHeadTpl:function(){
		this.setting.title = "Exper Assjs Demo";
		return ass.UICompoent.Navbar.prototype.createHeadTpl.call(this);
	}
},ass.UICompoent.Navbar,Index.View);

$(function(){
	new Index.IndexView().render();
});