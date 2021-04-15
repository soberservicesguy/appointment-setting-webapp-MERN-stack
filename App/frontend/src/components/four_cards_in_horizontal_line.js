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

// IMPORT COMPONENTS
import {
	CardHavingImageOverBoldheadingOverHeading,
} from "./"

import { withRouter } from "react-router-dom";


import { 
	ArrowUpward,
	ArrowDownward,

	QueryBuilder,
	Event,
	PhoneInTalk,
	LocalHospital,
} from '@material-ui/icons';

const styles = theme => ({
	root: {
		height: 48,
		color: props => (props.cool) ? 'red' : 'black',
			[theme.breakpoints.up('sm')]:{
		paddingLeft:100
		},
	},
	outerContainer:{
		marginTop: props => props.upperDisplacement,
		paddingTop: 25,
		paddingBottom: 25,
		paddingLeft:20,
		paddingRight:20,
		marginBottom:20,
		height:330,
	},
	cardIcon:{
		marginTop:10,
	},
	cardHeading:{
		fontSize:20,
		marginTop:10,
		color: 'white',
	},
	cardText:{
		fontSize:15,
		color:'white',
	},
});

var phoneNumber = {
	fontSize:25,
	color:'cyan',		
}

var	listElements = {
	fontSize:15,
	borderColor:'white',
	borderTopWidth:0,
	borderLeftWidth:0,
	borderRightWidth:0,
	borderBottomWidth: 1,
	borderStyle:'solid',
	paddingBottom:5,
}

var listElementsWithoutUnderline = {
	fontSize:15,
	borderColor:'white',	
}

var icon = {
	color:'white',
	width:35,
	height:35,
	marginBottom:10,
}

class FourCardsInHorizontalLine extends Component {
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
			<Grid container item direction="row" alignItems="center" justify="center" spacing={0} style={{
				width:'90%', 
				margin:'auto', 
				marginBottom: 50, 
				marginTop: 50,

				position: (this.props.containerVerticalOffset !== 0) ? 'relative' : 'inherit',
				top: this.props.containerVerticalOffset,
				height: 200,
			}} >
				{this.props.cardsDetailsList.map((cardsDetails)=>(
					<Grid item xs={12} sm={6} md={3} lg={3}>
						<div className={classes.outerContainer} style={{backgroundColor: cardsDetails.cardColor}}>
							{cardsDetails.icon}
							<p className={classes.cardHeading}>
								{cardsDetails.cardHeading}
							</p>
							<p className={classes.cardText}>
								{cardsDetails.cardText.about}<br/>
								{
									(cardsDetails.cardText.textBlock === '')
									?
									<> 	
										{cardsDetails.cardText.listElements.map((element)=>(
											element		
										))}
									</>
									:
									<>
										<p className={classes.cardText}>{cardsDetails.cardText.textBlock}</p>
									</>
								}
							</p>
						</div>
					</Grid>
				))}
			</Grid>

		);
	}
}
	
FourCardsInHorizontalLine.defaultProps = {
	//:,
	containerVerticalOffset: -150,
	cardsDetailsList:[

		{
			cardHeading:'Doctors Timetable',
			cardText: {textBlock:'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, decima et quinta decima.', listElements:[] ,},
			icon: <QueryBuilder style={icon}/>,
			cardColor: '#4bb1e9',
		},
		{
			cardHeading:'Working Time',
			cardText: {textBlock:'', listElements:[
				<p style={listElements}>Monday – Friday 8.00 – 17.00</p>, 
				<p style={listElements}>Saturday – 9.30 – 17.30</p>, 
				<p style={listElements}>Sunday – 9.30 – 15.00</p>
				],
			},
			icon: 	<Event style={icon}/>,
			cardColor: '#299bdb',
		},
		{
			cardHeading:'Appointments',
			cardText: {textBlock:'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, decima et quinta decima.', listElements:[<span className={styles.largeFontElement}>1-800-700-6200</span>] ,},
			icon: <PhoneInTalk style={icon}/>,
			cardColor: '#1e86ca',
		},
		{
			cardHeading:'Emergency Cases',
			cardText: {textBlock:'', listElements:[
				<p style={phoneNumber}>1-800-700-6200</p>, 
				<p style={listElementsWithoutUnderline}>Aenean sollicitudin, lorem quis bibendum auctor…</p>, 
			] ,},
			icon: <LocalHospital style={icon}/>,
			cardColor: '#1170ae',
		},
	]
};

export default withRouter(withResponsiveness(withStyles(styles)(FourCardsInHorizontalLine)));