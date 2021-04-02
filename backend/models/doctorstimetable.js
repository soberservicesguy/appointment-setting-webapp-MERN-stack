const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var endpoint_number = 393893

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

DoctorsTimetableSchema.pre('save', function(next) {

	endpoint_number += 1

	this.endpoint = String( endpoint_number )
	
    next();

});

DoctorsTimetableSchema.post('save', function() {

	// console.log('SAVED CONDITION')
    // console.log(this)

});



mongoose.model('DoctorsTimetable', DoctorsTimetableSchema);