
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

// IMPORT CARD COMPONENT
import { DoctorsAppointmentCard } from "../components"

const styles = theme => ({
  root: {
    height: 48,
    color: props => (props.cool) ? 'red' : 'black',
    [theme.breakpoints.up('sm')]:{
    	paddingLeft:100
    },
  },
});

class DoctorsAppointmentContainer extends Component {
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
			
		const total_doctorsappointments = this.props.total_doctorsappointments

		const { classes } = this.props;
	  	const {_xs, _sm, _md, _lg, _xl} = this.props

		return (

			<Grid container direction="row" spacing={4} style={{backgroundColor: '#eee'}} >

				{total_doctorsappointments.map((doctorsappointment_object, index)=>(

					<Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
						<DoctorsAppointmentCard
							patients_name = { doctorsappointment_object.patients_name }
							apointment_slot = { doctorsappointment_object.apointment_slot }						
						/>
					</Grid>

				))}

			</Grid>

		);
	}
}

DoctorsAppointmentContainer.defaultProps = {
	// : ,
};

export default withResponsiveness(withStyles(styles)(DoctorsAppointmentContainer));

