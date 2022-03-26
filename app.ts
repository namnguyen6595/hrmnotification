// import { App } from '@slack/bolt'
import express from "express";
import cors from "cors";
import routes from './routes'

const app = express()
app.use(cors())
app.get("/", (req, res) => {
  res.send("Hello World")
})
app.use("/post",routes)

app.listen(process.env.PORT || 3000, () => {
  console.log("server is running at", 3000)
})