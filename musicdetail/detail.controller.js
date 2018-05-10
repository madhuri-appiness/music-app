app.controller('detailCtrl', function($scope, $http, fetchDataService, $routeParams) {

    // fetchDataService.getData().then(function(data) {
    //     $scope.responseList = data.feed.entry;
    //     // console.log("data", $scope.responseList);

    // });
    $scope.responseList = fetchDataService.AllData();
    console.log("data", $scope.responseList);
    $scope.getLikeCount = false;
    $scope.likecount = 10;
    $scope.getlike = function() {
        $scope.getLikeCount = true;
        $scope.likecount++;
    }
})