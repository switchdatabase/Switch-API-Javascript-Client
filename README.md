# Switch Database REST API Client

SwitchDatabaseRestApi - JavaScript client for switch_database_rest_api
Switch API is the primary endpoint of data sevices and Switch DB's platform. You can do adding, editing, deleting or listing data works to your database with query operations by using this low-level API based on HTTP.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.2.1
- Package version: 1.2.1
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install switch_database_rest_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/switchdatabase/Switch-API-Javascript-Client
then install it via:

```shell
    npm install switchdatabase/Switch-API-Javascript-Client --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SwitchDatabaseRestApi = require('switch_database_rest_api');

var api = new SwitchDatabaseRestApi.AuthorizationApi()

var aPIKey = "aPIKey_example"; // {String} Your Switch API Key.

var signature = "signature_example"; // {String} Signature parameter is generated as md5(APISecret + ExpireTimestamp) format.

var expire = 789; // {Number} Expire parameter, token's expire date and time information must be proper to ISO 8601 standarts and Unix Time format with msec information.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.tokenGet(aPIKey, signature, expire, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://tr02.switchapi.com/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SwitchDatabaseRestApi.AuthorizationApi* | [**tokenGet**](docs/AuthorizationApi.md#tokenGet) | **GET** /Token | Generate Access Token
*SwitchDatabaseRestApi.DBOperationsApi* | [**addPost**](docs/DBOperationsApi.md#addPost) | **POST** /Add | Add is used for adding a data object to the list created at Switch DB.
*SwitchDatabaseRestApi.DBOperationsApi* | [**listPost**](docs/DBOperationsApi.md#listPost) | **POST** /List | It&#39;s used for listing a data added before.
*SwitchDatabaseRestApi.DBOperationsApi* | [**setDelete**](docs/DBOperationsApi.md#setDelete) | **DELETE** /Set | It&#39;s used for deleting a data added before at Switch DB.
*SwitchDatabaseRestApi.DBOperationsApi* | [**setPost**](docs/DBOperationsApi.md#setPost) | **POST** /Set | It&#39;s used for updating a data object that is already added to Switch DB.


## Documentation for Models

 - [SwitchDatabaseRestApi.AddResponse](docs/AddResponse.md)
 - [SwitchDatabaseRestApi.Body](docs/Body.md)
 - [SwitchDatabaseRestApi.Error](docs/Error.md)
 - [SwitchDatabaseRestApi.ListOrder](docs/ListOrder.md)
 - [SwitchDatabaseRestApi.SetResponse](docs/SetResponse.md)
 - [SwitchDatabaseRestApi.WhereItem](docs/WhereItem.md)