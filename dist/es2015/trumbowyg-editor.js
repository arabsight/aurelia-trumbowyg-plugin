var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
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

import $ from 'jquery';
import 'trumbowyg';
import { DOM } from 'aurelia-pal';
import { bindingMode } from 'aurelia-binding';
import { inject, Container } from 'aurelia-dependency-injection';
import { bindable, inlineView, customElement } from 'aurelia-templating';

export let TrumbowygEditor = (_dec = inlineView('<template><div ref="editor"></div></template>'), _dec2 = customElement('trumbowyg-editor'), _dec3 = inject(DOM.Element), _dec4 = bindable(), _dec5 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class TrumbowygEditor {

  constructor(element) {
    _initDefineProp(this, 'options', _descriptor, this);

    _initDefineProp(this, 'value', _descriptor2, this);

    this.element = element;
  }

  bind() {
    const editorConfig = Container.instance.get('trumbowyg-editor-config');
    this.options = Object.assign({}, editorConfig, this.options);
  }

  updateValue() {
    this.value = $(this.editor).trumbowyg('html');
  }

  attached() {
    const editor = $(this.editor).trumbowyg(this.options);

    this.registerEvents(editor);

    editor.on('tbwchange', () => {
      this.updateValue();
    });

    editor.on('tbwpaste', () => {
      this.updateValue();
    });

    $(this.editor).trumbowyg('html', this.value);
  }

  registerEvents(editor) {
    const events = ['tbwfocus', 'tbwblur', 'tbwinit', 'tbwresize', 'tbwpaste', 'tbwopenfullscreen', 'tbwclosefullscreen', 'tbwclose'];

    events.forEach(name => {
      editor.on(name, event => {
        const _event = new CustomEvent(name, {
          detail: event.target.value,
          bubbles: true
        });
        this.element.dispatchEvent(_event);
      });
    });
  }

  detached() {
    $(this.editor).trumbowyg('destroy');
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'options', [_dec4], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec5], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class);