(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a,o,i=n(0),c=n.n(i),l=n(8),s=n.n(l),r=(n(15),n(1)),u=n(2),d=n(4),g=n(3),p=n(5),f=(n(16),n(6)),h=0,m=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(d.a)(this,Object(g.a)(e).call(this,t))).componentDidMount=function(){n.setState({list:[].concat(Object(f.a)(n.state.list),[n.state.latestPoint])}),window.DeviceMotionEvent?window.addEventListener("devicemotion",n.updateAccelValues):console.log("not supported")},n.startRecording=function(){"geolocation"in navigator&&(a=navigator.geolocation.watchPosition(n.updateLatestPoint)),navigator},n.updateAccelValues=function(t){n.setState({accelValues:{x:t.acceleration.x,y:t.acceleration.y,z:t.acceleration.z}},function(){return console.log(n.state.accelValues.x)})},n.updateLatestPoint=function(t){n.setState({latestPoint:{lat:t.coords.latitude.toFixed(6),lng:t.coords.longitude.toFixed(6)}},function(){return n.updateList()})},n.updateList=function(){n.setState({list:[].concat(Object(f.a)(n.state.list),[n.state.latestPoint])},function(){return console.log(n.state.list)})},n.stopRecording=function(){localStorage.setItem("track",JSON.stringify(n.state.list)),navigator.geolocation.clearWatch(a),o.stop()},n.state={list:[],latestPoint:{lat:h.toFixed(6),lng:h.toFixed(6)},accelValues:{x:0,y:0,z:0}},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("button",{onClick:this.startRecording},"Start recording"),c.a.createElement("div",null,"Lat: ",this.state.latestPoint.lat," Lng: ",this.state.latestPoint.lng," "),c.a.createElement("div",null,this.state.accelValues.x),c.a.createElement("button",{onClick:this.stopRecording},"Stop recording"))}}]),e}(i.Component),v=function(t){function e(){return Object(r.a)(this,e),Object(d.a)(this,Object(g.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m,null))}}]),e}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.95d86692.chunk.js.map