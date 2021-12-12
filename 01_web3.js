 
const Web3 = require('web3');
const rpcURL = "https://mainnet.infura.io/v3/fa596d01f4ce4f94be970568fb031f94";
const account = "0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8";


const web3 = new Web3(rpcURL);


web3.eth.getBalance(account, (_err, wei) => {
    console.log("balance in wei", wei);

    balance = web3.utils.fromWei(wei, 'ether');
    console.log("balance in ether", balance);
})
