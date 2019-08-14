import React, { Component } from 'react';
import '../../styles/report-bumps.css';
import { HeaderMenu, HeaderSubmenu, Drawer } from '../Shared/index';
import Main from './main';
import * as helpers from '../../helpers/index';

class ReportBumpsView extends Component {
	constructor(props) {
		super(props);

	    this.state = {
	    	isFavoritiesView: false, 
	    	selectedTrip: null,
	    	isMapView: true, 
	    	submenuOptions: ["Favorities View", "Map View"],
	    	isDrawer: false
	    };

	    this.cover = React.createRef();

	    
	}

	onFavoritiesView = () => {
		this.setState({
			isFavoritiesView: true,
			isMapView: false
		});
	}

	onMapView = () => {
		this.setState({
			isFavoritiesView: false,
			isMapView: true,
			selectedTrip: null
		});
	}

	onTripSelect = i => {
		this.setState({ selectedTrip: i })
	}

	onMenuToggle = () => {
		if (this.state.selectedTrip !== null) {
			this.setState({ selectedTrip: null })
		} else {
			this.setState({ isDrawer: !this.state.isDrawer })
		}
	}

	render() {
		return (
			<div className="wrapper">
				<div className="main">
					<div className="header">
						<HeaderMenu 
							title={this.state.selectedTrip} 
							icon={this.state.selectedTrip} 
							onMenuToggle={this.onMenuToggle} 
							/>
						<HeaderSubmenu 
							isFavoritiesView={this.state.isFavoritiesView}
							isMapView={this.state.isMapView}
							onFavoritiesView={this.onFavoritiesView}
							onMapView={this.onMapView}
							options={this.state.submenuOptions}
							camelize={helpers.camelize}
							/>
					</div>
					<Main 
	isFavoritiesView={this.state.isFavoritiesView} 
	selectedTrip={this.state.selectedTrip}
	onTripSelect={this.onTripSelect}
	google={this.props.google}
	/>
				</div>
				<div className="cover" style={{display: this.state.isDrawer ? "block" : "none"}}>
					<div className="cover-background" ref="cover" onClick={this.onMenuToggle}  />
					<Drawer onMenuToggle={this.onMenuToggle}/>
				</div>
			</div>
		);
	}
}

export default ReportBumpsView;

//<Main 
	//isFavoritiesView={this.state.isFavoritiesView} 
	//selectedTrip={this.state.selectedTrip}
	//onTripSelect={this.onTripSelect}
	//google={this.props.google}
	///>



// export default GoogleApiWrapper({
// 	apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
// })(ReportBumpsView);



// <div 
// 							className="map" 
// 							style={{display: this.state.isFavoritiesView ? "none" : "block"}}>
// 							<BumpsMap 
// 								centerAroundCurrentLocation
// 								google={this.props.google}
// 								updateLocationData={this.updateLocationData}
// 								currentLocation={this.state.currentLocation}
// 								isRecordingMode={this.state.isRecordingMode}
// 								onZoomChanged={this.onZoomChanged}		
// 								dimentions={dimentions}
// 								camelize={helpers.camelize}						
// 								>
// 								<Car 
// 									angle={this.state.angle}
// 									move={this.state.move}
// 									resetMove={this.resetMove}
// 								/>
// 								<Polyline
// 									path={this.state.data}
// 									strokeColor="#4D8FAC"
// 									strokeOpacity={0.8}
// 									strokeWeight={4} 
// 								/>
// 								{bumpsMap}
// 							</BumpsMap>	
// 						</div>
						
// 						<div 
// 							className="map favorities-map" 
// 							style={{display: this.state.isFavoritiesView ? "flex" : "none"}}>						
// 								<div className="favorities-list">{trips}</div>
// 								{tripMap}								
// 						</div>	

//<canvas id="canvas" width={this.state.dimentions.width + "px"} height={this.state.dimentions.height + "px"} ref={this.canvas} style={{display: this.state.isFavoritiesView ? "block" : "none"}}/>

// var accel = this.state.testaccel.map(function(item){
// 	return <li>{item.x}, {item.y}, {item.z}</li>;
// })


// <div style={{display: this.state.isFavoritiesView ? "block" : "none", marginTop: "18vh", position: "absolute"}}>
// 								Max: {this.state.acceleration.max}, average: {this.state.acceleration.average}, ticks: {this.state.acceleration.ticks}
// 								<button onClick={this.sendAccelToFirebase}>Send acceleration data to database</button>
//</div>



	// updateAccelerationData = (ev) => {
	// 	let x = ev.acceleration.x;
	// 	let y = ev.acceleration.y;
	// 	let z = ev.acceleration.z;

	// if (x !== null && y !== null && z !== null) {
		// 	this.setState({
		// 		acceleration: { x, y, z}
		// 	}, () => {
		// 		if (line === this.canvas.current.width) line = 0;
				
		// 		this.drawBackground("white", 0);

		// 		var index = 1;
		// 		var colors = ["#4c88b7", "#e34929", "#fbad19"];
		// 		let accel = this.state.acceleration;
		// 		for (var prop in accel) {
		// 			this.drawLine(accel[prop], index, colors[index - 1]);
		// 			index++;
		// 		}
		// 		line += 3;


		// 		this.drawBackground("grey", 1);
		// 		for (var i = 2; i < 8; i++) this.drawBackground("white", i);
		// 	})
		// }
	// }

	// drawLine = (value, index, color) => {
	// 	let ctx = this.state.context;
	// 	var axis = index * this.state.dimentions.height * 0.8 / 6;

	// 	ctx.beginPath();
	// 	ctx.strokeStyle= color;
	// 	ctx.lineWidth = 2;
	// 	ctx.moveTo(line, axis + value * 5);
	// 	ctx.lineTo(line, axis);
	// 	ctx.stroke();
	// }

	// drawBackground = (color, offset) => {
	// 	let ctx = this.state.context;

	// 	ctx.beginPath();
	// 	ctx.strokeStyle = color;
	// 	ctx.moveTo(line + offset, 0);
	// 	ctx.lineTo(line + offset, this.state.dimentions.height);
	// 	ctx.stroke();
	// }
