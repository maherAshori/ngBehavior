/*
    SAF Company
    Maher Ashori
    Last Update: 13/04/2015
*/
angular.module("ngBehavior", ["ngSanitize"])
    .directive("ngTags", ["$http", "$filter", function (http, filter) {
        var template = "<div class=\"tag\">" +
                    "<ul class=\"tag-list\">" +
                        "<li ng-repeat=\"tag in tags\" class=\"list\">" +
                            "{{tag}}<span ng-click=\"removeTag(tag, $index)\"><i class=\"fa fa-times-circle-o\"></i></span>" +
                        "</li>" +
                        "<li class=\"has-input\">" +
                            "<input ng-model=\"tag\" ng-change=\"searchTags()\" ng-keydown=\"setTag($event);removeByKey($event);\" placeholder=\"{{language[lang].addNewTag}}\" />" +
                        "</li>" +
                    "</ul>" +
                    "<div ng-show=\"notFound == false && tag\" class=\"text-muted\">{{language[lang].notFound}}</div>" +
                    "<ul class=\"suggestion-tag-list\" ng-show=\"tag && notFound\">" +
                        "<li ng-repeat=\"suggestion in suggestionTagsList\" ng-class=\"{'selected': suggestion.selected}\" ng-click=\"choiceTag(suggestion, $index)\">" +
                        "{{suggestion.title}}</li>" +
                    "</ul>" +
            "</div>";
        return {
            restrict: "E",
            link: function (scope, elem, attrs) {
                elem.click(function () {
                    elem.find("input").select();
                });
                scope.tags = JSON.parse(attrs.setTags);
                scope.lang = attrs.lang;
            },
            template: template,
            controller: function ($scope) {
                $scope.suggestionTagsList = [];
                $scope.tags = [];
                $scope.removedTags = [];

                //########### insert your language if u need #############/
                $scope.language =
                {
                    fa: { notFound: "مورد مشابه یافت نشد", addNewTag: "اضافه کردن تگ جدید" },
                    en: { notFound: "Not Found", addNewTag: "Add New Tag" }
                };

                //########### TAGS: PUSH TAG IN THE TAGS(ARRAY) #############/
                var i = -1;
                var x = 0;

                //########### search In Tags #############/
                $scope.searchTags = function() {
                    if (!$scope.tag) {
                        $scope.suggestionTagsList = [];
                        return false;
                    } else {
                        var y = filter("filter")($scope.allTags, { title: $scope.tag });
                        if (y.length === 0) {
                            $scope.notFound = false;
                        } else {
                            $scope.suggestionTagsList = y;
                            $scope.notFound = true;
                        }
                    }
                }

                $scope.setTag = function (event) {
                    angular.forEach($scope.suggestionTagsList, function (item) {
                        item.selected = false;
                    });

                    var keyCode = event.keyCode;
                    var lastObject = $scope.suggestionTagsList[$scope.suggestionTagsList.length - 1];
                    var lastIndex = $scope.suggestionTagsList.indexOf(lastObject);
                    var map = {};

                    if ($scope.suggestionTagsList.length != 0) {
                        if (keyCode == 40) {
                            map.key = ++i;
                            if (map.key > lastIndex) {
                                $scope.suggestionTagsList[0].selected = true;
                                $scope.tag = $scope.suggestionTagsList[0].title;
                                i = 0;
                                return false;
                            } else {
                                $scope.suggestionTagsList[map.key].selected = true;
                                $scope.tag = $scope.suggestionTagsList[map.key].title;
                            }
                        }

                        if (keyCode == 38) {
                            map.key = --i;
                            if (map.key < 0) {
                                $scope.suggestionTagsList[lastIndex].selected = true;
                                $scope.tag = $scope.suggestionTagsList[lastIndex].title;
                                i = lastIndex;
                                return false;
                            } else {
                                $scope.suggestionTagsList[map.key].selected = true;
                                $scope.tag = $scope.suggestionTagsList[map.key].title;
                            }
                        }
                    }

                    if (!$scope.tag) {
                        return false;
                    } else {
                        if (keyCode == 13) {
                            if ($scope.tags.indexOf($scope.tag) == -1) {
                                $scope.tags.push($scope.tag);
                            }
                            $scope.tag = null;
                            $scope.suggestionTagsList = [];
                            i = -1;
                        }
                    }
                }
                $scope.choiceTag = function (tag, index) {
                    if ($scope.tags.indexOf(tag.title) == -1) {
                        $scope.suggestionTagsList.splice(index, 1);
                        $scope.tags.push(tag.title);
                    }
                    $scope.tag = null;
                    $scope.suggestionTagsList = [];
                };

                //########### TAGS: REMOVE TAG FROM THE TAGS(ARRAY) #############/
                $scope.removeByKey = function (event) {
                    var deleteConfirm;
                    var keyCode = event.keyCode;
                    var lastObject = $scope.tags[$scope.tags.length - 1];
                    var lastIndex = $scope.tags.indexOf(lastObject);
                    if (keyCode == 8 && $scope.tags.length != 0) {
                        if ($scope.tag == null || $scope.tag.length == 0 || $scope.tag.length == undefined) {
                            deleteConfirm = ++x;
                            $(".tag-list li.list").last().addClass("selected");
                            if (deleteConfirm == 2) {
                                $scope.tags.splice(lastIndex, 1);
                                x = 0;
                            }
                        }
                    } else if (keyCode == 32 || $scope.tag != null) {
                        $(".tag-list li.list").last().removeClass("selected");
                        x = 0;
                    }
                };
                $scope.removeTag = function (tag, index) {
                    $scope.tags.splice(index, 1);
                    $scope.removedTags.push(tag);
                };
            }
        };
    }]);
