describe('การทดสอบไฟล์ JS StartAngular', function () {

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

    // it('เมื่อเรียกฟังก์ชั่น init() ค่าของ firstName ต้องเท่ากับ Pong Pang', function () {

    //     startAngularController.getData();

    //     expect().toBe("Pong Pang");
    // });


});