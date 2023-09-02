const pgp = require('pg-promise')({
  connect: () => {
    //console.log('connecting!!!!');
  },
  disconnect: () => {
    //console.log('disconnecting :(')
  }
});

const connection = {
  host:'localhost',
  port: 5432,
  database: 'SDC-Reviews',
  user: process.env.DB_USER,
  password: process.env.DB_PASS
}

const db = pgp(connection);

// db.connect()
//   .then((res) => {
//     console.log('Connected to db!')
//   });

module.exports = db;