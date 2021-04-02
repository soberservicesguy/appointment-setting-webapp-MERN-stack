
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import utils from "../utilities"
// IMPORT material-ui stuff
import { withStyles } from '@material-ui/styles';
import { 
	Grid, 
	// Button 
	InputLabel,
	MenuItem,
	FormControl,
	Select,
} from "@material-ui/core";
// IMPORT responsiveness hook
import withResponsiveness from "../responsiveness_hook";

// IMPORT CARD COMPONENT
import { DoctorsAppointmentCard } from "../components"

import {
	generateSlotsFromTimeRange,
} from "../handy_functions/";

const styles = theme => ({
  root: {
    height: 48,
    color: props => (props.cool) ? 'red' : 'black',
    [theme.breakpoints.up('sm')]:{
    	paddingLeft:100
    },
  },
});

class SetWeeksClinic extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
			total_rows:1,
			
			sessions_being_planned:[],

			level_of_session:'',
			heading:'',
			slot:'',
			room_number:'',
			doctors_name:'',
			heading:'',
			weekday:'',
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

	handleInputChange = (event, state_field, key) => {
		// console.log(event.target.value)
		let value = event.target.value

		let current_session = this.state.sessions_being_planned[key]
		let new_sessions_list = this.state.sessions_being_planned.splice(key, 1)
		

		current_session = {...current_session, state_field: value}
		
		

		new_sessions_list = [...new_sessions_list, current_session]


		this.setState(prev => ({...prev, sessions_being_planned: new_sessions_list}))



		// array.filter(
		// 	function(item){
		// 		return item.value === some_value
		// 	}
		// )


		// sessions_being_planned:[],

		// level_of_session:'',
		// heading:'',
		// slot:'',
		// room_number:'',
		// doctors_name:'',
		// heading:'',
		// weekday:'',
	}


// RENDER METHOD
	render() {
			
		const total_doctorsappointments = this.props.total_doctorsappointments

		const { classes } = this.props;
	  	const {_xs, _sm, _md, _lg, _xl} = this.props

	  	const styles = {

	  	}

	  	const total_rows_array = new Array(this.state.total_rows)

		return (
			<div>
				
				<div style={{
					display:'flex',
					flexDirection:'row',
					justifyContent:'space-between',
					alignItems:'center',
					width:'90%',
					margin:'auto',
					marginTop:10,
					marginBottom:10,
					borderTopWidth:3,
					borderTopColor:'#eee',
					borderTopStyle:'solid',
					paddingTop:20,
				}}>	
					<div style={{flexBasis:50,}}>
						<p style={{paddingLeft:10, fontWeight:'bold'}}>
							#
						</p>
					</div>			

					<div style={{flex:1, textAlign:'center', fontWeight:'bold'}}>
						<p>Weekday</p>
					</div>

					<div style={{flexBasis:200, textAlign:'center', fontWeight:'bold',paddingLeft:200}}>
						<p>
							Heading
						</p>
					</div>

					<div style={{flex:2, textAlign:'center', fontWeight:'bold', paddingLeft:150}}>
						<p>Room number</p>
					</div>

					<div style={{flex:2, textAlign:'center', fontWeight:'bold', paddingRight:30}}>
						<p>Time slot</p>
					</div>

					<div style={{flexBasis:200, textAlign:'center', fontWeight:'bold', paddingRight:50, }}>
						<p>
							Doctors name
						</p>
					</div>

					<div style={{flex:1, textAlign:'center', fontWeight:'bold', paddingRight:50}}>
						<p>Level of session</p>
					</div>

					<div style={{flex:1, fontWeight:'bold',  textAlign:'center', fontWeight:'bold', paddingRight:30}}>
						<p>
							Add another field
						</p>
					</div>

					<div style={{
						flexBasis: 20,
						fontWeight:'bold',
						fontWeight:'bold'
					}}>
						<p>Remove</p>
					</div>
				</div>



				<Grid container direction="column">

					{[...total_rows_array].map((item, index) => {
						return(
							<Grid key={index} item xs={12}>

								<div style={{
									display:'flex',
									flexDirection:'row',
									justifyContent:'space-between',
									alignItems:'center',
									width:'90%',
									margin:'auto',
									marginTop:10,
									marginBottom:10,
									borderTopWidth:3,
									borderTopColor:'#eee',
									borderTopStyle:'solid',
									paddingTop:20,
								}}>	
									<div style={{flexBasis:50,}}>
										<p style={{paddingLeft:10,}}>
											{index + 1} 
										</p>
									</div>			

									<div style={{flexBasis:200,}}>
										<FormControl variant="outlined" style={{width:(_xs || _sm) ? '100%' : '80%', }}>
											<InputLabel id="demo-simple-select-outlined-label" style={{fontSize:20}}>
												Color
											</InputLabel>
											<Select
												style={{width:'100%', fontSize:20, height:50}}
												labelId="demo-simple-select-outlined-label"
												id="demo-simple-select-outlined"
												label="Select Product Color"
												onChange={(event) => {
													this.handleInputChange(event, 'weekday', index)
													// this.setState(prev => ({...prev, weekday: event.target.value }))
												}}
												// value={this.state.privileges_selected}
											>
												{this.props.weekdays.map((day) => {
													return (
														<MenuItem value={day}>
															<em>{day}</em>
														</MenuItem>
													)
												})}

											</Select>
										</FormControl>
									</div>

									<div style={{flex:2,}}>
										<form>
											<input 
												placeholder="Enter Heading / Section" 
												type="text" 
												// name="post_text"
												// multiline={true}
												onChange={ (event) => this.handleInputChange(event, 'heading', index) }
												style={{height:50}} 
											/>
										</form>
									</div>


									<div style={{flex:2, }}>
										<FormControl variant="outlined" style={{width:(_xs || _sm) ? '100%' : '80%'}}>
											<InputLabel id="demo-simple-select-outlined-label" style={{fontSize:20}}>
												Color
											</InputLabel>
											<Select
												style={{width:'100%', fontSize:20, height:50}}
												labelId="demo-simple-select-outlined-label"
												id="demo-simple-select-outlined"
												label="Select Product Color"
												onChange={(event) => {
													this.handleInputChange(event, 'room_number', index)
													// this.setState(prev => ({...prev, room_number: event.target.value }))
												}}
												// value={this.state.privileges_selected}
											>
												{this.props.room_numbers.map((room) => {
													return (
														<MenuItem value={room}>
															<em>{room}</em>
														</MenuItem>
													)
												})}

											</Select>
										</FormControl>
									</div>

									<div style={{flex:1,}}>
										<FormControl variant="outlined" style={{width:(_xs || _sm) ? '100%' : '80%'}}>
											<InputLabel id="demo-simple-select-outlined-label" style={{fontSize:20,}}>
												Size
											</InputLabel>
											<Select
												style={{width:'100%', fontSize:20, height:50}}
												labelId="demo-simple-select-outlined-label"
												id="demo-simple-select-outlined"
												label="Select Product Size"
												onChange={(event) => {
													this.handleInputChange(event, 'slot', index)
													// this.setState(prev => ({...prev, slot: event.target.value }))
												}}
												// value={this.state.privileges_selected}
											>
												{this.props.slots_range.map((slot) => {
													return (
														<MenuItem value={slot}>
															<em>{slot}</em>
														</MenuItem>
													)
												})}
											</Select>
										</FormControl>
									</div>

									<div style={{flex:1,}}>
										<form>
											<input 
												placeholder="Enter Doctors Name" 
												type="text" 
												// name="post_text"
												// multiline={true}
												onChange={ (event) => this.handleInputChange(event, 'doctors_name', index) }
												style={{height:50}} 
											/>
										</form>
									</div>


									<div style={{marginLeft:20,flexBasis:100,}}>
										<FormControl variant="outlined" style={{width:(_xs || _sm) ? '100%' : '80%'}}>
											<InputLabel id="demo-simple-select-outlined-label" style={{fontSize:20,}}>
												Size
											</InputLabel>
											<Select
												style={{width:'100%', fontSize:20, height:50}}
												labelId="demo-simple-select-outlined-label"
												id="demo-simple-select-outlined"
												label="Select Product Size"
												onChange={(event) => {
													this.handleInputChange(event, 'level_of_session', index)
													// this.setState(prev => ({...prev, level_of_session: event.target.value }))
												}}
												// value={this.state.privileges_selected}
											>
												{this.props.available_level.map((level) => {
													return (
														<MenuItem value={level}>
															<em>{level}</em>
														</MenuItem>
													)
												})}

											</Select>
										</FormControl>
									</div>


									<div style={{flex:1, fontSize:20, fontWeight:'bold', paddingTop:10, textAlign:'center', paddingRight:40,}}>
										<button 
											onClick = { () => {
												this.setState(prev => ({...prev, total_rows: prev.total_rows + 1 })) 
												console.log(this.state.sessions_being_planned)
											}}
											style={{
												outline:"none",
												background:'none',
												borderWidth:0,
												fontWeight:'bold',
												fontSize:20,
											}}
										>
											+
										</button>					
									</div>


									<div style={{
										flexBasis: 20,
									}}>
										<button 
											onClick = { () => this.setState(prev => ({...prev, total_rows: prev.total_rows - 1 })) }
											style={{
												outline:"none",
												background:'none',
												borderWidth:0,
												fontWeight:'bold',
												fontSize:20,
											}}
										>
											X
										</button>					
									</div>

								</div>

							</Grid>
						)
					})}
				</Grid>
			</div>
		);
	}
}

SetWeeksClinic.defaultProps = {
	weekdays:['Monday', 'Teusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
	room_numbers: [1, 2, 3, 4, 5, 6, 7],
	slots_range: generateSlotsFromTimeRange('08:00 - 18:00'),
	available_level: ['low impact', 'medium impact', 'high impact', 'NA'],
};

export default withResponsiveness(withStyles(styles)(SetWeeksClinic));

