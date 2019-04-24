# Topaz JS SDK

Javascript client for Topaz

- API version: 0.1.21
- Package version: 0.1.1

For more information, please visit [https://topaz.io](https://topaz.io).

If you'd like to learn more about how the API works, wiew the [API docs](https://topaz.docs.stoplight.io).

## Installation

### npm / yarn

Install `topaz` via:

```shell
npm install topaz --save
```

or

```shell
yarn add topaz
```

## Getting Started

Please follow the installation instructions, then require `topaz`.

```javascript
const topaz = require('topaz')({ apiKey: 'your-api-key', appId: 'your-app-id' })
```

The easiest way to start using `topaz` is to use the `trust()` and `verify()` helper functions.

```javascript
// trust your valuable data into the topaz provenance engine
const valuableData = 'my valuable data';

topaz.trust(valuableData).then(console.log);
// {
//   data: 'my valuable data',
//   object: {
//     appId: 'a91d6514-4ace-4357-baa1-dea2d80e9c21',
//     id: '29cb3c6a-eb43-41f0-b5d4-3a8d5a10d276',
//     hashes: [{
//       id: 'efba09b7-1a10-4673-b5d3-1e42d8715977',
//       hash: 'QmRNRBDUT6MvSnA7pRHM7yPT8HMdzEzNHjs57TKNtQo8jQ'
//     }]
//   }
// }
```

## 🕒 🕞 🕓

```javascript
// some time later (after your app's proofing interval has expired), call verify() to get a proof that your data existed at a point in time
topaz.verify(valuableData, newObject.id).then(console.log);
// {
//   appId: 'aea3c236-a1d8-48ed-a174-aceea19839e8',
//   id: '8535ce2b-f4d8-49fe-b1ab-aa389af3b377',
//   hashes:[{
//     id: 'efba09b7-1a10-4673-b5d3-1e42d8715977',
//     hash: 'QmRNRBDUT6MvSnA7pRHM7yPT8HMdzEzNHjs57TKNtQo8jQ',
//     proof: {
//       id: '41954453-82b6-4885-8938-e4e1ecc2d0c3',
//       merkleRoot: 'QmR1XC1rT7Phd6NX3bA219orD4Pt4dmdGKmC5eg74xp42P',
//       ethTransaction: '0x4f7b12bdc99e10a4abcdff9b1c70b58032fbb4c1ae5c96a1e43e7a63e0123a5b',
//       unixTimestamp: 1556031914,
//       appId: 'aea3c236-a1d8-48ed-a174-aceea19839e8',
//       hashes: [{
//         id: 'efba09b7-1a10-4673-b5d3-1e42d8715977',
//         hash: 'QmRNRBDUT6MvSnA7pRHM7yPT8HMdzEzNHjs57TKNtQo8jQ'
//       }]
//     }
//   }],
//   verified: 'latest'
// }
```

Due to the nature of the Topaz provenance engine, each "proof" can consist of many "hashes".

When verifying an "object", given the current state of that object's data and the objects id, the full list of hashes that have existed for that object are returned.

`verify()` will return back all proofs that contain the current state of your data.

## Advanced functionality

The Topaz API is somewhat RESTful, and this Javascript SDK implements those endpoints.

All functions below support Javascript Promises, as well as callbacks, which can added as the last parameter.

`topaz` should be required into the project before attempting any function calls.

```javascript
const topaz = require('topaz')({ apiKey: 'your-api-key', appId: 'your-app-id' });
```

### Objects

Create a new object.

```javascript
topaz.objects.create().then(console.log);

// or, create with a callback
topaz.objects.create(console.log);

// {
//   appId: '431ca6dc-0ad0-4b66-a13c-59f7967b664a',
//   id: 'a3a5709f-6d55-4757-b2cf-13acc20c04a2',
//   hashes: []
// }
```

Find all of your objects.

```javascript
topaz.objects.find().then(console.log);

// [
//   {
//     appId: '88ec6e52-65ed-483a-b507-bc51ec4d3ab4',
//     id: 'cc73133c-f666-4590-a00d-f240f771beb9'
//   },
//   {
//     appId: '88ec6e52-65ed-483a-b507-bc51ec4d3ab4',
//     id: '61428921-089f-4e07-8478-ccb34d95b9d5'
//   }
// ]
```

Get a single object.

```javascript
const objectId = '8535ce2b-f4d8-49fe-b1ab-aa389af3b377';
topaz.objects.get(objectId).then(console.log);

// {
//   appId: 'b4ea626a-0730-43da-ae19-239a895d58d5',
//   id: '8535ce2b-f4d8-49fe-b1ab-aa389af3b377',
//   hashes: []
// }
```

### Hashes

Create a new hash on an object.

To create a new hash, you'll need to pass the hash as a Base58 encoded `multihash`.

Learn more about `multihash` here: https://github.com/multiformats/multihash

This library provides a utility function which takes binarylike data and returns a Base58 encoded `multihash`

```javascript
const objectId = '8535ce2b-f4d8-49fe-b1ab-aa389af3b377';
const dataHash = topaz.utils.hash('my valuable data');
topaz.hashes.create(objectId, { hash: dataHash }).then(console.log);

// {
//   hash: 'QmRNRBDUT6MvSnA7pRHM7yPT8HMdzEzNHjs57TKNtQo8jQ',
//   id: '1917b485-c456-4f61-8ef0-b80fd38235db',
//   unixTimestamp: 1556036177,
//   objectId: '8535ce2b-f4d8-49fe-b1ab-aa389af3b377',
//   proofId: null
// }
```

Find all of your hashes.

```javascript
const objectId = '8535ce2b-f4d8-49fe-b1ab-aa389af3b377';
topaz.hashes.find(objectId).then(console.log);

// [
//   {
//     hash: 'QmRNRBDUT6MvSnA7pRHM7yPT8HMdzEzNHjs57TKNtQo8jQ',
//     id: '8d2b9318-968a-4710-af39-1c6b90b803b4',
//     unixTimestamp: 1556036303,
//     objectId: '8535ce2b-f4d8-49fe-b1ab-aa389af3b377',
//     proofId: 'f9959e96-4235-4243-a3a1-b575077a5ae0'
//   },
//   {
//     hash: 'QmW7HtDZYtsB9CM1vmWqbfiTKvqDX6N9G71kaYWimKNyaU',
//     id: 'ebe8e364-96f5-4d44-ae18-6054635058c0',
//     unixTimestamp: 1556036303,
//     objectId: '8535ce2b-f4d8-49fe-b1ab-aa389af3b377',
//     proofId: '5f7a7890-2706-4789-bbdc-6c2a58530f87'
//   }
// ]
```

Get a single hash.

```javascript
const objectId = '8535ce2b-f4d8-49fe-b1ab-aa389af3b377';
const hashId = 'efba09b7-1a10-4673-b5d3-1e42d8715977';
topaz.hashes.get(objectId, hashId).then(console.log);

// {
//   hash: 'QmRNRBDUT6MvSnA7pRHM7yPT8HMdzEzNHjs57TKNtQo8jQ',
//   id: 'efba09b7-1a10-4673-b5d3-1e42d8715977',
//   unixTimestamp: 1556036452,
//   objectId: '8535ce2b-f4d8-49fe-b1ab-aa389af3b377',
//   proofId: '6e3204d4-8b3c-4057-b30f-5538eaacdf22'
// }
```

### Proofs

Find all of your proofs.

```javascript
topaz.proofs.find().then(console.log);

// [
//   {
//     id: '8c2ae6f9-d26e-49b1-b43d-ad516c87bf51',
//     merkleRoot: 'QmR1XC1rT7Phd6NX3bA219orD4Pt4dmdGKmC5eg74xp42P',
//     ethTransaction: '0x8124b9427f27fa40cbbe797bdf6cc2c9b49bbc1d976f521fff142576fb86728c',
//     unixTimestamp: 1556036504,
//     appId: 'e36355b5-5595-4223-94c7-62d791ae6ed4'
//   },
//   {
//     id: '2949af0a-9a51-4c8a-b15e-06c4dd5afe93',
//     merkleRoot: 'QmQQkBSv66afHg4X6TqHMxdYnDyCd47kKWDytHksrydFuG',
//     ethTransaction: '0xb28a5d576ce463faf5925e5b9418340bc510ec8da2e8cd3137640960c0a82bd4',
//     unixTimestamp: 1556037031,
//     appId: 'e36355b5-5595-4223-94c7-62d791ae6ed4'
//   },
// ]
```

Get a single proof.

Getting a single proof returns a list of all hashes which contributed to that proof.

```javascript
const proofId = '41954453-82b6-4885-8938-e4e1ecc2d0c3';
topaz.proofs.get(proofId).then(console.log);

// {
//   id: '41954453-82b6-4885-8938-e4e1ecc2d0c3',
//   merkleRoot: 'QmR1XC1rT7Phd6NX3bA219orD4Pt4dmdGKmC5eg74xp42P',
//   ethTransaction: '0x4f7b12bdc99e10a4abcdff9b1c70b58032fbb4c1ae5c96a1e43e7a63e0123a5b',
//   unixTimestamp: 1556031914,
//   appId: 'aea3c236-a1d8-48ed-a174-aceea19839e8',
//   hashes: [{
//     id: 'efba09b7-1a10-4673-b5d3-1e42d8715977',
//     hash: 'QmRNRBDUT6MvSnA7pRHM7yPT8HMdzEzNHjs57TKNtQo8jQ'
//   }]
// }
```
