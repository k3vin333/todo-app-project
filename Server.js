const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const routes = require('./routes/ToDoRoutes')

require('dotenv').config()

const app = express()
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

// Connect to monbodb database
mongoose.connect(process.env.MONGODB_URL).then(()=> console.log(`Connected To MongoDB...`)).catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))