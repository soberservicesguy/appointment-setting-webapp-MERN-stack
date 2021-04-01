
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

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const styles = theme => ({
	root: {
		height: 48,
		color: props => (props.cool) ? 'red' : 'black',
		[theme.breakpoints.up('sm')]:{
			paddingLeft:100
		},
	},
	carouselContainer:{
		width: props => props.carouselWidth,
		margin:'auto'
	},
	carouselContent:{
		height: props => props.carouselHeight,
		margin:'auto'
	},
});


class MyCarousel extends Component {
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
			<div className={classes.carouselContainer}>
			  <Carousel 
			    showArrows={true} 
			    renderThumbs={this.props.showThumbsFunction}
			    // onChange={onChange} 
			    // onClickItem={onClickItem} 
			    // onClickThumb={onClickThumb}
			  >
			    {this.props.carouselImagesList.map( 
			    	(item, index) => (
						<div key={String(index)} className={classes.carouselContent} >
						  <img src={item.imageSource}
						  	// style={imageResize:'contain'} 
						  />
						</div>
				))}
			  </Carousel>
			</div>
		);
	}
}
	
MyCarousel.defaultProps = {
	//:,
	carouselWidth:'100%',
	carouselHeight:500,
	showThumbsFunction:() => null,
	carouselImagesList:[
		{imageSource: require('../images/samosa.jpeg')},
		{imageSource: require('../images/samosa.jpeg')},
		{imageSource: require('../images/samosa.jpeg')},	
	]
};

export default withRouter(withResponsiveness(withStyles(styles)(MyCarousel)));