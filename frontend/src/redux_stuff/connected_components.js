
import { connect } from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "./store_configuration";

import {

	RootRouterContainer,

	DoctorsTimetableContainer,	DoctorsAppointmentContainer,
} from "../containers";


import {


	DoctorsTimetableIndividual,	DoctorsAppointmentIndividual,

} from "../components";

export const ConnectedRootRouterContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(RootRouterContainer);



export const ConnectedDoctorsTimetableIndividual = connect(
	mapStateToProps,
	mapDispatchToProps
)(DoctorsTimetableIndividual);

export const ConnectedDoctorsTimetableContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(DoctorsTimetableContainer);



export const ConnectedDoctorsAppointmentIndividual = connect(
	mapStateToProps,
	mapDispatchToProps
)(DoctorsAppointmentIndividual);



export const ConnectedDoctorsAppointmentContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(DoctorsAppointmentContainer);

