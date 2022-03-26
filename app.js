// import { App } from '@slack/bolt'
const express = require('express')
const cors = require('cors')
const Routes = require('./routes/index')

const app = express()
app.use(cors())
app.get("/", (req, res) => {
  res.send("Hello World")
})
app.use("/post",Routes)

app.listen(process.env.PORT || 3000, () => {
  console.log("server is running at", 3000)
})