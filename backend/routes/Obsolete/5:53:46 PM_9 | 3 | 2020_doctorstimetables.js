require('../models/doctorstimetable');
require('../models/doctorsappointment');


const mongoose = require('mongoose');
const router = require('express').Router();
const DoctorsTimetable = mongoose.model('DoctorsTimetable');
const DoctorsAppointment = mongoose.model('DoctorsAppointment');

// create a new doctorstimetable

router.post('/create_doctorstimetable_with_children', function(req, res, next){

	const newDoctorsTimetable = new DoctorsTimetable({

		_id: new mongoose.Types.ObjectId(),
		heading: req.body.parent.heading,
		room_number: req.body.parent.room_number,
		time_slot: req.body.parent.time_slot,
		total_possible_appointments: req.body.parent.total_possible_appointments,
		doctors_name: req.body.parent.doctors_name,
		level_of_session: req.body.parent.level_of_session,
		endpoint: req.body.parent.endpoint,

	});

	newDoctorsTimetable.save(function (err, newDoctorsTimetable) {
		if (err) return console.log(err);

	//saving children

		const newDoctors_Appointment = new Doctors_Appointment({

			_id: new mongoose.Types.ObjectId(),
			patients_name: req.body.children.patients_name,
			apointment_slot: req.body.children.apointment_slot,

		//assigning parent
			doctorstimetable:newDoctorsTimetable._id,

		});

		newDoctorsTimetable.doctors_appointments.push(newDoctors_Appointment._id)

	newDoctorsTimetable.save();

	});

});

// find doctorstimetable
	
router.get('/find_doctorstimetable', function(req, res, next){

	DoctorsTimetable.findOne({ endpoint: req.body.endpoint })
		.then((doctorstimetable) => {
			if (!doctorstimetable) {

				res.status(401).json({ success: false, msg: "could not find doctorstimetable" });

			} else {

				res.status(200).json(doctorstimetable);

			}

		})
		.catch((err) => {

			next(err);

		});
});

// find doctors_appointment
	
router.get('/find_doctors_appointment', function(req, res, next){

	Doctors_Appointment.findOne({ title: req.body.title })
		.then((doctors_appointment) => {
			if (!doctors_appointment) {

				res.status(401).json({ success: false, msg: "could not find doctors_appointment" });

			} else {

				res.status(200).json(doctors_appointment);

			}

		})
		.catch((err) => {

			next(err);

		});
});

// get doctorstimetables_list

router.get('/doctorstimetables_list', function(req, res, next){

DoctorsTimetable.
	find().
	limit(10).
	exec((doctorstimetables)=>{
		doctorstimetables.map((doctorstimetable, index)=>{
			var newDoctorsTimetables_list = []
			var newDoctorsTimetable = {}

			newDoctorsTimetable.heading = doctorstimetable[heading]
			newDoctorsTimetable.room_number = doctorstimetable[room_number]
			newDoctorsTimetable.time_slot = doctorstimetable[time_slot]
			newDoctorsTimetable.total_possible_appointments = doctorstimetable[total_possible_appointments]
			newDoctorsTimetable.doctors_name = doctorstimetable[doctors_name]
			newDoctorsTimetable.level_of_session = doctorstimetable[level_of_session]

			newDoctorsTimetables_list.push({...newDoctorsTimetable})
			newDoctorsTimetable = {}

			return newDoctorsTimetables_list
		});
	})

	.then((newDoctorsTimetables_list) => {

		if (!newDoctorsTimetables_list) {

			res.status(401).json({ success: false, msg: "could not find DoctorsTimetables_list" });

		} else {

			res.status(200).json(newDoctorsTimetables_list);

		}

	})
	.catch((err) => {

		next(err);

	});
});

// get doctors_appointments_list

router.get('/doctors_appointments_list', function(req, res, next){

Doctors_Appointment.
	find().
	limit(10).
	exec((doctors_appointments)=>{
		doctors_appointments.map((doctors_appointment, index)=>{
			var newDoctors_Appointments_list = []
			var newDoctors_Appointment = {}

			newDoctors_Appointment.patients_name = doctors_appointment[patients_name]
			newDoctors_Appointment.apointment_slot = doctors_appointment[apointment_slot]

			newDoctors_Appointments_list.push({...newDoctors_Appointment})
			newDoctors_Appointment = {}

			return newDoctors_Appointments_list
		});
	})

	.then((newDoctors_Appointments_list) => {

		if (!newDoctors_Appointments_list) {

			res.status(401).json({ success: false, msg: "could not find Doctors_Appointments_list" });

		} else {

			res.status(200).json(newDoctors_Appointments_list);

		}

	})
	.catch((err) => {

		next(err);

	});
});

// get doctorstimetable with children

router.get('/doctorstimetable_with_children', function(req, res, next){
	DoctorsTimetable.
		findOne({endpoint:req.body.endpoint}).

		populate('relatedappointment').

		exec(function (err, doctorstimetable_with_children) {
			if (err) return console.log(err);

			res.status(200).json(doctorstimetable_with_children);
		});
})


// get doctorstimetable with summarized children

router.get('/doctorstimetable_with_summarized_children', function(req, res, next){
	DoctorsTimetable.
		findOne({endpoint:req.body.endpoint}).

		populate('relatedappointment').

		exec(function (err, blogpost_with_children) {

			if (err) return console.log(err);


			var current_relatedappointment = doctorstimetable_with_children.relatedappointment
			new_relatedappointment = []

			current_doctorsappointments.map((doctorsappointment, index)=>{
				var newDoctorsAppointment = {}

	

				new_doctorsappointments.push({...newDoctorsAppointment})
				newDoctorsAppointment = {}
			});

			doctorstimetable_with_children.doctorsappointments = new_doctorsappointments

		res.status(200).json(doctorstimetable_with_children);

	});
})

// get next 10 doctorstimetables_list

router.get('/doctorstimetables_next_10_list', function(req, res, next){

DoctorsTimetable.
	find().
	limit(10).
	skip(10).
	exec( 
		(doctorstimetables) => {
			doctorstimetables.map((doctorstimetable, index) => {
				var newDoctorsTimetables_list = []
				var newDoctorsTimetable = {}
	
				newDoctorsTimetable.heading = doctorstimetable[heading]
				newDoctorsTimetable.room_number = doctorstimetable[room_number]
				newDoctorsTimetable.time_slot = doctorstimetable[time_slot]
				newDoctorsTimetable.total_possible_appointments = doctorstimetable[total_possible_appointments]
				newDoctorsTimetable.doctors_name = doctorstimetable[doctors_name]
				newDoctorsTimetable.level_of_session = doctorstimetable[level_of_session]

				newDoctorsTimetables_list.push({...newDoctorsTimetable})
				newDoctorsTimetable = {}
				})

			return newDoctorsTimetables_list
		})

	.then((newDoctorsTimetables_list) => {

		if (!newDoctorsTimetables_list) {

			res.status(401).json({ success: false, msg: "could not find DoctorsTimetables_list" });

		} else {

			res.status(200).json(newDoctorsTimetables_list);

		}

	})
	.catch((err) => {

		next(err);

	});
});

// get next 10 doctors_appointments_list

router.get('/doctors_appointments_next_10_list', function(req, res, next){

Doctors_Appointment.
	find().
	limit(10).
	skip(10).
	exec( 
		(doctors_appointments) => {
			doctors_appointments.map((doctors_appointment, index) => {
				var newDoctors_Appointments_list = []
				var newDoctors_Appointment = {}
	
				newDoctors_Appointment.patients_name = doctors_appointment[patients_name]
				newDoctors_Appointment.apointment_slot = doctors_appointment[apointment_slot]

				newDoctors_Appointments_list.push({...newDoctors_Appointment})
				newDoctors_Appointment = {}
				})

			return newDoctors_Appointments_list
		})

	.then((newDoctors_Appointments_list) => {

		if (!newDoctors_Appointments_list) {

			res.status(401).json({ success: false, msg: "could not find Doctors_Appointments_list" });

		} else {

			res.status(200).json(newDoctors_Appointments_list);

		}

	})
	.catch((err) => {

		next(err);

	});
});

module.exports = router;