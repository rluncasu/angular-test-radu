(function(){
    angular.module('api.module', [])

        .factory('apiService', function ($http) {

            return {

                getPosts: function (callback) {
                    return $http({
                        method: 'GET',
                        url: API_URL+'/posts'
                    }).then(function successCallback(response) {
                        callback(response.data);
                    }, function errorCallback(response) {
                        callback([{
                            title:'sorry',
                            body:'no posts found'
                        }]);
                    });
                },

                getComments: function(postId, callback) {
                    return $http({
                        method: 'GET',
                        url: API_URL+'/posts/'+postId+'/comments'
                    }).then(
                        function successCallback(response) {
                            callback(response.data);
                        },
                        function errorCallback(response) {
                            callback([{
                              body:'no comments found'
                            }]);
                        }
                    );
                }
            }
        });
 })();
