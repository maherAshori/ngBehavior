/*
    SAF Company
    Maher Ashori
    Last Update: 18/03/2015
*/
angular.module('ngBehavior', ['ngSanitize'])
    .directive('ngCurrency', [
        '$filter', function($filter) {
            return {
                require: '^ngModel',
                link: function(scope, elem, attrs, ctrl) {
                    if (!ctrl) return;
                    ctrl.$formatters.unshift(function(a) {
                        return $filter("number")(ctrl.$modelValue);
                    });
                    ctrl.$parsers.unshift(function(viewValue) {
                        var plainNumber = viewValue.replace(/[^\d|\-+|\.+]/g, '');
                        elem.val($filter("number")(plainNumber));
                        return plainNumber;
                    });
                }
            };
        }
    ]);
