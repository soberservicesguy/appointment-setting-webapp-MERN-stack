
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorsTimetableSchema = new mongoose.Schema({

	_id: Schema.Types.ObjectId,

	heading:String,
	room_number:String,
	time_slot:String,
	total_possible_appointments:Number,
	doctors_name:String,
	level_of_session:String,
	endpoint:String,

// other model links
	relatedappointment:[{ type: Schema.Types.ObjectId, ref: 'DoctorsAppointment' },],

})

mongoose.model('DoctorsTimetable', DoctorsTimetableSchema);