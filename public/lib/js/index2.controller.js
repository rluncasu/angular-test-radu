/**
 * 1. You can copy your code from index1.controller.js
 *
 * 2. Add a click event handler to show the selected (clicked)
 * post item's comments by calling the correct API 'API Comments'.
 * When the user clicks a post on the left, the comments for
 * that post display in a list in the left panel.
 *
 * See final/item-comments.png for an example of
 * the output as if the user clicke on the firt item in the list.
 *
 */

 (function(){
   angular.module('ng.test').controller('PostsController', function ($scope, $http) {
     //load posts
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
     $scope.getComments = function(postid) {
       $http({
         method: 'GET',
         url: API_URL+'/posts/'+postid+'/comments'
       }).then(function successCallback(response) {
         $scope.comments = response.data;
       }, function errorCallback(response) {
         $scope.comments = [{
           body:'no comments found'
         }];
       });
     }
   });
 })();
