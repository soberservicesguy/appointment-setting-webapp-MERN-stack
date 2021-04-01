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

	totalDoctorsTimetable: [
			{ heading:'dummy1', room_number:'dummy1', time_slot:'dummy1', total_possible_appointments:'dummy1', doctors_name:'dummy1', level_of_session:'dummy1', endpoint:'dummy1',},
			{ heading:'dummy2', room_number:'dummy2', time_slot:'dummy2', total_possible_appointments:'dummy2', doctors_name:'dummy2', level_of_session:'dummy2', endpoint:'dummy2',},
			{ heading:'dummy3', room_number:'dummy3', time_slot:'dummy3', total_possible_appointments:'dummy3', doctors_name:'dummy3', level_of_session:'dummy3', endpoint:'dummy3',},
			{ heading:'dummy4', room_number:'dummy4', time_slot:'dummy4', total_possible_appointments:'dummy4', doctors_name:'dummy4', level_of_session:'dummy4', endpoint:'dummy4',},
			{ heading:'dummy5', room_number:'dummy5', time_slot:'dummy5', total_possible_appointments:'dummy5', doctors_name:'dummy5', level_of_session:'dummy5', endpoint:'dummy5',},
			{ heading:'dummy6', room_number:'dummy6', time_slot:'dummy6', total_possible_appointments:'dummy6', doctors_name:'dummy6', level_of_session:'dummy6', endpoint:'dummy6',},
			{ heading:'dummy7', room_number:'dummy7', time_slot:'dummy7', total_possible_appointments:'dummy7', doctors_name:'dummy7', level_of_session:'dummy7', endpoint:'dummy7',},
			{ heading:'dummy8', room_number:'dummy8', time_slot:'dummy8', total_possible_appointments:'dummy8', doctors_name:'dummy8', level_of_session:'dummy8', endpoint:'dummy8',},
			{ heading:'dummy9', room_number:'dummy9', time_slot:'dummy9', total_possible_appointments:'dummy9', doctors_name:'dummy9', level_of_session:'dummy9', endpoint:'dummy9',},
			{ heading:'dummy10', room_number:'dummy10', time_slot:'dummy10', total_possible_appointments:'dummy10', doctors_name:'dummy10', level_of_session:'dummy10', endpoint:'dummy10',},
		]
	}

const reducerForDoctorsTimetable = (state = initialState, action) => {

	switch (action.type) {

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

		default:

			return state

	}

};

export default reducerForDoctorsTimetable;
