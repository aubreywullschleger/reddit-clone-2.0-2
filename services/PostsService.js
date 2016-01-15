app.factory('PostsService', function() {
 var savedData = [];
 function set(data) {
   savedData.push(data);
 }
 function get() {
  return savedData;
 }

 return {
  set: set,
  get: get
 }

});
