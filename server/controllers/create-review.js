const models = require('../database/models');

module.exports = async (reviewParams) => {
  const reviewObj = {
    product_id: reviewParams.product_id,
    rating: reviewParams.rating,
    review_date: Math.floor(Date.now() / 1000),
    summary: reviewParams.summary,
    body: reviewParams.body,
    reviewer_name: reviewParams.reviewer_name,
    reviewer_email: reviewParams.reviewer_email,
  };

  try {
    const createdReview = await models.Reviews.createReview(reviewObj);
    console.log(createdReview);
    const review_id = createdReview[0].review_id;

    if(reviewParams.images) {
      for (let i = 0; i < reviewParams.photos.length; i++) {
        // Need to batch insert instead of insert 1 by 1;
        // https://github.com/vitaly-t/pg-promise/wiki/Performance-Boost
        let image = {
          review_id: review_id,
          image_url: reveiwParams.images[i]
        }
        await models.Images.createImage(photo);
      }
    }

    for (let char_id in reviewParams.characteristics) {
      const ratingVal = reviewParams.characteristics[char_id];
      const characteristic = {
        characteristic_id: char_id,
        review_id: review_id,
        rating: ratingVal,
      }

      await models.CharacteristicsRatings.createCharRating(characteristic);
    }

    return 'review created!';
  } catch (err) {
    console.error(err);
    return err;
  }
};