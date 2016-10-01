(function(){
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.dishes = "";
  $scope.message = "Please enter data first";

  $scope.checkLunch = function () {
    var message = produceMessage($scope.dishes);
    $scope.message = message;
  };

  function produceMessage(string) {
    var splittedString = string.split(",")
    console.log(splittedString);
    console.log(splittedString.length);

    if (splittedString.length <= 0) {
      return "Please enter data first";
    }
    else if (splittedString.length <= 3) {
      return "Enjoy!";
    }
    else {
      return "Too much!";
    }
  }


}
})();
