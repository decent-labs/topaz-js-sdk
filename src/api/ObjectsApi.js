const ObjectOutput = require('../model/ObjectOutput');
const ObjectOutputDetailed = require('../model/ObjectOutputDetailed');

/**
 * Objects service.
 * @module api/ObjectsApi
 * @version 0.1.17
 */

/**
 * Constructs a new ObjectsApi. 
 * @alias module:api/ObjectsApi
 * @class
 * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
var exports = function(apiClient, appId) {
  // verify the required parameter 'apiClient' is set
  if (apiClient === undefined || apiClient === null) {
    throw new Error("Missing the required parameter 'apiClient' when creating new instance of ObjectsApi");
  }
  this.apiClient = apiClient;

  // verify the required parameter 'appId' is set
  if (appId === undefined || appId === null) {
    throw new Error("Missing the required parameter 'appId' when creating new instance of ObjectsApi");
  }
  this.appId = appId;

  /**
   * Callback function to receive the result of the createObject operation.
   * @callback module:api/ObjectsApi~createObjectCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ObjectOutputDetailed} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create Object
   * Creating a new &#x60;object&#x60; doesn&#39;t take any body data in its request.
   * @param {String} appId 
   * @param {module:api/ObjectsApi~createObjectCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ObjectOutputDetailed}
   */
  this.createObject = function(callback) {
    var postBody = null;

    var pathParams = {
      'appId': this.appId
    };
    var queryParams = {};
    var collectionQueryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['API Key'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ObjectOutputDetailed;

    return this.apiClient.callApi(
      '/apps/{appId}/objects', 'POST',
      pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Callback function to receive the result of the findObjects operation.
   * @callback module:api/ObjectsApi~findObjectsCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/ObjectOutput>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * List Objects
   * This endpoint will return all &#x60;objects&#x60; registered for an &#x60;app&#x60;.
   * @param {String} appId 
   * @param {module:api/ObjectsApi~findObjectsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/ObjectOutput>}
   */
  this.findObjects = function(callback) {
    var postBody = null;

    var pathParams = {
      'appId': this.appId
    };
    var queryParams = {};
    var collectionQueryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['API Key'];
    var contentTypes = [];
    var accepts = ['application/json'];
    var returnType = [ObjectOutput];

    return this.apiClient.callApi(
      '/apps/{appId}/objects', 'GET',
      pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Callback function to receive the result of the getObject operation.
   * @callback module:api/ObjectsApi~getObjectCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ObjectOutputDetailed} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get Object
   * This endpoint will return details about a single object, given the &#x60;objectId&#x60; passed in as the request parameter
   * @param {String} appId 
   * @param {String} objectId 
   * @param {module:api/ObjectsApi~getObjectCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ObjectOutputDetailed}
   */
  this.getObject = function(objectId, callback) {
    var postBody = null;

    // verify the required parameter 'objectId' is set
    if (objectId === undefined || objectId === null) {
      throw new Error("Missing the required parameter 'objectId' when calling getObject");
    }

    var pathParams = {
      'appId': this.appId,
      'objectId': objectId
    };
    var queryParams = {};
    var collectionQueryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['API Key'];
    var contentTypes = [];
    var accepts = ['application/json'];
    var returnType = ObjectOutputDetailed;

    return this.apiClient.callApi(
      '/apps/{appId}/objects/{objectId}', 'GET',
      pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
};

module.exports = exports;
