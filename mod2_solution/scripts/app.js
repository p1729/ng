(function() {
	angular.module("ShoppingListCheckOff",[])

	.controller("ToBuyController", ToBuyController)
	.controller("AlreadyBoughtController", AlreadyBoughtController)
	.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

	ToBuyController.$inject = ["ShoppingListCheckOffService"];
	function ToBuyController(ShoppingListCheckOffService) {
		var toBuyCtrl = this;
		toBuyCtrl.itemsToBuy = ShoppingListCheckOffService.getItemsToBy();
		toBuyCtrl.buyItem = ShoppingListCheckOffService.buyItem;
	};

	AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var boughtCtrl = this;
		boughtCtrl.itemsAlreadyBought = ShoppingListCheckOffService.getItemsAlreadyBought();
	};

	function ShoppingListCheckOffService() {
		var service = this;

		var itemsToBuy = [{
			name: "cookies",
			quantity: 10
		},{
			name: "orange",
			quantity: 5
		},{
			name: "apple",
			quantity: 5
		},{
			name: "chocolate",
			quantity: 15
		},{
			name: "pen",
			quantity: 10
		}];

		var itemsAlreadyBought = [];

		service.buyItem = function(index) {
			itemsAlreadyBought.push(itemsToBuy[index]);
			itemsToBuy.splice(index,1);
		};

		service.getItemsToBy = function() {
			return itemsToBuy;
		};

		service.getItemsAlreadyBought = function() {
			return itemsAlreadyBought;
		};
	};
})();