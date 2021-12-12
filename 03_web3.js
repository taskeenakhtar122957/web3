const Web3 = require("web3");
const rpcURL = "https://ropsten.infura.io/v3/80c615a196014e1ca02ebafef471988d";
const Tx = require("ethereumjs-tx").Transaction;

const web3 = new Web3(rpcURL);

const accountS = "0x45FE0e957451C15E2B373F2693Cb5f26d7e93634";
const Private_Key = 'Private_Key';
const Private_KeyS = Buffer.from(Private_Key, 'hex');

const accountR = "0xbAB34d3D9f5E1f69179e8f099133237336C0dd68";

let bytecode = require("./contractbytecode.js") ;

const byteCodeBuffer = Buffer.from(bytecode, 'hex');


const contractDeploy = async() => {
    try {
        // creating transaction object 
        let txCount = await web3.eth.getTransactionCount(accountS);
        const txObject = {
            nonce: web3.utils.toHex(txCount),
            data: byteCodeBuffer,
            gasLimit: web3.utils.toHex(6000000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
        }    
       
        // signing transaction with private key
        const tx = new Tx(txObject, { chain: 'ropsten', hardfork: 'petersburg' });
        tx.sign(Private_KeyS);
        const serialized = tx.serialize();
        const raw = '0x' + serialized.toString('hex');
        

        // sending transaction on blockchain
        const singedTransaction =  await web3.eth.sendSignedTransaction(raw);
        console.log("singedTransaction", singedTransaction);
    }
    catch (error) {
        console.log('error', error)
    }
}

contractDeploy()
