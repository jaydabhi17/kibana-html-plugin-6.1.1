import { CATEGORY } from 'ui/vis/vis_category';
import htmlVisParamsTemplate from 'plugins/kibana-html-plugin/htmlOptions.html';
import htmlVisTemplate from 'plugins/kibana-html-plugin/html.html';
//import 'plugins/kibana-html-plugin/deps/ace-builds/ace.js';
//import 'plugins/kibana-html-plugin/deps/ace-builds/mode-html.js'
//import 'plugins/kibana-html-plugin/deps/ace-builds/theme-monokai.js'
//import 'plugins/kibana-html-plugin/deps/angular-ui-ace/ui-ace.min.js'
import 'plugins/kibana-html-plugin/html.less'
import 'plugins/kibana-html-plugin/htmlController'
import { VisTypesRegistryProvider } from 'ui/registry/vis_types';
import { VisFactoryProvider } from 'ui/vis/vis_factory';
//import { VisFactoryProvider } from 'ui/template_vis_type/template_vis_type';
import { VisSchemasProvider } from 'ui/vis/editors/default/schemas';

VisTypesRegistryProvider.register(HtmlVisProvider);

function HtmlVisProvider(Private) {
    const VisFactory = Private(VisFactoryProvider);
    //const Schemas = Private(VisSchemasProvider);

    return VisFactory.createAngularVisualization({
      name: 'html',
      title: 'Html widget',
      icon: 'fa-code',
      description: 'Useful for displaying html in dashboards.',
      category: CATEGORY.OTHER,
      visConfig: {
      template: htmlVisTemplate,
      defaults: {
        fontSize: 12
      }
      },
      editorConfig: {
       optionsTemplate: htmlVisParamsTemplate
      },
      requestHandler: 'none',
      responseHandler: 'none',
      implementsRenderComplete: true,
    });
  }

export default HtmlVisProvider;
