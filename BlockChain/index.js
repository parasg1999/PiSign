if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
        



web3.eth.defaultAccount = web3.eth.accounts[0];
var VerContract = web3.eth.contract([
	{
		"constant": true,
		"inputs": [
			{
				"name": "message",
				"type": "bytes32"
			},
			{
				"name": "sig",
				"type": "bytes"
			}
		],
		"name": "recoverSigner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "sig",
				"type": "bytes"
			}
		],
		"name": "splitSignature",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	}
]);
var Veri = VerContract.at('0xd4D90B48ab8911d525A74dc5FEa411d44369EceD');
//console.log(Veri)
console.log(Veri.recoverSigner('0x3ea2f1d0abf3fc66cf29eebb70cbd4e7fe76ef8a09bcc06c8edf641230afec0','0x006eae90bf4f17ccd4d4286a4e62c5ff789e1b630157f331f59a94bd8e6d45be1d8c83f30272ff451ed60be438b3101e70be88657353700e4b0724d9673526a21b'));