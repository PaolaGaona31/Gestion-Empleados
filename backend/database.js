const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1:27017/empleados';

console.log('Attempting to connect to MongoDB...');

mongoose.connect(URI)
.then(() => {
    console.log('DB is connected');
})
.catch(err => {
    console.error('Connection error:', err);
});

mongoose.connection.on('connected', () => {
console.log('Mongoose connected to ' + URI);
});

mongoose.connection.on('error', (err) => {
console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
console.log('Mongoose disconnected');
});

module.exports = mongoose;

