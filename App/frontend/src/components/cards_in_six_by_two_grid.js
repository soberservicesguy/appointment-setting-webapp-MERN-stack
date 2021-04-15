
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

import {
	withRouter,
	Link,
} from "react-router-dom";

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
	cardHeading:{
		textAlign: 'center',
		fontSize:22,
		marginBottom:10,
	},
	text:{
		textAlign: 'center',
		color:'grey',
		fontSize:15,		
	},
	cardImage:{
		objectFit: 'cover', // 'fill' | 'contain' | 'none'
		width:'100%',
		height:120,
		marginBottom:20,
	}
});


class CardsInSixByTwoGrid extends Component {
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
			<Grid container direction="column" spacing={2} style={{backgroundColor: 'white', width:'90%', margin:'auto', marginBottom:50,}} >
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<p className={classes.heading}>
						Departments
					</p>
					<p className={classes.borderBelowHeadingOnly}>
					</p>
				</Grid>

				<Grid item container direction="row" spacing={2} alignItems="center" justify="center">
					{this.props.cardsDetailsList.map((cardsDetail)=>(
						<Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
					  		<Link to={`/doctorstimetable`} style={{color: 'inherit', textDecoration: 'inherit',}}>
								<img src={cardsDetail.image} alt="" className={classes.cardImage}/>
								<p className={classes.cardHeading}>
									{cardsDetail.heading}
								</p>
								<p className={classes.text}>
									{cardsDetail.text}
								</p>
							</Link>
						</Grid>
					))}
				</Grid>
			</Grid>
		);
	}
}
	
CardsInSixByTwoGrid.defaultProps = {
	//:,
	cardsDetailsList:[
		{image:require('../images/neurology.jpeg'), heading:'Neurology', text:'Lorem ipsum Lorem ipsum Lorem ipsum'},
		{image:require('../images/cardiography.jpeg'), heading:'Cardiography', text:'Lorem ipsum Lorem ipsum Lorem ipsum'},
		{image:require('../images/gynaecology.jpeg'), heading:'Gynaecological', text:'Lorem ipsum Lorem ipsum Lorem ipsum'},
		{image:require('../images/Pediatric.jpeg'), heading:'Pediatric', text:'Lorem ipsum Lorem ipsum Lorem ipsum'},
		{image:require('../images/ENT.jpeg'), heading:'ENT', text:'Lorem ipsum Lorem ipsum Lorem ipsum'},
		{image:require('../images/urology.jpeg'), heading:'Urology', text:'Lorem ipsum Lorem ipsum Lorem ipsum'},
		{image:require('../images/Dental.jpeg'), heading:'Dental', text:'Lorem ipsum Lorem ipsum Lorem ipsum'},
		{image:require('../images/Diet and Nutirion.jpeg'), heading:'Diet and Nutirion', text:'Lorem ipsum Lorem ipsum Lorem ipsum'},
		{image:require('../images/Ophthalmology.jpeg'), heading:'Ophthalmology', text:'Lorem ipsum Lorem ipsum Lorem ipsum'},
		{image:require('../images/Psychiatry.jpeg'), heading:'Psychiatry', text:'Lorem ipsum Lorem ipsum Lorem ipsum'},
		{image:require('../images/Psychotherapy.jpeg'), heading:'Psychotherapy', text:'Lorem ipsum Lorem ipsum Lorem ipsum'},
		{image:require('../images/neurology.jpeg'), heading:'Neurology', text:'Lorem ipsum Lorem ipsum Lorem ipsum'},	
	]
};

export default withRouter(withResponsiveness(withStyles(styles)(CardsInSixByTwoGrid)));
