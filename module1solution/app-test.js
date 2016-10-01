(function(){
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.dishes = "";
  $scope.message = "";
  $scope.textColor="red";
  $scope.borderColor=""//black
  $scope.emptyArrays=0;

  $scope.checkLunch = function () {
    $scope.emptyArrays = realCount($scope.dishes);
    var message = produceMessage($scope.dishes,$scope.emptyArrays);
    $scope.message = message;
  };

  function realCount(string){
    var array = string.split(",");
    var pointsToTake = 0;
    if (string.length ==0){
      console.log("do nothing");
    }
    else{
      for (var i=0;i<=array.length-1;i++){

        if (array[i].length==0){
          pointsToTake+=1;
          console.log("points to take "+pointsToTake);
        }
      }
      return pointsToTake;
    }
  }
  function produceMessage(string,pointsToTake) {
    var splittedString = string.split(",")
    if(string.length ==0){
      $scope.textColor="red";
      $scope.borderColor="#ff0000"//red
      return "Please enter data first";
    }
    else if (string.length==pointsToTake) {
    }
    else{
      $scope.borderColor="#2cbe0c"//green
      $scope.textColor="#2cbe0c";
      if(splittedString.length-pointsToTake<=3){
        return "Enjoy!";
      }
      else{
        return "Too much!";
      }
    }
  }
}
})();
