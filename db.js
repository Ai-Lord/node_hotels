const mongoose = require('mongoose');

// define the mongodb connection url
const mongoUrl = 'mongodb://localhost:27017/hotel';
// replace 'mydatabase' with your database name

// set up mongodb connection
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // these two syntax is necessary to mention we are using newer version
})

// get the default connection
// Mongoose maintains a default connection object representing the mongodb connection
const db = mongoose.connection;

// default event listener for database connection
db.on('connected', () => {
    console.log('Connected to MongoDB server');
})
db.on('error', (err) => {
    console.error('MongoDB connecton error', err);
})
db.on('disconnected', () => {
    console.log('MongoDB disconnected');
})

// export the database connection
module.exports=db;