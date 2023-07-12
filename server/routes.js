const router = require('express').Router();
const models = require('./database/models');

router.get('/test', (req, res) => {
  console.log(req.query)
  res.send('example response')
})

module.exports = router;