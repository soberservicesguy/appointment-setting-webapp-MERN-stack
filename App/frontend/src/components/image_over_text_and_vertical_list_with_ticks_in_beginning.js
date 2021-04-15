
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

import { Check } from "@material-ui/icons";

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
	image:{
		height:300,
		objectFit: 'cover', // 'fill' | 'contain' | 'none'
		marginBottom:20,
	},
	checkList:{
		listStyleType: 'none', // 'circle' | 'square' | 'disc' | 'decimal' 
		// listStyleImage: url('../images/samosa.jpeg');
	},
});


class ImageOverTextAndVerticalListWithTicksInBeginning extends Component {
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
						About us
					</p>
					<p className={classes.borderBelowHeadingOnly}>
					</p>
				</Grid>
						
				<Grid container item direction="row" spacing={2} alignItems="center" justify="center">
					<Grid item xs={12} sm={12} md={4}>
						<img src={this.props.image} alt="" className={classes.image}/>
						<p className={classes.imageText}>
							{this.props.imageText}
						</p>
					</Grid>
			
					<Grid item xs={12} sm={12} md={8}>
						<ul className={classes.checkList} >
							{this.props.checkList.map((item)=>(
								<li style={{fontSize:14, marginBottom:15, color:'grey'}}><Check style={{color:'cyan', marginRight:10}}/>{item}</li>
							))}
						</ul> 
					</Grid>
				</Grid>
			</Grid>
		);
	}
}
	
ImageOverTextAndVerticalListWithTicksInBeginning.defaultProps = {
	//:,
	image: require('../images/samosa.jpeg'),
	imageText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	checkList: [
		'Optimised for speed. Unique featured slider for pages, blog and portfolio',
		'Drag & Drop Builder',
		'WooCommerce Shop',
		'980, 1200 or 1360 max resolutions',
		'Unique featured slider for pages, blog and portfolio post',
		'WooCommerce Shop',
		'980, 1200 or 1360 max resolutions',
		'Unique featured slider for pages, blog and portfolio post',
		'Drag & Drop Builder',
		'WooCommerce Shop',
	],
};

export default withRouter(withResponsiveness(withStyles(styles)(ImageOverTextAndVerticalListWithTicksInBeginning)));
