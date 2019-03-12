# TopazApi.HashesApi

All URIs are relative to *https://sandbox.topaz.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createHash**](HashesApi.md#createHash) | **POST** /apps/{appId}/objects/{objectId}/hashes | Create Hash
[**findHashes**](HashesApi.md#findHashes) | **GET** /apps/{appId}/objects/{objectId}/hashes | List Hashes
[**getHash**](HashesApi.md#getHash) | **GET** /apps/{appId}/objects/{objectId}/hashes/{hashId} | Get Hash


<a name="createHash"></a>
# **createHash**
> HashOutputDetailed createHash(appId, objectId, opts)

Create Hash

This endpoint inputs a json object in it&#39;s body which defines a &#x60;hash&#x60; property. This &#x60;hash&#x60; should be a hex-encoded SHA256 hash. 

### Example
```javascript
var TopazApi = require('topaz_api');
var defaultClient = TopazApi.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new TopazApi.HashesApi();

var appId = "appId_example"; // String | 

var objectId = "objectId_example"; // String | 

var opts = { 
  'body': new TopazApi.HashInput() // HashInput | Pass in a single `hash` string to create a hash
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createHash(appId, objectId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **objectId** | **String**|  | 
 **body** | [**HashInput**](HashInput.md)| Pass in a single &#x60;hash&#x60; string to create a hash | [optional] 

### Return type

[**HashOutputDetailed**](HashOutputDetailed.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findHashes"></a>
# **findHashes**
> [HashOutput] findHashes(appId, objectId)

List Hashes

This endpoint will return all &#x60;hashes&#x60; which have been associated with an &#x60;object&#x60;

### Example
```javascript
var TopazApi = require('topaz_api');
var defaultClient = TopazApi.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new TopazApi.HashesApi();

var appId = "appId_example"; // String | 

var objectId = "objectId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findHashes(appId, objectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **objectId** | **String**|  | 

### Return type

[**[HashOutput]**](HashOutput.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getHash"></a>
# **getHash**
> HashOutputDetailed getHash(appId, objectId, hashId)

Get Hash

This endpoint will return details about a single hash, given the &#x60;hashId&#x60; passed in as the request parameter

### Example
```javascript
var TopazApi = require('topaz_api');
var defaultClient = TopazApi.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new TopazApi.HashesApi();

var appId = "appId_example"; // String | 

var objectId = "objectId_example"; // String | 

var hashId = "hashId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getHash(appId, objectId, hashId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **objectId** | **String**|  | 
 **hashId** | **String**|  | 

### Return type

[**HashOutputDetailed**](HashOutputDetailed.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

