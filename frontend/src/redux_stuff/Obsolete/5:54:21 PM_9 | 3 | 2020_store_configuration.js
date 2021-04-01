
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
} from "./reducers"

export const rootReducer = combineReducers({
	doctorstimetables: reducerForDoctorsTimetable,
	doctorsappointments: reducerForDoctorsAppointment,
});

export const mapStateToProps = state => {
  return {

	total_doctorstimetables: state.doctorstimetables.totalDoctorsTimetable,
	current_doctorstimetable: state.doctorstimetables.currentDoctorsTimetable,

	total_doctorsappointments: state.doctorsappointments.totalDoctorsAppointment,
	current_doctorsappointment: state.doctorsappointments.currentDoctorsAppointment,

	};
};

export const mapDispatchToProps = dispatch => {
	return {

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

	};

};

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);