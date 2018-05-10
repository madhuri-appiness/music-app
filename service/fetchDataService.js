// var app = angular.module("app", ['ngRoute']);
app.service('fetchDataService', function($http) {
    var that = this;
    this.getData = function() {
        return $http.get("https://itunes.apple.com/in/rss/topalbums/limit=100/json")
            .then(function(response) {

                var arr = [];
                var jsonStringify = function(arr) {
                    var result = {};
                    for (var property in arr) {
                        if (typeof arr[property] === 'object') {
                            arr[property] = jsonStringify(arr[property])
                        }
                        result[property.replace(/:/g, '')] = arr[property];

                    }
                    return result;
                }
                JSON.stringify(jsonStringify(response.data.feed.entry));
                return response.data;

            })

    };

    this.setData = function(data) {
        that.dataList = data;

    }
    this.AllData = function(data) {
        return that.dataList;
    }


})