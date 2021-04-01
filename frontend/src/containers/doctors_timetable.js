
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import utils from "../utilities"
// IMPORT material-ui stuff
import { withStyles } from '@material-ui/styles';
import { 
	// Button
	Grid,
	InputLabel,
	MenuItem,
	Select,
	FormControl, 
} from "@material-ui/core";
// IMPORT responsiveness hook
import withResponsiveness from "../responsiveness_hook";

// IMPORT CARD COMPONENT
import { DoctorsTimetableCard } from "../components"

// IMPORT handy_functions
import {
	generateSlotsFromTimeRange,
	filterObjectsUsingKey,
	calculateDownwardShiftForSlot,
	getTotalSessionsFromTimeRange,
	// sortObjectsThroughWeekdaysAndTimeRange,
	setTimetableIntoProperFormat,
	getAllUsedValuesOfSingleKeyInArray,
} from "../handy_functions/";

// const styles = theme => ({
// 	root: {
// 		height: 48,
// 		color: props => (props.cool) ? 'red' : 'black',
// 		[theme.breakpoints.up('sm')]:{
// 			paddingLeft:100
// 		},
// 	},
// 	// timeSlotsList: {
// 	// 	listStyleType: 'none', // 'circle' | 'square' | 'disc' | 'decimal' 
// 	// 	// listStyleImage: url('../images/samosa.jpeg');
// 	// },
// 	// timeSlot:{
// 	// 	textAlign:'center',
// 	// 	color: 'grey',
// 	// 	height: props => props.graph_slot_height,
// 	// 	marginBottom: props => props.gap_height,
// 	// 	fontSize: props => props.timeSlotFontSize,
// 	// 	paddingTop: props => (props.graph_slot_height ) / 2 -props.timeSlotFontSize/2,
// 	// 	paddingBottom: props => (props.graph_slot_height ) / 2 +props.timeSlotFontSize/2,
// 	// 	backgroundColor: 'white',
// 	// 	// width: props => props.graph_slot_width,
// 	// },
// 	// outerContainer:{
// 	// 	display:'flex',
// 	// 	justifyContent: 'flex-start' , //'space-between' 'space-around' 
// 	// },
// 	// timeSlotsChild:{
// 	// 	flex:1
// 	// },
// 	// appointmentSlotsChild:{
// 	// 	flexBasis: props => props.graph_slot_width,
// 	// },
// 	// heading:{
// 	// 	fontSize: 15,
// 	// 	fontWeight: 'bold',
// 	// 	paddingTop:0,
// 	// 	paddingBottom:0,
// 	// 	marginTop:0,
// 	// 	marginBottom:0,
// 	// },
// 	// room_number:{
// 	// 	fontWeight:'bold',
// 	// 	fontSize: 15,	
// 	// 	paddingTop:0,
// 	// 	paddingBottom:0,
// 	// 	marginTop:0,
// 	// 	marginBottom:0,
// 	// },
// 	// time_slot:{
// 	// 	fontSize: 17,
// 	// 	paddingTop:0,
// 	// 	paddingBottom:0,
// 	// 	marginTop:0,
// 	// 	marginBottom:0,
// 	// },
// 	// doctors_name:{
// 	// 	fontSize: 16,
// 	// 	paddingTop:0,
// 	// 	paddingBottom:0,
// 	// 	marginTop:0,
// 	// 	marginBottom:0,
// 	// },
// 	// level_of_session:{
// 	// 	fontSize: 12,
// 	// 	paddingTop:0,
// 	// 	paddingBottom:0,
// 	// 	marginTop:0,
// 	// 	marginBottom:0,
// 	// },
// 	// tableHeader:{
// 	// 	display:'flex',
// 	// 	flexDirection:'row',
// 	// },
// 	// headingsToShow:{
// 	// 	marginLeft:50,
// 	// 	paddingBottom:20,
// 	// 	paddingTop:20,
// 	// },
// 	// menuButtons:{
// 	// 	border:'none',
// 	// 	borderBottomWidth: 2,
// 	// 	borderColor:'blue',
// 	// 	borderStyle:'solid',
// 	// 	borderTopWidth:0,
// 	// 	borderLeftWidth:0,
// 	// 	borderRightWidth:0,
// 	// 	// width:100,
// 	// 	paddingLeft:20,
// 	// 	paddingRight:20,
// 	// 	backgroundColor: 'inherit',
// 	// 	marginRight:10,
// 	// }
// });

class DoctorsTimetableContainer extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
			time_slot:'',
			show_booking_modal: false,
			clinic_selected:'',
		}	
	}

// COMPONENT DID MOUNT
	componentDidMount() {

// FETCHING DATA FOR COMPONENT
		axios.get(utils.baseUrl + '/doctorstimetables/get-timetables-list',)
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

		// const { classes } = this.props;
	  	const {_xs, _sm, _md, _lg, _xl} = this.props
	  	const styles = {
	  		timeSlotsList: {
	  			listStyleType: 'none', // 'circle' | 'square' | 'disc' | 'decimal' 
	  			// listStyleImage: url('../images/samosa.jpeg');
	  		},
	  		timeSlot:{
	  			textAlign:'center',
	  			color: 'grey',
	  			height: this.props.graph_slot_height,
	  			marginBottom: this.props.gap_height,
	  			fontSize: this.props.timeSlotFontSize,
	  			paddingTop: (this.props.graph_slot_height ) / 2 - this.props.timeSlotFontSize/2,
	  			paddingBottom: (this.props.graph_slot_height ) / 2 + this.props.timeSlotFontSize/2,
	  			backgroundColor: 'white',
	  		},
	  		outerContainer:{
	  			display:'flex',
	  			justifyContent: 'flex-start' , //'space-between' 'space-around' 
	  		},
	  		timeSlotsChild:{
	  			flex:1
	  		},
	  		appointmentSlotsChild:{
	  			flexBasis: this.props.graph_slot_width,
	  		},
	  		heading:{
	  			fontSize: 15,
	  			fontWeight: 'bold',
	  			paddingTop:0,
	  			paddingBottom:0,
	  			marginTop:0,
	  			marginBottom:0,
	  		},
	  		room_number:{
	  			fontWeight:'bold',
	  			fontSize: 15,	
	  			paddingTop:0,
	  			paddingBottom:0,
	  			marginTop:0,
	  			marginBottom:0,
	  		},
	  		time_slot:{
	  			fontSize: 17,
	  			paddingTop:0,
	  			paddingBottom:0,
	  			marginTop:0,
	  			marginBottom:0,
	  		},
	  		doctors_name:{
	  			fontSize: 16,
	  			paddingTop:0,
	  			paddingBottom:0,
	  			marginTop:0,
	  			marginBottom:0,
	  		},
	  		level_of_session:{
	  			fontSize: 12,
	  			paddingTop:0,
	  			paddingBottom:0,
	  			marginTop:0,
	  			marginBottom:'110%',
	  		},
	  		fee:{
	  			fontSize: 18,
	  			fontWeight:'bold',
	  			paddingTop:0,
	  			paddingBottom:0,
	  			marginTop:0,
	  			marginBottom:0,
	  		},
	  		tableHeader:{
	  			display:'flex',
	  			flexDirection:'row',
	  		},
	  		headingsToShow:{
	  			marginLeft:50,
	  			paddingBottom:20,
	  			paddingTop:20,
	  		},
	  		menuButtons:{
	  			border:'none',
	  			borderBottomWidth: 2,
	  			borderColor:'blue',
	  			borderStyle:'solid',
	  			borderTopWidth:0,
	  			borderLeftWidth:0,
	  			borderRightWidth:0,
	  			// width:100,
	  			paddingLeft:20,
	  			paddingRight:20,
	  			backgroundColor: 'inherit',
	  			marginRight:10,
	  		},

	  		timeTableColumn:{
				width: this.props.graph_slot_width,
				textAlign: 'center',
				color: 'white',
				marginLeft: this.props.graph_bars_gap,
				// display:'flex',
				// flexDirection: 'column',
	  		},

	  		buttonWithoutOutline:{
				background:'none',
				outline:'none',
				backgroundColor: 'grey',
				opacity:0.7,
				border:'none',
				height: '40vh',
				width:'100%'
			}
	  	}

	  	const all_departments_for_timetable = getAllUsedValuesOfSingleKeyInArray(this.props.total_doctorstimetables, 'heading')
		const buttons_showing_certain_department_timetable = all_departments_for_timetable.map((heading) => {
  			return (
  				<button style={styles.menuButtons} onClick={ () => this.props.set_heading_to_show(heading) }>
	  				{heading}
	  			</button>
  			)		
	  	})
	  	
		function show_timetable_for_all_departments(object, weekday){

			return setTimetableIntoProperFormat( 
				filterObjectsUsingKey(object.props.total_doctorstimetables, 'weekday', weekday), 
				object.props.weekDays
			)

		}

		function show_timetable_for_certain_department(object, weekday){
			return setTimetableIntoProperFormat(
				filterObjectsUsingKey(
					filterObjectsUsingKey(object.props.total_doctorstimetables, 'heading',object.props.heading_to_show), 
					'weekday', 
					weekday), 
				object.props.weekDays
			)
		}


		function getTimetableBlockStyle(object, single_day_clinics){
			return {
				background:'none',
				outline:'none',
				// backgroundColor: 'none',
				border:'none',
				color:'white',

				backgroundColor: object.props.colors_for_departments[single_day_clinics.heading],
				marginBottom: object.props.gap_height,
				height: (object.props.graph_slot_height + object.props.gap_height) * getTotalSessionsFromTimeRange( single_day_clinics.time_slot ) - object.props.gap_height, // reducing to one gap height for marginbottom
				paddingTop:( (object.props.graph_slot_height + object.props.gap_height) * getTotalSessionsFromTimeRange( single_day_clinics.time_slot ) - object.props.gap_height )/2 - (15+15+17+16+12), // height from above - the text size with paddings 
				position:'relative',
				// top: 50*index,
				top: (object.props.graph_slot_height + object.props.gap_height) * 
					( 
						calculateDownwardShiftForSlot(single_day_clinics.time_slot, object.props.operating_time) 
						- single_day_clinics.shift
					), // downwardshift sends them downward otherwise they all are in same position, single_day_clinics.shift is to be subsctracted because other than first slot, every other slot was taking the height of all previous ones and adding in its displacement,so reducing that
			}
		}

		function getTimetableBlock(object, single_day_clinics){
			return (
				<React.Fragment>
					<p style={styles.heading}>
						{single_day_clinics.heading}
					</p>
					<p style={styles.room_number}>
						{single_day_clinics.room_number}
					</p>
					<p style={styles.time_slot}>
						{single_day_clinics.time_slot}
					</p>
					<p style={styles.doctors_name}>
						{single_day_clinics.doctors_name}
					</p>
					<p style={styles.fee}>
						${single_day_clinics.fee}
					</p>
					<p style={styles.level_of_session}>
						{single_day_clinics.level_of_session}
					</p>

				</React.Fragment>
			)
		}


		function show_options_to_select_slot_for_appointment(object, single_day_clinics){

			// if multiple patients can be booked per slot, then simply make generateSlotsFromTimeRange to return as many instances of same slot as number of possible bookings per slot

			let {time_slot, booked_slots} = single_day_clinics

			let total_slots = generateSlotsFromTimeRange(time_slot)

			// console.log({time_slot:time_slot})
			// console.log({total_slots:total_slots})

			let slots_available = total_slots.filter(
				function(item){
					return !booked_slots.includes(item)
				}
			)

			// console.log({slots_available:slots_available})

			return (
				<div>
					<FormControl variant="outlined" style={styles.formControl}>
						<InputLabel id="demo-simple-select-outlined-label" style={{fontSize:20}}>
							Select Time Slot
						</InputLabel>
						<Select
							style={{width:280, fontSize:20}}
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							value={object.state.time_slot}
							label="Select Time Slot"
							onChange={(event) => {
								// console logging selected file from menu
								console.log( event.target.value ) // gives first file
								// setState method with event.target.files[0] as argument
								object.setState(prev => ({...prev, time_slot: event.target.value}))
							}}
						>
							{/*<MenuItem value="">
								<em>None</em>
							</MenuItem>*/}

							{slots_available.map((slot) => {
								
								return(
									<MenuItem value={slot}>
										{slot}
									</MenuItem>
								)
							
							})}

						</Select>
					</FormControl>
				</div>
			)
		}


		const set_appointment_modal = (this.state.show_booking_modal) ? (
			<div style={{
				position:'absolute',
				width:'100%'
			}}>
				<button  onClick={ () => this.setState(prev => ({ ...prev, show_booking_modal: (prev.show_booking_modal===false) ? true : false })) } style={styles.buttonWithoutOutline}>
				</button>
				
				{show_options_to_select_slot_for_appointment(this, this.state.clinic_selected)}

				<button  onClick={ () => this.setState(prev => ({ ...prev, show_booking_modal: (prev.show_booking_modal===false) ? true : false })) } style={styles.buttonWithoutOutline}>
				</button>
			</div>

		) : (
			null
		)


		return (
			<Grid item style={{backgroundColor: '#eee'}}>				

{/* rendering departments slots to show timetable only for those */}
				<div style={styles.headingsToShow}>
					<button style={styles.menuButtons} onClick={ () => this.props.set_heading_to_show(`All ${this.props.heading_type}`) }>
						{`All ${this.props.heading_type}`}		
					</button>		
					{buttons_showing_certain_department_timetable}
				</div>

{/* rendering weekdays */}
				<div style={styles.tableHeader}>
					<div style={{flex:1}}>
					</div>

					{this.props.weekDays.map((weekday)=>(
						<div style={{
							flexBasis:this.props.graph_slot_width,
							marginRight:this.props.graph_bars_gap
						}}>
							<p style={{textAlign:'center', marginBottom:5, paddingBottom:0,}}>
								{weekday}
							</p>
						</div>
					))}
				</div>

				<div style={styles.outerContainer}>

{/* generating session slots from operating time */}
					<div style={styles.timeSlotsChild}>
						<ul style={styles.timeSlotsList}>
							{
								generateSlotsFromTimeRange( this.props.operating_time ).map((timeSlot)=>(
									<li style={styles.timeSlot}>{timeSlot}</li>
							))}
						</ul> 
					</div>

					{this.props.weekDays.map((weekday)=>(
						<div style={styles.timeTableColumn}>
{/* showing either all timetables or certain departments timetable */}
							{ 
							// first filter (inner one) is over timetable through weekday, outer filter is over result but through heading ie departments
								(( this.props.heading_to_show === `All ${this.props.heading_type}` ) ?
									show_timetable_for_all_departments(this, weekday) :
									show_timetable_for_certain_department(this, weekday)
								)
								.map((single_day_clinics, index) => (
									<button  
										onClick={ () => this.setState(prev => ({ ...prev, clinic_selected:single_day_clinics, show_booking_modal: (prev.show_booking_modal===false) ? true : false })) } 
										style={getTimetableBlockStyle(this, single_day_clinics)}
									>
										{getTimetableBlock(this, single_day_clinics)}
									</button>
									/*<div style={getTimetableBlockStyle(this, single_day_clinics)}>
										{getTimetableBlock(this, single_day_clinics)}
									</div>*/
								))
							}
						</div>
					))}

					{set_appointment_modal}

				</div>
			</Grid>
		);
	}
}

DoctorsTimetableContainer.defaultProps = {
	heading_type:'Departments',
	operating_time:'07:00 - 20:00',
	gap_height:5,
	graph_slot_width:150,
	graph_slot_height:120,
	graph_bars_gap:5,
	timeSlotFontSize: 15,
	weekDays:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
	colors_for_departments:{
		Cardiology:'blue', 
		Traumatology:'red',
		Pulmonary:'cyan',
		Dental:'green',
		Xray:'grey',
		Neurology:'orange',
		Pediatric:'brown',
	},
};

export default withResponsiveness(DoctorsTimetableContainer)