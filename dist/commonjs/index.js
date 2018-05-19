'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TrumbowygEditor = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _trumbowygEditor = require('./trumbowyg-editor');

Object.defineProperty(exports, 'TrumbowygEditor', {
    enumerable: true,
    get: function get() {
        return _trumbowygEditor.TrumbowygEditor;
    }
});
exports.configure = configure;

var _aureliaPal = require('aurelia-pal');

function configure(aureliaConfig, editorConfig) {
    if (!editorConfig || (typeof editorConfig === 'undefined' ? 'undefined' : _typeof(editorConfig)) === 'object') {
        var options = Object.assign({}, editorConfig);
        aureliaConfig.container.registerInstance('trumbowyg-editor-config', options);
    }

    aureliaConfig.globalResources(_aureliaPal.PLATFORM.moduleName('./trumbowyg-editor'));
}