
'use strict';


function HomeCtrl($scope) {
	$scope.pets=[];
	$scope.setofpets = function(){
		$scope.pets=[
		{
			img: "images/p1.jfif",
			Name:"Alfy",
			Category:"dog",
			Breed:"labrador",
			Age:"2 months"
		},
		{
			img: "images/p2.jpg",
			Name:"Coco",
			Category:"dog",
			Breed:"labrador",
			Age:"2 years"
		},
			{
			img: "images/p4.jpg",
			Name:"Ally",
			Category:"cat",
			Breed:"mno",
			Age:"3 years"
		},
			{
			img: "images/p3.jpg",
			Name:"Olly",
			Category:"cat",
			Breed:"lmn",
			Age:"4 years"
		},
			{
			img: "images/p6.jfif",
			Name:"Hoby",
			Category:"Birds",
			Breed:"Parrot",
			Age:"2 years"
		},
			{
			img: "images/p5.jpg",
			Name:"Blacky",
			Category:"birds",
			Breed:"love birds",
			Age:"1 year"
		},
		 ]
	}
	$scope.setofpets();
	}
function FCtrl($scope) {
     $scope.formInfo = {};
    $scope.saveData = function() {
    console.log($scope.formInfo);
    }
}

function ConCtrl($scope) {
    $scope.formInfo = {};
    $scope.savetheData = function() {
    console.log($scope.formInfo);
    }
}

function AbtCtrl($scope, $http, $timeout) {
}