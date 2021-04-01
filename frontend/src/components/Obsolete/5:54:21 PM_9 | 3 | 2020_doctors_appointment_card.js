
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import utils from "../utilities"
// IMPORT material-ui stuff
import { withStyles } from '@material-ui/styles';
import { 
	Grid, 
	Button,
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	Collapse,
	Avatar,
	Typography,
	IconButton,
	Divider,
} from "@material-ui/core";

// IMPORT material-ui icons
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red } from '@material-ui/core/colors';

// IMPORT responsiveness hook
import withResponsiveness from "../responsiveness_hook";
import clsx from 'clsx';

import { 
	withRouter,
	Link,
} from "react-router-dom";

const styles = theme => ({
	root: {
		maxWidth: 380,
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
});

class DoctorsAppointmentCard extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
			expanded:false,
		}	

	}

// COMPONENT DID MOUNT
	componentDidMount() {

	}

	render() {

		const { classes } = this.props;
		const {_xs, _sm, _md, _lg, _xl} = this.props

		return (
			<Card className={classes.root}
				elevation={0}
				square={true}
			>
						  
				<CardMedia
					className={classes.media}
					image={this.props.patients_name}
					title={this.props.apointment_slot} // for hovering
				/>

				<CardContent>
					<Typography  style={{fontWeight:'bold', color:'black', marginBottom:5}} component="p">
						{this.props.apointment_slot}
					</Typography>

					<Typography style={{fontSize:12, color:'black', marginBottom:5}} variant="p" color="textSecondary" component="p">
						{this.props.apointment_slot}
					</Typography>

					<Typography variant="p" style={{marginTop:20}} color="textSecondary" component="p">
						{this.props.apointment_slot}
					</Typography>
				</CardContent>

				<Divider />

				<CardActions disableSpacing>


					<Link to={this.props.apointment_slot} >
						<Button variant="text" style={{fontWeight:'bold'}}>Read More</Button>
					</Link>

					<IconButton style={{marginLeft:'auto', width:20,}} aria-label="add to favorites">
						<FavoriteIcon />
					</IconButton>

					<Typography style={{width:30,}} >
						{this.props.apointment_slot}
					</Typography>

					<IconButton style={{width:20,}} aria-label="share">
						<ShareIcon />
					</IconButton>

					<Typography>
						{this.props.apointment_slot}
					</Typography>
				</CardActions>
			</Card>
		);
	}
}
	
DoctorsAppointmentCard.defaultProps = {
	patients_name:'',
	apointment_slot:'',
	apointment_slot:'',
	apointment_slot:'',
	apointment_slot:'',
	apointment_slot:'',
	apointment_slot:'',
	apointment_slot:'',

};

export default withResponsiveness(withStyles(styles)(DoctorsAppointmentCard));

