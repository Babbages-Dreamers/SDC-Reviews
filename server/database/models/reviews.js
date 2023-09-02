const Model = require('./model.js');

class Reviews extends Model {
  constructor() {
    super('reviews');
  }

  getReviews(product_id, count = 5, page = 0) {
    return this.makeQuery(`SELECT review_id, rating, summary, recommended, response, body, review_date, reviewer_name, helpfulness FROM ${this.tablename} WHERE reported = false AND product_id = ${product_id} limit ${count} offset ${page}`);
  }

  getRatingsData(product_id) {
    return this.makeQuery(`SELECT rating, COUNT(*) as count FROM ${this.tablename} WHERE product_id = ${product_id} GROUP BY rating`);
  }

  getRecommendedCount(product_id) {
    return this.makeQuery(`SELECT COUNT(CASE WHEN recommended = TRUE THEN 1 END) as true, COUNT(CASE WHEN recommended = FALSE THEN 1 END) as false FROM ${this.tablename} WHERE product_id = ${product_id}`);
  }

  reportReviews(review_id) {
    return this.makeQuery(`UPDATE ${this.tablename} SET reported = true WHERE review_id = ${review_id}`);
  }

  markHelpful(review_id) {
    return this.makeQuery(`UPDATE ${this.tablename} SET helpfulness = helpfulness + 1 WHERE review_id = ${review_id}`);
  }

  createReview(params) {
    return this.create(params);
  }
}

module.exports = new Reviews();
