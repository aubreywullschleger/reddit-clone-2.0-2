app.factory('PostsService', function() {
 var savedData = [];
 function set(data) {
   savedData.push(data);
   console.log(data);
 }
 function get() {
  return savedData;
 }

 return {
  set: set,
  get: get
 }

});
