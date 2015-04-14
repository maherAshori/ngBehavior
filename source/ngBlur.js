/*
    SAF Company
    Maher Ashori
    Last Update: 18/03/2015
*/
angular.module('ngBehavior', ['ngSanitize'])
   .directive('ngBlur', function ($timeout) {
       return function (scope, elem, attrs) {
           elem.bind('blur', function () {
               scope.$apply(attrs.ngBlur);
           });
       };
   });
