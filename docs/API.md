# my-rsa - v0.9.4

My module description. Please update with your module data.

**`remarks`**
This module runs perfectly in node.js and browsers

## Table of contents

### Classes

- [PrivateKey](classes/PrivateKey.md)
- [PublicKey](classes/PublicKey.md)

### Functions

- [generateKeys](API.md#generatekeys)
- [helloWorld](API.md#helloworld)

## Functions

### generateKeys

▸ **generateKeys**(`bitlength?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `bitlength` | `number` | `2048` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `privKey` | [`PrivateKey`](classes/PrivateKey.md) |
| `pubKey` | [`PublicKey`](classes/PublicKey.md) |

#### Defined in

rsa.ts:35

___

### helloWorld

▸ **helloWorld**(`name`): `string`

Returns the a Hello to the input string name

**`remarks`** An example function that runs different code in Node and Browser javascript

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name to say hello to |

#### Returns

`string`

A gratifying Hello to the input name

#### Defined in

hello-world.ts:10
