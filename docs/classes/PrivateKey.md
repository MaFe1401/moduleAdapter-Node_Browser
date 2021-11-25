# Class: PrivateKey

## Table of contents

### Constructors

- [constructor](PrivateKey.md#constructor)

### Properties

- [d](PrivateKey.md#d)
- [pubKey](PrivateKey.md#pubkey)

### Methods

- [decrypt](PrivateKey.md#decrypt)
- [verify](PrivateKey.md#verify)

## Constructors

### constructor

• **new PrivateKey**(`d`, `pubKey`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `d` | `bigint` |
| `pubKey` | [`PublicKey`](PublicKey.md) |

#### Defined in

rsa.ts:22

## Properties

### d

• **d**: `bigint`

#### Defined in

rsa.ts:19

___

### pubKey

• **pubKey**: [`PublicKey`](PublicKey.md)

#### Defined in

rsa.ts:20

## Methods

### decrypt

▸ **decrypt**(`c`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `bigint` |

#### Returns

`bigint`

#### Defined in

rsa.ts:27

___

### verify

▸ **verify**(`s`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `bigint` |

#### Returns

`bigint`

#### Defined in

rsa.ts:31
