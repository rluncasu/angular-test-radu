/**
 * 1. You can copy your code from index2.controller.js
 *
 * 2. Refactor your code to create a service to perform the
 * AJAX call. Place your service code into a separate file.
 */

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
    angular.module('ng.test', ['api.module'])

        .controller('PostsController', function ($scope, apiService) {
            // Initialize the data
            $scope.posts = [];
            $scope.comments = [];

            apiService.getPosts(function (data) {
                    $scope.posts = data;
            });

            $scope.getComments = function(postId) {
                apiService.getComments(postId, function (data) {
                    $scope.comments = data;
                });
            };
        });
 })();
