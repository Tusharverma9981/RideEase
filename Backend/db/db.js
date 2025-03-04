const mongoose = require('mongoose');

function connect() {
  return mongoose.connect(process.env.DB_CONNECT, {

  }).then(() => {
    console.log('Connected to database');
  }).catch(err => console.log(err));
  
  
}

module.exports = connect ;