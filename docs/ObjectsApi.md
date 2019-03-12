# TopazApi.ObjectsApi

All URIs are relative to *https://sandbox.topaz.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createObject**](ObjectsApi.md#createObject) | **POST** /apps/{appId}/objects | Create Object
[**findObjects**](ObjectsApi.md#findObjects) | **GET** /apps/{appId}/objects | List Objects
[**getObject**](ObjectsApi.md#getObject) | **GET** /apps/{appId}/objects/{objectId} | Get Object


<a name="createObject"></a>
# **createObject**
> ObjectOutputDetailed createObject(appId)

Create Object

Creating a new &#x60;object&#x60; doesn&#39;t take any body data in its request.

### Example
```javascript
var TopazApi = require('topaz_api');
var defaultClient = TopazApi.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new TopazApi.ObjectsApi();

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createObject(appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 

### Return type

[**ObjectOutputDetailed**](ObjectOutputDetailed.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findObjects"></a>
# **findObjects**
> [ObjectOutput] findObjects(appId)

List Objects

This endpoint will return all &#x60;objects&#x60; registered for an &#x60;app&#x60;.

### Example
```javascript
var TopazApi = require('topaz_api');
var defaultClient = TopazApi.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new TopazApi.ObjectsApi();

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findObjects(appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 

### Return type

[**[ObjectOutput]**](ObjectOutput.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getObject"></a>
# **getObject**
> ObjectOutputDetailed getObject(appId, objectId)

Get Object

This endpoint will return details about a single object, given the &#x60;objectId&#x60; passed in as the request parameter

### Example
```javascript
var TopazApi = require('topaz_api');
var defaultClient = TopazApi.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new TopazApi.ObjectsApi();

var appId = "appId_example"; // String | 

var objectId = "objectId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getObject(appId, objectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **objectId** | **String**|  | 

### Return type

[**ObjectOutputDetailed**](ObjectOutputDetailed.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

