
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
		useParams,
		useRouteMatch
} from "react-router-dom";

import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	InputBase,
	Badge,
	MenuItem,
	Menu,
} from '@material-ui/core';

import { fade } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

// IMPORT CONNECTED CONTAINERS
import {

	ConnectedDoctorsTimetableContainer,
	ConnectedDoctorsAppointmentContainer,
	ConnectedSetWeeksClinic,
} from "../redux_stuff/connected_components";

// IMPORT CONNECTED COMPONENTS
import {
	ConnectedDoctorsTimetableIndividual,
	ConnectedDoctorsAppointmentIndividual,
} from "../redux_stuff/connected_components"

// IMPORT CONTAINERS
import{
	HomeContainer,
	MyResponsiveNavigation,
} from "./";


// IMPORT material-ui stuff
import { withStyles } from '@material-ui/styles';
import { Grid, Button } from "@material-ui/core";
// IMPORT responsiveness hook
import withResponsiveness from "../responsiveness_hook";



class RootRouterContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			anchorEl:null,
			mobileMoreAnchorEl:null,
		}

	}

	render() {


		return (

			<Router>
				<div>
					<MyResponsiveNavigation/>

					<Switch>

						<Route exact path="/doctorstimetable">
							<ConnectedDoctorsTimetableContainer/>
						</Route>

						<Route exact path="/set-weeks-clinic">
							<ConnectedSetWeeksClinic/>
						</Route>

						<Route exact path="/home" >
							<HomeContainer/>
						</Route>

						<Route exact path="/" render={() => (
							<HomeContainer/>
						)}/>


						<Route exact path="/*" render={() => (
							<HomeContainer/>
						)}/>

					</Switch>
				</div>
			</Router>
		);
	}
}


export default withResponsiveness(RootRouterContainer)
