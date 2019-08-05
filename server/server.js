// dotenv must be required as early as possible for env vars to propogate
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use( '/', express.static(path.join(__dirname,'../client/dist')));

// app.get('/', (req, res) => {
//   res.status(200).send('Get request successful!');
// });

app.listen(port, () => console.log(`Server is running on ${port}`));