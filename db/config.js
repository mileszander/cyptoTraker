require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crypto', {useNewUrlParser: true});

const db = mongoose.connection;




