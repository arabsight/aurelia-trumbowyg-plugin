'use strict';

System.register(['jquery', 'trumbowyg', 'aurelia-pal', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-templating'], function (_export, _context) {
  "use strict";

  var $, DOM, bindingMode, inject, Container, bindable, inlineView, customElement, _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, TrumbowygEditor;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_jquery) {
      $ = _jquery.default;
    }, function (_trumbowyg) {}, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
      Container = _aureliaDependencyInjection.Container;
    }, function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      inlineView = _aureliaTemplating.inlineView;
      customElement = _aureliaTemplating.customElement;
    }],
    execute: function () {
      _export('TrumbowygEditor', TrumbowygEditor = (_dec = inlineView('<template><div ref="editor"></div></template>'), _dec2 = customElement('trumbowyg-editor'), _dec3 = inject(DOM.Element), _dec4 = bindable(), _dec5 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
        function TrumbowygEditor(element) {
          _classCallCheck(this, TrumbowygEditor);

          _initDefineProp(this, 'options', _descriptor, this);

          _initDefineProp(this, 'value', _descriptor2, this);

          this.element = element;
        }

        TrumbowygEditor.prototype.bind = function bind() {
          var editorConfig = Container.instance.get('trumbowyg-editor-config');
          this.options = Object.assign({}, editorConfig, this.options);
        };

        TrumbowygEditor.prototype.attached = function attached() {
          var _this = this;

          var editor = $(this.editor).trumbowyg(this.options);

          this.registerEvents(editor);

          editor.on('tbwchange', function () {
            _this.value = $(_this.editor).trumbowyg('html');
          });

          $(this.editor).trumbowyg('html', this.value);
        };

        TrumbowygEditor.prototype.registerEvents = function registerEvents(editor) {
          var _this2 = this;

          var events = ['tbwfocus', 'tbwblur', 'tbwinit', 'tbwresize', 'tbwpaste', 'tbwopenfullscreen', 'tbwclosefullscreen', 'tbwclose'];

          events.forEach(function (name) {
            editor.on(name, function (event) {
              var _event = new CustomEvent(name, {
                detail: event.target.value,
                bubbles: true
              });
              _this2.element.dispatchEvent(_event);
            });
          });
        };

        TrumbowygEditor.prototype.valueChanged = function valueChanged(newValue) {
          $(this.editor).trumbowyg('html', newValue);
        };

        TrumbowygEditor.prototype.detached = function detached() {
          $(this.editor).trumbowyg('destroy');
        };

        return TrumbowygEditor;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'options', [_dec4], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec5], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class) || _class));

      _export('TrumbowygEditor', TrumbowygEditor);
    }
  };
});