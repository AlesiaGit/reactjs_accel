import React, { Component } from 'react';
import '../../styles/report-bumps.css';
import { HeaderMenu, HeaderSubmenu, Drawer, NextStepButton } from '../Shared/index';

import Main from './main';
import SearchMenu from './search-menu';
import * as helpers from '../../helpers/index';

class CheckTrip extends Component {
	constructor(props) {
		super(props);

	    this.state = {
	    	isDrawer: false,
	    	isRecordingMode: false
	    };

	    

	    this.cover = React.createRef();
	}

	onMenuToggle = () => {
		this.setState({ isDrawer: !this.state.isDrawer })
	}

	toggleRecording = () => {
		this.setState({isRecordingMode: !this.state.isRecordingMode});  
	}

	render() {
		let { isRecordingMode, isDrawer } = this.state;
		return (
			<div className="wrapper">
				<div className="main">
					<div className="header">
						<HeaderMenu 
							title={"Check your trip"} 
							icon={"burger-icon"} 
							onMenuToggle={this.onMenuToggle} />
						<SearchMenu />
					</div>
					<Main isRecordingMode={isRecordingMode} />
					<NextStepButton 
						color={!isRecordingMode ? "#fbad19" : "#757d75"} // #e34929
						toggleButton={this.toggleRecording}
						text={isRecordingMode ? "Start Guidance" : "Search"}
						/>	
				</div>
				<div className="cover" style={{display: isDrawer ? "block" : "none"}}>
					<div className="cover-background" ref="cover" onClick={this.onMenuToggle}  />
					<Drawer current={this.props.current} markSelection={this.props.markSelection} />
				</div>
			</div> 
		);
	}
}

export default CheckTrip;
