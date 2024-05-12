const mongoose = require('mongoose');

const connectDB = async() => {
  try{
    await mongoose.connect('mongodb+srv://debarghya:hello@mycluster.jrc3qak.mongodb.net/');
    console.log('Connected to Database')}
  catch(error){
    console.log(error)}
}
module.exports = connectDB;