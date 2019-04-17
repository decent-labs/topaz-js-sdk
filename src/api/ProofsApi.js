const ProofOutput = require('../model/ProofOutput');
const ProofOutputDetailed = require('../model/ProofOutputDetailed');

/**
 * Proofs service.
 * @module api/ProofsApi
 * @version 0.1.17
 */

/**
 * Constructs a new ProofsApi. 
 * @alias module:api/ProofsApi
 * @class
 * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
var exports = function(apiClient) {
  // verify the required parameter 'apiClient' is set
  if (apiClient === undefined || apiClient === null) {
    throw new Error("Missing the required parameter 'apiClient' when creating new instance of ProofsApi");
  }
  const api = apiClient;

  /**
   * Callback function to receive the result of the findProofs operation.
   * @callback module:api/ProofsApi~findProofsCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/ProofOutput>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * List Proofs
   * This endpoint will return all &#x60;proofs&#x60; associated with an &#x60;app&#x60;.
   * @param {String} appId 
   * @param {module:api/ProofsApi~findProofsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/ProofOutput>}
   */
  this.findProofs = function(callback) {
    var postBody = null;

    var pathParams = { appId: api.appId };
    var queryParams = {};
    var collectionQueryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['API Key'];
    var contentTypes = [];
    var accepts = ['application/json'];
    var returnType = [ProofOutput];

    return api.callApi(
      '/apps/{appId}/proofs', 'GET',
      pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }

  /**
   * Callback function to receive the result of the getProofs operation.
   * @callback module:api/ProofsApi~getProofsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ProofOutputDetailed} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get Proof
   * This endpoint will return details about a single proof, given the &#x60;proofId&#x60; passed in as the request parameter.
   * @param {String} appId 
   * @param {String} proofId 
   * @param {module:api/ProofsApi~getProofsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ProofOutputDetailed}
   */
  this.getProof = function(proofId, callback) {
    // verify the required parameter 'proofId' is set
    if (proofId === undefined || proofId === null) {
      throw new Error("Missing the required parameter 'proofId' when calling getProof");
    }

    var postBody = null;

    var pathParams = { appId: api.appId, proofId };
    var queryParams = {};
    var collectionQueryParams = {};
    var headerParams = {};
    var formParams = {};

    var authNames = ['API Key'];
    var contentTypes = [];
    var accepts = ['application/json'];
    var returnType = ProofOutputDetailed;

    return api.callApi(
      '/apps/{appId}/proofs/{proofId}', 'GET',
      pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, callback
    );
  }
};

module.exports = exports;
