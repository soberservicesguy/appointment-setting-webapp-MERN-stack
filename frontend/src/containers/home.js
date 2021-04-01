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
	MyCarousel,
	FourCardsInHorizontalLine,
	HeadingOverBoldHeadingOverTextOverChecklistOverRoundbutton,
	AnimatedSimpleImage,
	StaticBackgroundWithQouteAndReference,
	CardHavingDropdownsInside,
	CardsInSixByTwoGrid,
	FooterSection,
	ImageOverTextAndVerticalListWithTicksInBeginning,
	FourCardsInHorizontalLine2ndVersion,
} from "../components/"

const styles = theme => ({
  root: {
    height: 48,
    color: props => (props.cool) ? 'red' : 'black',
    [theme.breakpoints.up('sm')]:{
    	paddingLeft:100
    },
  },
});

class HomeContainer extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
		}	
	}

// COMPONENT DID MOUNT
	componentDidMount() {

// FETCHING DATA FOR COMPONENT
			axios.get(utils.baseUrl + '/doctorsappointments/doctorsappointments_list',)
			.then((response) => {
				this.props.set_fetched_doctorsappointments(response.data)
			})
			.catch((error) => {
				console.log(error);
			})


  }
// RENDER METHOD
	render() {

		const { classes } = this.props;
	  	const {_xs, _sm, _md, _lg, _xl} = this.props

		return (

			<Grid container direction="column" spacing={4}>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<MyCarousel/>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<FourCardsInHorizontalLine/>
				</Grid>

				<Grid item container direction="row" alignItems="center" justify="center" spacing={2}>
					<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
						<HeadingOverBoldHeadingOverTextOverChecklistOverRoundbutton/>
					</Grid>

					<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
						<AnimatedSimpleImage/>
					</Grid>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<StaticBackgroundWithQouteAndReference/>
				</Grid>

				<Grid item container direction="row" alignItems="center" justify="center" spacing={2} style={{marginBottom:50,}}>
					<Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
						<ImageOverTextAndVerticalListWithTicksInBeginning/>
					</Grid>

					<Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
						<CardHavingDropdownsInside/>
					</Grid>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<CardsInSixByTwoGrid/>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<FourCardsInHorizontalLine2ndVersion/>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<FooterSection/>
				</Grid>

			</Grid>
		);
	}
}

HomeContainer.defaultProps = {
	// : ,
};

export default withResponsiveness(withStyles(styles)(HomeContainer));