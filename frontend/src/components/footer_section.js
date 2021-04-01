
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

import { IconButton } from '@material-ui/core';
import { 
	Facebook, 
	Twitter,
	Instagram,
	LinkedIn,
	YouTube,
	Phone,
	Email,
	Home,
} from '@material-ui/icons';

const styles = theme => ({
	root: {
		height: 48,
		color: props => (props.cool) ? 'red' : 'black',
		[theme.breakpoints.up('sm')]:{
			paddingLeft:100
		},
	},
	footerImage:{
		width: 50,
		height: 50,
	},
	text:{
		color:'white',
		fontSize: 18,
	},
	iconStyle:{
		width:20,
		height:20,
		color:'white',
	},
	iconButton:{
		paddingLeft:0,
		paddingRight:0,
		marginLeft:0,
		marginRight:10,		
	},
	unorderedList: {
		listStyleType: 'disc', // 'circle' | 'square' | 'disc' | 'decimal' 
	// listStyleImage: url('../images/samosa.jpeg');
		color: 'white',
		paddingLeft:15,
	},
	headings:{
		color:'white',
		fontWeight: 'bold',
		fontSize: 30,
	},
	listElements:{
		paddingBottom:35,
	},
	buttonWrapperForListElements:{
		border: 'none',
		color:'white',
		backgroundColor: 'inherit',
		paddingLeft:0,
	},
	iconStyle:{
		color:'white',
		width:20,
		height:20,
		marginRight:2,
		paddingLeft:0,
		marginLeft:0,
	},
	floatingCallToAction:{
		position:'relative',
		top:-100,
		width:'90%',
		backgroundColor: 'white',
		borderRadius: 20,
		margin:'auto',
		paddingTop:30,
		paddingBottom:30,
		boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)',
	},
	roundButton:{
		border:'none',
		backgroundColor: 'blue',
		color:'white',
		height:50,
		padding:'15px 20px 15px 20px',
		marginTop:30,
		borderRadius:50/2,
	},
	inlineCircle:{
		paddingVertical: 15,
		marginLeft:10,
		height: 12,
		width: 12,
		backgroundColor: 'white',
		borderRadius: '50%',
		display: 'inline-block',
	},
	headingInCallToAction:{
		fontSize: 40,
		fontWeight: 'bold',
		paddingLeft:20,
	},
	textInCallToAction:{
		color: 'grey',
		paddingLeft:20,
	}
});

class FooterSection extends Component {
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
			<div style={{backgroundColor: 'blue', paddingTop:0, marginTop:100,}} >
				<Grid container direction="row" alignItems="top" justify="center" spacing={2} className={classes.floatingCallToAction}>
					<Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
						<p className={classes.headingInCallToAction}>
							Ready to get started ?
						</p>
						<p className={classes.textInCallToAction}>
							Get in touch or create an account
						</p>
					</Grid>

					<Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
						<button className={classes.roundButton} >
							Request Demo
							<div className={classes.inlineCircle} ></div>
						</button>
						<button className={classes.roundButton} style={{marginLeft:10, backgroundColor: '#000000'}} >
							Buy Now
							<div className={classes.inlineCircle} ></div>
						</button>
					</Grid>
				</Grid>
				<Grid container direction="row" alignItems="top" justify="center" spacing={2} style={{width:'85%', margin:'auto'}}>
					<Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
						<img src={require('../images/samosa.jpeg')} alt="" className={classes.footerImage}/>
						<p className={classes.text}>
							<br/><br/>
							Subscribe to our newsletter and get 10% off your first purchase.
							<br/><br/><br/>
							Follow Us :
							<IconButton className={classes.iconButton} onClick={() => { alert('clicked') }}><Facebook className={classes.iconStyle}/></IconButton>
							<IconButton className={classes.iconButton} onClick={() => { alert('clicked') }}><Twitter className={classes.iconStyle}/></IconButton>
							<IconButton className={classes.iconButton} onClick={() => { alert('clicked') }}><Instagram className={classes.iconStyle}/></IconButton>
							<IconButton className={classes.iconButton} onClick={() => { alert('clicked') }}><LinkedIn className={classes.iconStyle}/></IconButton>
							<IconButton className={classes.iconButton} onClick={() => { alert('clicked') }}><YouTube className={classes.iconStyle}/></IconButton>
						</p>
					</Grid>

					<Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
						<p className={classes.headings}>
							Information
						</p>						
						<ul className={classes.unorderedList} >
							<li className={classes.listElements}>
								<button className={classes.buttonWrapperForListElements}>
									FAQ
								</button>
							</li>
							<li className={classes.listElements}>
								<button className={classes.buttonWrapperForListElements}>
									Portfolio
								</button>
							</li>
							<li className={classes.listElements}>
								<button className={classes.buttonWrapperForListElements}>
									Services
								</button>
							</li>
							<li className={classes.listElements}>
								<button className={classes.buttonWrapperForListElements}>
									Team
								</button>
							</li>
						</ul> 
					</Grid>

					<Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
						<p className={classes.headings}>
							About Us
						</p>						
						<ul className={classes.unorderedList} >
							<li className={classes.listElements}>
								<button className={classes.buttonWrapperForListElements}>
									Home
								</button>
							</li>
							<li className={classes.listElements}>
								<button className={classes.buttonWrapperForListElements}>
									Blog
								</button>
							</li>
							<li className={classes.listElements}>
								<button className={classes.buttonWrapperForListElements}>
									Careers
								</button>
							</li>
							<li className={classes.listElements}>					
								<button className={classes.buttonWrapperForListElements}>
									Contact Us
								</button>
							</li>
						</ul> 
					</Grid>

					<Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
						<p className={classes.headings}>
							Quick Contact
						</p>						
						<button className={classes.buttonWrapperForListElements} style={{marginBottom:50,}}>
							<Phone className={classes.iconStyle}/>+0123456789
						</button>
						<button className={classes.buttonWrapperForListElements} style={{marginBottom:50,}}>
							<Email className={classes.iconStyle}/>support@themes.com
						</button>
						<button className={classes.buttonWrapperForListElements}>
							<Home className={classes.iconStyle}/>1234 North Avenue Luke Lane
						</button>
					</Grid>
				</Grid>
				<Grid item style={{paddingBottom:10}} xs={12}>
					<hr style={{backgroundColor:'white'}}/>
					<p style={{
						color:'white',
						textAlign:'center'
					}}>
						Copyright 2020 soberservicesguy All Rights Reserved.
					</p>
				</Grid>

			</div>
		);
	}
}
	
FooterSection.defaultProps = {
	//:,
};

export default withRouter(withResponsiveness(withStyles(styles)(FooterSection)));
