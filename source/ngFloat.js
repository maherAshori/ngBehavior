/*
    SAF Company
    Maher Ashori
    Last Update: 18/03/2015
*/
angular.module('ngBehavior', ['ngSanitize'])
    .directive('ngFloat', function ($sce) {
        return {
            restrict: 'A',
            require: '^ngModel',
            link: function ($scope, elem, attrs, ngModel) {
                elem.keypress(function (event) {
                    if (event.which < 46 || event.which > 59) {
                        event.preventDefault();
                    }
                    if (event.which == 46 && $(this).val().indexOf('.') != -1) {
                        event.preventDefault();
                    }
                });
            }
        };
    });
