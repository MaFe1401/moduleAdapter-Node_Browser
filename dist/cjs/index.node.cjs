'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bcu = require('bigint-crypto-utils');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var bcu__namespace = /*#__PURE__*/_interopNamespace(bcu);

/**
 * Returns the a Hello to the input string name
 *
 * @remarks An example function that runs different code in Node and Browser javascript
 *
 * @param name - The name to say hello to
 *
 * @returns A gratifying Hello to the input name
 */
function helloWorld(name) {
    const text = `Hello ${name}!`;
    {
        console.log(`Node.js says "${text}"`);
    }
    return text;
}

class PublicKey {
    constructor(e, n) {
        this.e = e;
        this.n = n;
    }
    encrypt(m) {
        return bcu__namespace.modPow(m, this.e, this.n);
    }
    verify(s) {
        return bcu__namespace.modPow(s, this.e, this.n);
    }
}
class PrivateKey {
    constructor(d, pubKey) {
        this.d = d;
        this.pubKey = pubKey;
    }
    decrypt(c) {
        return bcu__namespace.modPow(c, this.d, this.pubKey.n);
    }
    verify(s) {
        return bcu__namespace.modPow(s, this.d, this.pubKey.n);
    }
}
function generateKeys(bitlength = 2048) {
    var p = bcu__namespace.primeSync(Math.round(bitlength / 2) + 1);
    var q = bcu__namespace.primeSync(Math.round(bitlength / 2));
    var n = p * q;
    var phi = (p - BigInt(1)) * (q - BigInt(1));
    var e = BigInt(65537);
    var d = bcu__namespace.modInv(e, phi);
    var pubKey = new PublicKey(e, n);
    var privKey = new PrivateKey(d, pubKey);
    return { pubKey, privKey };
}

exports.PrivateKey = PrivateKey;
exports.PublicKey = PublicKey;
exports.generateKeys = generateKeys;
exports.helloWorld = helloWorld;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubm9kZS5janMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cy9oZWxsby13b3JsZC50cyIsIi4uLy4uL3NyYy90cy9yc2EudHMiXSwic291cmNlc0NvbnRlbnQiOm51bGwsIm5hbWVzIjpbImJjdSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O1NBU2dCLFVBQVUsQ0FBRSxJQUFZO0lBQ3RDLE1BQU0sSUFBSSxHQUFHLFNBQVMsSUFBSSxHQUFHLENBQUE7SUFHdEI7UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixJQUFJLEdBQUcsQ0FBQyxDQUFBO0tBQ3RDO0lBQ0QsT0FBTyxJQUFJLENBQUE7QUFDYjs7TUNoQmEsU0FBUztJQUdwQixZQUFhLENBQVMsRUFBRSxDQUFTO1FBQy9CLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ1YsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDWDtJQUVELE9BQU8sQ0FBRSxDQUFTO1FBQ2hCLE9BQU9BLGNBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ3JDO0lBRUQsTUFBTSxDQUFFLENBQVM7UUFDZixPQUFPQSxjQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUNyQztDQUNGO01BQ1ksVUFBVTtJQUlyQixZQUFhLENBQVMsRUFBRSxNQUFpQjtRQUN2QyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0tBQ3JCO0lBRUQsT0FBTyxDQUFFLENBQVM7UUFDaEIsT0FBT0EsY0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQzVDO0lBRUQsTUFBTSxDQUFFLENBQVM7UUFDZixPQUFPQSxjQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FDNUM7Q0FDRjtTQUNlLFlBQVksQ0FBRSxZQUFvQixJQUFJO0lBQ3BELElBQUksQ0FBQyxHQUFXQSxjQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQzVELElBQUksQ0FBQyxHQUFXQSxjQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDeEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNiLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDM0MsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3JCLElBQUksQ0FBQyxHQUFHQSxjQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUMxQixJQUFJLE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ3ZDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUE7QUFDNUI7Ozs7Ozs7In0=
