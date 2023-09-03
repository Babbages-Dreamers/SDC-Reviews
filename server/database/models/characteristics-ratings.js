const Model = require('./model.js');


class CharacteristicsRatings extends Model {
  constructor() {
    super('characteristics_ratings');
  }

  // getRatingsCount(params) {
  //   this.makeQuery(`SELECT ratings FROM ${this.tablename} WHERE `)
  // }

  createCharRating(characteristics) {
    return this.create(characteristics);
  }
};

module.exports = new CharacteristicsRatings();
