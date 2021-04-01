// Fill the components and containers, OTHER THAN those in react_class_name_for_component or react_class_name_for_container ONLY
// Fill the components and containers, OTHER THAN those in react_class_name_for_component or react_class_name_for_container ONLY
const components_list = [
	'MainSlider', // 
	'HeadingOverTextOverBulletsAndImage', //
	'QouteWithStaticBG', //
	'ImageOverTextAndChecklist', // 
	'CardWithAccordions', // 
	'CardWithHeadingOverTextOverImage', // 
	'CardWithImageOverHeadingOverText', // 
	'TimetableShowcase', // 
	'SetAppointment', // 
	'FooterSection', // 


] // always use underscores, they will be removed where needed
const containers_list = [
] // fill container names without Container suffix but with underscores
 
const all_schemas = [
	{ 
		parent:{
			react_class_name_for_component:'Doctors_Timetable_Individual', // used for pushing reducers and endpoints, and state to components. ALSO always use underscores, they will be removed where needed
			react_class_name_for_container:'Doctors_Timetable', // used for pushing reducers and endpoints, and state to containers. ALSO fill container names WITHOUT CONTAINER suffix but with underscores
			react_class_name_for_card:`Doctors_Timetable_Card`,

			summarized_version_length:6,
			index:`endpoint`,

			children_classes:['DoctorsAppointment'],
			class_name:'DoctorsTimetable', // first letter should be capitalized of each token and singular
			schemafields:{
				heading:`String`, 
				room_number:`String`,
				time_slot:`String`,
				total_possible_appointments:`Number`,
				doctors_name:'String',
				level_of_session:'String',
				endpoint:'String', // there should be always endpoint in parent, and in summarized version
			},
			other_model_links:[
					{relatedappointment: `[{ type: Schema.Types.ObjectId, ref: 'DoctorsAppointment' },]`},
				]
			},
	
		children:[
			{
				react_class_name_for_component:'Doctors_Appointment_Individual', // used for pushing reducers and endpoints, and state to components
				react_class_name_for_container:'Doctors_Appointment', // used for pushing reducers and endpoints, and state to containers
				react_class_name_for_card:`Doctors_Appointment_Card`,

				summarized_version_length:4,
				index:`title`,

				class_name:'DoctorsAppointment',
				schemafields:{
					patients_name:'String',
					apointment_slot:'Number',
				}, 
				other_model_links:[{doctorstimetable: `{ type: Schema.Types.ObjectId, ref: 'DoctorsTimetable' }`},], //BlogPost is capital, it will be turned to lowercase while  in code
			},
		]
	},

]

module.exports = {
	components_list:components_list,
	containers_list:containers_list,
	all_schemas:all_schemas,
};
