const mongoose = require('mongoose')

function connectToDatabase(){
    mongoose.set('strictQuery', false);
    mongoose.connect('mongodb://localhost:27017/SpinTheWheels')

    .then(()=>console.log('database is connected'))
    .catch(()=>console.log('database connection is failed'))
}

module.exports = connectToDatabase