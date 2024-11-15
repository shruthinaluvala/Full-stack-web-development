const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://sruthinaluvala55:1234567890@in-aws.e2jo0.mongodb.net/max-store?retryWrites=true&w=majority&appName=In-AWS")

const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')