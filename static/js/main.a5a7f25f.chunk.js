(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a,o=n(0),i=n.n(o),c=n(7),r=n.n(c),l=(n(15),n(1)),s=n(2),u=n(4),d=n(3),v=n(5),h=(n(16),n(8)),g=0,p=0,w=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){n.setState({historicAccelValues:[].concat(Object(h.a)(n.state.historicAccelValues),[n.state.currentAccelValues])});var e=n.canvas.current;n.setState({context:e.getContext("2d")})},n.startRecording=function(){"geolocation"in navigator&&(a=navigator.geolocation.watchPosition(n.updateLatestPoint),window.DeviceMotionEvent&&window.addEventListener("devicemotion",n.updateAccelValues))},n.updateAccelValues=function(e){null!==e.acceleration.x&&null!==e.acceleration.y&&null!==e.acceleration.z&&n.setState({currentAccelValues:{x:e.acceleration.x.toFixed(4),y:e.acceleration.y.toFixed(4),z:e.acceleration.z.toFixed(4)}},function(){var e=1;for(var t in n.state.currentAccelValues)n.drawLine(n.state.currentAccelValues[t],e),e++;n.drawDivider("red",1);for(var a=2;a<10;a++)n.drawDivider("white",a);p++})},n.drawLine=function(e,t){var a=100*t-50,o=n.state.context;o.beginPath(),o.strokeStyle="white",o.moveTo(p,0),o.lineTo(p,300),o.stroke(),o.beginPath(),o.strokeStyle="black",o.moveTo(p,a+5*e),o.lineTo(p,a),o.stroke()},n.drawDivider=function(e,t){var a=n.state.context;a.beginPath(),a.strokeStyle=e,a.moveTo(p+t,0),a.lineTo(p+t,300),a.stroke()},n.updateLatestPoint=function(e){n.setState({latestPoint:{lat:e.coords.latitude.toFixed(6),lng:e.coords.longitude.toFixed(6),speed:e.coords.speed.toFixed(4)}}),console.log(e)},n.updateList=function(){},n.stopRecording=function(){navigator.geolocation.clearWatch(a),window.removeEventListener("devicemotion",n.updateAccelValues)},n.state={list:[],latestPoint:{lat:g.toFixed(6),lng:g.toFixed(6),speed:g.toFixed(6)},historicAccelValues:[],currentAccelValues:{x:0,y:0,z:0},context:null},n.canvas=i.a.createRef(),n}return Object(v.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("button",{onClick:this.startRecording},"Start recording"),i.a.createElement("div",null,"lat=",this.state.latestPoint.lat,", lng=",this.state.latestPoint.lng,", speed=",this.state.latestPoint.speed," "),i.a.createElement("canvas",{id:"canvas",width:"400",height:"300",ref:this.canvas}),i.a.createElement("button",{onClick:this.stopRecording},"Stop recording"))}}]),t}(o.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(w,null))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.a5a7f25f.chunk.js.map