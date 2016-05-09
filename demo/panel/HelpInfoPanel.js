if(!window.HelpInfo) {
	window.Help = {};
}

Help.HelpInfo = ass.proto({
	$init:function(config){
		this.setting.items = this.createItems();
		this.setting.title = (config.title)?config.title:'';
	},
	createlayoutPanel:function(){
		return {
			name:'ListPanel',
			styleCss:'helpInfo-listPanel',
			items:this.setting.items
		};
	},
	createView:function(){
		var oView = null;
		var config = {title:this.setting.title,styleCss:'helpInfoPanel',rows:[this.createlayoutPanel()]};
		oView = new ass.UIFactory.createInstance("Panel",config);
		return oView;
	}
});

Help.NodeStateAlgorInfo = ass.$extend({
	createItems:function(){
		var items = [];
		var oGrid = null;
		var tpl = null;
		items.push({text:'节点状态可以通过自身告警、子节点传递、影响规则三种方式取最大值计算获得'});
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-head'>自身告警计算规则</div>"+
			"</div>"
		});
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-level-one'>1.影响的最高级别</div>"+
			"</div>"
		});
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content'> 告警出现后影响本节点状态最高级别</div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content section-example'>举例说明</div>"+
			"</div>"
		});
		
		
		oGrid = ass.UIFactory.createInstance("GridPanel",{
			title:"GridPanel",
			data:[
				{alarmKPI:'文件系统超阀值',alarmlevel:'一般',algorWay:'一票否决'}
			],
			columns:[
				{header:'告警指标',dataIndex:'alarmKPI'},
				{header:'影响的最高级别',dataIndex:'alarmlevel'},
				{header:'计算方式',dataIndex:'algorWay'}
			]
		});
		
		tpl = oGrid.getColumnTpl();
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content section-example'>"+tpl+"</div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content section-example'>实际告警：出现文件系统超阀值的严重告警</div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item split' >"+
			"<div class='section-content section-example'>最后该节点状态为：一般</div>"+
			"</div>"
		});
		
		//分割线
		items.push({
			itemTpl:"<div class='list-group-item ' >"+
			"<div class='section-content split'></div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-level-one'>2.普通节点计算方式</div>"+
			"</div>"
		});
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content'> 把所有配置指标结合“影响的最高级别”字段取最大值的方式</div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content section-example'>举例说明</div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content section-example'>该节点配置了指标K1、K2、K3，K4，实际告警如下：K1重要；K4一般；其他正常，最终结果为重要（因为重要级别大于一般）</div>"+
			"</div>"
		});
		
		//分割线
		items.push({
			itemTpl:"<div class='list-group-item ' >"+
			"<div class='section-content split'></div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-level-one'>3.群集节点计算方式</div>"+
			"</div>"
		});
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			'<div class="section-content"> 1）投票制：     群集里的每个主机状态按照所有投票制的指标取最大值（结合"影响状态最高级别"），然后看所有主机状态是否达到投票通过值</div>'+
			"</div>"
		});
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			'<div class="section-content">  2）一票否决:  只要出现告警就直接影响本节点状态（结合"影响状态最高级别"）</div>'+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content section-example'>举例说明</div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content section-example'>该集群有4台主机A、B、C、D，配置了3个投票制指标K1、K2、K3，1个一票否决指标K4，投票通过率配置75%。实际告警如下</div>"+
			"</div>"
		});
		
		oGrid = ass.UIFactory.createInstance("GridPanel",{
			title:"GridPanel",
			data:[
				{host:'A',K1:'严重',K2:'正常',K3:'正常',K4:'一般'},
				{host:'B',K1:'一般',K2:'重要',K3:'正常',K4:'正常'},
				{host:'C',K1:'正常',K2:'正常',K3:'重要',K4:'正常'},
				{host:'D',K1:'正常',K2:'一般',K3:'正常',K4:'正常'}
			],
			columns:[
				{header:'主机',dataIndex:'host'},
				{header:'K1',dataIndex:'K1'},
				{header:'K2',dataIndex:'K2'},
				{header:'K3',dataIndex:'K3'},
				{header:'K4',dataIndex:'K4'}
			]
		});
		
		tpl = oGrid.getColumnTpl();
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content section-example'>"+tpl+"</div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content section-example'>计算方式</div>"+
			"</div>"
		});
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content section-example'>1）一票否决结果：从所有一票否决权的指标取最大级别，本例结果：一般</div>"+
			"</div>"
		});
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content section-example'>2）各主机状态结果：从所有投票制的指标中计算各个主机按照最大值方法计算的结果。本例结果：A严重；B重要；C重要；D一般</div>"+
			"</div>"
		});
		items.push({
			itemTpl:"<div class='list-group-item section-content section-example'>"+
			"<div class='section-content section-example'>3）投票制结果：根据各主机状态按照投票通过率进行计算，本例结果：严重只有一个A即25%，小于通过率75%，不满足；重要有B、C两个。另外A为严重可当作重要来看待（级别向下取），故共有3个即75%，大于等于75%，最终投票制结果为重要</div>"+
			"</div>"
		});
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content section-example'>4）投票制结果与一票否决结果去最大值，最后该节点状态为：重要</div>"+
			"</div>"
		});
		
		
		//分割线
		items.push({
			itemTpl:"<div class='list-group-item ' >"+
			"<div class='section-content split'></div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-level-one'>4.虚节点和引用节点无自身告警</div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-head'>子节点计算规则</div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content section-example'>子节点是拓扑图上与该节点有连线的所有二级节点。计算方法如下：</div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content'> 1.最大值   即取所有子节点状态最高级别作为本节点状态</div>"+
			"</div>"
		});
		
		//分割线
		items.push({
			itemTpl:"<div class='list-group-item ' >"+
			"<div class='section-content split'></div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content'>2.投票制  需配置投票通过率。当子节点异常节点占比大于等于投票通过率，则为本节点状态</div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content section-example'>举例说明：</div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content section-example'>本节点有4个子节点A、B、C、D，投票通过率配置75%。实际状态A重要、B一般、C一般、D正常</div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content section-example'>计算结果：一般（级别高的可以当作级别低的看待，重要也可以当作一般，所以一般3个超过配置通过率75%）</div>"+
			"</div>"
		});
		
		//分割线
		items.push({
			itemTpl:"<div class='list-group-item ' >"+
			"<div class='section-content split'></div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content'>3.加权算法  需配置每个子节点计算权重，按照计算权重计算出本节点状态</div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content section-example'>举例说明：（定义状态级别值严重80、重要60、一般40、正常20）</div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content section-example'>本节点有4个子节点A、B、C、D，子节点计算权重为：2、1、1、1。实际状态A重要、B一般、C一般、D正常</div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content section-example'>计算方式：</div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content section-example'>1）计算每个节点传递值，节点状态级别值*该子节点计算权重/所有子节点权重和</div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content section-example'>A：60*2/5；B：40*1/5；C：40*1/5；D：20*1/5</div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content section-example'>2）把所有节点传递值加起来：60*2/5+40*1/5+40*1/5+20*1/5=44</div>"+
			"</div>"
		});
		
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content section-example'>3）计算结果向上取状态级别   60(重要) > 44 > 40（一般）  所以计算结果为：重要</div>"+
			"</div>"
		});	
		return items;
	}
},Help.HelpInfo);


Help.NodeStateNotify = ass.$extend({
	createItems:function(){
		var items = [];
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-level-one'>1.当状态由高级别恢复到低级别时</div>"+
			"</div>"
		});
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content'>通知人：同时通知高级别和低级别的通知人</div>"+
			"</div>"
		});
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content'>通知内容：“节点名称”由“高级别状态”恢复到“低级别状态”，请各位知晓</div>"+
			"</div>"
		});
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-level-one'>2.当状态由低级别到高级别时</div>"+
			"</div>"
		});
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content'>通知人：同时通知高级别和低级别的通知人</div>"+
			"</div>"
		});
		items.push({
			itemTpl:"<div class='list-group-item'>"+
			"<div class='section-content'>通知内容：“节点名称”由“低级别状态”到“低级别状态”，请各位知晓</div>"+
			"</div>"
		});
		return items;
	}
},Help.HelpInfo);
