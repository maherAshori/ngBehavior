/*
    SAF Company;
    Maher Ashori;
    Last Update: 18/03/2015;
*/
angular.module('ngBehavior', ['ngSanitize'])
    .directive('ngLogin', function() {
        var template = '<div class="login-form">' +
            "<label for=\"username\" ng-hide=\"inputLabel == 'true' ? false:true\">{{usernameLabel}}</label>" +
            "<input type=\"text\" id=\"username\" placeholder=\"{{usernameLabel}}\" ng-model=\"loginForm.username\">" +
            "<label for=\"password\" ng-hide=\"inputLabel == 'true' ? false:true\">{{passwordLabel}}</label>" +
            "<input type=\"password\" id=\"password\" placeholder=\"{{passwordLabel}}\" ng-model=\"loginForm.password\">" +
            "<div ng-transclude></div>" +
            "</div>";
        return {
            restrict: 'E',
            transclude: true,
            template: template,
            link: function (scope, elem, attrs, ngModel) {
                scope.loginForm = {username: null, password: null};
                scope.inputLabel = attrs.inputLabel;
                scope.usernameLabel = attrs.usernameLabel;
                scope.passwordLabel = attrs.passwordLabel;

                scope.loginException = function () {
                    if (scope.loginForm.username == null || scope.loginForm.password == null) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        }
    });
