const getReviews = require('./get-reviews.js');
const getReviewMeta = require('./get-review-meta.js');
const createReview = require('./create-review.js');
const markHelpful = require('./mark-helpful.js');
const reportReview = require('./report-review.js');

module.exports = {
  getReviews: getReviews,
  getReviewMeta: getReviewMeta,
  createReview: createReview,
  markHelpful: markHelpful,
  reportReview: reportReview,
};