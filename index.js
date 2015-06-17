/*!
 * Moajs Middle
 * Copyright(c) 2015-2019 Alfred Sang <shiren1118@126.com>
 * MIT Licensed
 */

// api header
module.exports = function(req, res, next) {
  console.log('set api header');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  
  res.api = api;
  
  next();
};

// http_code, data, status
// data, status
// data
/**
  Usages:

  return res.api(404 ,err, {
    code : 1,
    msg  : 'delete failed!'
  });

  return res.api(err, {
    code : 1,
    msg  : 'delete failed!'
  });

  return res.api(err);
 */ 
function api(){
  var _res = this;

  if(typeof(_res) != "object" || _is_not_has_prototype('end')){
    arguments = [];
    console.dir('not a object')
  }
  
  if (arguments.length == 1) {
    var http_code = 200;
    var api_data      = arguments[0];
    var api_status    = {
      code : 0,
      msg  : 'request success!'
    }
    
    return _api(http_code, api_data, api_status);
  } else if (arguments.length == 2) {
    var http_code = 200;
    var api_data      = arguments[0];
    var api_status    = arguments[1];
    
    return _api(http_code, api_data, api_status);
  } else if (arguments.length == 3) {
    var http_code = arguments[0];
    var api_data      = arguments[1];
    var api_status    = arguments[2];
    
   return _api(http_code, api_data, api_status);
  } else {
    var http_code = 200;
    var api_data      = {};
    var api_status    = {
      code : 222222222,
      msg  : 'res.api params error or res is not a express.response object!'
    }
    
    return _api(http_code, api_data, api_status);
  }
  
  function _is_not_has_prototype(name){
    console.dir(_res)
    return !_res.hasOwnProperty(name)&&(name in _res);
  }
  
  function _api (http_code, data, status) {
    return _res.status(http_code).json({
      data    : data,
      status  : status
    })
  }
}