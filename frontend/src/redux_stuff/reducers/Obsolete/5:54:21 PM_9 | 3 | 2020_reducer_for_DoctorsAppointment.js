const initialState = {

	currentDoctorsAppointment:{
			patients_name:'dummy',
			apointment_slot:'dummy',
		},

	totalDoctorsAppointment: [
			{ patients_name:'dummy1', apointment_slot:'dummy1',},
			{ patients_name:'dummy2', apointment_slot:'dummy2',},
			{ patients_name:'dummy3', apointment_slot:'dummy3',},
			{ patients_name:'dummy4', apointment_slot:'dummy4',},
			{ patients_name:'dummy5', apointment_slot:'dummy5',},
			{ patients_name:'dummy6', apointment_slot:'dummy6',},
			{ patients_name:'dummy7', apointment_slot:'dummy7',},
			{ patients_name:'dummy8', apointment_slot:'dummy8',},
			{ patients_name:'dummy9', apointment_slot:'dummy9',},
			{ patients_name:'dummy10', apointment_slot:'dummy10',},
		]
	}

const reducerForDoctorsAppointment = (state = initialState, action) => {

	switch (action.type) {

		case "ADD_DoctorsAppointment":

			return {...state, totalDoctorsAppointment: [...state.totalDoctorsAppointment, action.doctorsappointment] }
			break;

		case "REMOVE_DoctorsAppointment":

			return {...state, totalDoctorsAppointment: [...state.totalDoctorsAppointment.filter( (item) => item.id !== action.doctorsappointment_id ) ] }
			break;

		case "SET_FETCHED_DoctorsAppointment":

			return {...state, totalDoctorsAppointment: action.doctorsappointment_list}
			break;

		case "SET_FETCHED_10_MORE_DoctorsAppointment":

			return {...state, totalDoctorsAppointment: [...state.DoctorsAppointment, action.doctorsappointment_list] }
			break;

		case "SET_CURRENT_DoctorsAppointment":

			return {...state, currentDoctorsAppointment: action.current_doctorsappointment}
			break;

		default:

			return state

	}

};

export default reducerForDoctorsAppointment;
