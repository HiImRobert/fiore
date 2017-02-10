var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  $scope.products = [
  	{
    	img: "Imagine",
        produs: "Produs1",
        pret: "Pret1"
  	},
  	{
    	img: "Imagine",
        produs: "Produs2",
        pret: "Pret2"
  	}
  ];
});