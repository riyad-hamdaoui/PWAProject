const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
var cors = require('cors');
const app = express();
const server = require('http').createServer(app);

const Routes = require('./src/routes')

// initialization
app.use(morgan('short'));
app.use(cors());
app.use(express.json());
app.use(helmet());

//Add routes 
app.use(Routes)

module.exports = server

