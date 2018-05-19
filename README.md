# aurelia-trumbowyg-plugin

## Install

```shell
npm i jquery trumbowyg aurelia-trumbowyg-plugin
```

## Bundle (CLI requirejs)

```json
"jquery",
{
    "name": "trumbowyg",
    "path": "../node_modules/trumbowyg/dist",
    "main": "trumbowyg",
    "deps": ["jquery"],
    "resources": [
        "ui/trumbowyg.css"
    ]
},
{
    "name": "aurelia-trumbowyg-plugin",
    "path": "../node_modules/aurelia-trumbowyg-plugin/dist/amd",
    "main": "index"
}
```

## Register

```js
aurelia.use.plugin('aurelia-trumbowyg-plugin');
```

## Usage

```html
<require from="trumbowyg/ui/trumbowyg.css"></require>

<trumbowyg-editor value.bind="message"></trumbowyg-editor>
```

## Options

For global options pass a trumbowyg config object when registering the plugin:

```js
let options = {
    /* trumbowyg options */
};

aurelia.use.plugin('aurelia-trumbowyg-plugin', options);
```

If you want per-instance options use the bindable `options` property:

```html
<trumbowyg-editor value.bind="content"
        options.bind="{ /* trumbowyg options */ }">
</trumbowyg-editor>
```
