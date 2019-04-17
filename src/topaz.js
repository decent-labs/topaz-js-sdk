const ApiClient = require('./ApiClient');
const HashCommon = require('./model/HashCommon');
const HashStubOutput = require('./model/HashStubOutput');
const HashstuboutputHashes = require('./model/HashstuboutputHashes');
const ObjectCommon = require('./model/ObjectCommon');
const ProofCommon = require('./model/ProofCommon');
const HashInput = require('./model/HashInput');
const HashOutput = require('./model/HashOutput');
const ObjectInput = require('./model/ObjectInput');
const ObjectOutput = require('./model/ObjectOutput');
const ProofInput = require('./model/ProofInput');
const ProofOutput = require('./model/ProofOutput');
const HashOutputDetailed = require('./model/HashOutputDetailed');
const ObjectOutputDetailed = require('./model/ObjectOutputDetailed');
const ProofOutputDetailed = require('./model/ProofOutputDetailed');
const HashesApi = require('./api/HashesApi');
const ObjectsApi = require('./api/ObjectsApi');
const ProofsApi = require('./api/ProofsApi');

/**
 * _Topaz_API_SpecTo_get_up_and_running_with_Topaz_API_as_quickly_as_possible_read_through_these_docs__PrerequisitesCreate_an_account_at__httpstopaz_io_httpstopaz_io_log_in_and_generate_an_API_Token_Youll_need_an_API_Token_to_create_a_new_app_create_objects_create_hashes_and_view_proofs_All_API_requests_should_be_prefixed_with_v1_indicating_that_youre_targeting_version_1_of_our_API__GuaranteeTopaz_API_follows_Semantic_Versioning__httpssemver_org_so_expect_that_any_breaking_changes_will_be_versioned_under_a_new_route_prefix_.<br>
 * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
 * <p>
 * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
 * <pre>
 * var TopazApi = require('index'); // See note below*.
 * var xxxSvc = new TopazApi.XxxApi(); // Allocate the API class we're going to use.
 * var yyyModel = new TopazApi.Yyy(); // Construct a model instance.
 * yyyModel.someProperty = 'someValue';
 * ...
 * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
 * ...
 * </pre>
 * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
 * and put the application logic within the callback function.</em>
 * </p>
 * <p>
 * A non-AMD browser application (discouraged) might do something like this:
 * <pre>
 * var xxxSvc = new TopazApi.XxxApi(); // Allocate the API class we're going to use.
 * var yyy = new TopazApi.Yyy(); // Construct a model instance.
 * yyyModel.someProperty = 'someValue';
 * ...
 * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
 * ...
 * </pre>
 * </p>
 * @module index
 * @version 0.1.17
 */
var exports = {
  /**
   * The ApiClient constructor.
   * @property {module:ApiClient}
   */
  ApiClient: ApiClient,
  /**
   * The HashCommon model constructor.
   * @property {module:model/HashCommon}
   */
  HashCommon: HashCommon,
  /**
   * The HashStubOutput model constructor.
   * @property {module:model/HashStubOutput}
   */
  HashStubOutput: HashStubOutput,
  /**
   * The HashstuboutputHashes model constructor.
   * @property {module:model/HashstuboutputHashes}
   */
  HashstuboutputHashes: HashstuboutputHashes,
  /**
   * The ObjectCommon model constructor.
   * @property {module:model/ObjectCommon}
   */
  ObjectCommon: ObjectCommon,
  /**
   * The ProofCommon model constructor.
   * @property {module:model/ProofCommon}
   */
  ProofCommon: ProofCommon,
  /**
   * The HashInput model constructor.
   * @property {module:model/HashInput}
   */
  HashInput: HashInput,
  /**
   * The HashOutput model constructor.
   * @property {module:model/HashOutput}
   */
  HashOutput: HashOutput,
  /**
   * The ObjectInput model constructor.
   * @property {module:model/ObjectInput}
   */
  ObjectInput: ObjectInput,
  /**
   * The ObjectOutput model constructor.
   * @property {module:model/ObjectOutput}
   */
  ObjectOutput: ObjectOutput,
  /**
   * The ProofInput model constructor.
   * @property {module:model/ProofInput}
   */
  ProofInput: ProofInput,
  /**
   * The ProofOutput model constructor.
   * @property {module:model/ProofOutput}
   */
  ProofOutput: ProofOutput,
  /**
   * The HashOutputDetailed model constructor.
   * @property {module:model/HashOutputDetailed}
   */
  HashOutputDetailed: HashOutputDetailed,
  /**
   * The ObjectOutputDetailed model constructor.
   * @property {module:model/ObjectOutputDetailed}
   */
  ObjectOutputDetailed: ObjectOutputDetailed,
  /**
   * The ProofOutputDetailed model constructor.
   * @property {module:model/ProofOutputDetailed}
   */
  ProofOutputDetailed: ProofOutputDetailed,
  /**
   * The HashesApi service constructor.
   * @property {module:api/HashesApi}
   */
  HashesApi: HashesApi,
  /**
   * The ObjectsApi service constructor.
   * @property {module:api/ObjectsApi}
   */
  ObjectsApi: ObjectsApi,
  /**
   * The ProofsApi service constructor.
   * @property {module:api/ProofsApi}
   */
  ProofsApi: ProofsApi
};

module.exports = exports;
