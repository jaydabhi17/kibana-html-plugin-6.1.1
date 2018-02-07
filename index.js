'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (kibana) {

  return new kibana.Plugin({

    uiExports: {
      visTypes: ['plugins/kibana-html-plugin/html']
    }

  });
};

module.exports = exports['default'];
