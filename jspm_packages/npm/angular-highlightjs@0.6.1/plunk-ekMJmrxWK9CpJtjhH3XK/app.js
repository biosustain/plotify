/* */ 
"format cjs";
var app = angular.module('plunker', ['hljs']);

angular.module('hljs').constant('hljsSupportUnprefixedDirectives', false);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  $scope.phpCode = ['$pageAuth->setGroups( $array = false );','$pageAuth->setGroups( $array = false );','$pageAuth->setGroups( $array = false );'];
});