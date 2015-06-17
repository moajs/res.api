# res.api

res.api is an express middleware for render json api , it convention over api format like this :

    {
      data: {
  
      },
      status: {
        code : x,
        msg  : 'some message'
      }
    }


## Install

    npm install --save res.api
    
## Usages

    var express       = require('express');
    var res.api       = require('res.api');
  
    var app = new express();
    app.use(res.api);
    
  
then in some route 

### way 1

    return res.api(404 ,err, {
      code : 1,
      msg  : 'delete failed!'
    });


the response header is :

    HTTP/1.1 404 Not Found
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Access-Control-Allow-Methods: GET, POST
    Access-Control-Allow-Headers: X-Requested-With,content-type, Authorization
    Content-Type: application/json; charset=utf-8
    Content-Length: 239
    ETag: W/"ef-6e66e2da"
    set-cookie: connect.sid=s%3ApwL-xMS2tCh3qgqp_wyIqukbUKFeJv6S.2EB4449yTlxRWZrRyBXRc9J6Pv%2BNz4M7j35VLIlxE6M; Path=/; Expires=Wed, 17 Jun 2015 15:11:28 GMT; HttpOnly
    Date: Wed, 17 Jun 2015 14:41:28 GMT
    Connection: keep-alive
    
response json data
    
    {
      "data": {
        "message": "Cast to ObjectId failed for value \"557a3e326221681d474cf078sdsds\" at path \"_id\"",
        "name": "CastError",
        "kind": "ObjectId",
        "value": "557a3e326221681d474cf078sdsds",
        "path": "_id"
      },
      "status": {
        "code": 1,
        "msg": "delete failed!"
      }
    }
### way 2

    
    return res.api(data, {
      code : 1,
      msg  : 'delete failed!'
    });
    

the response header is :

    HTTP/1.1 200 Ok
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Access-Control-Allow-Methods: GET, POST
    Access-Control-Allow-Headers: X-Requested-With,content-type, Authorization
    Content-Type: application/json; charset=utf-8
    Content-Length: 239
    ETag: W/"ef-6e66e2da"
    set-cookie: connect.sid=s%3ApwL-xMS2tCh3qgqp_wyIqukbUKFeJv6S.2EB4449yTlxRWZrRyBXRc9J6Pv%2BNz4M7j35VLIlxE6M; Path=/; Expires=Wed, 17 Jun 2015 15:11:28 GMT; HttpOnly
    Date: Wed, 17 Jun 2015 14:41:28 GMT
    Connection: keep-alive
    
response json data
    
    {
      "data": {
        "message": "Cast to ObjectId failed for value \"557a3e326221681d474cf078sdsds\" at path \"_id\"",
        "name": "CastError",
        "kind": "ObjectId",
        "value": "557a3e326221681d474cf078sdsds",
        "path": "_id"
      },
      "status": {
        "code": 1,
        "msg": "delete failed!"
      }
    }

### way 3

    return res.api(data);

the response header is :

    HTTP/1.1 200 Ok
    X-Powered-By: Express
    Access-Control-Allow-Origin: *
    Access-Control-Allow-Methods: GET, POST
    Access-Control-Allow-Headers: X-Requested-With,content-type, Authorization
    Content-Type: application/json; charset=utf-8
    Content-Length: 239
    ETag: W/"ef-6e66e2da"
    set-cookie: connect.sid=s%3ApwL-xMS2tCh3qgqp_wyIqukbUKFeJv6S.2EB4449yTlxRWZrRyBXRc9J6Pv%2BNz4M7j35VLIlxE6M; Path=/; Expires=Wed, 17 Jun 2015 15:11:28 GMT; HttpOnly
    Date: Wed, 17 Jun 2015 14:41:28 GMT
    Connection: keep-alive
    
response json data


    {
      "data": {
        "message": "Cast to ObjectId failed for value \"557a3e326221681d474cf078sdsds\" at path \"_id\"",
        "name": "CastError",
        "kind": "ObjectId",
        "value": "557a3e326221681d474cf078sdsds",
        "path": "_id"
      },
      "status": {
        "code": 0,
        "msg": "deleterequest success!"
      }
    }