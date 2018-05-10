app.controller('musicAppCtrl', function($scope, $http, fetchDataService, $location, $routeParams, $log) {

    $scope.result = fetchDataService.getData();
    $scope.result.then(function(data) {
        $scope.result = data.feed;
        $scope.responseList = data.feed.entry;
        // console.log("data", $scope.responseList)
        var detailarr = [];
        $scope.getDetail = function(id) {
            angular.forEach($scope.responseList, function(item) {
                if (id === item.id.attributes.imid) {
                    var param = {
                        id: item.id.attributes.imid
                    }
                    detailarr.push(item)

                    $location.path('detail/' + param.id);
                    console.log("id", id)
                    console.log("id", item.id.attributes.imid)
                }
            })
            fetchDataService.setData(detailarr);
            //$scope.responseList = detailarr;
            console.log("arr", $scope.responseList)
        }


    })
});