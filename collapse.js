angular.module('collapse', [])
.directive('collapse', function() {
  return {
    restrict: 'A',
    transclude: true,
    replace: true,
    template: '<div class="wrapper"><div ng-transclude></div></div>',
    link: function(scope, element, attrs) {
      scope.$watch(attrs.collapse, function(isExpanded) {
        element.css('height', isExpanded ? element.children()[0].offsetHeight + 'px' : '0');
      });
    }
  };
});