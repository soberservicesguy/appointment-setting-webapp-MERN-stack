
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
import { DoctorsTimetableCard } from "../components"

const styles = theme => ({
  root: {
    height: 48,
    color: props => (props.cool) ? 'red' : 'black',
    [theme.breakpoints.up('sm')]:{
    	paddingLeft:100
    },
  },
});

class DoctorsTimetableContainer extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
		}	
	}

// COMPONENT DID MOUNT
	componentDidMount() {

// FETCHING DATA FOR COMPONENT
			axios.get(utils.baseUrl + '/doctorstimetables/doctorstimetables_list',)
			.then((response) => {
				this.props.set_fetched_doctorstimetables(response.data)
			})
			.catch((error) => {
				console.log(error);
			})


  }
// RENDER METHOD
	render() {
			
		const total_doctorstimetables = this.props.total_doctorstimetables

		const { classes } = this.props;
	  	const {_xs, _sm, _md, _lg, _xl} = this.props

		return (

			<Grid container direction="row" spacing={4} style={{backgroundColor: '#eee'}} >

				{total_doctorstimetables.map((doctorstimetable_object, index)=>(

					<Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
						<DoctorsTimetableCard
							heading = { doctorstimetable_object.heading }
							room_number = { doctorstimetable_object.room_number }
							time_slot = { doctorstimetable_object.time_slot }
							total_possible_appointments = { doctorstimetable_object.total_possible_appointments }
							doctors_name = { doctorstimetable_object.doctors_name }
							level_of_session = { doctorstimetable_object.level_of_session }
							endpoint = { doctorstimetable_object.endpoint }						
						/>
					</Grid>

				))}

			</Grid>

		);
	}
}

DoctorsTimetableContainer.defaultProps = {
	// : ,
};

export default withResponsiveness(withStyles(styles)(DoctorsTimetableContainer));

