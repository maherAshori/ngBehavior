/*
    SAF Company
    Maher Ashori
    Last Update: 18/03/2015
*/
angular.module('ngBehavior', ['ngSanitize'])
    .directive('ngInteger', function () {
        return {
            restrict: 'A',
            require: '^ngModel',
            link: function ($scope, elem, attrs, ngModel) {
                elem.on('input propertychange', function () {
                    if (/[^0-9]/g.test(ngModel.$viewValue)) {
                        $scope.$apply(function () {
                            ngModel.$setViewValue('');
                            elem.val('');
                        });
                        return false;
                    } else {
                        $scope.$apply(function () {
                            ngModel.$setViewValue(ngModel.$viewValue);
                        });
                        return true;
                    }
                });
            }
        };
    });
