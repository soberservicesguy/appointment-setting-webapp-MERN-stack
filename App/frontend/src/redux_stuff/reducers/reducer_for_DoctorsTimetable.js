const initialState = {

	currentDoctorsTimetable:{
			heading:'dummy',
			room_number:'dummy',
			time_slot:'dummy',
			total_possible_appointments:'dummy',
			doctors_name:'dummy',
			level_of_session:'dummy',
			endpoint:'dummy',
		},

	timetable_slot_endpoint:null,

	totalDoctorsTimetable: [
			{ fee:10, weekday:'Monday', heading:'Cardiology', room_number:'12', time_slot:'07:00 - 07:30', booked_slots:['07:00 - 07:30'], doctors_name:'Mark Moreo', level_of_session:'Low Impact', endpoint:'dummy1',},
			{ fee:30, weekday:'Monday', heading:'Cardiology', room_number:'dummy2', time_slot:'08:00 - 08:30', booked_slots:[], doctors_name:'dummy2', level_of_session:'dummy2', endpoint:'dummy2',},
			{ fee:20, weekday:'Sunday', heading:'Pulmonary', room_number:'dummy7', time_slot:'07:00 - 11:00', booked_slots:[], doctors_name:'dummy7', level_of_session:'dummy7', endpoint:'dummy7',},
			{ fee:10, weekday:'Wednesday', heading:'Xray', room_number:'dummy3', time_slot:'09:00 - 11:00', booked_slots:[], doctors_name:'dummy3', level_of_session:'dummy3', endpoint:'dummy3',},
			{ fee:30, weekday:'Thursday', heading:'Cardiology', room_number:'dummy4', time_slot:'11:00 - 12:00', booked_slots:[], doctors_name:'dummy4', level_of_session:'dummy4', endpoint:'dummy4',},
			{ fee:15, weekday:'Friday', heading:'Cardiology', room_number:'dummy5', time_slot:'13:00 - 14:00', booked_slots:[], doctors_name:'dummy5', level_of_session:'dummy5', endpoint:'dummy5',},
			{ fee:20, weekday:'Saturday', heading:'Cardiology', room_number:'dummy6', time_slot:'14:00 - 18:00', booked_slots:[], doctors_name:'dummy6', level_of_session:'dummy6', endpoint:'dummy6',},
			{ fee:40, weekday:'Monday', heading:'Pulmonary', room_number:'dummy8', time_slot:'14:00 - 15:00', booked_slots:[], doctors_name:'dummy8', level_of_session:'dummy8', endpoint:'dummy8',},
			{ fee:10, weekday:'Monday', heading:'Pulmonary', room_number:'dummy9', time_slot:'19:00 - 20:00', booked_slots:[], doctors_name:'dummy9', level_of_session:'dummy9', endpoint:'dummy9',},
			{ fee:20, weekday:'Monday', heading:'Pulmonary', room_number:'dummy10', time_slot:'13:00 - 14:00', booked_slots:[], doctors_name:'dummy10', level_of_session:'dummy10', endpoint:'dummy10',},
		],

	heading_to_show:'All Departments', // or departments, used to show only that department
}

const reducerForDoctorsTimetable = (state = initialState, action) => {

	switch (action.type) {

		case "SET_TIMETABLE_ENDPOINT":

			return {...state, timetable_slot_endpoint: action.endpoint }
			break;


		case "ADD_DoctorsTimetable":

			return {...state, totalDoctorsTimetable: [...state.totalDoctorsTimetable, action.doctorstimetable] }
			break;

		case "REMOVE_DoctorsTimetable":

			return {...state, totalDoctorsTimetable: [...state.totalDoctorsTimetable.filter( (item) => item.id !== action.doctorstimetable_id ) ] }
			break;

		case "SET_FETCHED_DoctorsTimetable":

			return {...state, totalDoctorsTimetable: action.doctorstimetable_list}
			break;

		case "SET_FETCHED_10_MORE_DoctorsTimetable":

			return {...state, totalDoctorsTimetable: [...state.DoctorsTimetable, action.doctorstimetable_list] }
			break;

		case "SET_CURRENT_DoctorsTimetable":

			return {...state, currentDoctorsTimetable: action.current_doctorstimetable}
			break;

		case "SET_HEADING_TO_SHOW":

			return {...state, heading_to_show: action.heading_to_show }
			break;

		default:

			return state

	}

};

export default reducerForDoctorsTimetable;
