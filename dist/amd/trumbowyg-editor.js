define(['exports', 'jquery', 'aurelia-pal', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-templating', 'trumbowyg'], function (exports, _jquery, _aureliaPal, _aureliaBinding, _aureliaDependencyInjection, _aureliaTemplating) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.TrumbowygEditor = undefined;

    var _jquery2 = _interopRequireDefault(_jquery);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

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

    var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2;

    var TrumbowygEditor = exports.TrumbowygEditor = (_dec = (0, _aureliaTemplating.inlineView)('<template><div ref="editor"></div></template>'), _dec2 = (0, _aureliaTemplating.customElement)('trumbowyg-editor'), _dec3 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
        function TrumbowygEditor(element) {
            _classCallCheck(this, TrumbowygEditor);

            _initDefineProp(this, 'options', _descriptor, this);

            _initDefineProp(this, 'value', _descriptor2, this);

            this.element = element;
        }

        TrumbowygEditor.prototype.bind = function bind() {
            var editorConfig = _aureliaDependencyInjection.Container.instance.get('trumbowyg-editor-config');
            this.options = Object.assign({}, editorConfig, this.options);
        };

        TrumbowygEditor.prototype.attached = function attached() {
            var _this = this;

            var editor = (0, _jquery2.default)(this.editor).trumbowyg(this.options);

            this.registerEvents(editor);

            editor.on('tbwchange', function () {
                _this.value = (0, _jquery2.default)(_this.editor).trumbowyg('html');
            });

            (0, _jquery2.default)(this.editor).trumbowyg('html', this.value);
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

        TrumbowygEditor.prototype.detached = function detached() {
            (0, _jquery2.default)(this.editor).trumbowyg('destroy');
        };

        return TrumbowygEditor;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'options', [_dec4], {
        enumerable: true,
        initializer: null
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec5], {
        enumerable: true,
        initializer: null
    })), _class2)) || _class) || _class) || _class);
});