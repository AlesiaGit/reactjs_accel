(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(52)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(12),c=a.n(i),r=(a(24),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function s(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var l=a(4),p=a(5),u=a(7),d=a(6),h=a(8),m=(a(25),a(26),a(17)),v=(a.n(m).a.initializeApp({apiKey:"AIzaSyBexhCuV6JNCsyakFOeBK7NmFb_oM_pgxo",authDomain:"bumpyroadsinformer.firebaseapp.com",databaseURL:"https://bumpyroadsinformer.firebaseio.com",projectId:"bumpyroadsinformer",storageBucket:"",messagingSenderId:"854546127925",appId:"1:854546127925:web:d3c2a81c7c4e9ba6"}).firestore(),a(14)),g=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){a.props.centerAroundCurrentLocation&&navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){var t=e.coords;a.setState({currentLocation:{lat:t.latitude,lng:t.longitude},isCurrentPositionReceived:!0},a.props.updateLocationData(e))}),a.loadMap()},a.loadMap=function(){if(a.props.google){var e=a.props.google.maps,t=a.props.zoom,n=a.state.currentLocation,o=n.lat,i=n.lng,c=new e.LatLng(o,i),r=Object.assign({},{center:c,zoom:t,zoomControl:!1,scaleControl:!1,fullscreenControl:!1,mapTypeControl:!1,streetViewControl:!1});a.map=new e.Map(a.mymap.current,r);["click","dragend","zoom_changed"].forEach(function(e){a.map.addListener(e,a.handleEvent(e))}),e.event.trigger(a.map,"ready")}},a.camelize=function(e,t){return e.split(t).map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join("")},a.recenterMap=function(e){var t=a.map,n=a.props.google.maps;if(t){var o=new n.LatLng(e.lat,e.lng);t.panTo(o)}},a.updateCurrent=function(e){a.props.updateLocationData(e)},a.renderChildren=function(){var e=a.props.children;if(e)return o.a.Children.map(e,function(e){return o.a.cloneElement(e,{map:a.map,google:a.props.google,mapCenter:a.state.currentLocation,currentLocation:a.props.currentLocation,isCurrentPositionReceived:a.state.isCurrentPositionReceived})})};var n=e.initialCenter,i=n.lat,c=n.lng;return a.state={currentLocation:{lat:i,lng:c},zoom:17,isCurrentPositionReceived:!1},a.mymap=o.a.createRef(),a.mymarker=o.a.createRef(),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.google!==this.props.google&&this.loadMap(),t.currentLocation!==this.state.currentLocation&&this.recenterMap(this.state.currentLocation),e.currentLocation!==this.props.currentLocation&&this.state.isCurrentPositionReceived&&this.props.isRecordingMode&&this.recenterMap(this.props.currentLocation)}},{key:"handleEvent",value:function(e){var t,a=this;[" ","_"].forEach(function(t){return e=a.camelize(e,t)});var n="on".concat(this.camelize(e));return function(e){t&&(clearTimeout(t),t=null),t=setTimeout(function(){a.props[n]&&a.props[n](a.props,a.map,e)},0)}}},{key:"render",value:function(){this.props.google,this.state.zoom;return o.a.createElement("div",{ref:this.mymap,style:{width:this.props.mapDivDimentions.width+"px",height:this.props.mapDivDimentions.height+"px",position:"relative"}},"Loading...",this.renderChildren())}}]),t}(n.Component),f=g;g.defaultProps={zoom:16,initialCenter:{lat:53.893009,lng:27.567444},centerAroundCurrentLocation:!1};var M,C=[{path:"M69.9,36c0.3-9.3,0.3-9.1,0.3-9.1c0-0.2,0.7-7.9-0.6-15.3c-1.3-7.5-9.7-9.5-9.7-9.5l-0.4,0l-8.9-0.3v0l-8.8,0.3  l-0.4,0c0,0-8.4,2.1-9.7,9.5c-1.3,7.4-0.6,15.1-0.6,15.3c0,0,0-0.3,0.3,9.1c0.4,9.8-0.6,34-0.5,37c0.1,2.9-0.2,9.2,0.4,10.8  c0.6,1.6,2.6,9.6,2.6,9.6s3.2,6.2,16.8,5.3v0c13.5,0.9,16.7-5.3,16.7-5.3s2-8,2.6-9.6c0.6-1.6,0.2-7.9,0.4-10.8  C70.5,70,69.5,45.8,69.9,36L69.9,36z",fill:"#D14C32"},{path:"M61.7,27.5c-3.2-1.6-11.1-1.8-11.1-1.8v0c0,0-8,0.1-11.1,1.8c-3.2,1.6-4.3,2.4-4.1,3.5c0.2,1.1,2.6,12,2.6,12.3  c0,0.3,0.2,0.7,1.5,0.4c1.2-0.4,11.2-0.8,11.2-0.8v0c0,0,10,0.4,11.2,0.8c1.2,0.4,1.5-0.1,1.5-0.4c0-0.3,2.4-11.2,2.6-12.3  C66,29.9,64.9,29.2,61.7,27.5L61.7,27.5z",fill:"#121215"},{path:"M67.4,32.8c0,0,0,12.6,0,16.3c0,3.7,0,8.7-0.3,12.1C66.8,64.7,66.1,80,66.1,80v0.3c0,0-2-5.3-2.4-9.4  c-0.9-4-0.5-14,0-20.1C64,44.8,67,33.9,67.4,32.8z",fill:"#101114"},{path:"M62.4,76.1c-0.2-1.4-0.4-1-0.5-1.1c-0.1-0.1-1.5,0.3-2.1,0.4c-4.6,0.8-9.3,0.6-9.3,0.6v0c0,0-4.7,0.2-9.3-0.6  c-0.6-0.1-2-0.5-2.1-0.4c-0.1,0.1-0.3-0.3-0.5,1.1c-0.2,1.4-1.4,9.9-1.3,10c0.1,0.1,2.9,1.8,7.9,2.6c1.1,0.1,5.3,0.2,5.3,0.2v0  c0,0,4.2-0.2,5.3-0.2c5-0.8,7.8-2.5,7.9-2.6C63.8,86.1,62.7,77.5,62.4,76.1L62.4,76.1z",fill:"#131417"},{path:"M67,36l1.2,0.7V38H67V36z",fill:"#0D0E13"},{path:"M59,2.9c-0.1-0.1-0.2-0.1-0.4-0.2C58.1,2.6,58.3,2.6,59,2.9z",fill:"#C2C6C1"},{path:"M67.7,11.8C66.9,6.6,61,3.7,59,2.9c2,1.4,3.4,9.1,4.5,14c1.1,5.2,1.8,13.5,1.8,13.5s2.4,0.4,3.6,7  C69.7,41.5,68.9,18.8,67.7,11.8L67.7,11.8z",fill:"#D8684A"},{path:"M42.6,2.8c-0.1,0-0.2,0.1-0.4,0.2C42.9,2.7,43.2,2.6,42.6,2.8z",fill:"#C2C6C1"},{path:"M33.5,11.8c-1.2,7-1.9,29.7-1.1,25.5c1.1-6.5,3.6-7,3.6-7s0.6-8.3,1.8-13.5c1.1-4.9,2.5-12.6,4.5-14  C40.3,3.8,34.4,6.6,33.5,11.8z",fill:"#D8684A"},{path:"M63.4,56.8l3.8-2.9v3.4l-3.8,2.4V56.8z M37.7,83.9c-0.2,1.3-0.3,2.2-0.2,2.2c0.1,0.1,2.9,1.8,7.9,2.6  c1.1,0.1,5.3,0.2,5.3,0.2v0c0,0,4.2-0.2,5.3-0.2c5-0.8,7.8-2.5,7.9-2.6c0,0-0.3-2.4-0.6-4.9L37.7,83.9L37.7,83.9z",fill:"#202226"},{path:"M37.3,40.1l24.4-5.8l3.7-1.2c0.2-1.1,0.4-1.9,0.4-2.1c0.2-1.1-0.9-1.9-4.1-3.5c-3.2-1.6-11.1-1.8-11.1-1.8v0  c0,0-8,0.1-11.1,1.8c-3.2,1.6-4.3,2.4-4.1,3.5C35.5,31.7,36.5,36.7,37.3,40.1L37.3,40.1z",fill:"#212428"},{path:"M33.9,32.9c0,0,0,12.6,0,16.3c0,3.7,0,8.7,0.3,12.1c0.3,3.4,0.9,18.7,0.9,18.7v0.3c0,0,2-5.3,2.4-9.4  c0.9-4,0.5-14,0-20.1C37.3,44.8,34.3,33.9,33.9,32.9z",fill:"#101114"},{path:"M69.9,36c0.3-9.3,0.3-9.1,0.3-9.1c0-0.2,0.7-7.9-0.6-15.3c-1.3-7.5-9.7-9.5-9.7-9.5l-0.4,0l-8.9-0.3v0l-8.8,0.3  l-0.4,0c0,0-8.4,2.1-9.7,9.5c-1.3,7.4-0.6,15.1-0.6,15.3c0,0,0-0.3,0.3,9.1c0.4,9.8-0.6,34-0.5,37c0.1,2.9-0.2,9.2,0.4,10.8  c0.6,1.6,2.6,9.6,2.6,9.6s3.2,6.2,16.8,5.3v0c13.5,0.9,16.7-5.3,16.7-5.3s2-8,2.6-9.6c0.6-1.6,0.2-7.9,0.4-10.8  C70.5,70,69.5,45.8,69.9,36L69.9,36z M69.3,83.9c-1.6,9.7-4,11.2-6.7,12.7c-2.7,1.4-11.9,1.6-11.9,1.6v0c-0.9,0-9.3-0.3-11.9-1.6  c-2.7-1.5-5.1-3-6.7-12.7c-1.6-9.7,0.6-13.6,0.4-21.9c-0.3-8.3-0.3-29.6-0.2-32c0.1-2.4-0.6-19.1,1.7-21.5c2.3-2.4,5.6-5.7,7.6-5.8  C42.6,2.7,44,2.6,45,2.6V2.6h5.7v0h5.6v0.1c1.2,0,2.3,0,3.5,0.1c2,0.1,5.3,3.4,7.6,5.8c2.3,2.4,1.6,19.1,1.7,21.5  c0.1,2.4,0.1,23.7-0.2,32C68.6,70.3,70.9,74.2,69.3,83.9L69.3,83.9z",fill:"#9E4A36"},{path:"M34.3,91c0,0,1.5,3.3,4,4.1c2.4,0.9,4.2,1.3,4.2,1.3s-3.1,0-4.8-1C36.1,94.5,34.2,93.1,34.3,91z",fill:"#9E4A36"},{path:"M41.5,2.7c0,0-3.4,1.6-4.4,2.8c-1,1.1-2.5,3-2.6,3.3c0,0.2,0,0.9,0,0.9S40.6,3.1,41.5,2.7z",fill:"#FEFDF8"},{path:"M50.6,1.8L50.6,1.8L50.6,1.8L50.6,1.8z M58.4,3c0-0.3-1.7-0.8-2.2-0.9c-0.4-0.1-5.3-0.2-5.6-0.2l0,0  c-0.3,0-5.2,0.2-5.6,0.3c-0.4,0.1-2.1,0.6-2.2,0.9c0,0.3,0.3,0.5,0.7,0.3s1-0.7,1.4-0.8c0.4-0.1,5.7-0.3,5.7-0.3l0,0  c0.4,0,5.2,0.2,5.6,0.3c0.4,0.1,1,0.6,1.4,0.8C58.1,3.5,58.4,3.3,58.4,3L58.4,3z",fill:"#1D2021"},{path:"M32.8,36.8c0,0-3.4,1.4-3.6,2.7C29,40.8,29,41,29.2,41s3.8-1.9,3.8-1.9v-2.3L32.8,36.8L32.8,36.8z",fill:"#D14C32"},{path:"M29.2,41.3l0-0.3l3.8-1.9v0.3L29.2,41.3z",fill:"#0D0E13"},{path:"M34.3,36.1L33,36.8V38h1.2V36.1z",fill:"#0D0E13"},{path:"M37.9,56.9L34,54v3.4l3.8,2.4V56.9z",fill:"#202226"},{path:"M38.7,76.1c0.2-1.4,0.4-1,0.5-1.1c0.1-0.1,1.5,0.3,2.1,0.4c4.6,0.8,9.3,0.6,9.3,0.6v0c0,0,4.7,0.2,9.3-0.6  c0.6-0.1,2-0.5,2.1-0.4c0.1,0.1,0.3-0.3,0.5,1.1c0.2,1.4,1.4,9.9,1.3,10c-0.1,0.1-2.9,1.8-7.9,2.6c-1.1,0.1-5.3,0.2-5.3,0.2v0  c0,0-4.2-0.2-5.3-0.2c-5-0.8-7.8-2.5-7.9-2.6C37.3,86.1,38.5,77.5,38.7,76.1L38.7,76.1z M39.6,27.5c3.2-1.6,11.1-1.8,11.1-1.8v0  c0,0,8,0.1,11.1,1.8c3.2,1.6,4.3,2.4,4.1,3.5c-0.2,1.1-2.6,12-2.6,12.3c0,0.3-0.2,0.7-1.5,0.4c-1.2-0.4-11.2-0.8-11.2-0.8v0  c0,0-10,0.4-11.2,0.8c-1.2,0.4-1.5-0.1-1.5-0.4c0-0.3-2.4-11.2-2.6-12.3C35.3,29.9,36.4,29.2,39.6,27.5L39.6,27.5z",fill:"#343C3E"},{path:"M38.2,28.3c-2.2,1.2-3,1.9-2.8,2.8c0.2,1.1,2.6,12,2.6,12.3c0,0.3,0.2,0.7,1.5,0.4c0.3-0.1,1-0.2,2-0.2  C39.9,39.9,38.7,31.8,38.2,28.3L38.2,28.3z M63.1,28.2c2.2,1.2,3,1.9,2.8,2.8c-0.2,1.1-2.6,12-2.6,12.3c0,0.3-0.2,0.7-1.5,0.4  c-0.3-0.1-1-0.2-2-0.2C61.4,39.9,62.6,31.8,63.1,28.2L63.1,28.2z",fill:"#2E3436"},{path:"M65.3,29.7c-0.6-0.6-1.8-1.2-3.6-2.2c-3.2-1.6-11.1-1.8-11.1-1.8v0h0v0c-0.6,0-8.1,0.2-11.1,1.8  c-1.8,0.9-2.9,1.6-3.6,2.2l2.8,2.2c0,0,5.7-0.9,11.9-1v0c6.1,0.1,11.8,0.7,11.8,0.7L65.3,29.7L65.3,29.7z",fill:"#202226"},{path:"M59.8,2.7c0,0,3.4,1.6,4.4,2.8c1,1.1,2.5,3,2.6,3.3c0,0.2,0,0.9,0,0.9S60.7,3.1,59.8,2.7z",fill:"#FEFDF8"},{path:"M55.4,3.8H44.8c0,0-2.2,0.6-2.9,8.6c-0.7,8-2,14.1,3,12.7c4.9-1.4,7.6-0.2,9.8-0.3c2.2-0.2,5.6,2.3,4.3-8.6  C57.7,5.2,57.6,4.6,55.4,3.8L55.4,3.8z",fill:"#D8684A"},{path:"M44.5,24.3l1.8-18.1l-1.3,6.4L44.5,24.3z M56.8,24.2L55,6.2l1.3,6.4L56.8,24.2z M66.9,90.9c0,0-1.5,3.3-4,4.1  c-2.4,0.9-4.2,1.3-4.2,1.3s3.1,0,4.8-1C65.2,94.5,67,93,66.9,90.9L66.9,90.9z",fill:"#9E4A36"},{path:"M39.2,75c-0.1,0.1-0.3-0.3-0.5,1.1s-1.4,9.9-1.3,10c0,0,0.7,0.5,2,1L41,75.4C40.3,75.2,39.2,74.9,39.2,75  L39.2,75z M62.4,76.2c-0.2-1.4-0.4-1-0.5-1.1c0-0.1-1.1,0.2-1.8,0.3l1.6,11.8c1.2-0.5,1.9-0.9,2-1C63.8,86.1,62.6,77.6,62.4,76.2  L62.4,76.2z",fill:"#2E3436"},{path:"M68.4,36.8c0,0,3.4,1.4,3.6,2.7s0.2,1.5,0,1.5c-0.2,0-3.8-1.9-3.8-1.9v-2.3L68.4,36.8L68.4,36.8z",fill:"#D14C32"},{path:"M72,41.3l0-0.3L68.3,39v0.3L72,41.3z",fill:"#0D0E13"},{path:"M55.9,88.3H44.7c0,0-6.1-0.8-5.3,1.8c0.8,2.6-0.8,5.8,7.6,5.8h6.5c8.5,0,6.8-3.2,7.6-5.8  C62,87.4,55.9,88.3,55.9,88.3L55.9,88.3z",fill:"#D8684A"},{path:"M51,86.9c-5.2,0-9.8-1.1-13.1-3l-0.2,0c-0.3,2.4-0.3,2.2-0.2,2.3c0.1,0.1,2.9,1.8,7.9,2.6  c1.1,0.1,5.3,0.2,5.3,0.2v0c0,0,4.2-0.2,5.3-0.2c5-0.8,7.8-2.5,7.9-2.6c0,0-0.1-0.8-0.2-2C60.4,85.9,55.9,86.9,51,86.9z",fill:"#202226"},{path:"M58.3,51.8c1.2-3.8-0.8-5.2-3.1-5.6c-1.8-0.3-6.4-0.2-7.9-0.1c-2.7,0.2-5.6,1.3-4.2,5.7c2.4,7.5-0.1,17.8,0,19  c0.1,0.9,1.4,2.4,4,2.8c0.9,0.1,6.8,0.1,7.9-0.1c2.1-0.5,3.2-1.8,3.3-2.6C58.4,69.6,55.9,59.3,58.3,51.8L58.3,51.8z",fill:"#D8684A"}],w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).componentDidMount=function(){a.marker=[]},a.componentDidUpdate=function(e){var t=a.props,n=t.map,o=t.angle,i=t.move,c=t.isCurrentPositionReceived,r=a.props.currentLocation.speed;(n!==e.map||r>5&&(o!==e.angle||i>5)||c!==e.isCurrentPositionReceived)&&a.renderMarker()},a.componentWillUnmount=function(){a.removeMarker()},a.removeMarker=function(){a.marker&&a.marker.length>0&&a.marker.forEach(function(e){e.setMap(null)})},a.renderMarker=function(){a.removeMarker();var e=a.props,t=e.map,n=e.google,o=e.mapCenter,i=e.currentLocation,c=i.lat?{lat:i.lat,lng:i.lng}:void 0,r=c||o;c=new n.maps.LatLng(r.lat,r.lng),C.forEach(function(e,o){var i={path:e.path,fillColor:e.fill,strokeColor:e.fill,fillOpacity:1,scale:.4,anchor:new n.maps.Point(50,50),rotation:a.props.angle},r={map:t,position:c,icon:i};a.marker[o]=new n.maps.Marker(r)}),a.props.resetMove()},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return null}}]),t}(n.Component),L=6371e3,b={enableHighAccuracy:!0,timeout:5e3,maximumAge:0},E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){a.setState({isDataFetched:!0,data:[]}),window.addEventListener("load",function(){window.history.pushState({noBackExitsApp:!0},"")}),window.addEventListener("popstate",function(e){e.state&&e.state.noBackExitsApp&&window.history.pushState({noBackExitsApp:!0},"")}),window.addEventListener("resize",a.updateWindowDimensions)},a.componentDidUpdate=function(e,t){},a.componentWillUnmount=function(){window.removeEventListener("resize",a.updateWindowDimensions)},a.updateWindowDimensions=function(){a.setState({mapDivDimentions:{height:window.innerHeight,width:window.innerWidth}},function(){return console.log(a.state.mapDivDimentions)})},a.toggleRecording=function(){a.state.isRecordingMode?a.stopRecording():a.startRecording(),a.setState({isRecordingMode:!a.state.isRecordingMode})},a.startRecording=function(){navigator&&navigator.geolocation&&(console.log(navigator.onLine),M=navigator.geolocation.watchPosition(a.updateLocationData,a.err,b),window.DeviceMotionEvent&&window.addEventListener("devicemotion",a.updateAccelerationData))},a.err=function(){console.log("error")},a.updateAccelerationData=function(e){var t=e.acceleration,n=t.x,o=t.y,i=t.z,c=a.state.acceleration,r=c.average,s=c.max,l=c.ticks;if(null!==n&&null!==o&&null!==i){var p=Math.pow(n*n+o*o+i*i,1/3);s=p>s?p:s,r=(r*l+p)/l+1,l++,a.setState({acceleration:{average:r,max:s,ticks:l}})}},a.toRad=function(e){return e*Math.PI/180},a.calculateDistance=function(e,t,n,o){var i=a.toRad(n-e),c=a.toRad(o-t),r=Math.sin(i/2)*Math.sin(i/2)+Math.cos(a.toRad(e))*Math.cos(a.toRad(n))*Math.sin(c/2)*Math.sin(c/2);return 2*L*Math.atan2(Math.sqrt(r),Math.sqrt(1-r))},a.calculateAngle=function(e,t,a,n){var o=n-t,i=Math.sin(o)*Math.cos(a),c=Math.cos(e)*Math.sin(a)-Math.sin(e)*Math.cos(a)*Math.cos(o),r=Math.atan2(i,c);return r=360-(r=((r*=180/Math.PI)+360)%360)},a.updateLocationData=function(e){var t=a.state.currentLocation,n=e.coords.latitude,o=e.coords.longitude,i=e.timestamp,c=a.calculateDistance(t.lat,t.lng,n,o),r=a.calculateAngle(t.lat,t.lng,n,o),s=Math.abs(t.timestamp-i)/1e3,l=c/s?c/s*3600/1e3:0,p=a.state.data;if(p.length>=1){var u=p[p.length-1];console.log(u),u.lat!=n&&u.lng!=o&&p.push({lat:n,lng:o})}else p.push({lat:n,lng:o});a.setState({previousLocation:t,currentLocation:{lat:n,lng:o,speed:l,timestamp:i},data:p,angle:Math.abs(r-a.state.angle)>22?r:a.state.angle,move:a.state.move+c})},a.updateResultingData=function(){},a.stopRecording=function(){console.log("stopped"),console.log(a.state.data),navigator.geolocation.clearWatch(M),window.removeEventListener("devicemotion",a.updateAccelerationData)},a.onChartViewSelected=function(){a.setState({isChartView:!0})},a.onMapViewSelected=function(){a.setState({isChartView:!1})},a.resetMove=function(){a.setState({move:0})},a.onZoomChanged=function(e,t,a){console.log(t.getZoom())},a.state={isDataFetched:!1,isChartView:!1,isRecordingMode:!1,data:[],currentLocation:{},previousLocation:{},acceleration:{average:0,max:0,ticks:0},context:null,zoom:16,angle:0,move:0,mapDivDimentions:{height:window.innerHeight,width:window.innerWidth},isGranted:!1},a.canvas=o.a.createRef(),a.mymap=o.a.createRef(),a.mymarker=o.a.createRef(),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){this.props.google,this.state.zoom;var e=this.state.isRecordingMode?"Stop Recording":"Start Recording",t=this.state.isRecordingMode?"#e34929":"#757d75";if(this.props.loaded)return o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"main"},o.a.createElement("div",{id:"map",className:"map",style:{width:"100%",height:"100%",display:this.state.isChartView?"none":"block"}},o.a.createElement(f,{centerAroundCurrentLocation:!0,google:this.props.google,updateLocationData:this.updateLocationData,currentLocation:this.state.currentLocation,isRecordingMode:this.state.isRecordingMode,onZoomChanged:this.onZoomChanged,mapDivDimentions:this.state.mapDivDimentions},o.a.createElement(w,{angle:this.state.angle,move:this.state.move,resetMove:this.resetMove}),o.a.createElement(v.Polyline,{path:this.state.data,strokeColor:"#4D8FAC",strokeOpacity:.8,strokeWeight:4}))),o.a.createElement("div",{className:"menu"},o.a.createElement("div",{className:"top-menu"},o.a.createElement("div",{className:"top-left-menu"},o.a.createElement("div",{className:"burger-menu"}),o.a.createElement("div",{className:"page-title"},"Report a bump")),o.a.createElement("div",{className:"top-right-menu"},o.a.createElement("div",{className:"top-menu-settings"}))),o.a.createElement("div",{className:"sub-menu"},o.a.createElement("div",{className:"sub-menu-tab ".concat(this.state.isChartView?"tab-active":""),onClick:this.onChartViewSelected},"chart view"),o.a.createElement("div",{className:"sub-menu-tab ".concat(this.state.isChartView?"":"tab-active"),onClick:this.onMapViewSelected},"map view"))),o.a.createElement("div",{style:{display:this.state.isChartView?"block":"none",marginTop:"18vh"}},"Max: ",this.state.acceleration.max,", average: ",this.state.acceleration.average,", ticks: ",this.state.acceleration.ticks)),o.a.createElement("div",{className:"bottom-ruler-btn",style:{backgroundColor:t},onClick:this.toggleRecording,disabled:!this.state.isDataFetched},e))}}]),t}(n.Component),z=Object(v.GoogleApiWrapper)({apiKey:"AIzaSyDEVWK9Upl3k2YqFEmSPAitUBZoi36oFAo"})(E),D=(a(51),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"start-page-main"},o.a.createElement("div",{className:"logo-container"},o.a.createElement("div",{className:"logo-txt"},"Bumpy"),o.a.createElement("div",{className:"logo-txt"},"Roads"),o.a.createElement("div",{className:"logo-txt"},"Informer"))),o.a.createElement("div",{className:"bottom-ruler-btn",onClick:function(){e.props.permissionGranted()}},"get started"))}}]),t}(n.Component)),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).permissionGranted=function(){a.setState({isGranted:!0})},a.state={isGranted:!1},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return this.state.isGranted?o.a.createElement("div",{className:"App"},o.a.createElement(z,null)):o.a.createElement(D,{permissionGranted:this.permissionGranted})}}]),t}(n.Component);c.a.render(o.a.createElement(k,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/reactjs_accel",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/reactjs_accel","/service-worker.js");r?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):s(t,e)})}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.68a87dc7.chunk.js.map