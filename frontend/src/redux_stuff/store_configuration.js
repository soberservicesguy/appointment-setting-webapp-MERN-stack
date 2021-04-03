
import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import { connect } from "react-redux";
import { combineReducers } from 'redux'; 


// IMPORT rootSaga
import {rootSaga} from "../saga_stuff/saga_combined";

import {
	reducerJWT,
	reducerForDoctorsTimetable,
	reducerForDoctorsAppointment,
	reducerForSetWeekSessions,
} from "./reducers"

export const rootReducer = combineReducers({
	doctorstimetables: reducerForDoctorsTimetable,
	doctorsappointments: reducerForDoctorsAppointment,
	sessions_of_the_week: reducerForSetWeekSessions,
});


export const mapStateToProps = state => {
  return {

	total_doctorstimetables: state.doctorstimetables.totalDoctorsTimetable,
	current_doctorstimetable: state.doctorstimetables.currentDoctorsTimetable,

	total_doctorsappointments: state.doctorsappointments.totalDoctorsAppointment,
	current_doctorsappointment: state.doctorsappointments.currentDoctorsAppointment,

	heading_to_show: state.doctorstimetables.heading_to_show,

	entire_week_sessions: state.sessions_of_the_week.entireWeekSessions,
	};
};

export const mapDispatchToProps = dispatch => {
	return {

		add_empty_session: (session_object) => dispatch( { type: "ADD_EMPTY_SESSION_SLOT", session_object: session_object } ),
		remove_session: (session_id) => dispatch( { type: "REMOVE_SESSION_SLOT", session_id: session_id } ),
		modify_some_attribute_of_some_session: (session_id, attribute_to_edit, attribute_value) => dispatch( { type:"EDIT_SOME_ATTRIBUTE_IN_SOME_SESSION", session_id: session_id, attribute_to_edit: attribute_to_edit, attribute_value: attribute_value } ),

		add_doctorstimetable: (doctorstimetable_object) => dispatch( { type: "ADD_DoctorsTimetable", doctorstimetable_object: doctorstimetable_object } ),
		remove_doctorstimetable: (doctorstimetable_id) => dispatch( { type: "REMOVE_DoctorsTimetable", doctorstimetable_id: doctorstimetable_id } ),
		set_fetched_doctorstimetables: (doctorstimetable_list) => dispatch( { type: "SET_FETCHED_DoctorsTimetable", doctorstimetable_list: doctorstimetable_list } ),
		set_fetched_10_more_doctorstimetable: (doctorstimetable_list) => dispatch( { type: "SET_FETCHED_10_MORE_DoctorsTimetable", doctorstimetable_list: doctorstimetable_list } ),
		set_current_doctorstimetable: (current_doctorstimetable) => dispatch( { type: "SET_CURRENT_DoctorsTimetable", current_doctorstimetable:current_doctorstimetable } ),

		add_doctorsappointment: (doctorsappointment_object) => dispatch( { type: "ADD_DoctorsAppointment", doctorsappointment_object: doctorsappointment_object } ),
		remove_doctorsappointment: (doctorsappointment_id) => dispatch( { type: "REMOVE_DoctorsAppointment", doctorsappointment_id: doctorsappointment_id } ),
		set_fetched_doctorsappointments: (doctorsappointment_list) => dispatch( { type: "SET_FETCHED_DoctorsAppointment", doctorsappointment_list: doctorsappointment_list } ),
		set_fetched_10_more_doctorsappointment: (doctorsappointment_list) => dispatch( { type: "SET_FETCHED_10_MORE_DoctorsAppointment", doctorsappointment_list: doctorsappointment_list } ),
		set_current_doctorsappointment: (current_doctorsappointment) => dispatch( { type: "SET_CURRENT_DoctorsAppointment", current_doctorsappointment:current_doctorsappointment } ),

		set_heading_to_show: (heading) => dispatch( {type: "SET_HEADING_TO_SHOW", heading_to_show: heading} )
	};

};

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);