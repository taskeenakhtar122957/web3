
const Web3 = require('web3');
const rpcURL = "https://mainnet.infura.io/v3/fa596d01f4ce4f94be970568fb031f94";
const account = "0x45FE0e957451C15E2B373F2693Cb5f26d7e93634";

const web3 = new Web3(rpcURL);


let ABI = require("./04_abi.js") ;
const contractAddress = "0xE83CCCfABD4eD148903Bf36d4283eE7C8b3494D1";


const contractRead = async() => {
    try{
        const contract = new web3.eth.Contract(ABI, contractAddress);
        let readingTrax = await contract.methods._totalSupply().call();
        console.log('Call_Out_Put', readingTrax)
    }
    catch (error) {
        console.log('error', error)
    }
}

contractRead()
