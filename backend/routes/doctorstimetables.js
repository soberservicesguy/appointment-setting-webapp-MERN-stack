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

		const newDoctorsAppointment = new DoctorsAppointment({

			_id: new mongoose.Types.ObjectId(),
			patients_name: req.body.children.patients_name,
			apointment_slot: req.body.children.apointment_slot,

		//assigning parent
			doctorstimetable:newDoctorsTimetable._id,

		});

		newDoctorsTimetable.doctorsappointments.push(newDoctorsAppointment._id)

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

// find doctorsappointment
	
router.get('/find_doctorsappointment', function(req, res, next){

	DoctorsAppointment.findOne({ title: req.body.title })
		.then((doctorsappointment) => {
			if (!doctorsappointment) {

				res.status(401).json({ success: false, msg: "could not find doctorsappointment" });

			} else {

				res.status(200).json(doctorsappointment);

			}

		})
		.catch((err) => {

			next(err);

		});
});

// get doctorstimetables_list

router.get('/get-timetables-list', function(req, res, next){
	DoctorsTimetable.
	find().
	limit(10).
	exec((doctorstimetables) => {

		if (doctorstimetables){

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

			});
			
			console.log('SENT')
			res.status(200).json(newDoctorsTimetables_list);

		} else {

			res.status(401).json({ success: false, msg: "could not find DoctorsTimetables_list" });
		}

	})

});

// get doctorsappointments_list

router.get('/doctorsappointments_list', function(req, res, next){

DoctorsAppointment.
	find().
	limit(10).
	exec((doctorsappointments)=>{
		doctorsappointments.map((doctorsappointment, index)=>{
			var newDoctorsAppointments_list = []
			var newDoctorsAppointment = {}

			newDoctorsAppointment.patients_name = doctorsappointment[patients_name]
			newDoctorsAppointment.apointment_slot = doctorsappointment[apointment_slot]

			newDoctorsAppointments_list.push({...newDoctorsAppointment})
			newDoctorsAppointment = {}

			return newDoctorsAppointments_list
		});
	})

	.then((newDoctorsAppointments_list) => {

		if (!newDoctorsAppointments_list) {

			res.status(401).json({ success: false, msg: "could not find DoctorsAppointments_list" });

		} else {

			res.status(200).json(newDoctorsAppointments_list);

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

	
				newDoctorsAppointment.patients_name = doctorsappointment[patients_name]
				newDoctorsAppointment.apointment_slot = doctorsappointment[apointment_slot]

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

// get next 10 doctorsappointments_list

router.get('/doctorsappointments_next_10_list', function(req, res, next){

DoctorsAppointment.
	find().
	limit(10).
	skip(10).
	exec( 
		(doctorsappointments) => {
			doctorsappointments.map((doctorsappointment, index) => {
				var newDoctorsAppointments_list = []
				var newDoctorsAppointment = {}
	
				newDoctorsAppointment.patients_name = doctorsappointment[patients_name]
				newDoctorsAppointment.apointment_slot = doctorsappointment[apointment_slot]

				newDoctorsAppointments_list.push({...newDoctorsAppointment})
				newDoctorsAppointment = {}
				})

			return newDoctorsAppointments_list
		})

	.then((newDoctorsAppointments_list) => {

		if (!newDoctorsAppointments_list) {

			res.status(401).json({ success: false, msg: "could not find DoctorsAppointments_list" });

		} else {

			res.status(200).json(newDoctorsAppointments_list);

		}

	})
	.catch((err) => {

		next(err);

	});
});

module.exports = router;