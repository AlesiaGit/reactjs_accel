(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(t,e,a){t.exports=a(53)},25:function(t,e,a){},26:function(t,e,a){},27:function(t,e,a){},52:function(t,e,a){},53:function(t,e,a){"use strict";a.r(e);var n=a(1),o=a.n(n),i=a(13),c=a.n(i),r=(a(25),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function s(t,e){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var a=t.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}}).catch(function(t){console.error("Error during service worker registration:",t)})}var l=a(3),p=a(4),u=a(6),d=a(5),m=a(7),h=(a(26),a(15)),v=(a(27),a(18)),g=(a.n(v).a.initializeApp({apiKey:"AIzaSyBexhCuV6JNCsyakFOeBK7NmFb_oM_pgxo",authDomain:"bumpyroadsinformer.firebaseapp.com",databaseURL:"https://bumpyroadsinformer.firebaseio.com",projectId:"bumpyroadsinformer",storageBucket:"",messagingSenderId:"854546127925",appId:"1:854546127925:web:d3c2a81c7c4e9ba6"}).firestore(),a(10)),f=function(t){function e(t){var a;Object(l.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).componentDidMount=function(){a.props.centerAroundCurrentLocation&&navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){var e=t.coords;a.setState({currentLocation:{lat:e.latitude,lng:e.longitude},isCurrentPositionReceived:!0},a.props.updateLocationData(t))}),a.loadMap()},a.loadMap=function(){if(a.props.google){var t=a.props.google.maps,e=a.props.zoom,n=a.state.currentLocation,o=n.lat,i=n.lng,c=new t.LatLng(o,i),r=Object.assign({},{center:c,zoom:e,zoomControl:!1,scaleControl:!1,fullscreenControl:!1,mapTypeControl:!1,streetViewControl:!1});a.map=new t.Map(a.mymap.current,r);["click","dragend","zoom_changed"].forEach(function(t){a.map.addListener(t,a.handleEvent(t))}),t.event.trigger(a.map,"ready")}},a.camelize=function(t,e){return t.split(e).map(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}).join("")},a.recenterMap=function(t){var e=a.map,n=a.props.google.maps;if(e){var o=new n.LatLng(t.lat,t.lng);e.panTo(o)}},a.updateCurrent=function(t){a.props.updateLocationData(t)},a.renderChildren=function(){var t=a.props.children;if(t)return o.a.Children.map(t,function(t){return o.a.cloneElement(t,{map:a.map,google:a.props.google,mapCenter:a.state.currentLocation,currentLocation:a.props.currentLocation,isCurrentPositionReceived:a.state.isCurrentPositionReceived})})};var n=t.initialCenter,i=n.lat,c=n.lng;return a.state={currentLocation:{lat:i,lng:c},zoom:17,isCurrentPositionReceived:!1},a.mymap=o.a.createRef(),a.mymarker=o.a.createRef(),a}return Object(m.a)(e,t),Object(p.a)(e,[{key:"componentDidUpdate",value:function(t,e){t.google!==this.props.google&&this.loadMap(),e.currentLocation!==this.state.currentLocation&&this.recenterMap(this.state.currentLocation),t.currentLocation!==this.props.currentLocation&&this.state.isCurrentPositionReceived&&this.props.isRecordingMode&&this.recenterMap(this.props.currentLocation)}},{key:"handleEvent",value:function(t){var e,a=this;[" ","_"].forEach(function(e){return t=a.camelize(t,e)});var n="on".concat(this.camelize(t));return function(t){e&&(clearTimeout(e),e=null),e=setTimeout(function(){a.props[n]&&a.props[n](a.props,a.map,t)},0)}}},{key:"render",value:function(){this.props.google,this.state.zoom;return o.a.createElement("div",{ref:this.mymap,style:{width:this.props.mapDivDimentions.width+"px",height:this.props.mapDivDimentions.height+"px",position:"relative"}},"Loading...",this.renderChildren())}}]),e}(n.Component),C=f;f.defaultProps={zoom:16,initialCenter:{lat:53.893009,lng:27.567444},centerAroundCurrentLocation:!1};var M,w=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).componentDidMount=function(){a.loadMap()},a.loadMap=function(){if(a.props.google){console.log(a.props.favorities);var t=a.props.google.maps,e=a.props.favorities.center,n=e.lat,o=e.lng,i=new t.LatLng(n,o),c=Object.assign({},{center:i,zoom:a.props.favorities.zoom,zoomControl:!1,scaleControl:!1,fullscreenControl:!1,mapTypeControl:!1,streetViewControl:!1});a.map=new t.Map(a.historicmap.current,c),new t.Polygon({paths:a.props.favorities.path,strokeColor:"#4D8FAC",strokeOpacity:.8,strokeWeight:4}).setMap(a.map)}},a.historicmap=o.a.createRef(),a}return Object(m.a)(e,t),Object(p.a)(e,[{key:"componentDidUpdate",value:function(t,e){t.google!==this.props.google&&this.loadMap(),t.favorities!==this.props.favorities&&this.loadMap()}},{key:"render",value:function(){if(this.props.favorities)return o.a.createElement("div",{ref:this.historicmap,style:{width:this.props.mapDivDimentions.width+"px",height:this.props.mapDivDimentions.height+"px",position:"relative"}})}}]),e}(n.Component),L=[{path:"M69.9,36c0.3-9.3,0.3-9.1,0.3-9.1c0-0.2,0.7-7.9-0.6-15.3c-1.3-7.5-9.7-9.5-9.7-9.5l-0.4,0l-8.9-0.3v0l-8.8,0.3  l-0.4,0c0,0-8.4,2.1-9.7,9.5c-1.3,7.4-0.6,15.1-0.6,15.3c0,0,0-0.3,0.3,9.1c0.4,9.8-0.6,34-0.5,37c0.1,2.9-0.2,9.2,0.4,10.8  c0.6,1.6,2.6,9.6,2.6,9.6s3.2,6.2,16.8,5.3v0c13.5,0.9,16.7-5.3,16.7-5.3s2-8,2.6-9.6c0.6-1.6,0.2-7.9,0.4-10.8  C70.5,70,69.5,45.8,69.9,36L69.9,36z",fill:"#D14C32"},{path:"M61.7,27.5c-3.2-1.6-11.1-1.8-11.1-1.8v0c0,0-8,0.1-11.1,1.8c-3.2,1.6-4.3,2.4-4.1,3.5c0.2,1.1,2.6,12,2.6,12.3  c0,0.3,0.2,0.7,1.5,0.4c1.2-0.4,11.2-0.8,11.2-0.8v0c0,0,10,0.4,11.2,0.8c1.2,0.4,1.5-0.1,1.5-0.4c0-0.3,2.4-11.2,2.6-12.3  C66,29.9,64.9,29.2,61.7,27.5L61.7,27.5z",fill:"#121215"},{path:"M67.4,32.8c0,0,0,12.6,0,16.3c0,3.7,0,8.7-0.3,12.1C66.8,64.7,66.1,80,66.1,80v0.3c0,0-2-5.3-2.4-9.4  c-0.9-4-0.5-14,0-20.1C64,44.8,67,33.9,67.4,32.8z",fill:"#101114"},{path:"M62.4,76.1c-0.2-1.4-0.4-1-0.5-1.1c-0.1-0.1-1.5,0.3-2.1,0.4c-4.6,0.8-9.3,0.6-9.3,0.6v0c0,0-4.7,0.2-9.3-0.6  c-0.6-0.1-2-0.5-2.1-0.4c-0.1,0.1-0.3-0.3-0.5,1.1c-0.2,1.4-1.4,9.9-1.3,10c0.1,0.1,2.9,1.8,7.9,2.6c1.1,0.1,5.3,0.2,5.3,0.2v0  c0,0,4.2-0.2,5.3-0.2c5-0.8,7.8-2.5,7.9-2.6C63.8,86.1,62.7,77.5,62.4,76.1L62.4,76.1z",fill:"#131417"},{path:"M67,36l1.2,0.7V38H67V36z",fill:"#0D0E13"},{path:"M59,2.9c-0.1-0.1-0.2-0.1-0.4-0.2C58.1,2.6,58.3,2.6,59,2.9z",fill:"#C2C6C1"},{path:"M67.7,11.8C66.9,6.6,61,3.7,59,2.9c2,1.4,3.4,9.1,4.5,14c1.1,5.2,1.8,13.5,1.8,13.5s2.4,0.4,3.6,7  C69.7,41.5,68.9,18.8,67.7,11.8L67.7,11.8z",fill:"#D8684A"},{path:"M42.6,2.8c-0.1,0-0.2,0.1-0.4,0.2C42.9,2.7,43.2,2.6,42.6,2.8z",fill:"#C2C6C1"},{path:"M33.5,11.8c-1.2,7-1.9,29.7-1.1,25.5c1.1-6.5,3.6-7,3.6-7s0.6-8.3,1.8-13.5c1.1-4.9,2.5-12.6,4.5-14  C40.3,3.8,34.4,6.6,33.5,11.8z",fill:"#D8684A"},{path:"M63.4,56.8l3.8-2.9v3.4l-3.8,2.4V56.8z M37.7,83.9c-0.2,1.3-0.3,2.2-0.2,2.2c0.1,0.1,2.9,1.8,7.9,2.6  c1.1,0.1,5.3,0.2,5.3,0.2v0c0,0,4.2-0.2,5.3-0.2c5-0.8,7.8-2.5,7.9-2.6c0,0-0.3-2.4-0.6-4.9L37.7,83.9L37.7,83.9z",fill:"#202226"},{path:"M37.3,40.1l24.4-5.8l3.7-1.2c0.2-1.1,0.4-1.9,0.4-2.1c0.2-1.1-0.9-1.9-4.1-3.5c-3.2-1.6-11.1-1.8-11.1-1.8v0  c0,0-8,0.1-11.1,1.8c-3.2,1.6-4.3,2.4-4.1,3.5C35.5,31.7,36.5,36.7,37.3,40.1L37.3,40.1z",fill:"#212428"},{path:"M33.9,32.9c0,0,0,12.6,0,16.3c0,3.7,0,8.7,0.3,12.1c0.3,3.4,0.9,18.7,0.9,18.7v0.3c0,0,2-5.3,2.4-9.4  c0.9-4,0.5-14,0-20.1C37.3,44.8,34.3,33.9,33.9,32.9z",fill:"#101114"},{path:"M69.9,36c0.3-9.3,0.3-9.1,0.3-9.1c0-0.2,0.7-7.9-0.6-15.3c-1.3-7.5-9.7-9.5-9.7-9.5l-0.4,0l-8.9-0.3v0l-8.8,0.3  l-0.4,0c0,0-8.4,2.1-9.7,9.5c-1.3,7.4-0.6,15.1-0.6,15.3c0,0,0-0.3,0.3,9.1c0.4,9.8-0.6,34-0.5,37c0.1,2.9-0.2,9.2,0.4,10.8  c0.6,1.6,2.6,9.6,2.6,9.6s3.2,6.2,16.8,5.3v0c13.5,0.9,16.7-5.3,16.7-5.3s2-8,2.6-9.6c0.6-1.6,0.2-7.9,0.4-10.8  C70.5,70,69.5,45.8,69.9,36L69.9,36z M69.3,83.9c-1.6,9.7-4,11.2-6.7,12.7c-2.7,1.4-11.9,1.6-11.9,1.6v0c-0.9,0-9.3-0.3-11.9-1.6  c-2.7-1.5-5.1-3-6.7-12.7c-1.6-9.7,0.6-13.6,0.4-21.9c-0.3-8.3-0.3-29.6-0.2-32c0.1-2.4-0.6-19.1,1.7-21.5c2.3-2.4,5.6-5.7,7.6-5.8  C42.6,2.7,44,2.6,45,2.6V2.6h5.7v0h5.6v0.1c1.2,0,2.3,0,3.5,0.1c2,0.1,5.3,3.4,7.6,5.8c2.3,2.4,1.6,19.1,1.7,21.5  c0.1,2.4,0.1,23.7-0.2,32C68.6,70.3,70.9,74.2,69.3,83.9L69.3,83.9z",fill:"#9E4A36"},{path:"M34.3,91c0,0,1.5,3.3,4,4.1c2.4,0.9,4.2,1.3,4.2,1.3s-3.1,0-4.8-1C36.1,94.5,34.2,93.1,34.3,91z",fill:"#9E4A36"},{path:"M41.5,2.7c0,0-3.4,1.6-4.4,2.8c-1,1.1-2.5,3-2.6,3.3c0,0.2,0,0.9,0,0.9S40.6,3.1,41.5,2.7z",fill:"#FEFDF8"},{path:"M50.6,1.8L50.6,1.8L50.6,1.8L50.6,1.8z M58.4,3c0-0.3-1.7-0.8-2.2-0.9c-0.4-0.1-5.3-0.2-5.6-0.2l0,0  c-0.3,0-5.2,0.2-5.6,0.3c-0.4,0.1-2.1,0.6-2.2,0.9c0,0.3,0.3,0.5,0.7,0.3s1-0.7,1.4-0.8c0.4-0.1,5.7-0.3,5.7-0.3l0,0  c0.4,0,5.2,0.2,5.6,0.3c0.4,0.1,1,0.6,1.4,0.8C58.1,3.5,58.4,3.3,58.4,3L58.4,3z",fill:"#1D2021"},{path:"M32.8,36.8c0,0-3.4,1.4-3.6,2.7C29,40.8,29,41,29.2,41s3.8-1.9,3.8-1.9v-2.3L32.8,36.8L32.8,36.8z",fill:"#D14C32"},{path:"M29.2,41.3l0-0.3l3.8-1.9v0.3L29.2,41.3z",fill:"#0D0E13"},{path:"M34.3,36.1L33,36.8V38h1.2V36.1z",fill:"#0D0E13"},{path:"M37.9,56.9L34,54v3.4l3.8,2.4V56.9z",fill:"#202226"},{path:"M38.7,76.1c0.2-1.4,0.4-1,0.5-1.1c0.1-0.1,1.5,0.3,2.1,0.4c4.6,0.8,9.3,0.6,9.3,0.6v0c0,0,4.7,0.2,9.3-0.6  c0.6-0.1,2-0.5,2.1-0.4c0.1,0.1,0.3-0.3,0.5,1.1c0.2,1.4,1.4,9.9,1.3,10c-0.1,0.1-2.9,1.8-7.9,2.6c-1.1,0.1-5.3,0.2-5.3,0.2v0  c0,0-4.2-0.2-5.3-0.2c-5-0.8-7.8-2.5-7.9-2.6C37.3,86.1,38.5,77.5,38.7,76.1L38.7,76.1z M39.6,27.5c3.2-1.6,11.1-1.8,11.1-1.8v0  c0,0,8,0.1,11.1,1.8c3.2,1.6,4.3,2.4,4.1,3.5c-0.2,1.1-2.6,12-2.6,12.3c0,0.3-0.2,0.7-1.5,0.4c-1.2-0.4-11.2-0.8-11.2-0.8v0  c0,0-10,0.4-11.2,0.8c-1.2,0.4-1.5-0.1-1.5-0.4c0-0.3-2.4-11.2-2.6-12.3C35.3,29.9,36.4,29.2,39.6,27.5L39.6,27.5z",fill:"#343C3E"},{path:"M38.2,28.3c-2.2,1.2-3,1.9-2.8,2.8c0.2,1.1,2.6,12,2.6,12.3c0,0.3,0.2,0.7,1.5,0.4c0.3-0.1,1-0.2,2-0.2  C39.9,39.9,38.7,31.8,38.2,28.3L38.2,28.3z M63.1,28.2c2.2,1.2,3,1.9,2.8,2.8c-0.2,1.1-2.6,12-2.6,12.3c0,0.3-0.2,0.7-1.5,0.4  c-0.3-0.1-1-0.2-2-0.2C61.4,39.9,62.6,31.8,63.1,28.2L63.1,28.2z",fill:"#2E3436"},{path:"M65.3,29.7c-0.6-0.6-1.8-1.2-3.6-2.2c-3.2-1.6-11.1-1.8-11.1-1.8v0h0v0c-0.6,0-8.1,0.2-11.1,1.8  c-1.8,0.9-2.9,1.6-3.6,2.2l2.8,2.2c0,0,5.7-0.9,11.9-1v0c6.1,0.1,11.8,0.7,11.8,0.7L65.3,29.7L65.3,29.7z",fill:"#202226"},{path:"M59.8,2.7c0,0,3.4,1.6,4.4,2.8c1,1.1,2.5,3,2.6,3.3c0,0.2,0,0.9,0,0.9S60.7,3.1,59.8,2.7z",fill:"#FEFDF8"},{path:"M55.4,3.8H44.8c0,0-2.2,0.6-2.9,8.6c-0.7,8-2,14.1,3,12.7c4.9-1.4,7.6-0.2,9.8-0.3c2.2-0.2,5.6,2.3,4.3-8.6  C57.7,5.2,57.6,4.6,55.4,3.8L55.4,3.8z",fill:"#D8684A"},{path:"M44.5,24.3l1.8-18.1l-1.3,6.4L44.5,24.3z M56.8,24.2L55,6.2l1.3,6.4L56.8,24.2z M66.9,90.9c0,0-1.5,3.3-4,4.1  c-2.4,0.9-4.2,1.3-4.2,1.3s3.1,0,4.8-1C65.2,94.5,67,93,66.9,90.9L66.9,90.9z",fill:"#9E4A36"},{path:"M39.2,75c-0.1,0.1-0.3-0.3-0.5,1.1s-1.4,9.9-1.3,10c0,0,0.7,0.5,2,1L41,75.4C40.3,75.2,39.2,74.9,39.2,75  L39.2,75z M62.4,76.2c-0.2-1.4-0.4-1-0.5-1.1c0-0.1-1.1,0.2-1.8,0.3l1.6,11.8c1.2-0.5,1.9-0.9,2-1C63.8,86.1,62.6,77.6,62.4,76.2  L62.4,76.2z",fill:"#2E3436"},{path:"M68.4,36.8c0,0,3.4,1.4,3.6,2.7s0.2,1.5,0,1.5c-0.2,0-3.8-1.9-3.8-1.9v-2.3L68.4,36.8L68.4,36.8z",fill:"#D14C32"},{path:"M72,41.3l0-0.3L68.3,39v0.3L72,41.3z",fill:"#0D0E13"},{path:"M55.9,88.3H44.7c0,0-6.1-0.8-5.3,1.8c0.8,2.6-0.8,5.8,7.6,5.8h6.5c8.5,0,6.8-3.2,7.6-5.8  C62,87.4,55.9,88.3,55.9,88.3L55.9,88.3z",fill:"#D8684A"},{path:"M51,86.9c-5.2,0-9.8-1.1-13.1-3l-0.2,0c-0.3,2.4-0.3,2.2-0.2,2.3c0.1,0.1,2.9,1.8,7.9,2.6  c1.1,0.1,5.3,0.2,5.3,0.2v0c0,0,4.2-0.2,5.3-0.2c5-0.8,7.8-2.5,7.9-2.6c0,0-0.1-0.8-0.2-2C60.4,85.9,55.9,86.9,51,86.9z",fill:"#202226"},{path:"M58.3,51.8c1.2-3.8-0.8-5.2-3.1-5.6c-1.8-0.3-6.4-0.2-7.9-0.1c-2.7,0.2-5.6,1.3-4.2,5.7c2.4,7.5-0.1,17.8,0,19  c0.1,0.9,1.4,2.4,4,2.8c0.9,0.1,6.8,0.1,7.9-0.1c2.1-0.5,3.2-1.8,3.3-2.6C58.4,69.6,55.9,59.3,58.3,51.8L58.3,51.8z",fill:"#D8684A"}],b=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).componentDidMount=function(){a.marker=[]},a.componentDidUpdate=function(t){var e=a.props,n=e.map,o=e.angle,i=e.move,c=e.isCurrentPositionReceived,r=a.props.currentLocation.speed;(n!==t.map||r>5&&(o!==t.angle||i>5)||c!==t.isCurrentPositionReceived)&&a.renderMarker()},a.componentWillUnmount=function(){a.removeMarker()},a.removeMarker=function(){a.marker&&a.marker.length>0&&a.marker.forEach(function(t){t.setMap(null)})},a.renderMarker=function(){a.removeMarker();var t=a.props,e=t.map,n=t.google,o=t.mapCenter,i=t.currentLocation,c=i.lat?{lat:i.lat,lng:i.lng}:void 0,r=c||o;c=new n.maps.LatLng(r.lat,r.lng),L.forEach(function(t,o){var i={path:t.path,fillColor:t.fill,strokeColor:t.fill,fillOpacity:1,scale:.4,anchor:new n.maps.Point(50,50),rotation:a.props.angle},r={map:e,position:c,icon:i};a.marker[o]=new n.maps.Marker(r)}),a.props.resetMove()},a}return Object(m.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return null}}]),e}(n.Component),E=6371e3,D={enableHighAccuracy:!0,timeout:5e3,maximumAge:0},z=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).componentDidMount=function(){a.setState({isDataFetched:!0,data:[]}),window.addEventListener("load",function(){window.history.pushState({noBackExitsApp:!0},"")}),window.addEventListener("popstate",function(t){t.state&&t.state.noBackExitsApp&&window.history.pushState({noBackExitsApp:!0},"")}),window.addEventListener("resize",a.updateWindowDimensions)},a.componentDidUpdate=function(t,e){},a.componentWillUnmount=function(){window.removeEventListener("resize",a.updateWindowDimensions)},a.updateWindowDimensions=function(){a.setState({mapDivDimentions:{height:window.innerHeight,width:window.innerWidth}})},a.toggleRecording=function(){a.state.isRecordingMode?a.stopRecording():a.startRecording(),a.setState({isRecordingMode:!a.state.isRecordingMode})},a.startRecording=function(){a.setState({data:[]}),navigator&&navigator.geolocation&&(console.log(navigator.onLine),M=navigator.geolocation.watchPosition(a.updateLocationData,a.err,D)),window.DeviceMotionEvent&&window.addEventListener("devicemotion",a.updateAccelerationData)},a.err=function(){console.log("error")},a.updateAccelerationData=function(t){var e=t.acceleration,n=e.x,o=e.y,i=e.z,c=a.state.acceleration,r=c.average,s=c.max,l=c.ticks;if(null!==n&&null!==o&&null!==i){var p=Math.pow(n*n+o*o+i*i,1/3);p>1.3*r&&a.setState({bumps:[].concat(Object(h.a)(a.state.bumps),[{lat:a.state.currentLocation.lat,lng:a.state.currentLocation.lng}])});var u=(r*l+p)/(l+1);l++,a.setState({acceleration:{average:u,max:s,ticks:l}})}},a.toRad=function(t){return t*Math.PI/180},a.calculateDistance=function(t,e,n,o){var i=a.toRad(n-t),c=a.toRad(o-e),r=Math.sin(i/2)*Math.sin(i/2)+Math.cos(a.toRad(t))*Math.cos(a.toRad(n))*Math.sin(c/2)*Math.sin(c/2);return 2*E*Math.atan2(Math.sqrt(r),Math.sqrt(1-r))},a.calculateZoomLevel=function(t){return Math.round(14-Math.log(t/2e3)/Math.LN2)},a.calculateAngle=function(t,e,a,n){var o=n-e,i=Math.sin(o)*Math.cos(a),c=Math.cos(t)*Math.sin(a)-Math.sin(t)*Math.cos(a)*Math.cos(o),r=Math.atan2(i,c);return r=360-(r=((r*=180/Math.PI)+360)%360)},a.updateLocationData=function(t){var e=a.state.currentLocation,n=a.state.data,o=t.coords.latitude,i=t.coords.longitude,c=t.timestamp,r=a.calculateDistance(e.lat,e.lng,o,i),s=a.calculateAngle(e.lat,e.lng,o,i),l=Math.abs(e.timestamp-c)/1e3,p=r/l?r/l*3600/1e3:0;a.setState({previousLocation:e,currentLocation:{lat:o,lng:i,speed:p,timestamp:c},data:0!==n.length&&a.compare(n[n.length-1],{lat:o,lng:i})?n:[].concat(Object(h.a)(a.state.data),[{lat:o,lng:i}]),angle:Math.abs(s-a.state.angle)>22?s:a.state.angle,move:a.state.move+r})},a.compare=function(t,e){for(var a in t)if(!e.hasOwnProperty(a)||t[a]!==e[a])return!1;return!0},a.updateResultingData=function(){},a.getTripCenter=function(t){var e=t.ne,a=t.sw;return{lat:a.lat+(e.lat-a.lat)/2,lng:a.lng+(e.lng-a.lng)/2}},a.getTripBounds=function(t){var e,a,n,o;return t.forEach(function(t){e=e>t.lat?e:t.lat,a=a<t.lat?a:t.lat,n=n>t.lng?n:t.lng,o=o<t.lng?o:t.lng}),{ne:{lat:e,lng:n},sw:{lat:a,lng:o}}},a.stopRecording=function(){console.log("stopped");var t=a.getTripBounds(a.state.data),e=a.getTripCenter(t),n=t.ne,o=t.sw,i=a.calculateDistance(o.lat,o.lng,n.lat,n.lng),c=a.calculateZoomLevel(i)-1;navigator.geolocation.clearWatch(M),window.removeEventListener("devicemotion",a.updateAccelerationData),a.state.data.length<=1||a.setState({favorities:[].concat(Object(h.a)(a.state.favorities),[{path:a.state.data,zoom:c,center:e}])},function(){return console.log(a.state.favorities)})},a.onChartViewSelected=function(){a.setState({isChartView:!0})},a.onMapViewSelected=function(){a.setState({isChartView:!1})},a.resetMove=function(){a.setState({move:0})},a.onZoomChanged=function(t,e,a){console.log(e.getZoom())},a.sendAccelToFirebase=function(){},a.selectTrip=function(t){console.log(t),a.setState({selectedTrip:t},function(){return console.log(a.state.favorities)})},a.state={isDataFetched:!1,isChartView:!1,isRecordingMode:!1,data:[],currentLocation:{},previousLocation:{},acceleration:{average:0,max:0,ticks:0},zoom:16,angle:0,move:0,mapDivDimentions:{height:window.innerHeight,width:window.innerWidth},favorities:[],bumps:[],selectedTrip:null},a.canvas=o.a.createRef(),a.mymap=o.a.createRef(),a.mymarker=o.a.createRef(),a}return Object(m.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t,e,a=this,n=(this.props.google,this.state.zoom,this.state.isRecordingMode?"Stop Recording":"Start Recording"),i=this.state.isRecordingMode?"#e34929":"#757d75",c=this.state.bumps.map(function(t){return o.a.createElement(g.Marker,{position:{lat:t.lat,lng:t.lng}})});if(e=this.state.favorities.length>0?this.state.favorities.map(function(t,e){return o.a.createElement("div",{onClick:function(){return a.selectTrip(e)},key:e,style:{width:"60px"}},e)}):o.a.createElement("div",null,"No trips"),t=this.state.favorities.length>0&&null!==this.state.selectedTrip?o.a.createElement(w,{google:this.props.google,favorities:this.state.favorities[this.state.selectedTrip],mapDivDimentions:this.state.mapDivDimentions}):o.a.createElement("div",null,"No data"),this.props.loaded)return o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"menu"},o.a.createElement("div",{className:"top-menu"},o.a.createElement("div",{className:"top-left-menu"},o.a.createElement("div",{className:"burger-menu"}),o.a.createElement("div",{className:"page-title"},"Report a bump")),o.a.createElement("div",{className:"top-right-menu"},o.a.createElement("div",{className:"top-menu-settings"}))),o.a.createElement("div",{className:"sub-menu"},o.a.createElement("div",{className:"sub-menu-tab ".concat(this.state.isChartView?"tab-active":""),onClick:this.onChartViewSelected},"chart view"),o.a.createElement("div",{className:"sub-menu-tab ".concat(this.state.isChartView?"":"tab-active"),onClick:this.onMapViewSelected},"map view"))),o.a.createElement("div",{className:"map",style:{display:this.state.isChartView?"none":"block"}},o.a.createElement(C,{centerAroundCurrentLocation:!0,google:this.props.google,updateLocationData:this.updateLocationData,currentLocation:this.state.currentLocation,isRecordingMode:this.state.isRecordingMode,onZoomChanged:this.onZoomChanged,mapDivDimentions:this.state.mapDivDimentions},o.a.createElement(b,{angle:this.state.angle,move:this.state.move,resetMove:this.resetMove}),o.a.createElement(g.Polyline,{path:this.state.data,strokeColor:"#4D8FAC",strokeOpacity:.8,strokeWeight:4}),c)),o.a.createElement("div",{className:"map",style:{display:this.state.isChartView?"flex":"none",alignItems:"center",justifyContent:"center",flexDirection:"column"}},o.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},e),t)),o.a.createElement("div",{className:"bottom-ruler-btn",style:{backgroundColor:i},onClick:this.toggleRecording,disabled:!this.state.isDataFetched},n))}}]),e}(n.Component),k=Object(g.GoogleApiWrapper)({apiKey:"AIzaSyDEVWK9Upl3k2YqFEmSPAitUBZoi36oFAo"})(z),y=(a(52),function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"start-page-main"},o.a.createElement("div",{className:"logo-container"},o.a.createElement("div",{className:"logo-txt"},"Bumpy"),o.a.createElement("div",{className:"logo-txt"},"Roads"),o.a.createElement("div",{className:"logo-txt"},"Informer"))),o.a.createElement("div",{className:"bottom-ruler-btn",onClick:function(){t.props.permissionGranted()}},"get started"))}}]),e}(n.Component)),j=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).permissionGranted=function(){a.setState({isGranted:!0})},a.state={isGranted:!1},a}return Object(m.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return this.state.isGranted?o.a.createElement("div",{className:"App"},o.a.createElement(k,null)):o.a.createElement(y,{permissionGranted:this.permissionGranted})}}]),e}(n.Component);"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()}),c.a.render(o.a.createElement(j,null),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/reactjs_accel",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/reactjs_accel","/service-worker.js");r?(function(t,e){fetch(t).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):s(t,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):s(e,t)})}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.c1835572.chunk.js.map