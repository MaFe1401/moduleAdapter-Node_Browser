import * as bcu from 'bigint-crypto-utils'
export class PublicKey {
  e: bigint // Public exponent
  n: bigint // Public modulous
  constructor (e: bigint, n: bigint) {
    this.e = e
    this.n = n
  }

  encrypt (m: bigint): bigint {
    return bcu.modPow(m, this.e, this.n)
  }

  verify (s: bigint): bigint {
    return bcu.modPow(s, this.e, this.n)
  }
}
export class PrivateKey {
  d: bigint // Private exponent
  pubKey: PublicKey // Private key can contain all info

  constructor (d: bigint, pubKey: PublicKey) {
    this.d = d
    this.pubKey = pubKey
  }

  decrypt (c: bigint): bigint {
    return bcu.modPow(c, this.d, this.pubKey.n)
  }

  verify (s: bigint): bigint { // Verify a signature
    return bcu.modPow(s, this.d, this.pubKey.n)
  }
}
export function generateKeys (bitlength: number = 2048): {pubKey: PublicKey, privKey: PrivateKey} {
  var p: bigint = bcu.primeSync(Math.round(bitlength / 2) + 1)
  var q: bigint = bcu.primeSync(Math.round(bitlength / 2))
  var n = p * q
  var phi = (p - BigInt(1)) * (q - BigInt(1))
  var e = BigInt(65537)
  var d = bcu.modInv(e, phi)
  var pubKey = new PublicKey(e, n)
  var privKey = new PrivateKey(d, pubKey)
  return { pubKey, privKey }
}
