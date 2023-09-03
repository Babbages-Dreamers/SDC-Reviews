const models = require('../database/models');

module.exports = async (review_id) => {
  try {
    await models.reviews.markHelpful(review_id);
  } catch (err) {
    console.error(err)
    return err;
  }
}