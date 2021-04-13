const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb:27017/db_for_boiler_plate', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Database connected');
});