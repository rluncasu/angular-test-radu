/**
 * 1. Implement your code below to use angular
 * to make a REST call the 'API Posts' url
 * to get the data from the specified API and
 * display the resulting objects in the UI.
 * An example of the finished (displayed)
 * HTML is included.
 *
 */

 (function(){
   angular.module('ng.test').controller('PostsController', function ($scope, $http) {
     $http({
       method: 'GET',
       url: API_URL+'/posts'
     }).then(function successCallback(response) {
       $scope.posts = response.data;
     }, function errorCallback(response) {
       $scope.posts = [{
         title:'sorry',
         body:'no posts found'
       }];
     });
   });
 })();
