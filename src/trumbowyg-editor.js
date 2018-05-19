import $ from 'jquery';
import 'trumbowyg';
import { DOM } from 'aurelia-pal';
import { bindingMode } from 'aurelia-binding';
import { inject, Container } from 'aurelia-dependency-injection';
import { bindable, inlineView, customElement } from 'aurelia-templating';

@inlineView('<template><div ref="editor"></div></template>')
@customElement('trumbowyg-editor')
@inject(DOM.Element)
export class TrumbowygEditor {
    @bindable() options;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) value;

    constructor(element) {
        this.element = element;
    }

    bind() {
        let editorConfig = Container.instance.get('trumbowyg-editor-config');
        this.options = Object.assign({}, editorConfig, this.options);
    }

    attached() {
        const editor = $(this.editor).trumbowyg(this.options);

        this.registerEvents(editor);

        editor.on('tbwchange', () => {
            this.value = $(this.editor).trumbowyg('html');
        });

        $(this.editor).trumbowyg('html', this.value);
    }

    registerEvents(editor) {
        const events = [
            'tbwfocus',
            'tbwblur',
            'tbwinit',
            'tbwresize',
            'tbwpaste',
            'tbwopenfullscreen',
            'tbwclosefullscreen',
            'tbwclose'
        ];

        events.forEach((name) => {
            editor.on(name, (event) => {
                const _event = new CustomEvent(name, {
                    detail: event.target.value,
                    bubbles: true
                });
                this.element.dispatchEvent(_event);
            });
        });
    }

    // valueChanged(newValue) {
    //
    // }

    detached() {
        $(this.editor).trumbowyg('destroy');
    }
}
