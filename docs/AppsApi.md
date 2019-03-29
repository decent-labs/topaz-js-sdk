# TopazApi.AppsApi

All URIs are relative to *https://sandbox.topaz.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createApp**](AppsApi.md#createApp) | **POST** /apps | Create App
[**findApps**](AppsApi.md#findApps) | **GET** /apps | List Apps
[**getApp**](AppsApi.md#getApp) | **GET** /apps/{appId} | Get App


<a name="createApp"></a>
# **createApp**
> AppOutputDetailed createApp(opts)

Create App

To create a new &#x60;app&#x60;, post to the &#x60;/apps&#x60; endpoint. You&#39;ll need to name the &#x60;app&#x60;, and pass in an &#x60;interval&#x60;, in seconds. This interval represents the amount of time between blockchain transactions that will occur as you&#39;re adding &#x60;hashes&#x60; to &#x60;objects&#x60; in this &#x60;app&#x60;.  In effect, it&#39;s the \&quot;resolution\&quot; at which you&#39;re comfortable proving that your data exists.

### Example
```javascript
var TopazApi = require('topaz_api');
var defaultClient = TopazApi.ApiClient.instance;

// Configure API key authorization: API Key
var APIKey = defaultClient.authentications['API Key'];
APIKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKey.apiKeyPrefix = 'Token';

var apiInstance = new TopazApi.AppsApi();

var opts = { 
  'body': new TopazApi.AppInput() // AppInput | Send in `name` and `interval` to generate an `app` with a blockchain transaction resolution no less than the defined `interval` in seconds.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createApp(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AppInput**](AppInput.md)| Send in &#x60;name&#x60; and &#x60;interval&#x60; to generate an &#x60;app&#x60; with a blockchain transaction resolution no less than the defined &#x60;interval&#x60; in seconds. | [optional] 

### Return type

[**AppOutputDetailed**](AppOutputDetailed.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findApps"></a>
# **findApps**
> [AppOutput] findApps()

List Apps

List all &#x60;apps&#x60; belonging to a user

### Example
```javascript
var TopazApi = require('topaz_api');
var defaultClient = TopazApi.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new TopazApi.AppsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findApps(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[AppOutput]**](AppOutput.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getApp"></a>
# **getApp**
> AppOutputDetailed getApp(appId)

Get App

This endpoint will return details about a single &#x60;app&#x60;, given the &#x60;appId&#x60; passed in as the request parameter.

### Example
```javascript
var TopazApi = require('topaz_api');
var defaultClient = TopazApi.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new TopazApi.AppsApi();

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getApp(appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 

### Return type

[**AppOutputDetailed**](AppOutputDetailed.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

