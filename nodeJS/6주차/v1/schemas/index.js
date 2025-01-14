const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//MongoDB Atlas connect
const connect = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Connected to mongodb!');
    }).catch((err) => {
        console.error('Fail to Connect to mongodb', err);
    })

    mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error:', err);
    });
}
mongoose.connection.on('disconnected', (err) => {
    console.error('MongoDB connection disconnected. reconnect...', err);
    connect();
})

module.exports = connect;