var kanjs = angular.module('kanjs', [
    'ngRoute',
    'ngAnimate',
    'kanjsCtrl',
    'loaderCtrl'
]);


kanjs.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/jlpt', {
        templateUrl: 'partials/kanji.html',
        controller: 'KanjiListCtrl'
    }).
    when('/about', {
        templateUrl: 'partials/about.html'
    }).
    otherwise({
        redirectTo: '/jlpt'
    });
}]);
