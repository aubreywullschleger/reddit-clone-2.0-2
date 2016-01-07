app.controller('PostController', ['$scope', 'CommentService', function($scope, CommentService) {

$scope.postObj = {
  date: new Date()
};

$scope.posts = [];

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
    $scope.posts.push(postObj);
  } else {
    alert('all fields are required');
  };
};

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
