var app = angular.module("startAngularApp", []);

app.controller("startAngularCtrl", function($scope, $http) {

    $scope.init = function(){
        $scope.getData();
    }

    $scope.callAPIData = function(){
        return $http.get("service.php", {});
    }

    $scope.getData = function(){
        $scope.callAPIData().then(getSuccess);
    }

    function getSuccess(res){
        $scope.firstName = res.data.name;
        console.log(res.data.name)
    }

});