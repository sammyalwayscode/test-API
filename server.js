require('dotenv').config()
//Creating an instance of express
const express = require('express')

const studentModel = require('./model/model')
const mongoose = require('mongoose')
// const PORT = 2000


// connecting to MONGODB Atlas
mongoose.connect(process.env.DATABASE_URL, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.connection.once('open', () => {
  console.log('Connected to database successfully....')
}).on('error', () => {
  console.log('Database connection failed.....')
});


//Creating an Object instance
const app = express()

//Enabling our responce in json
app.use(express.json())

// Listen to the Port
app.listen(process.env.PORT, () => {
  console.log(`Listning To Port ${process.env.PORT}`)
})