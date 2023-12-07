const express = require('express');
const route = express.Router();
const SendFormData = require('./Controller');

route.post("/AddFormData",SendFormData);

module.exports = route;