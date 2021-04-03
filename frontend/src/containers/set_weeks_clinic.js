
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


class SetWeeksClinic extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
		}	
	}

// COMPONENT DID MOUNT
	componentDidMount() {

// FETCHING DATA FOR COMPONENT
			// axios.get(utils.baseUrl + '/doctorsappointments/doctorsappointments_list',)
			// .then((response) => {
			// 	this.props.set_fetched_doctorsappointments(response.data)
			// })
			// .catch((error) => {
			// 	console.log(error);
			// })


	}

	create_session(){

		let all_sessions = this.props.entire_week_sessions

		console.log(all_sessions)
		axios.post(utils.baseUrl + '/timetables/create-time-slots', 
			{
				all_sessions: {s:'all_sessions'}
			}
		)
		.then((response) => {
			console.log('slots created')
		})
		.catch((error) => {
			console.log(error);
		})		

	}

// RENDER METHOD
	render() {
			

	  	const {_xs, _sm, _md, _lg, _xl} = this.props

	  	const styles = {

	  	}


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

					<div style={{flexBasis:200, textAlign:'center', fontWeight:'bold', paddingRight:50, }}>
						<p>
							Fee
						</p>
					</div>


					<div style={{flex:1, textAlign:'center', fontWeight:'bold', paddingRight:50}}>
						<p>Level of session</p>
					</div>

					<div style={{flex:1, fontWeight:'bold',  textAlign:'center', fontWeight:'bold', paddingRight:30}}>
						<button 
							onClick = { () => this.props.add_empty_session({level_of_session: '', heading: '', time_slot: '', room_number: '', doctors_name: '', heading: '', weekday: '', fee:''}) }
							style={{
								outline:"none",
								background:'none',
								borderWidth:0,
								fontWeight:'bold',
								fontSize:20,
							}}
						>
							Add another field
						</button>
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

					{this.props.entire_week_sessions.map((item, index) => {
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
										<p style={{paddingLeft:10, paddingTop:10,}}>
											{Number(item.id) + 1} 
										</p>
									</div>			

									<div style={{flexBasis:200,}}>
										<FormControl variant="outlined" style={{width:(_xs || _sm) ? '100%' : '80%', }}>
											<InputLabel id="demo-simple-select-outlined-label" style={{fontSize:20}}>
												Weekday
											</InputLabel>
											<Select
												style={{width:'100%', fontSize:20, height:50}}
												labelId="demo-simple-select-outlined-label"
												id="demo-simple-select-outlined"
												label="Select Weekday"
												onChange={(event) => {
													this.props.modify_some_attribute_of_some_session(item.id, 'weekday', event.target.value)
													console.log(this.props.entire_week_sessions)
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
												onChange={ (event) => {
													this.props.modify_some_attribute_of_some_session(item.id, 'heading', event.target.value)
													console.log(this.props.entire_week_sessions)
												}}
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
													this.props.modify_some_attribute_of_some_session(item.id, 'room_number', event.target.value)
													console.log(this.props.entire_week_sessions)
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
													this.props.modify_some_attribute_of_some_session(item.id, 'slot', event.target.value)
													console.log(this.props.entire_week_sessions)
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
												onChange={ (event) => {
													this.props.modify_some_attribute_of_some_session(item.id, 'doctors_name', event.target.value)
													console.log(this.props.entire_week_sessions)
												}}
												style={{height:50}} 
											/>
										</form>
									</div>

									<div style={{flexBasis:200,}}>
										<form>
											<input 
												placeholder="Enter Fee" 
												type="text" 
												// name="post_text"
												// multiline={true}
												onChange={ (event) => {
													this.props.modify_some_attribute_of_some_session(item.id, 'fee', event.target.value)
													console.log(this.props.entire_week_sessions)
												}}
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
													this.props.modify_some_attribute_of_some_session(item.id, 'level_of_session', event.target.value)
													console.log(this.props.entire_week_sessions)
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
											onClick = { () => this.props.add_empty_session({level_of_session: '', heading: '', slot: '', room_number: '', doctors_name: '', heading: '', weekday: '',}) }
											style={{
												outline:"none",
												background:'none',
												borderWidth:0,
												fontWeight:'bold',
												fontSize:30,
												paddingBottom:10,
											}}
										>
											+
										</button>					
									</div>


									<div style={{
										flexBasis: 20,
									}}>
										<button 
											onClick = { () => this.props.remove_session(item.id) }
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

				<div style={{margin:'auto', width:'30%',}}>
					<button 
						onClick = {() => {
							// this.create_session()

							let all_sessions = this.props.all_sessions
							axios.post(utils.baseUrl + '/timetables/create-time-slots',
								{all_sessions: 'asdas'}
							)
 							.then((response) => {
								console.log('slots created')
							})
							.catch((error) => {
								console.log(error);
							})		 
						}}
						
						style={{
							outline:"none",
							background:'none',
							borderWidth:0,
							fontWeight:'bold',
							fontSize:30,
							paddingBottom:0,
							textAlign: 'center',
							width:'100%',
							color:'white',
							backgroundColor: 'blue',
						}}
					>
						CREATE SESSIONS
					</button>
				</div>
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

export default withResponsiveness(SetWeeksClinic)