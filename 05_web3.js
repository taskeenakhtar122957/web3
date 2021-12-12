
const Web3 = require('web3');
const rpcURL = "https://mainnet.infura.io/v3/fa596d01f4ce4f94be970568fb031f94";
const web3 = new Web3(rpcURL);


let ABI = require("./04_abi.js") ;
const contractAddress = "0xE83CCCfABD4eD148903Bf36d4283eE7C8b3494D1";


const contractEventCall = async() => {
    try{  
        const contract = new web3.eth.Contract(ABI, contractAddress);

        // getting 3rd transfer event from the block number 11100000 onward 
        let getEvent = await contract.getPastEvents('Transfer',{
            fromBlock:  11100000,
            toBlock: "latest"
        });
        console.log("Transfer", getEvent[3]);

        // getting total number of event after block number 11100000
        let getAllEvents = await contract.getPastEvents('AllEvents',{
            fromBlock:  11100000,
            toBlock: "latest"
        });
        console.log("No of Total Events", getAllEvents.length);
    }
    catch (error) {
        console.log('error', error)
    }   
}
contractEventCall()
