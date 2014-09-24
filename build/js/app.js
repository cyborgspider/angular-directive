angular
  .module('App', [])

  .directive('yoYo', function(){
    return {
      template: '<div class="yo-yo">Yo<span ng-transclude></span>!</div>',
      // templateUrl: 'yo-template.html',
      restrict: 'E',
      transclude: true,
      replace: false
    }
  });
