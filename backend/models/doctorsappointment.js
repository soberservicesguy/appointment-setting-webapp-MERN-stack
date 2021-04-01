
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorsAppointmentSchema = new mongoose.Schema({

	_id: Schema.Types.ObjectId,

	patients_name:String,
	apointment_slot:Number,

// other model links
	doctorstimetable:{ type: Schema.Types.ObjectId, ref: 'DoctorsTimetable' },

})

mongoose.model('DoctorsAppointment', DoctorsAppointmentSchema);