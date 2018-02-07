import { uiModules } from 'ui/modules';
import 'angular-sanitize';

const module = uiModules.get('kibana/kibana-html-plugin', ['kibana', 'ngSanitize']);
module.controller('KbnHtmlEditController', function ($scope,$sce) {
  $scope.$watch('vis.params.html', function (html) {
    if (html) {
      //$scope.html = markdownIt.render(html);
      $scope.html = $sce.trustAsHtml(html);
    }
    //$scope.renderComplete();
  });
});
