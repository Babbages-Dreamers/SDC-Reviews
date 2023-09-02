const router = require('express').Router();
const models = require('./database/models');
const controllers = require('./controllers');
const db = require('./database/db.js');

/*
============================
GET
============================
*/

router.get('/test', (req, res) => {
  console.log(req.query)

  controllers.getReviewMeta(123)
    .then((response) => {
      console.log(response);
      res.send('example response');
    })
});

router.post('/test/reviews', (req, res) => {
  const testReview = {
    product_id: 123,
    rating: 3.5,
    summary: 'test summary 123',
    body: 'this is a test body 123',
    reviewer_name: 'AprilTest',
    reviewer_email: 'AprilTest@example.com',
    characteristics: {
      420: 3.6,
      421: 4.2,
      422: 2,
      423: 2.5,
    },
  }

  controllers.createReview(testReview)
    .then((response) => {
      console.log('aghhhhhhhhhhhhhhhhhhhhh');
      console.log(response);
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get('/', (req, res) => {
  const params = req.query || {};

  controllers.getReviews(params)
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res.status(500).send(results);
    })
})

router.get('/meta', (req, res) => {
  res.send('example response');
})

/*
============================
POST
============================
*/

router.post('/', (req, res) => {
  res.send('example response');
})

/*
============================
PUT
============================
*/

router.put('/:review_id?/helpful', (req, res) => {
  res.send('example response');
})

router.put('/:review_id?/report', (req, res) => {
  res.send('example response');
})

module.exports = router;