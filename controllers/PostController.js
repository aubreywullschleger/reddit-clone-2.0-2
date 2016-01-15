app.controller('PostController', ['$scope', 'PostsService', '$location', function($scope, PostsService, $location) {

$scope.postObj = {
  date: new Date()
};

$scope.submitPost = function(isValid) {
  var postObj = {
    title: $scope.title,
    author: $scope.author,
    image: $scope.imageUrl,
    description: $scope.description,
    date: new Date(),
    votes: 0,
    comments: [],
    showState: false
  };

  if(isValid) {
    PostsService.set(postObj);
    $location.path('/');
  } else {
    alert('all fields are required');
  };
};
}]);
