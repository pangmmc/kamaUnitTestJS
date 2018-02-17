describe('การทดสอบไฟล์ JS StartAngular', function () {

    var controllerService = null;
    var startAngularController = null;
    var scope = {};
    var http = {};

    beforeEach(function(){ // เรียกใช้งานเป็น Method แรกก่อน Run Test Case
        angular.mock.module('startAngularApp');
        angular.mock.inject(function ($controller) {  // Mock controllerService ขึ้นมาใช้งาน
            controllerService = $controller;
        });
        startAngularController = controllerService('startAngularCtrl', {$scope: scope, $http : http});
    });

    it('เมื่อ id == 1 ต้อง Return Pong Pang', function () {
        expect(scope.test(1)).toBe("Pong Pang");
    });

    it('เมื่อ id != 1 ต้อง Return Mint', function () {
        expect(scope.test(2)).toBe("Mint");
    });

});