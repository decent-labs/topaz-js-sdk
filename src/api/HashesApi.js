const HashInput = require('../model/HashInput');
const HashOutput = require('../model/HashOutput');
const HashOutputDetailed = require('../model/HashOutputDetailed');

var exports = function(apiClient) {
  if (apiClient === undefined || apiClient === null) {
    throw new Error("Missing the required parameter 'apiClient' when creating new instance of HashesApi");
  }
  const api = apiClient;

  this.createHash = function(objectId, { hash }, callback) {
    if (objectId === undefined || objectId === null) {
      throw new Error("Missing the required parameter 'objectId' when calling createHash");
    }

    var postBody = new HashInput(hash);

    var pathParams = { appId: api.appId, objectId };
    var queryParams = {};
    var collectionQueryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['API Key'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = HashOutputDetailed;

    return api.callApi(
      '/apps/{appId}/objects/{objectId}/hashes', 'POST',
      pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  this.findHashes = function(objectId, callback) {
    if (objectId === undefined || objectId === null) {
      throw new Error("Missing the required parameter 'objectId' when calling findHashes");
    }

    var postBody = null;

    var pathParams = { appId: api.appId, objectId };
    var queryParams = {};
    var collectionQueryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['API Key'];
    var contentTypes = [];
    var accepts = ['application/json'];
    var returnType = [HashOutput];

    return api.callApi(
      '/apps/{appId}/objects/{objectId}/hashes', 'GET',
      pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  this.getHash = function(objectId, hashId, callback) {
    if (objectId === undefined || objectId === null) {
      throw new Error("Missing the required parameter 'objectId' when calling getHash");
    }

    if (hashId === undefined || hashId === null) {
      throw new Error("Missing the required parameter 'hashId' when calling getHash");
    }

    var postBody = null;

    var pathParams = { appId: api.appId, objectId, hashId };
    var queryParams = {};
    var collectionQueryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['API Key'];
    var contentTypes = [];
    var accepts = ['application/json'];
    var returnType = HashOutputDetailed;

    return api.callApi(
      '/apps/{appId}/objects/{objectId}/hashes/{hashId}', 'GET',
      pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
};

module.exports = exports;
