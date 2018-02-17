describe('weatherService', function () {

    var controllerService = null;
    var weatherController = null;
    var service = null;
    var scope = {};


    beforeEach(function(){ // เรียกใช้งานเป็น Method แรกก่อน Run Test Case
        angular.mock.module('weatherApp');

        angular.mock.inject(function ($controller) {  // Mock controllerService ขึ้นมาใช้งาน
            controllerService = $controller;
        });
        weatherController = controllerService('weatherController', {$scope: scope});

        angular.mock.inject(function (weatherService) { // Mock weatherService ขึ้นมาใช้งาน
            service = weatherService;
        });
    });

    it('getWeathers should return 4 cities', function () {


        expect(service.getWeathers().length).toBe(4);
    });

    it('ทดสอบฟังก์ชั่นใน controller', function () {
        var apiTest = scope.getData();
        console.log("debug : " + scope.getData())
        var city = scope.search('bangkok');
        expect(city.name).toBe('Bangkok');
        expect(city.temp).toBe(32);
    });

    it('ทดสอบความยาวของฟังก์ชั่น getData', function () {
        expect(scope.getData().length).toBe(2);
    });

});