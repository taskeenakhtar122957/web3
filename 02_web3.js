 
const Web3 = require("web3");
const rpcURL = "https://rinkeby.infura.io/v3/fa596d01f4ce4f94be970568fb031f94";
const Tx = require("ethereumjs-tx").Transaction;


const web3 = new Web3(rpcURL);


const accountS = "0x45FE0e957451C15E2B373F2693Cb5f26d7e93634";
const Private_Key = 'Private_Key';
const Private_KeyS = Buffer.from(Private_Key, 'hex');

const accountR = "0xbAB34d3D9f5E1f69179e8f099133237336C0dd68";


web3.eth.getTransactionCount(accountS, (err, txCount) => {
    console.log("Nonce value:", txCount);

    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: accountR,
        value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }

    const tx = new Tx(txObject, { 'chain': 'rinkeby' });
    tx.sign(Private_KeyS);
    const serialize = tx.serialize();
    const txHex = '0x' + serialize.toString('hex');

    web3.eth.sendSignedTransaction(txHex, (err, txHash) => {
        if (!err) {
            console.log('Transaction Seccessful:', txHash);
        } else {
            console.log('Transaction Error:', error);
        }
    });
})
