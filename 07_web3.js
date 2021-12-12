
const Web3 = require('web3');
const rpcURL = "https://mainnet.infura.io/v3/fa596d01f4ce4f94be970568fb031f94";
const web3 = new Web3(rpcURL);


// Get average gas price in wei from last few blocks median gas price

// getting in wie
web3.eth.getGasPrice().then(console.log);

// getting in ether
web3.eth.getGasPrice().then((result) => {
  console.log(web3.utils.fromWei(result, 'ether'))
});




// Use sha256 Hashing function

const doHash = web3.utils.sha3('testing_hashing_in_web3');
console.log("SHA3 hashing", doHash);

console.log(web3.utils.sha3('testing_hashing_in_web3'));




// Use keccak256 Hashing function (alias)

const doHashing = web3.utils.keccak256('testing_hashing_in_web3');
console.log("keccak256 hashing", doHashing);

console.log(web3.utils.keccak256('testing_hashing_in_web3'));





// Get a Random Hex
console.log(web3.utils.randomHex(32))
console.log(web3.utils.randomHex(64))
console.log(web3.utils.randomHex(16))
console.log(web3.utils.randomHex(8))


