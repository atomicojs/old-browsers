## Atomic and old browsers

This is a practical exercise that shows how to apply Atomico compatibility to browsers that do not support web-components, in this document you will find:

1. Use of polyfill.
2. Rollup configuration example

## Use of polyfill

Atomico works in old browsers like `ie11` and`edge`, adding the following polyfill:

```html
<!-- 
    polyfill es5 : Promises, Array.prototype.includes, CustomEvent and Symbol.
-->
<script src="//polyfill.io/v3/polyfill.min.js?features=Promise%2CArray.prototype.includes%2CSymbol%2CCustomEvent"></script>
<!--
    polyfill customElement and shadowDom from WebReflection
    //unpkg.com/document-register-element
    //unpkg.com/attachshadow
-->
<script>
  this.customElements ||
    document.write(
      '<script src="//unpkg.com/document-register-element"><\x2fscript><script src="//unpkg.com/attachshadow"><\x2fscript>'
    );
</script>
```

> Atomico is also compatible with the polyfill of [webcomponents.org](https://www.webcomponents.org/polyfills), but does not fill in the use of shadyCss,

#### Limitations of the recommended polyfill

For better compatibility with browsers that do not support web-components, it is recommended to avoid the use of `slot` and `custom-properties`, since the polyfill taught does not complete these requirements

## Rollup configuration example

Example [rollup.config.js](https://github.com/atomicojs/old-browsers/blob/master/example/rollup.config.js).

```jsx
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

const input = "src/index.js";

const JSXBabel = [
  "@babel/plugin-transform-react-jsx",
  {
    pragma: "h"
  }
];

export default [
  {
    input,
    output: {
      format: "iife",
      sourcemap: false,
      file: "dist/index.iife.js",
      name: "bundle"
    },
    plugins: [
      resolve(),
      babel({
        include: ["node_modules/atomico/**", "src/**"],
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                ie: "11"
              }
            }
          ]
        ],
        plugins: [JSXBabel]
      })
    ]
  },
  {
    input,
    output: {
      format: "es",
      sourcemap: true,
      file: "dist/index.js"
    },
    plugins: [
      resolve(),
      babel({
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                edge: "12"
              }
            }
          ]
        ],
        plugins: [JSXBabel]
      })
    ]
  }
];
```

**The exposed configuration generates 2 bundles, one compatible with modern browsers and another with old browsers**

```html
<!--after polyfill-->
<script type="module" src="./dist/index.js"></script>
<script nomodule src="./dist/index.iife.js"></script>
```
