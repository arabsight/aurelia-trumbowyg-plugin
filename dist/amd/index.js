define(['exports', './trumbowyg-editor', 'aurelia-pal'], function (exports, _trumbowygEditor, _aureliaPal) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.TrumbowygEditor = undefined;
    Object.defineProperty(exports, 'TrumbowygEditor', {
        enumerable: true,
        get: function () {
            return _trumbowygEditor.TrumbowygEditor;
        }
    });
    exports.configure = configure;

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function configure(aureliaConfig, editorConfig) {

        if (!editorConfig || (typeof editorConfig === 'undefined' ? 'undefined' : _typeof(editorConfig)) === 'object') {
            var options = Object.assign({}, defaultConfig, editorConfig);
            aureliaConfig.container.registerInstance('trumbowyg-editor-config', options);
        }

        aureliaConfig.globalResources(_aureliaPal.PLATFORM.moduleName('./trumbowyg-editor'));
    }
});