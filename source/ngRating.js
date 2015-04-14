/*
    SAF Company
    Maher Ashori
    Last Update: 05/04/2015
*/
angular.module('ngBehavior', ['ngSanitize'])
    .directive('ngRating', function () {
        "use strict";
        var template = '<ul class="list-unstyled list-inline">' +
            "<li ng-repeat=\"star in stars\" ng-click=\"returnRate()\">" +
            "<i ng-class=\"star.active ? activeIcon: icon\" tooltip-placement=\"bottom\" tooltip=\"{{$index + 1}} امتیاز\" ng-click=\"rate(star)\">" +
            '</i></li></ul>';
        return {
            restrict: 'E',
            template: template,
            scope: {
                "rateAction": "=",
                icon: "@",
                activeIcon: "@",
                number: "@",
                currentRate: "@",
            },
            link: function (scope) {
                scope.returnRate = function () {
                    scope.rateAction(scope.rateIs);
                }
            },
            controller: function ($scope) {
                $scope.stars = [];
                var star;
                for (star = 0; star < $scope.number; star++) {
                    $scope.stars.push({ star: star, active: false });
                }

                if ($scope.currentRate != undefined) {
                    $scope.rateIs = $scope.currentRate;
                    for (star = 0; star < $scope.currentRate; star++) {
                        $scope.stars[star].active = true;
                    }
                }

                $scope.reset = function () {
                    angular.forEach($scope.stars, function (item) {
                        item.active = false;
                    });
                }

                $scope.rate = function (item) {
                    var length = item.star + 1;
                    $scope.rateIs = length;
                    $scope.reset();
                    for (var i = 0; i < length; i++) {
                        $scope.stars[i].active = true;
                    }
                }
            }
        };
    });
