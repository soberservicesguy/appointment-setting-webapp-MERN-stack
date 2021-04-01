
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
	    color: props => (props.cool) ? 'red' : 'black',
	    [theme.breakpoints.up('sm')]:{
	    	paddingLeft:100
	    },
	},
	topHeading:{
		fontSize: 18,
		color: 'blue'
	},
	bottomHeading:{
		fontSize: 30,
	},
	description:{
		fontSize: 18,
		color: 'grey'
	},
	unorderedList: {
		listStyleType: 'circle', // 'circle' | 'square' | 'disc' | 'decimal' 
		// listStyleImage: url('../images/samosa.jpeg');
	},
	listItems:{
		color: 'grey',
		fontSize: 18,
	},
	roundButton:{
		borderColor:'blue',
		backgroundColor: 'white',
		color:'blue',
		height:45,
		padding:'10px 20px 10px 20px',
		marginTop:15,
		borderRadius:55/2,
	},
});


class HeadingOverBoldHeadingOverTextOverChecklistOverRoundbutton extends Component {
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
			<Grid container direction="column" justify="center" alignItems="center" spacing={2} style={{margin:'auto', width:'80%', marginBottom:50,}}>
				<Grid item xs={12}>
					<div>
						<p className={classes.topHeading}>
							{this.props.topHeading}
						</p>
						<p className={classes.bottomHeading}>
							{this.props.bottomHeading}
						</p>
						<p className={classes.description}>
							{this.props.description}
						</p>						
					</div>
				</Grid>
				<Grid item container direction="row" justify="center" alignItems="center" spacing={2}>					
					<Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
						<ul>
							{this.props.listOnLeft.map((item)=>(
								<li className={classes.listItems}>
									{item}
								</li>
							))}
						</ul>
					</Grid> 

					<Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
						<ul>
							{this.props.listOnRight.map((item)=>(
								<li className={classes.listItems}>
									{item}
								</li>
							))}
						</ul>
					</Grid> 

					<Grid item xs={12}>
						<button className={classes.roundButton}>
							{this.props.buttonText}
						</button>
					</Grid> 
				</Grid>
			</Grid>

		);
	}
}
	
HeadingOverBoldHeadingOverTextOverChecklistOverRoundbutton.defaultProps = {
	//:,
	topHeading: '',
	bottomHeading: 'Welcome to Health Center',
	description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
	listOnLeft: ['Cardiothoracic Surgery', 'Cardiovascular Diseases', 'Ophthalmology', ],
	listOnRight: ['Cardiothoracic Surgery', 'Cardiovascular Diseases', 'Ophthalmology', ],
	buttonText: 'Departments',
};

export default withRouter(withResponsiveness(withStyles(styles)(HeadingOverBoldHeadingOverTextOverChecklistOverRoundbutton)));
