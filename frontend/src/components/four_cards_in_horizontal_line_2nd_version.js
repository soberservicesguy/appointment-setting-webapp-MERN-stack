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
	Message,
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
		borderWidth:1,
		borderColor:'#eee',
		borderStyle:'solid',
		paddingLeft:0,
		paddingRight:0,
		paddingTop:0,
		paddingBottom:10,

	},
	cardImage:{
		width: '100%',
		height: 200,
		objectFit: 'cover', // 'fill' | 'contain' | 'none'
	},
	cardHeading:{
		fontSize:20,
		marginTop:10,
		color:'blue',
	},
	cardText:{
		fontSize:15,
	},
	dateAndCommentsContainer:{
		display:'flex'
	},
	comments:{
		borderColor:'#eee',
		borderWidth: 1,
		borderStyle:'solid',
		fontSize:12,
		color:'blue',
		textAlign:'right',
		height:30,
		paddingTop:5,
		paddingBottom:5,
	},
	date:{
		borderColor:'#eee',
		borderWidth: 1,
		borderStyle:'solid',
		fontSize:12,
		textAlign:'left',
		height:30,
		paddingTop:5,
		paddingBottom:5,
		fontWeight:'bold',
	},
});

class FourCardsInHorizontalLine2ndVersion extends Component {
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
			<Grid container item direction="row" alignItems="center" justify="center" spacing={2} style={{
				width:'90%', 
				margin:'auto', 
				marginBottom: 50, 
				marginTop: 50,
			}} >
				{this.props.cardsDetailsList.map((cardsDetails)=>(
					<Grid item xs={12} sm={6} md={3} lg={3}>
						<div className={classes.outerContainer}>
							<img src={cardsDetails.image} alt="" className={classes.cardImage}/>
							<div style={{paddingLeft:20, paddingRight:20}}>
								<p className={classes.cardHeading}>
									{cardsDetails.cardHeading}
								</p>
								<div className={classes.dateAndCommentsContainer}>
									<div style={{flex:2}}>
										<p className={classes.date}>
											{cardsDetails.date}
										</p>
									</div>
									<div style={{flex:1}}>
									</div>
									<div style={{flex:1}}>
										<p className={classes.comments}>
											<Message/> {cardsDetails.number_of_comments}
										</p>
									</div>
								</div>
								<p className={classes.cardText}>
									{cardsDetails.cardText}
								</p>
								<p style={{color:'grey', fontSize:14, marginBottom:5}}>
									Posted in: <span style={{color:'blue'}}>{cardsDetails.posted_in}</span>
								</p>
								<p style={{color:'grey', fontSize:14, marginBottom:5}}>
									Tags: <span style={{color:'blue'}}>{cardsDetails.tags}</span>
								</p>
							</div>
						</div>
					</Grid>
				))}
			</Grid>

		);
	}
}
	
FourCardsInHorizontalLine2ndVersion.defaultProps = {
	//:,
	cardsDetailsList:[
		{
			image:require('../images/samosa.jpeg'),
			cardHeading:'Planning my first trip',
			cardText: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.',
			posted_in:'Aristotle',
			tags: 'Qoutes, Health, Nutrition',
			date:'January 10 2020',
			number_of_comments:0,
		},
		{
			image:require('../images/samosa.jpeg'),
			cardHeading:'Planning my first trip',
			cardText: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.',
			posted_in:'Aristotle',
			tags: 'Qoutes, Health, Nutrition',
			date:'January 10 2020',
			number_of_comments:0,
		},
		{
			image:require('../images/samosa.jpeg'),
			cardHeading:'Planning my first trip',
			cardText: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.',
			posted_in:'Aristotle',
			tags: 'Qoutes, Health, Nutrition',
			date:'January 10 2020',
			number_of_comments:0,
		},
		{
			image:require('../images/samosa.jpeg'),
			cardHeading:'Planning my first trip',
			cardText: 'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.',
			posted_in:'Aristotle',
			tags: 'Qoutes, Health, Nutrition',
			date:'January 10 2020',
			number_of_comments:0,
		},

	]
};

export default withRouter(withResponsiveness(withStyles(styles)(FourCardsInHorizontalLine2ndVersion)));