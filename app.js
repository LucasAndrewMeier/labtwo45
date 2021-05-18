//Lucas Meier
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var boxersRouter = require('./routes/boxer');
var createBoxerRouter = require('./routes/createboxer');
var addBoxerRouter = require('./routes/addboxer');
var addaccount = require('./routes/createaccount');
var landcreate = require('./routes/creator');
var loginroute = require('./routes/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/boxer', boxersRouter);
app.use('/createboxer', createBoxerRouter);
app.use('/addboxer', addBoxerRouter);
app.use('/account',addaccount);
app.use('/accountcreator',landcreate);
app.use('/login',loginroute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
