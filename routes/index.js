const express = require('express')
const router = express.Router()

router.get('/home', (req, res) => {
  console.log('req', req)
  console.log(res)
})

router.post('/hr-checkin', (req, res) => {
  console.log(req)
  res.json({
    channel: "C038N334S74",
    message: "checked"
  })
  
})

module.exports = router