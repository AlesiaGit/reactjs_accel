(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){},30:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA8FBMVEVHcEzMSkrJRUXHQkLLSkrJRETMS0vHRETCSUnLSEjEOzvLSUnHRETIRUXIRUXIQ0PIR0fHQkLdZ2fHQ0PSVFTERUXKSEjLR0fGRUXIQUHlc3PGQ0PIQ0PIQ0PIRETHQ0PJRkbHRETJRUXJSEjHRETGQkLLSUnVWVnHQ0PIR0fJR0fHRETKRkbMTEzLSkrga2vLSUngamrWWlrLSkrHQEDKSEj3j4//7qP2jo7xhYX6tZfHQ0PeaGj4mJH0i4vvgoLugYHlc3P8yZv1jY36tpf6tJf8yJv4mpL+3qD0iYn+3J/8xJr5rJXqenr7vpn4opNIhkm8AAAANnRSTlMA9Gdg93H3QBXcDcH1gv3+ok37cvAay8w/M/6Zp6v9oPVE9qqAcMz+X/fM+/b29Pz0/PP8IPW5fhKTAAAAt0lEQVQY01WO1xKCQAwAgyBFRZq9995LDkTF3sv//42MpzjuU7KzmQkApQI/skUAwRZ+IhiOJ1r1WFSTg5m3kPUU093yzYgeppkWQdPCJeK6Rk+iHbzuF7uNydAgEeeXN0LIzOEkvwhQbY/viCdCFmjOlRALIPolzrm4hUULF4F5Po6zAw6Sn0diKTyjhThU6S4ooylvcr3+qhR4i3y5MZHmUlIt5Hze+4ZtAAR8aU+IIRH+Yb/DC5XmFKwBAjrxAAAAAElFTkSuQmCC"},35:function(e,t,a){e.exports=a(71)},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(21),r=a.n(i),c=(a(40),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function s(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var l=a(3),p=a(4),u=a(6),d=a(5),m=a(7),h=(a(41),a(18)),f=a(14),g=a(9),v=(a(25),a(42),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"bottom-ruler-btn",style:{backgroundColor:this.props.color},onClick:function(){return e.props.toggleButton()},disabled:!this.props.disableCondition},this.props.text)}}]),t}(n.Component)),b=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"header-menu"},o.a.createElement("div",{className:"header-left-menu"},o.a.createElement("div",{className:"header-menu-icon ".concat(this.props.icon),onClick:function(){return e.props.onMenuToggle()}}),o.a.createElement("div",{className:"page-title"},this.props.title)),o.a.createElement("div",{className:"header-right-menu"},o.a.createElement("div",{className:"header-menu-icon settings-icon"})))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).handleEvent=function(e){var t="on".concat(a.props.camelize(e));a.props[t]()},a.handleSelection=function(e){var t="is".concat(a.props.camelize(e));return a.props[t]},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.options.map(function(t,a){return o.a.createElement("div",{className:"header-submenu-tab ".concat(e.handleSelection(t)?"tab-active":""),onClick:function(){return e.handleEvent(t)},key:a},t)});return o.a.createElement("div",{className:"header-submenu"},t)}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={current:null},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"drawer"},o.a.createElement("div",{className:"drawer-logo"}),o.a.createElement("div",{className:"drawer-body"},[{id:"map",title:"Report a bump"},{id:"checktrip",title:"Check your trip"},{id:"calibrate",title:"Calibrate sensors"},{id:"settings",title:"Settings"}].map(function(t){return o.a.createElement(h.b,{className:"drawer-item".concat(e.props.current===t.id?" drawer-item-active":""),exact:"true",key:t.id,id:t.id,to:"/".concat(t.id),replace:!0,onClick:function(t){return e.props.markSelection(t)}},t.title)})))}}]),t}(n.Component),E=a(15),C=a(33),k=a.n(C).a.initializeApp({apiKey:"AIzaSyBexhCuV6JNCsyakFOeBK7NmFb_oM_pgxo",authDomain:"bumpyroadsinformer.firebaseapp.com",databaseURL:"https://bumpyroadsinformer.firebaseio.com",projectId:"bumpyroadsinformer",storageBucket:"",messagingSenderId:"854546127925",appId:"1:854546127925:web:d3c2a81c7c4e9ba6"}).firestore(),L=a(16),O=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){a.props.centerAroundCurrentLocation&&navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){var t=e.coords;a.setState({currentLocation:{lat:t.latitude,lng:t.longitude},isCurrentPositionReceived:!0},a.props.updateLocationData(e))}),a.loadMap()},a.loadMap=function(){if(a.props.google){var e=a.props.google.maps,t=a.props.zoom,n=a.state.currentLocation,o=n.lat,i=n.lng,r=new e.LatLng(o,i),c=Object.assign({},{center:r,zoom:t,zoomControl:!1,scaleControl:!1,fullscreenControl:!1,mapTypeControl:!1,streetViewControl:!1});a.map=new e.Map(a.mymap.current,c);["click","dragend","zoom_changed"].forEach(function(e){return a.map.addListener(e,a.handleEvent(e))}),e.event.trigger(a.map,"ready"),a.map&&a.setBumpsOnMap(a.props.historicBumps,a.databaseBumps,"purple",.8)}},a.recenterMap=function(e){var t=a.map,n=a.props.google.maps;if(t){var o=new n.LatLng(e.lat,e.lng);t.panTo(o)}},a.deleteMarkers=function(e){return e.forEach(function(e){return e.setMap(null)}),[]},a.setBumpsOnMap=function(e,t,n,o){a.map;var i=a.props.google.maps,r={path:"M-4,0a4,4 0 1,0 8,0a4,4 0 1,0 -8,0",fillColor:n,strokeColor:n,fillOpacity:1,scale:o,anchor:new i.Point(0,0)};t=a.deleteMarkers(t),e.forEach(function(e){t.push(new i.Marker({position:{lat:e.lat,lng:e.lng},icon:r,map:a.map}))})},a.updateCurrent=function(e){a.props.updateLocationData(e)},a.componentWillUnmount=function(){a.deleteMarkers(a.tripBumps),a.deleteMarkers(a.databaseBumps)},a.renderChildren=function(){var e=a.props.children;if(e)return o.a.Children.map(e,function(e){return o.a.cloneElement(e,{map:a.map,google:a.props.google,mapCenter:a.state.currentLocation,currentLocation:a.props.currentLocation,isCurrentPositionReceived:a.state.isCurrentPositionReceived})})};var n=e.initialCenter,i=n.lat,r=n.lng;return a.state={currentLocation:{lat:i,lng:r},zoom:17,isCurrentPositionReceived:!1},a.mymap=o.a.createRef(),a.mymarker=o.a.createRef(),a.tripBumps=[],a.databaseBumps=[],a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.google!==this.props.google&&this.loadMap(),t.currentLocation!==this.state.currentLocation&&this.recenterMap(this.state.currentLocation),e.currentLocation!==this.props.currentLocation&&this.state.isCurrentPositionReceived&&this.props.isRecordingMode&&this.recenterMap(this.props.currentLocation),e.bumps!==this.props.bumps&&this.setBumpsOnMap(this.props.bumps,this.tripBumps,"red",1.2),e.historicBumps!==this.props.historicBumps&&this.setBumpsOnMap(this.props.historicBumps,this.databaseBumps,"purple",.8)}},{key:"handleEvent",value:function(e){var t,a=this,n="on".concat(this.props.camelize(e));return function(e){t&&(clearTimeout(t),t=null),t=setTimeout(function(){a.props[n]&&a.props[n](a.props,a.map,e)},0)}}},{key:"render",value:function(){var e=this.props.dimentions,t={width:e.width+"px",height:e.height+"px",position:"relative"};return o.a.createElement("div",{ref:this.mymap,style:t},"Loading...",this.renderChildren())}}]),t}(n.Component),y=O;O.defaultProps={zoom:16,initialCenter:{lat:53.893009,lng:27.567444},centerAroundCurrentLocation:!1};var j,A=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){a.loadMap()},a.componentDidUpdate=function(e,t){e.google===a.props.google&&e.favorities===a.props.favorities||a.loadMap()},a.loadMap=function(){if(a.props.google){var e=a.props.google.maps,t=a.props.favorities,n=t.zoom,o=t.path,i=t.center,r=t.bumps,c={center:i,zoom:n,zoomControl:!1,scaleControl:!1,fullscreenControl:!1,mapTypeControl:!1,streetViewControl:!1},s={path:o,strokeColor:"#4D8FAC",strokeOpacity:.8,strokeWeight:4},l={path:"M-4,0a4,4 0 1,0 8,0a4,4 0 1,0 -8,0",fillColor:"red",strokeColor:"red",fillOpacity:1,scale:.8,anchor:new e.Point(0,0)};a.map=new e.Map(a.mapRef.current,c),a.trip=new e.Polyline(s),a.map&&(a.trip.setMap(a.map),r.forEach(function(t,n){a.bumps.push(new e.Marker({position:{lat:t.lat,lng:t.lng},icon:l,map:a.map,animation:e.Animation.DROP}))}))}},a.componenWillUnmount=function(){a.trip.setMap(null),a.bumps.forEach(function(e){return e.setMap(null)})},a.mapRef=o.a.createRef(),a.trip=null,a.bumps=[],a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){if(this.props.favorities){var e=this.props.dimentions,t={width:e.width+"px",height:e.height+"px",position:"relative"};return o.a.createElement("div",{className:"favorities-map"},o.a.createElement("div",{ref:this.mapRef,style:t}))}}}]),t}(n.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.favorities,n=t.selectedTrip,i=t.google,r=t.dimentions;if(!a.length)return null;if(null!==n)return o.a.createElement(A,{google:i,favorities:a[n],dimentions:r});return o.a.createElement("div",{className:"fav-list"},a.map(function(t,a){return o.a.createElement("div",{className:"fav-item ".concat(t.bumps.length<4?"green":"red"),onClick:function(){return e.props.onTripSelect(a)},key:a},o.a.createElement("div",{className:"fav-route"},"From: ",t.start),o.a.createElement("div",{className:"fav-route"},"To: ",t.end),o.a.createElement("div",{className:"fav-bumps-count"},t.bumps.length," bumps per ",t.tripdistance?t.tripdistance.toFixed(1):0," km"))}))}}]),t}(n.Component),z=[{path:"M69.9,36c0.3-9.3,0.3-9.1,0.3-9.1c0-0.2,0.7-7.9-0.6-15.3c-1.3-7.5-9.7-9.5-9.7-9.5l-0.4,0l-8.9-0.3v0l-8.8,0.3  l-0.4,0c0,0-8.4,2.1-9.7,9.5c-1.3,7.4-0.6,15.1-0.6,15.3c0,0,0-0.3,0.3,9.1c0.4,9.8-0.6,34-0.5,37c0.1,2.9-0.2,9.2,0.4,10.8  c0.6,1.6,2.6,9.6,2.6,9.6s3.2,6.2,16.8,5.3v0c13.5,0.9,16.7-5.3,16.7-5.3s2-8,2.6-9.6c0.6-1.6,0.2-7.9,0.4-10.8  C70.5,70,69.5,45.8,69.9,36L69.9,36z",fill:"#D14C32"},{path:"M61.7,27.5c-3.2-1.6-11.1-1.8-11.1-1.8v0c0,0-8,0.1-11.1,1.8c-3.2,1.6-4.3,2.4-4.1,3.5c0.2,1.1,2.6,12,2.6,12.3  c0,0.3,0.2,0.7,1.5,0.4c1.2-0.4,11.2-0.8,11.2-0.8v0c0,0,10,0.4,11.2,0.8c1.2,0.4,1.5-0.1,1.5-0.4c0-0.3,2.4-11.2,2.6-12.3  C66,29.9,64.9,29.2,61.7,27.5L61.7,27.5z",fill:"#121215"},{path:"M67.4,32.8c0,0,0,12.6,0,16.3c0,3.7,0,8.7-0.3,12.1C66.8,64.7,66.1,80,66.1,80v0.3c0,0-2-5.3-2.4-9.4  c-0.9-4-0.5-14,0-20.1C64,44.8,67,33.9,67.4,32.8z",fill:"#101114"},{path:"M62.4,76.1c-0.2-1.4-0.4-1-0.5-1.1c-0.1-0.1-1.5,0.3-2.1,0.4c-4.6,0.8-9.3,0.6-9.3,0.6v0c0,0-4.7,0.2-9.3-0.6  c-0.6-0.1-2-0.5-2.1-0.4c-0.1,0.1-0.3-0.3-0.5,1.1c-0.2,1.4-1.4,9.9-1.3,10c0.1,0.1,2.9,1.8,7.9,2.6c1.1,0.1,5.3,0.2,5.3,0.2v0  c0,0,4.2-0.2,5.3-0.2c5-0.8,7.8-2.5,7.9-2.6C63.8,86.1,62.7,77.5,62.4,76.1L62.4,76.1z",fill:"#131417"},{path:"M67,36l1.2,0.7V38H67V36z",fill:"#0D0E13"},{path:"M59,2.9c-0.1-0.1-0.2-0.1-0.4-0.2C58.1,2.6,58.3,2.6,59,2.9z",fill:"#C2C6C1"},{path:"M67.7,11.8C66.9,6.6,61,3.7,59,2.9c2,1.4,3.4,9.1,4.5,14c1.1,5.2,1.8,13.5,1.8,13.5s2.4,0.4,3.6,7  C69.7,41.5,68.9,18.8,67.7,11.8L67.7,11.8z",fill:"#D8684A"},{path:"M42.6,2.8c-0.1,0-0.2,0.1-0.4,0.2C42.9,2.7,43.2,2.6,42.6,2.8z",fill:"#C2C6C1"},{path:"M33.5,11.8c-1.2,7-1.9,29.7-1.1,25.5c1.1-6.5,3.6-7,3.6-7s0.6-8.3,1.8-13.5c1.1-4.9,2.5-12.6,4.5-14  C40.3,3.8,34.4,6.6,33.5,11.8z",fill:"#D8684A"},{path:"M63.4,56.8l3.8-2.9v3.4l-3.8,2.4V56.8z M37.7,83.9c-0.2,1.3-0.3,2.2-0.2,2.2c0.1,0.1,2.9,1.8,7.9,2.6  c1.1,0.1,5.3,0.2,5.3,0.2v0c0,0,4.2-0.2,5.3-0.2c5-0.8,7.8-2.5,7.9-2.6c0,0-0.3-2.4-0.6-4.9L37.7,83.9L37.7,83.9z",fill:"#202226"},{path:"M37.3,40.1l24.4-5.8l3.7-1.2c0.2-1.1,0.4-1.9,0.4-2.1c0.2-1.1-0.9-1.9-4.1-3.5c-3.2-1.6-11.1-1.8-11.1-1.8v0  c0,0-8,0.1-11.1,1.8c-3.2,1.6-4.3,2.4-4.1,3.5C35.5,31.7,36.5,36.7,37.3,40.1L37.3,40.1z",fill:"#212428"},{path:"M33.9,32.9c0,0,0,12.6,0,16.3c0,3.7,0,8.7,0.3,12.1c0.3,3.4,0.9,18.7,0.9,18.7v0.3c0,0,2-5.3,2.4-9.4  c0.9-4,0.5-14,0-20.1C37.3,44.8,34.3,33.9,33.9,32.9z",fill:"#101114"},{path:"M69.9,36c0.3-9.3,0.3-9.1,0.3-9.1c0-0.2,0.7-7.9-0.6-15.3c-1.3-7.5-9.7-9.5-9.7-9.5l-0.4,0l-8.9-0.3v0l-8.8,0.3  l-0.4,0c0,0-8.4,2.1-9.7,9.5c-1.3,7.4-0.6,15.1-0.6,15.3c0,0,0-0.3,0.3,9.1c0.4,9.8-0.6,34-0.5,37c0.1,2.9-0.2,9.2,0.4,10.8  c0.6,1.6,2.6,9.6,2.6,9.6s3.2,6.2,16.8,5.3v0c13.5,0.9,16.7-5.3,16.7-5.3s2-8,2.6-9.6c0.6-1.6,0.2-7.9,0.4-10.8  C70.5,70,69.5,45.8,69.9,36L69.9,36z M69.3,83.9c-1.6,9.7-4,11.2-6.7,12.7c-2.7,1.4-11.9,1.6-11.9,1.6v0c-0.9,0-9.3-0.3-11.9-1.6  c-2.7-1.5-5.1-3-6.7-12.7c-1.6-9.7,0.6-13.6,0.4-21.9c-0.3-8.3-0.3-29.6-0.2-32c0.1-2.4-0.6-19.1,1.7-21.5c2.3-2.4,5.6-5.7,7.6-5.8  C42.6,2.7,44,2.6,45,2.6V2.6h5.7v0h5.6v0.1c1.2,0,2.3,0,3.5,0.1c2,0.1,5.3,3.4,7.6,5.8c2.3,2.4,1.6,19.1,1.7,21.5  c0.1,2.4,0.1,23.7-0.2,32C68.6,70.3,70.9,74.2,69.3,83.9L69.3,83.9z",fill:"#9E4A36"},{path:"M34.3,91c0,0,1.5,3.3,4,4.1c2.4,0.9,4.2,1.3,4.2,1.3s-3.1,0-4.8-1C36.1,94.5,34.2,93.1,34.3,91z",fill:"#9E4A36"},{path:"M41.5,2.7c0,0-3.4,1.6-4.4,2.8c-1,1.1-2.5,3-2.6,3.3c0,0.2,0,0.9,0,0.9S40.6,3.1,41.5,2.7z",fill:"#FEFDF8"},{path:"M50.6,1.8L50.6,1.8L50.6,1.8L50.6,1.8z M58.4,3c0-0.3-1.7-0.8-2.2-0.9c-0.4-0.1-5.3-0.2-5.6-0.2l0,0  c-0.3,0-5.2,0.2-5.6,0.3c-0.4,0.1-2.1,0.6-2.2,0.9c0,0.3,0.3,0.5,0.7,0.3s1-0.7,1.4-0.8c0.4-0.1,5.7-0.3,5.7-0.3l0,0  c0.4,0,5.2,0.2,5.6,0.3c0.4,0.1,1,0.6,1.4,0.8C58.1,3.5,58.4,3.3,58.4,3L58.4,3z",fill:"#1D2021"},{path:"M32.8,36.8c0,0-3.4,1.4-3.6,2.7C29,40.8,29,41,29.2,41s3.8-1.9,3.8-1.9v-2.3L32.8,36.8L32.8,36.8z",fill:"#D14C32"},{path:"M29.2,41.3l0-0.3l3.8-1.9v0.3L29.2,41.3z",fill:"#0D0E13"},{path:"M34.3,36.1L33,36.8V38h1.2V36.1z",fill:"#0D0E13"},{path:"M37.9,56.9L34,54v3.4l3.8,2.4V56.9z",fill:"#202226"},{path:"M38.7,76.1c0.2-1.4,0.4-1,0.5-1.1c0.1-0.1,1.5,0.3,2.1,0.4c4.6,0.8,9.3,0.6,9.3,0.6v0c0,0,4.7,0.2,9.3-0.6  c0.6-0.1,2-0.5,2.1-0.4c0.1,0.1,0.3-0.3,0.5,1.1c0.2,1.4,1.4,9.9,1.3,10c-0.1,0.1-2.9,1.8-7.9,2.6c-1.1,0.1-5.3,0.2-5.3,0.2v0  c0,0-4.2-0.2-5.3-0.2c-5-0.8-7.8-2.5-7.9-2.6C37.3,86.1,38.5,77.5,38.7,76.1L38.7,76.1z M39.6,27.5c3.2-1.6,11.1-1.8,11.1-1.8v0  c0,0,8,0.1,11.1,1.8c3.2,1.6,4.3,2.4,4.1,3.5c-0.2,1.1-2.6,12-2.6,12.3c0,0.3-0.2,0.7-1.5,0.4c-1.2-0.4-11.2-0.8-11.2-0.8v0  c0,0-10,0.4-11.2,0.8c-1.2,0.4-1.5-0.1-1.5-0.4c0-0.3-2.4-11.2-2.6-12.3C35.3,29.9,36.4,29.2,39.6,27.5L39.6,27.5z",fill:"#343C3E"},{path:"M38.2,28.3c-2.2,1.2-3,1.9-2.8,2.8c0.2,1.1,2.6,12,2.6,12.3c0,0.3,0.2,0.7,1.5,0.4c0.3-0.1,1-0.2,2-0.2  C39.9,39.9,38.7,31.8,38.2,28.3L38.2,28.3z M63.1,28.2c2.2,1.2,3,1.9,2.8,2.8c-0.2,1.1-2.6,12-2.6,12.3c0,0.3-0.2,0.7-1.5,0.4  c-0.3-0.1-1-0.2-2-0.2C61.4,39.9,62.6,31.8,63.1,28.2L63.1,28.2z",fill:"#2E3436"},{path:"M65.3,29.7c-0.6-0.6-1.8-1.2-3.6-2.2c-3.2-1.6-11.1-1.8-11.1-1.8v0h0v0c-0.6,0-8.1,0.2-11.1,1.8  c-1.8,0.9-2.9,1.6-3.6,2.2l2.8,2.2c0,0,5.7-0.9,11.9-1v0c6.1,0.1,11.8,0.7,11.8,0.7L65.3,29.7L65.3,29.7z",fill:"#202226"},{path:"M59.8,2.7c0,0,3.4,1.6,4.4,2.8c1,1.1,2.5,3,2.6,3.3c0,0.2,0,0.9,0,0.9S60.7,3.1,59.8,2.7z",fill:"#FEFDF8"},{path:"M55.4,3.8H44.8c0,0-2.2,0.6-2.9,8.6c-0.7,8-2,14.1,3,12.7c4.9-1.4,7.6-0.2,9.8-0.3c2.2-0.2,5.6,2.3,4.3-8.6  C57.7,5.2,57.6,4.6,55.4,3.8L55.4,3.8z",fill:"#D8684A"},{path:"M44.5,24.3l1.8-18.1l-1.3,6.4L44.5,24.3z M56.8,24.2L55,6.2l1.3,6.4L56.8,24.2z M66.9,90.9c0,0-1.5,3.3-4,4.1  c-2.4,0.9-4.2,1.3-4.2,1.3s3.1,0,4.8-1C65.2,94.5,67,93,66.9,90.9L66.9,90.9z",fill:"#9E4A36"},{path:"M39.2,75c-0.1,0.1-0.3-0.3-0.5,1.1s-1.4,9.9-1.3,10c0,0,0.7,0.5,2,1L41,75.4C40.3,75.2,39.2,74.9,39.2,75  L39.2,75z M62.4,76.2c-0.2-1.4-0.4-1-0.5-1.1c0-0.1-1.1,0.2-1.8,0.3l1.6,11.8c1.2-0.5,1.9-0.9,2-1C63.8,86.1,62.6,77.6,62.4,76.2  L62.4,76.2z",fill:"#2E3436"},{path:"M68.4,36.8c0,0,3.4,1.4,3.6,2.7s0.2,1.5,0,1.5c-0.2,0-3.8-1.9-3.8-1.9v-2.3L68.4,36.8L68.4,36.8z",fill:"#D14C32"},{path:"M72,41.3l0-0.3L68.3,39v0.3L72,41.3z",fill:"#0D0E13"},{path:"M55.9,88.3H44.7c0,0-6.1-0.8-5.3,1.8c0.8,2.6-0.8,5.8,7.6,5.8h6.5c8.5,0,6.8-3.2,7.6-5.8  C62,87.4,55.9,88.3,55.9,88.3L55.9,88.3z",fill:"#D8684A"},{path:"M51,86.9c-5.2,0-9.8-1.1-13.1-3l-0.2,0c-0.3,2.4-0.3,2.2-0.2,2.3c0.1,0.1,2.9,1.8,7.9,2.6  c1.1,0.1,5.3,0.2,5.3,0.2v0c0,0,4.2-0.2,5.3-0.2c5-0.8,7.8-2.5,7.9-2.6c0,0-0.1-0.8-0.2-2C60.4,85.9,55.9,86.9,51,86.9z",fill:"#202226"},{path:"M58.3,51.8c1.2-3.8-0.8-5.2-3.1-5.6c-1.8-0.3-6.4-0.2-7.9-0.1c-2.7,0.2-5.6,1.3-4.2,5.7c2.4,7.5-0.1,17.8,0,19  c0.1,0.9,1.4,2.4,4,2.8c0.9,0.1,6.8,0.1,7.9-0.1c2.1-0.5,3.2-1.8,3.3-2.6C58.4,69.6,55.9,59.3,58.3,51.8L58.3,51.8z",fill:"#D8684A"}],R=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).componentDidMount=function(){a.marker=[]},a.componentDidUpdate=function(e){var t=a.props,n=t.map,o=t.angle,i=t.move,r=t.isCurrentPositionReceived,c=a.props.currentLocation.speed;(n!==e.map||c>5&&(o!==e.angle||i>5)||r!==e.isCurrentPositionReceived)&&a.renderMarker()},a.componentWillUnmount=function(){a.removeMarker()},a.removeMarker=function(){a.marker&&a.marker.length>0&&a.marker.forEach(function(e){e.setMap(null)})},a.renderMarker=function(){a.removeMarker();var e=a.props,t=e.map,n=e.google,o=e.mapCenter,i=e.currentLocation,r=i.lat?{lat:i.lat,lng:i.lng}:void 0,c=r||o;r=new n.maps.LatLng(c.lat,c.lng),z.forEach(function(e,o){var i={path:e.path,fillColor:e.fill,strokeColor:e.fill,fillOpacity:1,scale:.4,anchor:new n.maps.Point(50,50),rotation:a.props.angle},c={map:t,position:r,icon:i};a.marker[o]=new n.maps.Marker(c),a.marker[o].setZIndex(100)}),a.props.resetMove()},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return null}}]),t}(n.Component),D=(a(30),6371e3);function T(e){return[" ","_"].forEach(function(t){e=e.split(t).map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join("")}),e}function N(e,t){for(var a in e)if(!t.hasOwnProperty(a)||e[a]!==t[a])return!1;return!0}function x(e){return e*Math.PI/180}function B(e,t,a,n){var o=x(a-e),i=x(n-t),r=Math.sin(o/2)*Math.sin(o/2)+Math.cos(x(e))*Math.cos(x(a))*Math.sin(i/2)*Math.sin(i/2);return 2*D*Math.atan2(Math.sqrt(r),Math.sqrt(1-r))}function F(e){return Math.round(14-Math.log(e/2e3)/Math.LN2)}function P(e,t,a,n){var o=n-t,i=Math.sin(o)*Math.cos(a),r=Math.cos(e)*Math.sin(a)-Math.sin(e)*Math.cos(a)*Math.cos(o),c=Math.atan2(i,r);return c=360-(c=((c*=180/Math.PI)+360)%360)}function V(e){var t=e.ne,a=e.sw;return{lat:a.lat+(t.lat-a.lat)/2,lng:a.lng+(t.lng-a.lng)/2}}function U(e){var t,a,n,o;return e.forEach(function(e){t=t>e.lat?t:e.lat,a=a<e.lat?a:e.lat,n=n>e.lng?n:e.lng,o=o<e.lng?o:e.lng}),{ne:{lat:t,lng:n},sw:{lat:a,lng:o}}}var W,I={enableHighAccuracy:!0,timeout:5e3,maximumAge:0},H=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){k.collection("limit").doc("result").get().then(function(e){if(e.exists)return e.data().data}).then(function(e){a.setState({historicBumps:e})}),a.setState({isDataFetched:!0,data:[]}),window.addEventListener("resize",a.updateWindowDimensions)},a.componentDidUpdate=function(e,t){},a.componentWillUnmount=function(){window.removeEventListener("resize",a.updateWindowDimensions)},a.updateWindowDimensions=function(){a.setState({dimentions:{height:window.innerHeight,width:window.innerWidth}})},a.toggleRecording=function(){a.state.isRecordingMode?a.stopRecording():a.startRecording(),a.setState({isRecordingMode:!a.state.isRecordingMode})},a.startRecording=function(){a.setState({data:[],bumps:[],tripdistance:0}),navigator&&navigator.geolocation&&(j=navigator.geolocation.watchPosition(a.updateLocationData,a.err,I)),window.DeviceMotionEvent&&window.addEventListener("devicemotion",a.updateAccelerationData)},a.err=function(){console.log("error")},a.updateAccelerationData=function(e){var t=e.acceleration,n=t.x,o=t.y,i=t.z,r=a.state.acceleration,c=r.prev,s=r.average,l=r.max,p=r.ticks,u=a.state.currentLocation,d=u.lat,m=u.lng,h=a.state.bumps;a.props.google.maps;if(null!==n&&null!==o&&null!==i){var f=n-c.x,g=o-c.y,v=i-c.z,b=Math.pow(f*f+g*g+v*v,1/3);b>2.829226039&&a.setState({bumps:0!==h.length&&N(h[h.length-1],{lat:d,lng:m})?h:[].concat(Object(E.a)(h),[{lat:d,lng:m}])}),l=l>b?l:b,a.setState({acceleration:{prev:{x:n,y:o,z:i},average:s,max:l,ticks:p}})}},a.updateLocationData=function(e){var t=a.state.currentLocation,n=a.state.data,o=e.coords.latitude,i=e.coords.longitude,r=e.timestamp,c=B(t.lat,t.lng,o,i),s=P(t.lat,t.lng,o,i),l=Math.abs(t.timestamp-r)/1e3,p=c/l?c/l*3600/1e3:0;a.setState({previousLocation:t,currentLocation:{lat:o,lng:i,speed:p,timestamp:r},data:0!==n.length&&N(n[n.length-1],{lat:o,lng:i})?n:[].concat(Object(E.a)(a.state.data),[{lat:o,lng:i}]),angle:Math.abs(s-a.state.angle)>22?s:a.state.angle,move:a.state.move+c,tripdistance:a.state.tripdistance+c/1e3})},a.convertToReadableAddress=function(e){return new Promise(function(t,n){for(var o=a.props.google.maps,i=[],r=new o.Geocoder,c=0;c<e.length;c++)r.geocode({location:e[c]},function(a,o){"OK"!==o&&n(new Error("Geocoder failed due to: "+o)),a[0]||n(new Error("No results")),i.push(a[0].formatted_address),e.length===i.length&&t({start:i[0],end:i[1]})})})},a.stopRecording=function(){navigator.geolocation.clearWatch(j),window.removeEventListener("devicemotion",a.updateAccelerationData),a.updateFavoritiesData()},a.updateFavoritiesData=function(){var e=a.state,t=e.favorities,n=e.bumps,o=e.tripdistance,i=a.state.data,r=U(i),c=V(r),s=r.ne,l=r.sw,p=F(B(l.lat,l.lng,s.lat,s.lng));if(!(i.length<=1)){5===t.length&&t.shift();var u=[i[0],i[i.length-1]];a.convertToReadableAddress(u).then(function(e){var r=e.start,s=e.end;a.setState({favorities:[].concat(Object(E.a)(t),[{start:r,end:s,path:i,zoom:p,center:c,bumps:n,tripdistance:o}])},function(){return localStorage.setItem("favorities",JSON.stringify(a.state.favorities))})})}},a.resetMove=function(){a.setState({move:0})},a.onZoomChanged=function(e,t,a){},a.sendBumpsToFirebase=function(){var e=a.state.bumps,t=k.collection("limit").doc("result");t.get().then(function(e){if(e.exists)return e.data().data}).then(function(a){return t.set({data:a.concat(e)})})},a.sendTripToFirebase=function(){k.collection("trip").doc("path").set({path:a.state.data}),k.collection("trip").doc("bumps").set({bumps:a.state.bumps})},a.state={isDataFetched:!1,isRecordingMode:!1,data:[],currentLocation:{},previousLocation:{},acceleration:{prev:{x:0,y:0,z:0},average:0,max:0,ticks:0},zoom:16,angle:0,move:0,tripdistance:0,dimentions:{height:window.innerHeight,width:window.innerWidth},favorities:JSON.parse(localStorage.getItem("favorities"))||[],bumps:[],historicBumps:[]},a.canvas=o.a.createRef(),a.mymap=o.a.createRef(),a.mymarker=o.a.createRef(),a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=(e.bumps,e.historicBumps),a=e.favorities,n=e.dimentions,i=e.isRecordingMode,r=e.currentLocation,c=this.props.google;t.map(function(e,t){return o.a.createElement(L.Marker,{key:t,position:{lat:e.lat,lng:e.lng}})});return this.props.isFavoritiesView?o.a.createElement(S,{favorities:a,selectedTrip:this.props.selectedTrip,google:c,dimentions:n,onTripSelect:this.props.onTripSelect}):o.a.createElement("div",{className:"map"},o.a.createElement(y,{centerAroundCurrentLocation:!0,google:c,updateLocationData:this.updateLocationData,currentLocation:r,isRecordingMode:i,onZoomChanged:this.onZoomChanged,dimentions:n,camelize:T,bumps:this.state.bumps,historicBumps:this.state.historicBumps},o.a.createElement(R,{angle:this.state.angle,move:this.state.move,resetMove:this.resetMove}),o.a.createElement(L.Polyline,{path:this.state.data,strokeColor:"#4D8FAC",strokeOpacity:.8,strokeWeight:4})),o.a.createElement("button",{onClick:this.sendBumpsToFirebase,style:{position:"absolute",top:"17vh",left:0,height:"5vh"}},"Add bumps to map"),o.a.createElement("button",{onClick:this.sendTripToFirebase,style:{position:"absolute",top:"26vh",left:0,height:"5vh"}},"Save trip to firebase"),o.a.createElement(v,{color:i?"#e34929":"#757d75",toggleButton:this.toggleRecording,disableCondition:!this.state.isDataFetched,text:i?"Stop Recording":"Start Recording"}))}}]),t}(n.Component),Q=Object(L.GoogleApiWrapper)({apiKey:"AIzaSyBE7mLpixeaO78BgnobMQ_yawg5ZBCX8f0"})(H),J=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).onFavoritiesView=function(){a.setState({isFavoritiesView:!0,isMapView:!1})},a.onMapView=function(){a.setState({isFavoritiesView:!1,isMapView:!0,selectedTrip:null})},a.onTripSelect=function(e){a.setState({selectedTrip:e})},a.onMenuToggle=function(){null!==a.state.selectedTrip?a.setState({selectedTrip:null}):a.setState({isDrawer:!a.state.isDrawer})},a.state={isFavoritiesView:!1,selectedTrip:null,isMapView:!0,submenuOptions:["Favorities View","Map View"],isDrawer:!1},a.cover=o.a.createRef(),a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"header"},o.a.createElement(b,{title:null!==this.state.selectedTrip?"Back to list":"Report a bump",icon:null!==this.state.selectedTrip?"back-arrow":"burger-icon",onMenuToggle:this.onMenuToggle}),o.a.createElement(w,{isFavoritiesView:this.state.isFavoritiesView,isMapView:this.state.isMapView,onFavoritiesView:this.onFavoritiesView,onMapView:this.onMapView,options:this.state.submenuOptions,camelize:T})),o.a.createElement(Q,{isFavoritiesView:this.state.isFavoritiesView,selectedTrip:this.state.selectedTrip,onTripSelect:this.onTripSelect,google:this.props.google})),o.a.createElement("div",{className:"cover",style:{display:this.state.isDrawer?"block":"none"}},o.a.createElement("div",{className:"cover-background",ref:"cover",onClick:this.onMenuToggle}),o.a.createElement(M,{current:this.props.current,markSelection:this.props.markSelection})))}}]),t}(n.Component),Z=(a(69),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0}),K=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){k.collection("limit").doc("result").get().then(function(e){if(e.exists)return e.data().data}).then(function(e){a.setState({historicBumps:e})}),a.setState({isDataFetched:!0,data:[]}),window.addEventListener("resize",a.updateWindowDimensions)},a.componentDidUpdate=function(e,t){},a.componentWillUnmount=function(){window.removeEventListener("resize",a.updateWindowDimensions)},a.updateWindowDimensions=function(){a.setState({dimentions:{height:window.innerHeight,width:window.innerWidth}})},a.startRecording=function(){a.setState({data:[],bumps:[],tripdistance:0}),navigator&&navigator.geolocation&&(W=navigator.geolocation.watchPosition(a.updateLocationData,a.err,Z)),window.DeviceMotionEvent&&window.addEventListener("devicemotion",a.updateAccelerationData)},a.err=function(){console.log("error")},a.updateAccelerationData=function(e){var t=e.acceleration,n=t.x,o=t.y,i=t.z,r=a.state.acceleration,c=r.prev,s=r.average,l=r.max,p=r.ticks,u=a.state.currentLocation,d=u.lat,m=u.lng,h=a.state.bumps;a.props.google.maps;if(null!==n&&null!==o&&null!==i){var f=n-c.x,g=o-c.y,v=i-c.z,b=Math.pow(f*f+g*g+v*v,1/3);b>2.829226039&&a.setState({bumps:0!==h.length&&N(h[h.length-1],{lat:d,lng:m})?h:[].concat(Object(E.a)(h),[{lat:d,lng:m}])}),l=l>b?l:b,a.setState({acceleration:{prev:{x:n,y:o,z:i},average:s,max:l,ticks:p}})}},a.updateLocationData=function(e){var t=a.state.currentLocation,n=a.state.data,o=e.coords.latitude,i=e.coords.longitude,r=e.timestamp,c=B(t.lat,t.lng,o,i),s=P(t.lat,t.lng,o,i),l=Math.abs(t.timestamp-r)/1e3,p=c/l?c/l*3600/1e3:0;a.setState({previousLocation:t,currentLocation:{lat:o,lng:i,speed:p,timestamp:r},data:0!==n.length&&N(n[n.length-1],{lat:o,lng:i})?n:[].concat(Object(E.a)(a.state.data),[{lat:o,lng:i}]),angle:Math.abs(s-a.state.angle)>22?s:a.state.angle,move:a.state.move+c,tripdistance:a.state.tripdistance+c/1e3})},a.convertToReadableAddress=function(e){return new Promise(function(t,n){for(var o=a.props.google.maps,i=[],r=new o.Geocoder,c=0;c<e.length;c++)r.geocode({location:e[c]},function(a,o){"OK"!==o&&n(new Error("Geocoder failed due to: "+o)),a[0]||n(new Error("No results")),i.push(a[0].formatted_address),e.length===i.length&&t({start:i[0],end:i[1]})})})},a.stopRecording=function(){navigator.geolocation.clearWatch(W),window.removeEventListener("devicemotion",a.updateAccelerationData),a.updateFavoritiesData()},a.updateFavoritiesData=function(){var e=a.state,t=e.favorities,n=e.bumps,o=e.tripdistance,i=a.state.data,r=U(i),c=V(r),s=r.ne,l=r.sw,p=F(B(l.lat,l.lng,s.lat,s.lng));if(!(i.length<=1)){5===t.length&&t.shift();var u=[i[0],i[i.length-1]];a.convertToReadableAddress(u).then(function(e){var r=e.start,s=e.end;a.setState({favorities:[].concat(Object(E.a)(t),[{start:r,end:s,path:i,zoom:p,center:c,bumps:n,tripdistance:o}])},function(){return localStorage.setItem("favorities",JSON.stringify(a.state.favorities))})})}},a.resetMove=function(){a.setState({move:0})},a.onZoomChanged=function(e,t,a){},a.sendBumpsToFirebase=function(){var e=a.state.bumps,t=k.collection("limit").doc("result");t.get().then(function(e){if(e.exists)return e.data().data}).then(function(a){return t.set({data:a.concat(e)})})},a.sendTripToFirebase=function(){k.collection("trip").doc("path").set({path:a.state.data}),k.collection("trip").doc("bumps").set({bumps:a.state.bumps})},a.state={isDataFetched:!1,data:[],currentLocation:{},previousLocation:{},acceleration:{prev:{x:0,y:0,z:0},average:0,max:0,ticks:0},zoom:16,angle:0,move:0,tripdistance:0,dimentions:{height:window.innerHeight,width:window.innerWidth},favorities:JSON.parse(localStorage.getItem("favorities"))||[],bumps:[],historicBumps:[]},a.canvas=o.a.createRef(),a.mymap=o.a.createRef(),a.mymarker=o.a.createRef(),a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=(e.bumps,e.historicBumps,e.favorities,e.dimentions),a=e.currentLocation,n=this.props.google;return o.a.createElement("div",{className:"map"},o.a.createElement(y,{centerAroundCurrentLocation:!0,google:n,updateLocationData:this.updateLocationData,currentLocation:a,isRecordingMode:this.props.isRecordingMode,onZoomChanged:this.onZoomChanged,dimentions:t,camelize:T,bumps:this.state.bumps,historicBumps:this.state.historicBumps},o.a.createElement(R,{angle:this.state.angle,move:this.state.move,resetMove:this.resetMove})))}}]),t}(n.Component),X=Object(L.GoogleApiWrapper)({apiKey:"AIzaSyBE7mLpixeaO78BgnobMQ_yawg5ZBCX8f0"})(K),G=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"search-menu"},o.a.createElement("div",{className:"from-to-icon"}),o.a.createElement("div",{className:"search-form"},o.a.createElement("input",{type:"text",className:"search-input"}),o.a.createElement("input",{type:"text",className:"search-input"})))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).onMenuToggle=function(){a.setState({isDrawer:!a.state.isDrawer})},a.toggleRecording=function(){a.setState({isRecordingMode:!a.state.isRecordingMode})},a.state={isDrawer:!1,isRecordingMode:!1},a.cover=o.a.createRef(),a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isRecordingMode,a=e.isDrawer;return o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"header"},o.a.createElement(b,{title:"Check your trip",icon:"burger-icon",onMenuToggle:this.onMenuToggle}),o.a.createElement(G,null)),o.a.createElement(X,{isRecordingMode:t}),o.a.createElement(v,{color:t?"#757d75":"#fbad19",toggleButton:this.toggleRecording,text:t?"Start Guidance":"Search"})),o.a.createElement("div",{className:"cover",style:{display:a?"block":"none"}},o.a.createElement("div",{className:"cover-background",ref:"cover",onClick:this.onMenuToggle}),o.a.createElement(M,{current:this.props.current,markSelection:this.props.markSelection})))}}]),t}(n.Component),q=(a(70),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"start-page-main"},o.a.createElement("div",{className:"logo-container"},o.a.createElement("div",{className:"logo-txt"},"Bumpy"),o.a.createElement("div",{className:"logo-txt"},"Roads"),o.a.createElement("div",{className:"logo-txt"},"Informer"))),o.a.createElement(h.b,{exact:"true",to:"/map",className:"bottom-ruler-btn"},"get started"))}}]),t}(n.Component)),Y=Object(g.a)(),$=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){window.addEventListener("load",function(){window.history.pushState({noBackExitsApp:!0},"")}),window.addEventListener("popstate",function(e){e.state&&e.state.noBackExitsApp&&window.history.pushState({noBackExitsApp:!0},"")})},a.markSelection=function(e){a.setState({current:e.currentTarget.id})},a.state={current:"map"},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state.current;return o.a.createElement(h.a,{history:Y},o.a.createElement(f.a,{exact:!0,path:"/",component:q}),o.a.createElement(f.a,{exact:!0,path:"/map",component:function(){return o.a.createElement(J,{current:t,markSelection:e.markSelection})}}),o.a.createElement(f.a,{exact:!0,path:"/checktrip",component:function(){return o.a.createElement(_,{current:t,markSelection:e.markSelection})}}))}}]),t}(n.Component);"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}),r.a.render(o.a.createElement($,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/reactjs_accel",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/reactjs_accel","/service-worker.js");c?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):s(t,e)})}}()}},[[35,1,2]]]);
//# sourceMappingURL=main.2a93b00c.chunk.js.map