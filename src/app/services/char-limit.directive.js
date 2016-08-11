// limits the number of characters that can be 
// entered into Pik description input.
angular.module('toppiksApp')
  .directive("charLimitTo", [function() {
    return {
      restrict: "A",
      link: function(scope, elem, attrs) {
        var limit = parseInt(attrs.charLimitTo, 10);
        
        angular.element(elem).on("keypress", function(event) {
          if (this.value.length >= limit) {
            event.preventDefault();
            return false;
          }
        });
      }
    };
}]);