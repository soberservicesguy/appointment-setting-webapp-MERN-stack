
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorsAppointmentSchema = new mongoose.Schema({

	_id: Schema.Types.ObjectId,

	apointment_slot:String,
	patients_name:String,
	patients_contact_number:String,

// other model links
	doctorstimetable:{ type: Schema.Types.ObjectId, ref: 'DoctorsTimetable' },

})

mongoose.model('DoctorsAppointment', DoctorsAppointmentSchema);