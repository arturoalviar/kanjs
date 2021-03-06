var kanjsCtrl = angular.module('kanjsCtrl', []);

kanjsCtrl.controller('KanjiListCtrl', ['$scope', '$http', function ($scope, $http){
    $scope.$emit('LOAD');
    $http.get('data/jlpt.json').success(function(data){
        $scope.kanji = data;
        $scope.$emit('UNLOAD');
    });

    $scope.limitAdd = 25;
    $scope.limit = 50;

    $scope.items = [
        {name: "JLPT 2", value: 2},
        {name: "JLPT 3", value: 3},
        {name: "JLPT 4", value: 4},
        {name: "JLPT 5", value: 5}
    ];

    $scope.moreKanji = function(){
        $scope.limit += $scope.limitAdd;
    };

}]);


var loaderCtrl = angular.module('loaderCtrl', []);

loaderCtrl.controller('LoadContentCtrl', ['$scope', function($scope){

    $scope.$on('LOAD', function(){$scope.loading = true;});
    $scope.$on('UNLOAD', function(){$scope.loading = false;});

}]);
