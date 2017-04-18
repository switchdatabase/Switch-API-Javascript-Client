# SwitchDatabaseRestApi.AuthorizationApi

All URIs are relative to *http://tr02.switchapi.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokenGet**](AuthorizationApi.md#tokenGet) | **GET** /Token | Generate Access Token


<a name="tokenGet"></a>
# **tokenGet**
> &#39;String&#39; tokenGet(aPIKey, signature, expire)

Generate Access Token

For generating Access Token, you need API Key and API Secret parameters that are provided from the developer portal. At the request, API Key that will be sent by using header is generated as portal API Key and Signature parameter is generated as md5(APISecret + ExpireTimestamp) format. At Expire parameter, token&#39;s expire date and time information must be proper to ISO 8601 standarts and Unix Time format with msec information. 

### Example
```javascript
var SwitchDatabaseRestApi = require('switch_database_rest_api');

var apiInstance = new SwitchDatabaseRestApi.AuthorizationApi();

var aPIKey = "aPIKey_example"; // String | Your Switch API Key.

var signature = "signature_example"; // String | Signature parameter is generated as md5(APISecret + ExpireTimestamp) format.

var expire = 789; // Number | Expire parameter, token's expire date and time information must be proper to ISO 8601 standarts and Unix Time format with msec information.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tokenGet(aPIKey, signature, expire, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **aPIKey** | **String**| Your Switch API Key. | 
 **signature** | **String**| Signature parameter is generated as md5(APISecret + ExpireTimestamp) format. | 
 **expire** | **Number**| Expire parameter, token&#39;s expire date and time information must be proper to ISO 8601 standarts and Unix Time format with msec information. | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

