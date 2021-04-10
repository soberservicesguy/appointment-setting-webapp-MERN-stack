require('./db_settings')
var fs = require('fs');
const mongoose = require('mongoose');

require('../models/doctorstimetable');
require('../models/doctorsappointment');

const DoctorsTimetable = mongoose.model('DoctorsTimetable');
const DoctorsAppointment = mongoose.model('DoctorsAppointment');

const {resolve} = require('path')
require('dotenv').config({path: resolve(__dirname,"../.env")})

DoctorsTimetable.deleteMany({}, ()=>null)
DoctorsAppointment.deleteMany({}, ()=>null)
