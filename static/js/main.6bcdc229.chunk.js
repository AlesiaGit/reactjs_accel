(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var n,c=a(0),o=a.n(c),i=a(8),l=a.n(i),s=(a(15),a(1)),r=a(2),u=a(4),d=a(3),g=a(5),v=(a(16),a(6)),h=0,x=0,m=0,w=0,f=function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).componentDidMount=function(){a.setState({list:[].concat(Object(v.a)(a.state.list),[{lat:a.state.latestPoint.lat,lng:a.state.latestPoint.lng,x:a.state.accelValues.x,y:a.state.accelValues.y,z:a.state.accelValues.z}])});var t=a.canvas.current;a.setState({context:t.getContext("2d")})},a.startRecording=function(){"geolocation"in navigator&&(n=navigator.geolocation.watchPosition(a.updateLatestPoint),window.DeviceMotionEvent&&window.addEventListener("devicemotion",a.updateAccelValues))},a.updateAccelValues=function(t){null!==t.acceleration.x&&null!==t.acceleration.y&&null!==t.acceleration.z&&a.setState({accelValues:{x:t.acceleration.x.toFixed(4),y:t.acceleration.y.toFixed(4),z:t.acceleration.z.toFixed(4)}},function(){a.drawLine(a.state.accelValues.x,x,1),a.drawLine(a.state.accelValues.y,m,2),a.drawLine(a.state.accelValues.z,w,3),x++,m++,w++})},a.drawLine=function(t,e,n){var c=100*n-50;a.state.context.moveTo(e,c+10*t),a.state.context.lineTo(e,c),a.state.context.stroke()},a.updateLatestPoint=function(t){a.setState({latestPoint:{lat:t.coords.latitude.toFixed(6),lng:t.coords.longitude.toFixed(6)}})},a.updateList=function(){a.setState({list:[].concat(Object(v.a)(a.state.list),[{lat:a.state.latestPoint.lat,lng:a.state.latestPoint.lng,x:a.state.accelValues.x,y:a.state.accelValues.y,z:a.state.accelValues.z}])},function(){return console.log(a.state.list)})},a.stopRecording=function(){localStorage.setItem("track",JSON.stringify(a.state.list)),navigator.geolocation.clearWatch(n),window.removeEventListener("devicemotion",a.updateAccelValues)},a.state={list:[],latestPoint:{lat:h.toFixed(6),lng:h.toFixed(6)},accelValues:{x:0,y:0,z:0},context:null},a.canvas=o.a.createRef(),a}return Object(g.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("button",{onClick:this.startRecording},"Start recording"),o.a.createElement("div",null,"lat=",this.state.latestPoint.lat,", lng=",this.state.latestPoint.lng," "),o.a.createElement("div",null,"x=",this.state.accelValues.x,", y=",this.state.accelValues.y,", z=",this.state.accelValues.z),o.a.createElement("canvas",{id:"canvas",width:"400",height:"300",ref:this.canvas}),o.a.createElement("button",{onClick:this.stopRecording},"Stop recording"))}}]),e}(c.Component),p=function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(g.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,null))}}]),e}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,a){t.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.6bcdc229.chunk.js.map