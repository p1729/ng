(function() {

angular.module("LunchCheck",[])

.controller("LunchCheckController",LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.lunchMenu = "";
	
	$scope.menuCheck = function() {
		
		var self = this;
		var items = self.lunchMenu.split(",");
		var pureItems = items.filter(function(item) {
			console.log(item.trim().length);
			return item.trim().length > 0;
		});
		var noOfItems = pureItems.length;
		
		if(self.lunchMenu && noOfItems) {			
			if(noOfItems <= 3 ) {
				self.message = "Enjoy!";
			} else {
				self.message = "Too much!";
			}		
		} else {
			self.message = "Please enter data first";
		}
	};
};


})();