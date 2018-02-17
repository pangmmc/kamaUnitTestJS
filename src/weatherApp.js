var app = angular.module('weatherApp', []);

app.factory('weatherService', function () {
    var service = {};

    service.getWeathers = function () {
        var cities = [
            {'name': 'Bangkok', 'temp': 32},
            {'name': 'San Francisco', 'temp': 13},
            {'name': 'Los Angeles', 'temp': 14},
            {'name': 'Taipei', 'temp': 21}
        ];
        return cities;
    };

    return service;
});

app.controller('weatherController', function ($scope, $http, weatherService) {

    $scope.cities = weatherService.getWeathers();

    $scope.cityNames = $scope.cities.map(function (city) {
        return city.name.toLowerCase();
    });

    $scope.search = function (cityName) {
        var cityIndex = $scope.cityNames.indexOf(cityName.toLowerCase());
        var city = $scope.cities[cityIndex];
        return city;
    };


 });