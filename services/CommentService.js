app.service('CommentService', function() {
  this.toggle = function(arr){
    console.log('show comments button was clicked');
    console.log(arr);
    // arr.visible = !arr.visible;
  };
});
