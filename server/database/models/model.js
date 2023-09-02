const db = require('../db.js');

const deconstructOptions = (data) => {
  const optionsArr = [];

  for (option in data) {
    if (data[option] === undefined) { continue; };
    optionsArr.push(`${option} = '${data[option]}'`);
  }

  return optionsArr.length === 0 ? null : optionsArr;
}


// const makeQuery = (queryString, values) => {
//   return queryString;

//   //return db.query(queryString, values);
// }

class Model {
  constructor(tablename) {
    this.tablename = tablename;
  }

  makeQuery(queryString, values) {
    //return queryString;
    return db.query(queryString, values);
  }

  get(options) {
    console.log('doing get query');

    if (!deconstructOptions(options)) {
      return this.makeQuery(`SELECT * FROM ${this.tablename}`);
    }

    return this.makeQuery(`SELECT * FROM ${this.tablename} WHERE ${deconstructOptions(options).join(' AND ')}`);
  }

  create(options) {
    console.log('doing create query')

    const keys = Object.keys(options);
    const values = Object.values(options);
    let placeholders = [];
    for (let i = 1; i <= keys.length; i++) {
      placeholders.push(`$${i}`);
    }

    placeholders = placeholders.join(', ');

    return this.makeQuery(`INSERT INTO ${this.tablename} (${keys.join(', ')}) VALUES (${placeholders}) RETURNING *`, values);
  }

  update(options) {
    console.log('doing update query')
  }
}


module.exports = Model;
