import React, { Component } from 'react';
import { connect } from "react-redux";
import { FacebookShareButton, TelegramShareButton, WhatsappShareButton, ViberShareButton, EmailShareButton } from 'react-share';
import { FacebookIcon, TelegramIcon, WhatsappIcon, ViberIcon, EmailIcon } from 'react-share';

const mapStateToProps = state => {
    return {
    	selectedTrip: state.selectedTrip,
    	menu: state.menu
    };
};

class ShareBlock extends Component {
	render() {
		if (this.props.selectedTrip === null) return null;
		let url = `https://alesiagit.github.io/reactjs_accel/#/shared/${this.props.selectedTrip.id}`;
		
		return (
			<div className="share-wrapper">
				<div className="share-buttons-wrapper">
					<EmailShareButton url={url} className="share-social-icon">
						<EmailIcon size={38} round={false} borderRadius={8}/>
					</EmailShareButton>
					<FacebookShareButton url={url} className="share-social-icon">
						<FacebookIcon size={38} round={false} borderRadius={8}/>
					</FacebookShareButton>
					<TelegramShareButton url={url} className="share-social-icon">
						<TelegramIcon size={38} round={false} borderRadius={8}/>
					</TelegramShareButton>
					<WhatsappShareButton url={url} className="share-social-icon">
						<WhatsappIcon size={38} round={false} borderRadius={8}/>
					</WhatsappShareButton>
					<ViberShareButton url={url} className="share-social-icon">
						<ViberIcon size={38} round={false} borderRadius={8}/>
					</ViberShareButton>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(ShareBlock);