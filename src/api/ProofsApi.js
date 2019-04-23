const ProofOutput = require('../model/ProofOutput');
const ProofOutputDetailed = require('../model/ProofOutputDetailed');

var exports = function(apiClient) {
  if (apiClient === undefined || apiClient === null) {
    throw new Error("Missing the required parameter 'apiClient' when creating new instance of ProofsApi");
  }
  const api = apiClient;

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

  this.getProof = function(proofId, callback) {
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
