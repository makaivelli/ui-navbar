angular.module("template/navbar-li.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/navbar-li.html",
    "<li ng-attr-id=\"{{leaf.id ? leaf.id : 'leaf'+$index}}\" ng-class=\"{divider: leaf.name == 'divider', 'visible-xs-inline-block': leaf.mobileOnly, 'disabled': leaf.disabled}\">\n" +
    "    <a ui-sref=\"{{leaf.link}}\" ng-if=\"leaf.name !== 'divider'\"><span class=\"leaf.icon\"></span>{{leaf.name}}</a>\n" +
    "</li>\n" +
    "");
}]);
