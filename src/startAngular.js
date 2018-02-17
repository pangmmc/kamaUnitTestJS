var app = angular.module("startAngularApp", []);

app.service('StartAngularService', ['$http', function ($http) {

    return {
        "serviceGetData": function() {
            return $http.get('service.php', {});
        }
    };

}]);

app.controller("startAngularCtrl", function($scope, StartAngularService) {

    $scope.init = function(){
        $scope.test(1);
    }

    $scope.callAPIData = function(){
        return StartAngularService.serviceGetData();
    }

    $scope.getData = function(){
       $scope.callAPIData().then(getSuccess);
    }

    function getSuccess(res){
        (res.data.name == 'Pong Pang') ? $scope.firstName = 'Pong Pang' : $scope.firstName = 'Mint Must';
    }

    $scope.test = function(id){
        $scope.getData();
        var ret;
        (id == 1) ? ret = "Pong Pang" : ret = "Mint";
        return ret;
    }

});