export declare class PublicKey {
    e: bigint;
    n: bigint;
    constructor(e: bigint, n: bigint);
    encrypt(m: bigint): bigint;
    verify(s: bigint): bigint;
}
export declare class PrivateKey {
    d: bigint;
    pubKey: PublicKey;
    constructor(d: bigint, pubKey: PublicKey);
    decrypt(c: bigint): bigint;
    verify(s: bigint): bigint;
}
export declare function generateKeys(bitlength?: number): {
    pubKey: PublicKey;
    privKey: PrivateKey;
};
//# sourceMappingURL=rsa.d.ts.map