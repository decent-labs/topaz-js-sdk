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
const BlockchainTransaction = require('./model/BlockchainTransaction');
const HashesApi = require('./api/HashesApi');
const ObjectsApi = require('./api/ObjectsApi');
const ProofsApi = require('./api/ProofsApi');

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
   * The BlockchainTransaction model constructor.
   * @property {module:model/BlockchainTransaction}
   */
  BlockchainTransaction: BlockchainTransaction,
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
