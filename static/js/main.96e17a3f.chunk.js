(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a,o=n(0),i=n.n(o),r=n(8),c=n.n(r),s=(n(15),n(2)),l=n(3),u=n(5),d=n(4),v=n(6),h=(n(16),n(1)),g={lat:0,lng:0,speed:0,timestamp:new Date(Date.now()).getTime()},m={x:0,y:0,z:0},p=0,f=6371e3,w=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(u.a)(this,Object(d.a)(e).call(this,t))).componentDidMount=function(){var t=n.canvas.current;n.setState({context:t.getContext("2d")})},n.startRecording=function(){if("geolocation"in navigator){a=navigator.geolocation.watchPosition(n.updatePositionData,n.err,{enableHighAccuracy:!1,timeout:2e3,maximumAge:1e3}),window.DeviceMotionEvent&&window.addEventListener("devicemotion",n.updateAccelerationData)}},n.err=function(){console.log("error")},n.updateAccelerationData=function(t){var e=t.acceleration.x,a=t.acceleration.y,o=t.acceleration.z;null!==e&&null!==a&&null!==o&&n.setState({currentAcceleration:{x:e,y:a,z:o}},function(){p===n.canvas.current.width&&(p=0),n.drawBackground("white",0);var t=1,e=n.state.currentAcceleration;for(var a in e)n.drawLine(e[a],t),t++;p++,n.drawBackground("grey",1);for(var o=2;o<8;o++)n.drawBackground("white",o)})},n.toRad=function(t){return t*Math.PI/180},n.calculateDistance=function(t,e,a,o){var i=n.toRad(a-t),r=n.toRad(o-e),c=Math.sin(i/2)*Math.sin(i/2)+Math.cos(n.toRad(t))*Math.cos(n.toRad(a))*Math.sin(r/2)*Math.sin(r/2);return 2*f*Math.atan2(Math.sqrt(c),Math.sqrt(1-c))},n.drawLine=function(t,e){var a=n.state.context,o=100*e-50;a.beginPath(),a.strokeStyle="black",a.moveTo(p,o+5*t),a.lineTo(p,o),a.stroke()},n.drawBackground=function(t,e){var a=n.state.context;a.beginPath(),a.strokeStyle=t,a.moveTo(p+e,0),a.lineTo(p+e,300),a.stroke()},n.updatePositionData=function(t){n.setState({prevPosition:Object(h.a)({},n.state.currentPosition)},function(){var e=n.state.prevPosition;console.log("prev"),console.log(n.state.prevPosition);var a=t.coords.latitude,o=t.coords.longitude,i=t.timestamp,r=n.calculateDistance(e.lat,e.lng,a,o),c=(e.timestamp-i)/1e3,s=Math.abs(r/c);n.setState({currentPosition:{lat:a,lng:o,speed:s,timestamp:i}},function(){console.log("after"),console.log(n.state.currentPosition)})})},n.updateResultingData=function(){},n.stopRecording=function(){navigator.geolocation.clearWatch(a),window.removeEventListener("devicemotion",n.updateAccelerationData)},n.state={data:[],currentPosition:Object(h.a)({},g),prevPosition:Object(h.a)({},g),currentAcceleration:Object(h.a)({},m),context:null},n.canvas=i.a.createRef(),n}return Object(v.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("button",{onClick:this.startRecording},"Start recording"),i.a.createElement("div",null,"lat=",this.state.currentPosition.lat),i.a.createElement("div",null,"lng=",this.state.currentPosition.lng),i.a.createElement("div",null,"speed=",this.state.currentPosition.speed),i.a.createElement("canvas",{id:"canvas",width:"400",height:"300",ref:this.canvas}),i.a.createElement("button",{onClick:this.stopRecording},"Stop recording"))}}]),e}(o.Component),b=function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(v.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(w,null))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.96e17a3f.chunk.js.map