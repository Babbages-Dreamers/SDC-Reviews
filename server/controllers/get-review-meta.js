const models = require('../database/models');
const db = require('../database/db.js');

module.exports = async (product_id) => {
  const results = {};

  console.log('getting review meta');

  // pg-promise docs say that Promise.all is terrible and you should never use it. Oops....
  // const queryPromises = Promise.all([
  //   models.Reviews.getRatingsData(product_id),
  //   models.Reviews.getRecommendedCount(product_id),
  //   models.Characteristics.getCharacteristicsAverage(product_id)
  // ]);

  results.product_id = product_id;

  try {
  //   const promiseResults = await queryPromises;

  // const ratings = promiseResults[0];
  // const recommended = promiseResults[1];
  // const characteristics = promiseResults[2];
    const bRatings = Date.now();
    const ratings = await models.Reviews.getRatingsData(product_id);
    const bRec = Date.now();
    const recommended = await models.Reviews.getRecommendedCount(product_id);
    const bChar = Date.now();
    const characteristics = await models.Characteristics.getCharacteristicsAverage(product_id);
    const aChar = Date.now();

    recommended[0]['true'] = Number(recommended[0]['true']);
    recommended[0]['false'] = Number(recommended[0]['false']);

    results.ratings = {}
    for (let i = 0; i < ratings.length; i++) {
      results.ratings[ratings[i].rating] = Number(ratings[i].count);
    };

    results.characteristics = {};
    for (let i = 0; i < characteristics.length; i++) {
      const char = characteristics[i];
      const charObj = {
        id: char.characteristic_id,
        value: char.average
      };

      results.characteristics[char.characteristic_name] = charObj;
    };

    results.recommended = recommended[0];

    console.log(`ratings: ${bRec - bRatings}\nRecommended: ${bChar - bRec}\nCharac: ${aChar - bChar}`);

    return results;
  } catch (err) {
    console.error(err);
    return err;
  }

};