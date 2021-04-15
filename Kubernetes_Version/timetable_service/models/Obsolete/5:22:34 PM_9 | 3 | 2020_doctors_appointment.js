
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Doctors_AppointmentSchema = new mongoose.Schema({

	_id: Schema.Types.ObjectId,

	patients_name:String,
	apointment_slot:Number,

// other model links
	doctorstimetable:{ type: Schema.Types.ObjectId, ref: 'DoctorsTimetable' },

})

mongoose.model('Doctors_Appointment', Doctors_AppointmentSchema);