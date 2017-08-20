(function() {
	angular.module("NarrowItDownApp", [])
	.constant("API_BASE_URL", "https://davids-restaurant.herokuapp.com")
	.controller("NarrowItDownController", NarrowItDownController)
	.service("MenuSearchService", MenuSearchService)
	.directive("foundItems", FoundItemsDirective);

	function FoundItemsDirective() {
		var ddo = {
			scope: {
				items: "<",
				onRemove: "&onRemove"
			},
			templateUrl: 'templates/foundItems.html'
		};
		return ddo;
	}

	NarrowItDownController.$inject = ["MenuSearchService"];
	function NarrowItDownController(MenuSearchService) {
		var searchCtrl = this;
		
		searchCtrl.search = function() {
			MenuSearchService
			.getMatchedMenuItems(searchCtrl.searchTerm)
			.then(function (foundItems) {
				searchCtrl.found = foundItems;
			});
		};

		searchCtrl.remove = function(index) {
			searchCtrl.found.splice(index,1);
		};
	};

	MenuSearchService.$inject = ["$http","API_BASE_URL"];
	function MenuSearchService($http, API_BASE_URL) {
		var service = this;

		service.getMatchedMenuItems = function(searchTerm) {
			var promise = $http({
				method: "GET",
				url: (API_BASE_URL + "/menu_items.json")
			}).then(function (response) {
				var foundItems = [];
				response.data.menu_items.forEach(function (item) {
					if(item.description.indexOf(searchTerm)!=-1) {
						foundItems.push(item);
					}
				});
					
				return foundItems;
			});

			return promise;
		};
	};

})();