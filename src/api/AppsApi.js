const AppInput = require('../model/AppInput');
const AppOutput = require('../model/AppOutput');
const AppOutputDetailed = require('../model/AppOutputDetailed');

/**
 * Apps service.
 * @module api/AppsApi
 * @version 0.1.17
 */

/**
 * Constructs a new AppsApi. 
 * @alias module:api/AppsApi
 * @class
 * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
var exports = function(apiClient) {
  // verify the required parameter 'apiClient' is set
  if (apiClient === undefined || apiClient === null) {
    throw new Error("Missing the required parameter 'apiClient' when creating new instance of AppsApi");
  }
  this.apiClient = apiClient;

  /**
   * Callback function to receive the result of the createApp operation.
   * @callback module:api/AppsApi~createAppCallback
   * @param {String} error Error message, if any.
   * @param {module:model/AppOutputDetailed} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create App
   * To create a new &#x60;app&#x60;, post to the &#x60;/apps&#x60; endpoint. You&#39;ll need to name the &#x60;app&#x60;, and pass in an &#x60;interval&#x60;, in seconds. This interval represents the amount of time between blockchain transactions that will occur as you&#39;re adding &#x60;hashes&#x60; to &#x60;objects&#x60; in this &#x60;app&#x60;.  In effect, it&#39;s the \&quot;resolution\&quot; at which you&#39;re comfortable proving that your data exists.
   * @param {Object} opts Optional parameters
   * @param {module:model/AppInput} opts.body Send in &#x60;name&#x60; and &#x60;interval&#x60; to generate an &#x60;app&#x60; with a blockchain transaction resolution no less than the defined &#x60;interval&#x60; in seconds.
   * @param {module:api/AppsApi~createAppCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/AppOutputDetailed}
   */
  this.createApp = function({ name, interval }, callback) {
    var postBody = new AppInput(name, interval);

    var pathParams = {};
    var queryParams = {};
    var collectionQueryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['API Key'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = AppOutputDetailed;

    return this.apiClient.callApi(
      '/apps', 'POST',
      pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Callback function to receive the result of the findApps operation.
   * @callback module:api/AppsApi~findAppsCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/AppOutput>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * List Apps
   * List all &#x60;apps&#x60; belonging to a user
   * @param {module:api/AppsApi~findAppsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/AppOutput>}
   */
  this.findApps = function(callback) {
    var postBody = null;

    var pathParams = {};
    var queryParams = {};
    var collectionQueryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['API Key'];
    var contentTypes = [];
    var accepts = ['application/json'];
    var returnType = [AppOutput];

    return this.apiClient.callApi(
      '/apps', 'GET',
      pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Callback function to receive the result of the getApp operation.
   * @callback module:api/AppsApi~getAppCallback
   * @param {String} error Error message, if any.
   * @param {module:model/AppOutputDetailed} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get App
   * This endpoint will return details about a single &#x60;app&#x60;, given the &#x60;appId&#x60; passed in as the request parameter.
   * @param {String} appId 
   * @param {module:api/AppsApi~getAppCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/AppOutputDetailed}
   */
  this.getApp = function(appId, callback) {
    var postBody = null;

    // verify the required parameter 'appId' is set
    if (appId === undefined || appId === null) {
      throw new Error("Missing the required parameter 'appId' when calling getApp");
    }

    var pathParams = {
      'appId': appId
    };
    var queryParams = {};
    var collectionQueryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['API Key'];
    var contentTypes = [];
    var accepts = ['application/json'];
    var returnType = AppOutputDetailed;

    return this.apiClient.callApi(
      '/apps/{appId}', 'GET',
      pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
};

module.exports = exports;
