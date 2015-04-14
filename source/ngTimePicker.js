/*
    SAF Company
    Maher Ashori
    Last Update: 18/03/2015
*/
angular.module('ngBehavior', ['ngSanitize'])
    .directive('ngTimePicker', function () {
        var template = '<div class="timepicker">' +
            "<span><input type=\"text\" maxlength=\"2\" ng-integer ng-blur=\"checkTime()\" ng-model=\"timespan.second\" ng-keydown=\"changeTime($event, 'second')\" tabindex=\"3\" placeholder=\"{{secondDesc}}\" /></span>" +
            "<span><input type=\"text\" maxlength=\"2\" ng-integer ng-blur=\"checkTime()\" ng-model=\"timespan.minute\" ng-keydown=\"changeTime($event, 'minute')\" tabindex=\"2\" placeholder=\"{{minuteDesc}}\" /></span>" +
            "<span><input type=\"text\" maxlength=\"2\" ng-integer ng-blur=\"checkTime()\" ng-model=\"timespan.hour\" ng-keydown=\"changeTime($event, 'hour')\" tabindex=\"1\" placeholder=\"{{hourDesc}}\" /></span>" +
            "</div>";
        return {
            restrict: 'E',
            require: '^ngModel',
            scope: {
                format: "@",
                time: "@",
                lang: "@"
            },
            link: function (scope, elem, attrs, ngModel) {
                scope.setMyTime = function (h, m, s) { ngModel.$setViewValue(h + ":" + m + ":" + s); }
                scope.$watch('timespan.hour', function (hour) { scope.setMyTime(hour, scope.timespan.minute, scope.timespan.second); });
                scope.$watch('timespan.minute', function (minute) { scope.setMyTime(scope.timespan.hour, minute, scope.timespan.second); });
                scope.$watch('timespan.second', function (second) { scope.setMyTime(scope.timespan.hour, scope.timespan.minute, second); });
            },
            template: template,
            controller: function ($scope) {
                if ($scope.lang == "fa") {
                    $scope.hourDesc = "ساعت";
                    $scope.minuteDesc = "دقیقه";
                    $scope.secondDesc = "ثانیه";
                } else if ($scope.lang == "en") {
                    $scope.hourDesc = "H";
                    $scope.minuteDesc = "M";
                    $scope.secondDesc = "S";
                }



                $scope.timespan = { hour: 0, minute: 0, second: 0 };
                if ($scope.format == null) {
                    $scope.format = 12;
                }
                $scope.setEstimateTime = function (time) {
                    var hour = time.substring(0, 2);
                    var minute = time.substring(3, 5);
                    var second = time.substring(6, 8);
                    $scope.timespan.hour = hour;
                    $scope.timespan.minute = minute;
                    $scope.timespan.second = second;
                }
                $scope.setEstimateTime($scope.time);
                $scope.changeTime = function (event, type) {
                    var hMinTime = 1;
                    var keyCode, maxTime, minTime, hourChanged, minuteChanged, secondChanged;
                    minTime = 0;
                    keyCode = event.keyCode;
                    switch (type) {
                        case 'hour':
                            maxTime = $scope.format;
                            break;
                        case 'minute':
                            maxTime = 60;
                            minuteChanged = true;
                            break;
                        case 'second':
                            maxTime = 60;
                            secondChanged = true;
                            break;
                        default:
                    }

                    $scope.checkTime = function () {
                        if ($scope.timespan[type] > maxTime) {
                            $scope.timespan[type] = maxTime;
                        }
                    }
                    //down: 40
                    //right: 39
                    //up: 38
                    //left: 37
                    if (keyCode == 38) {
                        if ($scope.timespan[type] < maxTime) {
                            $scope.timespan[type]++;
                        } else {
                            $scope.timespan[type] = 0;
                        }

                        if (minuteChanged) {
                            if ($scope.timespan[type] == maxTime) {
                                $scope.timespan.hour++;
                                if ($scope.timespan.hour > $scope.format) {
                                    $scope.timespan.hour = hMinTime;
                                }
                            }
                        }

                        if (secondChanged) {
                            if ($scope.timespan[type] == maxTime) {
                                $scope.timespan.minute++;
                                if ($scope.timespan.minute == maxTime) {
                                    $scope.timespan.hour++;
                                    $scope.timespan.minute = 0;
                                }
                            }
                        }
                    }

                    if (keyCode == 40) {
                        if ($scope.timespan[type] > minTime) {
                            $scope.timespan[type]--;
                        } else if ($scope.timespan[type] == minTime) {
                            $scope.timespan[type] = maxTime;
                        }

                        if (minuteChanged) {
                            if ($scope.timespan[type] == minTime) {
                                $scope.timespan.hour--;
                            }
                        }

                        if (secondChanged) {
                            if ($scope.timespan[type] == minTime) {
                                $scope.timespan.minute--;
                            }
                        }
                    }
                }
            }
        };
    })
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
