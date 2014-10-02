"use strict";

var SnapMenu = angular.module('sdx.SnapMenuComponent', [])
  .directive('snapMenu', function(){
    return {
      restrict: 'A',
      replace: true,
      transclude: true,
      scope: {
        onDismissClick: '&',
        open: '='
      },
      template: require('./src/ng-template.html'),
      link: function(scope, el){
        //el.find('.SnapMenu__dismiss').on('click', function(){
        scope.snapMenuDismiss = function(){
          scope.open = false;
          scope.onDismissClick();
        };
      }
    }
  })
;

module.exports = SnapMenu.name;
