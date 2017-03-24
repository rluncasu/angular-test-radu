/**
 * 1. Copy the code you created in index3.controller2.js
 * into this file.
 * 
 * 2. Create an Angular 'ui widget' to further 'modularize'
 * the HTML code you created in exercise 2 for the left panel.
 * Place your 'widget' code into another file.
 */

(function(){
    angular.module('ng.test', ['api.module', 'directive.module'])

        .controller('PostsController', function ($scope) {
            // Everything is handled inside directives
        });
 })();
