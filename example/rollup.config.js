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
