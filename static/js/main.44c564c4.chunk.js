(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){},34:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAA8FBMVEVHcEzMSkrJRUXHQkLLSkrJRETMS0vHRETCSUnLSEjEOzvLSUnHRETIRUXIRUXIQ0PIR0fHQkLdZ2fHQ0PSVFTERUXKSEjLR0fGRUXIQUHlc3PGQ0PIQ0PIQ0PIRETHQ0PJRkbHRETJRUXJSEjHRETGQkLLSUnVWVnHQ0PIR0fJR0fHRETKRkbMTEzLSkrga2vLSUngamrWWlrLSkrHQEDKSEj3j4//7qP2jo7xhYX6tZfHQ0PeaGj4mJH0i4vvgoLugYHlc3P8yZv1jY36tpf6tJf8yJv4mpL+3qD0iYn+3J/8xJr5rJXqenr7vpn4opNIhkm8AAAANnRSTlMA9Gdg93H3QBXcDcH1gv3+ok37cvAay8w/M/6Zp6v9oPVE9qqAcMz+X/fM+/b29Pz0/PP8IPW5fhKTAAAAt0lEQVQY01WO1xKCQAwAgyBFRZq9995LDkTF3sv//42MpzjuU7KzmQkApQI/skUAwRZ+IhiOJ1r1WFSTg5m3kPUU093yzYgeppkWQdPCJeK6Rk+iHbzuF7uNydAgEeeXN0LIzOEkvwhQbY/viCdCFmjOlRALIPolzrm4hUULF4F5Po6zAw6Sn0diKTyjhThU6S4ooylvcr3+qhR4i3y5MZHmUlIt5Hze+4ZtAAR8aU+IIRH+Yb/DC5XmFKwBAjrxAAAAAElFTkSuQmCC"},35:function(e,t,n){e.exports=n(70)},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(19),r=n.n(i),c=(n(40),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function s(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var l=n(3),p=n(4),u=n(6),m=n(5),d=n(7),h=(n(41),n(14)),f=n(15),v=n(9),g=(n(27),n(42),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"bottom-ruler-btn",style:{backgroundColor:this.props.color},onClick:function(){return e.props.toggleButton()},disabled:!this.props.disableCondition},this.props.text)}}]),t}(a.Component)),b=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=null!==this.props.icon?"back-arrow":"burger-icon",n=null!==this.props.title?"Back to list":"Report a bump";return o.a.createElement("div",{className:"header-menu"},o.a.createElement("div",{className:"header-left-menu"},o.a.createElement("div",{className:"header-menu-icon ".concat(t),onClick:function(){return e.props.onMenuToggle()}}),o.a.createElement("div",{className:"page-title"},n)),o.a.createElement("div",{className:"header-right-menu"},o.a.createElement("div",{className:"header-menu-icon settings-icon"})))}}]),t}(a.Component),M=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).handleEvent=function(e){var t="on".concat(n.props.camelize(e));n.props[t]()},n.handleSelection=function(e){var t="is".concat(n.props.camelize(e));return n.props[t]},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.options.map(function(t,n){return o.a.createElement("div",{className:"header-submenu-tab ".concat(e.handleSelection(t)?"tab-active":""),onClick:function(){return e.handleEvent(t)},key:n},t)});return o.a.createElement("div",{className:"header-submenu"},t)}}]),t}(a.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"drawer"},o.a.createElement("div",{className:"drawer-logo"}),o.a.createElement("div",{className:"drawer-body"},o.a.createElement("div",{onClick:function(t){t.stopPropagation(),e.props.onMenuToggle()}},o.a.createElement(h.b,{className:"drawer-item",exact:"true",to:"/map"},"Report a bump")),o.a.createElement(h.b,{className:"drawer-item",exact:"true",to:"/"},"Check your trip"),o.a.createElement(h.b,{className:"drawer-item",exact:"true",to:"/"},"Calibrate sensors"),o.a.createElement(h.b,{className:"drawer-item",exact:"true",to:"/"},"Settings")))}}]),t}(a.Component),C=n(22),E=n(32),L=n.n(E).a.initializeApp({apiKey:"AIzaSyBexhCuV6JNCsyakFOeBK7NmFb_oM_pgxo",authDomain:"bumpyroadsinformer.firebaseapp.com",databaseURL:"https://bumpyroadsinformer.firebaseio.com",projectId:"bumpyroadsinformer",storageBucket:"",messagingSenderId:"854546127925",appId:"1:854546127925:web:d3c2a81c7c4e9ba6"}).firestore(),k=n(20),O=function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){n.props.centerAroundCurrentLocation&&navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){var t=e.coords;n.setState({currentLocation:{lat:t.latitude,lng:t.longitude},isCurrentPositionReceived:!0},n.props.updateLocationData(e))}),n.loadMap()},n.loadMap=function(){if(n.props.google){var e=n.props.google.maps,t=n.props.zoom,a=n.state.currentLocation,o=a.lat,i=a.lng,r=new e.LatLng(o,i),c=Object.assign({},{center:r,zoom:t,zoomControl:!1,scaleControl:!1,fullscreenControl:!1,mapTypeControl:!1,streetViewControl:!1});n.map=new e.Map(n.mymap.current,c);["click","dragend","zoom_changed"].forEach(function(e){return n.map.addListener(e,n.handleEvent(e))}),e.event.trigger(n.map,"ready")}},n.recenterMap=function(e){var t=n.map,a=n.props.google.maps;if(t){var o=new a.LatLng(e.lat,e.lng);t.panTo(o)}},n.updateCurrent=function(e){n.props.updateLocationData(e)},n.renderChildren=function(){var e=n.props.children;if(e)return o.a.Children.map(e,function(e){return o.a.cloneElement(e,{map:n.map,google:n.props.google,mapCenter:n.state.currentLocation,currentLocation:n.props.currentLocation,isCurrentPositionReceived:n.state.isCurrentPositionReceived})})};var a=e.initialCenter,i=a.lat,r=a.lng;return n.state={currentLocation:{lat:i,lng:r},zoom:17,isCurrentPositionReceived:!1},n.mymap=o.a.createRef(),n.mymarker=o.a.createRef(),n.bumps=[],n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.google!==this.props.google&&this.loadMap(),t.currentLocation!==this.state.currentLocation&&this.recenterMap(this.state.currentLocation),e.currentLocation!==this.props.currentLocation&&this.state.isCurrentPositionReceived&&this.props.isRecordingMode&&this.recenterMap(this.props.currentLocation)}},{key:"handleEvent",value:function(e){var t,n=this,a="on".concat(this.props.camelize(e));return function(e){t&&(clearTimeout(t),t=null),t=setTimeout(function(){n.props[a]&&n.props[a](n.props,n.map,e)},0)}}},{key:"render",value:function(){var e=this.props.dimentions,t={width:e.width+"px",height:e.height+"px",position:"relative"};return o.a.createElement("div",{ref:this.mymap,style:t},"Loading...",this.renderChildren())}}]),t}(a.Component),y=O;O.defaultProps={zoom:16,initialCenter:{lat:53.893009,lng:27.567444},centerAroundCurrentLocation:!1};var j,A=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){n.loadMap()},n.componentDidUpdate=function(e,t){e.google===n.props.google&&e.favorities===n.props.favorities||n.loadMap()},n.loadMap=function(){if(n.props.google){var e=n.props.google.maps,t=n.props.favorities,a=t.zoom,o=t.path,i=t.center,r=t.bumps,c={center:i,zoom:a,zoomControl:!1,scaleControl:!1,fullscreenControl:!1,mapTypeControl:!1,streetViewControl:!1},s={path:o,strokeColor:"#4D8FAC",strokeOpacity:.8,strokeWeight:4},l={path:"M-4,0a4,4 0 1,0 8,0a4,4 0 1,0 -8,0",fillColor:"red",strokeColor:"red",fillOpacity:1,scale:.8,anchor:new e.Point(0,0)};n.map=new e.Map(n.mapRef.current,c),n.trip=new e.Polyline(s),n.map&&(n.trip.setMap(n.map),r.forEach(function(t,a){n.bumps.push(new e.Marker({position:{lat:t.lat,lng:t.lng},icon:l,map:n.map,animation:e.Animation.DROP}))}))}},n.componenWillUnmount=function(){n.trip.setMap(null),n.bumps.forEach(function(e){return e.setMap(null)})},n.mapRef=o.a.createRef(),n.trip=null,n.bumps=[],n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){if(this.props.favorities){var e=this.props.dimentions,t={width:e.width+"px",height:e.height+"px",position:"relative"};return o.a.createElement("div",{className:"favorities-map"},o.a.createElement("div",{ref:this.mapRef,style:t}))}}}]),t}(a.Component),z=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.favorities,a=t.selectedTrip,i=t.google,r=t.dimentions;if(!n.length)return null;if(null!==a)return o.a.createElement(A,{google:i,favorities:n[a],dimentions:r});return o.a.createElement("div",{className:"fav-list"},n.map(function(t,n){return o.a.createElement("div",{className:"fav-item ".concat(t.bumps.length<4?"green":"red"),onClick:function(){return e.props.onTripSelect(n)},key:n},o.a.createElement("div",{className:"fav-route"},"From: ",t.start),o.a.createElement("div",{className:"fav-route"},"To: ",t.end),o.a.createElement("div",{className:"fav-bumps-count"},t.bumps.length," bumps per ",t.tripdistance?t.tripdistance.toFixed(1):0," km"))}))}}]),t}(a.Component),R=[{path:"M69.9,36c0.3-9.3,0.3-9.1,0.3-9.1c0-0.2,0.7-7.9-0.6-15.3c-1.3-7.5-9.7-9.5-9.7-9.5l-0.4,0l-8.9-0.3v0l-8.8,0.3  l-0.4,0c0,0-8.4,2.1-9.7,9.5c-1.3,7.4-0.6,15.1-0.6,15.3c0,0,0-0.3,0.3,9.1c0.4,9.8-0.6,34-0.5,37c0.1,2.9-0.2,9.2,0.4,10.8  c0.6,1.6,2.6,9.6,2.6,9.6s3.2,6.2,16.8,5.3v0c13.5,0.9,16.7-5.3,16.7-5.3s2-8,2.6-9.6c0.6-1.6,0.2-7.9,0.4-10.8  C70.5,70,69.5,45.8,69.9,36L69.9,36z",fill:"#D14C32"},{path:"M61.7,27.5c-3.2-1.6-11.1-1.8-11.1-1.8v0c0,0-8,0.1-11.1,1.8c-3.2,1.6-4.3,2.4-4.1,3.5c0.2,1.1,2.6,12,2.6,12.3  c0,0.3,0.2,0.7,1.5,0.4c1.2-0.4,11.2-0.8,11.2-0.8v0c0,0,10,0.4,11.2,0.8c1.2,0.4,1.5-0.1,1.5-0.4c0-0.3,2.4-11.2,2.6-12.3  C66,29.9,64.9,29.2,61.7,27.5L61.7,27.5z",fill:"#121215"},{path:"M67.4,32.8c0,0,0,12.6,0,16.3c0,3.7,0,8.7-0.3,12.1C66.8,64.7,66.1,80,66.1,80v0.3c0,0-2-5.3-2.4-9.4  c-0.9-4-0.5-14,0-20.1C64,44.8,67,33.9,67.4,32.8z",fill:"#101114"},{path:"M62.4,76.1c-0.2-1.4-0.4-1-0.5-1.1c-0.1-0.1-1.5,0.3-2.1,0.4c-4.6,0.8-9.3,0.6-9.3,0.6v0c0,0-4.7,0.2-9.3-0.6  c-0.6-0.1-2-0.5-2.1-0.4c-0.1,0.1-0.3-0.3-0.5,1.1c-0.2,1.4-1.4,9.9-1.3,10c0.1,0.1,2.9,1.8,7.9,2.6c1.1,0.1,5.3,0.2,5.3,0.2v0  c0,0,4.2-0.2,5.3-0.2c5-0.8,7.8-2.5,7.9-2.6C63.8,86.1,62.7,77.5,62.4,76.1L62.4,76.1z",fill:"#131417"},{path:"M67,36l1.2,0.7V38H67V36z",fill:"#0D0E13"},{path:"M59,2.9c-0.1-0.1-0.2-0.1-0.4-0.2C58.1,2.6,58.3,2.6,59,2.9z",fill:"#C2C6C1"},{path:"M67.7,11.8C66.9,6.6,61,3.7,59,2.9c2,1.4,3.4,9.1,4.5,14c1.1,5.2,1.8,13.5,1.8,13.5s2.4,0.4,3.6,7  C69.7,41.5,68.9,18.8,67.7,11.8L67.7,11.8z",fill:"#D8684A"},{path:"M42.6,2.8c-0.1,0-0.2,0.1-0.4,0.2C42.9,2.7,43.2,2.6,42.6,2.8z",fill:"#C2C6C1"},{path:"M33.5,11.8c-1.2,7-1.9,29.7-1.1,25.5c1.1-6.5,3.6-7,3.6-7s0.6-8.3,1.8-13.5c1.1-4.9,2.5-12.6,4.5-14  C40.3,3.8,34.4,6.6,33.5,11.8z",fill:"#D8684A"},{path:"M63.4,56.8l3.8-2.9v3.4l-3.8,2.4V56.8z M37.7,83.9c-0.2,1.3-0.3,2.2-0.2,2.2c0.1,0.1,2.9,1.8,7.9,2.6  c1.1,0.1,5.3,0.2,5.3,0.2v0c0,0,4.2-0.2,5.3-0.2c5-0.8,7.8-2.5,7.9-2.6c0,0-0.3-2.4-0.6-4.9L37.7,83.9L37.7,83.9z",fill:"#202226"},{path:"M37.3,40.1l24.4-5.8l3.7-1.2c0.2-1.1,0.4-1.9,0.4-2.1c0.2-1.1-0.9-1.9-4.1-3.5c-3.2-1.6-11.1-1.8-11.1-1.8v0  c0,0-8,0.1-11.1,1.8c-3.2,1.6-4.3,2.4-4.1,3.5C35.5,31.7,36.5,36.7,37.3,40.1L37.3,40.1z",fill:"#212428"},{path:"M33.9,32.9c0,0,0,12.6,0,16.3c0,3.7,0,8.7,0.3,12.1c0.3,3.4,0.9,18.7,0.9,18.7v0.3c0,0,2-5.3,2.4-9.4  c0.9-4,0.5-14,0-20.1C37.3,44.8,34.3,33.9,33.9,32.9z",fill:"#101114"},{path:"M69.9,36c0.3-9.3,0.3-9.1,0.3-9.1c0-0.2,0.7-7.9-0.6-15.3c-1.3-7.5-9.7-9.5-9.7-9.5l-0.4,0l-8.9-0.3v0l-8.8,0.3  l-0.4,0c0,0-8.4,2.1-9.7,9.5c-1.3,7.4-0.6,15.1-0.6,15.3c0,0,0-0.3,0.3,9.1c0.4,9.8-0.6,34-0.5,37c0.1,2.9-0.2,9.2,0.4,10.8  c0.6,1.6,2.6,9.6,2.6,9.6s3.2,6.2,16.8,5.3v0c13.5,0.9,16.7-5.3,16.7-5.3s2-8,2.6-9.6c0.6-1.6,0.2-7.9,0.4-10.8  C70.5,70,69.5,45.8,69.9,36L69.9,36z M69.3,83.9c-1.6,9.7-4,11.2-6.7,12.7c-2.7,1.4-11.9,1.6-11.9,1.6v0c-0.9,0-9.3-0.3-11.9-1.6  c-2.7-1.5-5.1-3-6.7-12.7c-1.6-9.7,0.6-13.6,0.4-21.9c-0.3-8.3-0.3-29.6-0.2-32c0.1-2.4-0.6-19.1,1.7-21.5c2.3-2.4,5.6-5.7,7.6-5.8  C42.6,2.7,44,2.6,45,2.6V2.6h5.7v0h5.6v0.1c1.2,0,2.3,0,3.5,0.1c2,0.1,5.3,3.4,7.6,5.8c2.3,2.4,1.6,19.1,1.7,21.5  c0.1,2.4,0.1,23.7-0.2,32C68.6,70.3,70.9,74.2,69.3,83.9L69.3,83.9z",fill:"#9E4A36"},{path:"M34.3,91c0,0,1.5,3.3,4,4.1c2.4,0.9,4.2,1.3,4.2,1.3s-3.1,0-4.8-1C36.1,94.5,34.2,93.1,34.3,91z",fill:"#9E4A36"},{path:"M41.5,2.7c0,0-3.4,1.6-4.4,2.8c-1,1.1-2.5,3-2.6,3.3c0,0.2,0,0.9,0,0.9S40.6,3.1,41.5,2.7z",fill:"#FEFDF8"},{path:"M50.6,1.8L50.6,1.8L50.6,1.8L50.6,1.8z M58.4,3c0-0.3-1.7-0.8-2.2-0.9c-0.4-0.1-5.3-0.2-5.6-0.2l0,0  c-0.3,0-5.2,0.2-5.6,0.3c-0.4,0.1-2.1,0.6-2.2,0.9c0,0.3,0.3,0.5,0.7,0.3s1-0.7,1.4-0.8c0.4-0.1,5.7-0.3,5.7-0.3l0,0  c0.4,0,5.2,0.2,5.6,0.3c0.4,0.1,1,0.6,1.4,0.8C58.1,3.5,58.4,3.3,58.4,3L58.4,3z",fill:"#1D2021"},{path:"M32.8,36.8c0,0-3.4,1.4-3.6,2.7C29,40.8,29,41,29.2,41s3.8-1.9,3.8-1.9v-2.3L32.8,36.8L32.8,36.8z",fill:"#D14C32"},{path:"M29.2,41.3l0-0.3l3.8-1.9v0.3L29.2,41.3z",fill:"#0D0E13"},{path:"M34.3,36.1L33,36.8V38h1.2V36.1z",fill:"#0D0E13"},{path:"M37.9,56.9L34,54v3.4l3.8,2.4V56.9z",fill:"#202226"},{path:"M38.7,76.1c0.2-1.4,0.4-1,0.5-1.1c0.1-0.1,1.5,0.3,2.1,0.4c4.6,0.8,9.3,0.6,9.3,0.6v0c0,0,4.7,0.2,9.3-0.6  c0.6-0.1,2-0.5,2.1-0.4c0.1,0.1,0.3-0.3,0.5,1.1c0.2,1.4,1.4,9.9,1.3,10c-0.1,0.1-2.9,1.8-7.9,2.6c-1.1,0.1-5.3,0.2-5.3,0.2v0  c0,0-4.2-0.2-5.3-0.2c-5-0.8-7.8-2.5-7.9-2.6C37.3,86.1,38.5,77.5,38.7,76.1L38.7,76.1z M39.6,27.5c3.2-1.6,11.1-1.8,11.1-1.8v0  c0,0,8,0.1,11.1,1.8c3.2,1.6,4.3,2.4,4.1,3.5c-0.2,1.1-2.6,12-2.6,12.3c0,0.3-0.2,0.7-1.5,0.4c-1.2-0.4-11.2-0.8-11.2-0.8v0  c0,0-10,0.4-11.2,0.8c-1.2,0.4-1.5-0.1-1.5-0.4c0-0.3-2.4-11.2-2.6-12.3C35.3,29.9,36.4,29.2,39.6,27.5L39.6,27.5z",fill:"#343C3E"},{path:"M38.2,28.3c-2.2,1.2-3,1.9-2.8,2.8c0.2,1.1,2.6,12,2.6,12.3c0,0.3,0.2,0.7,1.5,0.4c0.3-0.1,1-0.2,2-0.2  C39.9,39.9,38.7,31.8,38.2,28.3L38.2,28.3z M63.1,28.2c2.2,1.2,3,1.9,2.8,2.8c-0.2,1.1-2.6,12-2.6,12.3c0,0.3-0.2,0.7-1.5,0.4  c-0.3-0.1-1-0.2-2-0.2C61.4,39.9,62.6,31.8,63.1,28.2L63.1,28.2z",fill:"#2E3436"},{path:"M65.3,29.7c-0.6-0.6-1.8-1.2-3.6-2.2c-3.2-1.6-11.1-1.8-11.1-1.8v0h0v0c-0.6,0-8.1,0.2-11.1,1.8  c-1.8,0.9-2.9,1.6-3.6,2.2l2.8,2.2c0,0,5.7-0.9,11.9-1v0c6.1,0.1,11.8,0.7,11.8,0.7L65.3,29.7L65.3,29.7z",fill:"#202226"},{path:"M59.8,2.7c0,0,3.4,1.6,4.4,2.8c1,1.1,2.5,3,2.6,3.3c0,0.2,0,0.9,0,0.9S60.7,3.1,59.8,2.7z",fill:"#FEFDF8"},{path:"M55.4,3.8H44.8c0,0-2.2,0.6-2.9,8.6c-0.7,8-2,14.1,3,12.7c4.9-1.4,7.6-0.2,9.8-0.3c2.2-0.2,5.6,2.3,4.3-8.6  C57.7,5.2,57.6,4.6,55.4,3.8L55.4,3.8z",fill:"#D8684A"},{path:"M44.5,24.3l1.8-18.1l-1.3,6.4L44.5,24.3z M56.8,24.2L55,6.2l1.3,6.4L56.8,24.2z M66.9,90.9c0,0-1.5,3.3-4,4.1  c-2.4,0.9-4.2,1.3-4.2,1.3s3.1,0,4.8-1C65.2,94.5,67,93,66.9,90.9L66.9,90.9z",fill:"#9E4A36"},{path:"M39.2,75c-0.1,0.1-0.3-0.3-0.5,1.1s-1.4,9.9-1.3,10c0,0,0.7,0.5,2,1L41,75.4C40.3,75.2,39.2,74.9,39.2,75  L39.2,75z M62.4,76.2c-0.2-1.4-0.4-1-0.5-1.1c0-0.1-1.1,0.2-1.8,0.3l1.6,11.8c1.2-0.5,1.9-0.9,2-1C63.8,86.1,62.6,77.6,62.4,76.2  L62.4,76.2z",fill:"#2E3436"},{path:"M68.4,36.8c0,0,3.4,1.4,3.6,2.7s0.2,1.5,0,1.5c-0.2,0-3.8-1.9-3.8-1.9v-2.3L68.4,36.8L68.4,36.8z",fill:"#D14C32"},{path:"M72,41.3l0-0.3L68.3,39v0.3L72,41.3z",fill:"#0D0E13"},{path:"M55.9,88.3H44.7c0,0-6.1-0.8-5.3,1.8c0.8,2.6-0.8,5.8,7.6,5.8h6.5c8.5,0,6.8-3.2,7.6-5.8  C62,87.4,55.9,88.3,55.9,88.3L55.9,88.3z",fill:"#D8684A"},{path:"M51,86.9c-5.2,0-9.8-1.1-13.1-3l-0.2,0c-0.3,2.4-0.3,2.2-0.2,2.3c0.1,0.1,2.9,1.8,7.9,2.6  c1.1,0.1,5.3,0.2,5.3,0.2v0c0,0,4.2-0.2,5.3-0.2c5-0.8,7.8-2.5,7.9-2.6c0,0-0.1-0.8-0.2-2C60.4,85.9,55.9,86.9,51,86.9z",fill:"#202226"},{path:"M58.3,51.8c1.2-3.8-0.8-5.2-3.1-5.6c-1.8-0.3-6.4-0.2-7.9-0.1c-2.7,0.2-5.6,1.3-4.2,5.7c2.4,7.5-0.1,17.8,0,19  c0.1,0.9,1.4,2.4,4,2.8c0.9,0.1,6.8,0.1,7.9-0.1c2.1-0.5,3.2-1.8,3.3-2.6C58.4,69.6,55.9,59.3,58.3,51.8L58.3,51.8z",fill:"#D8684A"}],S=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).componentDidMount=function(){n.marker=[]},n.componentDidUpdate=function(e){var t=n.props,a=t.map,o=t.angle,i=t.move,r=t.isCurrentPositionReceived,c=n.props.currentLocation.speed;(a!==e.map||c>5&&(o!==e.angle||i>5)||r!==e.isCurrentPositionReceived)&&n.renderMarker()},n.componentWillUnmount=function(){n.removeMarker()},n.removeMarker=function(){n.marker&&n.marker.length>0&&n.marker.forEach(function(e){e.setMap(null)})},n.renderMarker=function(){n.removeMarker();var e=n.props,t=e.map,a=e.google,o=e.mapCenter,i=e.currentLocation,r=i.lat?{lat:i.lat,lng:i.lng}:void 0,c=r||o;r=new a.maps.LatLng(c.lat,c.lng),R.forEach(function(e,o){var i={path:e.path,fillColor:e.fill,strokeColor:e.fill,fillOpacity:1,scale:.4,anchor:new a.maps.Point(50,50),rotation:n.props.angle},c={map:t,position:r,icon:i};n.marker[o]=new a.maps.Marker(c),n.marker[o].setZIndex(100)}),n.props.resetMove()},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return null}}]),t}(a.Component),T=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).componentDidMount=function(){n.bumps=[]},n.componentDidUpdate=function(e){var t=n.props,a=t.map,o=t.isCurrentPositionReceived,i=t.bumps;if(a!==e.map||o!==e.isCurrentPositionReceived||i!==e.bumps){var r=i;r.slice(e.bumps.length-1),n.renderBumps(r)}},n.componentWillUnmount=function(){n.removeBumps()},n.removeBumps=function(){n.bumps&&n.bumps.length>0&&n.bumps.forEach(function(e){e.setMap(null)},function(){n.bumps=[]})},n.renderBumps=function(e){var t=n.props,a=(t.map,t.google),o=(t.mapCenter,a.maps),i={path:"M-4,0a4,4 0 1,0 8,0a4,4 0 1,0 -8,0",fillColor:"red",strokeColor:"red",fillOpacity:1,scale:1,anchor:new o.Point(0,0)};e.forEach(function(e,t){n.bumps.push(new o.Marker({position:{lat:e.lat,lng:e.lng},icon:i,map:n.map,animation:o.Animation.DROP}))})},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return null}}]),t}(a.Component),D=n(34),N=n.n(D),P=6371e3;function F(e){return[" ","_"].forEach(function(t){e=e.split(t).map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join("")}),e}function x(e,t){for(var n in e)if(!t.hasOwnProperty(n)||e[n]!==t[n])return!1;return!0}function V(e){return e*Math.PI/180}function U(e,t,n,a){var o=V(n-e),i=V(a-t),r=Math.sin(o/2)*Math.sin(o/2)+Math.cos(V(e))*Math.cos(V(n))*Math.sin(i/2)*Math.sin(i/2);return 2*P*Math.atan2(Math.sqrt(r),Math.sqrt(1-r))}var B={enableHighAccuracy:!0,timeout:5e3,maximumAge:0},I=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){L.collection("limit").doc("result").get().then(function(e){if(e.exists)return e.data().data}).then(function(e){n.setState({historicBumps:e})}),n.setState({isDataFetched:!0,data:[]}),window.addEventListener("resize",n.updateWindowDimensions)},n.componentDidUpdate=function(e,t){},n.componentWillUnmount=function(){window.removeEventListener("resize",n.updateWindowDimensions)},n.updateWindowDimensions=function(){n.setState({dimentions:{height:window.innerHeight,width:window.innerWidth}})},n.toggleRecording=function(){n.state.isRecordingMode?n.stopRecording():n.startRecording(),n.setState({isRecordingMode:!n.state.isRecordingMode})},n.startRecording=function(){n.setState({data:[],bumps:[],tripdistance:0}),navigator&&navigator.geolocation&&(j=navigator.geolocation.watchPosition(n.updateLocationData,n.err,B)),window.DeviceMotionEvent&&window.addEventListener("devicemotion",n.updateAccelerationData)},n.err=function(){console.log("error")},n.updateAccelerationData=function(e){var t=e.acceleration,a=t.x,o=t.y,i=t.z,r=n.state.acceleration,c=r.prev,s=r.average,l=r.max,p=r.ticks,u=n.state.currentLocation,m=u.lat,d=u.lng,h=n.state.bumps;if(null!==a&&null!==o&&null!==i){var f=a-c.x,v=o-c.y,g=i-c.z,b=Math.pow(f*f+v*v+g*g,1/3);b>2.829226039&&n.setState({bumps:0!==h.length&&x(h[h.length-1],{lat:m,lng:d})?h:[].concat(Object(C.a)(h),[{lat:m,lng:d}])}),l=l>b?l:b,n.setState({acceleration:{prev:{x:a,y:o,z:i},average:s,max:l,ticks:p}})}},n.updateLocationData=function(e){var t=n.state.currentLocation,a=n.state.data,o=e.coords.latitude,i=e.coords.longitude,r=e.timestamp,c=U(t.lat,t.lng,o,i),s=function(e,t,n,a){var o=a-t,i=Math.sin(o)*Math.cos(n),r=Math.cos(e)*Math.sin(n)-Math.sin(e)*Math.cos(n)*Math.cos(o),c=Math.atan2(i,r);return c=360-(c=(360+(c*=180/Math.PI))%360)}(t.lat,t.lng,o,i),l=Math.abs(t.timestamp-r)/1e3,p=c/l?c/l*3600/1e3:0;n.setState({previousLocation:t,currentLocation:{lat:o,lng:i,speed:p,timestamp:r},data:0!==a.length&&x(a[a.length-1],{lat:o,lng:i})?a:[].concat(Object(C.a)(n.state.data),[{lat:o,lng:i}]),angle:Math.abs(s-n.state.angle)>22?s:n.state.angle,move:n.state.move+c,tripdistance:n.state.tripdistance+c/1e3})},n.convertToReadableAddress=function(e){return new Promise(function(t,a){for(var o=n.props.google.maps,i=[],r=new o.Geocoder,c=0;c<e.length;c++)r.geocode({location:e[c]},function(n,o){"OK"!==o&&a(new Error("Geocoder failed due to: "+o)),n[0]||a(new Error("No results")),i.push(n[0].formatted_address),e.length===i.length&&t({start:i[0],end:i[1]})})})},n.stopRecording=function(){navigator.geolocation.clearWatch(j),window.removeEventListener("devicemotion",n.updateAccelerationData),n.updateFavoritiesData()},n.updateFavoritiesData=function(){var e=n.state,t=e.favorities,a=e.bumps,o=e.tripdistance,i=n.state.data,r=function(e){var t,n,a,o;return e.forEach(function(e){t=t>e.lat?t:e.lat,n=n<e.lat?n:e.lat,a=a>e.lng?a:e.lng,o=o<e.lng?o:e.lng}),{ne:{lat:t,lng:a},sw:{lat:n,lng:o}}}(i),c=function(e){var t=e.ne,n=e.sw;return{lat:n.lat+(t.lat-n.lat)/2,lng:n.lng+(t.lng-n.lng)/2}}(r),s=r.ne,l=r.sw,p=function(e){return Math.round(14-Math.log(e/2e3)/Math.LN2)}(U(l.lat,l.lng,s.lat,s.lng));if(!(i.length<=1)){5===t.length&&t.shift();var u=[i[0],i[i.length-1]];n.convertToReadableAddress(u).then(function(e){var r=e.start,s=e.end;n.setState({favorities:[].concat(Object(C.a)(t),[{start:r,end:s,path:i,zoom:p,center:c,bumps:a,tripdistance:o}])},function(){return localStorage.setItem("favorities",JSON.stringify(n.state.favorities))})})}},n.resetMove=function(){n.setState({move:0})},n.onZoomChanged=function(e,t,n){},n.sendBumpsToFirebase=function(){var e=n.state.bumps,t=L.collection("limit").doc("result");t.get().then(function(e){if(e.exists)return e.data().data}).then(function(n){return t.set({data:n.concat(e)})})},n.sendTripToFirebase=function(){L.collection("trip").doc("path").set({path:n.state.data}),L.collection("trip").doc("bumps").set({bumps:n.state.bumps})},n.state={isDataFetched:!1,isRecordingMode:!1,data:[],currentLocation:{},previousLocation:{},acceleration:{prev:{x:0,y:0,z:0},average:0,max:0,ticks:0},zoom:16,angle:0,move:0,tripdistance:0,dimentions:{height:window.innerHeight,width:window.innerWidth},favorities:JSON.parse(localStorage.getItem("favorities"))||[],bumps:[],historicBumps:[]},n.canvas=o.a.createRef(),n.mymap=o.a.createRef(),n.mymarker=o.a.createRef(),n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=(e.bumps,e.historicBumps),n=e.favorities,a=e.dimentions,i=e.isRecordingMode,r=e.currentLocation,c=this.props.google,s=t.map(function(e,t){return o.a.createElement(k.Marker,{key:t,position:{lat:e.lat,lng:e.lng},icon:N.a,title:"check"})});return this.props.isFavoritiesView?o.a.createElement(z,{favorities:n,selectedTrip:this.props.selectedTrip,google:c,dimentions:a,onTripSelect:this.props.onTripSelect}):o.a.createElement("div",{className:"map"},o.a.createElement(y,{centerAroundCurrentLocation:!0,google:c,updateLocationData:this.updateLocationData,currentLocation:r,isRecordingMode:i,onZoomChanged:this.onZoomChanged,dimentions:a,camelize:F},o.a.createElement(S,{angle:this.state.angle,move:this.state.move,resetMove:this.resetMove}),o.a.createElement(k.Polyline,{path:this.state.data,strokeColor:"#4D8FAC",strokeOpacity:.8,strokeWeight:4}),o.a.createElement(T,{bumps:this.state.bumps}),s),o.a.createElement("button",{onClick:this.sendBumpsToFirebase,style:{position:"absolute",top:"17vh",left:0,height:"5vh"}},"Add bumps to map"),o.a.createElement("button",{onClick:this.sendTripToFirebase,style:{position:"absolute",top:"26vh",left:0,height:"5vh"}},"Save trip to firebase"),o.a.createElement(g,{color:i?"#e34929":"#757d75",toggleButton:this.toggleRecording,disableCondition:!this.state.isDataFetched,text:i?"Stop Recording":"Start Recording"}))}}]),t}(a.Component),W=Object(k.GoogleApiWrapper)({apiKey:"AIzaSyBE7mLpixeaO78BgnobMQ_yawg5ZBCX8f0"})(I),H=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).onFavoritiesView=function(){n.setState({isFavoritiesView:!0,isMapView:!1})},n.onMapView=function(){n.setState({isFavoritiesView:!1,isMapView:!0,selectedTrip:null})},n.onTripSelect=function(e){n.setState({selectedTrip:e})},n.onMenuToggle=function(){null!==n.state.selectedTrip?n.setState({selectedTrip:null}):n.setState({isDrawer:!n.state.isDrawer})},n.state={isFavoritiesView:!1,selectedTrip:null,isMapView:!0,submenuOptions:["Favorities View","Map View"],isDrawer:!1},n.cover=o.a.createRef(),n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"header"},o.a.createElement(b,{title:this.state.selectedTrip,icon:this.state.selectedTrip,onMenuToggle:this.onMenuToggle}),o.a.createElement(M,{isFavoritiesView:this.state.isFavoritiesView,isMapView:this.state.isMapView,onFavoritiesView:this.onFavoritiesView,onMapView:this.onMapView,options:this.state.submenuOptions,camelize:F})),o.a.createElement(W,{isFavoritiesView:this.state.isFavoritiesView,selectedTrip:this.state.selectedTrip,onTripSelect:this.onTripSelect,google:this.props.google})),o.a.createElement("div",{className:"cover",style:{display:this.state.isDrawer?"block":"none"}},o.a.createElement("div",{className:"cover-background",ref:"cover",onClick:this.onMenuToggle}),o.a.createElement(w,{onMenuToggle:this.onMenuToggle})))}}]),t}(a.Component),Q=(n(69),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"start-page-main"},o.a.createElement("div",{className:"logo-container"},o.a.createElement("div",{className:"logo-txt"},"Bumpy"),o.a.createElement("div",{className:"logo-txt"},"Roads"),o.a.createElement("div",{className:"logo-txt"},"Informer"))),o.a.createElement(h.b,{exact:"true",to:"/map",className:"bottom-ruler-btn"},"get started"))}}]),t}(a.Component)),J=Object(v.a)(),K=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){window.addEventListener("load",function(){window.history.pushState({noBackExitsApp:!0},"")}),window.addEventListener("popstate",function(e){e.state&&e.state.noBackExitsApp&&window.history.pushState({noBackExitsApp:!0},"")})},n.permissionGranted=function(){n.setState({isGranted:!0})},n.state={isGranted:!1},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,{history:J},o.a.createElement(f.a,{exact:!0,path:"/",component:Q}),o.a.createElement(f.a,{exact:!0,path:"/map",component:H}))}}]),t}(a.Component);"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}),r.a.render(o.a.createElement(K,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/reactjs_accel",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/reactjs_accel","/service-worker.js");c?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):s(t,e)})}}()}},[[35,1,2]]]);
//# sourceMappingURL=main.44c564c4.chunk.js.map