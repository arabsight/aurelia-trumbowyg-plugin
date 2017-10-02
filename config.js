System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "aurelia-polyfills": "npm:aurelia-polyfills@1.2.2",
    "npm:aurelia-polyfills@1.2.2": {
      "aurelia-pal": "npm:aurelia-pal@1.4.0"
    }
  }
});
