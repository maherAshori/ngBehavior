/*
    SAF Company
    Maher Ashori
    Last Update: 18/03/2015
*/
angular.module('ngBehavior', ['ngSanitize'])
   .directive('ngFocus', function ($timeout) {
       return function (scope, elem, attrs, ctrl) {
           if (attrs.ngFocus == "true") {
               $(elem).focus();
           }

           if (!ctrl) {
               return;
           }
           
           elem.on('focus', function () {
               elem.addClass('has-focus');
               scope.$apply(function () {
                   ctrl.hasFocus = true;
               });
           });
       };
   });
