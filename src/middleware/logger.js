'use strict';

module.exports = function (request, response, next) {
  
  let method = request.method;
  if (method === 'GET') {
    next();
  } else {
    next('Error - Something Went Wrong');
  }
};