# TopazApi.ProofsApi

All URIs are relative to *https://sandbox.topaz.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findProofs**](ProofsApi.md#findProofs) | **GET** /apps/{appId}/proofs | List Proofs
[**getProofs**](ProofsApi.md#getProofs) | **GET** /apps/{appId}/proofs/{proofId} | Get Proof


<a name="findProofs"></a>
# **findProofs**
> [ProofOutput] findProofs(appId)

List Proofs

This endpoint will return all &#x60;proofs&#x60; associated with an &#x60;app&#x60;.

### Example
```javascript
var TopazApi = require('topaz_api');
var defaultClient = TopazApi.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new TopazApi.ProofsApi();

var appId = "appId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findProofs(appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 

### Return type

[**[ProofOutput]**](ProofOutput.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProofs"></a>
# **getProofs**
> ProofOutputDetailed getProofs(appId, proofId)

Get Proof

This endpoint will return details about a single proof, given the &#x60;proofId&#x60; passed in as the request parameter.

### Example
```javascript
var TopazApi = require('topaz_api');
var defaultClient = TopazApi.ApiClient.instance;

// Configure API key authorization: API Key
var API Key = defaultClient.authentications['API Key'];
API Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API Key.apiKeyPrefix = 'Token';

var apiInstance = new TopazApi.ProofsApi();

var appId = "appId_example"; // String | 

var proofId = "proofId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProofs(appId, proofId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**|  | 
 **proofId** | **String**|  | 

### Return type

[**ProofOutputDetailed**](ProofOutputDetailed.md)

### Authorization

[API Key](../README.md#API Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

