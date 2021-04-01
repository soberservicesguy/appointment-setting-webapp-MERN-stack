const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorsTimetableSchema = new mongoose.Schema({

	// APPOINTMENT BASED ON SINGLE ROOM, BEING RENTED BY DIFFERENT DOCTORS
	
	_id: Schema.Types.ObjectId,

	fee:Number,
	weekday:String,
	heading:String,
	room_number:String,
	time_slot:String,
	// total_possible_appointments:Number,
	doctors_name:String,
	level_of_session:String,
	endpoint:String,

// other model links
	// booked_slots:Number, // extract from relatedappointment
	relatedappointment:[{ type: Schema.Types.ObjectId, ref: 'DoctorsAppointment' },],

})

mongoose.model('DoctorsTimetable', DoctorsTimetableSchema);