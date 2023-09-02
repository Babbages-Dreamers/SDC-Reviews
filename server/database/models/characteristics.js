const Model = require('./model.js');


class Characteristics extends Model {
  constructor() {
    super('characteristics');
  }

  getCharacteristicsAverage(product_id) {
    return this.makeQuery(`SELECT char.characteristic_id, char.characteristic_name, AVG(char_rating.rating) AS average FROM characteristics char INNER JOIN characteristics_ratings char_rating ON char.characteristic_id = char_rating.characteristic_id WHERE char.product_id = ${product_id} GROUP BY char.characteristic_id, char.characteristic_name`);
  }

  createChar(characteristic) {
    return this.create(characteristics);
  }
};

module.exports = new Characteristics();
