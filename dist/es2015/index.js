import { PLATFORM } from 'aurelia-pal';

export { TrumbowygEditor } from './trumbowyg-editor';

export function configure(aureliaConfig, editorConfig) {

    if (!editorConfig || typeof editorConfig === 'object') {
        let options = Object.assign({}, defaultConfig, editorConfig);
        aureliaConfig.container.registerInstance('trumbowyg-editor-config', options);
    }

    aureliaConfig.globalResources(PLATFORM.moduleName('./trumbowyg-editor'));
}