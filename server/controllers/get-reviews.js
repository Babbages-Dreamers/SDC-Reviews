const models = require('../database/models');

module.exports = async (reqParams) => {
  const params = {
    page: reqParams.page,
    count: reqParams.count,
    product_id: reqParams.product_id
  }

  try {
    const reviews = await models.Reviews.getReviews(params.product_id, params.count, params.page);
    const responseObject = {
      product: params.product_id,
      page: params.page,
      count: params.count,
      results: reviews
    }

    return responseObject;
  } catch (err) {
    console.error(err);
    return err;
  }
}