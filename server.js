const express=require('express')
const morgan = require('morgan')
const dotenv=require('dotenv')
const connectDB=require('./config/db')

const app=express()
app.use(express.json())
app.use(morgan('dev'))
app.use(express.json({}));
app.use(
  express.json({
    extended: true,
  })
);
dotenv.config({
    path: "./config/config.env"
})
const PORT = process.env.PORT || 3000;
connectDB()

app.use('/api/sindhikeyboard', require('./routes/category'))
app.use('/api/sindhikeyboard',require('./routes/item'))


app.listen(PORT,console.log(`App is running on port ${PORT}`))
