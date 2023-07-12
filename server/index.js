require('dotenv').config();
const express = require('express');
const router = require('./routes.js');

const port = process.env.PORT || 3000;
let app = express();

app.use(express.json());
app.use('/api', router);




app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
