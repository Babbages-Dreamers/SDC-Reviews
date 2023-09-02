const Model = require('./model.js');

class Images extends Model {
  constructor() {
    super('images');
  }

  createImage(image) {
    return this.create(photo);
  }

  batchCreateImages(images) {
    return '';
  }

};

module.exports = new Images();
