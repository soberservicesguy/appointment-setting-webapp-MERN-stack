
const mongoose = require('mongoose');
require('../models/doctorstimetable');
require('../models/doctorsappointment');
const DoctorsTimetable = mongoose.model('DoctorsTimetable');
const DoctorsAppointment = mongoose.model('DoctorsAppointment');

/**
 * -------------- DATABASE ----------------
 */

/**
 * Connect to MongoDB Server using the connection string in the '.env' file.  To implement this, place the following
 * string into the '.env' file
 * 
 * DB_STRING=mongodb://localhost:27017/database_name
 * DB_STRING_PROD=<your production database string>
 */ 

const devConnection = process.env.DB_STRING;
const prodConnection = process.env.DB_STRING_PROD;

// Connect to thae correct environment database
if (process.env.NODE_ENV === 'production') {
    mongoose.connect(prodConnection, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection.on('connected', () => {
        console.log('Database connected');
    });

} else {

    mongoose.connect(devConnection, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection.on('connected', () => {
        console.log('Database connected');
    });
}


DoctorsTimetable.
	find(
	.then((doctorstimetables) => {

		if (!doctorstimetables) {

		    console.log('no doctorstimetables exist')

		} else {

		    console.log('doctorstimetables are', doctorstimetables.length)

		}
	})
	.catch((err) => {
		console.log(err)
});




DoctorsAppointment.
	find(
	.then((doctorsappointments) => {

		if (!doctorsappointments) {

		    console.log('no doctorsappointments exist')

		} else {

		    console.log('doctorsappointments are', doctorsappointments.length)

		}
	})
	.catch((err) => {
		console.log(err)
});



// showing doctorstimetable and populating children

DoctorsTimetable.
	find(). 

	populate(DoctorsAppointment).

	exec(function (err, doctorstimetables) {

	    if (err){
	      console.log('ERROR', err);
	    } 

	    console.log('doctorstimetable is %s', doctorstimetables[1])		// console.log('The doctorsappointments %s', doctorstimetable.doctorsappointments);
});