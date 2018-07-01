[
	{
		"constant": true,
		"inputs": [],
		"name": "minter",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "firstLord",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newManager",
				"type": "address"
			}
		],
		"name": "addManager",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newTreasurer",
				"type": "address"
			}
		],
		"name": "setTreasurer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newCrown",
				"type": "address"
			}
		],
		"name": "changeCrown",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "crown",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "managerAddress",
				"type": "address"
			}
		],
		"name": "removeManager",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "thirdLord",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "secondLord",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newMinter",
				"type": "address"
			}
		],
		"name": "setMinter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "treasurer",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "fLord",
				"type": "address"
			},
			{
				"name": "sLord",
				"type": "address"
			},
			{
				"name": "tLord",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "crown",
				"type": "address"
			}
		],
		"name": "NewCrown",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "manager",
				"type": "address"
			}
		],
		"name": "NewManager",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "minter",
				"type": "address"
			}
		],
		"name": "NewMinter",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "manager",
				"type": "address"
			}
		],
		"name": "ManagerRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "treasurer",
				"type": "address"
			}
		],
		"name": "NewTreasurer",
		"type": "event"
	}
];
var KTC_contract;
var KTC;

window.App = {

// Инициализирует скрипт
init: function () {
    KTC_contract = web3.eth.contract(ABI);
    KTC = KTC_contract.at('0xB3c21434340BFdA10C3CB9A9906B45A8Cadd3427');
},

// Возвращает баланс пользователя
getBalance: function () {
    KTC.balanceOf(web3.eth.defaultAccount, (error, result) => {
        // TODO: Добавить сюда обработку результата
        console.log(result)
    })
},

// Отправляет токены
transfer: function (to, value) {
    KTC.transfer(to, value, (error, result) => {
        // TODO: Добавить сюда обработку результата
        console.log(result);
    })
},

// Разрешает адресу распоряжаться указанным количеством токенов
approve: function (address, value) {
    KTC.approve(address, value, (error, result) => {
        // TODO: Добавить сюда обработку результата
        console.log(result)
    })
},

burn: function (amount) {
    KTC.burn(amount, (error, result) => {
        // TODO: Добавить сюда обработку результата
        console.log(result)
    })
}, 

burnFrom: function (address, amount) {
    KTC.burnFrom(address, amount, (error, result) => {
        // TODO: Добавить сюда обработку результата
        console.log(result)
    })
},

// Эмитирует amount токенов на to адрес
mint: function (to, amount) {
    KTC.mint(to, amount, (error, result) => {
        // TODO: Добавить обработку
        console.log(result);
    })
},

addMinter: function (minter) {
    KTC.addMinter(minter, (error, result) => {
        // TODO: Добавить обработку
        console.log(result);
    })
},

removeMinter: function (minter) {
    KTC.removeMinter(minter, (error, result) => {
        // TODO: Handle
    })
},

addManager: function (manager) {
    KTC.addManager(minter, (error, result) => {
        // TODO: Handle
    })
},

removeManager: function (manager) {
    KTC.removeManager(manager, (error, result) => {
        // TODO: Handle
    })
},

mintRequest: function (address, amount, mintrequest) {
	KTC.mintRequest(address, amount, mintrequest, (error, result) => {
        // TODO: Handle
    })
},

mintApprove: function (mintRequest) {
	KTC.mintApprove(mintRequest, (error, result) => {
        // TODO: Handle
    })
},

mintComplete: function (mintRequest) {
	KTC.mintComplete(mintRequest, (error, result) => {
        // TODO: Handle
    })
},

setTreasurer: function (address) {
    KTC.setTreasurer(address, (error, result) => {
        // TODO: Handle
    })
},

setMinter: function (address) {
    KTC.setMinter(address, (error, result) => {
        // TODO: Handle
    })
},

createNewContract: function(supply, flord, slord, tlord) {
   KTC.createNewContract(supply, flord, slord, tlord, (errror, result) => {
	// TODO: KTC fabric
   })
}

changeCrown: function (address) {
    KTC.changeCrown(address, (error, result) => {
        // TODO: Handle
    })
}
}



window.addEventListener('load', function() {
    if (typeof web3 !== 'undefined') {
        console.log("MetaMask detected")
        web3 = new Web3(web3.currentProvider);
    } else {
        // TODO: Заставить пользователя скачать или настроить MetaMask
        console.warn("You should use MetaMask or Mist")
        window.alert("You should download MetaMask");
    }
   web3.eth.defaultAccount = web3.eth.accounts[0];
   App.init();
});
