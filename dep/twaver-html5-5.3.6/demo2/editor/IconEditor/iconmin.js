function getSVGElement(a){var b=[],c=[],d=a?a.children:[],e=parseFloat(a.attributes.width.value),f=parseFloat(a.attributes.height.value),g=document.getElementById("canvas"),h,i={};i.w=e,i.h=f,i.origin={x:0,y:0},i.clip=!0;if(a&&a.attributes&&a.attributes.viewBox){h=handlerViewBox(a.attributes.viewBox.value);if(h[0]>0||h[1]>0)i.translate={x:-h[0],y:-h[1]};if(h[2]!=e||h[3]!=f)i.scale={x:e/h[2],y:f/h[3]}}return i.v=b,d.forEach(function(a){getAllGradient(a,c)}),d.forEach(function(a){convertToVector(a,b,c)}),i}function convertToVector(a,b,c,d){var e={},f=a.attributes;if(a instanceof svg.Element.g)handlerG(a,b,c,d);else if(a instanceof svg.Element.rect)e.shape="rect",e.x=parseFloat(f.x?f.x.value:0),e.y=parseFloat(f.y?f.y.value:0),e.w=parseFloat(f.width?f.width.value:0),e.h=parseFloat(f.height?f.height.value:0),handlerFill(f,e,c),f["stroke-width"]&&(e.lineWidth=parseFloat(f["stroke-width"].value)),f.stroke&&(e.lineColor=f.stroke.value),handlerStyle(a.styles,e,c),e.fill==null&&e.gradient==null&&(e.fill="#000000"),e.lineColor&&!e.lineWidth&&(e.lineWidth=1),f.transform&&(e.transform=f.transform.value),f["fill-opacity"]&&(e.alpha=parseFloat(f["fill-opacity"].value)),!e.gradient&&!e.fill&&(e.fill="#000000"),d?d.push(e):b.push(e);else if(a instanceof svg.Element.line)e.shape="line",e.p1={x:parseFloat(f.x1?f.x1.value:0),y:parseFloat(f.y1?f.y1.value:0)},e.p2={x:parseFloat(f.x2?f.x2.value:0),y:parseFloat(f.y2?f.y2.value:0)},f["stroke-width"]&&(e.lineWidth=parseFloat(f["stroke-width"].value)),f.stroke&&(e.lineColor=f.stroke.value),handlerStyle(a.styles,e,c),e.lineColor&&!e.lineWidth&&(e.lineWidth=1),f.transform&&(e.transform=f.transform.value),f["fill-opacity"]&&(e.alpha=parseFloat(f["fill-opacity"].value)),d?d.push(e):b.push(e);else if(a instanceof svg.Element.ellipse)e.shape="ellipse",e.cx=parseFloat(f.cx?f.cx.value:0),e.cy=parseFloat(f.cy?f.cy.value:0),e.rx=parseFloat(f.rx?f.rx.value:0),e.ry=parseFloat(f.ry?f.ry.value:0),handlerFill(f,e,c),f["stroke-width"]&&(e.lineWidth=parseFloat(f["stroke-width"].value)),f.stroke&&(e.lineColor=f.stroke.value),handlerStyle(a.styles,e,c),e.lineColor&&!e.lineWidth&&(e.lineWidth=1),f.transform&&(e.transform=f.transform.value),f["fill-opacity"]&&(e.alpha=parseFloat(f["fill-opacity"].value)),!e.gradient&&!e.fill&&(e.fill="#000000"),d?d.push(e):b.push(e);else if(a instanceof svg.Element.circle)e.shape="ellipse",e.cx=parseFloat(f.cx?f.cx.value:0),e.cy=parseFloat(f.cy?f.cy.value:0),e.rx=parseFloat(f.r?f.r.value:0),e.ry=parseFloat(f.r?f.r.value:0),handlerFill(f,e,c),f["stroke-width"]&&(e.lineWidth=parseFloat(f["stroke-width"].value)),f.stroke&&(e.lineColor=f.stroke.value),handlerStyle(a.styles,e,c),e.lineColor&&!e.lineWidth&&(e.lineWidth=1),f.transform&&(e.transform=f.transform.value),f["fill-opacity"]&&(e.alpha=parseFloat(f["fill-opacity"].value)),!e.gradient&&!e.fill&&(e.fill="#000000"),d?d.push(e):b.push(e);else if(a instanceof svg.Element.path)e.shape="path",e.data=f.d?f.d.value:null,handlerFill(f,e,c),f["stroke-width"]&&(e.lineWidth=parseFloat(f["stroke-width"].value)),f.stroke&&(e.lineColor=f.stroke.value),handlerStyle(a.styles,e,c),e.lineColor&&!e.lineWidth&&(e.lineWidth=1),f.transform&&(e.transform=f.transform.value),f["fill-rule"]&&(e.fillRule=f["fill-rule"].value),f["fill-opacity"]&&(e.alpha=parseFloat(f["fill-opacity"].value)),!e.gradient&&!e.fill&&(e.fill="#000000"),d?d.push(e):b.push(e);else if(a instanceof svg.Element.polygon){var g="";e.shape="path",a.points&&(a.points.forEach(function(a){g+=a.x+","+a.y+" "}),g+="z"),e.data=g,handlerFill(f,e,c),f["stroke-width"]&&(e.lineWidth=parseFloat(f["stroke-width"].value)),f.stroke&&(e.lineColor=f.stroke.value),handlerStyle(a.styles,e,c),e.lineColor&&!e.lineWidth&&(e.lineWidth=1),f.transform&&(e.transform=f.transform.value),f["fill-opacity"]&&(e.alpha=parseFloat(f["fill-opacity"].value)),!e.gradient&&!e.fill&&(e.fill="#000000"),d?d.push(e):b.push(e)}else a instanceof svg.Element.polyline?(e.shape="path",a.points&&(a.points.forEach(function(a){g+=a.x+","+a.y+" "}),g=g.trim()),e.data=g,handlerFill(f,e,c),f["stroke-width"]&&(e.lineWidth=parseFloat(f["stroke-width"].value)),f.stroke&&(e.lineColor=f.stroke.value),handlerStyle(a.styles,e,c),e.lineColor&&!e.lineWidth&&(e.lineWidth=1),f.transform&&(e.transform=f.transform.value),f["fill-opacity"]&&(e.alpha=parseFloat(f["fill-opacity"].value)),!e.gradient&&!e.fill&&(e.fill="#000000"),d?d.push(e):b.push(e)):!(a instanceof svg.Element.text)}function handlerG(a,b,c,d){var e={},f=a.attributes;e.shape="g",handlerFill(f,e,c),f["stroke-width"]&&(e.lineWidth=parseFloat(f["stroke-width"].value)),f.stroke&&(e.lineColor=f.stroke.value),handlerStyle(a.styles,e,c),e.lineColor&&!e.lineWidth&&(e.lineWidth=1),f["fill-opacity"]&&(e.alpha=parseFloat(f["fill-opacity"].value));var g=[];e.v=g,d?d.push(e):b.push(e),a.children.forEach(function(a){convertToVector(a,b,c,g)})}function handlerFill(a,b,c){if(a.fill)if(a.fill.value.indexOf("url")!=-1){var d=a.fill.value.indexOf("#"),e=a.fill.value.indexOf(")"),f=a.fill.value.substring(d+1,e).trim(),g=c[f];if(g){var a=g.attributes,h=g.type.substring(0,6),i=g.children,j=[];if(i&&i.length>0)for(var k=0;k<i.length;k++){var l={};l.offset=i[k].attributes.offset.value,l.color=i[k].attributes.style.value.split(":")[1].trim(),j.push(l)}b.gradient={type:h},"radial"==h?(b.gradient.cx=parseFloat(a.cx?a.cx.value:0),b.gradient.cy=parseFloat(a.cy?a.cy.value:0),b.gradient.r=parseFloat(a.r?a.r.value:0),a.fx&&(b.gradient.fx=parseFloat(a.fx?a.fx.value:0)),a.fy&&(b.gradient.fy=parseFloat(a.fy?a.fy.value:0))):(b.gradient.x1=parseFloat(a.x1?a.x1.value:0),b.gradient.y1=parseFloat(a.y1?a.y1.value:0),b.gradient.x2=parseFloat(a.x2?a.x2.value:0),b.gradient.y2=parseFloat(a.y2?a.y2.value:0)),b.gradient.stop=j,a.gradientTransform&&(b.gradient.transform=a.gradientTransform.value)}}else a.fill.value!="none"&&(b.fill=a.fill.value)}function handlerViewBox(a){var b=(a||"").replace(/,/g," ").replace(/[\s\r\t\n]+/gm," ").replace(/^\s+|\s+$/g,"").split(" ");for(var c=0;c<b.length;c++)b[c]=parseFloat(b[c]);return b}function handlerStyle(a,b,c){a&&(a["stroke-width"]&&(b.lineWidth=a["stroke-width"].value),a.stroke&&(b.lineColor=a.stroke.value),handlerFill(a,b,c))}function getAllGradient(a,b){if(a instanceof svg.Element.linearGradient||a instanceof svg.Element.radialGradient){var c=a.attributes.id.value;c&&(b[c]=a)}else a.children&&a.children.length>0&&a.children.forEach(function(a){getAllGradient(a,b)})}(function(a,b){var c={};c.version="1.1.1",c.images=[],c.Styles={},c.Definitions={},c.Property=function(a,b){this.name=a,this.value=b},c.Property.prototype.getValue=function(){return this.value},c.Property.prototype.hasValue=function(){return this.value!=null&&this.value!==""},c.trim=function(a){return a.replace(/^\s+|\s+$/g,"")},c.compressSpaces=function(a){return a.replace(/[\s\r\t\n]+/gm," ")},c.ajax=function(b){var c;return a.XMLHttpRequest?c=new XMLHttpRequest:c=new ActiveXObject("Microsoft.XMLHTTP"),c?(c.open("GET",b,!1),c.send(null),c.responseText):null},c.parseXml=function(b){if(a.DOMParser){var c=new DOMParser;return c.parseFromString(b,"text/xml")}b=b.replace(/<!DOCTYPE svg[^>]*>/,"");var d=new ActiveXObject("Microsoft.XMLDOM");return d.async="false",d.loadXML(b),d},c.CreatePath=function(a){var b=c.ToNumberArray(a),d=[];for(var e=0;e<b.length;e+=2)d.push(new c.Point(b[e],b[e+1]));return d},c.ToNumberArray=function(a){var b=c.trim(c.compressSpaces((a||"").replace(/,/g," "))).split(" ");for(var d=0;d<b.length;d++)b[d]=parseFloat(b[d]);return b},c.Point=function(a,b){this.x=a,this.y=b},c.Element={},c.EmptyProperty=new c.Property("EMPTY",""),c.Element.ElementBase=function(a){this.attributes={},this.styles={},this.children=[],this.attribute=function(a,b){var d=this.attributes[a];return d!=null?d:(b==1&&(d=new c.Property(a,""),this.attributes[a]=d),d||c.EmptyProperty)},this.getHrefAttribute=function(){for(var a in this.attributes)if(a.match(/:href$/))return this.attributes[a];return c.EmptyProperty},this.style=function(a,b){var d=this.styles[a];if(d!=null)return d;var e=this.attribute(a);if(e!=null&&e.hasValue())return this.styles[a]=e,e;var f=this.parent;if(f!=null){var g=f.style(a);if(g!=null&&g.hasValue())return g}return b==1&&(d=new c.Property(a,""),this.styles[a]=d),d||c.EmptyProperty},this.addChild=function(a,b){var d=a;b&&(d=c.CreateElement(a)),d.parent=this,this.children.push(d)};if(a!=null&&a.nodeType==1){for(var b=0;b<a.childNodes.length;b++){var d=a.childNodes[b];d.nodeType==1&&this.addChild(d,!0);if(this.captureTextNodes&&d.nodeType==3)var e=d.nodeValue||d.text||""}for(var b=0;b<a.attributes.length;b++){var f=a.attributes[b];this.attributes[f.nodeName]=new c.Property(f.nodeName,f.value)}var g=c.Styles[a.nodeName];if(g!=null)for(var h in g)this.styles[h]=g[h];if(this.attribute("class").hasValue()){var i=c.compressSpaces(this.attribute("class").value).split(" ");for(var j=0;j<i.length;j++){g=c.Styles["."+i[j]];if(g!=null)for(var h in g)this.styles[h]=g[h];g=c.Styles[a.nodeName+"."+i[j]];if(g!=null)for(var h in g)this.styles[h]=g[h]}}if(this.attribute("id").hasValue()){var g=c.Styles["#"+this.attribute("id").value];if(g!=null)for(var h in g)this.styles[h]=g[h]}if(this.attribute("style").hasValue()){var g=this.attribute("style").value.split(";");for(var b=0;b<g.length;b++)if(c.trim(g[b])!=""){var k=g[b].split(":"),h=c.trim(k[0]),l=c.trim(k[1]);this.styles[h]=new c.Property(h,l)}}this.attribute("id").hasValue()&&c.Definitions[this.attribute("id").value]==null&&(c.Definitions[this.attribute("id").value]=this)}},c.Element.svg=function(a){this.base=c.Element.ElementBase,this.base(a)},c.Element.rect=function(a){this.base=c.Element.ElementBase,this.base(a)},c.Element.rect.prototype=new c.Element.ElementBase,c.Element.circle=function(a){this.base=c.Element.ElementBase,this.base(a)},c.Element.circle.prototype=new c.Element.ElementBase,c.Element.ellipse=function(a){this.base=c.Element.ElementBase,this.base(a)},c.Element.ellipse.prototype=new c.Element.ElementBase,c.Element.line=function(a){this.base=c.Element.ElementBase,this.base(a)},c.Element.line.prototype=new c.Element.ElementBase,c.Element.polyline=function(a){this.base=c.Element.ElementBase,this.base(a),this.points=c.CreatePath(this.attribute("points").value)},c.Element.polyline.prototype=new c.Element.ElementBase,c.Element.polygon=function(a){this.base=c.Element.polyline,this.base(a)},c.Element.polygon.prototype=new c.Element.polyline,c.Element.path=function(a){this.base=c.Element.ElementBase,this.base(a)},c.Element.path.prototype=new c.Element.ElementBase,c.Element.GradientBase=function(a){this.base=c.Element.ElementBase,this.base(a),this.stops=[];for(var b=0;b<this.children.length;b++){var d=this.children[b];d.type=="stop"&&this.stops.push(d)}},c.Element.GradientBase.prototype=new c.Element.ElementBase,c.Element.linearGradient=function(a){this.base=c.Element.GradientBase,this.base(a)},c.Element.linearGradient.prototype=new c.Element.GradientBase,c.Element.radialGradient=function(a){this.base=c.Element.GradientBase,this.base(a)},c.Element.radialGradient.prototype=new c.Element.GradientBase,c.Element.stop=function(a){this.base=c.Element.ElementBase,this.base(a)},c.Element.stop.prototype=new c.Element.ElementBase,c.Element.text=function(a){this.captureTextNodes=!0,this.base=c.Element.ElementBase,this.base(a)},c.Element.g=function(a){this.base=c.Element.ElementBase,this.base(a)},c.Element.g.prototype=new c.Element.ElementBase,c.Element.symbol=function(a){this.base=c.Element.ElementBase,this.base(a)},c.Element.symbol.prototype=new c.Element.ElementBase,c.Element.use=function(a){this.base=c.Element.ElementBase,this.base(a)},c.Element.use.prototype=new c.Element.ElementBase,c.Element.image=function(a){this.base=c.Element.ElementBase,this.base(a)},c.Element.image.prototype=new c.Element.ElementBase,c.Element.clipPath=function(a){this.base=c.Element.ElementBase,this.base(a)},c.Element.clipPath.prototype=new c.Element.ElementBase,c.Element.MISSING=function(a){typeof console=="undefined"},c.Element.MISSING.prototype=new c.Element.ElementBase,c.CreateElement=function(a){var b=a.nodeName.replace(/^[^:]+:/,"");b=b.replace(/\-/g,"");var d=null;return typeof c.Element[b]!="undefined"?d=new c.Element[b](a):d=new c.Element.MISSING(a),d.type=a.nodeName,d},c.load=function(a){return c.loadXml(c.ajax(a))},c.loadXml=function(a){return c.loadXmlDoc(c.parseXml(a))},c.loadString=function(a){c.loadXml(a)},c.loadXmlDoc=function(a){var b=c.CreateElement(a.documentElement);return b.root=!0,b},a.svg=c})(window);