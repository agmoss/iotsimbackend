var createError = require('http-errors');
var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Routes
var iotDeviceRouter = require('./routes/iotDevice.router');

var app = express();
app.use(cors());

// MongoDB info
var config = require('./config');
var dbName = config.dbName;
var conn = config.connectionString;

//Set up mongoose connection
var mongoose = require('mongoose');
mongoose.connect(conn, { useNewUrlParser: true, dbName: dbName });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/devices', iotDeviceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error info as JSON
  res.status(err.status || 500);
  res.json({"error":err.stack});
  res.render('error');
});

module.exports = app;
