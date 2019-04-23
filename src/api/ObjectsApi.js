const ObjectOutput = require('../model/ObjectOutput');
const ObjectOutputDetailed = require('../model/ObjectOutputDetailed');

var exports = function(apiClient) {
  if (apiClient === undefined || apiClient === null) {
    throw new Error("Missing the required parameter 'apiClient' when creating new instance of ObjectsApi");
  }
  const api = apiClient;

  this.createObject = function(callback) {
    var postBody = null;

    var pathParams = { appId: api.appId };
    var queryParams = {};
    var collectionQueryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['API Key'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ObjectOutputDetailed;

    return api.callApi(
      '/apps/{appId}/objects', 'POST',
      pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  this.findObjects = function(callback) {
    var postBody = null;

    var pathParams = { appId: api.appId };
    var queryParams = {};
    var collectionQueryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['API Key'];
    var contentTypes = [];
    var accepts = ['application/json'];
    var returnType = [ObjectOutput];

    return api.callApi(
      '/apps/{appId}/objects', 'GET',
      pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  this.getObject = function(objectId, callback) {
    if (objectId === undefined || objectId === null) {
      throw new Error("Missing the required parameter 'objectId' when calling getObject");
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
    var returnType = ObjectOutputDetailed;

    return api.callApi(
      '/apps/{appId}/objects/{objectId}', 'GET',
      pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
};

module.exports = exports;
