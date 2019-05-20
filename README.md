# topaz-js-sdk

Javascript SDK for Topaz

- API version: 0.2.1
- Package version: 0.2.0

For more information, please visit [Topaz](https://topaz.io).

If you'd like to learn more about the API, view the [Topaz API docs](https://topaz.docs.stoplight.io).

## Getting Started

### Philosophy

Topaz makes use of three concepts to secure data on the blockchain: `objects`, `hashes`, and `proofs`.

* `objects` refer to a specific thing, such as a document, a row in a database, or a signature.

* `hashes` refer to the hashed state of a specific `object` over time.

* `proofs` refer to the cryptographic proof generated from `hashes` and stored on the blockchain.

For example, if one wished to create an audit trail for a legal document, one could:

* Create an `object` representing the legal document `nda.pdf`.

* Append a `hash` to the `object` from the current state of `nda.pdf`.

* Use the `proof` associated with that `hash` to verify the existence and integrity of `nda.pdf` over time.


### Prerequisites

* Download and install the latest version of [node](https://nodejs.org).

* Download and install the latest version of [yarn](https://yarnpkg.com) or [npm](https://npmjs.com).

### Installation

Install Topaz via:

```shell
yarn add topaz
```

or

```shell
npm install topaz --save
```

### Tutorial

Follow the instructions above, then require `topaz` in your project. `your-api-key` and `your-app-id` can be generated via the [Topaz web app](https://topaz.io).

```javascript
const topaz = require('topaz')({ apiKey: 'your-api-key', appId: 'your-app-id' });
```

Topaz uses a combination of cryptography and blockchain technology to secure data. The easiest way to start using Topaz is to use the `trust()` and `verify()` helper functions.

#### trust

This function allows you to secure data on the blockchain via Topaz. It accepts data as input and creates an `object` and `hash` representing it.

```javascript
const valuableData = 'my valuable data';

topaz.trust(valuableData).then(console.log);
```

It should return:

```javascript
{
  data: 'my valuable data',
  object: {
    appId: 'a91d6514-4ace-4357-baa1-dea2d90e9c21',
    id: '29cb3c6a-eb43-41f0-b5d4-3a8d5a10d276',
    hashes: [{
      id: 'efba09b7-1a10-4673-b5d3-1e42d8715977',
      hash: 'QmRNRBDUT6MvSnA7pRHM7yPT8HMdzEzNHjs57TKNtQo8jQ'
    }]
  }
}
```

This function optionally takes an object's `id` as a second parameter.

```javascript
const valuableData = 'my valuable data';
const objectId = '29cb3c6a-eb43-41f0-b5d4-3a8d5a10d276';

topaz.trust(valuableData, objectId).then(console.log);
```

In this case, `trust()` will append the hash of `valuableData` to an object that already exists. This is how Topaz updates the state of an object.

Every Topaz app has a set interval, or period of time it takes for a `proof` to be created for a `hash` and secured on the blockchain. Once your app's interval has passed, you can verify your data in real-time against it's associated `object` in Topaz.

#### verify

This function allows you to verify data on the blockchain via Topaz. It accepts data and an `objectId` as input, and returns the verification results of that data.

```javascript
const valueableData = 'my valuable data';
const objectId = '29cb3c6a-eb43-41f0-b5d4-3a8d5a10d276';

topaz.verify(valuableData, objectId).then(console.log);
```

It should return:

```javascript
{
  appId: 'a91d6514-4ace-4357-baa1-dea2d90e9c21',
  id: '29cb3c6a-eb43-41f0-b5d4-3a8d5a10d276',
  hashes:[{
    id: 'efba09b7-1a10-4673-b5d3-1e42d8715977',
    hash: 'QmRNRBDUT6MvSnA7pRHM7yPT8HMdzEzNHjs57TKNtQo8jQ',
    proof: {
      id: '41954453-82b6-4885-8938-e4e1ecc2d0c3',
      merkleRoot: 'QmR1XC1rT7Phd6NX3bA219orD4Pt4dmdGKmC5eg74xp42P',
      unixTimestamp: 1556031914,
      appId: 'aea3c236-a1d8-48ed-a174-aceea19839e8',
      hashes: [{
        id: 'efba09b7-1a10-4673-b5d3-1e42d8715977',
        hash: 'QmRNRBDUT6MvSnA7pRHM7yPT8HMdzEzNHjs57TKNtQo8jQ'
      }],
      blockchainTransactions: [{
        blockchainNetwork: "ethereum goerli",
        transactionHash: "0x4f7b12bdc99e10a4abcdff9b1c70b58032fbb4c1ae5c96a1e43e7a63e0123a5b",
        explorers: [
          "https://goerli.etherscan.io/tx/0x4f7b12bdc99e10a4abcdff9b1c70b58032fbb4c1ae5c96a1e43e7a63e0123a5b",
          "https://blockscout.com/eth/goerli/tx/0x4f7b12bdc99e10a4abcdff9b1c70b58032fbb4c1ae5c96a1e43e7a63e0123a5b/internal_transactions"
        ]
      }]
    }
  }],
  verified: 'latest'
}
```

This response will return all of the `proofs` that contain the `hash` of the data input into the `verify()` function. This is all of the information needed to verify the existence of data at a point in time. For more information on `proofs`, view the [Topaz API docs](https://topaz.docs.stoplight.io).

### Advanced Functionality

The Topaz JavaScript SDK also provides convenient methods for each of the Topaz API endpoints.

All functions support JavaScript promises *and* callbacks, which can be added as the last parameter in a function call.

#### objects

##### objects.create

This function creates a new `object`.

```javascript
topaz.objects.create().then(console.log);
```

or

```javascript
topaz.objects.create(console.log);
```

should return:

```javascript
{
  appId: '431ca6dc-0ad0-4b66-a13c-59f7967b664a',
  id: 'a3a5709f-6d55-4757-b2cf-13acc20c04a2',
  hashes: []
}
```

##### objects.find

This function returns all of the `objects` associated with your app.

```javascript
topaz.objects.find().then(console.log);
```

or

```javascript
topaz.objects.find(console.log);
```

should return:

```javascript
[
  {
    appId: '88ec6e52-65ed-483a-b507-bc51ec4d3ab4',
    id: 'cc73133c-f666-4590-a00d-f240f771beb9'
  },
  {
    appId: '88ec6e52-65ed-483a-b507-bc51ec4d3ab4',
    id: '61428921-089f-4e07-8478-ccb34d95b9d5'
  }
]
```

##### objects.get

This function returns a single `object`.

```javascript
const objectId = '8535ce2b-f4d8-49fe-b1ab-aa389af3b377';

topaz.objects.get(objectId).then(console.log);
```

or

```javascript
const objectId = '8535ce2b-f4d8-49fe-b1ab-aa389af3b377';

topaz.objects.get(objectId, console.log);
```

should return:

```javascript
{
  appId: 'b4ea626a-0730-43da-ae19-239a895d58d5',
  id: '8535ce2b-f4d8-49fe-b1ab-aa389af3b377',
  hashes: []
}
```

#### hashes

##### hashes.create

This function appends a new `hash` to an `object`.

To create a new `hash` manually, you'll need to convert your data to a Base58 encoded `multihash`.

Learn more about `multihash` [here](https://github.com/multiformats/multihash).

The Topaz JavaScript SDK includes a utility function that takes binary-like data and returns a Base58 encoded `multihash`.

```javascript
const dataHash = topaz.utils.hash('my valuable data');
```

You can now use `dataHash` as input to create a new Topaz `hash`.

```javascript
const objectId = '8535ce2b-f4d8-49fe-b1ab-aa389af3b377';
topaz.hashes.create(objectId, { hash: dataHash }).then(console.log);
```

or

```javascript
const objectId = '8535ce2b-f4d8-49fe-b1ab-aa389af3b377';
topaz.hashes.create(objectId, { hash: dataHash }, console.log);
```

should return:

```javascript
{
  hash: 'QmRNRBDUT6MvSnA7pRHM7yPT8HMdzEzNHjs57TKNtQo8jQ',
  id: '1917b485-c456-4f61-8ef0-b80fd38235db',
  unixTimestamp: 1556036177,
  objectId: '8535ce2b-f4d8-49fe-b1ab-aa389af3b377',
  proofId: null
}
```

##### hashes.find

This function returns all of the `hashes` associated with your app.

```javascript
const objectId = '8535ce2b-f4d8-49fe-b1ab-aa389af3b377';

topaz.hashes.find(objectId).then(console.log);
```

or

```javascript
const objectId = '8535ce2b-f4d8-49fe-b1ab-aa389af3b377';

topaz.hashes.find(objectId, console.log);
```

should return:

```javascript
[
  {
    hash: 'QmRNRBDUT6MvSnA7pRHM7yPT8HMdzEzNHjs57TKNtQo8jQ',
    id: '8d2b9318-968a-4710-af39-1c6b90b803b4',
    unixTimestamp: 1556036303,
    objectId: '8535ce2b-f4d8-49fe-b1ab-aa389af3b377',
    proofId: 'f9959e96-4235-4243-a3a1-b575077a5ae0'
  },
  {
    hash: 'QmW7HtDZYtsB9CM1vmWqbfiTKvqDX6N9G71kaYWimKNyaU',
    id: 'ebe8e364-96f5-4d44-ae18-6054635058c0',
    unixTimestamp: 1556036303,
    objectId: '8535ce2b-f4d8-49fe-b1ab-aa389af3b377',
    proofId: '5f7a7890-2706-4789-bbdc-6c2a58530f87'
  }
]
```

##### hashes.get

This function returns a single `hash`.

```javascript
const objectId = '8535ce2b-f4d8-49fe-b1ab-aa389af3b377';
const hashId = 'efba09b7-1a10-4673-b5d3-1e42d8715977';

topaz.hashes.get(objectId, hashId).then(console.log);
```

or

```javascript
const objectId = '8535ce2b-f4d8-49fe-b1ab-aa389af3b377';
const hashId = 'efba09b7-1a10-4673-b5d3-1e42d8715977';

topaz.hashes.get(objectId, hashId, console.log);
```

should return:

```javascript
{
  hash: 'QmRNRBDUT6MvSnA7pRHM7yPT8HMdzEzNHjs57TKNtQo8jQ',
  id: 'efba09b7-1a10-4673-b5d3-1e42d8715977',
  unixTimestamp: 1556036452,
  objectId: '8535ce2b-f4d8-49fe-b1ab-aa389af3b377',
  proofId: '6e3204d4-8b3c-4057-b30f-5538eaacdf22'
}
```

#### proofs

##### proofs.find

This function returns all of the `proofs` associated with your app.

```javascript
topaz.proofs.find().then(console.log);
```

or

```javascript
topaz.proofs.find(console.log);
```

should return:

```javascript
[
  {
    id: '8c2ae6f9-d26e-49b1-b43d-ad516c87bf51',
    merkleRoot: 'QmR1XC1rT7Phd6NX3bA219orD4Pt4dmdGKmC5eg74xp42P',
    unixTimestamp: 1556036504,
    appId: 'e36355b5-5595-4223-94c7-62d791ae6ed4'
  },
  {
    id: '2949af0a-9a51-4c8a-b15e-06c4dd5afe93',
    merkleRoot: 'QmQQkBSv66afHg4X6TqHMxdYnDyCd47kKWDytHksrydFuG',
    unixTimestamp: 1556037031,
    appId: 'e36355b5-5595-4223-94c7-62d791ae6ed4'
  },
]
```

##### proofs.get

This function returns a single `proof`.

```javascript
const proofId = '41954453-82b6-4885-8938-e4e1ecc2d0c3';

topaz.proofs.get(proofId).then(console.log);
```

or

```javascript
const proofId = '41954453-82b6-4885-8938-e4e1ecc2d0c3';

topaz.proofs.get(proofId, console.log);
```

should return:

```javascript
{
  id: '41954453-82b6-4885-8938-e4e1ecc2d0c3',
  merkleRoot: 'QmR1XC1rT7Phd6NX3bA219orD4Pt4dmdGKmC5eg74xp42P',
  unixTimestamp: 1556031914,
  appId: 'aea3c236-a1d8-48ed-a174-aceea19839e8',
  hashes: [{
    id: 'efba09b7-1a10-4673-b5d3-1e42d8715977',
    hash: 'QmRNRBDUT6MvSnA7pRHM7yPT8HMdzEzNHjs57TKNtQo8jQ'
  }],
  blockchainTransactions: [{
    blockchainNetwork: "ethereum goerli",
    transactionHash: "0x4f7b12bdc99e10a4abcdff9b1c70b58032fbb4c1ae5c96a1e43e7a63e0123a5b",
    explorers: [
      "https://goerli.etherscan.io/tx/0x4f7b12bdc99e10a4abcdff9b1c70b58032fbb4c1ae5c96a1e43e7a63e0123a5b",
      "https://blockscout.com/eth/goerli/tx/0x4f7b12bdc99e10a4abcdff9b1c70b58032fbb4c1ae5c96a1e43e7a63e0123a5b/internal_transactions"
    ]
  }
}
```

-----

Made with 🖤 in:
* Cleveland, OH
* Miami, FL
