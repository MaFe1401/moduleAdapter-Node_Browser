
describe('testing function encrypt, decrypt, generateKeys with ts file in the test directory', function () {
  const inputs = [BigInt(35643), BigInt(976722)]
  for (const input of inputs) {
    describe(`privKey.decrypt(pubKey.encrypt(${input}))`, function () {
      it(`should return "${input}!"`, function () {
        let keys = _pkg.generateKeys()
        let pubKey = keys.pubKey
        let privKey = keys.privKey
        const ret = privKey.decrypt(pubKey.encrypt(input))
        chai.expect(ret).to.equal(input)
      })
    })
  }
})
