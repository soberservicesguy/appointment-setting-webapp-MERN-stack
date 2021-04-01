require('./db_settings')
var fs = require('fs');
const mongoose = require('mongoose');

require('../models/doctorstimetable');

const DoctorsTimetable = mongoose.model('DoctorsTimetable');

const {resolve} = require('path')
require('dotenv').config({path: resolve(__dirname,"../.env")})

DoctorsTimetable.deleteMany({}, ()=>null)
