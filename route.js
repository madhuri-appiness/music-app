var app = angular.module("app", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../home/home.html',
            controller: 'musicAppCtrl'
        })
        .when('/detail/:id', {

            templateUrl: '../musicdetail/detail.html',
            controller: 'detailCtrl'
        })
})