(function() {

angular.module("LunchCheck",[])

.controller("LunchCheckController",LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.lunchMenu = "";
	
	$scope.menuCheck = function() {
		
		var items = $scope.lunchMenu.split(",");
		var pureItems = items.filter(function(item) {
			console.log(item.trim().length);
			return item.trim().length > 0;
		});
		var noOfItems = pureItems.length;
		
		if($scope.lunchMenu && noOfItems) {			
			if(noOfItems <= 3 ) {
				$scope.message = "Enjoy!";
			} else {
				$scope.message = "Too much!";
			}		
		} else {
			$scope.message = "Please enter data first";
		}
	};
};


})();