require('dotenv').config()
//Creating an instance of express
const express = require('express')

const studentModel = require('./model/model')
const mongoose = require('mongoose')
// const PORT = 2000

//Creating an Object instance
const app = express()

//Enabling our responce in json
app.use(express.json())

// Listen to the Port
app.listen(process.env.PORT, () => {
  console.log(`Listning To Port ${process.env.PORT}`)
})