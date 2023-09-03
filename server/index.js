require('dotenv').config();
const express = require('express');
const router = require('./routes');
const logger = require('./middleware/logger');

const port = process.env.PORT || 3000;
let app = express();

app.use(express.json());
app.use(logger);
app.use('/api/reviews', router);


app.listen(port);
console.log(`Listening at http://localhost:${port}`);
