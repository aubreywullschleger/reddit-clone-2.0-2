var app = angular.module('redditCloneApp', ['ngRoute', 'angularMoment']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './views/home.html',
    controller: 'DisplayPostController'
  })
  .when('/new', {
    templateUrl: './views/newPost.html',
    controller: 'PostController'
  })

}]);
