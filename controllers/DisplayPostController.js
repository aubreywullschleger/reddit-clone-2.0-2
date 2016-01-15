app.controller('DisplayPostController', ['$scope', 'PostsService', function($scope, PostsService) {
  $scope.posts = PostsService.get();

  $scope.query = {};
  $scope.queryBy = 'title';

  $scope.showComments = function(b) {
    b.showState = true;
  };

  $scope.addComment = function(b) {
    b.comments.push(b.newComment);
  };

  $scope.upvote = function(obj) {
    obj.votes += 1;
  };

  $scope.downvote = function(obj) {
    obj.votes -= 1;
  };
}]);
