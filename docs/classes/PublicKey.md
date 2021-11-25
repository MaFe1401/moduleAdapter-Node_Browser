# Class: PublicKey

## Table of contents

### Constructors

- [constructor](PublicKey.md#constructor)

### Properties

- [e](PublicKey.md#e)
- [n](PublicKey.md#n)

### Methods

- [encrypt](PublicKey.md#encrypt)
- [verify](PublicKey.md#verify)

## Constructors

### constructor

• **new PublicKey**(`e`, `n`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `bigint` |
| `n` | `bigint` |

#### Defined in

rsa.ts:5

## Properties

### e

• **e**: `bigint`

#### Defined in

rsa.ts:3

___

### n

• **n**: `bigint`

#### Defined in

rsa.ts:4

## Methods

### encrypt

▸ **encrypt**(`m`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `bigint` |

#### Returns

`bigint`

#### Defined in

rsa.ts:10

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

rsa.ts:14
