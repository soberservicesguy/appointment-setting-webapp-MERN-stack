
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import utils from "../utilities"
// IMPORT material-ui stuff
import { withStyles } from '@material-ui/styles';
import { 
	Grid, 
	// Button 
} from "@material-ui/core";
// IMPORT responsiveness hook
import withResponsiveness from "../responsiveness_hook";

import { withRouter } from "react-router-dom";

const styles = theme => ({
	root: {
		height: 48,
		color: props => (props.cool) ? 'red' : 'black',
		[theme.breakpoints.up('sm')]:{
			paddingLeft:100
		}
	},
	staticBackground:{
		// backgroundColor: '#eee', // Used if the image is unavailable
		backgroundImage: props => `url(${props.backgroundImage})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundAttachment: 'fixed',	
		backgroundSize: 'cover', // '300px 100px' | '75% 50%' | 'cover' | 'contain' | 'none'
		height:400,
		width:'100%',
		marginBottom:100,

	},
	qouteContainer:{
		paddingTop: 150,  // valign BETTER ONE
		paddingBottom: 150,  // valign BETTER ONE
	},
	qoute:{
		margin: 'auto',
		width: '80%',
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	reference:{
		fontSize: 20,
		textAlign: 'center',
	},
});


class StaticBackgroundWithQouteAndReference extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
		}	
	}

// COMPONENT DID MOUNT
	componentDidMount() {

// FETCHING DATA FOR COMPONENT

	}

// RENDER METHOD
	render() {

		const { classes } = this.props;
	  	const {_xs, _sm, _md, _lg, _xl} = this.props

		return (
			<div className={classes.staticBackground}>
				<div className={classes.qouteContainer}>
					<p className={classes.qoute}>
						{this.props.qoute}
					</p>
					<p className={classes.reference}>
						- {this.props.reference}
					</p>				
				</div>
			</div>
		);
	}
}
	
StaticBackgroundWithQouteAndReference.defaultProps = {
	//:,
	qoute:'“Every mountain top is within reach if you just keep climbing.”',
	reference:'Richard James Molloy',
	backgroundImage: require('../images/health.jpeg'),	
};

export default withRouter(withResponsiveness(withStyles(styles)(StaticBackgroundWithQouteAndReference)));
