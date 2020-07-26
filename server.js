const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.use(express.json())

mongoose.connect(process.env.DB_CONNECT, {useUnifiedTopology: true, useNewUrlParser: true}, () => {
                    console.log("MongoDB Connected")
                });

const port = 5000 || process.env.PORT

app.listen(port, () => console.log(`Server running on port ${port}`))
