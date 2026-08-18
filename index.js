const express=require('express')
const app =express()
const dotenv = require('dotenv')
const userrouter = require('./router/user.router')
const cors =require('cors')
const blogrouter = require('./router/blog.router')
const commentrouter = require('./router/comment.router')
dotenv.config()

require('./config/db')
app.use(cors({
  origin: process.env.ORIGIN
}))
const port =process.env.port || 8080
app.use(express.json())

app.use(userrouter)
app.use(blogrouter)
app.use(commentrouter)

app.listen(process.env.port,()=>console.log(`server is running ${port}`))