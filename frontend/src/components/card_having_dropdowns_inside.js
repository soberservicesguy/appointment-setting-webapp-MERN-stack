
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

import { 
	Tune,
	Add,
} from "@material-ui/icons";


const styles = theme => ({
	root: {
		height: 48,
		color: props => (props.cool) ? 'red' : 'black',
		[theme.breakpoints.up('sm')]:{
			paddingLeft:100
		},
	},
	heading:{
		paddingBottom:20,
		marginBottom:20,
		textAlign:'left',
		fontSize:25,
		borderColor: 'grey',
		borderBottomWidth:1,
		borderTopWidth:0,
		borderLeftWidth:0,
		borderRightWidth:0,
		borderStyle: 'solid',
	},
	borderBelowHeadingOnly:{
		position:'relative',
		top: -22,
		width:200,
		display: 'inline-block',
		textAlign:'left',
		fontSize:25,
		borderBottomWidth:3,
		borderTopWidth:0,
		borderLeftWidth:0,
		borderRightWidth:0,
		borderStyle: 'solid',
		borderColor: 'blue',
	},
	bgImage:{
		backgroundImage: props => `url(${props.cardImage})`,
		backgroundColor: 'black', // Used if the image is unavailable
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		// backgroundAttachment: 'fixed',	
		backgroundSize: 'cover', // '300px 100px' | '75% 50%' | 'cover' | 'contain' | 'none'
		height:300,
		paddingLeft:20,
		paddingRight:20,
	},
	buttonInCard:{
		backgroundColor: 'blue',
		color:'white',
		height:65,
		marginBottom:2,
		border:'none',
		display:'block',
		width: '100%'
	}

});


class CardHavingDropdownsInside extends Component {
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
			<Grid container direction="column" spacing={2} style={{backgroundColor: 'white', width:'90%', margin:'auto'}} >
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<p className={classes.heading}>
						Meet Our Doctors
					</p>
					<p className={classes.borderBelowHeadingOnly}>
					</p>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<div className={classes.bgImage}>
						<p style={{fontSize:15, fontWeight:'bold', position:'relative', top:'40%'}}>
							Dr. Rodney Stratton
						</p>
						<p style={{fontSize:12, color:'blue', position:'relative', top:'35%'}}>
							<Tune/>36 years experience
						</p>
						<p style={{color:'blue', position:'relative', top:'40%'}}>
							Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat…
						</p>
					</div>

					<button className={classes.buttonInCard}>
						Gynaecological <Add/>
					</button>
					<button className={classes.buttonInCard}>
						Pediatric <Add/>
					</button>
				</Grid>
			</Grid>
		);
	}
}
	
CardHavingDropdownsInside.defaultProps = {
	//:,
	cardImage: require('../images/samosa.jpeg')
};

export default withRouter(withResponsiveness(withStyles(styles)(CardHavingDropdownsInside)));
