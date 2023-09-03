const models = require('../database/models');

module.exports = async (review_id) => {
  try {
    await models.reviews.reportReview(review_id);
  } catch (err) {
    console.error(err)
    return err;
  }
}