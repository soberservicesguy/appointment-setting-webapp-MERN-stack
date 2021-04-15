import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import utils from "../utilities"
// IMPORT material-ui stuff
import { withStyles } from '@material-ui/styles';
import { 
	Grid, 
	// Button 
} from "@material-ui/core";
// IMPORT responsiveness hook
import withResponsiveness from "../responsiveness_hook";

import { 
	withRouter,
	Link,
} from "react-router-dom";


class MyResponsiveNavigation extends Component {
	constructor(props) {
		super(props);
// STATE	
		this.state = {
			backend_requests_made:1,
		}	
	}


// RENDER METHOD
	render() {
			
	  	const {_xs, _sm, _md, _lg, _xl} = this.props

	  	const styles = {

	  	}

	  	const navigation_options = [
	  		{option_name:'Home', endpoint:'home'},
	  		{option_name:'Book Apointment', endpoint:'doctorstimetable'},
	  		{option_name:'Set Doctors Availability', endpoint:'set-weeks-clinic'},
	  		// {option_name:'Friends', endpoint:'friends'},
	  		// {option_name:'Timeline', endpoint:'timeline'},
	  		// {option_name:'Books', endpoint:'books'},
	  		// {option_name:'Sports', endpoint:'sports'},
	  		// {option_name:'Logout', endpoint:'logout'},
	  		// {option_name:'Signup', endpoint:'signup'},
	  		// {option_name:'Notifications', endpoint:'notifications'},
	  		// {option_name:'Settings', endpoint:'settings'},

	  	]

	  	const { pathname } = this.props.location;


		return (

			<div style={{
				paddingTop:10,
				paddingBottom:10,
				// opacity:(pathname === '/login' || pathname === '/signup') ? 0 : 1 // NOT NEEDED SINCE ITS ASSIGNED TO EACH ROUTE SEPARATELY
			}}>			
				<Grid container direction="row" alignItems="center">
					
					<Grid item xs={0} sm={0} md={6} lg={6} xl={6}>
			  		</Grid>


					{navigation_options.map((item, index)=>(
		

						<Grid item xs={12} sm={12} md={1} lg={2} xl={2}>

								{(() => {
															
									return(
								  		<Link 
								  			to={`/${item.endpoint}`} 
								  			style={{
								  				color: 'inherit', 
								  				textDecoration: 'inherit',
								  			}}
										>
											<p style={{
												textAlign:'center',
												marginBottom: 0,
												paddingBottom: 0,
												fontSize:18,
												fontWeight:'bold',
												// color:'grey',
											// color of active link
												color:( `/${item.endpoint}` === pathname) ? 'black' : 'grey',
											// border below active link
												// borderBottomWidth:( item.endpoint === this.state.current_route) ? 3 : 0,
												// borderBottomColor:'black',
												// borderBottomStyle:'solid',
												// marginLeft:20,
												// marginRight:20,
								  				marginBottom:15,
											}}>
												{item.option_name}
											</p>
										</Link>
									)

								})()}
					
						</Grid>

					))}

				</Grid>
			</div>


		);
	}
}

MyResponsiveNavigation.defaultProps = {
	// : ,
};

export default withRouter(withResponsiveness(MyResponsiveNavigation));