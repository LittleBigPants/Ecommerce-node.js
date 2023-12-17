const {ValidationError} = require('sequelize');

function logErrors(error, req, res, next) {
    // console.log("logerrors");
  console.error(error);
    next(error);

}

function errorHandler(error, req, res, next) {
  // console.log("errorHandler");
  res.status(500).json({
    message: error.message,
    errors: error.errors
  })
}


function boomErrorHandler(error, req, res, next) {
  if (error.isBoom) {
    const { output } = error;
    res.status(output.statusCode).json(output.payload);
  }else{
    next(error);
  }

}

function ormErrorHandler(error, req, res, next) {
  if (error instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: error.message,
      errors: error.errors
    });
  }else{
    next(error);
  }

}

module.exports = { logErrors,  errorHandler, boomErrorHandler, ormErrorHandler}
