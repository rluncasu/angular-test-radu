(function(){
    angular.module('directive.module', ['api.module'])

        .directive('postItems', function ($rootScope, apiService) {
            return {
                restrict: 'E',
                templateUrl: '/lib/js/directive/postItems.html',
                link: function (scope, element, attrs) {
                    scope.posts = [];

                    apiService.getPosts(function (data) {
                        scope.posts = data;
                    });

                    scope.getComments = function(postId) {
                        $rootScope.$broadcast('post-selected', { postId: postId });
                    };
                }
            }
        })

        .directive('commentItems', function (apiService) {
            return {
                restrict: 'E',
                templateUrl: '/lib/js/directive/commentItems.html',
                link: function (scope, element, attrs) {
                    scope.comments = [];
                    scope.$on('post-selected', function(event, data) {
                        apiService.getComments(data.postId, function (data) {
                            scope.comments = data;
                        });
                    });
                }
            }
        })
 })();
