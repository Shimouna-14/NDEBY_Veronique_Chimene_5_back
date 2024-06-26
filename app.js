const express = require('express');
const path = require('path');
require("dotenv").config();
const productRoutes = require('./routes/product');
const cors = require("cors")
const app = express();

app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.API);
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.json());

app.use('/api/products', productRoutes);

module.exports = app;
