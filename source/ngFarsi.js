/*
    SAF Company
    Maher Ashori
    Last Update: 18/03/2015
*/
angular.module('ngBehavior', ['ngSanitize'])
    .directive('ngFarsi', function ($sce) {
        return {
            restrict: 'A',
            require: '^ngModel',
            link: function ($scope, elem, attrs, ngModel) {

                var noNumber = attrs.number;
                var replaceSpecialWord = attrs.arabicToFarsiWord;

                //
                if (noNumber == "false") {
                    elem.on('input propertychange', function () {
                        if (/[^\u0600-\u06FF ]/g.test(ngModel.$viewValue)) {
                            $scope.$apply(function () {
                                ngModel.$setViewValue('');
                                var s = elem.val();
                                s = s.replace(/[a-zA-Z0-9?><;,{}[\]\-_+=!@#$%\^&*|']*/g, '');
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
                        if (/[^\u0600-\u06FF-\^0-9 ]/g.test(ngModel.$viewValue)) {
                            $scope.$apply(function () {
                                ngModel.$setViewValue('');
                                var s = elem.val();
                                s = s.replace(/[a-zA-Z0-9?><;,{}[\]\-_+=!@#$%\^&*|']*/g, '');
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
                if (noNumber == "false" && replaceSpecialWord == "true") {
                    elem.on('input propertychange', function () {
                        ngModel.$setViewValue('');
                        var s = elem.val();
                        $scope.$apply(function () {
                            s = s.replace(/[a-zA-Z0-9?><;,{}[\]\-_+=!@#$%\^&*|']*/g, '');
                            s = s.replace('ي', 'ی');
                            s = s.replace('ك', 'ک');
                            elem.val(s);
                        });
                    });
                }
                //
                if (noNumber == "true" && replaceSpecialWord == "true") {
                    elem.on('input propertychange', function () {
                        ngModel.$setViewValue('');
                        var s = elem.val();
                        $scope.$apply(function () {
                            s = s.replace(/[a-zA-Z?><;,{}[\]\-_+=!@#$%\^&*|']*/g, '');
                            s = s.replace('ي', 'ی');
                            s = s.replace('ك', 'ک');
                            elem.val(s);
                        });
                    });
                }
            }
        };
    });
