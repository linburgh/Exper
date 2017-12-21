function init() {
	  	createNetWork('topo-container');
	}


	function  createLink (from, to) {
		var div = document.createElement("div");
      
		
	    var link = new twaver.HTMLLink({
	    	      name:"<div style='background-color:red'>100M</div>",
	    	       name2:"<div style='background-color:green'>200M</div>"
	    },from, to);
	    
	    link.setStyle('link.color', '#153963');
	    link.setStyle('link.width', 3);
	
	    link.setStyle('link.corner', 'none');
	    link.setStyle('link.position','left.left');
	    link.setStyle('link.type',  "parallel");
	    link.setStyle('arrow.to',true);
		link.setStyle("arrow.to.color",'#153963');
		link.setStyle("arrow.from.at.edge",true);
		link.setStyle("label.position",'from');
		link.setStyle("label2.position",'to');
		link.setStyle("label.xoffset",50);
		link.setStyle("label2.xoffset",50);
		link.setStyle("icons.position",'center');
		link.setStyle('icons.names', [['host']]);
//	link.setStyle('icons.position',['from','to']).
//	link.setStyle('icons.xoffset',[0.5,0.25]).
//	link.setStyle('link.icons.rotatable',[true,true]);

		
	    link.setStyle('arrow.to.shape','arrow.singleDirection');
	    
	    link.setStyle("label.color",'white');

	    return link;
	}
	
function createNetWork(id){
	var box = new twaver.ElementBox();
	 	var network = new twaver.vector.Network(box);
	  
	  	document.getElementById(id).appendChild(network.getView());
	  	network.adjustBounds({ x: 0, y: 0, width: 980, height: 700 });

	 	_twaver.arrow.register('arrow.singleDirection', function() {
		   	var pointArray = new twaver.List();
			pointArray.add({ x: -9 / 12, y: 0.15}); 
		    pointArray.add({ x: -1.2,y: -7 / 9  });
		    pointArray.add({x:-0.9,y: -7 / 9});
		    pointArray.add({x: 0.5,y: 0.16});
			
		    return {points:pointArray};
		}());
		
		registerNormalImage("host",'host.png');
		var node1 = new twaver.Node();
		node1.setName('node1');
		node1.setImage("host");
		node1.setLocation(100, 100);
		node1.setStyle("label.color",'#0389c5');
		box.add(node1);

		var node2 = new twaver.Node();
		node2.setName('node2');
		node2.setImage("host");
		node2.setLocation(300, 200);
		node2.setStyle("label.color",'#0389c5');
		box.add(node2);
	  
	  

		var link = createLink(node1,node2);
		
//		link.setStyle('link.from.xoffset',25);
//		link.setStyle('link.to.xoffset',-20);
		
//		var link1= createLink(node2,node1);
//		link1.setStyle('link.from.xoffset',-25);
//		link1.setStyle('link.to.xoffset',20);
		
		box.add(link);
		//box.add(link1);
		
}

function registerNormalImage(name, url) {
		var image = new Image();
		image.src = url;
		image.onload = function() {
			twaver.Util.registerImage(name, image, image.width, image.height);
			image.onload = null;			
		};
	}