const HashInput = require('../model/HashInput');
const HashOutput = require('../model/HashOutput');
const HashOutputDetailed = require('../model/HashOutputDetailed');

/**
 * Hashes service.
 * @module api/HashesApi
 * @version 0.1.17
 */

/**
 * Constructs a new HashesApi. 
 * @alias module:api/HashesApi
 * @class
 * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
var exports = function(apiClient, appId, objectId) {
  // verify the required parameter 'apiClient' is set
  if (apiClient === undefined || apiClient === null) {
    throw new Error("Missing the required parameter 'apiClient' when creating new instance of HashesApi");
  }
  this.apiClient = apiClient;

  // verify the required parameter 'appId' is set
  if (appId === undefined || appId === null) {
    throw new Error("Missing the required parameter 'appId' when creating new instance of HashesApi");
  }
  this.appId = appId;

  // verify the required parameter 'objectId' is set
  if (objectId === undefined || objectId === null) {
    throw new Error("Missing the required parameter 'objectId' when creating new instance of HashesApi");
  }
  this.objectId = objectId;

  /**
   * Callback function to receive the result of the createHash operation.
   * @callback module:api/HashesApi~createHashCallback
   * @param {String} error Error message, if any.
   * @param {module:model/HashOutputDetailed} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create Hash
   * This endpoint inputs a json object in it&#39;s body which defines a &#x60;hash&#x60; property. This &#x60;hash&#x60; should be a hex-encoded SHA256 hash. 
   * @param {String} appId 
   * @param {String} objectId 
   * @param {Object} opts Optional parameters
   * @param {module:model/HashInput} opts.body Pass in a single &#x60;hash&#x60; string to create a hash
   * @param {module:api/HashesApi~createHashCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/HashOutputDetailed}
   */
  this.createHash = function({ hash }, callback) {
    var postBody = new HashInput(hash);

    var pathParams = {
      'appId': this.appId,
      'objectId': this.objectId
    };
    var queryParams = {};
    var collectionQueryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['API Key'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = HashOutputDetailed;

    return this.apiClient.callApi(
      '/apps/{appId}/objects/{objectId}/hashes', 'POST',
      pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Callback function to receive the result of the findHashes operation.
   * @callback module:api/HashesApi~findHashesCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/HashOutput>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * List Hashes
   * This endpoint will return all &#x60;hashes&#x60; which have been associated with an &#x60;object&#x60;
   * @param {String} appId 
   * @param {String} objectId 
   * @param {module:api/HashesApi~findHashesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/HashOutput>}
   */
  this.findHashes = function(callback) {
    var postBody = null;

    var pathParams = {
      'appId': this.appId,
      'objectId': this.objectId
    };
    var queryParams = {};
    var collectionQueryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['API Key'];
    var contentTypes = [];
    var accepts = ['application/json'];
    var returnType = [HashOutput];

    return this.apiClient.callApi(
      '/apps/{appId}/objects/{objectId}/hashes', 'GET',
      pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Callback function to receive the result of the getHash operation.
   * @callback module:api/HashesApi~getHashCallback
   * @param {String} error Error message, if any.
   * @param {module:model/HashOutputDetailed} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get Hash
   * This endpoint will return details about a single hash, given the &#x60;hashId&#x60; passed in as the request parameter
   * @param {String} appId 
   * @param {String} objectId 
   * @param {String} hashId 
   * @param {module:api/HashesApi~getHashCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/HashOutputDetailed}
   */
  this.getHash = function(hashId, callback) {
    var postBody = null;

    // verify the required parameter 'hashId' is set
    if (hashId === undefined || hashId === null) {
      throw new Error("Missing the required parameter 'hashId' when calling getHash");
    }

    var pathParams = {
      'appId': this.appId,
      'objectId': this.objectId,
      'hashId': hashId
    };
    var queryParams = {};
    var collectionQueryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['API Key'];
    var contentTypes = [];
    var accepts = ['application/json'];
    var returnType = HashOutputDetailed;

    return this.apiClient.callApi(
      '/apps/{appId}/objects/{objectId}/hashes/{hashId}', 'GET',
      pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
};

module.exports = exports;
