/*
    SAF Company
    Maher Ashori
    Last Update: 18/03/2015
*/
angular.module('ngBehavior', ['ngSanitize'])
    .directive('ngEnglish', function ($sce) {
        return {
            restrict: 'A',
            require: '^ngModel',
            link: function ($scope, elem, attrs, ngModel) {

                var noNumber = attrs.number;
                //
                if (noNumber == "false") {
                    elem.on('input propertychange', function () {
                        if (/[^A-Za-z]/g.test(ngModel.$viewValue)) {
                            $scope.$apply(function () {
                                ngModel.$setViewValue('');
                                var s = elem.val();
                                s = s.replace(/[^A-Za-z]/g, '');
                                elem.val(s);
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
                //
                if (noNumber == "true") {
                    elem.on('input propertychange', function () {
                        if (/[^A-Za-z0-9]/g.test(ngModel.$viewValue)) {
                            $scope.$apply(function () {
                                ngModel.$setViewValue('');
                                var s = elem.val();
                                s = s.replace(/[^A-Za-z0-9]/g, '');
                                elem.val(s);
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
            }
        };
    });
